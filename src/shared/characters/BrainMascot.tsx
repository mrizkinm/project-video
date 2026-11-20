import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

interface BrainMascotProps {
  mood?: 'happy' | 'waving' | 'thinking';
  scale?: number;
  glasses?: boolean;
}

export const BrainMascot: React.FC<BrainMascotProps> = ({
  mood = 'happy',
  scale = 1,
  glasses = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Floating bob animation
  const floatY = interpolate(
    Math.sin((frame / fps) * Math.PI * 2),
    [-1, 1],
    [-15, 15]
  );

  // Arm waving animation
  const waveAngle = interpolate(
    Math.sin((frame / fps) * Math.PI * 4),
    [-1, 1],
    [-20, 20]
  );

  return (
    <g transform={`translate(0, ${floatY}) scale(${scale})`}>
      <defs>
        <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f472b6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="brainPinkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f9a8d4" />
          <stop offset="60%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#db2777" />
        </linearGradient>
      </defs>

      {/* Radiant Aura */}
      <circle cx="0" cy="0" r="280" fill="url(#brainGlow)" />

      {/* Floating Shadow below */}
      <ellipse cx="0" cy="220" rx="160" ry="25" fill="#000000" opacity="0.3" />

      {/* Brain Body */}
      <path
        d="M -150 -50 C -190 -150 -75 -210 0 -150 C 75 -210 190 -150 150 -50 C 210 50 130 160 0 140 C -130 160 -210 50 -150 -50 Z"
        fill="url(#brainPinkGrad)"
        stroke="#be185d"
        strokeWidth="12"
      />

      {/* Stylized Brain Wrinkles */}
      <path
        d="M -60 -100 Q -25 -50 -75 25 Q -100 60 -50 90"
        stroke="#be185d"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 60 -100 Q 25 -50 75 25 Q 100 60 50 90"
        stroke="#be185d"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />

      {/* Big Cute Manga Eyes */}
      <circle cx="-60" cy="-10" r="32" fill="#0f172a" />
      <circle cx="-50" cy="-20" r="12" fill="#ffffff" />
      <circle cx="-65" cy="-2" r="5" fill="#ffffff" />

      <circle cx="60" cy="-10" r="32" fill="#0f172a" />
      <circle cx="70" cy="-20" r="12" fill="#ffffff" />
      <circle cx="55" cy="-2" r="5" fill="#ffffff" />

      {/* Rosy Cheeks */}
      <ellipse cx="-100" cy="25" rx="20" ry="10" fill="#f43f5e" opacity="0.45" />
      <ellipse cx="100" cy="25" rx="20" ry="10" fill="#f43f5e" opacity="0.45" />

      {/* Cheerful Smile */}
      <path
        d="M -30 40 Q 0 70 30 40"
        stroke="#0f172a"
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
      />

      {/* Smart Audiometry / Professor Glasses (Synchronized with mascot floating) */}
      {glasses && (
        <g id="brain-glasses">
          {/* Left Frame */}
          <rect
            x="-96"
            y="-38"
            width="72"
            height="56"
            rx="14"
            fill="rgba(56, 189, 248, 0.18)"
            stroke="#0284c7"
            strokeWidth="8"
          />
          {/* Right Frame */}
          <rect
            x="24"
            y="-38"
            width="72"
            height="56"
            rx="14"
            fill="rgba(56, 189, 248, 0.18)"
            stroke="#0284c7"
            strokeWidth="8"
          />
          {/* Bridge */}
          <path
            d="M -24 -10 Q 0 -18 24 -10"
            fill="none"
            stroke="#0284c7"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Temples (side arms) */}
          <line x1="-96" y1="-10" x2="-140" y2="-22" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" />
          <line x1="96" y1="-10" x2="140" y2="-22" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" />
          {/* Glass glare highlight */}
          <line x1="-80" y1="-26" x2="-62" y2="-8" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" opacity="0.85" />
          <line x1="40" y1="-26" x2="58" y2="-8" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" opacity="0.85" />
        </g>
      )}

      {/* Animated Hands */}
      <g transform={`translate(-185, 0) rotate(${waveAngle})`}>
        <circle cx="0" cy="0" r="26" fill="#f472b6" stroke="#be185d" strokeWidth="6" />
      </g>
      <g transform={`translate(185, 0) rotate(${-waveAngle})`}>
        <circle cx="0" cy="0" r="26" fill="#f472b6" stroke="#be185d" strokeWidth="6" />
      </g>
    </g>
  );
};
