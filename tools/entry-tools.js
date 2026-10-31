/* entry-tools.js: small helpers for the weekly publish steps of the Raymond Doan site.

   node entry-tools.js to-json IN.js OUT.json
     IN.js is an entry file as tr-check.js reads it:  global.window = {}; window.BLOG_POSTS = [ { exactly one post } ];
     OUT.json gets that one post as plain JSON (the form build-posts.js and render-check.py read).

   node entry-tools.js figs ENTRY.json|ENTRY.js [SITE_DIR]
     (ENTRY.js is an entry file as for to-json.) Lists the picture files a post uses (every "fig" and "mob" in the English body and in tr.vi.body and tr.es.body),
     one path per line, sorted, without repeats, then a last line starting with OK:. Stops with FAIL if a path is not a
     plain img/NAME file (letters, digits, . _ - only; no folders, no ..). With SITE_DIR it also stops if a listed file
     is missing there, empty or over 300000 bytes, and, for .svg, if it holds anything that can run or load from
     outside: script, foreignObject, iframe, embed, object, event handler attributes (onload=...), javascript: or
     http(s)/protocol-relative links, DOCTYPE or ENTITY. The publish step uses the list as the files to add to the commit.

   node entry-tools.js sample POSTS_JS OUT_DIR [YYYY-MM-DD]
     Builds two throwaway entries for a dry run of the publish steps: a copy of the newest blog post and a copy of the
     newest news post found in POSTS_JS, with new slugs and a made-up date (default 2099-01-02). Writes
     OUT_DIR/entry-blog.js, entry-blog.json, entry-news.js and entry-news.json. POSTS_JS is only read. */
'use strict';
var fs = require('fs');
var path = require('path');
var vm = require('vm');
var assert = require('assert');

var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function loadPosts(file) {
  var sb = { window: {} };
  sb.global = sb;
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), sb, { filename: file });
  var posts = sb.window.BLOG_POSTS;
  assert(Array.isArray(posts), file + ' must define window.BLOG_POSTS as a list');
  return posts;
}
function plain(x) { return JSON.parse(JSON.stringify(x)); }
function asJs(entry) { return 'global.window = {};\nwindow.BLOG_POSTS = [\n' + JSON.stringify(entry, null, 2) + '\n];\n'; }
function asJson(entry) { return JSON.stringify(entry, null, 2) + '\n'; }

function toJson(inFile, outFile) {
  assert(inFile && outFile, 'usage: node entry-tools.js to-json IN.js OUT.json');
  var posts = loadPosts(path.resolve(inFile));
  assert(posts.length === 1, inFile + ' must hold exactly one post, it holds ' + posts.length);
  var entry = plain(posts[0]);
  fs.writeFileSync(outFile, asJson(entry));
  console.log('OK: ' + entry.slug + ' written to ' + outFile);
}

var PIC = /^img\/[A-Za-z0-9._-]+\.(?:svg|png|jpe?g|webp|gif)$/i;
var SVG_BAD = [
  [/<\s*script/i, 'script'], [/<\s*foreignObject/i, 'foreignObject'], [/<\s*(?:iframe|embed|object)\b/i, 'iframe, embed or object'],
  [/\son[a-z]+\s*=/i, 'an event handler attribute'], [/javascript\s*:/i, 'javascript:'],
  [/(?:href|src)\s*=\s*["']\s*(?:https?:|\/\/|data:)/i, 'a link or data URL in href or src'], [/url\(\s*["']?\s*(?:https?:|\/\/)/i, 'an external url()'],
  [/@import/i, '@import'], [/<!\s*(?:DOCTYPE|ENTITY)/i, 'DOCTYPE or ENTITY']
];
function figsOf(entry) {
  var found = [];
  function scan(body) {
    (Array.isArray(body) ? body : []).forEach(function (b) {
      if (b && typeof b === 'object') ['fig', 'mob'].forEach(function (k) { if (b[k] !== undefined) found.push(b[k]); });
    });
  }
  scan(entry.body);
  Object.keys(entry.tr || {}).forEach(function (l) { scan(entry.tr[l] && entry.tr[l].body); });
  return found;
}
function figs(entryFile, siteDir) {
  assert(entryFile, 'usage: node entry-tools.js figs ENTRY.json|ENTRY.js [SITE_DIR]');
  var entry;
  if (/\.js$/i.test(entryFile)) {
    var posts = loadPosts(path.resolve(entryFile));
    assert(posts.length === 1, entryFile + ' must hold exactly one post, it holds ' + posts.length);
    entry = plain(posts[0]);
  } else entry = JSON.parse(fs.readFileSync(entryFile, 'utf8'));
  var list = [];
  figsOf(entry).forEach(function (f) {
    assert(typeof f === 'string' && PIC.test(f) && f.indexOf('..') < 0, 'not a plain img/NAME picture file: ' + JSON.stringify(f));
    if (list.indexOf(f) < 0) list.push(f);
  });
  list.sort();
  if (siteDir) {
    list.forEach(function (f) {
      var full = path.join(path.resolve(siteDir), f);
      assert(fs.existsSync(full), f + ' is not in ' + siteDir);
      var buf = fs.readFileSync(full);
      assert(buf.length > 0 && buf.length <= 300000, f + ' must be between 1 and 300000 bytes, it is ' + buf.length);
      if (/\.svg$/i.test(f)) {
        var txt = buf.toString('utf8');
        assert(/<svg[\s>]/i.test(txt), f + ' does not look like an SVG');
        SVG_BAD.forEach(function (r) { assert(!r[0].test(txt), f + ' holds ' + r[1] + ', which a picture on this site must not have'); });
      }
    });
  }
  list.forEach(function (f) { console.log(f); });
  console.log('OK: ' + list.length + ' picture file(s) used by ' + entry.slug + (siteDir ? ', all present and clean in ' + siteDir : ''));
}

function sample(postsFile, outDir, date) {
  assert(postsFile && outDir, 'usage: node entry-tools.js sample POSTS_JS OUT_DIR [YYYY-MM-DD]');
  date = date || '2099-01-02';
  assert(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(date), 'the date must be written YYYY-MM-DD');
  var posts = loadPosts(path.resolve(postsFile));
  var news = posts.filter(function (p) { return p && p.type === 'news'; })[0];
  var blog = posts.filter(function (p) { return p && p.type !== 'news'; })[0];
  assert(news && blog, 'POSTS_JS needs at least one blog post and one news post to copy');
  var d = date.split('-');
  var b = plain(blog);
  var n = plain(news);
  b.slug = 'selftest-blog-' + date;
  b.date = date;
  n.slug = 'news-' + date;
  n.date = date;
  n.title = 'AI & ICT security news: week ending ' + Number(d[2]) + ' ' + MONTHS[Number(d[1]) - 1] + ' ' + d[0];
  fs.mkdirSync(outDir, { recursive: true });
  [['blog', b], ['news', n]].forEach(function (x) {
    fs.writeFileSync(path.join(outDir, 'entry-' + x[0] + '.js'), asJs(x[1]));
    fs.writeFileSync(path.join(outDir, 'entry-' + x[0] + '.json'), asJson(x[1]));
  });
  console.log('OK: sample entries ' + b.slug + ' and ' + n.slug + ' written to ' + outDir + ' (entry-blog.js/.json, entry-news.js/.json)');
}

var cmd = process.argv[2];
try {
  if (cmd === 'to-json') toJson(process.argv[3], process.argv[4]);
  else if (cmd === 'figs') figs(process.argv[3], process.argv[4]);
  else if (cmd === 'sample') sample(process.argv[3], process.argv[4], process.argv[5]);
  else throw new Error('usage: node entry-tools.js to-json IN.js OUT.json | figs ENTRY.json|ENTRY.js [SITE_DIR] | sample POSTS_JS OUT_DIR [YYYY-MM-DD]');
} catch (e) {
  console.log('FAIL ' + e.message);
  process.exitCode = 1;
}
