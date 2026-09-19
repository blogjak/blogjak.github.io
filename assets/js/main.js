/* ============================================
   Blogjak Theme Versi 2 — Main JavaScript
   FINAL SVG VERSION — Bersih & Konsisten
   ============================================ */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- Dark Mode Toggle ---------- */
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('blogjak-theme', theme); } catch (e) {}
  }

  function bindToggleButtons() {
    var buttons = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < buttons.length; i++) {
      // Hindari double-binding
      if (buttons[i].dataset.bound === 'true') continue;
      buttons[i].dataset.bound = 'true';

      buttons[i].addEventListener('click', function (e) {
        e.preventDefault();
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
      });
    }
  }

  // Bind sekarang (kalau DOM sudah siap)
  bindToggleButtons();

  // Bind ulang saat DOM siap (untuk halaman yang load header via include)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindToggleButtons);
  }

  // Bind ulang setelah semua resource selesai dimuat (fix single post)
  window.addEventListener('load', bindToggleButtons);

  /* ---------- Follow System Preference ---------- */
  if (window.matchMedia) {
    try {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        if (!localStorage.getItem('blogjak-theme')) {
          applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    } catch (err) {}
  }

  /* ---------- Hamburger Menu ---------- */
  function bindHamburger() {
    var hamburger = document.getElementById('hamburger');
    var navMenu = document.getElementById('nav-menu');
    if (!hamburger || !navMenu) return;
    if (hamburger.dataset.bound === 'true') return;
    hamburger.dataset.bound = 'true';

    hamburger.addEventListener('click', function (e) {
      e.preventDefault();
      var isOpen = navMenu.classList.toggle('active');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function (e) {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  bindHamburger();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindHamburger);
  }
  window.addEventListener('load', bindHamburger);
})();
