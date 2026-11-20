import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { BrainMascot } from '../../../shared/characters/BrainMascot';

export const Scene4_BrainDiagnosis: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({
    frame: frame - 4,
    fps,
    config: { damping: 12, stiffness: 130 },
  });

  const stampPop = spring({
    frame: frame - 14,
    fps,
    config: { damping: 11, stiffness: 140 },
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
          fontFamily: "'Fredoka', 'Plus Jakarta Sans', sans-serif",
        }}
      >
        {/* 1. Sleek Top Header Pill */}
        <g transform={`translate(540, 240) scale(${Math.max(0, headerPop)})`}>
          <rect
            x="-250"
            y="-35"
            width="500"
            height="70"
            rx="35"
            fill="#312e81"
            stroke="#818cf8"
            strokeWidth="3.5"
            filter="drop-shadow(0px 8px 20px rgba(99, 102, 241, 0.4))"
          />
          <text
            x="0"
            y="12"
            fill="#ffffff"
            fontSize="28"
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="'Fredoka', sans-serif"
          >
            🔬 DIAGNOSA: HYPNIC JERK
          </text>
        </g>

        {/* 2. Reassuring Stat Stamp (Minimal & High Impact) */}
        {frame > 12 && (
          <g transform={`translate(540, 345) rotate(-2) scale(${Math.max(0, stampPop)})`}>
            <rect
              x="-260"
              y="-38"
              width="520"
              height="76"
              rx="24"
              fill="#dcfce7"
              stroke="#22c55e"
              strokeWidth="4.5"
              filter="drop-shadow(0px 8px 24px rgba(34, 197, 94, 0.45))"
            />
            <text
              x="0"
              y="13"
              fontSize="30"
              fontWeight="900"
              fill="#15803d"
              textAnchor="middle"
              letterSpacing="1"
              fontFamily="'Fredoka', sans-serif"
            >
              ✅ 70% ORANG PERNAH ALAMI!
            </text>
          </g>
        )}

        {/* 3. Friendly Brain Mascot in Center Stage - Dominant & Expressive (Scale 1.45x) */}
        <g transform="translate(540, 920)">
          <BrainMascot mood="happy" scale={1.45} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
