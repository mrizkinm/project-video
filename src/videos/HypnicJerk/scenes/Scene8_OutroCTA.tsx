import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';
import { BrainMascot } from '../../../shared/characters/BrainMascot';

export const Scene8_OutroCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Rotation of celebratory sunburst
  const sunRotation = interpolate(frame, [0, 135], [0, 80]);

  // Floating bob for the sleep moon
  const floatY = Math.sin((frame / fps) * Math.PI * 2.5) * 8;
  const floatRotate = Math.sin((frame / fps) * Math.PI * 1.8) * 5;

  const ctaScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 10, stiffness: 130 },
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
        {/* Celebration Sunburst Rays */}
        <g transform={`translate(540, 750) rotate(${sunRotation})`} opacity="0.3">
          <line x1="-600" y1="-600" x2="600" y2="600" stroke="#34d399" strokeWidth="16" />
          <line x1="600" y1="-600" x2="-600" y2="600" stroke="#34d399" strokeWidth="16" />
          <line x1="0" y1="-700" x2="0" y2="700" stroke="#34d399" strokeWidth="16" />
          <line x1="-700" y1="0" x2="700" y2="0" stroke="#34d399" strokeWidth="16" />
        </g>

        {/* Top Interactive Question Badge */}
        <g transform="translate(540, 180)">
          <rect
            x="-310"
            y="-34"
            width="620"
            height="68"
            rx="34"
            fill="rgba(15, 23, 42, 0.92)"
            stroke="#10b981"
            strokeWidth="3.5"
          />
          <text
            x="0"
            y="11"
            fill="#34d399"
            fontSize="28"
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="'Fredoka', sans-serif"
          >
            🛌 SEMALEM KAKI KAMU NYENTAK?
          </text>
        </g>

        {/* Floating Call to Action Button */}
        <g transform={`translate(540, 290) scale(${Math.max(0, ctaScale)})`}>
          <rect
            x="-240"
            y="-36"
            width="480"
            height="72"
            rx="36"
            fill="linear-gradient(90deg, #f59e0b, #ef4444)"
            stroke="#ffffff"
            strokeWidth="3"
            filter="drop-shadow(0px 8px 20px rgba(0,0,0,0.4))"
          />
          <text
            x="0"
            y="13"
            fill="#ffffff"
            fontSize="30"
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="1.5"
            fontFamily="'Fredoka', sans-serif"
          >
            👉 FOLLOW @TibaTibaPaham
          </text>
        </g>

        {/* Floating Cartoon Sleep Icon (Moon + Cloud) hovering in mid-air */}
        <g transform={`translate(540, ${390 + floatY}) rotate(${floatRotate})`}>
          {/* Soft ambient glow */}
          <circle cx="0" cy="0" r="50" fill="#facc15" opacity="0.3" />
          <circle cx="0" cy="0" r="35" fill="#fef08a" />
          {/* Crescent Moon Icon */}
          <text x="0" y="13" fontSize="40" textAnchor="middle">🌙</text>
          {/* Sparkles */}
          <text x="-55" y="-12" fontSize="20">✨</text>
          <text x="45" y="-10" fontSize="20">✨</text>
        </g>

        {/* Characters Side-by-Side: Main Character (1.6x) & Brain Mascot (1.25x) */}
        {/* Main Character on the Left shifted up to Y=885 (soles at Y=1213, generous 65px+ clearance above subtitle badge) */}
        <g transform="translate(360, 885)">
          <MainCharacter mood="happy" scale={1.6} />
        </g>

        {/* Brain Mascot on the Right standing with own space at Y=905 */}
        <g transform="translate(760, 905)">
          <BrainMascot mood="waving" scale={1.25} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
