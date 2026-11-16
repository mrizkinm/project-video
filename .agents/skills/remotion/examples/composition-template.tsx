import { AbsoluteFill, Audio, Sequence, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import React from 'react';

export const ExampleComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance bounce animation
  const titleScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Background gradient shift
  const bgHue = interpolate(frame, [0, 300], [210, 270], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: `hsl(${bgHue}, 50%, 15%)`,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        color: '#ffffff',
      }}
    >
      {/* Background Music */}
      <Audio src={staticFile('audio/bgm/sneaky_snitch.mp3')} volume={0.25} loop />

      {/* Intro Scene (0 - 3s) */}
      <Sequence from={0} durationInFrames={90}>
        <div style={{ transform: `scale(${titleScale})`, textAlign: 'center' }}>
          <h1 style={{ fontSize: 72, fontWeight: 900 }}>REMOTION</h1>
          <p style={{ fontSize: 32, opacity: 0.8 }}>Code-Driven Video</p>
        </div>
      </Sequence>

      {/* Main Scene (3s - 10s) */}
      <Sequence from={90} durationInFrames={210}>
        <div style={{ fontSize: 44, textAlign: 'center', maxWidth: '80%' }}>
          Programmatic animation powered by React & TypeScript
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
