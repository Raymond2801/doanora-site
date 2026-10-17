"""Arcade check. Usage: python3 -I arcade-check.py SITE_DIR
Checks nav on all pages at several widths/languages, the Arcade page, and plays both games."""
import os, sys
from playwright.sync_api import sync_playwright
SITE = os.path.abspath(sys.argv[1]); BASE = 'file://' + SITE + '/'
fails = []; n = 0
def check(ok, label, d=''):
    global n; n += 1
    if not ok: fails.append(label)
    print(('PASS ' if ok else 'FAIL ') + label + ((' | ' + str(d)) if d != '' else ''))
def open_page(b, rel, w=1280, h=900):
    ctx = b.new_context(viewport={'width': w, 'height': h}); p = ctx.new_page(); errs = []
    p.on('pageerror', lambda e: errs.append(str(e)[:160]))
    p.on('console', lambda m: errs.append(m.text[:160]) if m.type == 'error' and 'Failed to load' not in m.text else None)
    p.route('**/*', lambda r: r.continue_() if r.request.url.startswith('file:') else r.abort())
    p.goto(BASE + rel); p.wait_for_timeout(200); return ctx, p, errs
with sync_playwright() as pw:
    b = pw.chromium.launch()
    pages = ['index.html', 'products.html', 'product.html#winston', 'blog.html', 'arcade.html']
    for lang in ('en', 'vi', 'es'):
        for w in (320, 375, 414, 768, 1280):
            for pg in pages:
                rel = pg if lang == 'en' else (pg.split('#')[0] + '?lang=' + lang + ('#' + pg.split('#')[1] if '#' in pg else ''))
                ctx, p, errs = open_page(b, rel, w)
                ok = p.evaluate('document.documentElement.scrollWidth <= innerWidth + 1')
                check(ok and not errs, '%s %s %d: no overflow, no errors' % (lang, pg, w), errs[:1])
                ctx.close()
    ctx, p, errs = open_page(b, 'arcade.html')
    check(p.locator('a[href="zen-garden.html"]').count() >= 1 and p.locator('a[href="phishing-hunter.html"]').count() >= 1, 'arcade links to both games')
    check(p.locator('canvas.thumb').count() == 4, 'four thumbnails')
    ctx.close()
    # Zen Garden
    ctx, p, errs = open_page(b, 'zen-garden.html')
    check(p.evaluate('typeof window.__zen') == 'object', 'zen hook')
    box = p.locator('#garden').bounding_box()
    p.mouse.move(box['x'] + 100, box['y'] + box['height'] * 0.7); p.mouse.down(); p.mouse.move(box['x'] + 300, box['y'] + box['height'] * 0.75, steps=8); p.mouse.up()
    p.wait_for_timeout(100)
    check(p.evaluate('window.__zen.sandCount()') > 0, 'zen: raking changes sand')
    p.reload(); p.wait_for_timeout(200)
    check(p.evaluate('window.__zen.sandCount()') > 0, 'zen: garden persists after reload')
    p.click('#smooth'); p.click('[data-tool=draw]')
    check(p.evaluate('window.__zen.sandCount()') == 0, 'zen: smooth sand clears the sand')
    box = p.locator('#garden').bounding_box()
    p.mouse.move(box['x'] + 200, box['y'] + 300); p.mouse.down(); p.mouse.move(box['x'] + 400, box['y'] + 350, steps=8); p.mouse.up()
    n_draw = p.evaluate('window.__zen.sandCount()')
    check(n_draw > 20, 'zen: draw tool cuts a line', n_draw)
    p.click('#undo')
    check(p.evaluate('window.__zen.sandCount()') == 0, 'zen: undo removes the stroke')
    check(not errs, 'zen: no errors', errs[:2]); ctx.close()
    # Phishing Hunter
    ctx, p, errs = open_page(b, 'phishing-hunter.html')
    E = p.evaluate('window.PH_EMAILS')
    check(len(E) >= 20 and sum(1 for e in E if e['phish']) >= 10 and sum(1 for e in E if not e['phish']) >= 10, 'phish: enough messages of both kinds', len(E))
    check(all(('.example' in (e['addr'] or '.example')) for e in E), 'phish: all addresses are .example')
    p.click('text=START')
    for i in range(10):
        p.keyboard.press('s'); p.wait_for_timeout(40); p.keyboard.press('Enter'); p.wait_for_timeout(40)
    check('OF 10' in p.inner_text('#desk'), 'phish: round ends with result screen')
    check(p.evaluate("localStorage.getItem('rd-phishing-hunter-v1')") is not None, 'phish: best score saved')
    check(not errs, 'phish: no errors', errs[:2]); ctx.close()
    b.close()
print('%d checks, %d failed' % (n, len(fails)))
if fails: print('FAILED: ' + '; '.join(fails[:12])); sys.exit(1)
print('ARCADE OK')
