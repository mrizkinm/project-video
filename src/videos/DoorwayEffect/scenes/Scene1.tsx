import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Character walk in from left
  const walkX = interpolate(frame, [0, 45], [-240, 0], {
    extrapolateRight: 'clamp',
  });

  // Question mark spring
  const qMarkScale = spring({
    frame: frame - 40,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  return (
    <AbsoluteFill>
      <ParticleBackground theme="indigo" />

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
        <defs>
          <linearGradient id="doorGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Bedroom Door Frame */}
        <g transform="translate(320, 360)">
          {/* Outer Frame */}
          <rect x="0" y="0" width="440" height="920" rx="24" fill="#1e1e38" stroke="#facc15" strokeWidth="12" />
          {/* Light spilling from doorway onto floor */}
          <polygon points="40,880 400,880 580,1220 -120,1220" fill="url(#doorGlow)" />
          {/* Door panel open angle */}
          <polygon points="40,40 180,120 180,840 40,880" fill="#334155" stroke="#64748b" strokeWidth="6" />
          {/* Doorknob */}
          <circle cx="160" cy="480" r="10" fill="#facc15" />
        </g>

        {/* Big Stylized Question Mark */}
        {frame > 35 && (
          <g transform={`translate(540, 580) scale(${Math.max(0, qMarkScale)})`}>
            <circle cx="0" cy="0" r="100" fill="#facc15" opacity="0.25" />
            <text
              x="0"
              y="55"
              fontSize="170"
              fontWeight="900"
              fill="#facc15"
              textAnchor="middle"
              filter="drop-shadow(0 4px 12px rgba(0,0,0,0.5))"
            >
              ?
            </text>
          </g>
        )}

        {/* Consistent Master Character (Clean Center Positioning) */}
        <g transform={`translate(${540 + walkX}, 1040)`}>
          <MainCharacter mood="confused" scale={1.35} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
