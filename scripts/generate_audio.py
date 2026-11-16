import os
import time
import math
import struct
import wave
import asyncio
import edge_tts

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
AUDIO_DIR = os.path.join(BASE_DIR, "public", "audio")
VO_DIR = os.path.join(AUDIO_DIR, "voiceover")
SFX_DIR = os.path.join(AUDIO_DIR, "sfx")
BGM_DIR = os.path.join(AUDIO_DIR, "bgm")

os.makedirs(VO_DIR, exist_ok=True)
os.makedirs(SFX_DIR, exist_ok=True)
os.makedirs(BGM_DIR, exist_ok=True)

# EXACT TEXT MATCHING COMPOSITION.TSX CAPTIONS
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

async def generate_voiceovers():
    print("--- GENERATING DUBBING / VOICEOVER (id-ID-ArdiNeural) ---")
    for filename, text in SCENES_SCRIPT:
        out_path = os.path.join(VO_DIR, filename)
        
        # Retry logic in case of 503 / connection glitch
        success = False
        for attempt in range(1, 5):
            try:
                communicate = edge_tts.Communicate(text, voice="id-ID-ArdiNeural", rate="+12%")
                await communicate.save(out_path)
                # Verify size > 1000 bytes
                if os.path.exists(out_path) and os.path.getsize(out_path) > 1000:
                    print(f"  [OK] Saved {filename} ({os.path.getsize(out_path)} bytes)")
                    success = True
                    break
            except Exception as e:
                print(f"  [RETRY {attempt}/4] Error on {filename}: {e}")
                await asyncio.sleep(2.0 * attempt)
        
        if not success:
            print(f"  [FAIL] Could not generate {filename}")
        
        # Courteous pause between requests
        await asyncio.sleep(1.0)

# 2. GENERATE SFX WITH PYTHON WAVE (Zero dependency, high fidelity)
def save_wav(filename, samples, sample_rate=44100):
    filepath = os.path.join(SFX_DIR, filename)
    with wave.open(filepath, 'w') as wav_file:
        wav_file.setnchannels(1)
        wav_file.setsampwidth(2)
        wav_file.setframerate(sample_rate)
        raw_data = bytearray()
        for s in samples:
            clamped = max(-1.0, min(1.0, s))
            val = int(clamped * 32767.0)
            raw_data.extend(struct.pack('<h', val))
        wav_file.writeframes(raw_data)
    print(f"  [OK] Generated SFX: {filename}")

def generate_sfx():
    print("--- GENERATING SOUND EFFECTS (SFX) ---")
    sr = 44100
    import random
    rng = random.Random(42)

    # 1. Whoosh (0.45s)
    dur = 0.45
    n = int(sr * dur)
    whoosh = []
    for i in range(n):
        t = i / sr
        env = math.sin(math.pi * (t / dur)) ** 2
        freq = 300 + 700 * math.sin(math.pi * (t / dur))
        noise = (rng.random() * 2 - 1)
        tone = math.sin(2 * math.pi * freq * t)
        val = env * (0.6 * noise + 0.4 * tone)
        whoosh.append(val * 0.7)
    save_wav("whoosh.wav", whoosh)

    # 2. Glitch / Freeze (0.5s)
    dur = 0.5
    n = int(sr * dur)
    glitch = []
    for i in range(n):
        t = i / sr
        env = math.exp(-3.0 * t)
        freq = 140 if int(t * 30) % 2 == 0 else 90
        sq = 1.0 if math.sin(2 * math.pi * freq * t) > 0 else -1.0
        buzz = sq * 0.5 + (rng.random() * 2 - 1) * 0.3
        glitch.append(buzz * env * 0.8)
    save_wav("glitch.wav", glitch)

    # 3. Pop / Question (0.25s)
    dur = 0.25
    n = int(sr * dur)
    pop = []
    for i in range(n):
        t = i / sr
        env = math.exp(-14.0 * t)
        freq = 650 * math.exp(-12.0 * t) + 180
        val = math.sin(2 * math.pi * freq * t) * env
        pop.append(val * 0.9)
    save_wav("pop.wav", pop)

    # 4. Chime (Magic sparkle - 0.7s)
    dur = 0.7
    n = int(sr * dur)
    chime = []
    tones = [587.33, 880.0, 1174.66, 1760.0]
    for i in range(n):
        t = i / sr
        val = 0
        for idx, f in enumerate(tones):
            delay = idx * 0.04
            if t > delay:
                dt = t - delay
                e2 = math.exp(-6.0 * dt)
                val += 0.25 * math.sin(2 * math.pi * f * dt) * e2
        chime.append(val * 0.9)
    save_wav("chime.wav", chime)

    # 5. Ding (Idea - 0.6s)
    dur = 0.6
    n = int(sr * dur)
    ding = []
    for i in range(n):
        t = i / sr
        env = math.exp(-5.0 * t)
        val = 0.7 * math.sin(2 * math.pi * 1046.5 * t) + 0.3 * math.sin(2 * math.pi * 2093 * t)
        ding.append(val * env * 0.85)
    save_wav("ding.wav", ding)

    # 6. Bell / Notification Outro (0.8s)
    dur = 0.8
    n = int(sr * dur)
    bell = []
    for i in range(n):
        t = i / sr
        val = 0
        if t < 0.4:
            e = math.exp(-7.0 * t)
            val += 0.5 * math.sin(2 * math.pi * 523.25 * t) * e
        if t > 0.12:
            dt = t - 0.12
            e = math.exp(-5.0 * dt)
            val += 0.6 * math.sin(2 * math.pi * 783.99 * dt) * e
        bell.append(val * 0.8)
    save_wav("bell.wav", bell)

# 3. GENERATE AMBIENT LO-FI BGM (48 seconds loop)
def generate_bgm():
    print("--- GENERATING AMBIENT LOFI BGM (48 SECONDS) ---")
    sr = 44100
    total_dur = 48.0
    n = int(sr * total_dur)
    bgm = []
    
    chords = [
        [293.66, 349.23, 440.0, 523.25], # Dm7
        [196.00, 246.94, 293.66, 349.23], # G7
        [261.63, 329.63, 392.00, 493.88], # Cmaj7
        [220.00, 261.63, 329.63, 392.00]  # Am7
    ]
    chord_len = 3.0
    
    for i in range(n):
        t = i / sr
        chord_idx = int(t / chord_len) % len(chords)
        chord_t = t % chord_len
        curr_chord = chords[chord_idx]
        
        piano_env = math.exp(-1.2 * chord_t) * (0.8 + 0.2 * math.sin(2 * math.pi * 4 * chord_t))
        val = 0
        for f in curr_chord:
            val += 0.15 * math.sin(2 * math.pi * f * t)
        
        root_f = curr_chord[0] / 2.0
        bass_env = math.exp(-0.8 * chord_t)
        bass = 0.25 * math.sin(2 * math.pi * root_f * t) * bass_env
        
        shaker_t = (t * 2) % 1.0
        shaker = (0.04 * math.sin(2 * math.pi * 3500 * t)) * math.exp(-8.0 * shaker_t)
        
        sample = (val * piano_env + bass + shaker) * 0.4
        bgm.append(sample)

    filepath = os.path.join(BGM_DIR, "lofi_mystery.wav")
    with wave.open(filepath, 'w') as wav_file:
        wav_file.setnchannels(1)
        wav_file.setsampwidth(2)
        wav_file.setframerate(sr)
        raw_data = bytearray()
        for s in bgm:
            clamped = max(-1.0, min(1.0, s))
            val = int(clamped * 32767.0)
            raw_data.extend(struct.pack('<h', val))
        wav_file.writeframes(raw_data)
    print(f"  [OK] Generated BGM: lofi_mystery.wav (48 seconds)")

async def main():
    await generate_voiceovers()
    generate_sfx()
    generate_bgm()
    print("=== ALL AUDIO ASSETS READY IN public/audio/ ===")

if __name__ == "__main__":
    asyncio.run(main())
