import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene7_Reassurance: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stampPop = spring({
    frame: frame - 6,
    fps,
    config: { damping: 11, stiffness: 140 },
  });

  const bubbleLeftPop = spring({
    frame: frame - 12,
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
        {/* Single Reassurance Stamp at Top */}
        <g transform={`translate(540, 230) rotate(1.5) scale(${Math.max(0, stampPop)})`}>
          <rect
            x="-270"
            y="-36"
            width="540"
            height="72"
            rx="26"
            fill="#064e3b"
            stroke="#34d399"
            strokeWidth="4"
            filter="drop-shadow(0px 8px 24px rgba(52, 211, 153, 0.45))"
          />
          <text
            x="0"
            y="13"
            fontSize="30"
            fontWeight="900"
            fill="#a7f3d0"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="'Fredoka', sans-serif"
          >
            ✨ SEMUA TEMANMU SUDAH BIASA!
          </text>
        </g>

        {/* Left Speech Bubble from Friends */}
        <g transform={`translate(280, 560) scale(${Math.max(0, bubbleLeftPop)})`}>
          <rect
            x="-160"
            y="-40"
            width="320"
            height="80"
            rx="24"
            fill="#0f172a"
            stroke="#34d399"
            strokeWidth="3.5"
            filter="drop-shadow(0px 8px 20px rgba(0,0,0,0.4))"
          />
          <text
            x="0"
            y="10"
            fill="#dcfce7"
            fontSize="24"
            fontWeight="800"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
          >
            "Suaramu biasa aja kok! 😄"
          </text>
        </g>

        {/* Right Speech Bubble from Friends */}
        <g transform={`translate(800, 700) scale(${Math.max(0, bubbleRightPop)})`}>
          <rect
            x="-150"
            y="-40"
            width="300"
            height="80"
            rx="24"
            fill="#0f172a"
            stroke="#10b981"
            strokeWidth="3.5"
            filter="drop-shadow(0px 8px 20px rgba(0,0,0,0.4))"
          />
          <text
            x="0"
            y="10"
            fill="#dcfce7"
            fontSize="24"
            fontWeight="800"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
          >
            "Keren kok bro! 👍"
          </text>
        </g>

        {/* Floating Thumbs-Up Reactions around character */}
        <g transform="translate(180, 960)">
          <circle cx="0" cy="0" r="50" fill="#0f172a" stroke="#10b981" strokeWidth="3.5" />
          <text x="0" y="16" fontSize="48" textAnchor="middle">👍</text>
        </g>

        <g transform="translate(900, 980)">
          <circle cx="0" cy="0" r="50" fill="#0f172a" stroke="#10b981" strokeWidth="3.5" />
          <text x="0" y="16" fontSize="48" textAnchor="middle">🙌</text>
        </g>

        {/* Central Character Happy & Relieved */}
        <g transform="translate(540, 1080)">
          <MainCharacter
            mood="happy"
            scale={1.62}
          />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
