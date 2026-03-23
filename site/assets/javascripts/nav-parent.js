/* ============================================================
   NAV.JS v3 — Minimal, just chevron smooth + cursor
   docs/assets/javascripts/nav.js
   ============================================================ */
(function () {
  'use strict';

  var s = document.createElement('style');
  s.textContent =
    '.md-nav__item--nested > label.md-nav__link .md-nav__icon {' +
    '  transition: transform 0.22s cubic-bezier(.22,.68,0,1.2) !important; }' +
    '.md-nav__item--nested > label.md-nav__link { cursor: pointer; }';
  document.head.appendChild(s);

})();