import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CozyBedroomBackground } from '../../../shared/environments/CozyBedroomBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene1_PsychologicalTrigger: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stampPop = spring({
    frame: frame - 4,
    fps,
    config: { damping: 11, stiffness: 140 },
  });

  const wordPop = spring({
    frame: frame - 8,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  const bubblePop = spring({
    frame: frame - 14,
    fps,
    config: { damping: 11, stiffness: 130 },
  });

  // Pulsating ripple vibration
  const ripplePulse = 1 + Math.sin(frame * 0.25) * 0.05;

  return (
    <AbsoluteFill>
      <CozyBedroomBackground hideDesk={false} showNightstand={false} />

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
          <filter id="neonYawn" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="yawnWordGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>

        {/* 1. TOP HEADER STAMP: Uji Sugesti Otak */}
        <g transform={`translate(540, 230) rotate(-1.5) scale(${Math.max(0, stampPop)})`}>
          <rect
            x="-290"
            y="-38"
            width="580"
            height="76"
            rx="26"
            fill="#0f172a"
            stroke="#f59e0b"
            strokeWidth="4"
            filter="drop-shadow(0px 8px 24px rgba(245, 158, 11, 0.45))"
          />
          <text
            x="0"
            y="12"
            fill="#fef08a"
            fontSize="30"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
            letterSpacing="1"
          >
            ⚡ UJI SUGESTI PSIKOLOGIS!
          </text>
        </g>

        {/* 2. GIANT SUGGESTION WORD TRIGGER: "MENGUAP" */}
        <g transform={`translate(540, 390) scale(${Math.max(0, wordPop) * ripplePulse})`}>
          {/* Glowing Aura Card */}
          <rect
            x="-360"
            y="-65"
            width="720"
            height="130"
            rx="32"
            fill="rgba(15, 23, 42, 0.88)"
            stroke="#eab308"
            strokeWidth="4.5"
            filter="url(#neonYawn)"
          />
          <text
            x="0"
            y="20"
            fill="url(#yawnWordGrad)"
            fontSize="74"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
            letterSpacing="4"
          >
            "MENGUAP!" 🥱
          </text>

          {/* Radiating Yawning Hypnotic Waves */}
          {[1, 2, 3].map((rIdx) => {
            const waveScale = 1 + (((frame * 3 + rIdx * 25) % 80) / 80) * 0.45;
            const waveOpacity = 1 - (((frame * 3 + rIdx * 25) % 80) / 80);
            return (
              <rect
                key={rIdx}
                x="-360"
                y="-65"
                width="720"
                height="130"
                rx="32"
                fill="none"
                stroke="#facc15"
                strokeWidth="3"
                opacity={waveOpacity * 0.6}
                transform={`scale(${waveScale})`}
                transform-origin="center"
              />
            );
          })}
        </g>

        {/* 3. RELATABLE SPEECH BUBBLE */}
        <g transform={`translate(740, 600) scale(${Math.max(0, bubblePop)})`}>
          <rect
            x="-210"
            y="-46"
            width="420"
            height="92"
            rx="24"
            fill="#1e293b"
            stroke="#38bdf8"
            strokeWidth="3.5"
            filter="drop-shadow(0px 8px 20px rgba(0,0,0,0.4))"
          />
          <text
            x="0"
            y="-8"
            fill="#f8fafc"
            fontSize="22"
            fontWeight="800"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', sans-serif"
          >
            "Baru baca teksnya aja..."
          </text>
          <text
            x="0"
            y="24"
            fill="#38bdf8"
            fontSize="22"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
          >
            Rahang udah gatal mau kebuka?! 😭
          </text>
          {/* Bubble Pointer Tail */}
          <polygon points="-120,46 -90,46 -150,72" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
        </g>

        {/* 4. MAIN CHARACTER FIGHTING A YAWN */}
        <g transform="translate(430, 1070)">
          <MainCharacter
            mood="confused"
            scale={1.6}
            sweatDrop={true}
          />

          {/* Watery Yawn Tears at Eyes */}
          <circle
            cx="48"
            cy="-115"
            r={5 + Math.sin(frame * 0.3) * 2}
            fill="#38bdf8"
            filter="url(#neonYawn)"
          />
          <circle
            cx="-48"
            cy="-115"
            r={5 + Math.sin(frame * 0.3) * 2}
            fill="#38bdf8"
            filter="url(#neonYawn)"
          />

          {/* Floating Zzz / Yawn Ripple Particles */}
          {['Z', 'z', 'z', '🥱'].map((item, idx) => {
            const floatOffset = ((frame * 2.5 + idx * 30) % 120);
            return (
              <text
                key={idx}
                x={80 + idx * 25}
                y={-140 - floatOffset}
                fill="#fde047"
                fontSize={24 + idx * 4}
                fontWeight="900"
                fontFamily="'Fredoka', sans-serif"
                opacity={1 - floatOffset / 120}
              >
                {item}
              </text>
            );
          })}
        </g>
      </svg>
    </AbsoluteFill>
  );
};
