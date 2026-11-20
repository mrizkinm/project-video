# 💡 Tiba-Tiba Paham (`@tibatibapaham`)

> **Pop-Science & Misteri Tubuh Indonesia**  
> Konten video animasi pendek vertikal (9:16) bergaya visual modern *Kurzgesagt* dan *Vox* untuk **TikTok, Instagram Reels, dan YouTube Shorts**. Dari bingung sampai reflek bilang: *"OOH, GITU TOH!"*.

---

## 🚀 Sekilas Proyek

Repositori ini memuat seluruh kode sumber, aset desain vektor, sistem animasi komputasional berbasis **[Remotion](https://www.remotion.dev/) (React + TypeScript)**, serta audio voiceover multi-track untuk kanal **Tiba-Tiba Paham**.

* **Format Standar:** 9:16 Vertikal (1080 x 1920 piksel) @ 30 FPS.
* **Tipografi (100% Offline Lokal):**
  - Judul, badge, stamp, dan tombol: **Fredoka Bold** (`public/fonts/Fredoka.ttf`).
  - Subtitle dan penjelasan: **Plus Jakarta Sans** (`public/fonts/PlusJakartaSans.ttf`).
* **Sistem Subtitle:** Kinetic Subtitle dinamis inklusif teman tuli (*100% verbatim kata demi kata dari audio voiceover*).
* **Audio Mixing:** BGM bertema misteri/sneaky di-*ducking* otomatis ke volume 14% agar vokal voiceover terdengar jernih, lantang, dan bebas terpotong (*zero clipping*).

---

## 📺 Katalog Episode Siap Rilis

| No | Judul Episode | Komposisi Remotion | Durasi (Frame / Detik) | File Video Output | Status |
| :---: | :--- | :--- | :---: | :--- | :---: |
| **0** | **Channel Trailer / Pinned Intro** | `IntroTibaTibaPaham` | 870 f (29.00s) | [out/intro_tibatibapaham.mp4](file:///c:/more/project-video/out/intro_tibatibapaham.mp4) | ✅ Siap Upload |
| **1** | **Doorway Effect (Lewat Pintu Mendadak Lupa)** | `DoorwayEffect` | 1.140 f (38.00s) | [out/doorway_effect_final.mp4](file:///c:/more/project-video/out/doorway_effect_final.mp4) | ✅ Siap Upload |
| **2** | **Coffee Paradox (Minum Kopi Malah Ngantuk)** | `CoffeeParadox` | 1.880 f (62.67s) | [out/coffee_paradox_final.mp4](file:///c:/more/project-video/out/coffee_paradox_final.mp4) | ✅ Siap Upload |
| **3** | **Hypnic Jerk (Kaki Berasa Jatuh Pas Mau Tidur)** | `HypnicJerk` | 1.220 f (40.67s) | [out/hypnic_jerk_final.mp4](file:///c:/more/project-video/out/hypnic_jerk_final.mp4) | ✅ Siap Upload |

*Paket naskah lengkap, caption media sosial siap copas, dan rekomendasi thumbnail tersimpan di [docs/EPISODE_PRODUCTION_PACK.md](file:///c:/more/project-video/docs/EPISODE_PRODUCTION_PACK.md).*

---

## 📁 Struktur Direktori

```text
project-video/
├── docs/                               # Dokumentasi Produksi & Distribusi
│   ├── EPISODE_PRODUCTION_PACK.md      # Naskah, panduan adegan, dan caption medsos lengkap
│   ├── BRAND_IDENTITY_GUIDE.md         # Palet warna, identitas visual & karakter
│   └── CONTENT_AND_MONETIZATION_STRATEGY.md
├── public/                             # Aset Statis Lokal (Offline)
│   ├── audio/                          # Voiceover asli per scene, BGM, dan SFX
│   │   ├── ep2_voiceover/              # Voiceover Episode 2 (Doorway Effect)
│   │   ├── ep3_voiceover/              # Voiceover Episode 3 (Hypnic Jerk)
│   │   ├── bgm/                        # Background music
│   │   └── sfx/                        # Sound effect (whoosh, pop, glitch, ding)
│   └── fonts/                          # Font lokal (Fredoka & Plus Jakarta Sans)
├── src/                                # Kode Sumber React Remotion
│   ├── Root.tsx                        # Pendaftaran Composition Remotion
│   ├── shared/                         # Komponen Reusable
│   │   ├── characters/                 # MainCharacter & BrainMascot
│   │   ├── environments/               # CozyBedroom, LivingRoom, Hallway, dll.
│   │   ├── ui/                         # ViralCaptions, badges, dan HUD
│   │   └── effects/                    # SceneTransition, ParticleBackground
│   └── videos/                         # Folder Tiap Episode Video
│       ├── IntroTibaTibaPaham/
│       ├── DoorwayEffect/
│       ├── CoffeeParadox/
│       └── HypnicJerk/
├── out/                                # Output Video Final Hasil Render (.mp4)
├── GEMINI.md                           # Aturan Baku Produksi Video (Hard Rules)
└── README.md
```

---

## 🛠️ Panduan Penggunaan & Perintah CLI

### 1. Prasyarat Sistem
* [Node.js](https://nodejs.org/) v18+ 
* [npm](https://www.npmjs.com/)

### 2. Menjalankan Studio Pratinjau (Interactive Preview)
Buka studio interaktif di peramban untuk melihat animasi dan timeline secara langsung:
```bash
npm run dev
# atau
npx remotion preview
```

### 3. Perintah Render Video Final (MP4)
Untuk merender video dengan resolusi 1080x1920 (Full HD):

* **Episode 3 (Hypnic Jerk):**
  ```bash
  npx remotion render HypnicJerk out/hypnic_jerk_final.mp4
  ```
* **Episode 2 (Doorway Effect):**
  ```bash
  npx remotion render DoorwayEffect out/doorway_effect_final.mp4
  ```
* **Episode 1 (Coffee Paradox):**
  ```bash
  npx remotion render CoffeeParadox out/coffee_paradox_final.mp4
  ```
* **Channel Intro (Video 0):**
  ```bash
  npx remotion render IntroTibaTibaPaham out/intro_tibatibapaham.mp4
  ```

### 4. Mengambil Gambar Diam (Still Frame Preview)
```bash
npx remotion still HypnicJerk out/preview_scene1.png --frame=60
```

---

## 📋 Pedoman Baku Produksi (*Hard Rules*)

Setiap episode baru **WAJIB** mematuhi pedoman produksi di [GEMINI.md](file:///c:/more/project-video/GEMINI.md):
1. **Watermark Resmi:** Badge topik di pojok kiri atas (misal: `⚡ SAINS TIDUR`) dan `#TibaTibaPaham` di pojok kanan atas di seluruh scene.
2. **Mobile-First Legibility:** In-scene text minimal 24px–32px tebal. Subtitle kinetic diatur pada `bottom: 380px` agar aman dari UI overlay TikTok/Instagram Reels.
3. **Show, Don't Write:** Hindari memenuhi layar dengan teks panjang. Gunakan analogi visual, ekspresi karakter, dan pergerakan objek.
4. **Zero Voiceover Clipping:** Setiap akhir scene memiliki *safety breathing room* minimal +16 s/d +21 frame agar suara narator tidak terpotong oleh transisi.

---

## 📄 Lisensi & Hak Cipta
Hak cipta seluruh konsep, karakter, dan materi video dimiliki oleh saluran **Tiba-Tiba Paham** (`@tibatibapaham`).
