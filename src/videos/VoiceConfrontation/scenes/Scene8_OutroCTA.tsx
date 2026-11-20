import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';
import { BrainMascot } from '../../../shared/characters/BrainMascot';

export const Scene8_OutroCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardPop = spring({
    frame: frame - 6,
    fps,
    config: { damping: 11, stiffness: 130 },
  });

  const btnPop = spring({
    frame: frame - 12,
    fps,
    config: { damping: 11, stiffness: 130 },
  });

  const btnPulse = 1 + Math.sin(frame * 0.15) * 0.03;

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
          fontFamily: "'Fredoka', 'Plus Jakarta Sans', sans-serif",
        }}
      >
        <defs>
          <linearGradient id="followGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <filter id="ctaGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* WhatsApp Share Card at Top */}
        <g transform={`translate(540, 230) scale(${Math.max(0, cardPop)})`}>
          <rect
            x="-330"
            y="-44"
            width="660"
            height="88"
            rx="30"
            fill="#064e3b"
            stroke="#25d366"
            strokeWidth="3.5"
            filter="drop-shadow(0px 10px 24px rgba(37, 211, 102, 0.35))"
          />
          <text
            x="0"
            y="14"
            fill="#dcfce7"
            fontSize="28"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
          >
            📤 Kirim Video Ini ke Temanmu!
          </text>
        </g>

        {/* Big Follow Button (Positioned at y=370, right below share card) */}
        <g transform={`translate(540, 370) scale(${Math.max(0, btnPop) * btnPulse})`}>
          <rect
            x="-330"
            y="-46"
            width="660"
            height="92"
            rx="46"
            fill="url(#followGrad)"
            stroke="#ffffff"
            strokeWidth="3.5"
            filter="url(#ctaGlow)"
          />
          <text
            x="0"
            y="14"
            fill="#ffffff"
            fontSize="30"
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="'Fredoka', sans-serif"
          >
            🔔 FOLLOW @TibaTibaPaham
          </text>
        </g>

        {/* Dynamic Duo: Main Character & Brain Mascot in center */}
        <g transform="translate(360, 1040)">
          <MainCharacter
            mood="happy"
            scale={1.58}
          />
        </g>

        <g transform="translate(790, 880)">
          <BrainMascot
            mood="waving"
            scale={1.30}
          />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
