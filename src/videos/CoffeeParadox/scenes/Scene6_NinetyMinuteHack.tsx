import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene6_NinetyMinuteHack: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Sun rays rotation
  const sunRotation = frame * 1.5;

  // Hack badge pop
  const badgePop = spring({
    frame: frame - 6,
    fps,
    config: { damping: 9, stiffness: 130 },
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
          fontFamily: "'Plus Jakarta Sans', 'Fredoka', sans-serif",
        }}
      >
        {/* Celebration Sunburst Background Rays */}
        <g transform={`translate(540, 720) rotate(${sunRotation})`} opacity="0.25">
          <line x1="-700" y1="-700" x2="700" y2="700" stroke="#34d399" strokeWidth="18" />
          <line x1="700" y1="-700" x2="-700" y2="700" stroke="#34d399" strokeWidth="18" />
          <line x1="0" y1="-800" x2="0" y2="800" stroke="#34d399" strokeWidth="18" />
          <line x1="-800" y1="0" x2="800" y2="0" stroke="#34d399" strokeWidth="18" />
        </g>

        {/* 💡 THE 90-MINUTE RULE GOLDEN HACK BADGE (Center-Top: Y=260) */}
        <g transform={`translate(540, 260) scale(${Math.max(0, badgePop)})`}>
          {/* Glowing Aura */}
          <rect
            x="-350"
            y="-55"
            width="700"
            height="110"
            rx="55"
            fill="#10b981"
            opacity="0.35"
            filter="blur(14px)"
          />
          {/* Main Card */}
          <rect
            x="-340"
            y="-50"
            width="680"
            height="100"
            rx="50"
            fill="#064e3b"
            stroke="#34d399"
            strokeWidth="5"
          />
          <text
            x="0"
            y="14"
            fill="#a7f3d0"
            fontSize="36"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
          >
            💡 SOLUSI: ATURAN 90 MENIT!
          </text>
        </g>

        {/* ⏱️ 3-Step Timeline Infographic (Y=440 | Expanded 860px width x 130px height) */}
        <g transform="translate(540, 440)">
          <rect x="-430" y="-65" width="860" height="130" rx="36" fill="#0f172a" stroke="#34d399" strokeWidth="4.5" />

          {/* Step 1: Wake up */}
          <g transform="translate(-275, 0)">
            <rect x="-105" y="-48" width="210" height="96" rx="26" fill="#1e293b" stroke="#facc15" strokeWidth="3" />
            <text x="0" y="-10" fontSize="34" textAnchor="middle">🌅</text>
            <text x="0" y="24" fill="#fde047" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
              1. Bangun Tidur
            </text>
          </g>

          {/* Arrow 1 */}
          <text x="-155" y="10" fill="#34d399" fontSize="32" fontWeight="900" textAnchor="middle">➔</text>

          {/* Step 2: 90 Min Wait (Hero highlight step) */}
          <g transform="translate(0, 0)">
            <rect x="-120" y="-50" width="240" height="100" rx="28" fill="#047857" stroke="#34d399" strokeWidth="4" />
            <text x="0" y="-12" fill="#a7f3d0" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
              ⏳ TUNGGU
            </text>
            <text x="0" y="24" fill="#fde047" fontSize="26" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
              60–90 MENIT
            </text>
          </g>

          {/* Arrow 2 */}
          <text x="155" y="10" fill="#34d399" fontSize="32" fontWeight="900" textAnchor="middle">➔</text>

          {/* Step 3: Coffee */}
          <g transform="translate(275, 0)">
            <rect x="-105" y="-48" width="210" height="96" rx="26" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
            <text x="0" y="-10" fontSize="34" textAnchor="middle">☕</text>
            <text x="0" y="24" fill="#38bdf8" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
              3. Ngopi Melek!
            </text>
          </g>
        </g>

        {/* Fresh Morning Sparkles around Character */}
        <g fill="#facc15" opacity="0.85">
          <text x="240" y="740" fontSize="36">✨</text>
          <text x="820" y="740" fontSize="36">✨</text>
          <text x="280" y="900" fontSize="28">⭐</text>
          <text x="780" y="900" fontSize="28">⭐</text>
        </g>

        {/* Refreshed Hero Character holding morning coffee with smile (1.6x scale) */}
        <g transform="translate(540, 960)">
          <MainCharacter mood="happy" holdingItem="coffee" scale={1.6} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
