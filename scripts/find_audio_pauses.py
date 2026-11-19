import os
import subprocess
import wave
import struct

FFMPEG = r"C:\more\project-video\node_modules\@remotion\compositor-win32-x64-msvc\ffmpeg.exe"
AUDIO_DIR = r"C:\more\project-video\public\audio\ep2_voiceover"

def analyze_audio(i):
    mp3 = os.path.join(AUDIO_DIR, f"scene{i}.mp3")
    wav = os.path.join(AUDIO_DIR, f"scene{i}_temp.wav")
    
    subprocess.run([FFMPEG, "-y", "-i", mp3, "-ar", "16000", "-ac", "1", wav],
                   stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    
    with wave.open(wav, 'rb') as wf:
        n_frames = wf.getnframes()
        sr = wf.getframerate()
        raw = wf.readframes(n_frames)
        samples = struct.unpack(f"<{n_frames}h", raw)
        
    os.remove(wav)
    
    # 50ms chunk RMS energy
    chunk_size = int(sr * 0.05) # 50ms
    energies = []
    for c in range(0, len(samples), chunk_size):
        chunk = samples[c:c+chunk_size]
        if not chunk: continue
        rms = (sum(s*s for s in chunk) / len(chunk)) ** 0.5
        t_sec = (c + len(chunk)/2) / sr
        frame_30fps = int(round(t_sec * 30))
        energies.append((t_sec, frame_30fps, rms))
        
    total_sec = len(samples) / sr
    total_frames = int(round(total_sec * 30))
    print(f"\n=== SCENE {i} (Total: {total_sec:.2f}s / {total_frames} frames) ===")
    
    # Find low-energy valleys (pauses < 400 RMS) between 1.5s and (total_sec - 1.0s)
    pauses = [e for e in energies if e[2] < 350 and 1.5 < e[0] < (total_sec - 1.0)]
    # Group continuous pause chunks
    grouped_pauses = []
    cur_group = []
    for p in pauses:
        if not cur_group or p[0] - cur_group[-1][0] < 0.15:
            cur_group.append(p)
        else:
            if len(cur_group) >= 2: # At least 100ms pause
                mid_t = (cur_group[0][0] + cur_group[-1][0]) / 2
                mid_f = int(round(mid_t * 30))
                grouped_pauses.append((mid_t, mid_f))
            cur_group = [p]
    if len(cur_group) >= 2:
        mid_t = (cur_group[0][0] + cur_group[-1][0]) / 2
        mid_f = int(round(mid_t * 30))
        grouped_pauses.append((mid_t, mid_f))
        
    for p_t, p_f in grouped_pauses:
        print(f"  Pause detected at: {p_t:.2f}s (Frame {p_f})")

for i in range(1, 8):
    analyze_audio(i)
