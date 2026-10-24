# automation-tools

Check scripts for the weekly blog and news publishing task of doanora.com.

This branch is not part of the website. The site is served from `main` only, and nothing on this branch is ever merged into it.

## Files in tools/

The hash is the SHA-256 of the exact file bytes (`sha256sum`), first 12 hex characters.

| File | SHA-256 | What it does |
| --- | --- | --- |
| tr-check.js | 8631185d7bce | Checks one blog or news entry: English text, Vietnamese and Spanish translations. |
| entry-tools.js | afabc002df71 | Converts an entry file to JSON; builds throwaway sample entries for a dry run. |
| build-posts.js | d2f7f5869514 | Adds entries at the start of posts.js and proves the old posts did not change. |
| i18n-check.js | 6b9bfc2c0800 | Checks translations, house text rules and markup safety for the whole site. |
| smoke.py | c95d7c54487d | Opens every page in three languages in a headless browser (Playwright). |
| render-check.py | db0573f3f94c | Checks that new posts show correctly on the post, blog and home pages. |

## Order of use

1. `node tools/tr-check.js entry.js --repo SITE_DIR` for each entry (last line `TR OK`).
2. `node tools/entry-tools.js to-json entry.js entry.json` for each entry.
3. `node tools/build-posts.js SITE_DIR/posts.js posts.new.js entry.json ...` (prints `OK:`).
4. Copy the site to a scratch folder, put posts.new.js there as posts.js, then run:
   - `node tools/i18n-check.js SCRATCH` (`0 failed`)
   - `python3 -I tools/smoke.py SCRATCH` (`SMOKE OK`)
   - `python3 -I tools/render-check.py SCRATCH entry.json ...` (`RENDER OK`)

For a dry run, `node tools/entry-tools.js sample SITE_DIR/posts.js OUT_DIR` writes two sample entries dated 2099-01-02.
