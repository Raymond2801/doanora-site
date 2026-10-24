"""Render check for new posts on a local copy of the site (no network needed).

Usage: python3 -I render-check.py SITE_DIR ENTRY.json [ENTRY2.json ...]
SITE_DIR holds the 15 site files with the new posts already in posts.js. Each ENTRY.json is the post object that was
added (the same JSON file given to build-posts.js). The expected texts come straight from those JSON files, not from
the site code, so a wrong or missing translation, a lost heading, a wrong source link or a post in the wrong list
shows up as a FAIL line.

For every post, in English, Vietnamese and Spanish, on a phone (375px) and a desktop (1280px) screen:
  post.html#<slug>: no script errors, right page language, heading, tab title, body item for item (paragraphs and
    subheadings, exact text), tag, no "only available in English" note, sources (text, link, opens in a new tab),
    back link, no sideways scroll.
  blog.html: the post is in the list of its own type (right title, link, tag and summary) and not in the other list.
  index.html: the post is among the first 3 rows of its type in the home page preview.
Prints one FAIL line per problem and ends with RENDER OK (exit 0) or a FAILED line (exit 1)."""
import json
import os
import re
import sys

from playwright.sync_api import sync_playwright

if len(sys.argv) < 3:
    raise SystemExit('usage: python3 -I render-check.py SITE_DIR ENTRY.json [ENTRY2.json ...]')
SITE = os.path.abspath(sys.argv[1])
BASE = 'file://' + SITE + '/'
entries = [json.load(open(p, encoding='utf-8')) for p in sys.argv[2:]]
fails = []
checks = 0


def check(ok, label, detail=''):
    global checks
    checks += 1
    if not ok:
        fails.append(label)
        print('FAIL ' + label + ((' | ' + str(detail)[:300]) if detail != '' else ''))


def norm(href):
    # the site adds ?lang=xx to its own links so the chosen language follows the visitor
    return re.sub(r'\?lang=(en|vi|es)', '', href or '')


def kind_of(x):
    if isinstance(x, str):
        return 'p'
    if not isinstance(x, dict):
        return ''
    if x.get('h'):
        return 'h'
    if isinstance(x.get('ul'), list):
        return 'ul'
    if isinstance(x.get('ol'), list):
        return 'ol'
    if isinstance(x.get('table'), dict):
        return 'table'
    if x.get('fig'):
        return 'fig'
    return ''


def bold(s):
    # the site turns **x** into <strong>x</strong>; markers that do not pair up are shown as written
    parts = s.split('**')
    return s if len(parts) % 2 == 0 else ''.join(parts)


def size_of(a):
    return [round(a[0]), round(a[1])] if isinstance(a, list) and len(a) == 2 and a[0] > 0 and a[1] > 0 else None


def view(entry, lang):
    src = entry if lang == 'en' else entry['tr'][lang]
    body = src['body']
    if lang != 'en':
        # a translated picture keeps the English file and sizes unless the translation names its own (site.js localizePost)
        merged = []
        for en_item, item in zip(entry['body'], body):
            if kind_of(en_item) != 'fig':
                merged.append(item)
                continue
            c = dict(en_item)
            for k in ('fig', 'mob', 'alt', 'cap'):
                if isinstance(item.get(k), str) and item[k]:
                    c[k] = item[k]
            for k in ('size', 'msize'):
                if size_of(item.get(k)):
                    c[k] = item[k]
            merged.append(c)
        body = merged
    return {'title': src['title'], 'tag': src.get('tag', ''), 'summary': src.get('summary', ''), 'body': body}


def want_item(b):
    k = kind_of(b)
    if k == 'p':
        return ['P', bold(b)]
    if k == 'h':
        return ['H2', b['h']]
    if k in ('ul', 'ol'):
        return [k.upper(), [bold(t) for t in b[k]]]
    if k == 'table':
        t = b['table']
        return ['TABLE', {'head': t['head'], 'rows': [[bold(c) for c in r] for r in t['rows']]}]
    if k == 'fig':
        return ['FIGURE', {'src': b['fig'], 'alt': b.get('alt', ''), 'cap': b.get('cap') or None, 'size': size_of(b.get('size')),
                           'mob': b.get('mob'), 'msize': size_of(b.get('msize'))}]
    return ['?', None]


GOT_JS = """() => Array.from(document.querySelectorAll('.post-body > *')).map(n => {
  const num = v => v === null ? null : Number(v);
  if (n.tagName === 'UL' || n.tagName === 'OL') return [n.tagName, Array.from(n.children).map(li => li.textContent)];
  if (n.classList.contains('table-wrap')) {
    const t = n.querySelector('table');
    return ['TABLE', {head: Array.from(t.querySelectorAll('thead th')).map(c => c.textContent),
                      rows: Array.from(t.querySelectorAll('tbody tr')).map(r => Array.from(r.children).map(c => c.textContent))}];
  }
  if (n.tagName === 'FIGURE') {
    const img = n.querySelector('img'), src = n.querySelector('source'), cap = n.querySelector('figcaption');
    const wh = (e, a, b) => e && e.getAttribute(a) !== null ? [num(e.getAttribute(a)), num(e.getAttribute(b))] : null;
    return ['FIGURE', {src: img.getAttribute('src'), alt: img.getAttribute('alt'), cap: cap ? cap.textContent : null,
                       size: wh(img, 'width', 'height'), mob: src ? src.getAttribute('srcset') : null, msize: wh(src, 'width', 'height')}];
  }
  return [n.tagName, n.textContent];
})"""


def kind(entry):
    return 'news' if entry.get('type') == 'news' else 'blog'


def open_page(browser, url, width):
    ctx = browser.new_context(viewport={'width': width, 'height': 900})
    page = ctx.new_page()
    errors = []
    page.on('pageerror', lambda e: errors.append('pageerror: ' + str(e)[:160]))
    page.on('console', lambda m: errors.append('console: ' + m.text[:160]) if m.type == 'error' and 'Failed to load resource' not in m.text else None)
    page.route('**/*', lambda r: r.continue_() if r.request.url.startswith('file:') else r.abort())
    page.goto(url, wait_until='load')
    page.wait_for_timeout(250)
    return ctx, page, errors


def rows(page, selector):
    return page.evaluate("""(sel) => Array.from(document.querySelectorAll(sel + ' .post-row')).map(r => ({
        text: r.querySelector('h3 a').textContent, href: r.querySelector('h3 a').getAttribute('href'),
        meta: r.querySelector('.meta').textContent, summary: (r.querySelector('.summary') || {textContent: ''}).textContent,
        lang: r.getAttribute('lang') }))""", selector)


def find_row(rs, slug):
    for i, r in enumerate(rs):
        if norm(r['href']) == 'post.html#' + slug:
            return i, r
    return -1, None


with sync_playwright() as pw:
    browser = pw.chromium.launch()
    for lang in ('en', 'vi', 'es'):
        for entry in entries:
            v = view(entry, lang)
            slug = entry['slug']
            for width in (375, 1280):
                at = '%s %s %d' % (slug, lang, width)
                ctx, page, errors = open_page(browser, BASE + 'post.html?lang=' + lang + '#' + slug, width)
                check(not errors, at + ': no script errors', errors[:2])
                check(page.evaluate('document.documentElement.lang') == lang, at + ': page language')
                check(page.evaluate("document.getElementById('not-found').hidden") is True, at + ': not "post not found"')
                h1 = page.locator('h1').first.inner_text() if page.locator('h1').count() else ''
                check(page.locator('h1').count() == 1 and h1 == v['title'], at + ': heading', h1)
                check(page.title() == v['title'] + ' | Raymond Doan', at + ': tab title', page.title())
                got = page.evaluate(GOT_JS)
                want = [want_item(b) for b in v['body']]
                check(got == want, at + ': body matches item for item (%d items)' % len(want), '%d got vs %d wanted' % (len(got), len(want)))
                if got != want and len(got) == len(want):
                    for gi, (g, w2) in enumerate(zip(got, want)):
                        if g != w2:
                            print('  item %d: got %s | wanted %s' % (gi, str(g)[:200], str(w2)[:200]))
                            break
                for fig in page.query_selector_all('.post-body figure img'):
                    check(fig.evaluate('i => i.complete && i.naturalWidth > 0'), at + ': picture loads', fig.get_attribute('src'))
                meta = page.locator('article .meta').first.inner_text()
                check(v['tag'] in meta, at + ': tag shown', meta)
                check(page.locator('article .note').count() == 0, at + ': no "only available in English" note')
                if lang != 'en':
                    check(page.locator('article [lang="en"]').count() == 0, at + ': no English-only marking')
                srcs = page.evaluate("""() => Array.from(document.querySelectorAll('.sources ol li a')).map(a => [a.textContent, a.getAttribute('href'), a.target, a.rel])""")
                want_src = [[s['title'], s['url'], '_blank', 'noopener noreferrer'] for s in entry.get('sources', [])]
                check(srcs == want_src, at + ': sources (%d)' % len(want_src), '%d got' % len(srcs))
                check(page.evaluate('document.documentElement.scrollWidth <= window.innerWidth + 1'), at + ': no sideways scroll')
                back = page.locator('a.back-link').first.get_attribute('href')
                check(norm(back) == ('blog.html#news' if kind(entry) == 'news' else 'blog.html#personal') and ('lang=' + lang in back or lang == 'en'), at + ': back link', back)
                ctx.close()

        for width in (375, 1280):
            at = 'blog.html %s %d' % (lang, width)
            ctx, page, errors = open_page(browser, BASE + 'blog.html?lang=' + lang, width)
            check(not errors, at + ': no script errors', errors[:2])
            lists = {'blog': rows(page, '#list-blog'), 'news': rows(page, '#list-news')}
            check(page.evaluate('document.documentElement.scrollWidth <= window.innerWidth + 1'), at + ': no sideways scroll')
            ctx.close()
            for entry in entries:
                v = view(entry, lang)
                own, other = kind(entry), ('blog' if kind(entry) == 'news' else 'news')
                i, r = find_row(lists[own], entry['slug'])
                check(r is not None, at + ': ' + entry['slug'] + ' is in the ' + own + ' list')
                if r is not None:
                    check(r['text'] == v['title'], at + ': ' + entry['slug'] + ' row title', r['text'])
                    check(v['tag'] in r['meta'], at + ': ' + entry['slug'] + ' row tag', r['meta'])
                    check(r['summary'] == v['summary'], at + ': ' + entry['slug'] + ' row summary', r['summary'])
                    check(r['lang'] is None, at + ': ' + entry['slug'] + ' row not marked English-only')
                check(find_row(lists[other], entry['slug'])[1] is None, at + ': ' + entry['slug'] + ' is not in the ' + other + ' list')

            at = 'index.html %s %d' % (lang, width)
            ctx, page, errors = open_page(browser, BASE + 'index.html?lang=' + lang, width)
            check(not errors, at + ': no script errors', errors[:2])
            previews = {'blog': rows(page, '#preview-blog'), 'news': rows(page, '#preview-news')}
            check(page.evaluate('document.documentElement.scrollWidth <= window.innerWidth + 1'), at + ': no sideways scroll')
            ctx.close()
            for entry in entries:
                v = view(entry, lang)
                i, r = find_row(previews[kind(entry)], entry['slug'])
                check(r is not None and i < 3, at + ': ' + entry['slug'] + ' is in the home preview', i)
                if r is not None:
                    check(r['text'] == v['title'], at + ': ' + entry['slug'] + ' home preview title', r['text'])
    browser.close()

print('%d checks, %d failed' % (checks, len(fails)))
if fails:
    print('FAILED: ' + '; '.join(fails[:12]))
    sys.exit(1)
print('RENDER OK')
