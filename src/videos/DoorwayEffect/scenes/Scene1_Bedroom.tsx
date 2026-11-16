import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CozyBedroomBackground } from '../../../shared/environments/CozyBedroomBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene1_Bedroom: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Idea bulb pop
  const bulbScale = spring({
    frame: frame - 15,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  return (
    <AbsoluteFill>
      <CozyBedroomBackground />

      <svg
        viewBox="0 0 1080 1920"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 10 }}
      >
        {/* Floating Mini Idea Bulb */}
        {frame > 12 && (
          <g transform={`translate(620, 780) scale(${Math.max(0, bulbScale)})`}>
            <circle cx="0" cy="0" r="45" fill="#facc15" opacity="0.3" />
            <circle cx="0" cy="0" r="30" fill="#fef08a" />
            <text x="0" y="10" fontSize="32" textAnchor="middle">💡</text>
          </g>
        )}

        {/* Character standing in bedroom with goal */}
        <g transform="translate(540, 1100)">
          <MainCharacter mood="thinking" scale={1.3} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
