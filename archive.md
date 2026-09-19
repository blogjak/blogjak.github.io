---
layout: default
title: "Arsip"
description: "Semua artikel Blogjak Theme diurutkan berdasarkan tahun."
permalink: /archive/
---

<div class="container">
  <article class="page-content">

    <header class="post-header">
      <h1 class="post-title">Arsip Artikel</h1>
      <p class="post-description">
        Seluruh artikel yang pernah dipublikasikan, dikelompokkan berdasarkan tahun.
      </p>
    </header>

    <div class="archive-list">
      {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

      {% if posts_by_year.size > 0 %}
        {% for year in posts_by_year %}
          <section class="archive-year">
            <h2 class="archive-year-title">
              <i class="fa-regular fa-calendar"></i>
              {{ year.name }}
              <span class="archive-count">{{ year.items | size }} artikel</span>
            </h2>

            <ul class="archive-items">
              {% for post in year.items %}
                <li class="archive-item">
                  <time class="archive-date" datetime="{{ post.date | date_to_xmlschema }}">
                    {{ post.date | date: "%d %b" }}
                  </time>
                  <a class="archive-link" href="{{ post.url | relative_url }}">
                    {{ post.title }}
                  </a>
                  {% if post.categories.first %}
                    <span class="archive-cat">{{ post.categories.first }}</span>
                  {% endif %}
                </li>
              {% endfor %}
            </ul>
          </section>
        {% endfor %}
      {% else %}
        <div class="empty-state">
          <i class="fa-regular fa-folder-open"></i>
          <h2>Belum Ada Artikel</h2>
          <p>Tambahkan berkas Markdown di folder <code>_posts/</code>.</p>
        </div>
      {% endif %}
    </div>

    <div class="back-home">
      <a href="{{ '/' | relative_url }}" class="btn btn-primary">
        <i class="fa-solid fa-house"></i> Kembali ke Beranda
      </a>
    </div>

  </article>
</div>
