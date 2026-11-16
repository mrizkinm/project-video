import React from 'react';
import { AbsoluteFill, Sequence, Audio, staticFile, interpolate } from 'remotion';
import { Scene1_Hook } from './scenes/Scene1_Hook';
import { Scene2_RelatableDilemma } from './scenes/Scene2_RelatableDilemma';
import { Scene3_BrandReveal } from './scenes/Scene3_BrandReveal';
import { Scene4_OutroCTA } from './scenes/Scene4_OutroCTA';
import { ViralCaptions } from '../../shared/ui/ViralCaptions';
import { ProgressBar } from '../../components/ProgressBar';
import { SceneTransition } from '../../shared/effects/SceneTransition';

export const IntroTibaTibaPahamVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#000000' }}>
      {/* 🔤 Global Font Loader */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800;900&family=Nunito:wght@800;900;1000&display=swap');
      `}</style>

      {/* 🎵 BACKGROUND MUSIC (Upbeat/Sneaky mystery at 26% with outro fade) */}
      <Audio
        src={staticFile('audio/bgm/bgm_mystery.mp3')}
        volume={(f) => {
          if (f > 780) {
            return interpolate(f, [780, 830], [0.26, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
          }
          return 0.26;
        }}
        loop
      />

      {/* SCENE 1: HOOK (0 - 4.83s | 145 frames) */}
      <Sequence from={0} durationInFrames={145}>
        <Audio src={staticFile('audio/intro_voiceover/scene1.mp3')} volume={1.0} />
        <Scene1_Hook />
        <ViralCaptions
          badge="PERNAH BINGUNG? 🤔"
          badgeColor="#8b5cf6"
          text="Pernah bingung sama hal-hal aneh di pikiranmu sendiri?"
          highlightWord="pikiranmu"
        />
      </Sequence>

      {/* ✨ TRANSITION 1→2: Centered at frame 145 (139-151, flash-cut cyan) */}
      <Sequence from={139} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#38bdf8" />
      </Sequence>

      {/* SCENE 2: CONTOH RELATABLE (4.83s - 10.5s | 170 frames) */}
      <Sequence from={145} durationInFrames={170}>
        <Audio src={staticFile('audio/intro_voiceover/scene2.mp3')} volume={1.0} />
        <Audio src={staticFile('audio/sfx/whoosh.wav')} volume={0.45} />
        <Scene2_RelatableDilemma />
        <ViralCaptions
          badge="KENAPA BISA GITU?! 🚪☕"
          badgeColor="#ef4444"
          text="Buka pintu mendadak lupa, atau ngopi malah makin ngantuk!"
          highlightWord="lupa,"
        />
      </Sequence>

      {/* ✨ TRANSITION 2→3: Centered at frame 315 (309-321, circle-reveal gold) */}
      <Sequence from={309} durationInFrames={12}>
        <SceneTransition type="circle-reveal" durationFrames={12} color="#facc15" />
      </Sequence>

      {/* SCENE 3: BRAND REVEAL (10.5s - 20.5s | 300 frames) */}
      <Sequence from={315} durationInFrames={300}>
        <Audio src={staticFile('audio/intro_voiceover/scene3.mp3')} volume={1.0} />
        <Audio src={staticFile('audio/sfx/chime.wav')} volume={0.5} />
        <Scene3_BrandReveal />
        <ViralCaptions
          badge="TIBA-TIBA PAHAM! 💡"
          badgeColor="#f59e0b"
          text="Selamat datang di Tiba-Tiba Paham! Bedah sains & misteri sehari-hari!"
          highlightWord="Paham!"
        />
      </Sequence>

      {/* ✨ TRANSITION 3→4: Centered at frame 615 (609-621, zoom-out green) */}
      <Sequence from={609} durationInFrames={12}>
        <SceneTransition type="zoom-out" durationFrames={12} color="#10b981" />
      </Sequence>

      {/* SCENE 4: CALL TO ACTION (20.5s - 27.67s | 215 frames) */}
      <Sequence from={615} durationInFrames={215}>
        <Audio src={staticFile('audio/intro_voiceover/scene4.mp3')} volume={1.0} />
        <Audio src={staticFile('audio/sfx/bell.wav')} volume={0.55} />
        <Scene4_OutroCTA />
        <ViralCaptions
          badge="YUK FOLLOW! 🔔"
          badgeColor="#10b981"
          text="Biar kamu nggak bingung lagi dan jadi Tiba-Tiba Paham! Follow ya!"
          highlightWord="Tiba-Tiba"
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
            background: 'linear-gradient(90deg, #f59e0b 0%, #ef4444 100%)',
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
          💡 KENALAN YUK!
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
          #TibaTibaPaham
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <ProgressBar />
    </AbsoluteFill>
  );
};
