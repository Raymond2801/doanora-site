"""Arcade check. Usage: python3 -I arcade-check.py SITE_DIR
Checks nav on all pages at several widths/languages, the Arcade page, and plays all four games."""
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
    check(p.locator('a[href="zen-garden.html"]').count() >= 1 and p.locator('a[href="phishing-hunter.html"]').count() >= 1, 'arcade links to the adult games')
    check(p.locator('a[href="koi-pond.html"]').count() >= 1 and p.locator('a[href="nonogram.html"]').count() >= 1, 'arcade links to koi and nonogram')
    check(p.locator('canvas.thumb').count() == 6, 'six thumbnails')
    ctx.close()
    # Zen Garden
    ctx, p, errs = open_page(b, 'zen-garden.html')
    check(p.evaluate('typeof window.__zen') == 'object', 'zen hook')
    box = p.locator('#garden').bounding_box()
    p.mouse.move(box['x'] + 100, box['y'] + box['height'] * 0.7); p.mouse.down(); p.mouse.move(box['x'] + 300, box['y'] + box['height'] * 0.75, steps=8); p.mouse.up()
    p.wait_for_timeout(100)
    n_rake = p.evaluate('window.__zen.sandCount()')
    check(n_rake > 0, 'zen: raking changes sand')
    p.reload(); p.wait_for_timeout(200)
    check(p.evaluate('window.__zen.sandCount()') > 0, 'zen: garden persists after reload')
    p.mouse.move(box['x'] + 200, box['y'] + 460); p.mouse.down(); p.mouse.move(box['x'] + 500, box['y'] + 480, steps=8); p.mouse.up()
    n_more = p.evaluate('window.__zen.sandCount()')
    p.click('#undo')
    check(p.evaluate('window.__zen.sandCount()') < n_more, 'zen: undo removes the last stroke')
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
    # Koi Pond
    ctx, p, errs = open_page(b, 'koi-pond.html')
    check(p.evaluate('window.__koi.fish()') >= 3, 'koi: fish are swimming')
    box = p.locator('#pond').bounding_box(); sc = box['width'] / 192
    p.mouse.move(box['x'] + 100 * sc, box['y'] + 60 * sc); p.mouse.down(); p.mouse.move(box['x'] + 120 * sc, box['y'] + 70 * sc, steps=6); p.mouse.up()
    check(p.evaluate('window.__koi.food()') > 0, 'koi: feeding drops food')
    p.wait_for_timeout(5000)
    check(p.evaluate('window.__koi.eaten()') > 0, 'koi: fish eat the food')
    check(not errs, 'koi: no errors', errs[:2]); ctx.close()
    # Pixel Nonogram
    ctx, p, errs = open_page(b, 'nonogram.html')
    check(p.evaluate('window.__nono.puzzles()') == 13, 'nono: 13 puzzles')
    sol = p.evaluate('window.__nono.solution()'); m = len(sol[0]); cells = p.locator('.cell')
    for r in range(len(sol)):
        for c in range(m):
            if sol[r][c] == '1':
                a = cells.nth(r * m + c).bounding_box()
                p.mouse.click(a['x'] + a['width'] / 2, a['y'] + a['height'] / 2)
    p.wait_for_timeout(300)
    check(p.evaluate('window.__nono.solved()'), 'nono: clicking the solution solves the puzzle')
    p.reload(); p.wait_for_timeout(200)
    check(p.evaluate('window.__nono.solved()') and p.locator('.pick.done').count() == 1, 'nono: progress persists after reload')
    check(not errs, 'nono: no errors', errs[:2]); ctx.close()
    b.close()
print('%d checks, %d failed' % (n, len(fails)))
if fails: print('FAILED: ' + '; '.join(fails[:12])); sys.exit(1)
print('ARCADE OK')
