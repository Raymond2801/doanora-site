/* Shared helpers for the blog lists, the home previews, the post page and the product pages.
   Reads window.BLOG_POSTS from posts.js and window.PRODUCTS from products-data.js.
   In Vietnamese and Spanish it swaps in the translations (post.tr in posts.js, products-vi.js and
   products-es.js) and falls back to English for anything that is missing or no longer matches the
   English structure, so a half-finished translation never shows wrong content.
   Builds everything with textContent, never innerHTML. */
(function () {
  var I = window.I18n || {
    lang: 'en',
    locale: 'en-AU',
    t: function (key, fallback) { return fallback === undefined ? key : fallback; }
  };
  var DOT = String.fromCharCode(183);

  function t(key, fallback) { return I.t(key, fallback); }

  /* A page opened by following a link should start at the top, even if the viewer keeps the old scroll offset.
     Skipped when the address points at an element on the page (products.html#sme). */
  (function startAtTop() {
    var id = (location.hash || '').replace(/^#/, '');
    var target = null;
    try { target = id ? document.getElementById(decodeURIComponent(id)) : null; } catch (e) {}
    if (target) return;
    try { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }
    catch (e) { try { window.scrollTo(0, 0); } catch (e2) {} }
  })();

  function typeOf(post) {
    return post && post.type === 'news' ? 'news' : 'blog';
  }

  function typeLabel(type) {
    return type === 'news' ? t('type.news', 'AI & ICT security news') : t('type.blog', 'Personal blog');
  }

  /* ---------- translations ---------- */

  function copyOf(o) {
    var c = {};
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) c[k] = o[k];
    return c;
  }

  /* Prices are written as {price} and {was} in the translations and filled in from the product,
     so a price change in products-data.js reaches every language. Returns null if a price is missing. */
  function expand(s, p) {
    var ok = true;
    var out = String(s).replace(/\{(price|was)\}/g, function (m, k) {
      if (!p[k]) { ok = false; return m; }
      return p[k];
    });
    return ok ? out : null;
  }

  /* The translated string if there is one, otherwise the English string. */
  function pick(tr, en, p) {
    if (typeof tr !== 'string' || !tr || typeof en !== 'string') return en;
    var x = expand(tr, p);
    return x === null ? en : x;
  }

  /* Lists are used only when they have the same number of entries as the English list. */
  function pickList(tr, en, p) {
    if (!Array.isArray(en) || !Array.isArray(tr) || tr.length !== en.length) return en;
    return en.map(function (e, i) { return pick(tr[i], e, p); });
  }

  function pickPairs(tr, en, p) {
    if (!Array.isArray(en) || !Array.isArray(tr) || tr.length !== en.length) return en;
    return en.map(function (e, i) {
      var x = tr[i];
      return Array.isArray(x) ? [pick(x[0], e[0], p), pick(x[1], e[1], p)] : e;
    });
  }

  function localizeSection(sec, tr, p) {
    if (!tr || typeof tr !== 'object') return sec;
    var out = copyOf(sec);
    out.h = pick(tr.h, sec.h, p);
    if (sec.p) out.p = pickList(tr.p, sec.p, p);
    if (sec.steps) out.steps = pickList(tr.steps, sec.steps, p);
    if (sec.pairs) out.pairs = pickPairs(tr.pairs, sec.pairs, p);
    if (sec.list) out.list = pickList(tr.list, sec.list, p);
    if (sec.notH) out.notH = pick(tr.notH, sec.notH, p);
    if (sec.notList) out.notList = pickList(tr.notList, sec.notList, p);
    if (sec.after) out.after = pick(tr.after, sec.after, p);
    if (Array.isArray(sec.items)) {
      var same = Array.isArray(tr.items) && tr.items.length === sec.items.length;
      out.items = sec.items.map(function (it, i) {
        var c = copyOf(it);
        if (same && tr.items[i]) c.blurb = pick(tr.items[i].blurb, it.blurb, p);
        return c;
      });
    }
    return out;
  }

  function localizeProduct(p) {
    if (I.lang === 'en') return p;
    var all = window.I18N_PRODUCTS && window.I18N_PRODUCTS[I.lang];
    var tr = all && all[p.slug];
    var out = copyOf(p);
    if (!tr || typeof tr !== 'object') { out.untranslated = true; return out; }
    ['short', 'tagline', 'card', 'row', 'soonNote'].forEach(function (k) {
      if (p[k] !== undefined) out[k] = pick(tr[k], p[k], p);
    });
    if (p.intro) out.intro = pickList(tr.intro, p.intro, p);
    if (p.facts) out.facts = pickPairs(tr.facts, p.facts, p);
    if (Array.isArray(p.sections)) {
      var same = Array.isArray(tr.sections) && tr.sections.length === p.sections.length;
      out.sections = p.sections.map(function (sec, i) { return localizeSection(sec, same ? tr.sections[i] : null, p); });
    }
    if (p.cta) {
      var c = copyOf(p.cta);
      var tc = tr.cta && typeof tr.cta === 'object' ? tr.cta : {};
      ['label', 'rowLabel', 'note'].forEach(function (k) {
        if (p.cta[k] !== undefined) c[k] = pick(tc[k], p.cta[k], p);
      });
      out.cta = c;
    }
    return out;
  }

  /* Body items are paragraphs (strings) or headings ({ h }). A translated body must match item for item. */
  function sameBody(tr, en) {
    en = Array.isArray(en) ? en : [];
    if (!Array.isArray(tr) || tr.length !== en.length) return false;
    for (var i = 0; i < en.length; i++) {
      var a = tr[i];
      var b = en[i];
      if (typeof a === 'string' && typeof b === 'string') continue;
      if (a && b && typeof a === 'object' && typeof b === 'object' && a.h && b.h) continue;
      return false;
    }
    return true;
  }

  function localizePost(post) {
    if (I.lang === 'en') return post;
    var tr = post.tr && post.tr[I.lang];
    var out = copyOf(post);
    if (!tr || typeof tr !== 'object' || !tr.title || !sameBody(tr.body, post.body)) {
      out.untranslated = true;
      return out;
    }
    out.title = tr.title;
    if (post.summary && tr.summary) out.summary = tr.summary;
    if (post.tag && tr.tag) out.tag = tr.tag;
    out.body = tr.body;
    return out;
  }

  /* ---------- data ---------- */

  function allPosts() {
    var raw = Array.isArray(window.BLOG_POSTS) ? window.BLOG_POSTS : [];
    return raw
      .filter(function (p) { return p && p.slug && p.title; })
      .sort(function (a, b) {
        var da = String(a.date || '');
        var db = String(b.date || '');
        return da < db ? 1 : da > db ? -1 : 0;
      })
      .map(localizePost);
  }

  /* Products that are switched off ("off") are hidden everywhere: lists, product pages, related cards. */
  function products() {
    var raw = Array.isArray(window.PRODUCTS) ? window.PRODUCTS : [];
    return raw
      .filter(function (p) { return p && p.slug && p.name && p.status !== 'off'; })
      .map(localizeProduct);
  }

  function productBySlug(slug) {
    return products().filter(function (p) { return p.slug === slug; })[0];
  }

  /* kind and audience stay in English in the data ("Personal" and "SME" also decide the lists);
     these give the words to show. */
  function kindText(p) { return t('kind:' + p.kind, p.kind); }
  function audienceText(p) { return t('aud:' + p.audience, p.audience); }

  function priceText(p) {
    if (p.status === 'soon') return t('status.soon', 'Coming soon');
    if (p.status === 'free') return t('price.free', 'Free');
    return p.price || '';
  }

  function formatDate(iso) {
    var s = String(iso || '');
    var d = new Date(s + 'T00:00:00');
    if (isNaN(d.getTime())) return s;
    return d.toLocaleDateString(I.locale || 'en-AU', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null) n.textContent = text;
    return n;
  }

  function safeUrl(u) {
    var s = String(u || '');
    return /^https?:\/\//i.test(s) ? s : null;
  }

  function postRow(post, compact) {
    var row = el('div', 'post-row' + (compact ? ' compact' : ''));
    if (post.untranslated && I.lang !== 'en') row.setAttribute('lang', 'en');
    row.appendChild(el('p', 'meta', formatDate(post.date) + (post.tag ? '  ' + DOT + '  ' + post.tag : '')));
    var h3 = el('h3');
    var a = el('a', null, post.title);
    a.href = 'post.html#' + encodeURIComponent(post.slug);
    h3.appendChild(a);
    row.appendChild(h3);
    if (post.summary) row.appendChild(el('p', 'summary', post.summary));
    return row;
  }

  function emptyState(eyebrow, text) {
    var box = el('div', 'empty-state');
    box.appendChild(el('p', 'eyebrow', eyebrow));
    box.appendChild(el('p', null, text));
    return box;
  }

  window.Site = {
    lang: I.lang,
    t: t,
    typeOf: typeOf,
    typeLabel: typeLabel,
    allPosts: allPosts,
    products: products,
    productBySlug: productBySlug,
    kindText: kindText,
    audienceText: audienceText,
    priceText: priceText,
    formatDate: formatDate,
    el: el,
    safeUrl: safeUrl,
    postRow: postRow,
    emptyState: emptyState,
    dot: DOT
  };
})();
