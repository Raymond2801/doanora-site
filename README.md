# automation-tools

Check scripts for the weekly blog and news publishing task of doanora.com.

This branch is not part of the website. The site is served from `main` only, and nothing on this branch is ever merged into it.

## Files in tools/

The hash is the SHA-256 of the exact file bytes (`sha256sum`), first 12 hex characters.

| File | SHA-256 | What it does |
| --- | --- | --- |
| tr-check.js | 8631185d7bce | Checks one blog or news entry: English text, Vietnamese and Spanish translations. |
| entry-tools.js | c42d62eab1b8 | Converts an entry file to JSON; lists and checks a post's picture files (`figs`); builds throwaway sample entries for a dry run. |
| build-posts.js | 496a9ad7169f | Adds entries at the start of posts.js (paragraphs, subheadings, lists, tables, pictures) and proves the old posts did not change. |
| i18n-check.js | 6b9bfc2c0800 | Checks translations, house text rules and markup safety for the whole site. |
| smoke.py | c95d7c54487d | Opens every page in three languages in a headless browser (Playwright). |
| render-check.py | 740b922ea983 | Checks that new posts show correctly on the post, blog and home pages, including which picture file loads at 375px and 1280px. |

## Order of use

1. `node tools/tr-check.js entry.js --repo SITE_DIR` for each entry (last line `TR OK`).
2. `node tools/entry-tools.js to-json entry.js entry.json` for each entry.
3. `node tools/build-posts.js SITE_DIR/posts.js posts.new.js entry.json ...` (prints `OK:`).
4. Copy the site to a scratch folder, put posts.new.js there as posts.js, then run:
   - `node tools/i18n-check.js SCRATCH` (`0 failed`)
   - `python3 -I tools/smoke.py SCRATCH` (`SMOKE OK`)
   - `python3 -I tools/render-check.py SCRATCH entry.json ...` (`RENDER OK`)

A post with pictures: the SVG files go in a folder laid out like the site (`FIGS/img/NAME.svg`). Before step 1 run
`node tools/entry-tools.js figs entry.js FIGS` (last line `OK:`; it prints the picture list), copy those files into the
site clone and the scratch site (`cp --parents`), and commit `posts.js` plus exactly that list. Existing files in `img/`
are never changed. See the publish steps in the scheduled task prompt.

For a dry run, `node tools/entry-tools.js sample SITE_DIR/posts.js OUT_DIR` writes two sample entries dated 2099-01-02.
