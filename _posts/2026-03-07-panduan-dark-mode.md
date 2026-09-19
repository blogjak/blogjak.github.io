---
layout: post
title: "Panduan Kustomisasi Dark Mode"
date: 2026-03-07 08:15:00 +0700
categories: [tutorial]
tags: [css, dark-mode]
author: Admin Blogjak
gallery_image: /assets/img/default-cover.svg
excerpt: "Cara mengubah palet warna dark mode Blogjak Theme Versi 2 melalui variabel CSS di assets/css/styles.css."
---

Semua warna dark mode diatur lewat CSS custom properties pada selector `[data-theme="dark"]` di `assets/css/styles.css`.

```css
[data-theme="dark"] {
  --color-bg: #12141c;
  --color-primary: #ff9142;
}
```

Ubah nilai HEX di atas untuk menyesuaikan dengan identitas visual situs Anda. Tombol toggle di header akan otomatis menggunakan variabel ini.
