/* Adds new posts to posts.js, written in the same style as the rest of the file, and proves the result.

   Usage: node build-posts.js OLD_POSTS_JS NEW_POSTS_JS entry1.json [entry2.json ...]

   Each entry JSON is one post object: type, slug, title, date, body (required); tag, summary, sources, tr (optional).
   A body (and tr.vi.body, tr.es.body) may hold: a paragraph, { "h" }, { "ul" }, { "ol" }, { "table": { head, rows } } and a
   picture { fig, size, mob, msize, alt, cap }, written in the style of the pictures already in posts.js. An item the tool
   does not understand stops the build with an error; it is never written as {}.
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
function isStr(s) { return typeof s === 'string'; }
function isSize(a) { return Array.isArray(a) && a.length === 2 && a.every(function (n) { return typeof n === 'number' && isFinite(n) && n > 0; }); }
function sizeText(a) { return '[' + a[0] + ', ' + a[1] + ']'; }
function allowKeys(b, keys, where) {
  Object.keys(b).forEach(function (k) { assert(keys.indexOf(k) >= 0, where + ': unknown key "' + k + '" (allowed: ' + keys.join(', ') + ')'); });
}
/* A picture is written like the pictures already in posts.js: one object over several lines, the keys in the order
   fig+size, mob+msize, alt, cap. In a translation every key is optional (a picture may give only alt and cap). */
function figText(b, ind, where, inTr) {
  allowKeys(b, ['fig', 'size', 'mob', 'msize', 'alt', 'cap'], where);
  assert(inTr || (isStr(b.fig) && b.fig), where + ': a picture needs "fig"');
  assert(inTr || isSize(b.size), where + ': a picture needs "size": [width, height]');
  assert(b.fig === undefined || (isStr(b.fig) && b.fig), where + ': "fig" must be a file name');
  assert(b.size === undefined || isSize(b.size), where + ': "size" must be [width, height], both above 0');
  assert(b.mob === undefined || (isStr(b.mob) && b.mob), where + ': "mob" must be a file name');
  assert(b.msize === undefined || isSize(b.msize), where + ': "msize" must be [width, height], both above 0');
  assert(b.mob === undefined || b.msize !== undefined || inTr, where + ': "mob" needs "msize"');
  assert(b.msize === undefined || b.mob !== undefined || inTr, where + ': "msize" needs "mob"');
  assert(inTr || b.alt !== undefined, where + ': a picture needs "alt"');
  assert(b.alt === undefined || isStr(b.alt), where + ': "alt" must be text');
  assert(b.cap === undefined || isStr(b.cap), where + ': "cap" must be text');
  var i2 = ind + '  ';
  var lines = [
    [b.fig === undefined ? null : '"fig": ' + q(b.fig), b.size === undefined ? null : '"size": ' + sizeText(b.size)],
    [b.mob === undefined ? null : '"mob": ' + q(b.mob), b.msize === undefined ? null : '"msize": ' + sizeText(b.msize)],
    [b.alt === undefined ? null : '"alt": ' + q(b.alt)],
    [b.cap === undefined ? null : '"cap": ' + q(b.cap)]
  ].map(function (l) { return l.filter(function (x) { return x !== null; }).join(', '); }).filter(function (l) { return l; });
  assert(lines.length, where + ': an empty picture item');
  return ind + '{\n' + lines.map(function (l) { return i2 + l; }).join(',\n') + '\n' + ind + '}';
}
function listText(key, arr, ind, where) {
  assert(Array.isArray(arr) && arr.length && arr.every(isStr), where + ': "' + key + '" must be a non-empty list of text items');
  return ind + '{ "' + key + '": [\n' + arr.map(function (s) { return ind + '  ' + q(s); }).join(',\n') + '\n' + ind + '] }';
}
function tableText(t, ind, where) {
  assert(t && typeof t === 'object' && !Array.isArray(t), where + ': "table" must be an object with "head" and "rows"');
  allowKeys(t, ['head', 'rows'], where + ' table');
  assert(Array.isArray(t.head) && t.head.length && t.head.every(isStr), where + ': table "head" must be a non-empty list of text');
  assert(Array.isArray(t.rows) && t.rows.length && t.rows.every(function (r) { return Array.isArray(r) && r.length === t.head.length && r.every(isStr); }),
    where + ': every table row must be a list of ' + t.head.length + ' text cells');
  var rowLine = function (r) { return '[' + r.map(q).join(', ') + ']'; };
  return ind + '{ "table": {\n' + ind + '  "head": ' + rowLine(t.head) + ',\n' + ind + '  "rows": [\n' +
    t.rows.map(function (r) { return ind + '    ' + rowLine(r); }).join(',\n') + '\n' + ind + '  ]\n' + ind + '} }';
}
/* where = "body[3]" or "tr.vi.body[3]"; an item that is not understood stops the build instead of being written wrongly */
function item(b, ind, where, inTr) {
  if (isStr(b)) return ind + q(b);
  assert(b && typeof b === 'object' && !Array.isArray(b), where + ': a body item must be text or an object');
  if (b.h !== undefined) {
    allowKeys(b, ['h'], where);
    assert(isStr(b.h), where + ': "h" must be text');
    return ind + '{ "h": ' + q(b.h) + ' }';
  }
  if (b.ul !== undefined || b.ol !== undefined) {
    var key = b.ul !== undefined ? 'ul' : 'ol';
    allowKeys(b, [key], where);
    return listText(key, b[key], ind, where);
  }
  if (b.table !== undefined) { allowKeys(b, ['table'], where); return tableText(b.table, ind, where); }
  var figKeys = ['fig', 'size', 'mob', 'msize', 'alt', 'cap'];
  if (Object.keys(b).length && Object.keys(b).every(function (k) { return figKeys.indexOf(k) >= 0; })) return figText(b, ind, where, inTr);
  assert.fail(where + ': unknown body item ' + JSON.stringify(b).slice(0, 80));
}
function bodyText(body, ind, where, inTr) {
  assert(Array.isArray(body) && body.length, where + ' must be a non-empty list');
  return '[\n' + body.map(function (b, i) { return item(b, ind + '  ', where + '[' + i + ']', inTr); }).join(',\n') + '\n' + ind + ']';
}
function langText(t, ind, where) {
  var i2 = ind + '  ';
  var parts = [].concat(opt(i2, 'title', t.title), opt(i2, 'tag', t.tag), opt(i2, 'summary', t.summary), [i2 + 'body: ' + bodyText(t.body, i2, where + '.body', true)]);
  return '{\n' + parts.join(',\n') + '\n' + ind + '}';
}
function entryText(e) {
  var ind = '    ';
  ['type', 'slug', 'title', 'date', 'body'].forEach(function (k) { assert(e[k] !== undefined, 'entry is missing "' + k + '"'); });
  var parts = [].concat(
    opt(ind, 'type', e.type), opt(ind, 'slug', e.slug), opt(ind, 'title', e.title), opt(ind, 'date', e.date),
    opt(ind, 'tag', e.tag), opt(ind, 'summary', e.summary), [ind + 'body: ' + bodyText(e.body, ind, 'body', false)]);
  if (e.sources) {
    parts.push(ind + 'sources: [\n' + e.sources.map(function (s) { return ind + '  { "title": ' + q(s.title) + ', "url": ' + q(s.url) + ' }'; }).join(',\n') + '\n' + ind + ']');
  }
  if (e.tr) {
    var langs = Object.keys(e.tr).map(function (l) { return ind + '  ' + l + ': ' + langText(e.tr[l], ind + '  ', 'tr.' + l); });
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
