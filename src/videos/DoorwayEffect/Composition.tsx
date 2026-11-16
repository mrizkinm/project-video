import React from 'react';
import { AbsoluteFill, Sequence, Audio, staticFile } from 'remotion';
import { Scene1_Bedroom } from './scenes/Scene1_Bedroom';
import { Scene2_Walking } from './scenes/Scene2_Walking';
import { Scene3_Freeze } from './scenes/Scene3_Freeze';
import { Scene4_LivingRoom } from './scenes/Scene4_LivingRoom';
import { Scene5_BrainRoom } from './scenes/Scene5_BrainRoom';
import { Scene6_SciencePortal } from './scenes/Scene6_SciencePortal';
import { Scene7_RewindHack } from './scenes/Scene7_RewindHack';
import { Scene8_VictoryOutro } from './scenes/Scene8_VictoryOutro';
import { ViralCaptions } from '../../shared/ui/ViralCaptions';
import { ProgressBar } from '../../components/ProgressBar';
import { SceneTransition } from '../../shared/effects/SceneTransition';

export const DoorwayEffectVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#000000' }}>
      {/* 🎵 BACKGROUND MUSIC (Sneaky / Mystery Theme at audible 28% volume) */}
      <Audio
        src={staticFile('audio/bgm/bgm_mystery.mp3')}
        volume={0.28}
        loop
      />

      {/* SCENE 1: 0 - 3.5s (105 frames) */}
      <Sequence from={0} durationInFrames={105}>
        <Audio src={staticFile('audio/voiceover/scene1.mp3')} volume={1.0} />
        <Scene1_Bedroom />
        <ViralCaptions
          badge="PERNAH NGGAK SIH?"
          badgeColor="#3b82f6"
          text="Lagi di kamar mau ngambil sesuatu..."
          highlightWord="kamar"
        />
      </Sequence>

      {/* ✨ TRANSITION 1→2: frame 93-105 (flash-cut cyan) */}
      <Sequence from={93} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#38bdf8" />
      </Sequence>

      {/* SCENE 2: 3.5s - 6.5s (90 frames) */}
      <Sequence from={105} durationInFrames={90}>
        <Audio src={staticFile('audio/voiceover/scene2.mp3')} volume={1.0} />
        <Audio src={staticFile('audio/sfx/whoosh.wav')} volume={0.45} />
        <Scene2_Walking />
        <ViralCaptions
          badge="MELANGKAH PEDE"
          badgeColor="#10b981"
          text="Jalan dengan penuh keyakinan ke ruangan depan..."
          highlightWord="keyakinan"
        />
      </Sequence>

      {/* ✨ TRANSITION 2→3: frame 183-195 (wipe-diagonal red) */}
      <Sequence from={183} durationInFrames={12}>
        <SceneTransition type="wipe-diagonal" durationFrames={12} color="#ef4444" />
      </Sequence>

      {/* SCENE 3: 6.5s - 10.0s (105 frames) */}
      <Sequence from={195} durationInFrames={105}>
        <Audio src={staticFile('audio/voiceover/scene3.mp3')} volume={1.0} />
        <Audio src={staticFile('audio/sfx/glitch.wav')} volume={0.55} />
        <Scene3_Freeze />
        <ViralCaptions
          badge="MENDADAK BLANK?!"
          badgeColor="#ef4444"
          text="Tapi pas buka pintu... mendadak amnesia mau ngapain?!"
          highlightWord="amnesia"
        />
      </Sequence>

      {/* ✨ TRANSITION 3→4: frame 288-300 (circle-reveal yellow) */}
      <Sequence from={288} durationInFrames={12}>
        <SceneTransition type="circle-reveal" durationFrames={12} color="#facc15" />
      </Sequence>

      {/* SCENE 4: 10.0s - 13.5s (105 frames) */}
      <Sequence from={300} durationInFrames={105}>
        <Audio src={staticFile('audio/voiceover/scene4.mp3')} volume={1.0} />
        <Audio src={staticFile('audio/sfx/pop.wav')} volume={0.5} />
        <Scene4_LivingRoom />
        <ViralCaptions
          badge="BUKAN PIKUN!"
          badgeColor="#eab308"
          text="Tenang, kamu nggak sendirian dan bukan lagi pikun!"
          highlightWord="pikun!"
        />
      </Sequence>

      {/* ✨ TRANSITION 4→5: frame 393-405 (slide-up purple) */}
      <Sequence from={393} durationInFrames={12}>
        <SceneTransition type="slide-up" durationFrames={12} color="#8b5cf6" />
      </Sequence>

      {/* SCENE 5: 13.5s - 18.0s (135 frames) */}
      <Sequence from={405} durationInFrames={135}>
        <Audio src={staticFile('audio/voiceover/scene5.mp3')} volume={1.0} />
        <Audio src={staticFile('audio/sfx/chime.wav')} volume={0.45} />
        <Scene5_BrainRoom />
        <ViralCaptions
          badge="THE DOORWAY EFFECT"
          badgeColor="#8b5cf6"
          text="Otak kita punya mekanisme unik bernama The Doorway Effect!"
          highlightWord="Doorway"
        />
      </Sequence>

      {/* ✨ TRANSITION 5→6: frame 528-540 (split-vertical blue) */}
      <Sequence from={528} durationInFrames={12}>
        <SceneTransition type="split-vertical" durationFrames={12} color="#0284c7" />
      </Sequence>

      {/* SCENE 6: 18.0s - 22.5s (135 frames) */}
      <Sequence from={540} durationInFrames={135}>
        <Audio src={staticFile('audio/voiceover/scene6.mp3')} volume={1.0} />
        <Audio src={staticFile('audio/sfx/whoosh.wav')} volume={0.4} />
        <Scene6_SciencePortal />
        <ViralCaptions
          badge="AMBANG PINTU"
          badgeColor="#0284c7"
          text="Saat melangkah lewat pintu, otak menutup babak lama dan me-refresh memori!"
          highlightWord="me-refresh"
        />
      </Sequence>

      {/* ✨ TRANSITION 6→7: frame 663-675 (flash-cut amber) */}
      <Sequence from={663} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#f59e0b" />
      </Sequence>

      {/* SCENE 7: 22.5s - 27.0s (135 frames) */}
      <Sequence from={675} durationInFrames={135}>
        <Audio src={staticFile('audio/voiceover/scene7.mp3')} volume={1.0} />
        <Audio src={staticFile('audio/sfx/ding.wav')} volume={0.55} />
        <Scene7_RewindHack />
        <ViralCaptions
          badge="SOLUSI KILAT"
          badgeColor="#f59e0b"
          text="Trik mudahnya: cukup jalan mundur atau balik ke posisi semula!"
          highlightWord="mundur"
        />
      </Sequence>

      {/* ✨ TRANSITION 7→8: frame 798-810 (zoom-out green) */}
      <Sequence from={798} durationInFrames={12}>
        <SceneTransition type="zoom-out" durationFrames={12} color="#10b981" />
      </Sequence>

      {/* SCENE 8: 27.0s - 32.0s (150 frames) */}
      <Sequence from={810} durationInFrames={150}>
        <Audio src={staticFile('audio/voiceover/scene8.mp3')} volume={1.0} />
        <Audio src={staticFile('audio/sfx/bell.wav')} volume={0.55} />
        <Scene8_VictoryOutro />
        <ViralCaptions
          badge="TAG TEMEN KAMU!"
          badgeColor="#10b981"
          text="Otakmu bakal me-reload ingatan! Tag temanmu yang sering amnesia!"
          highlightWord="me-reload"
        />
      </Sequence>

      {/* Top Header Floating Badge */}
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
            background: 'linear-gradient(90deg, #6366f1 0%, #a855f7 100%)',
            color: '#ffffff',
            fontWeight: 900,
            fontSize: 24,
            padding: '10px 26px',
            borderRadius: 30,
            letterSpacing: 1.5,
            fontFamily: '"Plus Jakarta Sans", "Nunito", sans-serif',
            boxShadow: '0 6px 18px rgba(0,0,0,0.5)',
            border: '2px solid rgba(255,255,255,0.25)',
          }}
        >
          🧠 FAKTA PSIKOLOGI
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
            fontFamily: '"Plus Jakarta Sans", "Nunito", sans-serif',
          }}
        >
          #FaktaUnik
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <ProgressBar />
    </AbsoluteFill>
  );
};
