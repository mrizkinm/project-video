import React from 'react';
import {
  AbsoluteFill,
  Audio,
  interpolate,
  Sequence,
  staticFile,
} from 'remotion';

// Import 8 Dedicated Scenes
import { Scene1_VoiceNote } from './scenes/Scene1_VoiceNote';
import { Scene2_ExpectationVsReality } from './scenes/Scene2_ExpectationVsReality';
import { Scene3_TwoAudioPaths } from './scenes/Scene3_TwoAudioPaths';
import { Scene4_AirConduction } from './scenes/Scene4_AirConduction';
import { Scene5_BoneConduction } from './scenes/Scene5_BoneConduction';
import { Scene6_PhoneSpeakerDissonance } from './scenes/Scene6_PhoneSpeakerDissonance';
import { Scene7_Reassurance } from './scenes/Scene7_Reassurance';
import { Scene8_OutroCTA } from './scenes/Scene8_OutroCTA';

// Shared Components
import { SceneTransition } from '../../shared/effects/SceneTransition';
import { ViralCaptions } from '../../shared/ui/ViralCaptions';
import { ProgressBar } from '../../components/ProgressBar';

/**
 * Episode 4: "Kenapa Suara Rekaman Sendiri Kedengeran Asing & Geli?" (Voice Confrontation Effect)
 * Saluran: Tiba-Tiba Paham (@tibatibapaham)
 * Format: 9:16 Vertical (1080 x 1920) @ 30 FPS
 * Total Durasi: 1783 frame (59.43 detik)
 *
 * Akustik & Audio:
 * - 8 File Voiceover: public/audio/ep4_voiceover/scene1.mp3 s/d scene8.mp3
 * - Audio Breathing Room: +15 s/d +16 frame di setiap akhir scene (Zero Voiceover Clipping)
 * - BGM Ducking: 14% volume agar vokal voiceover terdengar jernih, tebal, dan crisp.
 */
export const VoiceConfrontationVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#030712' }}>
      {/* 100% Offline Local Fonts Setup */}
      <style>{`
        @font-face {
          font-family: 'Fredoka';
          src: url('${staticFile('fonts/Fredoka.ttf')}') format('truetype');
          font-weight: 400 900;
          font-style: normal;
          font-display: block;
        }
        @font-face {
          font-family: 'Plus Jakarta Sans';
          src: url('${staticFile('fonts/PlusJakartaSans.ttf')}') format('truetype');
          font-weight: 400 800;
          font-style: normal;
          font-display: block;
        }
      `}</style>

      {/* 🎵 BACKGROUND MUSIC (Sneaky Mystery Theme - Ducked to 14% for crystal clear VO) */}
      <Audio
        src={staticFile('audio/bgm/bgm_mystery.mp3')}
        volume={(f) => {
          if (f > 1720) {
            return interpolate(f, [1720, 1783], [0.14, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
          }
          return 0.14;
        }}
        loop
      />

      {/* ══════════════════════════════════════════════════════════════
          SCENE 1: 0 - 8.60s (258 frames, VO: 242 frames)
          Naskah: "Pernah nggak, pas iseng muter balik voice note WhatsApp sendiri, kamu langsung geli dan mikir: 'Hah, suaraku beneran secempreng ini?!'"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={0} durationInFrames={258}>
        <Audio src={staticFile('audio/ep4_voiceover/scene1.mp3')} volume={1.0} />
        <Scene1_VoiceNote />

        {/* Dynamic Caption 1A (0 - 110 | ~3.67s) */}
        <Sequence from={0} durationInFrames={110}>
          <ViralCaptions
            badge="📱 PUTER BALIK VN"
            badgeColor="#10b981"
            text="Pernah nggak, pas iseng muter balik voice note WhatsApp sendiri..."
            highlightWord="voice note WhatsApp"
          />
        </Sequence>

        {/* Dynamic Caption 1B (110 - 258 | ~4.93s) */}
        <Sequence from={110} durationInFrames={148}>
          <ViralCaptions
            badge="😱 SECEMPRENG INI?!"
            badgeColor="#ef4444"
            text='...kamu langsung geli dan mikir: "Hah, suaraku beneran secempreng ini?!"'
            highlightWord="secempreng ini?!"
          />
        </Sequence>
      </Sequence>

      {/* ✨ TRANSITION 1→2: Centered at frame 258 (frames 252-264) */}
      <Sequence from={252} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#6366f1" />
        <Audio src={staticFile('audio/sfx/whoosh.wav')} volume={0.16} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 2: 8.60s - 15.47s (206 frames, from 258 to 464, VO: 191 frames)
          Naskah: "Padahal di dalam kepala kita, suara kita kerasa berat, berwibawa, dan keren banget!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={258} durationInFrames={206}>
        <Audio src={staticFile('audio/ep4_voiceover/scene2.mp3')} volume={1.0} />
        <Scene2_ExpectationVsReality />

        {/* Dynamic Caption 2A (0 - 68 | ~2.27s) */}
        <Sequence from={0} durationInFrames={68}>
          <ViralCaptions
            badge="🎙️ SUARA DI KEPALA"
            badgeColor="#6366f1"
            text="Padahal di dalam kepala kita..."
            highlightWord="kepala kita"
          />
        </Sequence>

        {/* Dynamic Caption 2B (68 - 206 | ~4.60s) */}
        <Sequence from={68} durationInFrames={138}>
          <ViralCaptions
            badge="👑 BASS & BERWIBAWA"
            badgeColor="#f59e0b"
            text="...suara kita kerasa berat, berwibawa, dan keren banget!"
            highlightWord="berat, berwibawa"
          />
        </Sequence>
      </Sequence>

      {/* ✨ TRANSITION 2→3: Centered at frame 464 (frames 458-470) */}
      <Sequence from={458} durationInFrames={12}>
        <SceneTransition type="wipe-diagonal" durationFrames={12} color="#0284c7" />
        <Audio src={staticFile('audio/sfx/pop.wav')} volume={0.20} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 3: 15.47s - 24.30s (265 frames, from 464 to 729, VO: 249 frames)
          Naskah: "Tenang, ini bukan salah mikrofon HP-mu. Saat kamu ngomong langsung, otakmu nerima suara lewat dua jalur sekaligus!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={464} durationInFrames={265}>
        <Audio src={staticFile('audio/ep4_voiceover/scene3.mp3')} volume={1.0} />
        <Scene3_TwoAudioPaths />

        {/* Dynamic Caption 3A (0 - 100 | ~3.33s) */}
        <Sequence from={0} durationInFrames={100}>
          <ViralCaptions
            badge="📱 BUKAN SALAH HP"
            badgeColor="#0284c7"
            text="Tenang, ini bukan salah mikrofon HP-mu!"
            highlightWord="bukan salah"
          />
        </Sequence>

        {/* Dynamic Caption 3B (100 - 265 | ~5.50s) */}
        <Sequence from={100} durationInFrames={165}>
          <ViralCaptions
            badge="🧠 DUA JALUR SUARA"
            badgeColor="#06b6d4"
            text="Saat kamu ngomong langsung, otakmu nerima suara lewat dua jalur sekaligus!"
            highlightWord="dua jalur sekaligus"
          />
        </Sequence>
      </Sequence>

      {/* ✨ TRANSITION 3→4: Centered at frame 729 (frames 723-735) */}
      <Sequence from={723} durationInFrames={12}>
        <SceneTransition type="circle-reveal" durationFrames={12} color="#0ea5e9" />
        <Audio src={staticFile('audio/sfx/whoosh.wav')} volume={0.16} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 4: 24.30s - 30.37s (182 frames, from 729 to 911, VO: 167 frames)
          Naskah: "Pertama, gelombang suara merambat lewat udara dari mulut masuk ke lubang telinga."
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={729} durationInFrames={182}>
        <Audio src={staticFile('audio/ep4_voiceover/scene4.mp3')} volume={1.0} />
        <Scene4_AirConduction />
        <ViralCaptions
          badge="💨 JALUR 1: UDARA"
          badgeColor="#0ea5e9"
          text="Pertama, gelombang suara merambat lewat udara dari mulut masuk ke lubang telinga."
          highlightWord="lewat udara"
        />
      </Sequence>

      {/* ✨ TRANSITION 4→5: Centered at frame 911 (frames 905-917) */}
      <Sequence from={905} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#eab308" />
        <Audio src={staticFile('audio/sfx/glitch.wav')} volume={0.18} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 5: 30.37s - 36.60s (187 frames, from 911 to 1098, VO: 172 frames)
          Naskah: "Tapi yang kedua, getaran pita suaramu juga merambat langsung menembus tulang tengkorak!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={911} durationInFrames={187}>
        <Audio src={staticFile('audio/ep4_voiceover/scene5.mp3')} volume={1.0} />
        <Scene5_BoneConduction />
        <ViralCaptions
          badge="🦴 JALUR 2: TULANG"
          badgeColor="#eab308"
          text="Tapi yang kedua, getaran pita suaramu juga merambat langsung menembus tulang tengkorak!"
          highlightWord="tulang tengkorak"
        />
      </Sequence>

      {/* ✨ TRANSITION 5→6: Centered at frame 1098 (frames 1092-1104) */}
      <Sequence from={1092} durationInFrames={12}>
        <SceneTransition type="wipe-diagonal" durationFrames={12} color="#a855f7" />
        <Audio src={staticFile('audio/sfx/whoosh.wav')} volume={0.16} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 6: 36.60s - 44.43s (235 frames, from 1098 to 1333, VO: 220 frames)
          Naskah: "Tulang tengkorak bikin suaramu lebih nge-bass dan hangat. Nah, speaker HP cuma muter getaran udara doang!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={1098} durationInFrames={235}>
        <Audio src={staticFile('audio/ep4_voiceover/scene6.mp3')} volume={1.0} />
        <Scene6_PhoneSpeakerDissonance />

        {/* Dynamic Caption 6A (0 - 108 | ~3.60s) */}
        <Sequence from={0} durationInFrames={108}>
          <ViralCaptions
            badge="🔊 BASS ALAMI"
            badgeColor="#10b981"
            text="Tulang tengkorak bikin suaramu lebih nge-bass dan hangat..."
            highlightWord="nge-bass dan hangat"
          />
        </Sequence>

        {/* Dynamic Caption 6B (108 - 235 | ~4.23s) */}
        <Sequence from={108} durationInFrames={127}>
          <ViralCaptions
            badge="📱 HANYA GETARAN UDARA"
            badgeColor="#ef4444"
            text="...nah, speaker HP cuma muter getaran udara doang!"
            highlightWord="getaran udara doang"
          />
        </Sequence>
      </Sequence>

      {/* ✨ TRANSITION 6→7: Centered at frame 1333 (frames 1327-1339) */}
      <Sequence from={1327} durationInFrames={12}>
        <SceneTransition type="circle-reveal" durationFrames={12} color="#10b981" />
        <Audio src={staticFile('audio/sfx/chime.wav')} volume={0.20} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 7: 44.43s - 52.27s (235 frames, from 1333 to 1568, VO: 220 frames)
          Naskah: "Kabar baiknya: semua temanmu udah terbiasa sama suaramu yang asli. Cuma kamu doang kok yang ngerasa suaramu aneh!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={1333} durationInFrames={235}>
        <Audio src={staticFile('audio/ep4_voiceover/scene7.mp3')} volume={1.0} />
        <Scene7_Reassurance />

        {/* Dynamic Caption 7A (0 - 135 | ~4.50s) */}
        <Sequence from={0} durationInFrames={135}>
          <ViralCaptions
            badge="👥 SUDAH TERBIASA"
            badgeColor="#10b981"
            text="Kabar baiknya: semua temanmu udah terbiasa sama suaramu yang asli..."
            highlightWord="udah terbiasa"
          />
        </Sequence>

        {/* Dynamic Caption 7B (135 - 235 | ~3.33s) */}
        <Sequence from={135} durationInFrames={100}>
          <ViralCaptions
            badge="🧠 ILUSI KEPALA"
            badgeColor="#6366f1"
            text="...cuma kamu doang kok yang ngerasa suaramu aneh!"
            highlightWord="cuma kamu doang"
          />
        </Sequence>
      </Sequence>

      {/* ✨ TRANSITION 7→8: Centered at frame 1568 (frames 1562-1574) */}
      <Sequence from={1562} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#ef4444" />
        <Audio src={staticFile('audio/sfx/ding.wav')} volume={0.20} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 8: 52.27s - 59.43s (215 frames, from 1568 to 1783, VO: 199 frames)
          Naskah: "Kirim video ini ke temanmu yang paling anti dengerin voice note-nya sendiri, dan follow biar Tiba-Tiba Paham!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={1568} durationInFrames={215}>
        <Audio src={staticFile('audio/ep4_voiceover/scene8.mp3')} volume={1.0} />
        <Scene8_OutroCTA />

        {/* Dynamic Caption 8A (0 - 122 | ~4.07s) */}
        <Sequence from={0} durationInFrames={122}>
          <ViralCaptions
            badge="📤 BAGIKAN KE TEMAN"
            badgeColor="#22c55e"
            text="Kirim video ini ke temanmu yang paling anti dengerin voice note-nya sendiri..."
            highlightWord="anti dengerin"
          />
        </Sequence>

        {/* Dynamic Caption 8B (122 - 215 | ~3.10s) */}
        <Sequence from={122} durationInFrames={93}>
          <ViralCaptions
            badge="💡 TIBA-TIBA PAHAM"
            badgeColor="#38bdf8"
            text="...dan follow biar Tiba-Tiba Paham!"
            highlightWord="Tiba-Tiba Paham!"
          />
        </Sequence>
      </Sequence>

      {/* 🏷️ TOP HEADER WATERMARK (Kurzgesagt/Vox Branding) */}
      <div
        style={{
          position: 'absolute',
          top: 60,
          left: 50,
          right: 50,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 90,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(90deg, #0ea5e9 0%, #8b5cf6 100%)',
            color: '#ffffff',
            fontWeight: 900,
            fontSize: 24,
            padding: '10px 26px',
            borderRadius: 30,
            letterSpacing: 1.5,
            fontFamily: "'Fredoka', sans-serif",
            boxShadow: '0 6px 18px rgba(0,0,0,0.5)',
            border: '2px solid rgba(255,255,255,0.25)',
          }}
        >
          🎙️ SAINS SUARA
        </div>
        <div
          style={{
            color: '#facc15',
            fontWeight: 800,
            fontSize: 26,
            backgroundColor: 'rgba(15,23,42,0.85)',
            padding: '8px 22px',
            borderRadius: 20,
            border: '2px solid rgba(250,204,21,0.5)',
            fontFamily: "'Fredoka', sans-serif",
          }}
        >
          #TibaTibaPaham
        </div>
      </div>

      {/* 📊 BOTTOM PROGRESS BAR */}
      <ProgressBar />
    </AbsoluteFill>
  );
};
