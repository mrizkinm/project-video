import os
import shutil
import json
import time
import urllib.request
import urllib.error

# 1. SETUP PATHS
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
ENV_FILE = os.path.join(BASE_DIR, ".env")
AUDIO_DIR = os.path.join(BASE_DIR, "public", "audio")
VO_DIR = os.path.join(AUDIO_DIR, "voiceover")
BACKUP_DIR = os.path.join(AUDIO_DIR, "voiceover_backup_edge")

os.makedirs(VO_DIR, exist_ok=True)
os.makedirs(BACKUP_DIR, exist_ok=True)

# 2. LOAD API KEY FROM .env
api_key = ""
if os.path.exists(ENV_FILE):
    with open(ENV_FILE, "r", encoding="utf-8") as f:
        for line in f:
            if line.startswith("ELEVENLABS_API_KEY="):
                api_key = line.strip().split("=", 1)[1]

if not api_key:
    print("❌ Error: ELEVENLABS_API_KEY tidak ditemukan di .env!")
    exit(1)

# 3. VOICE CONFIGURATION
# Default: Liam (Energetic, Social Media Creator) - ID: TX3LPaxmHKxFdv7VOQHJ
# Alternatif:
#   - Charlie (Deep, Confident, Energetic): IKne3meq5aSn9XLyUdCD
#   - Alice (Clear, Engaging Educator - Female): Xb7hH8MSUJpSbSDYk0k2
#   - George (Warm, Captivating Storyteller): JBFqnCBsd6RMkjVDRZzb
VOICE_ID = os.environ.get("ELEVEN_VOICE_ID", "TX3LPaxmHKxFdv7VOQHJ")  # Liam
MODEL_ID = "eleven_multilingual_v2"

# 4. SCRIPT PER SCENE (Natural, conversational phrasing matching Remotion timing)
SCENES_SCRIPT = [
    ("scene1.mp3", "Lagi di kamar mau ngambil sesuatu..."),
    ("scene2.mp3", "Jalan dengan penuh keyakinan ke ruangan depan..."),
    ("scene3.mp3", "Tapi pas buka pintu... mendadak amnesia mau ngapain?!"),
    ("scene4.mp3", "Tenang, kamu nggak sendirian dan bukan lagi pikun!"),
    ("scene5.mp3", "Otak kita punya mekanisme unik bernama The Doorway Effect!"),
    ("scene6.mp3", "Saat melangkah lewat pintu, otak menutup babak lama dan me-refresh memori!"),
    ("scene7.mp3", "Trik mudahnya: cukup jalan mundur atau balik ke posisi semula!"),
    ("scene8.mp3", "Otakmu bakal me-reload ingatan! Tag temanmu yang sering amnesia!"),
]

def backup_existing():
    for filename, _ in SCENES_SCRIPT:
        src = os.path.join(VO_DIR, filename)
        dst = os.path.join(BACKUP_DIR, filename)
        if os.path.exists(src) and not os.path.exists(dst):
            shutil.copy2(src, dst)
    print("📦 Backup file voiceover lama tersimpan di public/audio/voiceover_backup_edge/")

def generate_scene(filename, text, voice_id):
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"
    headers = {
        "xi-api-key": api_key,
        "Content-Type": "application/json",
        "Accept": "audio/mpeg",
    }
    payload = {
        "text": text,
        "model_id": MODEL_ID,
        "voice_settings": {
            "stability": 0.45,        # Sedikit lebih rendah agar intonasi lebih ekspresif
            "similarity_boost": 0.75, # Jaga karakter suara tetap konsisten
            "style": 0.20,            # Sentuhan energi gaya bicara
            "use_speaker_boost": True
        }
    }

    req = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers=headers, method="POST")
    out_path = os.path.join(VO_DIR, filename)

    try:
        with urllib.request.urlopen(req) as response:
            audio_data = response.read()
            with open(out_path, "wb") as f:
                f.write(audio_data)
            print(f"  ✅ [OK] {filename} ({len(audio_data)} bytes) - \"{text[:35]}...\"")
            return True
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode("utf-8")
        print(f"  ❌ [ERROR {e.code}] on {filename}: {err_msg}")
        return False
    except Exception as e:
        print(f"  ❌ [ERROR] on {filename}: {e}")
        return False

def main():
    print("🎙️ --- GENERATING NATURAL VOICEOVER DENGAN ELEVENLABS ---")
    print(f"Voice ID: {VOICE_ID} (Liam - Energetic Creator)")
    print(f"Model: {MODEL_ID}")
    
    total_chars = sum(len(text) for _, text in SCENES_SCRIPT)
    print(f"Total karakter yang akan digunakan: {total_chars} karakter (dari kuota 10.000 gratis)")
    print("-" * 55)

    backup_existing()

    success_count = 0
    for filename, text in SCENES_SCRIPT:
        if generate_scene(filename, text, VOICE_ID):
            success_count += 1
        time.sleep(0.5)

    print("-" * 55)
    if success_count == len(SCENES_SCRIPT):
        print(f"🎉 SUKSES! Seluruh {success_count} file voiceover berhasil dibuat!")
    else:
        print(f"⚠️ {success_count}/{len(SCENES_SCRIPT)} file berhasil dibuat.")

if __name__ == "__main__":
    main()
