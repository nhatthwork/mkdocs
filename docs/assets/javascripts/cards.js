/* ============================================================
   CARDS.JS v5 — Premium Interactions
   docs/assets/javascripts/cards.js
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Inject styles ---------- */
  if (!document.getElementById('ncard-fx')) {
    var s = document.createElement('style');
    s.id = 'ncard-fx';
    s.textContent = [
      /* Ripple */
      '@keyframes ncRipple { to { transform:scale(1); opacity:0; } }',
      '.nc-ripple { position:absolute; border-radius:50%; pointer-events:none;',
      '  background:rgba(54,55,147,0.07); transform:scale(0);',
      '  animation:ncRipple 0.65s ease-out forwards; }',

      /* Shine sweep */
      '@keyframes ncShine {',
      '  0%   { left:-80%; opacity:0; }',
      '  20%  { opacity:1; }',
      '  100% { left:130%; opacity:0; } }',
      '.nc-shine { position:absolute; top:0; width:60%; height:100%;',
      '  background:linear-gradient(105deg,transparent 20%,rgba(255,255,255,0.45) 50%,transparent 80%);',
      '  pointer-events:none; opacity:0; animation:ncShine 0.7s ease-out forwards; }',

      /* Magnetic float */
      '.ncard { will-change:transform; }',

      /* Icon pulse on card hover */
      '@keyframes ncIconPop {',
      '  0%   { transform:scale(1) rotate(0deg); }',
      '  40%  { transform:scale(1.15) rotate(-5deg); }',
      '  70%  { transform:scale(1.08) rotate(3deg); }',
      '  100% { transform:scale(1.1) rotate(-4deg); } }',
      '.ncard:hover .ncard-icon { animation:ncIconPop 0.35s ease-out forwards; }',

      /* Arrow bounce */
      '@keyframes ncArrow {',
      '  0%   { transform:translate(0,0); }',
      '  40%  { transform:translate(4px,-4px); }',
      '  70%  { transform:translate(1px,-1px); }',
      '  100% { transform:translate(2px,-2px); } }',
      '.ncard:hover .ncard-arrow { animation:ncArrow 0.3s ease-out forwards; }',
    ].join('\n');
    document.head.appendChild(s);
  }

  /* ---------- Scroll reveal ---------- */
  var revealObserver = null;
  if ('IntersectionObserver' in window) {
    var revealStyle = document.createElement('style');
    revealStyle.textContent =
      '.ncard.nc-hidden { opacity:0; transform:translateY(24px); transition:opacity 0.5s ease, transform 0.5s cubic-bezier(.22,.68,0,1.2); }' +
      '.ncard.nc-visible { opacity:1; transform:translateY(0); }';
    document.head.appendChild(revealStyle);

    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var card = entry.target;
          var delay = (card._ncIndex || 0) * 60;
          setTimeout(function () {
            card.classList.remove('nc-hidden');
            card.classList.add('nc-visible');
          }, delay);
          revealObserver.unobserve(card);
        }
      });
    }, { threshold: 0.1 });
  }

  /* ---------- Attach to single card ---------- */
  function attachCard(card) {
    if (card._ncInit) return;
    card._ncInit = true;

    /* Scroll reveal setup */
    if (revealObserver) {
      var grid = card.closest('.card-grid-2,.card-grid-3,.card-grid-4');
      if (grid) {
        var siblings = grid.querySelectorAll('.ncard');
        siblings.forEach(function (c, i) { c._ncIndex = i; });
      }
      card.classList.add('nc-hidden');
      revealObserver.observe(card);
    }

    /* Ripple on click */
    card.addEventListener('click', function (e) {
      var old = card.querySelector('.nc-ripple');
      if (old) old.remove();
      var r = document.createElement('span');
      r.className = 'nc-ripple';
      var rect = card.getBoundingClientRect();
      var size = Math.max(rect.width, rect.height) * 2.4;
      r.style.cssText =
        'width:' + size + 'px;height:' + size + 'px;' +
        'left:' + (e.clientX - rect.left - size / 2) + 'px;' +
        'top:'  + (e.clientY - rect.top  - size / 2) + 'px;';
      card.appendChild(r);
      setTimeout(function () { r.remove(); }, 700);
    });

    /* Shine sweep on mouseenter */
    card.addEventListener('mouseenter', function () {
      var old = card.querySelector('.nc-shine');
      if (old) old.remove();
      var shine = document.createElement('span');
      shine.className = 'nc-shine';
      shine.style.top = '0';
      card.appendChild(shine);
      setTimeout(function () { shine.remove(); }, 750);
    });

    /* 3D magnetic tilt on mousemove */
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var dx = (e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2);
      var dy = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2);
      card.style.transform =
        'translateY(-6px) rotateX(' + (-dy * 3) + 'deg) rotateY(' + (dx * 3) + 'deg) scale(1.01)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
    });

    /* Click scale feedback */
    card.addEventListener('mousedown', function () {
      card.style.transform = 'scale(0.98)';
    });
    card.addEventListener('mouseup', function () {
      card.style.transform = '';
    });

    /* Block events on download button */
    var dlBtn = card.querySelector('.ncard-dl-icon');
    if (dlBtn) {
      dlBtn.addEventListener('click', function (e) { e.stopPropagation(); });
      dlBtn.addEventListener('mousedown', function (e) { e.stopPropagation(); });
    }
  }

  /* ---------- Init all cards ---------- */
  function initCards() {
    document.querySelectorAll('.ncard').forEach(attachCard);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCards);
  } else {
    initCards();
  }

  /* Re-init on Zencical SPA navigation */
  new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      m.addedNodes.forEach(function (node) {
        if (node.nodeType !== 1) return;
        if (node.classList && node.classList.contains('ncard')) attachCard(node);
        if (node.querySelectorAll) node.querySelectorAll('.ncard').forEach(attachCard);
      });
    });
  }).observe(document.body, { childList: true, subtree: true });

})();