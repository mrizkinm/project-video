import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Character stepping back
  const walkBackX = interpolate(frame, [0, 50], [90, -40], {
    extrapolateRight: 'clamp',
  });

  // Radiant bulb pop
  const bulbScale = spring({
    frame: frame - 25,
    fps,
    config: { damping: 9, stiffness: 140 },
  });

  const bulbGlow = interpolate(
    Math.sin((frame / fps) * Math.PI * 4),
    [-1, 1],
    [0.25, 0.6]
  );

  return (
    <AbsoluteFill>
      <ParticleBackground theme="amber" />

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
        {/* Speed lines */}
        <line x1="900" y1="850" x2="650" y2="850" stroke="#38bdf8" strokeWidth="12" strokeLinecap="round" opacity="0.6" />
        <line x1="940" y1="960" x2="730" y2="960" stroke="#38bdf8" strokeWidth="12" strokeLinecap="round" opacity="0.4" />

        {/* Master Character stepping backward in eureka mood */}
        <g transform={`translate(${540 + walkBackX}, 1040)`}>
          <MainCharacter mood="eureka" scale={1.35} />
        </g>

        {/* Floating Radiant Lightbulb */}
        {frame > 20 && (
          <g
            transform={`translate(${540 + walkBackX}, 560) scale(${Math.max(0, bulbScale)})`}
          >
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
        )}
      </svg>
    </AbsoluteFill>
  );
};
