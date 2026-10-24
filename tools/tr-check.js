/* tr-check.js: checks ONE blog or news entry of the Raymond Doan site (English text, tr.vi, tr.es).
   Usage: node tr-check.js FILE [--draft] [--repo SITE_DIR]
   FILE holds:  global.window = {}; window.BLOG_POSTS = [ { exactly one post } ];
   --draft  tr.es is not needed yet; the last line is DRAFT OK. Without it tr.vi and tr.es are both required; the last line is TR OK.
   --repo   folder with the site files; the slug must not be in its posts.js yet.
   FAIL lines must be fixed (exit code 1). WARN lines are advice only. */
var fs = require('fs');
var path = require('path');
var vm = require('vm');

var args = process.argv.slice(2);
var file = args[0];
var draft = args.indexOf('--draft') >= 0;
var repoAt = args.indexOf('--repo');
var repoDir = repoAt >= 0 ? args[repoAt + 1] : '';
var bad = [];
var warn = [];
var EM = String.fromCharCode(8212);
var EN = String.fromCharCode(8211);
var CURLY = new RegExp('[' + String.fromCharCode(8216, 8217, 8220, 8221) + ']');
var MARK = new RegExp('[' + String.fromCharCode(768) + '-' + String.fromCharCode(879) + ']');
var ESC = new RegExp(String.fromCharCode(92, 92) + 'u[0-9a-fA-F]{4}');
var CLICHE = /\b(unlock\w*|seamless\w*|game[- ]?changer\w*|today's fast-paced|fast-paced world|dive into|revolutioni[sz]\w*|landscapes?|leverag\w*)\b/i;
var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function load(name) {
  var sb = { window: {} };
  sb.global = sb;
  vm.runInNewContext(fs.readFileSync(name, 'utf8'), sb, { filename: name });
  return sb.window.BLOG_POSTS || [];
}
function text(s) { return typeof s === 'string' && s.length > 0; }
function nonAscii(s) {
  for (var i = 0; i < s.length; i++) { if (s.charCodeAt(i) > 127) return true; }
  return false;
}
function realDate(s) {
  if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(s)) return false;
  var d = new Date(s + 'T00:00:00Z');
  return !isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
}
function hasVi(s) {
  var d = s.normalize('NFD');
  return MARK.test(d) || d.indexOf(String.fromCharCode(273)) >= 0 || d.indexOf(String.fromCharCode(272)) >= 0;
}
/* rules for every language */
function common(s) {
  var out = [];
  if (s.indexOf(EM) >= 0 || s.indexOf(EN) >= 0) out.push('em or en dash');
  if (/ - |--/.test(s)) out.push('spaced hyphen or double hyphen');
  if (/[<>]/.test(s) || /&[a-zA-Z#0-9]+;/.test(s)) out.push('markup or HTML entity');
  if (s !== s.trim()) out.push('space at the start or end');
  if (/ {2,}/.test(s)) out.push('double space');
  if (ESC.test(s)) out.push('backslash-u escape left in the text');
  return out;
}
/* the English text is what gets published, so it has the strictest rules */
function english(where, s) {
  if (!text(s)) { bad.push(where + ': empty or not text'); return; }
  var p = common(s);
  if (CURLY.test(s)) p.push('curly quote (use plain quotes)');
  var m = CLICHE.exec(s);
  if (m) p.push('cliche word "' + m[1] + '"');
  if (p.length) bad.push(where + ': ' + p.join(', ') + ' | ' + s.slice(0, 60));
  if (nonAscii(s)) warn.push(where + ': has a non-ASCII character (fine only for a real name written as an escape)');
}
function other(where, en, s) {
  if (!text(s)) { bad.push(where + ': empty or not text'); return; }
  var p = common(s);
  if (typeof en === 'string' && en.length >= 30 && s === en) p.push('is identical to the English');
  if (p.length) bad.push(where + ': ' + p.join(', ') + ' | ' + s.slice(0, 60));
}

/* ---- body item kinds (mirrors site.js and i18n-check.js): paragraph, subheading, list, table, picture ---- */
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
function imgExists(p) { return !repoDir || fs.existsSync(path.join(path.resolve(repoDir), p)); }
/* The texts an item holds as [suffix, text] pairs, or a problem string. requireFig: the English picture needs size, alt (and msize with mob). */
function itemTexts(b, requireFig) {
  var k = kindOf(b);
  var out = [];
  var problem = null;
  if (k === 'p') out.push(['', b]);
  else if (k === 'h') { if (typeof b.h !== 'string' || Object.keys(b).length !== 1) problem = 'a subheading must be just { h: "text" }'; else out.push(['.h', b.h]); }
  else if (k === 'ul' || k === 'ol') {
    if (!onlyKeys(b, [k]) || !b[k].length || !b[k].every(function (t) { return typeof t === 'string'; })) problem = 'a list must be { ' + k + ': [ "text", ... ] } with at least one entry';
    else b[k].forEach(function (t, j) { out.push(['.' + k + '[' + j + ']', t]); });
  } else if (k === 'table') {
    var t = b.table;
    if (!onlyKeys(b, ['table']) || !onlyKeys(t, ['head', 'rows']) || !Array.isArray(t.head) || !t.head.length || !Array.isArray(t.rows) || !t.rows.length) problem = 'a table must be { table: { head: [ ... ], rows: [ [ ... ], ... ] } }';
    else {
      t.head.forEach(function (c, j) { if (typeof c !== 'string') problem = 'a table head cell must be text'; else out.push(['.table.head[' + j + ']', c]); });
      t.rows.forEach(function (r, i) {
        if (!Array.isArray(r) || r.length !== t.head.length) problem = problem || ('table row ' + i + ' needs ' + t.head.length + ' cells');
        else r.forEach(function (c, j) { if (typeof c !== 'string') problem = problem || 'a table cell must be text'; else out.push(['.table.rows[' + i + '][' + j + ']', c]); });
      });
    }
  } else if (k === 'fig') {
    if (!onlyKeys(b, ['fig', 'size', 'mob', 'msize', 'alt', 'cap'])) problem = 'a picture may only have fig, size, mob, msize, alt and cap';
    else if (typeof b.fig !== 'string' || !safeImage(b.fig)) problem = 'fig must be a file in img/ (letters, digits, . _ - only)';
    else if (!imgExists(b.fig)) problem = 'fig points to ' + b.fig + ', which is not in the site folder';
    else if (requireFig && !goodSize(b.size)) problem = 'size must be [width, height]';
    else if (b.size !== undefined && !goodSize(b.size)) problem = 'size must be [width, height]';
    else if (b.mob !== undefined && (typeof b.mob !== 'string' || !safeImage(b.mob) || !imgExists(b.mob))) problem = 'mob must be an existing file in img/';
    else if (b.msize !== undefined && !goodSize(b.msize)) problem = 'msize must be [width, height]';
    else if (b.mob !== undefined && requireFig && !goodSize(b.msize)) problem = 'a picture with mob needs msize [width, height]';
    else if (requireFig && (typeof b.alt !== 'string' || !b.alt)) problem = 'a picture needs alt text';
    else {
      if (typeof b.alt === 'string' && b.alt) out.push(['.alt', b.alt]);
      else if (b.alt !== undefined) problem = 'alt must be text';
      if (typeof b.cap === 'string' && b.cap) out.push(['.cap', b.cap]);
      else if (b.cap !== undefined) problem = 'cap must be text';
    }
  } else problem = 'must be a paragraph (text), a subheading ({ h }), a list ({ ul } or { ol }), a table ({ table }) or a picture ({ fig })';
  return { kind: k, texts: out, bad: problem };
}
/* The translation must match the English item for item: same kind, same list length, same table columns and rows. */
function sameShape(en, tr) {
  var k = kindOf(en);
  if (kindOf(tr) !== k) return 'must be the same kind as the English (' + (k === 'p' ? 'a paragraph' : k === 'h' ? 'a subheading { h }' : k) + ')';
  if (k === 'ul' || k === 'ol') { if (tr[k].length !== en[k].length) return 'needs ' + en[k].length + ' list entries, has ' + tr[k].length; }
  if (k === 'table') {
    var a = tr.table, b = en.table;
    if (!Array.isArray(a.head) || !Array.isArray(a.rows) || a.head.length !== b.head.length || a.rows.length !== b.rows.length) return 'needs ' + b.head.length + ' columns and ' + b.rows.length + ' rows';
    for (var j = 0; j < b.rows.length; j++) { if (!Array.isArray(a.rows[j]) || a.rows[j].length !== b.rows[j].length) return 'row ' + j + ' needs ' + b.rows[j].length + ' cells'; }
  }
  return '';
}

function main() {
  var posts;
  try { posts = load(path.resolve(file || '')); } catch (e) { console.log('FAIL cannot read ' + file + ': ' + e.message); process.exitCode = 1; return; }
  if (!Array.isArray(posts) || posts.length !== 1) { console.log('FAIL the file must hold exactly one post'); process.exitCode = 1; return; }
  var post = posts[0];
  if (!post || typeof post !== 'object') { console.log('FAIL the post is not an object'); process.exitCode = 1; return; }
  var type = post.type;

  /* English fields */
  if (type !== 'blog' && type !== 'news') bad.push('type must be "blog" or "news"');
  if (!text(post.slug) || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(post.slug)) bad.push('slug must be lower-case ASCII words joined by hyphens');
  if (!realDate(String(post.date))) bad.push('date must be a real date written YYYY-MM-DD');
  english('title', post.title);
  if (text(post.tag)) english('tag', post.tag); else bad.push('tag is missing');
  if (text(post.summary)) english('summary', post.summary); else bad.push('summary is missing');
  var body = Array.isArray(post.body) ? post.body : [];
  if (!body.length) bad.push('body is empty');
  var paras = 0;
  var heads = 0;
  body.forEach(function (b, i) {
    var w = 'body[' + i + ']';
    var r = itemTexts(b, true);
    if (r.bad) { bad.push(w + ': ' + r.bad); return; }
    if (r.kind === 'p') paras++;
    if (r.kind === 'h') heads++;
    r.texts.forEach(function (t) { english(w + t[0], t[1]); });
  });
  if (type === 'blog' && (paras < 4 || paras > 7)) warn.push('a blog post should have 4 to 7 paragraphs, this one has ' + paras);
  if (type === 'news') {
    if (heads < 1 || heads > 5) warn.push('a news post should have 1 to 5 subheadings (one per story), this one has ' + heads);
    if (body.length && typeof body[0] !== 'string') warn.push('a news post should start with a short lead paragraph');
    body.forEach(function (b, i) {
      if (kindOf(b) === 'h' && (kindOf(body[i + 1]) === 'h' || kindOf(body[i + 1]) === '')) warn.push('body[' + i + ']: a subheading should be followed by a paragraph');
    });
  }

  /* sources */
  var src = post.sources;
  if (type === 'news' && !(Array.isArray(src) && src.length)) bad.push('a news post needs sources');
  if (src !== undefined) {
    if (!Array.isArray(src)) bad.push('sources must be a list');
    else {
      var seen = {};
      src.forEach(function (s, i) {
        var w = 'sources[' + i + ']';
        if (!s || !text(s.title) || !s.title.trim()) bad.push(w + ': needs a title');
        else if (common(s.title).length || CURLY.test(s.title) || nonAscii(s.title)) warn.push(w + ': the title has a dash, curly quote, non-ASCII character or odd spacing; reword it if the real headline allows');
        if (!s || !text(s.url) || !/^https?:\/\/[^ ]+$/i.test(s.url)) bad.push(w + ': url must start with http:// or https:// and have no spaces');
        else if (seen[s.url]) bad.push(w + ': duplicate url');
        else seen[s.url] = true;
      });
    }
  }

  /* the weekly digest has a fixed shape */
  if (type === 'news') {
    var m = /^AI & ICT security news: week ending ([0-9]{1,2}) ([A-Z][a-z]{2}) ([0-9]{4})$/.exec(String(post.title));
    if (!m || MONTHS.indexOf(m[2]) < 0) bad.push('a news title must look like "AI & ICT security news: week ending 17 Oct 2026"');
    else {
      var mm = MONTHS.indexOf(m[2]) + 1;
      var asDate = m[3] + '-' + (mm < 10 ? '0' : '') + mm + '-' + (m[1].length < 2 ? '0' : '') + m[1];
      if (asDate !== post.date) bad.push('the date in the news title (' + asDate + ') must be the post date (' + post.date + ')');
    }
    if (post.tag !== 'Weekly digest') bad.push('a news tag must be "Weekly digest"');
    if (post.slug !== 'news-' + post.date) bad.push('a news slug must be "news-' + post.date + '"');
  }

  /* translations */
  var tr = post.tr;
  if (tr !== undefined && (!tr || typeof tr !== 'object')) bad.push('tr must be an object');
  ['vi', 'es'].forEach(function (l) {
    var t = tr && typeof tr === 'object' ? tr[l] : undefined;
    if (!t || typeof t !== 'object') { if (!(draft && l === 'es')) bad.push(l + ': no translation'); return; }
    if (t.sources !== undefined) bad.push(l + ': sources are not translated, remove them from tr');
    other(l + '.title', post.title, t.title);
    if (text(post.tag)) other(l + '.tag', post.tag, t.tag);
    if (text(post.summary)) other(l + '.summary', post.summary, t.summary);
    var tb = Array.isArray(t.body) ? t.body : [];
    if (tb.length !== body.length) { bad.push(l + '.body: needs ' + body.length + ' items, has ' + tb.length); return; }
    var all = [t.title, t.summary];
    body.forEach(function (x, i) {
      var y = tb[i];
      var w = l + '.body[' + i + ']';
      if (kindOf(x) === '') return;
      var shape = sameShape(x, y);
      if (shape) { bad.push(w + ': ' + shape); return; }
      var ry = itemTexts(y, false);
      if (ry.bad) { bad.push(w + ': ' + ry.bad); return; }
      var rx = itemTexts(x, false);
      var enBy = {};
      rx.texts.forEach(function (e) { enBy[e[0]] = e[1]; });
      ry.texts.forEach(function (e) { other(w + e[0], enBy[e[0]], e[1]); all.push(e[1]); });
      if (ry.kind === 'fig') {
        if (y.alt === undefined) warn.push(w + ': the picture has no translated alt text, so ' + l + ' readers get the English alt');
        if (x.cap && y.cap === undefined) warn.push(w + ': the picture has no translated caption, so ' + l + ' readers get the English caption');
      }
    });
    if (l === 'vi' && !hasVi(all.filter(text).join(' '))) bad.push('vi: the text has no Vietnamese accents (write real Vietnamese letters)');
  });

  /* the slug must be new */
  if (repoDir) {
    try {
      var old = load(path.join(path.resolve(repoDir), 'posts.js'));
      if (old.some(function (p) { return p && p.slug === post.slug; })) bad.push('slug "' + post.slug + '" is already in posts.js');
    } catch (e) { warn.push('could not read posts.js in ' + repoDir + ': ' + e.message); }
  }

  warn.forEach(function (w) { console.log('WARN ' + w); });
  bad.forEach(function (b) { console.log('FAIL ' + b); });
  if (bad.length) console.log(bad.length + ' problem(s). Fix them and run again.');
  else console.log((draft ? 'DRAFT OK (' : 'TR OK (') + post.slug + ')');
  process.exitCode = bad.length ? 1 : 0;
}
main();
