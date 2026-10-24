/* i18n check for the Raymond Doan site.
   Usage: node i18n-check.js SITE_DIR
   SITE_DIR holds the site files (pages, scripts, products-data.js, ui-vi.js, ui-es.js, products-vi.js, products-es.js).
   Prints one line per problem (FAIL) or warning (WARN) and a summary. Exit code 1 if anything FAILs.

   What it checks
   1. Every interface key used by the pages and scripts has a Vietnamese and a Spanish text, and none is unused.
   2. Every on-sale product has a Vietnamese and a Spanish entry that matches the English one exactly in
      shape (same lists, same section keys), keeps its numbers, and uses {price} / {was} for prices.
   3. Posts: slug, type, date, body and sources are well formed, the English text follows the house rules
      (no dashes, plain quotes, no markup, no cliche words), and a post that carries a "tr" block matches the
      English post item for item.
   4. House rules for translated text: no dashes used as punctuation, no markup or entities, no stray spaces.
   5. The site scripts never use innerHTML, insertAdjacentHTML or document.write. */
'use strict';
var fs = require('fs');
var path = require('path');
var vm = require('vm');

var DIR = path.resolve(process.argv[2] || '.');
var LANGS = ['vi', 'es'];
var fails = 0;
var warns = 0;
var checks = 0;

function fail(msg) { fails++; console.log('FAIL ' + msg); }
function warn(msg) { warns++; console.log('WARN ' + msg); }
function check(ok, msg) { checks++; if (!ok) fail(msg); }

function read(name) { return fs.readFileSync(path.join(DIR, name), 'utf8'); }
function exists(name) { return fs.existsSync(path.join(DIR, name)); }

function load(name) {
  var sandbox = { window: {} };
  sandbox.window.window = sandbox.window;
  vm.runInNewContext(read(name), sandbox, { filename: name });
  return sandbox.window;
}

var EM = String.fromCharCode(8212);
var EN = String.fromCharCode(8211);

/* ---- text rules ---- */
function textProblems(s) {
  var out = [];
  if (typeof s !== 'string' || !s) return ['empty or not a string'];
  if (s.indexOf(EM) >= 0 || s.indexOf(EN) >= 0) out.push('has an em or en dash');
  if (/ - /.test(s)) out.push('has a spaced hyphen');
  if (/[<>]/.test(s)) out.push('has < or >');
  if (/&[a-zA-Z#0-9]+;/.test(s)) out.push('has an HTML entity');
  if (s !== s.trim()) out.push('has leading or trailing space');
  if (/ {2,}/.test(s)) out.push('has a double space');
  if (/\\u[0-9a-fA-F]{4}/.test(s)) out.push('has a backslash-u escape');
  return out;
}

function ruleCheck(where, s) {
  var p = textProblems(s);
  checks++;
  if (p.length) fail(where + ': ' + p.join(', ') + ' | ' + String(s).slice(0, 70));
}

/* The English text is what gets published, so it also gets the stricter English rules.
   Keep CURLY and CLICHE the same as in tr-check.js (the checker the weekly blog task uses). */
var CURLY = new RegExp('[' + String.fromCharCode(8216, 8217, 8220, 8221) + ']');
var CLICHE = /\b(unlock\w*|seamless\w*|game[- ]?changer\w*|today's fast-paced|fast-paced world|dive into|revolutioni[sz]\w*|landscapes?|leverag\w*)\b/i;
var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function nonAscii(s) {
  var t = String(s);
  for (var i = 0; i < t.length; i++) { if (t.charCodeAt(i) > 127) return true; }
  return false;
}

function realDate(s) {
  if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(s)) return false;
  var d = new Date(s + 'T00:00:00Z');
  return !isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
}

function englishProblems(s) {
  var out = textProblems(s);
  if (typeof s !== 'string' || !s) return out;
  if (/--/.test(s)) out.push('has a double hyphen');
  if (CURLY.test(s)) out.push('has a curly quote (use plain quotes)');
  var m = CLICHE.exec(s);
  if (m) out.push('has the cliche "' + m[1] + '"');
  return out;
}

function englishCheck(where, s) {
  var p = englishProblems(s);
  checks++;
  if (p.length) fail(where + ': ' + p.join(', ') + ' | ' + String(s).slice(0, 70));
  else if (nonAscii(s)) warn(where + ': has a non-ASCII character (fine only for a real name written as a backslash-u escape in the source)');
}

/* ---- 1. interface keys ---- */
var htmlFiles = fs.readdirSync(DIR).filter(function (f) { return /\.html$/.test(f); });
var jsFiles = ['site.js', 'catalog.js', 'i18n.js'];
var used = {};
htmlFiles.forEach(function (f) {
  var src = read(f);
  var m;
  var rx = /data-i18n(?:-aria)?="([^"]+)"/g;
  while ((m = rx.exec(src))) used[m[1]] = f;
  jsFiles = jsFiles; /* page scripts are inside the html files */
  var rx1 = /\b(?:S|I|I18n)\.t\(\s*'([^']+)'/g;
  while ((m = rx1.exec(src))) used[m[1]] = f;
});
jsFiles.forEach(function (f) {
  if (!exists(f)) return;
  var src = read(f);
  var m;
  var rx1 = /\b(?:S|I|I18n)\.t\(\s*'([^']+)'/g;
  var rx2 = /(?:^|[^\w.$])t\(\s*'([^']+)'/g;
  while ((m = rx1.exec(src))) used[m[1]] = f;
  while ((m = rx2.exec(src))) used[m[1]] = f;
});

var data = load('products-data.js').PRODUCTS || [];
var onSale = data.filter(function (p) { return p && p.slug && p.status !== 'off'; });
onSale.forEach(function (p) {
  if (p.kind) used['kind:' + p.kind] = 'products-data.js';
  if (p.audience) used['aud:' + p.audience] = 'products-data.js';
});

var ui = {};
LANGS.forEach(function (l) {
  var w = load('ui-' + l + '.js');
  ui[l] = (w.I18N_UI && w.I18N_UI[l]) || {};
  check(Object.keys(ui[l]).length > 0, 'ui-' + l + '.js defines window.I18N_UI.' + l);
});

LANGS.forEach(function (l) {
  Object.keys(used).sort().forEach(function (k) {
    if (/:$/.test(k)) return; /* a prefix such as 'kind:' that is completed in code */
    if (typeof ui[l][k] !== 'string' || !ui[l][k]) { fail('ui-' + l + '.js is missing the text for "' + k + '" (used in ' + used[k] + ')'); checks++; }
    else { checks++; }
  });
  Object.keys(ui[l]).sort().forEach(function (k) {
    if (!(k in used)) warn('ui-' + l + '.js has an unused key "' + k + '"');
    ruleCheck('ui-' + l + '.js "' + k + '"', ui[l][k]);
  });
});

/* ---- 2. products ---- */
function nums(s) {
  /* the numbers in a text, thousands separators removed ("50,000" and "50.000" both give 50000), without 1 */
  var t = String(s).replace(/(\d)[.,](\d{3})(?!\d)/g, '$1$2');
  return (t.match(/\d+/g) || []).filter(function (n) { return n !== '1'; });
}

function hasAll(need, have) {
  var pool = have.slice();
  for (var i = 0; i < need.length; i++) {
    var at = pool.indexOf(need[i]);
    if (at < 0) return false;
    pool.splice(at, 1);
  }
  return true;
}

function sameKeys(en, tr) {
  var a = Object.keys(en).filter(function (k) { return en[k] !== undefined; }).sort().join(',');
  var b = Object.keys(tr).filter(function (k) { return tr[k] !== undefined; }).sort().join(',');
  return a === b;
}

function checkString(where, en, tr, p) {
  if (typeof en !== 'string') return;
  if (typeof tr !== 'string' || !tr) { fail(where + ': missing'); checks++; return; }
  ruleCheck(where, tr);
  checks++;
  var trNums = nums(tr.replace(/\{(?:price|was)\}/g, ''));
  var enText = en;
  if (p.was) enText = enText.split(p.was).join('');
  if (p.price) enText = enText.split(p.price).join('');
  if (!hasAll(nums(enText), trNums)) {
    fail(where + ': numbers differ (English ' + nums(enText).join(',') + ' / translation ' + trNums.join(',') + ')');
  }
  checks++;
  var tokens = tr.match(/\{[^}]*\}/g) || [];
  tokens.forEach(function (t) {
    if (t !== '{price}' && t !== '{was}') fail(where + ': unknown token ' + t);
    else if (!p[t.slice(1, -1)]) fail(where + ': uses ' + t + ' but the product has no ' + t.slice(1, -1));
  });
  checks++;
  if (p.was && en.indexOf(p.was) >= 0 && tr.indexOf('{was}') < 0) fail(where + ': the English shows the usual price (' + p.was + '), so use {was}');
  if (p.price && p.price !== 'Free' && en.indexOf(p.price) >= 0 && tr.indexOf('{price}') < 0) fail(where + ': the English shows the price (' + p.price + '), so use {price}');
  checks++;
  if (/A\$\s?\d/.test(tr)) fail(where + ': has a typed A$ price, use {price} or {was}');
  if (en.length >= 40 && en === tr && /(^|[\s(])[a-z]{3,}/.test(en)) fail(where + ': is identical to the English');
}

function checkList(where, en, tr, p) {
  if (!Array.isArray(en)) return;
  checks++;
  if (!Array.isArray(tr) || tr.length !== en.length) { fail(where + ': needs ' + en.length + ' entries, has ' + (Array.isArray(tr) ? tr.length : 'none')); return; }
  en.forEach(function (e, i) { checkString(where + '[' + i + ']', e, tr[i], p); });
}

function checkPairs(where, en, tr, p) {
  if (!Array.isArray(en)) return;
  checks++;
  if (!Array.isArray(tr) || tr.length !== en.length) { fail(where + ': needs ' + en.length + ' pairs, has ' + (Array.isArray(tr) ? tr.length : 'none')); return; }
  en.forEach(function (e, i) {
    var t = tr[i];
    if (!Array.isArray(t) || t.length !== 2) { fail(where + '[' + i + ']: must be [label, text]'); return; }
    checkString(where + '[' + i + '][0]', e[0], t[0], p);
    checkString(where + '[' + i + '][1]', e[1], t[1], p);
  });
}

LANGS.forEach(function (l) {
  var w = load('products-' + l + '.js');
  var all = (w.I18N_PRODUCTS && w.I18N_PRODUCTS[l]) || {};
  check(Object.keys(all).length > 0, 'products-' + l + '.js defines window.I18N_PRODUCTS.' + l);
  Object.keys(all).forEach(function (slug) {
    if (!data.some(function (p) { return p.slug === slug; })) warn('products-' + l + '.js has "' + slug + '" which is not in products-data.js');
  });
  onSale.forEach(function (p) {
    var name = 'products-' + l + '.js ' + p.slug;
    var tr = all[p.slug];
    if (!tr) { fail(name + ': no translation yet (English shows until one is added)'); checks++; return; }
    ['short', 'tagline', 'card', 'row', 'soonNote'].forEach(function (k) {
      if (p[k] !== undefined) checkString(name + '.' + k, p[k], tr[k], p);
      else if (tr[k] !== undefined) fail(name + '.' + k + ': the English has no ' + k);
    });
    checkList(name + '.intro', p.intro, tr.intro, p);
    checkPairs(name + '.facts', p.facts, tr.facts, p);
    var secs = p.sections || [];
    checks++;
    if (!Array.isArray(tr.sections) || tr.sections.length !== secs.length) { fail(name + '.sections: needs ' + secs.length + ' sections'); }
    else {
      secs.forEach(function (sec, i) {
        var t = tr.sections[i];
        var w2 = name + '.sections[' + i + ']';
        if (!t || typeof t !== 'object') { fail(w2 + ': missing'); return; }
        checks++;
        if (!sameKeys(sec, t) && !(Object.keys(sec).every(function (k) { return k in t; }) && Object.keys(t).every(function (k) { return k in sec; }))) {
          fail(w2 + ': keys differ (English ' + Object.keys(sec).sort().join('/') + ', translation ' + Object.keys(t).sort().join('/') + ')');
        }
        checkString(w2 + '.h', sec.h, t.h, p);
        checkList(w2 + '.p', sec.p, t.p, p);
        checkList(w2 + '.steps', sec.steps, t.steps, p);
        checkPairs(w2 + '.pairs', sec.pairs, t.pairs, p);
        checkList(w2 + '.list', sec.list, t.list, p);
        if (sec.notH !== undefined) checkString(w2 + '.notH', sec.notH, t.notH, p);
        checkList(w2 + '.notList', sec.notList, t.notList, p);
        if (sec.after !== undefined) checkString(w2 + '.after', sec.after, t.after, p);
        if (Array.isArray(sec.items)) {
          checks++;
          if (!Array.isArray(t.items) || t.items.length !== sec.items.length) fail(w2 + '.items: needs ' + sec.items.length + ' entries');
          else sec.items.forEach(function (it, j) {
            if (it.blurb !== undefined) checkString(w2 + '.items[' + j + '].blurb', it.blurb, t.items[j] && t.items[j].blurb, p);
          });
        }
      });
    }
    if (p.cta) {
      var tc = tr.cta || {};
      ['label', 'rowLabel', 'note'].forEach(function (k) {
        if (p.cta[k] !== undefined) checkString(name + '.cta.' + k, p.cta[k], tc[k], p);
        else if (tc[k] !== undefined) fail(name + '.cta.' + k + ': the English has no ' + k);
      });
    }
  });
});

/* ---- 3. posts ---- */
/* ---- body items: the site (site.js) accepts a paragraph, a subheading { h }, a list { ul } or { ol },
   a table { table: { head, rows } } and a picture { fig, size, alt, cap, mob, msize }. kindOf and the
   same-shape rule below mirror site.js, so a post the site shows is a post this checker accepts. ---- */
function kindOf(x) {
  if (typeof x === 'string') return 'p';
  if (!x || typeof x !== 'object') return '';
  if (x.h) return 'h';
  if (Array.isArray(x.ul)) return 'ul';
  if (Array.isArray(x.ol)) return 'ol';
  if (x.table && typeof x.table === 'object') return 'table';
  if (x.fig) return 'fig';
  return '';
}

function safeImage(p) { return /^img\/[A-Za-z0-9._-]+\.(?:svg|png|jpe?g|webp|gif)$/i.test(String(p || '')); }
function goodSize(a) { return Array.isArray(a) && a.length === 2 && a[0] > 0 && a[1] > 0; }
function onlyKeys(o, allowed) { return Object.keys(o).every(function (k) { return allowed.indexOf(k) >= 0; }); }

/* The texts an item holds, as [where, text] pairs, or a problem string when the item is malformed. */
function itemTexts(b, requireFig) {
  var k = kindOf(b);
  var out = [];
  var bad = null;
  if (k === 'p') out.push(['', b]);
  else if (k === 'h') { if (typeof b.h !== 'string' || Object.keys(b).length !== 1) bad = 'a subheading must be just { h: "text" }'; else out.push(['.h', b.h]); }
  else if (k === 'ul' || k === 'ol') {
    if (!onlyKeys(b, [k]) || !b[k].length || !b[k].every(function (t) { return typeof t === 'string'; })) bad = 'a list must be { ' + k + ': [ "text", ... ] } with at least one entry';
    else b[k].forEach(function (t, j) { out.push(['.' + k + '[' + j + ']', t]); });
  } else if (k === 'table') {
    var t = b.table;
    if (!onlyKeys(b, ['table']) || !onlyKeys(t, ['head', 'rows']) || !Array.isArray(t.head) || !t.head.length || !Array.isArray(t.rows) || !t.rows.length) bad = 'a table must be { table: { head: [ ... ], rows: [ [ ... ], ... ] } }';
    else {
      t.head.forEach(function (c, j) { if (typeof c !== 'string') bad = 'a table head cell must be text'; else out.push(['.table.head[' + j + ']', c]); });
      t.rows.forEach(function (r, i) {
        if (!Array.isArray(r) || r.length !== t.head.length) bad = bad || ('table row ' + i + ' needs ' + t.head.length + ' cells');
        else r.forEach(function (c, j) { if (typeof c !== 'string') bad = bad || 'a table cell must be text'; else out.push(['.table.rows[' + i + '][' + j + ']', c]); });
      });
    }
  } else if (k === 'fig') {
    if (!onlyKeys(b, ['fig', 'size', 'mob', 'msize', 'alt', 'cap'])) bad = 'a picture may only have fig, size, mob, msize, alt and cap';
    else if (typeof b.fig !== 'string' || !safeImage(b.fig)) bad = 'fig must be a file in img/ (letters, digits, . _ - only)';
    else if (!exists(b.fig)) bad = 'fig points to ' + b.fig + ', which is not in the site folder';
    else if (requireFig && !goodSize(b.size)) bad = 'size must be [width, height]';
    else if (b.size !== undefined && !goodSize(b.size)) bad = 'size must be [width, height]';
    else if (b.mob !== undefined && (typeof b.mob !== 'string' || !safeImage(b.mob) || !exists(b.mob))) bad = 'mob must be an existing file in img/';
    else if (b.msize !== undefined && !goodSize(b.msize)) bad = 'msize must be [width, height]';
    else if (b.mob !== undefined && requireFig && !goodSize(b.msize)) bad = 'a picture with mob needs msize [width, height]';
    else if (requireFig && (typeof b.alt !== 'string' || !b.alt)) bad = 'a picture needs alt text';
    else {
      if (typeof b.alt === 'string' && b.alt) out.push(['.alt', b.alt]);
      else if (b.alt !== undefined) bad = 'alt must be text';
      if (typeof b.cap === 'string' && b.cap) out.push(['.cap', b.cap]);
      else if (b.cap !== undefined) bad = 'cap must be text';
    }
  } else bad = 'must be a paragraph (text), a subheading ({ h }), a list ({ ul } or { ol }), a table ({ table }) or a picture ({ fig })';
  return { kind: k, texts: out, bad: bad };
}

/* The translation must have the same kinds item for item, the same number of list entries, and the same
   table columns and rows (site.js sameBody). */
function sameShape(en, tr) {
  var k = kindOf(en);
  if (kindOf(tr) !== k) return 'must be ' + (k === 'p' ? 'a paragraph (text)' : k === 'h' ? 'a subheading ({ h })' : k === 'fig' ? 'a picture ({ fig })' : 'the same kind as the English (' + k + ')');
  if (k === 'ul' || k === 'ol') { if (tr[k].length !== en[k].length) return 'needs ' + en[k].length + ' list entries, has ' + tr[k].length; }
  if (k === 'table') {
    var a = tr.table, b = en.table;
    if (!Array.isArray(a.head) || !Array.isArray(a.rows) || a.head.length !== b.head.length || a.rows.length !== b.rows.length) return 'needs ' + b.head.length + ' columns and ' + b.rows.length + ' rows';
    for (var j = 0; j < b.rows.length; j++) { if (!Array.isArray(a.rows[j]) || a.rows[j].length !== b.rows[j].length) return 'row ' + j + ' needs ' + b.rows[j].length + ' cells'; }
  }
  return '';
}

function englishPost(post, seenSlugs) {
  var name = 'posts.js ' + post.slug;
  var type = post.type;
  checks++;
  if (type !== undefined && type !== 'blog' && type !== 'news') fail(name + ': type must be "blog" or "news" (or left out for a blog post)');
  checks++;
  if (typeof post.slug !== 'string' || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(post.slug)) fail(name + ': slug must be lower-case ASCII words joined by hyphens');
  checks++;
  if (seenSlugs[post.slug]) fail(name + ': the slug is already used by an earlier post');
  seenSlugs[post.slug] = true;
  checks++;
  if (!realDate(String(post.date))) fail(name + ': date must be a real date written YYYY-MM-DD');
  englishCheck(name + '.title', post.title);
  if (post.tag !== undefined) englishCheck(name + '.tag', post.tag);
  if (post.summary !== undefined) englishCheck(name + '.summary', post.summary);
  var body = Array.isArray(post.body) ? post.body : [];
  checks++;
  if (!body.length) fail(name + ': body must be a list with at least one item');
  body.forEach(function (b, i) {
    var w = name + '.body[' + i + ']';
    var it = itemTexts(b, true);
    checks++;
    if (it.bad) { fail(w + ': ' + it.bad); return; }
    it.texts.forEach(function (t) { englishCheck(w + t[0], t[1]); });
  });
  var src = post.sources;
  checks++;
  if (type === 'news' && !(Array.isArray(src) && src.length)) fail(name + ': a news post needs sources');
  if (src !== undefined) {
    checks++;
    if (!Array.isArray(src)) fail(name + ': sources must be a list');
    else {
      var seenUrls = {};
      src.forEach(function (s, i) {
        var w = name + '.sources[' + i + ']';
        checks++;
        if (!s || typeof s.title !== 'string' || !s.title.trim()) fail(w + ': needs a title');
        else if (textProblems(s.title).length || CURLY.test(s.title) || nonAscii(s.title)) warn(w + ': the title has a dash, curly quote, non-ASCII character or odd spacing; reword it if the real headline allows');
        checks++;
        if (!s || typeof s.url !== 'string' || !/^https?:\/\/[^ ]+$/i.test(s.url)) fail(w + ': url must start with http:// or https:// and have no spaces');
        else if (seenUrls[s.url]) fail(w + ': duplicate url');
        else seenUrls[s.url] = true;
      });
    }
  }
  if (type === 'news') {
    var m = /^AI & ICT security news: week ending ([0-9]{1,2}) ([A-Z][a-z]{2}) ([0-9]{4})$/.exec(String(post.title));
    if (!m || MONTHS.indexOf(m[2]) < 0) warn(name + ': a news title should look like "AI & ICT security news: week ending 17 Oct 2026"');
    else {
      var mm = MONTHS.indexOf(m[2]) + 1;
      var asDate = m[3] + '-' + (mm < 10 ? '0' : '') + mm + '-' + (m[1].length < 2 ? '0' : '') + m[1];
      if (asDate !== post.date) warn(name + ': the date in the news title (' + asDate + ') differs from the post date (' + post.date + ')');
    }
    if (post.tag !== 'Weekly digest') warn(name + ': a news tag should be "Weekly digest"');
    if (post.slug !== 'news-' + post.date) warn(name + ': a news slug should be "news-' + post.date + '"');
  }
}

var rawPosts = load('posts.js').BLOG_POSTS;
checks++;
if (!Array.isArray(rawPosts)) fail('posts.js must define window.BLOG_POSTS as a list');
rawPosts = Array.isArray(rawPosts) ? rawPosts : [];
rawPosts.forEach(function (p, i) {
  checks++;
  if (!p || typeof p !== 'object' || !p.slug || !p.title) fail('posts.js entry ' + (i + 1) + ' has no slug or title, so the site hides it');
});
var posts = rawPosts.filter(function (p) { return p && p.slug && p.title; });
var seenSlugs = {};
posts.forEach(function (post) {
  englishPost(post, seenSlugs);
  LANGS.forEach(function (l) {
    var tr = post.tr && post.tr[l];
    var name = 'posts.js ' + post.slug + ' (' + l + ')';
    if (!tr) { warn(name + ': not translated, it shows in English'); return; }
    ruleCheck(name + '.title', tr.title);
    if (post.summary) ruleCheck(name + '.summary', tr.summary);
    if (post.tag) ruleCheck(name + '.tag', tr.tag);
    var en = Array.isArray(post.body) ? post.body : [];
    var tb = Array.isArray(tr.body) ? tr.body : [];
    checks++;
    if (tb.length !== en.length) { fail(name + '.body: needs ' + en.length + ' items, has ' + tb.length); return; }
    en.forEach(function (b, i) {
      var t = tb[i];
      var w = name + '.body[' + i + ']';
      if (!kindOf(b)) return; /* the English item is already reported above */
      var diff = sameShape(b, t);
      checks++;
      if (diff) { fail(w + ': ' + diff); return; }
      var it = itemTexts(t, false);
      checks++;
      if (it.bad) { fail(w + ': ' + it.bad); return; }
      it.texts.forEach(function (x) { ruleCheck(w + x[0], x[1]); });
    });
  });
});

/* ---- 4. markup safety ---- */
var scanFiles = htmlFiles.concat(['site.js', 'catalog.js', 'i18n.js']);
scanFiles.forEach(function (f) {
  if (!exists(f)) return;
  var src = read(f).replace(/\/\*[\s\S]*?\*\//g, '');
  checks++;
  if (/\binnerHTML\b|\binsertAdjacentHTML\b|\bdocument\.write\b|\beval\(/.test(src)) fail(f + ': uses innerHTML, insertAdjacentHTML, document.write or eval');
});

/* ---- 5. language list ---- */
var idx = read('index.html');
['en', 'vi', 'es'].forEach(function (l) {
  checks++;
  if (idx.indexOf('data-lang="' + l + '"') < 0) fail('index.html: the switcher has no option for ' + l);
});

console.log('i18n check: ' + checks + ' checks, ' + fails + ' failed, ' + warns + ' warnings');
process.exit(fails ? 1 : 0);
