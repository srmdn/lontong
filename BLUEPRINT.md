# 📜 Project Blueprint: Lontong (LPanel) v2.1

**Project Name:** Lontong (LPanel)  
**Description:** Modern, Lightweight, Open-Source Control Panel Alternative (Buatan Indonesia).  
**Primary Stack:** Go, SQLite, Caddy (Backend) | React, Tailwind CSS, Bun (Frontend).  

---

## 1. Visi & Identitas Produk
Lontong (LPanel) dirancang sebagai solusi manajemen server yang efisien, menghapus kompleksitas panel tradisional yang berat dan mahal.

*   **Tagline:** "Padat fiturnya, ringan servernya, nggak bikin kantong bolong."
*   **Bahasa Visual:** Modern Minimalist, Human-centric (Vercel-like).
*   **Warna Utama:** `Deep Red` (#991B1B) — Solid, berani, dan profesional.

---

## 2. Fitur Desain & Estetika Spesifik

### 🌓 Seamless Dark Mode
- **Logic:** Deteksi otomatis via `prefers-color-scheme` dan persistensi di `localStorage`.
- **Transition:** `300ms` smooth ease-in-out pada semua properti warna.

### ✨ Animated Favicon
- **Requirement:** Implementasikan favicon yang dinamis/animasi.
- **Implementation:** Gunakan SVG animasi atau urutan frame yang berubah saat tab dalam kondisi aktif. Ini memberikan kesan aplikasi yang "hidup" dan canggih.
- **Instruction for AI:** "Generate a minimalist animated SVG favicon that represents a pulse or a rotating 'L' shape using the Deep Red color palette."

---

## 3. Struktur Landing Page (Single-Page Experience)

### A. Hero Section
- **Headline:** "Kelola Server Tanpa Beban."
- **Sub-headline:** "Control panel open-source yang dibangun dengan Go dan Caddy. Ringan untuk VPS kecil, tangguh untuk traffic besar."
- **Interactive:** Mockup dashboard yang merespons toggle Dark/Light mode secara instan.

### B. Detailed Comparison Table
| Fitur | cPanel (Legacy) | Control Panel Lain | **Lontong (LPanel)** |
| :--- | :--- | :--- | :--- |
| **Arsitektur** | Perl (Legacy) | Python / PHP | **Go (Single Binary)** |
| **Resource (RAM)** | Tinggi (> 1GB) | ~500MB - 1GB | **Sangat Rendah (< 100MB)** |
| **Web Server** | Apache (Berat) | OpenLiteSpeed | **Caddy (Modern & Fast)** |
| **HTTPS/SSL** | Manual / Certbot | Sering Error | **Otomatis (Native Caddy)** |
| **Config Update** | Restart Service | Reload Service | **Instan via API (Zero Downtime)** |
| **Biaya** | Berbayar Mahal | Freemium / Ads | **100% Gratis & Open Source** |

### C. CLI Installation (GitHub Placeholder)
Komponen visual terminal untuk menampilkan perintah instalasi langsung dari repository:
```bash
# Instalasi Lontong via GitHub (Placeholder Example)
curl -sSL [https://raw.githubusercontent.com/username/lontong/main/install.sh](https://raw.githubusercontent.com/username/lontong/main/install.sh) | bash

4. Technical Requirements
Frontend Framework: React JS.

Styling: Tailwind CSS (Custom Deep Red palette).

Environment: Optimized for Bun.

Animation: Framer Motion (untuk transisi smooth) & CSS Keyframes (untuk favicon).

