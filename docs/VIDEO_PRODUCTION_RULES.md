# 📋 Video Production Rules & Guidelines — Tiba-Tiba Paham (@tibatibapaham)

Dokumen ini adalah ringkasan aturan baku (*hard rules*) hasil iterasi dan perbaikan produksi video pendek saluran **Tiba-Tiba Paham**. Seluruh episode selanjutnya wajib mematuhi aturan ini secara konsisten.

---

## 1. 🏷️ Identitas Brand & Watermark Wajib
- **Nama Channel:** Tiba-Tiba Paham (`@tibatibapaham`)
- **Tone Visual:** Pop-science modern bergaya *Kurzgesagt* dan *Vox* (vektor cerah, ramah, dinamis, cerdas).
- **Watermark Konsisten (Wajib di Setiap Scene):**
  - **Pojok Kiri Atas:** Badge topik (misal: `☕ SAINS KOPI`, `🧠 SAINS OTAK`, `⚡ SAINS FISIKA`).
  - **Pojok Kanan Atas:** Tagar `#TibaTibaPaham`.

---

## 2. 🔤 Tipografi & Skala Teks (Mobile-First Legibility)
- **Font Resmi (100% Offline Lokal):**
  - Judul, badge, stamp, dan tombol: **Fredoka Bold** (`public/fonts/Fredoka.ttf`).
  - Subtitle, caption, dan penjelasan: **Plus Jakarta Sans** (`public/fonts/PlusJakartaSans.ttf`).
- **Ukuran Teks di Dalam Scene (In-Scene Graphic Text):**
  - **DILARANG font terlalu kecil.** Di layar smartphone, teks kecil sulit dibaca cepat.
  - Tag/Pill/Label komponen: Minimal **22px – 28px** tebal.
  - Stamp komik / Header aksi: **34px – 56px** tebal.
  - Balon kata / seruan molekul: Minimal **24px – 26px**.
- **Aturan Kotak / Kapsul Pembungkus Teks:**
  - **Kotak pembungkus TIDAK BOLEH terlalu sempit.**
  - Wajib memberikan *padding* horizontal minimal **40px – 70px** dan vertikal **12px – 18px** agar teks bernapas lega dan tidak menabrak batas kotak (seperti pada kotak *Reseptor Tertutup*).
- **Ukuran Caption Subtitle Utama (`ViralCaptions`):**
  - Main kinetic subtitle text: **38px** (sudah pas & jangan diubah).
  - Category badge: **26px** (sudah pas & jangan diubah).
  - Posisi: `bottom: 380px` (aman dari UI overlay TikTok/Reels/Shorts).

---

## 3. 📐 Kerapatan Tata Letak & Komposisi ("Anti-Ruang Kosong")
- **Aspek Rasio:** 9:16 Vertikal (1080 x 1920 piksel).
- **Skala Karakter & Maskot:**
  - Karakter manusia utama (`MainCharacter`): Skala **1.55x – 1.65x**.
  - Maskot Otak (`BrainMascot`): Skala **1.25x – 1.45x**.
  - Karakter harus tampil dominan dan mengisi ruang tengah layar secara proporsional.
- **Kerapatan Antar-Elemen (Spatial Cohesion):**
  - Hindari penempatan elemen yang terpisah terlalu jauh (hindari jurang kosong vertikal >250px).
  - Dekatkan properti (meja, jam alarm, teko kopi, widget jam/baterai, scanner hologram) ke tubuh/bahu karakter sehingga menyatu padat.
- **Diagram & Fasilitas Sains:**
  - Dermaga/kotak diagram (slot parkir reseptor, antrean molekul) harus melebar **680px – 860px**.
  - Lengkapi dengan detail marka jalan, garis hazard, rambu stop, kerucut peringatan, dan partikel suasana.

---

## 4. 🎙️ Sinkronisasi Voiceover & Aksesibilitas Teman Tuli
- **100% Verbatim (Kata demi Kata):**
  - Teks subtitle WAJIB 100% sama persis kata-per-kata dengan file audio voiceover. Jangan menambah, memotong, atau mengubah kata sedikit pun.
  - Aksesibilitas penuh bagi teman tuli (*deaf/hard-of-hearing*) dan penonton mode tanpa suara (*sound-off*).
- **Pemisahan Berdasarkan Jeda Alami Suara (*Acoustic Pause Alignment*):**
  - Pemisahan frasa subtitle wajib mengikuti jeda napas atau koma pengisi suara, bukan dibagi rata 50/50 secara matematis.
- **Zero Voiceover Clipping (Anti Terpotong):**
  - Setiap akhir scene WAJIB memiliki *safety breathing room* minimal **+12 s/d +17 frame** (+0.4 s/d +0.6 detik). Audio voiceover tidak boleh terpotong tiba-tiba oleh transisi.

---

## 5. 🎨 Konteks & Narasi Visual ("Show, Don't Write")
- **Pencahayaan & Waktu Scene:**
  - Jika naskah menyebut bangun tidur pagi hari, visual WAJIB bernuansa pagi hari cerah (matahari terbit, langit biru muda, jendela terang, jam weker 07:00 AM), BUKAN malam hari.
- **Minimal Teks Statis:**
  - Utamakan analogi visual, ekspresi karakter, dan pergerakan objek (*Kurzgesagt principle*), hindari paragraf panjang.

---

## 6. ⚙️ Prosedur Teknis Remotion di Windows
- **Perintah CLI:** Selalu jalankan rendering dan pengambilan gambar diam melalui `cmd.exe /c "npx remotion ..."` dengan mode sandboxing yang tepat.
- **FFmpeg Binary:** Gunakan binary ffmpeg bawaan Remotion di:  
  `node_modules\@remotion\compositor-win32-x64-msvc\ffmpeg.exe`.
