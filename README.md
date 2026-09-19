# Blogjak Theme — Version 3.0

> A complete native Jekyll theme for pure Markdown blogging — dark mode, gallery grid, pagination, client-side search, related posts, categories, tags, and full SEO.
>
> _Tema Jekyll native lengkap untuk blogging pure Markdown — dark mode, gallery grid, pagination, pencarian, artikel terkait, kategori, tag, dan SEO penuh._

![Jekyll](https://img.shields.io/badge/Jekyll-4.3+-1e3a8a?logo=jekyll&logoColor=white)
![Version](https://img.shields.io/badge/Version-3.0.0-f97316)
![License](https://img.shields.io/badge/License-MIT-0a0a0a)
![Markdown](https://img.shields.io/badge/Content-Pure%20Markdown-1e3a8a)
![Responsive](https://img.shields.io/badge/Responsive-Yes-3b5bdb)
![Dark Mode](https://img.shields.io/badge/Dark%20Mode-Yes-f97316)

---

## 🇬🇧 English

### ✨ What is Blogjak Theme?

**Blogjak Theme v3.0** is a native Jekyll theme for writers who want a **frictionless Markdown-first workflow**. Drop a `.md` file into `_posts/`, and it's instantly published as a gallery card with its own detail page — no JSON, no HTML, no database.

Built with **Royal Blue / Orange / Black / White** palette, it's ideal for personal blogs, portfolios, documentation, and photo galleries.

### 🚀 Key Features

**Content & Writing**
- Pure Markdown workflow (`.md` in `_posts/`)
- Rich Markdown: tables, blockquotes, code blocks, `<details>`, checklists
- Auto reading time, cover image, prev/next navigation
- RSS feed via `jekyll-feed`

**Look & Feel**
- Dark mode toggle with `localStorage` (SVG, no FontAwesome)
- Responsive gallery grid homepage
- Mobile hamburger menu, custom 404
- Royal Blue / Orange / Black / White palette

**Navigation & Discovery**
- Client-side search (fuzzy, `Ctrl/Cmd + K`, `/`, `Esc`)
- Related posts (by category → tag → recent)
- Categories: `/categories/` + `/categories/tutorial/`
- Tags: `/tags/` + `/tags/jekyll/`
- Archive grouped by year
- Full pagination: « ‹ 1 2 3 › »

**SEO**
- Open Graph, Twitter Card, JSON-LD
- `sitemap.xml`, `robots.txt`
- Google / Bing / Yandex verification
- Flexible permalinks (7 patterns, no date/tag)

**Performance & A11y**
- No heavy frameworks — pure Jekyll + modern CSS
- Touch-optimized, ARIA labels, keyboard navigable

### 📁 Project Structure

```
blogjak-theme/
├── _config.yml
├── Gemfile
├── index.html
├── about.md
├── archive.md
├── contact.md
├── categories.md
├── tags.md
├── 404.html
├── robots.txt
├── search.json
├── categories/            # one file per category
├── tags/                  # one file per tag
├── scripts/
│   └── generate-taxonomies.js
├── _layouts/
│   ├── default.html
│   ├── post.html
│   ├── category.html
│   └── tag.html
├── _includes/
│   ├── head.html
│   ├── header.html
│   ├── footer.html
│   ├── search-modal.html
│   └── related-posts.html
├── _posts/
└── assets/
    ├── css/styles.css
    └── js/
        ├── main.js
        └── search.js
```

### ⚙️ Installation

**1. Clone / download**
```bash
git clone https://github.com/username/blogjak-theme.git
cd blogjak-theme
```

**2. Install dependencies**
```bash
bundle install
```

**3. Configure `_config.yml`**

Set `url` and `baseurl` for your deployment:

```yaml
# GitHub Pages project repo (username.github.io/blogjak-theme/)
url: "https://username.github.io"
baseurl: "/blogjak-theme"

# Root user site (username.github.io)
url: "https://username.github.io"
baseurl: ""

# Custom domain
url: "https://yourdomain.com"
baseurl: ""
```

**4. Run locally**
```bash
# Override baseurl for local dev
bundle exec jekyll serve --baseurl ""
# → http://localhost:4000
```

### ✍️ Writing an Article

Create `_posts/YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "My First Post"
description: "Short summary for the gallery card and SEO."
date: 2026-03-05 09:00:00 +0700
categories: [Tutorial]
tags: [markdown, jekyll]
author: Your Name
image: "https://example.com/cover.jpg"
---

Your Markdown content here.
```

**Front matter fields:**

| Field | Required | Description |
|---|:---:|---|
| `layout` | ✅ | Always `post` |
| `title` | ✅ | Article title |
| `date` | ✅ | Publication timestamp |
| `description` | ❌ | Summary for cards & SEO |
| `categories` | ❌ | Array; first becomes the badge |
| `tags` | ❌ | Array; used for related posts |
| `author` | ❌ | Falls back to `site.author` |
| `image` | ❌ | Cover image URL |

### 📂 Categories & Tags

**Add a new category:** create `categories/your-category.md`:

```markdown
---
layout: category
title: "Your Category"
category_name: "Your Category"
permalink: /categories/your-category/
---
```

**Add a new tag:** create `tags/your-tag.md`:

```markdown
---
layout: tag
title: "Your Tag"
tag_name: "your-tag"
permalink: /tags/your-tag/
---
```

**Auto-generate (recommended):**

```bash
npm install gray-matter
node scripts/generate-taxonomies.js
```

This scans `_posts/` and creates the necessary files in `categories/` and `tags/`. Run before committing new posts.

### 🔗 Permalinks

Default: `/:categories/:title/` (no date, no tag). Common patterns:

| Pattern | Example URL |
|---|---|
| `/:title/` | `/my-post/` |
| `/:categories/:title/` | `/tutorial/my-post/` |
| `/:year/:title/` | `/2026/my-post/` |
| `/blog/:categories/:title/` | `/blog/tutorial/my-post/` |

Change it in `_config.yml`:

```yaml
permalink: /:categories/:title/
```

> ⚠️ Changing permalinks breaks old URLs. Use `jekyll-redirect-from` with `redirect_from:` in post front matter to preserve them.

### 🗺️ Sitemap & Verification

**Sitemap** is auto-generated by `jekyll-sitemap` at `/sitemap.xml`. Ensure `url` in `_config.yml` is set to get absolute URLs.

**Google Site Verification** — add to `_config.yml`:

```yaml
google_site_verification: "your-verification-code"
```

Then include in `_includes/head.html`:

```html
{% if site.google_site_verification %}
<meta name="google-site-verification" content="{{ site.google_site_verification }}">
{% endif %}
```

Submit sitemap at [Google Search Console](https://search.google.com/search-console) → Sitemaps → Add `sitemap.xml`.

### 🚀 Deployment

**GitHub Pages:**
1. Push to GitHub repo.
2. **Settings → Pages → Source: main / (root)**.
3. Live at `https://username.github.io/repo-name/` or root.

**Netlify / Vercel / Cloudflare Pages:**
- Build: `bundle exec jekyll build`
- Publish: `_site`
- Ruby: 3.x

### 📋 Requirements

- Ruby 3.0+
- Jekyll 4.3+
- Bundler

### 📄 License

MIT — free for personal and commercial use.

---

## 🇮🇩 Bahasa Indonesia

### ✨ Apa Itu Blogjak Theme?

**Blogjak Theme v3.0** adalah tema Jekyll native untuk penulis yang menginginkan **alur kerja Markdown tanpa hambatan**. Cukup letakkan berkas `.md` di folder `_posts/`, artikel langsung dipublikasikan sebagai kartu galeri dengan halaman detailnya sendiri — tanpa JSON, tanpa HTML, tanpa database.

Menggunakan palet **Royal Blue / Orange / Black / White**, cocok untuk blog pribadi, portofolio, dokumentasi, dan galeri foto.

### 🚀 Fitur Utama

**Konten & Penulisan**
- Alur kerja Pure Markdown (`.md` di `_posts/`)
- Markdown kaya: tabel, blockquote, code block, `<details>`, checklist
- Estimasi waktu baca, gambar cover, navigasi prev/next
- RSS feed via `jekyll-feed`

**Tampilan**
- Toggle dark mode dengan `localStorage` (SVG, tanpa FontAwesome)
- Gallery grid responsif di homepage
- Hamburger menu mobile, halaman 404 kustom
- Palet Royal Blue / Orange / Black / White

**Navigasi & Penemuan Konten**
- Pencarian client-side (fuzzy, `Ctrl/Cmd + K`, `/`, `Esc`)
- Artikel terkait (kategori → tag → terbaru)
- Kategori: `/categories/` + `/categories/tutorial/`
- Tag: `/tags/` + `/tags/jekyll/`
- Arsip dikelompokkan per tahun
- Pagination lengkap: « ‹ 1 2 3 › »

**SEO**
- Open Graph, Twitter Card, JSON-LD
- `sitemap.xml`, `robots.txt`
- Verifikasi Google / Bing / Yandex
- Permalink fleksibel (7 pola, tanpa tanggal/tag)

**Performa & Aksesibilitas**
- Tanpa framework berat — Jekyll + CSS modern
- Touch-optimized, ARIA labels, bisa dinavigasi keyboard

### 📁 Struktur Proyek

```
blogjak-theme/
├── _config.yml
├── Gemfile
├── index.html
├── about.md
├── archive.md
├── contact.md
├── categories.md
├── tags.md
├── 404.html
├── robots.txt
├── search.json
├── categories/            # satu file per kategori
├── tags/                  # satu file per tag
├── scripts/
│   └── generate-taxonomies.js
├── _layouts/
│   ├── default.html
│   ├── post.html
│   ├── category.html
│   └── tag.html
├── _includes/
│   ├── head.html
│   ├── header.html
│   ├── footer.html
│   ├── search-modal.html
│   └── related-posts.html
├── _posts/
└── assets/
    ├── css/styles.css
    └── js/
        ├── main.js
        └── search.js
```

### ⚙️ Cara Instalasi

**1. Clone / unduh**
```bash
git clone https://github.com/username/blogjak-theme.git
cd blogjak-theme
```

**2. Install dependensi**
```bash
bundle install
```

**3. Konfigurasi `_config.yml`**

Sesuaikan `url` dan `baseurl` sesuai deployment:

```yaml
# GitHub Pages repo proyek (username.github.io/blogjak-theme/)
url: "https://username.github.io"
baseurl: "/blogjak-theme"

# Root user site (username.github.io)
url: "https://username.github.io"
baseurl: ""

# Custom domain
url: "https://domain-anda.com"
baseurl: ""
```

**4. Jalankan lokal**
```bash
# Override baseurl untuk dev lokal
bundle exec jekyll serve --baseurl ""
# → http://localhost:4000
```

### ✍️ Menulis Artikel

Buat `_posts/YYYY-MM-DD-judul.md`:

```markdown
---
layout: post
title: "Artikel Pertama Saya"
description: "Ringkasan singkat untuk kartu galeri dan SEO."
date: 2026-03-05 09:00:00 +0700
categories: [Tutorial]
tags: [markdown, jekyll]
author: Nama Anda
image: "https://example.com/cover.jpg"
---

Konten Markdown Anda di sini.
```

**Field front matter:**

| Field | Wajib | Deskripsi |
|---|:---:|---|
| `layout` | ✅ | Selalu `post` |
| `title` | ✅ | Judul artikel |
| `date` | ✅ | Timestamp publikasi |
| `description` | ❌ | Ringkasan untuk kartu & SEO |
| `categories` | ❌ | Array; yang pertama jadi badge |
| `tags` | ❌ | Array; dipakai untuk artikel terkait |
| `author` | ❌ | Fallback ke `site.author` |
| `image` | ❌ | URL gambar cover |

### 📂 Kategori & Tag

**Tambah kategori baru:** buat `categories/kategori-anda.md`:

```markdown
---
layout: category
title: "Kategori Anda"
category_name: "Kategori Anda"
permalink: /categories/kategori-anda/
---
```

**Tambah tag baru:** buat `tags/tag-anda.md`:

```markdown
---
layout: tag
title: "Tag Anda"
tag_name: "tag-anda"
permalink: /tags/tag-anda/
---
```

**Auto-generate (direkomendasikan):**

```bash
npm install gray-matter
node scripts/generate-taxonomies.js
```

Script ini scan `_posts/` dan buat file yang diperlukan di `categories/` dan `tags/`. Jalankan sebelum commit artikel baru.

### 🔗 Permalink

Default: `/:categories/:title/` (tanpa tanggal & tag). Pola umum:

| Pola | Contoh URL |
|---|---|
| `/:title/` | `/artikel-saya/` |
| `/:categories/:title/` | `/tutorial/artikel-saya/` |
| `/:year/:title/` | `/2026/artikel-saya/` |
| `/blog/:categories/:title/` | `/blog/tutorial/artikel-saya/` |

Ubah di `_config.yml`:

```yaml
permalink: /:categories/:title/
```

> ⚠️ Mengubah permalink mematikan URL lama. Gunakan `jekyll-redirect-from` dengan `redirect_from:` di front matter post untuk mempertahankannya.

### 🗺️ Sitemap & Verifikasi

**Sitemap** otomatis via `jekyll-sitemap` di `/sitemap.xml`. Pastikan `url` di `_config.yml` sudah diisi agar URL absolut.

**Verifikasi Google Site** — tambahkan di `_config.yml`:

```yaml
google_site_verification: "kode-verifikasi-anda"
```

Lalu include di `_includes/head.html`:

```html
{% if site.google_site_verification %}
<meta name="google-site-verification" content="{{ site.google_site_verification }}">
{% endif %}
```

Submit sitemap di [Google Search Console](https://search.google.com/search-console) → Sitemaps → Tambah `sitemap.xml`.

### 🚀 Deployment

**GitHub Pages:**
1. Push ke repo GitHub.
2. **Settings → Pages → Source: main / (root)**.
3. Live di `https://username.github.io/nama-repo/` atau root.

**Netlify / Vercel / Cloudflare Pages:**
- Build: `bundle exec jekyll build`
- Publish: `_site`
- Ruby: 3.x

### 📋 Persyaratan

- Ruby 3.0+
- Jekyll 4.3+
- Bundler

### 📄 Lisensi

MIT — bebas untuk keperluan pribadi dan komersial.

---

<p align="center">
  Made with ❤️ using <strong>Jekyll</strong> — <em>Blogjak Theme Versi 3.0</em>
</p>
