import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene2_ExpectationVsReality: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardPop = spring({
    frame: frame - 6,
    fps,
    config: { damping: 11, stiffness: 140 },
  });

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
          <filter id="micGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Expectation Stamp: Bass Berwibawa */}
        <g transform={`translate(540, 230) rotate(-2) scale(${Math.max(0, cardPop)})`}>
          <rect
            x="-260"
            y="-36"
            width="520"
            height="72"
            rx="26"
            fill="#fef08a"
            stroke="#eab308"
            strokeWidth="4"
            filter="drop-shadow(0px 8px 24px rgba(234, 179, 8, 0.45))"
          />
          <text
            x="0"
            y="13"
            fontSize="30"
            fontWeight="900"
            fill="#854d0e"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="'Fredoka', sans-serif"
          >
            👑 NGE-BASS & BERWIBAWA!
          </text>
        </g>

        {/* Studio Golden Vintage Microphone right beside Character */}
        <g transform="translate(340, 840)">
          {/* Golden Sound Radiance */}
          {[1, 2, 3].map((wIdx) => {
            const wProg = ((frame * 3 + wIdx * 25) % 80) / 80;
            return (
              <circle
                key={wIdx}
                cx="0"
                cy="10"
                r={40 + wProg * 70}
                fill="none"
                stroke="#facc15"
                strokeWidth="4"
                opacity={1 - wProg}
              />
            );
          })}

          {/* Stand */}
          <line x1="0" y1="70" x2="0" y2="440" stroke="#475569" strokeWidth="12" strokeLinecap="round" />
          <ellipse cx="0" cy="440" rx="70" ry="16" fill="#1e293b" />
          {/* Vintage Capsule */}
          <rect x="-35" y="-40" width="70" height="110" rx="35" fill="#facc15" stroke="#ca8a04" strokeWidth="5" filter="url(#micGlow)" />
          {/* Metallic Grille Lines */}
          {[-20, -6, 8, 22, 36].map((gy, gi) => (
            <line key={gi} x1="-25" y1={gy} x2="25" y2={gy} stroke="#854d0e" strokeWidth="3" strokeLinecap="round" />
          ))}
          <circle cx="0" cy="20" r="16" fill="#ca8a04" />
        </g>

        {/* Character confident (radio DJ vibe) */}
        <g transform="translate(540, 1060)">
          <MainCharacter
            mood="happy"
            scale={1.60}
          />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
