import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene2_PetContagion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stampPop = spring({
    frame: frame - 4,
    fps,
    config: { damping: 11, stiffness: 140 },
  });

  const petPop = spring({
    frame: frame - 10,
    fps,
    config: { damping: 11, stiffness: 130 },
  });

  const waveProgress = (frame * 4) % 100;

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
        <defs>
          <filter id="petGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="sofaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#312e81" />
            <stop offset="100%" stopColor="#1e1b4b" />
          </linearGradient>
          <linearGradient id="dogFur" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>

        {/* 1. TOP HEADER STAMP: Menular Lintas Spesies */}
        <g transform={`translate(540, 230) rotate(1.5) scale(${Math.max(0, stampPop)})`}>
          <rect
            x="-310"
            y="-38"
            width="620"
            height="76"
            rx="26"
            fill="#0f172a"
            stroke="#ec4899"
            strokeWidth="4"
            filter="drop-shadow(0px 8px 24px rgba(236, 72, 153, 0.4))"
          />
          <text
            x="0"
            y="12"
            fill="#fbcfe8"
            fontSize="28"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
            letterSpacing="1"
          >
            🐕 MENULAR LINTAS SPESIES!
          </text>
        </g>

        {/* 2. COZY LIVING ROOM SOFA CONTAINER (Width 880px, centered at Y=850 for perfect vertical balance) */}
        <g transform="translate(540, 850)">
          {/* Sofa Backrest */}
          <rect x="-440" y="-220" width="880" height="340" rx="40" fill="url(#sofaGrad)" stroke="#4338ca" strokeWidth="4" />
          {/* Sofa Cushion */}
          <rect x="-450" y="20" width="900" height="150" rx="30" fill="#3730a3" stroke="#4f46e5" strokeWidth="3" />
          {/* Sofa Pillows */}
          <rect x="-420" y="-80" width="140" height="140" rx="28" fill="#ec4899" opacity="0.8" transform="rotate(-15 -350 -10)" />
          <rect x="280" y="-80" width="140" height="140" rx="28" fill="#06b6d4" opacity="0.8" transform="rotate(15 350 -10)" />

          {/* HUMAN CHARACTER YAWNING (Left on Sofa) */}
          <g transform="translate(-180, 20)">
            <MainCharacter
              mood="sleepy"
              scale={1.5}
            />
            {/* Expressive yawning open mouth directly on character's face (y = -258) */}
            <ellipse cx="0" cy="-258" rx="16" ry="22" fill="#881337" stroke="#e11d48" strokeWidth="3" />
            <path d="M -8 -253 C -4 -243 4 -243 8 -253" fill="#fb7185" />
          </g>

          {/* CUTE PET DOG YAWNING SYNCHRONIZED (Right on Sofa) */}
          <g transform={`translate(220, 40) scale(${Math.max(0, petPop) * 1.35})`}>
            {/* Dog Body */}
            <ellipse cx="0" cy="20" rx="75" ry="60" fill="url(#dogFur)" stroke="#b45309" strokeWidth="4" />
            {/* Dog Legs & Paws */}
            <ellipse cx="-40" cy="70" rx="20" ry="14" fill="#fbbf24" stroke="#b45309" strokeWidth="3" />
            <ellipse cx="40" cy="70" rx="20" ry="14" fill="#fbbf24" stroke="#b45309" strokeWidth="3" />
            {/* Tail Wagging */}
            <path
              d={`M 70 20 Q ${95 + Math.sin(frame * 0.4) * 12} 0 105 -15`}
              fill="none"
              stroke="#d97706"
              strokeWidth="10"
              strokeLinecap="round"
            />
            {/* Dog Head */}
            <circle cx="0" cy="-45" r="55" fill="url(#dogFur)" stroke="#b45309" strokeWidth="4" />
            {/* Floppy Dog Ears */}
            <ellipse cx="-52" cy="-35" rx="18" ry="36" fill="#b45309" transform="rotate(-18 -52 -35)" />
            <ellipse cx="52" cy="-35" rx="18" ry="36" fill="#b45309" transform="rotate(18 52 -35)" />
            {/* Closed Sleepy Squinting Eyes */}
            <path d="M -30 -58 Q -20 -66 -10 -58" fill="none" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
            <path d="M 10 -58 Q 20 -66 30 -58" fill="none" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
            {/* Cute Dog Nose */}
            <ellipse cx="0" cy="-44" rx="14" ry="10" fill="#1e293b" />
            {/* Wide Open Yawning Dog Mouth & Pink Tongue */}
            <ellipse cx="0" cy="-20" rx="22" ry="28" fill="#881337" stroke="#b45309" strokeWidth="3" />
            <path d="M -12 -12 C -6 6 6 6 12 -12" fill="#fb7185" />
            <path d="M 0 -10 L 0 6" stroke="#f43f5e" strokeWidth="2" />
          </g>

          {/* 3. CONTAGIOUS YAWN RIPPLE BEAM (Human Mouth [-180, -258] ➔ Dog Mouth [220, 15]) */}
          <g>
            <path
              d="M -180 -258 C -40 -340 120 -150 220 15"
              fill="none"
              stroke="#f472b6"
              strokeWidth="6"
              strokeDasharray="10 10"
              strokeDashoffset={-frame * 6}
              filter="url(#petGlow)"
            />
            {/* Floating Wave Rings along trajectory */}
            {[0.25, 0.55, 0.85].map((ratio, idx) => {
              const t = ratio;
              const p0 = { x: -180, y: -258 };
              const p1 = { x: -40, y: -340 };
              const p2 = { x: 120, y: -150 };
              const p3 = { x: 220, y: 15 };
              const cx = Math.pow(1 - t, 3) * p0.x + 3 * Math.pow(1 - t, 2) * t * p1.x + 3 * (1 - t) * Math.pow(t, 2) * p2.x + Math.pow(t, 3) * p3.x;
              const cy = Math.pow(1 - t, 3) * p0.y + 3 * Math.pow(1 - t, 2) * t * p1.y + 3 * (1 - t) * Math.pow(t, 2) * p2.y + Math.pow(t, 3) * p3.y;
              return (
                <circle
                  key={idx}
                  cx={cx}
                  cy={cy}
                  r={14 + Math.sin(frame * 0.3 + idx) * 4}
                  fill="none"
                  stroke="#fb7185"
                  strokeWidth="3"
                  opacity={0.85}
                />
              );
            })}

            {/* Floating label pill cleanly above the wave trajectory */}
            <g transform="translate(10, -320)">
              <rect x="-160" y="-22" width="320" height="44" rx="22" fill="rgba(15, 23, 42, 0.92)" stroke="#f472b6" strokeWidth="2.5" />
              <text x="0" y="8" fill="#fbcfe8" fontSize="20" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
                🌊 Efek Tular Lintas Spesies
              </text>
            </g>
          </g>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
