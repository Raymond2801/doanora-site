/* Builds the product cards and rows on the home page and the Products page from
   window.PRODUCTS (products-data.js). Everything is built with textContent, never innerHTML.
   Words that are not in the data (buttons, labels) come from S.t(key, English) so they follow the
   language the visitor chose.

   An element with data-catalog="featured" gets the featured cards.
   An element with data-catalog="personal" or data-catalog="sme" gets the matching rows. */
(function () {
  var S = window.Site;
  if (!S) return;
  var ARROW_R = String.fromCharCode(8594);

  function href(slug) { return 'product.html#' + encodeURIComponent(slug); }

  function hidden(node) { node.setAttribute('aria-hidden', 'true'); return node; }

  function titleLink(p) {
    var a = S.el('a', 'hit', p.name);
    a.href = href(p.slug);
    return a;
  }

  function buyLink(p, label, cls) {
    var url = p.cta && S.safeUrl(p.cta.url);
    if (!url) return null;
    var a = S.el('a', cls, label);
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener';
    return a;
  }

  function detailsText() { return S.t('details', 'Details') + ' ' + ARROW_R; }

  function english(node, p) {
    /* A product with no translation yet shows in English; say so for screen readers. */
    if (p.untranslated && S.lang !== 'en') node.setAttribute('lang', 'en');
    return node;
  }

  function card(p) {
    var soon = p.status === 'soon';
    var art = english(S.el('article', 'feature' + (soon ? ' soon' : '')), p);
    var top = S.el('div', 'card-top');
    top.appendChild(S.el('span', 'tag', S.kindText(p) + ' ' + S.dot + ' ' + S.audienceText(p)));
    top.appendChild(S.el('span', soon ? 'status' : 'price', S.priceText(p)));
    art.appendChild(top);
    var h3 = S.el('h3');
    h3.appendChild(titleLink(p));
    art.appendChild(h3);
    art.appendChild(S.el('p', null, p.card || p.tagline || p.short || ''));
    var foot = S.el('div', 'card-foot');
    if (soon) {
      foot.appendChild(S.el('span', 'note', S.t('note.notyet', 'Not on sale yet')));
    } else {
      var buy = buyLink(p, (p.cta && p.cta.label) || S.t('cta.getit', 'Get it'), 'btn btn-primary');
      if (buy) foot.appendChild(buy);
    }
    foot.appendChild(hidden(S.el('span', 'more', detailsText())));
    art.appendChild(foot);
    return art;
  }

  function row(p) {
    var soon = p.status === 'soon';
    var free = p.status === 'free';
    var li = english(S.el('li', 'row' + (soon ? ' soon' : '')), p);
    var main = S.el('div', 'row-main');
    var h3 = S.el('h3');
    h3.appendChild(titleLink(p));
    h3.appendChild(document.createTextNode(' '));
    h3.appendChild(p.featured ? S.el('span', 'tag hot', S.t('chip.featured', 'Featured')) : S.el('span', 'tag', S.kindText(p)));
    main.appendChild(h3);
    main.appendChild(S.el('p', null, p.row || p.tagline || p.short || ''));
    li.appendChild(main);
    var side = S.el('div', 'row-side');
    side.appendChild(hidden(S.el('span', 'more', detailsText())));
    if (soon) {
      side.appendChild(S.el('span', 'status', S.t('status.soon', 'Coming soon')));
    } else {
      if (!free && p.price) side.appendChild(S.el('span', 'price', p.price));
      var label = (p.cta && p.cta.rowLabel) || (free ? S.t('cta.open', 'Open') : S.t('cta.getit', 'Get it'));
      var buy = buyLink(p, label, free ? 'btn btn-ghost' : 'btn btn-primary');
      if (buy) side.appendChild(buy);
    }
    li.appendChild(side);
    return li;
  }

  function fill(host) {
    var which = host.getAttribute('data-catalog');
    var items = S.products().filter(function (p) {
      if (which === 'featured') return p.featured === true;
      return p.audience === (which === 'sme' ? 'SME' : 'Personal');
    });
    host.textContent = '';
    if (!items.length) {
      var empty = S.emptyState(S.t('empty.e', 'Nothing here yet'), S.t('empty.p', 'Products will appear here soon.'));
      if (host.tagName === 'UL') {
        var li = S.el('li');
        li.appendChild(empty);
        host.appendChild(li);
      } else {
        empty.style.gridColumn = '1 / -1';
        host.appendChild(empty);
      }
      return;
    }
    items.forEach(function (p) { host.appendChild(which === 'featured' ? card(p) : row(p)); });
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-catalog]'), fill);
})();
