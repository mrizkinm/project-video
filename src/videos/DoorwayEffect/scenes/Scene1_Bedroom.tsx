import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CozyBedroomBackground } from '../../../shared/environments/CozyBedroomBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene1_Bedroom: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Idea bulb pop
  const bulbScale = spring({
    frame: frame - 12,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  const badgePop = spring({
    frame: frame - 5,
    fps,
    config: { damping: 12, stiffness: 130 },
  });

  return (
    <AbsoluteFill>
      <CozyBedroomBackground />

      <svg
        viewBox="0 0 1080 1920"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          fontFamily: "'Fredoka', 'Plus Jakarta Sans', sans-serif",
        }}
      >
        {/* In-Scene Goal Badge */}
        <g transform={`translate(540, 310) scale(${Math.max(0, badgePop)})`}>
          <rect
            x="-230"
            y="-34"
            width="460"
            height="68"
            rx="34"
            fill="rgba(15, 23, 42, 0.9)"
            stroke="#38bdf8"
            strokeWidth="3.5"
          />
          <text
            x="0"
            y="11"
            fill="#38bdf8"
            fontSize="26"
            fontWeight="800"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="'Fredoka', sans-serif"
          >
            🎯 MISI: AMBIL BARANG
          </text>
        </g>

        {/* Floating Mini Idea Bulb - connected near character head */}
        {frame > 10 && (
          <g transform={`translate(670, 680) scale(${Math.max(0, bulbScale)})`}>
            <circle cx="0" cy="0" r="50" fill="#facc15" opacity="0.3" />
            <circle cx="0" cy="0" r="34" fill="#fef08a" stroke="#facc15" strokeWidth="3" />
            <text x="0" y="11" fontSize="36" textAnchor="middle">💡</text>
          </g>
        )}

        {/* Character standing in bedroom with goal - scale 1.6x for dominant framing */}
        <g transform="translate(540, 960)">
          <MainCharacter mood="thinking" scale={1.6} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
