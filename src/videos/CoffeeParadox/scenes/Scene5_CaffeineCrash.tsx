import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene5_CaffeineCrash: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Screen shake on crash moment (Frame 15 to 30)
  const shakeX =
    frame >= 15 && frame <= 30
      ? Math.sin(frame * 5) * 16
      : 0;

  // Stamp pop
  const stampPop = spring({
    frame: frame - 18,
    fps,
    config: { damping: 9, stiffness: 140 },
  });

  // Caffeine dissolving
  const caffeineOpacity = interpolate(frame, [5, 20], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <ParticleBackground theme="rose" />

      <svg
        viewBox="0 0 1080 1920"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          transform: `translate(${shakeX}px, 0px)`,
          fontFamily: "'Plus Jakarta Sans', 'Fredoka', sans-serif",
        }}
      >
        {/* Comic Action Sunburst / Radial Impact Lines */}
        <g transform="translate(540, 900)" opacity="0.22">
          {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map((deg) => (
            <line
              key={deg}
              x1={Math.cos((deg * Math.PI) / 180) * 120}
              y1={Math.sin((deg * Math.PI) / 180) * 120}
              x2={Math.cos((deg * Math.PI) / 180) * 850}
              y2={Math.sin((deg * Math.PI) / 180) * 850}
              stroke="#ef4444"
              strokeWidth="8"
            />
          ))}
        </g>

        {/* Top Shockwave Rings */}
        {frame > 14 && (
          <g transform="translate(540, 350)">
            <circle cx="0" cy="0" r={90 + (frame - 14) * 8} fill="none" stroke="#ef4444" strokeWidth="8" opacity="0.4" />
            <circle cx="0" cy="0" r={50 + (frame - 14) * 5} fill="none" stroke="#facc15" strokeWidth="6" opacity="0.6" />
          </g>
        )}

        {/* 💥 GIANT EXPLOSIVE COMIC STAMP: CAFFEINE CRASH (Y: 350) */}
        {frame > 16 && (
          <g transform={`translate(540, 350) rotate(-4) scale(${Math.max(0, stampPop)})`}>
            {/* Dark Shadow */}
            <rect x="-310" y="-60" width="620" height="120" rx="30" fill="#0f172a" />
            {/* Red Border Box */}
            <rect
              x="-305"
              y="-55"
              width="610"
              height="110"
              rx="26"
              fill="#fee2e2"
              stroke="#ef4444"
              strokeWidth="8"
            />
            {/* Stamp Main Headline */}
            <text
              x="0"
              y="18"
              fill="#dc2626"
              fontSize="56"
              fontWeight="900"
              letterSpacing="2"
              textAnchor="middle"
              fontFamily="'Fredoka', sans-serif"
            >
              💥 CAFFEINE CRASH!
            </text>
          </g>
        )}

        {/* ⚡ Crashing Lightning Energy Bolts */}
        {frame > 18 && (
          <g opacity={0.85}>
            <path d="M 360 520 L 410 580 L 380 600 L 440 680" stroke="#facc15" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M 720 520 L 670 580 L 700 600 L 640 680" stroke="#facc15" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="440" cy="680" r="12" fill="#ef4444" />
            <circle cx="640" cy="680" r="12" fill="#ef4444" />
          </g>
        )}

        {/* 💨 Massive Adenosine Swarm Rushing In from Left & Right */}
        {frame > 18 && (
          <g>
            {/* Left incoming swarm (Larger, more dramatic) */}
            {[
              { x: 190, y: 720, r: 48, rot: 15 },
              { x: 280, y: 880, r: 44, rot: 5 },
              { x: 160, y: 1020, r: 46, rot: 25 },
            ].map((p, i) => (
              <g key={`left-rush-${i}`} transform={`translate(${p.x}, ${p.y}) rotate(${p.rot})`}>
                <circle cx="0" cy="0" r={p.r} fill="#f472b6" stroke="#db2777" strokeWidth="5" />
                <path d="M -16 -4 Q -8 -12 0 -4" stroke="#0f172a" strokeWidth="4" fill="none" />
                <path d="M 4 -4 Q 12 -12 20 -4" stroke="#0f172a" strokeWidth="4" fill="none" />
                <ellipse cx="2" cy="16" rx="7" ry="10" fill="#be123c" />
                {/* Speed trail */}
                <line x1="-70" y1="0" x2="-35" y2="0" stroke="#f472b6" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
                <line x1="-55" y1="-15" x2="-25" y2="-15" stroke="#f472b6" strokeWidth="3.5" strokeLinecap="round" opacity="0.6" />
              </g>
            ))}

            {/* Right incoming swarm */}
            {[
              { x: 890, y: 720, r: 48, rot: -15 },
              { x: 800, y: 880, r: 44, rot: -5 },
              { x: 920, y: 1020, r: 46, rot: -25 },
            ].map((p, i) => (
              <g key={`right-rush-${i}`} transform={`translate(${p.x}, ${p.y}) rotate(${p.rot})`}>
                <circle cx="0" cy="0" r={p.r} fill="#f472b6" stroke="#db2777" strokeWidth="5" />
                <path d="M -20 -4 Q -12 -12 -4 -4" stroke="#0f172a" strokeWidth="4" fill="none" />
                <path d="M 0 -4 Q 8 -12 16 -4" stroke="#0f172a" strokeWidth="4" fill="none" />
                <ellipse cx="-2" cy="16" rx="7" ry="10" fill="#be123c" />
                {/* Speed trail */}
                <line x1="35" y1="0" x2="70" y2="0" stroke="#f472b6" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
                <line x1="25" y1="-15" x2="55" y2="-15" stroke="#f472b6" strokeWidth="3.5" strokeLinecap="round" opacity="0.6" />
              </g>
            ))}
          </g>
        )}

        {/* Prominent Hero Character drooping/collapsing in exhaustion (1.65x scale) */}
        <g transform="translate(540, 960)">
          <MainCharacter
            mood={frame < 16 ? 'shocked' : 'sleepy'}
            sweatDrop={true}
            scale={1.65}
          />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
