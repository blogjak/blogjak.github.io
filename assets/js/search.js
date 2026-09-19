/* ============================================
   Blogjak Theme v2.1 — Search Engine (ULTRA ROBUST)
   ============================================ */
(function () {
  'use strict';

  var searchData = [];
  var indexLoaded = false;
  var selectedIndex = -1;
  var maxResults = 10;

  // Baseurl — derive dari URL script src
  var BASEURL = (function () {
    var script = document.currentScript;
    if (!script) return '';
    var src = script.getAttribute('src') || '';
    // src = "/blogjak-theme/assets/js/search.js"
    //       ^^^^^^^^^^^^^^^^ ambil bagian sebelum /assets/
    var match = src.match(/^(.*?)\/assets\//);
    return match ? match[1] : '';
  })();

  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function loadIndex() {
    if (indexLoaded) return;
    indexLoaded = true;
    var url = BASEURL + '/search.json';
    console.log('[Search] Loading index:', url);
    fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (data) {
        searchData = Array.isArray(data) ? data : [];
        console.log('[Search] Index loaded:', searchData.length, 'posts');
      })
      .catch(function (err) {
        console.error('[Search] Failed to load index:', err);
        indexLoaded = false;
      });
  }

  function openModal() {
    var modal = qs('#search-modal');
    if (!modal) {
      console.warn('[Search] Modal not found');
      return;
    }
    loadIndex();
    modal.hidden = false;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(function () {
      var input = qs('#search-input');
      if (input) input.focus();
    }, 80);
  }

  function closeModal() {
    var modal = qs('#search-modal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(function () {
      modal.hidden = true;
      var input = qs('#search-input');
      var results = qs('#search-results');
      if (input) input.value = '';
      if (results) {
        results.innerHTML = '<p class="search-hint"><i class="fa-solid fa-lightbulb"></i> Ketik kata kunci untuk mulai mencari...</p>';
      }
      selectedIndex = -1;
    }, 250);
  }

  /* ---------- EVENT DELEGATION (anti gagal) ---------- */
  document.addEventListener('click', function (e) {
    // Tombol search
    var searchBtn = e.target.closest('[data-search-open]');
    if (searchBtn) {
      e.preventDefault();
      e.stopPropagation();
      var modal = qs('#search-modal');
      if (modal && modal.classList.contains('active')) {
        closeModal();
      } else {
        openModal();
      }
      return;
    }

    // Tombol close / backdrop
    var closeEl = e.target.closest('[data-search-close]');
    if (closeEl) {
      e.preventDefault();
      closeModal();
      return;
    }
  }, true); // capture phase → lebih reliable

  // Touch events untuk mobile (fallback kalau click tidak fire)
  document.addEventListener('touchend', function (e) {
    var searchBtn = e.target.closest('[data-search-open]');
    if (searchBtn) {
      e.preventDefault();
      var modal = qs('#search-modal');
      if (modal && !modal.classList.contains('active')) {
        openModal();
      }
    }
  }, { passive: false });

  /* ---------- Keyboard ---------- */
  document.addEventListener('keydown', function (e) {
    var modal = qs('#search-modal');
    var isOpen = modal && modal.classList.contains('active');

    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      isOpen ? closeModal() : openModal();
      return;
    }
    if (e.key === 'Escape' && isOpen) {
      closeModal();
      return;
    }
    if (!isOpen) return;

    var items = qsa('.search-result-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
      items.forEach(function (it, i) {
        it.classList.toggle('selected', i === selectedIndex);
      });
      if (items[selectedIndex]) items[selectedIndex].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = Math.max(selectedIndex - 1, 0);
      items.forEach(function (it, i) {
        it.classList.toggle('selected', i === selectedIndex);
      });
      if (items[selectedIndex]) items[selectedIndex].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter' && selectedIndex >= 0 && items[selectedIndex]) {
      e.preventDefault();
      window.location.href = items[selectedIndex].href;
    }
  });

  /* ---------- Input listener (delegation) ---------- */
  document.addEventListener('input', function (e) {
    if (!e.target || e.target.id !== 'search-input') return;
    clearTimeout(e.target._debounce);
    e.target._debounce = setTimeout(function () {
      performSearch(e.target.value);
    }, 150);
  });

  /* ---------- Search Logic ---------- */
  function normalize(str) {
    return String(str || '').toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function escapeHtml(s) {
    return String(s || '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function truncate(s, len) {
    s = String(s || '');
    return s.length <= len ? s : s.substring(0, len).trim() + '…';
  }
  function highlight(text, tokens) {
    if (!tokens.length) return text;
    var pattern = '(' + tokens.map(function (t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }).join('|') + ')';
    return text.replace(new RegExp(pattern, 'gi'), '<mark>$1</mark>');
  }
  function scoreItem(item, tokens) {
    var title = normalize(item.title);
    var desc = normalize(item.description);
    var content = normalize(item.content);
    var cats = normalize((item.categories || []).join(' '));
    var tags = normalize((item.tags || []).join(' '));
    var score = 0;
    tokens.forEach(function (t) {
      if (title.indexOf(t) >= 0) score += 100;
      if (title.indexOf(t) === 0) score += 50;
      if (tags.indexOf(t) >= 0) score += 40;
      if (cats.indexOf(t) >= 0) score += 30;
      if (desc.indexOf(t) >= 0) score += 20;
      if (content.indexOf(t) >= 0) score += 5;
    });
    return score;
  }

  function performSearch(query) {
    var results = qs('#search-results');
    if (!results) return;

    var normalized = normalize(query);
    if (normalized.length < 2) {
      results.innerHTML = '<p class="search-hint"><i class="fa-solid fa-lightbulb"></i> Ketik minimal 2 karakter...</p>';
      return;
    }
    if (searchData.length === 0) {
      results.innerHTML = '<p class="search-hint"><i class="fa-solid fa-spinner fa-spin"></i> Memuat indeks...</p>';
      return;
    }

    var tokens = normalized.split(' ').filter(Boolean);
    var scored = searchData
      .map(function (item) { return { item: item, score: scoreItem(item, tokens) }; })
      .filter(function (r) { return r.score > 0; })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, maxResults);

    if (scored.length === 0) {
      results.innerHTML = '<p class="search-empty"><i class="fa-solid fa-circle-question"></i> Tidak ada hasil untuk "<strong>' + escapeHtml(query) + '</strong>"</p>';
      return;
    }

    var html = '<div class="search-count">' + scored.length + ' hasil ditemukan</div>';
    scored.forEach(function (r) {
      var item = r.item;
      html += '<a class="search-result-item" href="' + item.url + '">';
      html += '<div class="search-result-title">' + highlight(escapeHtml(item.title), tokens) + '</div>';
      html += '<div class="search-result-meta">';
      html += '<span><i class="fa-regular fa-calendar"></i>' + escapeHtml(item.date) + '</span>';
      if (item.categories && item.categories.length) {
        html += '<span class="search-result-cat">' + escapeHtml(item.categories[0]) + '</span>';
      }
      html += '</div>';
      html += '<div class="search-result-excerpt">' + highlight(escapeHtml(truncate(item.description, 150)), tokens) + '</div>';
      html += '</a>';
    });
    results.innerHTML = html;
    selectedIndex = -1;
  }

  /* ---------- Preload index setelah page idle ---------- */
  function preload() {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadIndex, { timeout: 3000 });
    } else {
      setTimeout(loadIndex, 2000);
    }
  }

  if (document.readyState === 'complete') {
    preload();
  } else {
    window.addEventListener('load', preload);
  }

  // Expose untuk manual trigger
  window.BlogjakSearch = { open: openModal, close: closeModal, load: loadIndex };
})();
