import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';
import { BrainMascot } from '../../../shared/characters/BrainMascot';

export const Scene7_OutroCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Bulb pop
  const bulbPop = spring({
    frame: frame - 4,
    fps,
    config: { damping: 9, stiffness: 140 },
  });

  // CTA button pop
  const ctaPop = spring({
    frame: frame - 16,
    fps,
    config: { damping: 9, stiffness: 130 },
  });

  // Bell pulse animation
  const bellWiggle = Math.sin((frame / fps) * Math.PI * 6) * 14;

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
          fontFamily: "'Plus Jakarta Sans', 'Fredoka', sans-serif",
        }}
      >
        <defs>
          <linearGradient id="ep2CtaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>

        {/* 💡 Giant Eureka Lightbulb (Y=195) */}
        <g transform={`translate(540, 195) scale(${Math.max(0, bulbPop)})`}>
          <circle cx="0" cy="0" r="100" fill="#facc15" opacity="0.25" />
          <circle cx="0" cy="0" r="68" fill="#facc15" />
          <text x="0" y="22" fontSize="76" textAnchor="middle">
            💡
          </text>
        </g>

        {/* 🔔 ANIMATED FOLLOW CTA BUTTON (Y=340 | Expanded 640px width) */}
        {frame > 14 && (
          <g transform={`translate(540, 340) scale(${Math.max(0, ctaPop)})`}>
            {/* Pulsing Shadow */}
            <rect
              x="-330"
              y="-52"
              width="660"
              height="104"
              rx="52"
              fill="#f59e0b"
              opacity="0.38"
              filter="blur(16px)"
            />
            {/* Button Body */}
            <rect
              x="-310"
              y="-48"
              width="620"
              height="96"
              rx="48"
              fill="url(#ep2CtaGrad)"
              stroke="#ffffff"
              strokeWidth="4.5"
            />
            {/* Bell Icon with wiggle */}
            <g transform={`translate(-200, 6) rotate(${bellWiggle})`}>
              <text x="0" y="10" fontSize="44" textAnchor="middle">
                🔔
              </text>
            </g>
            <text
              x="25"
              y="15"
              fill="#ffffff"
              fontSize="36"
              fontWeight="900"
              textAnchor="middle"
              letterSpacing="1.5"
              fontFamily="'Fredoka', sans-serif"
            >
              FOLLOW SEKARANG!
            </text>
          </g>
        )}

        {/* Tagline Badge under CTA (Enlarged for clear mobile readability) */}
        {frame > 20 && (
          <g transform="translate(540, 430)">
            <rect x="-225" y="-23" width="450" height="46" rx="23" fill="#0f172a" stroke="#facc15" strokeWidth="3" />
            <text x="0" y="8" fill="#fef08a" fontSize="23" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
              ✨ BIAR TIBA-TIBA MAKIN PAHAM!
            </text>
          </g>
        )}

        {/* Celebratory Confetti & Stars */}
        <g opacity="0.8">
          <text x="180" y="680" fontSize="32">🎉</text>
          <text x="900" y="680" fontSize="32">✨</text>
          <text x="140" y="860" fontSize="26">⭐</text>
          <text x="940" y="860" fontSize="26">🌟</text>
          <circle cx="240" cy="780" r="8" fill="#f472b6" />
          <circle cx="840" cy="780" r="8" fill="#38bdf8" />
        </g>

        {/* Dynamic Duo: Hero Character + Cheering Brain Mascot together (Prominent Framing) */}
        <g transform="translate(360, 950)">
          <MainCharacter mood="eureka" holdingItem="coffee" scale={1.55} />
        </g>

        {/* Cheering Brain Mascot standing right beside character */}
        <g transform="translate(720, 910)">
          <BrainMascot mood="waving" scale={1.45} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
