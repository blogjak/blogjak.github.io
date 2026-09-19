---
layout: default
title: "Kontak"
description: "Hubungi Blogjak Theme melalui email atau media sosial."
permalink: /contact/
---

<div class="container">
  <article class="page-content">

    <header class="post-header">
      <h1 class="post-title">Kontak</h1>
      <p class="post-description">
        Ada pertanyaan, saran, atau ingin berkolaborasi? Silakan hubungi kami melalui salah satu kanal di bawah ini.
      </p>
    </header>

    <div class="contact-grid">

      <a href="mailto:{{ site.email }}" class="contact-card">
        <div class="contact-icon"><i class="fa-solid fa-envelope"></i></div>
        <h3>Email</h3>
        <p>{{ site.email }}</p>
      </a>

      {% if site.social.github %}
      <a href="{{ site.social.github }}" target="_blank" rel="noopener" class="contact-card">
        <div class="contact-icon"><i class="fa-brands fa-github"></i></div>
        <h3>GitHub</h3>
        <p>Lihat repositori & kontribusi</p>
      </a>
      {% endif %}

      {% if site.social.twitter %}
      <a href="{{ site.social.twitter }}" target="_blank" rel="noopener" class="contact-card">
        <div class="contact-icon"><i class="fa-brands fa-twitter"></i></div>
        <h3>Twitter</h3>
        <p>Ikuti update terbaru</p>
      </a>
      {% endif %}

      {% if site.social.instagram %}
      <a href="{{ site.social.instagram }}" target="_blank" rel="noopener" class="contact-card">
        <div class="contact-icon"><i class="fa-brands fa-instagram"></i></div>
        <h3>Instagram</h3>
        <p>Lihat keseharian kami</p>
      </a>
      {% endif %}

      {% if site.social.youtube %}
      <a href="{{ site.social.youtube }}" target="_blank" rel="noopener" class="contact-card">
        <div class="contact-icon"><i class="fa-brands fa-youtube"></i></div>
        <h3>YouTube</h3>
        <p>Tonton video tutorial</p>
      </a>
      {% endif %}

      {% if site.social.linkedin %}
      <a href="{{ site.social.linkedin }}" target="_blank" rel="noopener" class="contact-card">
        <div class="contact-icon"><i class="fa-brands fa-linkedin"></i></div>
        <h3>LinkedIn</h3>
        <p>Terhubung profesional</p>
      </a>
      {% endif %}

    </div>

    <div class="post-content" style="margin-top: 48px;">
      <h2>💬 Kirim Pesan</h2>
      <p>
        Untuk pertanyaan cepat, kirim email ke
        <a href="mailto:{{ site.email }}">{{ site.email }}</a>.
        Kami biasanya membalas dalam 1–2 hari kerja.
      </p>

      <details>
        <summary>Ingin melaporkan bug atau request fitur?</summary>
        <p>
          Silakan buka <em>issue</em> di
          <a href="{{ site.social.github }}/issues" target="_blank" rel="noopener">repositori GitHub</a>
          dengan menyertakan deskripsi, langkah reproduksi, dan versi browser.
        </p>
      </details>
    </div>

    <div class="back-home">
      <a href="{{ '/' | relative_url }}" class="btn btn-primary">
        <i class="fa-solid fa-house"></i> Kembali ke Beranda
      </a>
    </div>

  </article>
</div>
