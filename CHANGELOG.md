# Changelog — Blogjak Theme

All notable changes to this project will be documented in this file.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [3.0.0] — 2026-03-05

### Added
- 📂 **Halaman Kategori** (`/categories/`) dengan grid layout
- 📂 **Halaman detail kategori** (`/categories/tutorial/`)
- 🏷️ **Halaman Tag** (`/tags/`) dengan weighted tag cloud
- 🏷️ **Halaman detail tag** (`/tags/jekyll/`)
- 🔗 **Link kategori & tag** di post meta (bisa diklik)
- 📂 Menu **Kategori** & **Tag** di header & footer
- 🤖 **Auto-generate script** (`scripts/generate-taxonomies.js`)
- 📊 **Version badge** di footer
- 📄 **CHANGELOG.md** (file ini)
- 📄 **package.json** untuk npm scripts

### Changed
- 🔄 Versi `2.1.0` → `3.0.0`
- 🔄 Permalink default: `/:year/:month/:day/:title/` → `/:categories/:title/`
  (URL tanpa tanggal & tag)
- 🔄 `site.social` → `site.social_links` (footer pakai key baru)
- 🔄 Layout post menampilkan kategori/tag sebagai link
- 🔄 Footer social icons filter URL kosong dengan lebih baik
- 🔄 Menu navigasi diperluas (Kategori & Tag ditambahkan)

### Fixed
- 🐛 Social icons tidak tampil di desktop (migrasi ke SVG)
- 🐛 URL sosial kosong (`""`) tetap tampil (fix dengan `and url != ''`)
- 🐛 Layout related posts "self-reference" (post diri sendiri tidak muncul)

---

## [2.1.0] — 2026-02-15

### Added
- 🔍 **Pencarian client-side** dengan fuzzy matching
- ⌨️ **Shortcut keyboard**: `Ctrl/Cmd + K`, `/`, `Esc`, `↑↓`, `Enter`
- 🔗 **Widget Artikel Terkait** (prioritas: kategori → tag → terbaru)
- ⚡ **SEO lengkap**: Open Graph, Twitter Card, JSON-LD
- 🗺️ **Sitemap** via `jekyll-sitemap`
- 🤖 **robots.txt** dengan link sitemap
- ✅ **Google Site Verification** (4 metode)
- 🎨 **SVG social icons** di footer (15+ platform)
- 📝 **Permalink fleksibel** (7 pola)
- 📚 **README dwibahasa** (EN + ID)

### Changed
- 🎨 Migrasi theme toggle: FontAwesome → SVG
- 🎨 Migrasi search icon: FontAwesome → SVG

### Fixed
- 🐛 Search button tidak bisa diklik di desktop
- 🐛 Search button tidak muncul di mobile
- 🐛 Related posts menampilkan artikel salah
- 🐛 Double post content di single view

---

## [2.0.0] — 2026-01-15

### Added
- 🌗 **Dark mode toggle** dengan `localStorage`
- 🖼️ **Gallery grid** di homepage
- 📄 **Pagination native** (« ‹ 1 2 3 › »)
- 📱 **Fully responsive** dengan hamburger menu
- 🎨 **Palet warna**: Royal Blue / Orange / Black / White
- 🧩 **Rich Markdown**: `<details>`, tabel, checklist
- ⏱️ **Estimasi waktu baca**

### Changed
- 🎨 Redesign total dari v1.x

---

## [1.0.0] — 2025-12-01

### Added
- 📝 Rilis awal
- 📄 Layout blog dasar
- 🎨 Tipografi sederhana
- 🖼️ List view post

---

## Legend

- `Added` — fitur baru
- `Changed` — perubahan pada fitur yang ada
- `Deprecated` — fitur yang akan dihapus
- `Removed` — fitur yang sudah dihapus
- `Fixed` — perbaikan bug
- `Security` — perbaikan kerentanan
