import os
import subprocess
import speech_recognition as sr

FFMPEG = r"C:\more\project-video\node_modules\@remotion\compositor-win32-x64-msvc\ffmpeg.exe"
AUDIO_DIR = r"C:\more\project-video\public\audio\ep2_voiceover"

r = sr.Recognizer()

for i in range(1, 8):
    mp3_file = os.path.join(AUDIO_DIR, f"scene{i}.mp3")
    wav_file = os.path.join(AUDIO_DIR, f"scene{i}.wav")
    
    # Convert to 16kHz mono WAV using bundled ffmpeg
    cmd = [FFMPEG, "-y", "-i", mp3_file, "-ar", "16000", "-ac", "1", wav_file]
    subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    
    # Transcribe with Google Speech Recognition (Indonesian)
    try:
        with sr.AudioFile(wav_file) as source:
            audio_data = r.record(source)
            text = r.recognize_google(audio_data, language="id-ID")
            print(f"scene{i}.mp3: {text}")
    except Exception as e:
        print(f"scene{i}.mp3: Error: {e}")
    finally:
        if os.path.exists(wav_file):
            os.remove(wav_file)
