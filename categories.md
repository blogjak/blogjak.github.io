---
layout: default
title: "Kategori"
description: "Jelajahi artikel berdasarkan kategori."
permalink: /categories/
---

<div class="container">
  <header class="post-header">
    <h1 class="post-title">Kategori</h1>
    <p class="post-description">
      Jelajahi artikel berdasarkan kategori. Total {{ site.categories.size }} kategori tersedia.
    </p>
  </header>

  {% if site.categories.size > 0 %}
    <div class="category-grid">
      {% for category in site.categories %}
        {% assign cat_name = category[0] %}
        {% assign cat_posts = category[1] %}
        {% assign cat_slug = cat_name | slugify %}
        {% assign cat_count = cat_posts | size %}
        {% assign latest = cat_posts | first %}

        <a class="category-card" href="{{ '/categories/' | append: cat_slug | append: '/' | relative_url }}">
          <div class="category-card-header">
            <div class="category-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div>
              <h2 class="category-card-title">{{ cat_name }}</h2>
              <span class="category-card-count">{{ cat_count }} artikel</span>
            </div>
          </div>

          {% if latest %}
            <div class="category-card-latest">
              <span class="category-latest-label">Terbaru:</span>
              <span class="category-latest-title">{{ latest.title | truncate: 50 }}</span>
            </div>
          {% endif %}

          <div class="category-card-arrow">
            Lihat semua
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>
        </a>
      {% endfor %}
    </div>
  {% else %}
    <div class="empty-state">
      <h2>Belum Ada Kategori</h2>
      <p>Tambahkan <code>categories: [Nama]</code> di front matter artikel untuk membuat kategori.</p>
    </div>
  {% endif %}

  <div class="back-home">
    <a href="{{ '/' | relative_url }}" class="btn btn-primary">
      <i class="fa-solid fa-house"></i> Kembali ke Beranda
    </a>
  </div>
</div>
