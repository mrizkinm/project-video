# 🧠 PRD — PsychEdu Short Videos
> **Proyek:** Video edukasi psikologi pendek format TikTok / Reels / YouTube Shorts  
> **Tech Stack:** Remotion (TypeScript + React)  
> **Workspace:** `c:\more\lain`  
> **Last Updated:** 2026-11-13

---

## 1. Visi Produk

Membuat serial video edukasi psikologi pendek yang **viral-friendly**, informatif, dan eye-catching menggunakan kode (Remotion), tanpa bergantung pada tools AI image/video generator eksternal.

**Target Platform:** TikTok · Instagram Reels · YouTube Shorts  
**Target Audience:** Remaja & dewasa muda (17–30 tahun), penasaran dengan psikologi sehari-hari

---

## 2. Spesifikasi Teknis (Wajib Dipatuhi)

| Parameter | Nilai |
|-----------|-------|
| Format | Vertikal 9:16 |
| Resolusi native | 1080 × 1920 px |
| Resolusi render | 540 × 960 px (`--scale=0.5`) |
| Frame rate | 30 fps |
| Durasi ideal | **28–35 detik** per video |
| Codec | H.264 (MP4) |
| Render flags | `--concurrency=1 --scale=0.5` |

> [!IMPORTANT]
> Selalu gunakan `cmd.exe /c "npx remotion ..."` — BUKAN PowerShell langsung (execution policy issue Windows).

---

## 3. Struktur Folder Project

```
c:\more\lain\
├── PRD.md                          ← Dokumen ini
├── src\
│   ├── videos\
│   │   └── DoorwayEffect\          ← Video #1 (SELESAI ✅)
│   │       ├── Composition.tsx     ← Main composition (8 scene + 7 transisi)
│   │       └── scenes\
│   │           ├── Scene1_Bedroom.tsx
│   │           ├── Scene2_Walking.tsx
│   │           ├── Scene3_Freeze.tsx
│   │           ├── Scene4_LivingRoom.tsx
│   │           ├── Scene5_BrainRoom.tsx
│   │           ├── Scene6_SciencePortal.tsx
│   │           ├── Scene7_RewindHack.tsx
│   │           └── Scene8_VictoryOutro.tsx
│   ├── shared\
│   │   ├── characters\
│   │   │   └── MainCharacter.tsx   ← Karakter SVG utama (ekspresif, animasi)
│   │   ├── environments\
│   │   │   ├── CozyBedroomBackground.tsx   ← Background kamar malam
│   │   │   └── LivingRoomHallway.tsx       ← Background ruang tamu
│   │   ├── effects\
│   │   │   ├── ParticleBackground.tsx      ← Partikel animasi per tema
│   │   │   └── SceneTransition.tsx         ← 7 tipe efek transisi
│   │   └── ui\
│   │       └── ViralCaptions.tsx           ← Caption viral dengan highlight
│   └── components\
│       └── ProgressBar.tsx                 ← Progress bar bawah layar
├── public\
│   └── audio\
│       ├── voiceover\
│       │   └── scene1.mp3 … scene8.mp3    ← Edge-TTS id-ID-ArdiNeural
│       ├── sfx\
│       │   ├── whoosh.wav
│       │   ├── glitch.wav
│       │   ├── pop.wav
│       │   ├── chime.wav
│       │   ├── ding.wav
│       │   └── bell.wav
│       └── bgm\
│           └── bgm_mystery.mp3            ← Sneaky Snitch (royalty-free, vol 0.28)
└── out\
    ├── doorway_effect_final_v3.mp4        ← 🎬 VIDEO FINAL (5.1 MB, 32s) ✅
    └── preview_*.png
```

---

## 4. Komponen Reusable (Shared Library)

### 4.1 `MainCharacter.tsx`
- Karakter SVG hoodie biru, rambut coklat, ekspresi per mood
- Props: `mood` (`normal` | `happy` | `confused` | `eureka` | `sad`)
- Animasi: arm swing saat walking, bounce hover, star eyes saat eureka, brow animasi

### 4.2 `CozyBedroomBackground.tsx`
- Background kamar malam: jendela, bulan, bintang berkelip, rak buku berwarna, meja laptop, lampu, kopi beruap, karpet bulat

### 4.3 `ParticleBackground.tsx`
- Props: `theme` (`cosmic` | `electric` | `nature` | `fire` | `rose` | `cyber`)
- Diamond & star particles, hexagonal dot grid, scanline ambient, corner accent lines

### 4.4 `SceneTransition.tsx`
- Props: `type`, `durationFrames`, `color`
- Tipe tersedia: `flash-cut` · `wipe-diagonal` · `circle-reveal` · `slide-up` · `slide-left` · `slide-right` · `split-vertical` · `zoom-out`

### 4.5 `ViralCaptions.tsx`
- Props: `badge`, `badgeColor`, `text`, `highlightWord`
- Safe zone: `bottom: 380px` (tidak bentrok UI platform)
- Font: Plus Jakarta Sans + Nunito

### 4.6 `ProgressBar.tsx`
- Bar progress waktu otomatis di bagian bawah layar

---

## 5. Pipeline Audio

### Voiceover
- Tool: **Edge-TTS** Python (`edge-tts` package)
- Voice: `id-ID-ArdiNeural` (suara pria Indonesia)
- Command:
  ```bash
  python -m edge_tts --voice id-ID-ArdiNeural --text "..." --write-media public/audio/voiceover/sceneN.mp3
  ```
- Jalankan dengan `BypassSandbox: true` (butuh network)

### SFX
- File WAV di `public/audio/sfx/`
- Volume per scene: whoosh 0.45, glitch 0.55, pop 0.5, chime 0.45, ding 0.55, bell 0.55

### BGM
- File: `public/audio/bgm/bgm_mystery.mp3` (Sneaky Snitch — royalty-free)
- Volume: `0.28` (tidak menindih VO)
- Mode: `loop`

---

## 6. Struktur Composition (Template 8 Scene)

```tsx
// Template timing 32 detik (960 frame @30fps)
// Scene durations: 105 + 90 + 105 + 105 + 135 + 135 + 135 + 150 = 960

<Sequence from={0}   durationInFrames={105}> {/* Scene 1: 0.0–3.5s   */}
<Sequence from={105} durationInFrames={90}>  {/* Scene 2: 3.5–6.5s   */}
<Sequence from={195} durationInFrames={105}> {/* Scene 3: 6.5–10.0s  */}
<Sequence from={300} durationInFrames={105}> {/* Scene 4: 10.0–13.5s */}
<Sequence from={405} durationInFrames={135}> {/* Scene 5: 13.5–18.0s */}
<Sequence from={540} durationInFrames={135}> {/* Scene 6: 18.0–22.5s */}
<Sequence from={675} durationInFrames={135}> {/* Scene 7: 22.5–27.0s */}
<Sequence from={810} durationInFrames={150}> {/* Scene 8: 27.0–32.0s */}

// Transisi (12 frame = 0.4 detik, dimulai 12 frame sebelum pergantian scene)
<Sequence from={93}  durationInFrames={12}> <SceneTransition type="flash-cut"      color="#38bdf8" />
<Sequence from={183} durationInFrames={12}> <SceneTransition type="wipe-diagonal"  color="#ef4444" />
<Sequence from={288} durationInFrames={12}> <SceneTransition type="circle-reveal"  color="#facc15" />
<Sequence from={393} durationInFrames={12}> <SceneTransition type="slide-up"       color="#8b5cf6" />
<Sequence from={528} durationInFrames={12}> <SceneTransition type="split-vertical" color="#0284c7" />
<Sequence from={663} durationInFrames={12}> <SceneTransition type="flash-cut"      color="#f59e0b" />
<Sequence from={798} durationInFrames={12}> <SceneTransition type="zoom-out"       color="#10b981" />
```

---

## 7. UI/Visual Rules (Branding)

| Elemen | Spec |
|--------|------|
| Top badge | `🧠 FAKTA PSIKOLOGI` — gradient ungu-indigo, font berat 900 |
| Hashtag | `#FaktaUnik` — kuning `#facc15`, background gelap |
| Caption font | Plus Jakarta Sans / Nunito, bold |
| Highlight word | Kuning cerah `#facc15` |
| Safe zone caption | `bottom: 380px` |
| Karakter z-index | Min `zIndex: 10` (di atas partikel) |
| Format wajib | Tidak gunakan kata **"Tahukah Kamu"** di narasi |

---

## 8. Cara Render

### Preview Frame Tunggal
```bash
cmd.exe /c "cd c:\more\lain && npx remotion still DoorwayEffect --frame=0 out/preview.png --scale=0.3"
```

### TypeScript Check (sebelum render)
```bash
cmd.exe /c "cd c:\more\lain && npx tsc --noEmit"
```

### Render Full MP4
```bash
cmd.exe /c "cd c:\more\lain && npx remotion render DoorwayEffect out/NAMA_VIDEO.mp4 --concurrency=1 --scale=0.5"
```

> [!TIP]
> Ganti `DoorwayEffect` dengan nama composition baru sesuai `Root.tsx`.

---

## 9. Cara Tambah Video Baru

1. **Buat folder:** `src\videos\NamaTopik\`
2. **Buat scenes:** `Scene1_*.tsx` … `Scene8_*.tsx`
3. **Buat Composition.tsx** (copy template dari DoorwayEffect, ganti konten)
4. **Daftarkan di Root.tsx:**
   ```tsx
   <Composition
     id="NamaTopik"
     component={NamaTopikVideo}
     durationInFrames={960}
     fps={30}
     width={1080}
     height={1920}
   />
   ```
5. **Generate voiceover:**
   ```bash
   python -m edge_tts --voice id-ID-ArdiNeural --text "Narasi scene 1..." --write-media public/audio/voiceover/scene1.mp3
   ```
6. **TypeScript check** → **Render**

---

## 10. Roadmap Video

### ✅ Selesai
| # | Topik | File | Durasi |
|---|-------|------|--------|
| 1 | **The Doorway Effect** | `doorway_effect_final_v3.mp4` | 32 detik |

### 📋 Ide Berikutnya
| # | Topik | Hook Utama |
|---|-------|------------|
| 2 | **Efek Baader-Meinhof** | Kenapa kamu tiba-tiba lihat hal yang sama di mana-mana? |
| 3 | **Paradox of Choice** | Kenapa banyak pilihan bikin kamu makin stres? |
| 4 | **Spotlight Effect** | Orang lain nggak sepeduli itu sama kamu |
| 5 | **Priming Effect** | Kata-kata bisa mengontrol pikiranmu tanpa sadar |
| 6 | **Dunning-Kruger** | Orang yang paling sok tahu, sebenernya paling nggak tahu |
| 7 | **Rubber Duck Debugging** | Ngomong ke benda mati bikin masalah terpecahkan? |
| 8 | **IKEA Effect** | Kenapa kamu lebih sayang barang yang kamu rakit sendiri? |

---

## 11. Troubleshooting Cepat

| Error | Solusi |
|-------|--------|
| `npm.ps1 cannot be loaded` | Gunakan `cmd.exe /c "npx ..."` bukan PowerShell |
| Chrome OOM saat render | Tambahkan `--concurrency=1` |
| Edge-TTS 503 error | Jalankan dengan `BypassSandbox: true` (butuh network) |
| Karakter tertutup partikel | Tambahkan `zIndex: 10` ke SVG wrapper |
| BGM tidak terdengar | Pastikan file ada di `public/audio/bgm/`, volume min `0.15` |
| TypeScript error baru | Cek imports & jalankan `npx tsc --noEmit` dulu |

---

## 12. Output Files

| File | Ukuran | Keterangan |
|------|--------|------------|
| `out/doorway_effect_final_v3.mp4` | 5.1 MB | **FINAL** — 32s, 7 transisi, karakter baru ✅ |
| `out/doorway_effect_optimized_32s.mp4` | 4.4 MB | v2 — tanpa transisi |
| `out/doorway_effect.mp4` | 4.4 MB | v1 — awal |

---

*PRD ini bisa diupdate setiap kali ada video baru yang selesai dibuat.*
