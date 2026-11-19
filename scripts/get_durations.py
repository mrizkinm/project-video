import os
import struct

def get_mp3_duration(file_path):
    # Quick pure python MP3 parser
    with open(file_path, 'rb') as f:
        data = f.read()

    bitrates_v1_l3 = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 0]
    sample_rates_v1 = [44100, 48000, 32000, 0]
    
    # Skip ID3v2 if present
    offset = 0
    if data[:3] == b'ID3':
        size = ((data[6] & 0x7f) << 21) | ((data[7] & 0x7f) << 14) | ((data[8] & 0x7f) << 7) | (data[9] & 0x7f)
        offset = 10 + size

    frames = 0
    total_samples = 0
    sample_rate = 44100

    i = offset
    n = len(data)
    while i < n - 4:
        if data[i] == 0xFF and (data[i+1] & 0xE0) == 0xE0:
            header = struct.unpack('>I', data[i:i+4])[0]
            version = (header >> 19) & 3
            layer = (header >> 17) & 3
            bitrate_idx = (header >> 12) & 0xF
            sr_idx = (header >> 10) & 3
            padding = (header >> 9) & 1

            if version == 3 and layer == 1 and bitrate_idx != 0 and bitrate_idx != 15 and sr_idx != 3:
                br = bitrates_v1_l3[bitrate_idx] * 1000
                sr = sample_rates_v1[sr_idx]
                sample_rate = sr
                frame_length = int(144 * br / sr) + padding
                if frame_length > 0:
                    frames += 1
                    total_samples += 1152
                    i += frame_length
                    continue
        i += 1

    if frames > 0 and sample_rate > 0:
        duration_sec = total_samples / sample_rate
        return duration_sec
    
    # Fallback to file size estimate (128kbps)
    return (len(data) * 8) / 128000

for i in range(1, 8):
    p = f"public/audio/ep2_voiceover/scene{i}.mp3"
    if os.path.exists(p):
        sec = get_mp3_duration(p)
        print(f"scene{i}.mp3: {sec:.3f}s ({sec*30:.1f} frames @ 30fps)")
