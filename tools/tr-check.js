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
    if (typeof b === 'string') { paras++; english(w, b); }
    else if (b && typeof b === 'object' && typeof b.h === 'string' && Object.keys(b).length === 1) { heads++; english(w + '.h', b.h); }
    else bad.push(w + ': must be a paragraph (text) or a subheading ({ h: "..." })');
  });
  if (type === 'blog' && (paras < 4 || paras > 7)) warn.push('a blog post should have 4 to 7 paragraphs, this one has ' + paras);
  if (type === 'news') {
    if (heads < 1 || heads > 5) warn.push('a news post should have 1 to 5 subheadings (one per story), this one has ' + heads);
    if (body.length && typeof body[0] !== 'string') warn.push('a news post should start with a short lead paragraph');
    body.forEach(function (b, i) {
      if (typeof b !== 'string' && typeof body[i + 1] !== 'string') warn.push('body[' + i + ']: a subheading should be followed by a paragraph');
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
      if (typeof x === 'string') {
        if (typeof y !== 'string') bad.push(w + ': must be a paragraph (text)');
        else { other(w, x, y); all.push(y); }
      } else if (x && typeof x === 'object' && typeof x.h === 'string') {
        if (!y || typeof y !== 'object' || typeof y.h !== 'string') bad.push(w + ': must be a subheading ({ h: "..." })');
        else { other(w + '.h', x.h, y.h); all.push(y.h); }
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
