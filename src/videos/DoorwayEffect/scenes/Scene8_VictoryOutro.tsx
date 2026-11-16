import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene8_VictoryOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Rotation of celebratory sunburst (smooth across 160 frames)
  const sunRotation = interpolate(frame, [0, 160], [0, 96]);

  // Big glowing Eureka bulb
  const bulbScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 9, stiffness: 130 },
  });

  const bulbGlow = interpolate(
    Math.sin((frame / fps) * Math.PI * 4),
    [-1, 1],
    [0.3, 0.65]
  );

  return (
    <AbsoluteFill>
      <ParticleBackground theme="emerald" />

      <svg
        viewBox="0 0 1080 1920"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 10 }}
      >
        {/* Celebration Sunburst Rays */}
        <g transform={`translate(540, 750) rotate(${sunRotation})`} opacity="0.3">
          <line x1="-600" y1="-600" x2="600" y2="600" stroke="#34d399" strokeWidth="16" />
          <line x1="600" y1="-600" x2="-600" y2="600" stroke="#34d399" strokeWidth="16" />
          <line x1="0" y1="-700" x2="0" y2="700" stroke="#34d399" strokeWidth="16" />
          <line x1="-700" y1="0" x2="700" y2="0" stroke="#34d399" strokeWidth="16" />
        </g>

        {/* Radiant Eureka Lightbulb */}
        <g transform={`translate(540, 500) scale(${Math.max(0, bulbScale)})`}>
          <circle cx="0" cy="0" r="160" fill="#facc15" opacity={bulbGlow} />
          <path
            d="M -55 -35 C -90 -100 90 -100 55 -35 C 45 0 35 35 35 60 L -35 60 C -35 35 -45 0 -55 -35 Z"
            fill="#facc15"
            stroke="#ca8a04"
            strokeWidth="6"
          />
          <rect x="-28" y="66" width="56" height="24" rx="6" fill="#94a3b8" />
          <line x1="0" y1="-130" x2="0" y2="-175" stroke="#facc15" strokeWidth="16" strokeLinecap="round" />
          <line x1="-90" y1="-110" x2="-135" y2="-145" stroke="#facc15" strokeWidth="16" strokeLinecap="round" />
          <line x1="90" y1="-110" x2="135" y2="-145" stroke="#facc15" strokeWidth="16" strokeLinecap="round" />
        </g>

        {/* Character holding item triumphantly */}
        <g transform="translate(540, 1060)">
          <MainCharacter mood="happy" holdingItem="charger" scale={1.35} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
