import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';
import { BrainMascot } from '../../../shared/characters/BrainMascot';

export const Scene3_BrandReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Grand Logo Entrance Pop
  const logoScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 9, stiffness: 130 },
  });

  // Mascot jump bounce
  const mascotBounceY = Math.abs(Math.sin((frame / fps) * Math.PI * 2.5)) * -30;

  // Orbiting/Floating Topic Tags
  const tag1Pop = spring({ frame: frame - 40, fps, config: { damping: 11, stiffness: 140 } });
  const tag2Pop = spring({ frame: frame - 65, fps, config: { damping: 11, stiffness: 140 } });
  const tag3Pop = spring({ frame: frame - 90, fps, config: { damping: 11, stiffness: 140 } });

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
          fontFamily: '"Plus Jakarta Sans", "Nunito", sans-serif',
        }}
      >
        <defs>
          <linearGradient id="brandGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          <linearGradient id="badgeDarkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>

        {/* 🌟 GRAND BRAND LOGO BANNER (Center-Top) */}
        <g transform={`translate(540, 410) scale(${Math.max(0, logoScale)})`}>
          {/* Glowing Aura */}
          <rect
            x="-440"
            y="-100"
            width="880"
            height="200"
            rx="40"
            fill="#6366f1"
            opacity="0.3"
            filter="blur(16px)"
          />
          {/* Main Card Container */}
          <rect
            x="-420"
            y="-90"
            width="840"
            height="180"
            rx="36"
            fill="url(#badgeDarkGrad)"
            stroke="url(#brandGoldGrad)"
            strokeWidth="8"
          />

          {/* Subtitle Pill */}
          <rect x="-180" y="-125" width="360" height="50" rx="25" fill="#facc15" />
          <text x="0" y="-92" fill="#000000" fontSize="22" fontWeight="900" textAnchor="middle" letterSpacing="2">
            ✨ SELAMAT DATANG DI ✨
          </text>

          {/* Main Title: TIBA-TIBA PAHAM */}
          <text
            x="0"
            y="22"
            fill="url(#brandGoldGrad)"
            fontSize="62"
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="2.5"
            style={{ textShadow: '0 6px 18px rgba(0,0,0,0.6)' }}
          >
            TIBA-TIBA PAHAM 💡
          </text>

          {/* Slogan */}
          <text x="0" y="62" fill="#e0e7ff" fontSize="24" fontWeight="800" textAnchor="middle">
            Sains & Perilaku Sehari-hari Jadi Simpel!
          </text>
        </g>

        {/* 🏷️ FLOATING TOPIC TAGS (Showcasing the broad umbrella scope) */}
        {frame > 40 && (
          <g transform={`translate(220, 610) scale(${Math.max(0, tag1Pop)})`}>
            <rect x="-160" y="-30" width="320" height="60" rx="30" fill="#3b82f6" stroke="#ffffff" strokeWidth="3" />
            <text x="0" y="10" fill="#ffffff" fontSize="24" fontWeight="900" textAnchor="middle">
              🧠 Misteri Otak
            </text>
          </g>
        )}

        {frame > 65 && (
          <g transform={`translate(540, 680) scale(${Math.max(0, tag2Pop)})`}>
            <rect x="-160" y="-30" width="320" height="60" rx="30" fill="#10b981" stroke="#ffffff" strokeWidth="3" />
            <text x="0" y="10" fill="#ffffff" fontSize="24" fontWeight="900" textAnchor="middle">
              🧬 Biologi Tubuh
            </text>
          </g>
        )}

        {frame > 90 && (
          <g transform={`translate(860, 610) scale(${Math.max(0, tag3Pop)})`}>
            <rect x="-160" y="-30" width="320" height="60" rx="30" fill="#f43f5e" stroke="#ffffff" strokeWidth="3" />
            <text x="0" y="10" fill="#ffffff" fontSize="24" fontWeight="900" textAnchor="middle">
              ✨ Fenomena Unik
            </text>
          </g>
        )}

        {/* 🧑 DUO: Character & Brain Mascot side-by-side! */}
        {/* Main Character */}
        <g transform="translate(420, 1140)">
          <MainCharacter mood="happy" scale={1.35} />
        </g>

        {/* Brain Mascot Bouncing on the Right */}
        <g transform={`translate(740, ${1040 + mascotBounceY}) scale(1.15)`}>
          <BrainMascot state="cheering" scale={1.2} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
