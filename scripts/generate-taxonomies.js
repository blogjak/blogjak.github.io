#!/usr/bin/env node
// ============================================
// Blogjak Theme v3.0 — Auto-Generate Taxonomies
// Scan _posts/, extract categories & tags, buat file di categories/ dan tags/
//
// Cara pakai:
//   npm install gray-matter
//   node scripts/generate-taxonomies.js
// ============================================

const fs = require('fs');
const path = require('path');

const POSTS_DIR = '_posts';
const CATEGORIES_DIR = 'categories';
const TAGS_DIR = 'tags';

let matter;
try {
  matter = require('gray-matter');
} catch (e) {
  console.error('❌ Modul "gray-matter" belum terinstall.');
  console.error('   Jalankan: npm install gray-matter');
  process.exit(1);
}

// ---------- Helpers ----------
function slugify(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

function titleCase(str) {
  return String(str)
    .split(/[\s\-]+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// ---------- Scan posts ----------
if (!fs.existsSync(POSTS_DIR)) {
  console.error(`❌ Folder "${POSTS_DIR}" tidak ditemukan.`);
  process.exit(1);
}

const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
console.log(`📖 Scanning ${files.length} post(s)...\n`);

const categories = new Set();
const tags = new Set();

files.forEach(file => {
  const fullPath = path.join(POSTS_DIR, file);
  try {
    const content = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(content);

    (data.categories || []).forEach(c => categories.add(String(c)));
    (data.tags || []).forEach(t => tags.add(String(t)));
  } catch (err) {
    console.warn(`⚠️  Gagal baca ${file}: ${err.message}`);
  }
});

// ---------- Generate category files ----------
ensureDir(CATEGORIES_DIR);
let catCreated = 0;
let catSkipped = 0;

categories.forEach(cat => {
  const slug = slugify(cat);
  const filePath = path.join(CATEGORIES_DIR, `${slug}.md`);

  if (fs.existsSync(filePath)) {
    catSkipped++;
    return;
  }

  const content = `---
layout: category
title: "${cat}"
category_name: "${cat}"
permalink: /categories/${slug}/
---
`;
  fs.writeFileSync(filePath, content, 'utf8');
  catCreated++;
  console.log(`  ✓ ${filePath}`);
});

// ---------- Generate tag files ----------
ensureDir(TAGS_DIR);
let tagCreated = 0;
let tagSkipped = 0;

tags.forEach(tag => {
  const slug = slugify(tag);
  const filePath = path.join(TAGS_DIR, `${slug}.md`);

  if (fs.existsSync(filePath)) {
    tagSkipped++;
    return;
  }

  const content = `---
layout: tag
title: "${titleCase(tag)}"
tag_name: "${tag}"
permalink: /tags/${slug}/
---
`;
  fs.writeFileSync(filePath, content, 'utf8');
  tagCreated++;
  console.log(`  ✓ ${filePath}`);
});

// ---------- Summary ----------
console.log('\n📊 Ringkasan:');
console.log(`   Kategori: ${catCreated} dibuat, ${catSkipped} sudah ada (total ${categories.size})`);
console.log(`   Tag:      ${tagCreated} dibuat, ${tagSkipped} sudah ada (total ${tags.size})`);
console.log('\n✅ Selesai!');
