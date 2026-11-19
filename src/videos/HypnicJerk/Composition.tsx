import React from 'react';
import {
  AbsoluteFill,
  Audio,
  interpolate,
  Sequence,
  staticFile,
} from 'remotion';

// Import 8 Dedicated Scenes
import { Scene1_FloatingSleep } from './scenes/Scene1_FloatingSleep';
import { Scene2_CliffFall } from './scenes/Scene2_CliffFall';
import { Scene3_WakeUpShock } from './scenes/Scene3_WakeUpShock';
import { Scene4_BrainDiagnosis } from './scenes/Scene4_BrainDiagnosis';
import { Scene5_AncientTree } from './scenes/Scene5_AncientTree';
import { Scene6_ElectricSignal } from './scenes/Scene6_ElectricSignal';
import { Scene7_StretchingHack } from './scenes/Scene7_StretchingHack';
import { Scene8_OutroCTA } from './scenes/Scene8_OutroCTA';

// Shared Components
import { SceneTransition } from '../../shared/effects/SceneTransition';
import { ViralCaptions } from '../../shared/ui/ViralCaptions';
import { ProgressBar } from '../../components/ProgressBar';

/**
 * Episode 3: "Kenapa Pas Mau Tidur Kaki Berasa Jatuh dari Jurang?" (Hypnic Jerk)
 * Saluran: Tiba-Tiba Paham (@tibatibapaham)
 * Format: 9:16 Vertical (1080 x 1920) @ 30 FPS
 * Total Durasi: 1220 frame (40.67 detik)
 *
 * Akustik & Audio:
 * - Voiceover Asli di folder: public/audio/ep3_voiceover/scene1.mp3 s/d scene8.mp3
 * - Anti-Clipping Guarantee: Setiap scene memiliki safety breathing room +16 s/d +21 frame.
 * - BGM Ducking: 14% volume agar suara voiceover terdengar jernih, tajam, dan lantang.
 */
export const HypnicJerkVideo: React.FC = () => {
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
          if (f > 1175) {
            return interpolate(f, [1175, 1220], [0.14, 0], {
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
          Audio VO: scene1.mp3 (3.87s = 117 frames) | Safety margin: +18 frames
          Naskah: "Lagi enak-enak terlentang mau tidur nyenyak di kasur..."
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={0} durationInFrames={135}>
        <Audio src={staticFile('audio/ep3_voiceover/scene1.mp3')} volume={1.0} />
        <Scene1_FloatingSleep />
        <ViralCaptions
          badge="🛌 LAGI TERLENTANG"
          badgeColor="#0ea5e9"
          text="Lagi enak-enak terlentang mau tidur nyenyak di kasur..."
          highlightWord="terlentang"
        />
      </Sequence>

      {/* ✨ TRANSITION 1→2: Centered at frame 135 (frames 129-141) */}
      <Sequence from={129} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#6366f1" />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 2: 4.5s - 9.5s (150 frames)
          Audio VO: scene2.mp3 (4.44s = 134 frames) | Safety margin: +16 frames
          Naskah: "Tiba-tiba... DEG! Kaki berasa melangkah ke jurang kosong!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={135} durationInFrames={150}>
        <Audio src={staticFile('audio/ep3_voiceover/scene2.mp3')} volume={1.0} />
        <Audio src={staticFile('audio/sfx/whoosh.wav')} volume={0.12} />
        <Scene2_CliffFall />
        <ViralCaptions
          badge="💥 KAKI NYENTAK!"
          badgeColor="#ef4444"
          text="Tiba-tiba... DEG! Kaki berasa melangkah ke jurang kosong!"
          highlightWord="jurang"
        />
      </Sequence>

      {/* ✨ TRANSITION 2→3: Centered at frame 285 (frames 279-291) */}
      <Sequence from={279} durationInFrames={12}>
        <SceneTransition type="wipe-diagonal" durationFrames={12} color="#ef4444" />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 3: 9.5s - 14.0s (135 frames)
          Audio VO: scene3.mp3 (3.87s = 117 frames) | Safety margin: +18 frames
          Naskah: "Tubuh langsung kesentak bangun, jantung deg-degan kencang!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={285} durationInFrames={135}>
        <Audio src={staticFile('audio/ep3_voiceover/scene3.mp3')} volume={1.0} />
        <Audio src={staticFile('audio/sfx/pop.wav')} volume={0.12} />
        <Scene3_WakeUpShock />
        <ViralCaptions
          badge="😱 KAGET BUKAN MAIN"
          badgeColor="#f59e0b"
          text="Tubuh langsung kesentak bangun, jantung deg-degan kencang!"
          highlightWord="kesentak"
        />
      </Sequence>

      {/* ✨ TRANSITION 3→4: Centered at frame 420 (frames 414-426) */}
      <Sequence from={414} durationInFrames={12}>
        <SceneTransition type="circle-reveal" durationFrames={12} color="#8b5cf6" />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 4: 14.0s - 18.5s (135 frames)
          Audio VO: scene4.mp3 (3.97s = 120 frames) | Safety margin: +15 frames
          Naskah: "Tenang, ini fenomena alami bernama Hypnic Jerk!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={420} durationInFrames={135}>
        <Audio src={staticFile('audio/ep3_voiceover/scene4.mp3')} volume={1.0} />
        <Audio src={staticFile('audio/sfx/chime.wav')} volume={0.12} />
        <Scene4_BrainDiagnosis />
        <ViralCaptions
          badge="⚡ HYPNIC JERK"
          badgeColor="#8b5cf6"
          text="Tenang, ini fenomena alami bernama Hypnic Jerk!"
          highlightWord="Hypnic"
        />
      </Sequence>

      {/* ✨ TRANSITION 4→5: Centered at frame 555 (frames 549-561) */}
      <Sequence from={549} durationInFrames={12}>
        <SceneTransition type="slide-up" durationFrames={12} color="#10b981" />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 5: 18.5s - 24.33s (175 frames)
          Audio VO: scene5.mp3 (5.15s = 155 frames) | Safety margin: +20 frames
          Naskah: "Pas otot tubuhmu mengendur cepat, otak purba mengira kamu lagi jatuh dari pohon!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={555} durationInFrames={175}>
        <Audio src={staticFile('audio/ep3_voiceover/scene5.mp3')} volume={1.0} />
        <Audio src={staticFile('audio/sfx/whoosh.wav')} volume={0.12} />
        <Scene5_AncientTree />
        <ViralCaptions
          badge="🌳 OTAK SALAH PAHAM"
          badgeColor="#10b981"
          text="Pas otot tubuhmu mengendur cepat, otak purba mengira kamu lagi jatuh dari pohon!"
          highlightWord="pohon!"
        />
      </Sequence>

      {/* ✨ TRANSITION 5→6: Centered at frame 730 (frames 724-736) */}
      <Sequence from={724} durationInFrames={12}>
        <SceneTransition type="split-vertical" durationFrames={12} color="#f59e0b" />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 6: 24.33s - 29.17s (145 frames)
          Audio VO: scene6.mp3 (4.13s = 124 frames) | Safety margin: +21 frames
          Naskah: "Makanya otak langsung kirim sinyal kejut listrik darurat ke kaki!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={730} durationInFrames={145}>
        <Audio src={staticFile('audio/ep3_voiceover/scene6.mp3')} volume={1.0} />
        <Audio src={staticFile('audio/sfx/glitch.wav')} volume={0.12} />
        <Scene6_ElectricSignal />
        <ViralCaptions
          badge="⚡ SINYAL DARURAT"
          badgeColor="#f59e0b"
          text="Makanya otak langsung kirim sinyal kejut listrik darurat ke kaki!"
          highlightWord="darurat"
        />
      </Sequence>

      {/* ✨ TRANSITION 6→7: Centered at frame 875 (frames 869-881) */}
      <Sequence from={869} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#10b981" />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 7: 29.17s - 35.33s (185 frames)
          Audio VO: scene7.mp3 (5.56s = 167 frames) | Safety margin: +18 frames
          Naskah: "Makin parah kalau kamu stres atau main HP! Coba peregangan ringan sebelum tidur."
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={875} durationInFrames={185}>
        <Audio src={staticFile('audio/ep3_voiceover/scene7.mp3')} volume={1.0} />
        <Audio src={staticFile('audio/sfx/ding.wav')} volume={0.12} />
        <Scene7_StretchingHack />
        <ViralCaptions
          badge="💡 HACK TIDUR LELAP"
          badgeColor="#10b981"
          text="Makin parah kalau kamu stres atau main HP! Coba peregangan ringan sebelum tidur."
          highlightWord="peregangan"
        />
      </Sequence>

      {/* ✨ TRANSITION 7→8: Centered at frame 1060 (frames 1054-1066) */}
      <Sequence from={1054} durationInFrames={12}>
        <SceneTransition type="zoom-out" durationFrames={12} color="#3b82f6" />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 8: 35.33s - 40.67s (160 frames)
          Audio VO: scene8.mp3 (4.75s = 143 frames) | Safety margin: +17 frames
          Naskah: "Pernah ngalamin ini semalem? Tag temanmu dan follow biar Tiba-Tiba Paham!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={1060} durationInFrames={160}>
        <Audio src={staticFile('audio/ep3_voiceover/scene8.mp3')} volume={1.0} />
        <Audio src={staticFile('audio/sfx/bell.wav')} volume={0.14} />
        <Scene8_OutroCTA />
        <ViralCaptions
          badge="👇 TAG TEMEN KAMU!"
          badgeColor="#3b82f6"
          text="Pernah ngalamin ini semalem? Tag temanmu dan follow biar Tiba-Tiba Paham!"
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
            background: 'linear-gradient(90deg, #f59e0b 0%, #ef4444 100%)',
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
          ⚡ SAINS TIDUR
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
