/* Language layer: English, Vietnamese or Spanish.

   Load this file first on every page, before any markup, so that a translated page never flashes
   English. The language is chosen in this order: ?lang= in the address, the visitor's saved choice,
   the browser language, then English.

   Text lives in three places:
     the pages and products-data.js         English (always complete, always the fallback)
     ui-vi.js, ui-es.js                      interface text, keyed by name (window.I18N_UI.<lang>)
     products-vi.js, products-es.js          product pages (window.I18N_PRODUCTS.<lang>.<slug>)
   A string that has no translation simply shows in English, so a missing translation never breaks a page.

   Static text in the pages carries data-i18n="key" (its text) or data-i18n-aria="key" (its aria-label).
   Scripts ask for text with I18n.t(key, englishText). Changing language saves the choice and reloads
   the page. Everything is set with textContent, never innerHTML. */
(function () {
  'use strict';

  var KEY = 'rd-lang';
  var SCROLL_KEY = 'rd-scroll';
  var LANGS = [
    { code: 'en', short: 'EN', locale: 'en-AU' },
    { code: 'vi', short: 'VI', locale: 'vi-VN' },
    { code: 'es', short: 'ES', locale: 'es' }
  ];
  var root = document.documentElement;

  function known(code) {
    code = String(code || '').toLowerCase().slice(0, 2);
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i].code === code) return LANGS[i];
    return null;
  }

  function fromParam() {
    var m = /(?:^|[?&])lang=([A-Za-z-]+)/.exec(location.search || '');
    var l = m && known(m[1]);
    return l ? l.code : '';
  }

  function read() {
    try { return localStorage.getItem(KEY) || ''; } catch (e) { return ''; }
  }

  function save(code) {
    try { localStorage.setItem(KEY, code); return localStorage.getItem(KEY) === code; } catch (e) { return false; }
  }

  function fromBrowser() {
    var list = [];
    try { list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language]; } catch (e) {}
    for (var i = 0; i < list.length; i++) {
      var l = known(list[i]);
      if (l) return l.code;
    }
    return 'en';
  }

  /* An address with ?lang= wins and travels with the visitor through the site ("carry"), so a shared
     link opens in its language and a browser that cannot save anything still keeps its choice. */
  function resolve() {
    var p = fromParam();
    if (p) return { lang: p, carry: true };
    var s = known(read());
    if (s) return { lang: s.code, carry: false };
    return { lang: fromBrowser(), carry: false };
  }

  var state = resolve();
  var lang = state.lang;
  var carry = state.carry;
  var info = known(lang);

  root.setAttribute('lang', lang);

  function reveal() { root.classList.remove('i18n-pending'); }
  if (lang !== 'en') {
    /* Keep the page hidden until it is translated. The timer is a safety net: if a script fails,
       the English page still appears. */
    root.classList.add('i18n-pending');
    setTimeout(reveal, 3000);
  }

  function dict() {
    return (window.I18N_UI && window.I18N_UI[lang]) || null;
  }

  function t(key, fallback) {
    var d = lang !== 'en' ? dict() : null;
    var v = d && d[key];
    if (typeof v === 'string' && v) return v;
    return fallback === undefined ? key : fallback;
  }

  function apply() {
    var d = dict();
    if (!d) return;
    var i, n, v;
    var nodes = document.querySelectorAll('[data-i18n]');
    for (i = 0; i < nodes.length; i++) {
      n = nodes[i];
      v = d[n.getAttribute('data-i18n')];
      if (typeof v === 'string' && v) n.textContent = v;
    }
    nodes = document.querySelectorAll('[data-i18n-aria]');
    for (i = 0; i < nodes.length; i++) {
      n = nodes[i];
      v = d[n.getAttribute('data-i18n-aria')];
      if (typeof v === 'string' && v) n.setAttribute('aria-label', v);
    }
  }

  /* ---------- addresses ---------- */

  /* href with any lang= removed, then lang=code added when code is given. */
  function withLang(href, code) {
    var hash = '';
    var i = href.indexOf('#');
    if (i >= 0) { hash = href.slice(i); href = href.slice(0, i); }
    var q = '';
    i = href.indexOf('?');
    if (i >= 0) { q = href.slice(i + 1); href = href.slice(0, i); }
    var parts = q ? q.split('&').filter(function (s) { return s && !/^lang=/i.test(s); }) : [];
    if (code) parts.push('lang=' + code);
    return href + (parts.length ? '?' + parts.join('&') : '') + hash;
  }

  function isPageLink(a) {
    var href = a.getAttribute('href');
    if (!href || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(href)) return false;
    return /\.html?(?:[?#]|$)/i.test(href);
  }

  function carryLink(a) {
    if (carry && isPageLink(a)) a.setAttribute('href', withLang(a.getAttribute('href'), lang));
  }

  function onLinkEvent(e) {
    if (!carry) return;
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (a) carryLink(a);
  }
  document.addEventListener('click', onLinkEvent, true);
  document.addEventListener('auxclick', onLinkEvent, true);

  /* ---------- switching ---------- */

  function set(code) {
    var target = known(code);
    if (!target || target.code === lang) return;
    var saved = save(target.code);
    try {
      sessionStorage.setItem(SCROLL_KEY, JSON.stringify({ p: location.pathname + location.hash, y: Math.round(window.pageYOffset || 0) }));
    } catch (e) {}
    var here = location.pathname + location.search + location.hash;
    /* The address carries the language when it already did, or when the choice could not be saved. */
    var next = withLang(here, (carry || !saved) ? target.code : null);
    if (next === here) location.reload(); else location.assign(next);
  }

  function restoreScroll() {
    var y = 0;
    try {
      var raw = sessionStorage.getItem(SCROLL_KEY);
      if (raw) {
        sessionStorage.removeItem(SCROLL_KEY);
        var s = JSON.parse(raw);
        if (s && s.p === location.pathname + location.hash && s.y > 0) y = s.y;
      }
    } catch (e) {}
    if (!y) return;
    try { window.scrollTo({ top: y, left: 0, behavior: 'instant' }); }
    catch (e) { try { window.scrollTo(0, y); } catch (e2) {} }
  }

  /* A page restored from the back/forward cache keeps the language it was loaded with.
     If the choice changed meanwhile, load it again. */
  window.addEventListener('pageshow', function (e) {
    if (e.persisted && resolve().lang !== lang) location.reload();
  });

  function wireSwitcher() {
    var box = document.querySelector('.lang-switch');
    if (!box) return;
    var btn = box.querySelector('.lang-btn');
    var menu = box.querySelector('.lang-menu');
    var codeEl = box.querySelector('.lang-code');
    if (!btn || !menu) return;
    var opts = menu.querySelectorAll('[data-lang]');
    var name = info.short;
    var i;
    for (i = 0; i < opts.length; i++) {
      if (opts[i].getAttribute('data-lang') === lang) {
        opts[i].setAttribute('aria-current', 'true');
        name = opts[i].textContent;
      } else {
        opts[i].removeAttribute('aria-current');
      }
      opts[i].addEventListener('click', function (ev) {
        var code = ev.currentTarget.getAttribute('data-lang');
        if (code === lang) close(true); else set(code);
      });
    }
    if (codeEl) codeEl.textContent = info.short;
    btn.setAttribute('aria-label', t('lang.label', 'Language') + ': ' + name);

    function close(refocus) {
      menu.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      if (refocus) btn.focus();
    }
    function open() {
      menu.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      var cur = menu.querySelector('[aria-current]') || opts[0];
      if (cur) cur.focus();
    }
    btn.addEventListener('click', function () { if (menu.hidden) open(); else close(false); });
    document.addEventListener('click', function (ev) { if (!menu.hidden && !box.contains(ev.target)) close(false); });
    box.addEventListener('focusout', function (ev) {
      if (!menu.hidden && ev.relatedTarget && !box.contains(ev.relatedTarget)) close(false);
    });
    box.addEventListener('keydown', function (ev) {
      if (menu.hidden) return;
      if (ev.key === 'Escape') { ev.preventDefault(); close(true); return; }
      var list = Array.prototype.slice.call(opts);
      var at = list.indexOf(document.activeElement);
      var to = -1;
      if (ev.key === 'ArrowDown') to = at < 0 ? 0 : (at + 1) % list.length;
      else if (ev.key === 'ArrowUp') to = at <= 0 ? list.length - 1 : at - 1;
      else if (ev.key === 'Home') to = 0;
      else if (ev.key === 'End') to = list.length - 1;
      if (to >= 0) { ev.preventDefault(); list[to].focus(); }
    });
  }

  function ready() {
    apply();
    wireSwitcher();
    if (carry) {
      var links = document.querySelectorAll('a[href]');
      for (var i = 0; i < links.length; i++) carryLink(links[i]);
    }
    restoreScroll();
    reveal();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready); else ready();

  window.I18n = {
    lang: lang,
    locale: info.locale,
    carry: carry,
    t: t,
    set: set
  };
})();
