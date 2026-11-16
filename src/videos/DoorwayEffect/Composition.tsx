import React from 'react';
import { AbsoluteFill, Sequence, Audio, staticFile, interpolate } from 'remotion';
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
      {/* 🔤 Global Font Loader (Loaded once for the whole composition) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800;900&family=Nunito:wght@800;900;1000&display=swap');
      `}</style>

      {/* 🎵 BACKGROUND MUSIC (Sneaky / Mystery Theme at 28% with smooth outro fade-out) */}
      <Audio
        src={staticFile('audio/bgm/bgm_mystery.mp3')}
        volume={(f) => {
          if (f > 1100) {
            return interpolate(f, [1100, 1140], [0.28, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
          }
          return 0.28;
        }}
        loop
      />

      {/* SCENE 1: 0 - 3.17s (95 frames) | VO: 73 frames */}
      <Sequence from={0} durationInFrames={95}>
        <Audio src={staticFile('audio/voiceover/scene1.mp3')} volume={1.0} />
        <Scene1_Bedroom />
        <ViralCaptions
          badge="PERNAH NGGAK SIH?"
          badgeColor="#3b82f6"
          text="Lagi di kamar mau ngambil sesuatu..."
          highlightWord="kamar"
        />
      </Sequence>

      {/* ✨ TRANSITION 1→2: Centered at frame 95 cut (frame 89-101, flash-cut cyan) */}
      <Sequence from={89} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#38bdf8" />
      </Sequence>

      {/* SCENE 2: 3.17s - 6.83s (110 frames) | VO: 88 frames */}
      <Sequence from={95} durationInFrames={110}>
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

      {/* ✨ TRANSITION 2→3: Centered at frame 205 cut (frame 199-211, wipe-diagonal red) */}
      <Sequence from={199} durationInFrames={12}>
        <SceneTransition type="wipe-diagonal" durationFrames={12} color="#ef4444" />
      </Sequence>

      {/* SCENE 3: 6.83s - 12.0s (155 frames) | VO: 136 frames */}
      <Sequence from={205} durationInFrames={155}>
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

      {/* ✨ TRANSITION 3→4: Centered at frame 360 cut (frame 354-366, circle-reveal yellow) */}
      <Sequence from={354} durationInFrames={12}>
        <SceneTransition type="circle-reveal" durationFrames={12} color="#facc15" />
      </Sequence>

      {/* SCENE 4: 12.0s - 17.0s (150 frames) | VO: 129 frames */}
      <Sequence from={360} durationInFrames={150}>
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

      {/* ✨ TRANSITION 4→5: Centered at frame 510 cut (frame 504-516, slide-up purple) */}
      <Sequence from={504} durationInFrames={12}>
        <SceneTransition type="slide-up" durationFrames={12} color="#8b5cf6" />
      </Sequence>

      {/* SCENE 5: 17.0s - 21.83s (145 frames) | VO: 124 frames */}
      <Sequence from={510} durationInFrames={145}>
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

      {/* ✨ TRANSITION 5→6: Centered at frame 655 cut (frame 649-661, split-vertical blue) */}
      <Sequence from={649} durationInFrames={12}>
        <SceneTransition type="split-vertical" durationFrames={12} color="#0284c7" />
      </Sequence>

      {/* SCENE 6: 21.83s - 27.5s (170 frames) | VO: 148 frames */}
      <Sequence from={655} durationInFrames={170}>
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

      {/* ✨ TRANSITION 6→7: Centered at frame 825 cut (frame 819-831, flash-cut amber) */}
      <Sequence from={819} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#f59e0b" />
      </Sequence>

      {/* SCENE 7: 27.5s - 32.67s (155 frames) | VO: 134 frames */}
      <Sequence from={825} durationInFrames={155}>
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

      {/* ✨ TRANSITION 7→8: Centered at frame 980 cut (frame 974-986, zoom-out green) */}
      <Sequence from={974} durationInFrames={12}>
        <SceneTransition type="zoom-out" durationFrames={12} color="#10b981" />
      </Sequence>

      {/* SCENE 8: 32.67s - 38.0s (160 frames) | VO: 127 frames */}
      <Sequence from={980} durationInFrames={160}>
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
