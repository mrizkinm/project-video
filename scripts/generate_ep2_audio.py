import os
import asyncio
import edge_tts

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
AUDIO_DIR = os.path.join(BASE_DIR, "public", "audio")
EP2_VO_DIR = os.path.join(AUDIO_DIR, "ep2_voiceover")

os.makedirs(EP2_VO_DIR, exist_ok=True)

SCENES_SCRIPT = [
    ("scene1.mp3", "Niatnya minum kopi biar melek dan fokus, tapi kok 20 menit kemudian malah ngantuk berat dan lemes?"),
    ("scene2.mp3", "Tenang, bukan kopinya yang salah, tapi otakmu lagi kena jebakan reseptor!"),
    ("scene3.mp3", "Di otak ada zat Adenosin, sinyal rasa capek yang mau parkir di reseptor. Nah, kafein itu cuma nyerobot slot parkir Adenosin!"),
    ("scene4.mp3", "Kafein nggak ngilangin rasa capek. Selama kafein parkir, tumpukan Adenosin terus bertambah banyak di belakangnya!"),
    ("scene5.mp3", "Begitu efek kafein habis, tumpukan Adenosin langsung nyerbu reseptor barengan. BOOM! Kamu langsung kena caffeine crash dan ngantuk dobel!"),
    ("scene6.mp3", "Triknya: Jangan langsung ngopi pas baru melek. Tunggu 60 sampai 90 menit biar Adenosin alami tubuhmu bersih dulu!"),
    ("scene7.mp3", "Tag temenmu yang kalau ngopi malah tidur! Follow Tiba-Tiba Paham biar makin paham!"),
]

async def generate_voiceovers():
    print("--- GENERATING EPISODE 2 DUBBING (id-ID-ArdiNeural) ---")
    for filename, text in SCENES_SCRIPT:
        out_path = os.path.join(EP2_VO_DIR, filename)
        success = False
        for attempt in range(1, 5):
            try:
                communicate = edge_tts.Communicate(text, voice="id-ID-ArdiNeural", rate="+12%")
                await communicate.save(out_path)
                if os.path.exists(out_path) and os.path.getsize(out_path) > 1000:
                    print(f"  [OK] Saved {filename} ({os.path.getsize(out_path)} bytes)")
                    success = True
                    break
            except Exception as e:
                print(f"  [RETRY {attempt}/4] Error on {filename}: {e}")
                await asyncio.sleep(1.5 * attempt)
        
        if not success:
            print(f"  [FAIL] Could not generate {filename}")
        
        await asyncio.sleep(0.5)

if __name__ == "__main__":
    asyncio.run(generate_voiceovers())
