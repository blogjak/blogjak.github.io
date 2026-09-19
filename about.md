---
layout: default
title: "Tentang"
description: "Tentang Blogjak Theme Versi 2 dan penulisnya."
permalink: /about/
---

<div class="container">
  <article class="page-content">

    <header class="post-header">
      <h1 class="post-title">Tentang</h1>
      <p class="post-description">
        Kenali lebih dekat Blogjak Theme Versi 2 — tema Jekyll native untuk blogging Markdown.
      </p>
    </header>

    <div class="post-content">

## 👋 Halo, Selamat Datang!

**Blogjak Theme Versi 2** adalah tema Jekyll native yang dirancang untuk pengalaman blogging yang bersih, cepat, dan tanpa hambatan. Cukup tulis berkas Markdown di folder `_posts/`, dan semuanya otomatis dirender sebagai kartu galeri dan halaman detail.

## ✨ Filosofi Tema

Tema ini dibangun dengan 3 prinsip utama:

1. **Pure Markdown Workflow** — tidak perlu menyentuh JSON, YAML kompleks, atau HTML manual per artikel.
2. **Native Performance** — tanpa framework berat, hanya Jekyll + CSS modern.
3. **Aksesibilitas & Kenyamanan** — dark mode otomatis, tipografi terbaca, kontras warna terjaga.

## 🚀 Fitur Utama

| Fitur | Deskripsi |
|---|---|
| 🌗 Dark Mode | Deteksi sistem + toggle manual, tersimpan di `localStorage` |
| 🖼️ Gallery Grid | Grid responsif di halaman utama |
| 📄 Pagination | Navigasi lengkap « ‹ 1 2 3 › » |
| 📱 Responsif | Hamburger menu, grid adaptif |
| 🧩 Markdown Kaya | Tabel, `<details>`, checklist, code block |
| 🎨 Palet Modern | Royal Blue, Orange, Black, White |

## 🛠️ Teknologi

- [Jekyll](https://jekyllrb.com/) 4.3+
- [jekyll-paginate](https://github.com/jekyll/jekyll-paginate)
- [jekyll-feed](https://github.com/jekyll/jekyll-feed)
- [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap)
- [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag)
- [Font Awesome 6](https://fontawesome.com/)
- [Inter](https://fonts.google.com/specimen/Inter) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

## 📬 Hubungi

Punya pertanyaan, saran, atau ingin berkontribusi? Kunjungi halaman [Kontak](/contact/) atau kirim email ke **hello@blogjak.dev**.

---

<details>
  <summary>💡 Tips menggunakan tema ini</summary>

  - Ubah `paginate` di `_config.yml` untuk mengatur jumlah artikel per halaman
  - Tambahkan `image:` di front matter artikel untuk gambar cover
  - Isi `social:` di `_config.yml` untuk ikon media sosial di footer

</details>

    </div>

    <div class="back-home">
      <a href="{{ '/' | relative_url }}" class="btn btn-primary">
        <i class="fa-solid fa-house"></i> Kembali ke Beranda
      </a>
    </div>

  </article>
</div>
