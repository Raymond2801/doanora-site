/* Adds new posts to posts.js, written in the same style as the rest of the file, and proves the result.

   Usage: node build-posts.js OLD_POSTS_JS NEW_POSTS_JS entry1.json [entry2.json ...]

   Each entry JSON is one post object: type, slug, title, date, body (required); tag, summary, sources, tr (optional).
   The entries are put at the START of window.BLOG_POSTS in the order given (newest first), so for two posts with the
   same date the first one listed is shown first. OLD_POSTS_JS is read and never changed; the result goes to NEW_POSTS_JS.
   Proof printed at the end (the script stops with an error if any of it fails): the old posts are unchanged and follow
   the new ones, each new post equals its JSON exactly, no Windows line endings, no backslash-u escapes. */
'use strict';
var fs = require('fs');
var vm = require('vm');
var assert = require('assert');

var oldPath = process.argv[2];
var outPath = process.argv[3];
var entryPaths = process.argv.slice(4);
assert(oldPath && outPath && entryPaths.length, 'usage: node build-posts.js OLD_POSTS_JS NEW_POSTS_JS entry1.json [entry2.json ...]');

function q(s) { return JSON.stringify(s); }
function opt(ind, key, val) { return val === undefined ? [] : [ind + key + ': ' + q(val)]; }
function item(b, ind) { return typeof b === 'string' ? ind + q(b) : ind + '{ "h": ' + q(b.h) + ' }'; }
function bodyText(body, ind) { return '[\n' + body.map(function (b) { return item(b, ind + '  '); }).join(',\n') + '\n' + ind + ']'; }
function langText(t, ind) {
  var i2 = ind + '  ';
  var parts = [].concat(opt(i2, 'title', t.title), opt(i2, 'tag', t.tag), opt(i2, 'summary', t.summary), [i2 + 'body: ' + bodyText(t.body, i2)]);
  return '{\n' + parts.join(',\n') + '\n' + ind + '}';
}
function entryText(e) {
  var ind = '    ';
  ['type', 'slug', 'title', 'date', 'body'].forEach(function (k) { assert(e[k] !== undefined, 'entry is missing "' + k + '"'); });
  var parts = [].concat(
    opt(ind, 'type', e.type), opt(ind, 'slug', e.slug), opt(ind, 'title', e.title), opt(ind, 'date', e.date),
    opt(ind, 'tag', e.tag), opt(ind, 'summary', e.summary), [ind + 'body: ' + bodyText(e.body, ind)]);
  if (e.sources) {
    parts.push(ind + 'sources: [\n' + e.sources.map(function (s) { return ind + '  { "title": ' + q(s.title) + ', "url": ' + q(s.url) + ' }'; }).join(',\n') + '\n' + ind + ']');
  }
  if (e.tr) {
    var langs = Object.keys(e.tr).map(function (l) { return ind + '  ' + l + ': ' + langText(e.tr[l], ind + '  '); });
    parts.push(ind + 'tr: {\n' + langs.join(',\n') + '\n' + ind + '}');
  }
  return '  {\n' + parts.join(',\n') + '\n  }';
}
function load(src) {
  var sb = { window: {} };
  sb.global = sb;
  vm.runInNewContext(src, sb);
  return sb.window.BLOG_POSTS;
}
function plain(x) { return JSON.parse(JSON.stringify(x)); }

var old = fs.readFileSync(oldPath, 'utf8');
var marker = 'window.BLOG_POSTS = [\n';
var at = old.indexOf(marker);
assert(at >= 0 && old.indexOf(marker, at + 1) < 0, 'the line "window.BLOG_POSTS = [" must appear exactly once');
var entries = entryPaths.map(function (p) { return JSON.parse(fs.readFileSync(p, 'utf8')); });
var rest = old.slice(at + marker.length);
var out = old.slice(0, at + marker.length) + entries.map(entryText).join(',\n') + (/^\s*\]/.test(rest) ? '\n' : ',\n') + rest;
fs.writeFileSync(outPath, out);

var before = load(old);
var after = load(out);
assert.strictEqual(after.length, before.length + entries.length, 'post count');
entries.forEach(function (e, i) { assert.deepStrictEqual(plain(after[i]), e, 'new entry ' + i + ' differs from its JSON'); });
before.forEach(function (p, i) { assert.deepStrictEqual(plain(after[i + entries.length]), plain(p), 'old post ' + i + ' changed'); });
assert(out.indexOf('\r') < 0, 'no carriage returns');
assert(!/\\u[0-9a-fA-F]{4}/.test(out), 'no backslash-u escapes in the file');
console.log('OK: ' + before.length + ' old post(s) kept unchanged, ' + entries.length + ' added at the start, ' + out.length + ' characters written to ' + outPath);
