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
 * Total Durasi Est: 1045 frame (~34.8 detik)
 *
 * Akustik & Audio:
 * - Folder Voiceover Pengguna: public/audio/ep4_voiceover/scene1.mp3 s/d scene8.mp3
 * - BGM Ducking: 14% volume agar suara voiceover terdengar jernih dan tajam.
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

      {/* 🎵 BACKGROUND MUSIC (Sneaky / Mystery Theme - Ducked to 14% for crystal clear VO) */}
      <Audio
        src={staticFile('audio/bgm/bgm_mystery.mp3')}
        volume={(f) => {
          if (f > 1000) {
            return interpolate(f, [1000, 1045], [0.14, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
          }
          return 0.14;
        }}
        loop
      />

      {/* ══════════════════════════════════════════════════════════════
          SCENE 1: 0 - 4.5s (135 frames)
          Naskah: "Pernah nggak, pas iseng muter balik voice note WhatsApp sendiri, kamu langsung geli dan mikir: 'Hah, suaraku beneran secempreng ini?!'"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={0} durationInFrames={135}>
        <Scene1_VoiceNote />
        <ViralCaptions
          badge="📱 PUTER BALIK VN"
          badgeColor="#10b981"
          text="Pernah nggak, pas iseng muter balik voice note WhatsApp sendiri..."
          highlightWord="WhatsApp"
        />
      </Sequence>

      {/* ✨ TRANSITION 1→2: Centered at frame 135 (frames 129-141) */}
      <Sequence from={129} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#6366f1" />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 2: 4.5s - 8.5s (120 frames, from 135 to 255)
          Naskah: "Padahal di dalam kepala kita, suara kita kerasa berat, berwibawa, dan keren banget!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={135} durationInFrames={120}>
        <Scene2_ExpectationVsReality />
        <ViralCaptions
          badge="🎙️ SUARA DI KEPALA"
          badgeColor="#6366f1"
          text="Padahal di dalam kepala kita, suara kita kerasa berat dan keren banget!"
          highlightWord="berat"
        />
      </Sequence>

      {/* ✨ TRANSITION 2→3: Centered at frame 255 (frames 249-261) */}
      <Sequence from={249} durationInFrames={12}>
        <SceneTransition type="wipe-diagonal" durationFrames={12} color="#0284c7" />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 3: 8.5s - 13.0s (135 frames, from 255 to 390)
          Naskah: "Tenang, ini bukan salah mikrofon HP-mu. Saat kamu ngomong langsung, otakmu nerima suara lewat dua jalur sekaligus!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={255} durationInFrames={135}>
        <Scene3_TwoAudioPaths />
        <ViralCaptions
          badge="🧠 DUA JALUR SUARA"
          badgeColor="#0284c7"
          text="Saat kamu ngomong langsung, otakmu nerima suara lewat dua jalur sekaligus!"
          highlightWord="dua"
        />
      </Sequence>

      {/* ✨ TRANSITION 3→4: Centered at frame 390 (frames 384-396) */}
      <Sequence from={384} durationInFrames={12}>
        <SceneTransition type="circle-reveal" durationFrames={12} color="#0ea5e9" />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 4: 13.0s - 16.8s (115 frames, from 390 to 505)
          Naskah: "Pertama, gelombang suara merambat lewat udara dari mulut masuk ke lubang telinga."
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={390} durationInFrames={115}>
        <Scene4_AirConduction />
        <ViralCaptions
          badge="💨 JALUR UDARA"
          badgeColor="#0ea5e9"
          text="Pertama, gelombang suara merambat lewat udara dari mulut ke telinga."
          highlightWord="udara"
        />
      </Sequence>

      {/* ✨ TRANSITION 4→5: Centered at frame 505 (frames 499-511) */}
      <Sequence from={499} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#eab308" />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 5: 16.8s - 21.0s (125 frames, from 505 to 630)
          Naskah: "Tapi yang kedua, getaran pita suaramu juga merambat langsung menembus tulang tengkorak!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={505} durationInFrames={125}>
        <Scene5_BoneConduction />
        <ViralCaptions
          badge="🦴 JALUR TULANG"
          badgeColor="#eab308"
          text="Kedua, getaran pita suaramu juga merambat menembus tulang tengkorak!"
          highlightWord="tulang"
        />
      </Sequence>

      {/* ✨ TRANSITION 5→6: Centered at frame 630 (frames 624-636) */}
      <Sequence from={624} durationInFrames={12}>
        <SceneTransition type="wipe-diagonal" durationFrames={12} color="#a855f7" />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 6: 21.0s - 25.8s (145 frames, from 630 to 775)
          Naskah: "Tulang tengkorak bikin suaramu lebih nge-bass dan hangat. Nah, speaker HP cuma muter getaran udara doang!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={630} durationInFrames={145}>
        <Scene6_PhoneSpeakerDissonance />
        <ViralCaptions
          badge="🎧 TANPA BASS TULANG"
          badgeColor="#a855f7"
          text="Tulang bikin suara nge-bass. Nah, speaker HP cuma muter getaran udara!"
          highlightWord="speaker"
        />
      </Sequence>

      {/* ✨ TRANSITION 6→7: Centered at frame 775 (frames 769-781) */}
      <Sequence from={769} durationInFrames={12}>
        <SceneTransition type="circle-reveal" durationFrames={12} color="#10b981" />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 7: 25.8s - 30.3s (135 frames, from 775 to 910)
          Naskah: "Kabar baiknya: semua temanmu udah terbiasa sama suaramu yang asli. Cuma kamu doang kok yang ngerasa suaramu aneh!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={775} durationInFrames={135}>
        <Scene7_Reassurance />
        <ViralCaptions
          badge="✅ SUARAMU NORMAL"
          badgeColor="#10b981"
          text="Semua temanmu udah terbiasa sama suaramu yang asli sejak dulu!"
          highlightWord="terbiasa"
        />
      </Sequence>

      {/* ✨ TRANSITION 7→8: Centered at frame 910 (frames 904-916) */}
      <Sequence from={904} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#ef4444" />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 8: 30.3s - 34.8s (135 frames, from 910 to 1045)
          Naskah: "Kirim video ini ke temanmu yang paling anti dengerin voice note-nya sendiri, dan follow biar Tiba-Tiba Paham!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={910} durationInFrames={135}>
        <Scene8_OutroCTA />
        <ViralCaptions
          badge="👉 SHARE & FOLLOW"
          badgeColor="#ef4444"
          text="Kirim video ini ke temanmu, dan follow biar Tiba-Tiba Paham!"
          highlightWord="follow"
        />
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
