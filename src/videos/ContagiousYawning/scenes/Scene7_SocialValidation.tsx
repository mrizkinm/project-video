import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene7_SocialValidation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stampPop = spring({
    frame: frame - 4,
    fps,
    config: { damping: 11, stiffness: 140 },
  });

  const medalPop = spring({
    frame: frame - 10,
    fps,
    config: { damping: 11, stiffness: 130 },
  });

  const bubbleLeftPop = spring({
    frame: frame - 14,
    fps,
    config: { damping: 11, stiffness: 130 },
  });

  const bubbleRightPop = spring({
    frame: frame - 18,
    fps,
    config: { damping: 11, stiffness: 130 },
  });

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
        <defs>
          <filter id="goldMedalGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="medalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
        </defs>

        {/* 1. TOP HEADER STAMP: Validasi Otak Sehat */}
        <g transform={`translate(540, 230) rotate(-1.5) scale(${Math.max(0, stampPop)})`}>
          <rect
            x="-310"
            y="-38"
            width="620"
            height="76"
            rx="26"
            fill="#0f172a"
            stroke="#facc15"
            strokeWidth="4"
            filter="drop-shadow(0px 8px 24px rgba(250, 204, 21, 0.45))"
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
            🌟 BUKTI ILMIAH: EMPATI SEHAT!
          </text>
        </g>

        {/* 2. CERTIFIED GOLDEN MEDAL (Top Center) */}
        <g transform={`translate(540, 410) scale(${Math.max(0, medalPop)})`}>
          {/* Glowing Aura Ring */}
          <circle cx="0" cy="0" r="100" fill="rgba(250, 204, 21, 0.15)" filter="url(#goldMedalGlow)" />
          {/* Medal Outer Frame */}
          <circle cx="0" cy="0" r="80" fill="url(#medalGrad)" stroke="#ca8a04" strokeWidth="5" />
          <circle cx="0" cy="0" r="68" fill="#0f172a" stroke="#fef08a" strokeWidth="3" />
          {/* Medal Icon & Ribbons */}
          <text x="0" y="16" fill="#facc15" fontSize="48" textAnchor="middle">🏅</text>

          {/* Golden Badge Label */}
          <g transform="translate(0, 95)">
            <rect x="-170" y="-22" width="340" height="44" rx="22" fill="#065f46" stroke="#34d399" strokeWidth="2.5" />
            <text x="0" y="7" fill="#ecfdf5" fontSize="19" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
              OTAK SOSIAL BEKERJA BAIK ✨
            </text>
          </g>
        </g>

        {/* 3. FLOATING POSITIVE VALIDATION BUBBLES */}
        {/* Left Bubble */}
        <g transform={`translate(250, 660) scale(${Math.max(0, bubbleLeftPop)})`}>
          <rect
            x="-180"
            y="-40"
            width="360"
            height="80"
            rx="24"
            fill="#064e3b"
            stroke="#10b981"
            strokeWidth="3"
            filter="drop-shadow(0px 6px 16px rgba(0,0,0,0.4))"
          />
          <text x="0" y="-6" fill="#a7f3d0" fontSize="19" fontWeight="800" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif">
            "Kamu peka banget sama sesama!"
          </text>
          <text x="0" y="20" fill="#ffffff" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
            Ikatan Sosial Kuat 💚
          </text>
        </g>

        {/* Right Bubble */}
        <g transform={`translate(820, 660) scale(${Math.max(0, bubbleRightPop)})`}>
          <rect
            x="-180"
            y="-40"
            width="360"
            height="80"
            rx="24"
            fill="#0f172a"
            stroke="#38bdf8"
            strokeWidth="3"
            filter="drop-shadow(0px 6px 16px rgba(0,0,0,0.4))"
          />
          <text x="0" y="-6" fill="#bae6fd" fontSize="19" fontWeight="800" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif">
            "Neuron cerminmu aktif!"
          </text>
          <text x="0" y="20" fill="#38bdf8" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
            Refleks Alami Manusia 👍
          </text>
        </g>

        {/* 4. PROUD MAIN CHARACTER (Happy & Relieved) */}
        <g transform="translate(540, 1080)">
          <MainCharacter
            mood="happy"
            holdingItem="none"
            scale={1.62}
          />
          {/* Sparkle hearts around character */}
          {[-120, 120].map((sX, i) => (
            <text key={i} x={sX} y={-140} fill="#34d399" fontSize="32">
              💚
            </text>
          ))}
        </g>
      </svg>
    </AbsoluteFill>
  );
};
