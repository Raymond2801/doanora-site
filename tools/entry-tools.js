/* entry-tools.js: small helpers for the weekly publish steps of the Raymond Doan site.

   node entry-tools.js to-json IN.js OUT.json
     IN.js is an entry file as tr-check.js reads it:  global.window = {}; window.BLOG_POSTS = [ { exactly one post } ];
     OUT.json gets that one post as plain JSON (the form build-posts.js and render-check.py read).

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
  else if (cmd === 'sample') sample(process.argv[3], process.argv[4], process.argv[5]);
  else throw new Error('usage: node entry-tools.js to-json IN.js OUT.json | sample POSTS_JS OUT_DIR [YYYY-MM-DD]');
} catch (e) {
  console.log('FAIL ' + e.message);
  process.exitCode = 1;
}
