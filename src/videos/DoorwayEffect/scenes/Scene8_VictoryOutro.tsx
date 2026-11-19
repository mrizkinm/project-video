import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene8_VictoryOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Rotation of celebratory sunburst (smooth across 160 frames)
  const sunRotation = interpolate(frame, [0, 160], [0, 96]);

  // Floating bob and dynamic tilt for the eureka lightbulb
  const floatY = Math.sin((frame / fps) * Math.PI * 2.5) * 8;
  const floatRotate = Math.sin((frame / fps) * Math.PI * 1.8) * 5;

  // Big glowing Eureka bulb spring
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
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          fontFamily: "'Fredoka', 'Plus Jakarta Sans', sans-serif",
        }}
      >
        {/* Celebration Sunburst Rays */}
        <g transform={`translate(540, 750) rotate(${sunRotation})`} opacity="0.3">
          <line x1="-600" y1="-600" x2="600" y2="600" stroke="#34d399" strokeWidth="16" />
          <line x1="600" y1="-600" x2="-600" y2="600" stroke="#34d399" strokeWidth="16" />
          <line x1="0" y1="-700" x2="0" y2="700" stroke="#34d399" strokeWidth="16" />
          <line x1="-700" y1="0" x2="700" y2="0" stroke="#34d399" strokeWidth="16" />
        </g>

        {/* Celebratory Victory Badge - centered comfortably under watermark */}
        <g transform="translate(540, 160)">
          <rect
            x="-260"
            y="-34"
            width="520"
            height="68"
            rx="34"
            fill="rgba(15, 23, 42, 0.9)"
            stroke="#10b981"
            strokeWidth="3.5"
          />
          <text
            x="0"
            y="11"
            fill="#34d399"
            fontSize="32"
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="'Fredoka', sans-serif"
          >
            🎉 INGATAN RELOADED! 100%
          </text>
        </g>

        {/* Character holding item triumphantly - scale 1.6x, shifted up to Y=945 so shoes stay clear of caption */}
        <g transform="translate(540, 945)">
          <MainCharacter mood="happy" holdingItem="charger" scale={1.6} />
        </g>

        {/* Radiant Eureka Lightbulb - Truly Floating in Mid-Air (Centered with ~50px space above head & below badge) */}
        {frame > 8 && (
          <g transform={`translate(540, ${318 + floatY}) rotate(${floatRotate + 4}) scale(${Math.max(0, bulbScale)})`}>
            {/* Ambient Aura Glow */}
            <circle cx="0" cy="0" r="88" fill="#facc15" opacity={bulbGlow * 0.45} />
            <circle cx="0" cy="0" r="64" fill="#fef08a" opacity={bulbGlow * 0.75} />

            {/* Sparkles Floating Around the Bulb */}
            <g opacity={bulbGlow * 1.2}>
              <text x="-70" y="-24" fontSize="24">✨</text>
              <text x="60" y="-14" fontSize="26">✨</text>
              <text x="-52" y="38" fontSize="20">✨</text>
              <text x="50" y="34" fontSize="22">✨</text>
            </g>

            {/* Glass Bulb Body */}
            <path
              d="M -36 -20 C -58 -64 58 -64 36 -20 C 28 2 22 22 22 38 L -22 38 C -22 22 -28 2 -36 -20 Z"
              fill="#facc15"
              stroke="#ca8a04"
              strokeWidth="5"
            />

            {/* Glass Inner Core Filament / Highlight */}
            <path
              d="M -15 -10 Q -20 -36 0 -44 Q 20 -36 15 -10"
              fill="none"
              stroke="#fef9c3"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <line x1="-7" y1="-6" x2="-7" y2="26" stroke="#ca8a04" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="7" y1="-6" x2="7" y2="26" stroke="#ca8a04" strokeWidth="2.8" strokeLinecap="round" />

            {/* Silver Screw Base / Socket (Fully Visible, clearly disconnected from head) */}
            <rect x="-17" y="40" width="34" height="8" rx="3" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
            <rect x="-15" y="50" width="30" height="7" rx="3" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
            <path d="M -9 59 L 9 59 L 0 66 Z" fill="#475569" />

            {/* Radiant Eureka Beams (Balanced length: ~45px clearance under the badge) */}
            <line x1="0" y1="-65" x2="0" y2="-82" stroke="#facc15" strokeWidth="7" strokeLinecap="round" />
            <line x1="-50" y1="-52" x2="-66" y2="-68" stroke="#facc15" strokeWidth="7" strokeLinecap="round" />
            <line x1="50" y1="-52" x2="66" y2="-68" stroke="#facc15" strokeWidth="7" strokeLinecap="round" />
          </g>
        )}
      </svg>
    </AbsoluteFill>
  );
};
