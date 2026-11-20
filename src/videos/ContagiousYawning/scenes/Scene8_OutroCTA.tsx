import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';
import { BrainMascot } from '../../../shared/characters/BrainMascot';

export const Scene8_OutroCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardPop = spring({
    frame: frame - 4,
    fps,
    config: { damping: 11, stiffness: 130 },
  });

  const btnPop = spring({
    frame: frame - 10,
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
          <linearGradient id="followGrad8" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <filter id="ctaGlow8" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. TOP INTERACTIVE POLL QUESTION CARD */}
        <g transform={`translate(540, 260) scale(${Math.max(0, cardPop)})`}>
          <rect
            x="-380"
            y="-65"
            width="760"
            height="130"
            rx="32"
            fill="rgba(15, 23, 42, 0.9)"
            stroke="#eab308"
            strokeWidth="3.5"
            filter="drop-shadow(0px 10px 30px rgba(0,0,0,0.5))"
          />
          <text
            x="0"
            y="-10"
            fill="#ffffff"
            fontSize="30"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
          >
            Jujur, kamu udah nguap berapa kali? 👇
          </text>
          <text
            x="0"
            y="30"
            fill="#facc15"
            fontSize="22"
            fontWeight="800"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', sans-serif"
          >
            A. 1 - 2 kali 🥱 | B. Berkali-kali! 😭 | C. Kebal 🛡️
          </text>
        </g>

        {/* 2. VIBRANT FOLLOW BUTTON PILL (Prominent at y=400) */}
        <g transform={`translate(540, 400) scale(${Math.max(0, btnPop) * btnPulse})`}>
          <rect
            x="-290"
            y="-38"
            width="580"
            height="76"
            rx="38"
            fill="url(#followGrad8)"
            stroke="#ffffff"
            strokeWidth="3.5"
            filter="url(#ctaGlow8)"
          />
          <text
            x="0"
            y="12"
            fill="#ffffff"
            fontSize="32"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
            letterSpacing="2"
          >
            🔔 FOLLOW @TibaTibaPaham
          </text>
        </g>

        {/* 3. CHARACTERS: MainCharacter & BrainMascot standing proudly together */}
        {/* Main Character */}
        <g transform="translate(360, 1080)">
          <MainCharacter
            mood="happy"
            holdingItem="none"
            scale={1.55}
          />
        </g>

        {/* Brain Mascot (Right beside character) */}
        <g transform="translate(730, 960)">
          <BrainMascot
            mood="waving"
            scale={1.25}
            glasses={true}
          />
        </g>

        {/* Floating social heart particles */}
        {[
          { x: 200, y: 720, char: '❤️' },
          { x: 880, y: 740, char: '💬' },
          { x: 540, y: 550, char: '✨' },
        ].map((item, idx) => (
          <text
            key={idx}
            x={item.x}
            y={item.y + Math.sin(frame * 0.2 + idx) * 10}
            fontSize="38"
            textAnchor="middle"
          >
            {item.char}
          </text>
        ))}
      </svg>
    </AbsoluteFill>
  );
};
