import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';
import { BrainMascot } from '../../../shared/characters/BrainMascot';

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const mascotPop = spring({
    frame,
    fps,
    config: { damping: 11, stiffness: 100 },
  });

  return (
    <AbsoluteFill>
      <ParticleBackground theme="darkblue" />

      <svg
        viewBox="0 0 1080 1920"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
        }}
      >
        {/* Character on the left thinking */}
        <g transform="translate(340, 1050)">
          <MainCharacter mood="confused" scale={1.25} />
        </g>

        {/* Brain Mascot floating on the right */}
        <g
          transform={`translate(740, 720) scale(${Math.max(0, mascotPop) * 0.95})`}
        >
          <BrainMascot mood="waving" />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
