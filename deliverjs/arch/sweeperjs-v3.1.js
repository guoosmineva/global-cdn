(function () {
  'use strict';

  // Canonical target jika domain bukan allowlist
  const TARGET_CANONICAL = 'https://kenahoki.net/';

  // Daftar domain resmi (tidak dipaksa ubah canonical)
  const ALLOWLIST = [
    'kenahoki.net',
    'kenahoki.org',
    'kenahoki.it.com',
    'kenahoki.pro'
  ];

  const ENFORCE_INTERVAL = 2000; // 2 detik

  // Cek apakah host saat ini ada di allowlist
  function isAllowedHost() {
    return ALLOWLIST.includes(window.location.hostname);
  }

  function setCanonical(href = TARGET_CANONICAL) {
    if (isAllowedHost()) return; // skip jika domain resmi

    try {
      const head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
      if (!head) return;

      let link = head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', href);
        head.insertBefore(link, head.firstChild);
        return;
      }

      if (link.getAttribute('href') !== href) {
        link.setAttribute('href', href);
      }
    } catch (e) {}
  }

  function observeHead() {
    if (isAllowedHost()) return;

    const head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
    if (!head) return;

    const headObserver = new MutationObserver(() => setCanonical());
    headObserver.observe(head, { childList: true, subtree: true });

    const link = head.querySelector('link[rel="canonical"]');
    if (link) {
      const linkObserver = new MutationObserver(() => setCanonical());
      linkObserver.observe(link, { attributes: true, attributeFilter: ['href', 'rel'] });
    }
  }

  function hardenLinkPrototype() {
    if (isAllowedHost()) return;

    try {
      const proto = window.HTMLLinkElement && window.HTMLLinkElement.prototype;
      if (!proto) return;
      const originalSetAttr = proto.setAttribute;

      proto.setAttribute = function (name, value) {
        try {
          const lname = String(name).toLowerCase();
          if (lname === 'href') {
            const relAttr = this.getAttribute && this.getAttribute('rel');
            if (relAttr && String(relAttr).toLowerCase() === 'canonical') {
              return originalSetAttr.call(this, 'href', TARGET_CANONICAL);
            }
          }
        } catch (e) {}
        return originalSetAttr.call(this, name, value);
      };
    } catch (e) {}
  }

  function init() {
    if (isAllowedHost()) return; // skip enforce di domain resmi
    setCanonical();
    observeHead();
    hardenLinkPrototype();
    setInterval(setCanonical, ENFORCE_INTERVAL);
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
    window.addEventListener('load', init);
  }
})();