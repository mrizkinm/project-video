import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene1_Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Question mark spring bounce
  const qMarkScale = spring({
    frame: frame - 12,
    fps,
    config: { damping: 9, stiffness: 140 },
  });

  return (
    <AbsoluteFill>
      <ParticleBackground theme="purple" />

      <svg
        viewBox="0 0 1080 1920"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {/* Floating Curious Question Marks */}
        {frame > 10 && (
          <g transform={`translate(735, 620) scale(${Math.max(0, qMarkScale)})`}>
            <circle cx="0" cy="0" r="70" fill="#facc15" opacity="0.25" />
            <circle cx="0" cy="0" r="50" fill="#eab308" />
            <text
              x="0"
              y="20"
              fontSize="64"
              fontWeight="900"
              fill="#ffffff"
              textAnchor="middle"
              fontFamily="'Fredoka', sans-serif"
            >
              ?
            </text>
          </g>
        )}

        {/* Confused Character scratching head - moved lower as requested */}
        <g transform="translate(540, 995)">
          <MainCharacter mood="thinking" scale={1.35} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
