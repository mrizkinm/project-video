# 📋 Aturan Produksi Video — Tiba-Tiba Paham (@tibatibapaham)

Dokumen ini adalah pedoman wajib (*hard rules*) untuk agen dan tim produksi video pendek (TikTok, Instagram Reels, YouTube Shorts) saluran **Tiba-Tiba Paham**. Setiap episode baru WAJIB mematuhi seluruh aturan di bawah ini.

---

## 1. 🏷️ Identitas Brand & Watermark Wajib
- **Nama Channel:** Tiba-Tiba Paham (`@tibatibapaham`)
- **Tone Visual:** Pop-science modern bergaya *Kurzgesagt* dan *Vox* (vektor cerah, ramah, dinamis, cerdas).
- **Watermark Konsisten (Wajib di Semua Scene):**
  - **Pojok Kiri Atas:** Badge topik (misal: `☕ SAINS KOPI`, `🧠 SAINS OTAK`, `⚡ SAINS FISIKA`).
  - **Pojok Kanan Atas:** `#TibaTibaPaham`.

---

## 2. 🔤 Tipografi & Skala Teks (Mobile-First Legibility)
- **Font Resmi (100% Offline Lokal):**
  - Judul, badge, stamp, dan tombol: **Fredoka Bold** (`public/fonts/Fredoka.ttf`).
  - Subtitle, caption, dan penjelasan: **Plus Jakarta Sans** (`public/fonts/PlusJakartaSans.ttf`).
- **Ukuran Teks di Dalam Scene (In-Scene Graphic Text):**
  - **DILARANG menggunakan font terlalu kecil.** Di layar HP (layar kecil), font kecil sulit dibaca.
  - Tag/Pill/Label komponen: Minimal **22px – 28px** tebal.
  - Stamp komik / Header aksi: **34px – 56px** tebal.
  - Balon kata / seruan: Minimal **24px – 26px**.
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
  - Karakter harus tampil dominan dan mengisi ruang tengah layar, bukan kecil seperti boneka kurus di tengah ruang kosong.
- **Kerapatan Antar-Elemen (Spatial Cohesion):**
  - Jangan menaruh elemen terpisah terlalu jauh (hindari jurang kosong 300px+ antara header dan karakter).
  - Dekatkan properti (meja, alarm, teko kopi, widget jam/baterai, scanner hologram) ke tubuh/bahu karakter sehingga membentuk satu kesatuan visual yang padat.
- **Diagram & Fasilitas Sains:**
  - Dermaga/kotak diagram (seperti slot parkir reseptor, antrean molekul) harus melebar **680px – 860px**.
  - Lengkapi dengan detail marka jalan, garis hazard, rambu stop, kerucut peringatan, dan partikel suasana agar layar terasa kaya dan imersif.

---

## 4. 🎙️ Sinkronisasi Voiceover & Aksesibilitas Teman Tuli
- **100% Verbatim (Kata demi Kata):**
  - Teks subtitle WAJIB 100% sama persis kata-per-kata dengan file audio voiceover. Jangan menambah, mengubah, atau memangkas kata.
  - Memastikan penonton teman tuli (*deaf/hard-of-hearing*) dan penonton tanpa suara (*sound-off*) memahami pesan secara akurat.
- **Pemisahan Berdasarkan Jeda Alami Suara (*Acoustic Pause Alignment*):**
  - Pemisahan frasa subtitle harus mengikuti jeda napas atau koma pengisi suara, BUKAN dibagi rata 50/50 secara matematis.
- **Zero Voiceover Clipping (Anti Terpotong):**
  - Setiap akhir scene WAJIB memiliki *safety breathing room* minimal **+12 s/d +17 frame** (+0.4 s/d +0.6 detik). Audio voiceover tidak boleh terpotong tiba-tiba oleh transisi.

---

## 5. 🎨 Konteks & Narasi Visual ("Show, Don't Write")
- **Pencahayaan & Waktu Scene:**
  - Jika naskah menyebut bangun tidur pagi hari, visual WAJIB bernuansa pagi hari cerah (matahari terbit, langit biru muda, jendela terang, jam weker 07:00 AM), BUKAN malam hari.
- **Minimal Teks Statis:**
  - Jangan memenuhi layar dengan paragraf panjang. Gunakan analogi visual, ekspresi karakter, dan pergerakan objek (*Kurzgesagt principle*).

---

## 6. ⚙️ Prosedur Teknis Remotion di Windows
- **Perintah CLI:** Selalu jalankan rendering dan pengambilan gambar diam melalui `cmd.exe /c "npx remotion ..."` dengan mode sandboxing yang tepat (`BypassSandbox: true` untuk proses render komposit).
- **FFmpeg Binary:** Gunakan binary ffmpeg bawaan Remotion di:  
  `node_modules\@remotion\compositor-win32-x64-msvc\ffmpeg.exe`.

---

## 7. 📱 Aturan Penulisan Caption Media Sosial (Anti-Panjang & Anti-AI Slop)
- **DILARANG membuat caption terlalu panjang.** Penonton video pendek (TikTok, Instagram Reels, YouTube Shorts) hanya membaca sekilas dan enggan membaca paragraf panjang bertele-tele.
- **Panjang Maksimal:**
  - Maksimal **2 hingga 3 kalimat / paragraf pendek** (total **25 – 45 kata**).
  - Ringkas, santai, padat, dan *to the point*.
- **Struktur 3 Bagian Wajib:**
  1. **Hook Singkat (1 baris):** Pertanyaan atau seruan keresahan yang relatable.
  2. **Inti Sains (1–2 baris):** Jawaban sains secara gamblang tanpa penjelasan teori yang berbelit-belit.
  3. **CTA / Interaksi (1 baris):** Pertanyaan santai pemicu komentar atau ajakan share ke teman.
- **Penggunaan Emoji Wajar (Anti-AI Slop):**
  - Cukup gunakan **1 hingga 3 emoji** yang relevan di seluruh teks agar terlihat natural dan tidak kaku.
  - **DILARANG keras menumpuk deretan emoji** di setiap akhir kalimat yang memberi kesan AI generik / *AI slop*.
- **Tagar / Hashtag Hemat & Relevan:**
  - Cukup cantumkan **3 hingga 4 tagar resmi** (misal: `#TibaTibaPaham #SainsSuara #VoiceNote`). Hindari spam belasan tagar.

---

## 8. 🛡️ Zona Bebas Tabrakan Vertikal (Anti-Overlap & Subtitle Safety Buffer)
- **Batas Bawah Komponen Tengah (Showcase Box / Card / Diagram):**
  - Subtitle dan Category Badge (`ViralCaptions`) menempati area `bottom: 380px` (titik atas badge mulai di sekitar **Y ≈ 1300px – 1320px**).
  - **DILARANG KERAS** membiarkan bagian bawah kotak showcase, diagram, kartu perbandingan, atau teks narasi menjorok terlalu ke bawah hingga menabrak/tertutup oleh category badge (`ViralCaptions`).
  - **Batas Maksimal Bawah:** Seluruh kotak tengah/diagram WAJIB berakhir maksimal di **Y = 1200px – 1220px**, menyisakan *safety breathing room* minimal **+100px – 140px** di atas badge subtitle.
  - **Pusat Transformasi Vertikal:** Untuk kotak berukuran tinggi 750px – 850px, titik pusat (*center transform*) wajib diposisikan di **Y = 740px – 800px** (BUKAN Y = 880px – 980px) agar seimbang di tengah dan tidak terdorong ke bawah.
