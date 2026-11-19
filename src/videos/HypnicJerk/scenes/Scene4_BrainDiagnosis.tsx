import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { BrainMascot } from '../../../shared/characters/BrainMascot';

export const Scene4_BrainDiagnosis: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stampPop = spring({
    frame: frame - 20,
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
        {/* Top Header Pill */}
        <g transform="translate(540, 240)">
          <rect
            x="-250"
            y="-35"
            width="500"
            height="70"
            rx="35"
            fill="#312e81"
            stroke="#818cf8"
            strokeWidth="4"
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

        {/* Large Science Diagnostic Facility Container (860px wide) */}
        <g transform="translate(110, 315)">
          <rect
            x="0"
            y="0"
            width="860"
            height="370"
            rx="32"
            fill="rgba(15, 23, 42, 0.88)"
            stroke="#6366f1"
            strokeWidth="5"
          />

          {/* Left Column Card: Otot Rileks Cepat */}
          <g transform="translate(40, 40)">
            <rect
              x="0"
              y="0"
              width="360"
              height="185"
              rx="24"
              fill="#1e1b4b"
              stroke="#818cf8"
              strokeWidth="3"
            />
            <text x="35" y="58" fontSize="40">😴</text>
            <text
              x="92"
              y="60"
              fill="#f8fafc"
              fontSize="24"
              fontWeight="900"
              fontFamily="'Fredoka', sans-serif"
            >
              Otot Rileks Cepat
            </text>
            <rect x="25" y="105" width="310" height="50" rx="20" fill="#f59e0b" opacity="0.2" />
            <text
              x="180"
              y="138"
              fill="#fbbf24"
              fontSize="22"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="'Fredoka', sans-serif"
            >
              Masuk Transisi Tidur
            </text>
          </g>

          {/* Right Column Card: Otak Mengira Bahaya */}
          <g transform="translate(460, 40)">
            <rect
              x="0"
              y="0"
              width="360"
              height="185"
              rx="24"
              fill="#450a0a"
              stroke="#f87171"
              strokeWidth="3"
            />
            <text x="35" y="58" fontSize="40">⚠️</text>
            <text
              x="92"
              y="60"
              fill="#f8fafc"
              fontSize="24"
              fontWeight="900"
              fontFamily="'Fredoka', sans-serif"
            >
              Otak Curiga Jatuh
            </text>
            <rect x="25" y="105" width="310" height="50" rx="20" fill="#ef4444" opacity="0.2" />
            <text
              x="180"
              y="138"
              fill="#f87171"
              fontSize="22"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="'Fredoka', sans-serif"
            >
              Sensor Anjlok Mendadak
            </text>
          </g>

          {/* Comic Reassuring Stamp: 70% MANUSIA PERNAH NGARASA! */}
          {frame > 18 && (
            <g transform={`translate(430, 280) rotate(-4) scale(${Math.max(0, stampPop)})`}>
              <rect
                x="-270"
                y="-42"
                width="540"
                height="84"
                rx="24"
                fill="#dcfce7"
                stroke="#22c55e"
                strokeWidth="5"
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
                ✅ 70% MANUSIA PERNAH ALAMI!
              </text>
            </g>
          )}
        </g>

        {/* Mascot Brain in Center Stage - scale 1.35x */}
        <g transform="translate(540, 940)">
          <BrainMascot mood="thinking" scale={1.35} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
