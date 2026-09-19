---
layout: default
title: "Tag"
description: "Jelajahi artikel berdasarkan tag."
permalink: /tags/
---

<div class="container">
  <header class="post-header">
    <h1 class="post-title">Tag</h1>
    <p class="post-description">
      Jelajahi artikel berdasarkan tag. Total {{ site.tags.size }} tag tersedia.
    </p>
  </header>

  {% if site.tags.size > 0 %}
    <div class="tag-cloud">
      {% assign sorted_tags = site.tags | sort %}
      {% for tag in sorted_tags %}
        {% assign tag_name = tag[0] %}
        {% assign tag_posts = tag[1] %}
        {% assign tag_slug = tag_name | slugify %}
        {% assign tag_count = tag_posts | size %}

        {% assign size_class = 'tag-size-sm' %}
        {% if tag_count >= 3 %}{% assign size_class = 'tag-size-md' %}{% endif %}
        {% if tag_count >= 5 %}{% assign size_class = 'tag-size-lg' %}{% endif %}
        {% if tag_count >= 10 %}{% assign size_class = 'tag-size-xl' %}{% endif %}

        <a class="tag-chip {{ size_class }}"
           href="{{ '/tags/' | append: tag_slug | append: '/' | relative_url }}">
          <span class="tag-hash">#</span>{{ tag_name }}
          <span class="tag-count">{{ tag_count }}</span>
        </a>
      {% endfor %}
    </div>
  {% else %}
    <div class="empty-state">
      <h2>Belum Ada Tag</h2>
      <p>Tambahkan <code>tags: [nama]</code> di front matter artikel untuk membuat tag.</p>
    </div>
  {% endif %}

  <div class="back-home">
    <a href="{{ '/' | relative_url }}" class="btn btn-primary">
      <i class="fa-solid fa-house"></i> Kembali ke Beranda
    </a>
  </div>
</div>
