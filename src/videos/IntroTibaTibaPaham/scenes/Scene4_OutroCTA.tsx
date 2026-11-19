import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene4_OutroCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Sunburst celebration rotation
  const sunRotation = interpolate(frame, [0, 215], [0, 120]);

  // Eureka lightbulb bounce
  const bulbPop = spring({
    frame: frame - 10,
    fps,
    config: { damping: 9, stiffness: 140 },
  });

  // Follow Button Pop
  const ctaPop = spring({
    frame: frame - 30,
    fps,
    config: { damping: 8, stiffness: 130 },
  });

  // Bell pulse animation
  const bellWiggle = Math.sin((frame / fps) * Math.PI * 6) * 14;

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
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        <defs>
          <linearGradient id="ctaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>

        {/* ☀️ Celebration Sunburst Rays */}
        <g transform={`translate(540, 720) rotate(${sunRotation})`} opacity="0.3">
          <line x1="-700" y1="-700" x2="700" y2="700" stroke="#34d399" strokeWidth="20" />
          <line x1="700" y1="-700" x2="-700" y2="700" stroke="#34d399" strokeWidth="20" />
          <line x1="0" y1="-800" x2="0" y2="800" stroke="#34d399" strokeWidth="20" />
          <line x1="-800" y1="0" x2="800" y2="0" stroke="#34d399" strokeWidth="20" />
        </g>

        {/* 💡 Giant Eureka Lightbulb */}
        <g transform={`translate(540, 280) scale(${Math.max(0, bulbPop)})`}>
          <circle cx="0" cy="0" r="115" fill="#facc15" opacity="0.22" />
          <circle cx="0" cy="0" r="78" fill="#facc15" />
          <text x="0" y="27" fontSize="82" textAnchor="middle">
            💡
          </text>
        </g>

        {/* 🔔 ANIMATED FOLLOW CTA BUTTON */}
        {frame > 25 && (
          <g transform={`translate(540, 440) scale(${Math.max(0, ctaPop)})`}>
            {/* Pulsing Shadow */}
            <rect
              x="-280"
              y="-46"
              width="560"
              height="92"
              rx="46"
              fill="#ef4444"
              opacity="0.4"
              filter="blur(14px)"
            />
            {/* Button Body */}
            <rect
              x="-260"
              y="-42"
              width="520"
              height="84"
              rx="42"
              fill="url(#ctaGrad)"
              stroke="#ffffff"
              strokeWidth="4"
            />
            {/* Bell Icon with wiggle */}
            <g transform={`translate(-180, 5) rotate(${bellWiggle})`}>
              <text x="0" y="8" fontSize="40" textAnchor="middle">
                🔔
              </text>
            </g>
            <text x="30" y="14" fill="#ffffff" fontSize="34" fontWeight="900" textAnchor="middle" letterSpacing="1.5">
              FOLLOW SEKARANG!
            </text>

            {/* Handle Tag below */}
            <g transform="translate(0, 72)">
              <rect x="-170" y="-22" width="340" height="44" rx="22" fill="rgba(15, 23, 42, 0.9)" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="0" y="8" fill="#38bdf8" fontSize="22" fontWeight="800" textAnchor="middle" letterSpacing="1">
                @tibatibapaham
              </text>
            </g>
          </g>
        )}

        {/* 🧑 Character standing above caption */}
        <g transform="translate(540, 995)">
          <MainCharacter mood="eureka" scale={1.35} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
