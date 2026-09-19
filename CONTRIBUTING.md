# Contributing to Blogjak Theme

First off — thank you for considering contributing to **Blogjak Theme**! 🎉

Whether you're fixing a typo, reporting a bug, adding a feature, or improving documentation — every contribution matters.

---

## 🇬🇧 English

### 📜 Code of Conduct

By participating, you agree to:

- Be respectful and constructive
- Welcome newcomers and different perspectives
- Focus on what's best for the community
- Refrain from any harassment or discriminatory behavior

### 🐛 Reporting Bugs

Before opening an issue, please:

1. **Search existing issues** — your bug may already be reported.
2. **Reproduce the bug** locally.
3. **Gather info** — browser, OS, Jekyll version, screenshots.

**Then open an issue** with:

- Clear, descriptive title
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if UI-related)
- Environment details

### 💡 Suggesting Features

Open an issue with:

- Title: `[Feature] Short description`
- Use case — why is this useful?
- Proposed solution (optional)
- Alternatives considered (optional)

### 🔧 Pull Requests

**1. Fork & clone**

```bash
git clone https://github.com/YOUR-USERNAME/blogjak-theme.git
cd blogjak-theme
```

**2. Create a branch**

```bash
git checkout -b feature/amazing-feature
# or
git checkout -b fix/bug-description
```

**3. Make changes**

- Follow existing code style (indentation, quotes, comments).
- Test locally: `bundle exec jekyll serve --baseurl ""`
- Verify on desktop & mobile.
- Verify in light & dark mode.

**4. Commit**

Use clear, conventional commit messages:

```
feat: add author page layout
fix: correct search modal layering on mobile
docs: update installation instructions
style: format footer indentation
refactor: simplify related posts logic
test: add unit tests for search
chore: update dependencies
```

**5. Push & open PR**

```bash
git push origin feature/amazing-feature
```

Then open a Pull Request on GitHub with:

- Descriptive title
- Reference to related issue (e.g. `Closes #42`)
- Description of changes
- Screenshots (if UI changes)
- Checklist confirmation

### 📁 Project Structure Guidelines

| Folder | Purpose |
|---|---|
| `_layouts/` | Page templates (default, post, category, tag) |
| `_includes/` | Reusable partials (header, footer, head) |
| `_posts/` | Blog articles (Markdown) |
| `categories/` | Category landing pages |
| `tags/` | Tag landing pages |
| `assets/css/` | Stylesheets |
| `assets/js/` | JavaScript (main, search) |
| `scripts/` | Build/utility scripts |

### 🎨 Code Style

- **Indentation**: 2 spaces (HTML, CSS, JS, YAML)
- **Quotes**: Double quotes in HTML attributes, single in JS (unless interpolating)
- **Naming**: kebab-case for CSS classes, camelCase for JS variables
- **Comments**: Meaningful, in English, avoid obvious comments

### ✅ PR Checklist

- [ ] Code follows project style
- [ ] Tested locally (desktop & mobile, light & dark)
- [ ] No console errors
- [ ] No build warnings
- [ ] README updated (if needed)
- [ ] CHANGELOG updated (if user-facing change)
- [ ] Screenshots added (if UI change)

### 📜 License

By contributing, you agree your contributions will be licensed under the **MIT License** (see [LICENSE](LICENSE)).

---

## 🇮🇩 Bahasa Indonesia

### 📜 Kode Etik

Dengan berpartisipasi, Anda setuju untuk:

- Bersikap hormat dan konstruktif
- Menyambut pendatang baru dan perspektif berbeda
- Fokus pada yang terbaik untuk komunitas
- Menghindari segala bentuk pelecehan atau diskriminasi

### 🐛 Melaporkan Bug

Sebelum membuka issue, mohon:

1. **Cari issue yang sudah ada** — bug Anda mungkin sudah dilaporkan.
2. **Reproduksi bug** di lokal.
3. **Kumpulkan info** — browser, OS, versi Jekyll, screenshot.

**Lalu buka issue** dengan:

- Judul jelas & deskriptif
- Langkah reproduksi
- Perilaku yang diharapkan vs aktual
- Screenshot (kalau terkait UI)
- Detail environment

### 💡 Mengusulkan Fitur

Buka issue dengan:

- Judul: `[Feature] Deskripsi singkat`
- Use case — kenapa ini berguna?
- Solusi yang diusulkan (opsional)
- Alternatif yang dipertimbangkan (opsional)

### 🔧 Pull Request

**1. Fork & clone**

```bash
git clone https://github.com/USERNAME-ANDA/blogjak-theme.git
cd blogjak-theme
```

**2. Buat branch**

```bash
git checkout -b feature/fitur-keren
# atau
git checkout -b fix/deskripsi-bug
```

**3. Lakukan perubahan**

- Ikuti gaya kode yang ada (indentasi, tanda kutip, komentar).
- Test lokal: `bundle exec jekyll serve --baseurl ""`
- Verifikasi di desktop & mobile.
- Verifikasi di light & dark mode.

**4. Commit**

Gunakan pesan commit yang jelas & konvensional:

```
feat: tambah layout halaman author
fix: perbaiki layering modal search di mobile
docs: perbarui instruksi instalasi
style: format indentasi footer
refactor: sederhanakan logika related posts
test: tambah unit test untuk search
chore: perbarui dependensi
```

**5. Push & buka PR**

```bash
git push origin feature/fitur-keren
```

Lalu buka Pull Request di GitHub dengan:

- Judul deskriptif
- Referensi ke issue terkait (contoh: `Closes #42`)
- Deskripsi perubahan
- Screenshot (kalau perubahan UI)
- Konfirmasi checklist

### 📁 Panduan Struktur Proyek

| Folder | Fungsi |
|---|---|
| `_layouts/` | Template halaman (default, post, category, tag) |
| `_includes/` | Partial yang bisa dipakai ulang (header, footer, head) |
| `_posts/` | Artikel blog (Markdown) |
| `categories/` | Halaman kategori |
| `tags/` | Halaman tag |
| `assets/css/` | Stylesheet |
| `assets/js/` | JavaScript (main, search) |
| `scripts/` | Script build/utilitas |

### 🎨 Gaya Kode

- **Indentasi**: 2 spasi (HTML, CSS, JS, YAML)
- **Tanda kutip**: Double di atribut HTML, single di JS (kecuali interpolasi)
- **Penamaan**: kebab-case untuk class CSS, camelCase untuk variabel JS
- **Komentar**: Bermakna, dalam Bahasa Inggris, hindari komentar yang jelas

### ✅ Checklist PR

- [ ] Kode mengikuti gaya proyek
- [ ] Di-test lokal (desktop & mobile, light & dark)
- [ ] Tidak ada error di console
- [ ] Tidak ada warning build
- [ ] README diperbarui (jika perlu)
- [ ] CHANGELOG diperbarui (jika perubahan user-facing)
- [ ] Screenshot ditambahkan (jika perubahan UI)

### 📜 Lisensi

Dengan berkontribusi, Anda setuju kontribusi Anda dilisensikan di bawah **MIT License** (lihat [LICENSE](LICENSE)).

---

## 🙏 Terima Kasih!

Setiap kontribusi — sekecil apapun — membuat tema ini lebih baik untuk semua orang. Kalau ada pertanyaan, buka [issue](https://github.com/username/blogjak-theme/issues) atau hubungi maintainer.

**Happy contributing!** 🚀
