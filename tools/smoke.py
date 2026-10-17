"""Render smoke test for the Raymond Doan site.

Usage: python3 -I smoke.py SITE_DIR
SITE_DIR holds a local copy of all the artifact files: index.html, products.html, product.html, blog.html,
post.html, products-data.js, catalog.js, site.js, posts.js, styles.css, i18n.js, ui-vi.js, ui-es.js,
products-vi.js and products-es.js (with the new data in products-data.js).
Checks every page in English, then in Vietnamese and Spanish (?lang=vi, ?lang=es).
Prints one PASS/FAIL line per check and exits 1 if anything fails. It does not need the network:
every request that is not a local file is blocked on purpose.
"""
import json
import os
import subprocess
import sys

from playwright.sync_api import sync_playwright

SITE = os.path.abspath(sys.argv[1])
BASE = 'file://' + SITE + '/'
fails = []
checks = 0


def check(ok, label, detail=''):
    global checks
    checks += 1
    if not ok:
        fails.append(label)
    print(('PASS ' if ok else 'FAIL ') + label + ((' | ' + str(detail)) if detail != '' else ''))


data = json.loads(subprocess.check_output([
    'node', '-e',
    'global.window={};require(process.argv[1]);console.log(JSON.stringify(window.PRODUCTS))',
    os.path.join(SITE, 'products-data.js')]))
on = [p for p in data if p.get('status') != 'off']
off = [p for p in data if p.get('status') == 'off']
featured = [p for p in on if p.get('featured') is True]
personal = [p for p in on if p.get('audience') == 'Personal']
sme = [p for p in on if p.get('audience') == 'SME']
slugs_on = {p['slug'] for p in on}


def price_text(p):
    if p['status'] == 'soon':
        return 'Coming soon'
    if p['status'] == 'free':
        return 'Free'
    return p.get('price', '')


def open_page(browser, url, width=1280, height=900):
    ctx = browser.new_context(viewport={'width': width, 'height': height})
    page = ctx.new_page()
    errors = []
    page.on('pageerror', lambda e: errors.append('pageerror: ' + str(e)[:160]))
    page.on('console', lambda m: errors.append('console: ' + m.text[:160]) if m.type == 'error' and 'Failed to load resource' not in m.text else None)
    page.route('**/*', lambda r: r.continue_() if r.request.url.startswith('file:') else r.abort())
    page.goto(url, wait_until='load')
    page.wait_for_timeout(150)
    return ctx, page, errors


def no_overflow(page):
    return page.evaluate('document.documentElement.scrollWidth <= window.innerWidth + 1')


with sync_playwright() as pw:
    browser = pw.chromium.launch()

    # ---- Products page and Start page lists
    for width, tag in ((1280, 'desktop'), (375, 'phone')):
        ctx, page, errors = open_page(browser, BASE + 'products.html', width)
        n_feat = page.locator('[data-catalog="featured"] article.feature').count()
        n_pers = page.locator('[data-catalog="personal"] li.row').count()
        n_sme = page.locator('[data-catalog="sme"] li.row').count()
        check(not errors, 'products.html ' + tag + ': no script errors', errors[:2])
        check(n_feat == len(featured), 'products.html ' + tag + ': featured cards', '%d of %d' % (n_feat, len(featured)))
        check(n_pers == len(personal), 'products.html ' + tag + ': personal rows', '%d of %d' % (n_pers, len(personal)))
        check(n_sme == len(sme), 'products.html ' + tag + ': SME rows', '%d of %d' % (n_sme, len(sme)))
        check(no_overflow(page), 'products.html ' + tag + ': no sideways scroll')
        body = page.inner_text('body')
        missing = [p['name'] for p in on if p['name'] not in body]
        check(not missing, 'products.html ' + tag + ': every product name is shown', missing)
        gone = [p['name'] for p in off if p['name'] in body]
        check(not gone, 'products.html ' + tag + ': hidden products are not shown', gone)
        ctx.close()

        ctx, page, errors = open_page(browser, BASE + 'index.html', width)
        n_feat = page.locator('[data-catalog="featured"] article.feature').count()
        check(not errors, 'index.html ' + tag + ': no script errors', errors[:2])
        check(n_feat == len(featured), 'index.html ' + tag + ': featured cards', '%d of %d' % (n_feat, len(featured)))
        check(no_overflow(page), 'index.html ' + tag + ': no sideways scroll')
        ctx.close()

    # ---- Blog pages still load
    for name in ('blog.html', 'blog.html#news'):
        ctx, page, errors = open_page(browser, BASE + name)
        check(not errors, name + ': no script errors', errors[:2])
        ctx.close()

    # ---- Every product page
    for p in on:
        for width, tag in ((1280, 'd'), (375, 'm')):
            ctx, page, errors = open_page(browser, BASE + 'product.html#' + p['slug'], width)
            at = 'product ' + p['slug'] + ' ' + tag
            check(not errors, at + ': no script errors', errors[:2])
            h1 = page.locator('h1').first.inner_text() if page.locator('h1').count() else ''
            check(h1 == p['name'], at + ': heading is the product name', h1)
            check(no_overflow(page), at + ': no sideways scroll')
            if tag == 'd':
                tags = page.locator('.tag-row').text_content()
                if p['status'] == 'live':
                    check('Available now' in tags, at + ': tagged Available now')
                elif p['status'] == 'free':
                    check('Free to play' in tags, at + ': tagged Free to play')
                else:
                    check('Coming soon' in tags, at + ': tagged Coming soon')
                buy = page.locator('.buy-row').inner_text()
                if p['status'] in ('live', 'free'):
                    check(price_text(p) in buy, at + ': price shown', price_text(p))
                    ctas = page.locator('.buy-row a.btn-primary')
                    check(ctas.count() == 1 and ctas.first.get_attribute('href') == p['cta']['url'], at + ': buy button goes to the listing')
                    side = page.locator('.aside-card a.btn-primary')
                    check(side.count() == 1 and side.first.get_attribute('href') == p['cta']['url'], at + ': side buy button goes to the listing')
                else:
                    check(page.locator('.buy-row a.btn-primary').count() == 0, at + ': no buy button while not on sale')
                if p.get('was') and p['status'] == 'live':
                    check(page.locator('.buy-row .was').count() == 1, at + ': usual price shown', p['was'])
                else:
                    check(page.locator('.buy-row .was').count() == 0, at + ': no usual price')
                rel_expected = [r for r in (p.get('related') or []) if r in slugs_on][:3]
                rel_hrefs = [a.get_attribute('href') for a in page.locator('#related-grid a.related-card').all()]
                check(rel_hrefs == ['product.html#' + r for r in rel_expected], at + ': related cards', rel_hrefs)
                n_facts = page.locator('dl.facts > div').count()
                check(n_facts == len(p.get('facts') or []), at + ': facts shown', n_facts)
                for sec in p.get('sections') or []:
                    if sec.get('items'):
                        rows = page.locator('.product-section .catalog li.row').count()
                        check(rows == len(sec['items']), at + ': bundle rows', '%d of %d' % (rows, len(sec['items'])))
            ctx.close()

    # ---- Hidden and unknown products
    for slug in [p['slug'] for p in off] + ['no-such-product']:
        ctx, page, errors = open_page(browser, BASE + 'product.html#' + slug)
        shown = page.locator('#not-found').is_visible()
        check(shown and not errors, 'product ' + slug + ': shows "not found"', errors[:2])
        ctx.close()

    # ---- Vietnamese and Spanish: every page still renders. A product with no translation yet shows its
    # English text, which is allowed; it is listed in a NOTE line, not counted as a failure.
    untranslated = {'vi': [], 'es': []}
    for lang in ('vi', 'es'):
        targets = [('index.html', 'index.html?lang=' + lang), ('products.html', 'products.html?lang=' + lang)]
        targets += [('product ' + p['slug'], 'product.html?lang=' + lang + '#' + p['slug']) for p in on]
        for label, rel in targets:
            ctx, page, errors = open_page(browser, BASE + rel, 375)
            at = lang + ' ' + label
            check(not errors, at + ': no script errors', errors[:2])
            st = page.evaluate("() => ({ lang: document.documentElement.lang, pending: document.documentElement.classList.contains('i18n-pending') })")
            check(st['lang'] == lang and not st['pending'], at + ': shown in the chosen language', st)
            check(no_overflow(page), at + ': no sideways scroll')
            if label.startswith('product '):
                slug = label[len('product '):]
                name = [p['name'] for p in on if p['slug'] == slug][0]
                h1 = page.locator('h1').first.inner_text() if page.locator('h1').count() else ''
                check(h1 == name, at + ': heading is the product name', h1)
                if page.locator('main [lang="en"]').count():
                    untranslated[lang].append(slug)
            ctx.close()
    for lang in ('vi', 'es'):
        if untranslated[lang]:
            print('NOTE ' + lang + ': no translation yet for ' + ', '.join(untranslated[lang]) + ' (the English text shows instead)')

    browser.close()

print('%d checks, %d failed' % (checks, len(fails)))
if fails:
    print('FAILED: ' + '; '.join(fails[:12]))
    sys.exit(1)
print('SMOKE OK')
