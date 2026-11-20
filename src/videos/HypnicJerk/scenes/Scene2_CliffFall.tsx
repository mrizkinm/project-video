import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { MainCharacter } from '../../../shared/characters/MainCharacter';
import { BedBackdrop, BedForeground } from '../components/CozyBed';

export const Scene2_CliffFall: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Sudden jolt screen shake
  const shakeX = frame >= 6 && frame <= 24 ? Math.sin(frame * 4.5) * 16 : 0;
  const shakeY = frame >= 6 && frame <= 24 ? Math.cos(frame * 4.5) * 12 : 0;

  // Bed & Character jolt tilt & sudden drop into void
  const tiltAngle = interpolate(frame, [0, 8, 20, 45], [0, -18, -14, -12], {
    extrapolateRight: 'clamp',
  });
  const bedDropY = interpolate(frame, [0, 8, 20, 105], [920, 970, 945, 940], {
    extrapolateRight: 'clamp',
  });

  const stampPop = spring({
    frame: frame - 6,
    fps,
    config: { damping: 10, stiffness: 140 },
  });

  const pillPop = spring({
    frame: frame - 14,
    fps,
    config: { damping: 12, stiffness: 130 },
  });

  // Action speed lines upward streaming (visual illusion of falling downward)
  const speedOffset = (frame * 38) % 300;

  return (
    <AbsoluteFill style={{ backgroundColor: '#090418', overflow: 'hidden' }}>
      <svg
        viewBox="0 0 1080 1920"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          transform: `translate(${shakeX}px, ${shakeY}px)`,
          fontFamily: "'Fredoka', 'Plus Jakarta Sans', sans-serif",
        }}
      >
        <defs>
          <linearGradient id="abyssGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e1035" />
            <stop offset="50%" stopColor="#0c071d" />
            <stop offset="100%" stopColor="#030108" />
          </linearGradient>
        </defs>

        <rect width="1080" height="1920" fill="url(#abyssGrad)" />

        {/* Upward Action Speed Lines (Visual illusion of falling downward) */}
        <g stroke="#818cf8" strokeWidth="5" strokeLinecap="round" opacity="0.45" strokeDasharray="30, 25">
          <line x1="140" y1="1700" x2="140" y2="200" strokeDashoffset={-speedOffset} />
          <line x1="260" y1="1700" x2="260" y2="200" strokeDashoffset={-speedOffset * 1.2} />
          <line x1="840" y1="1700" x2="840" y2="200" strokeDashoffset={-speedOffset * 1.1} />
          <line x1="960" y1="1700" x2="960" y2="200" strokeDashoffset={-speedOffset * 1.3} />
        </g>

        {/* Crumbling Dream Cliff on the Left Edge */}
        <g transform="translate(0, 1020)">
          <path
            d="M 0 0 L 260 0 C 230 70 190 160 160 280 L 0 360 Z"
            fill="#1e1b4b"
            stroke="#6366f1"
            strokeWidth="4"
          />
          {/* Crumbling rock particles */}
          <circle cx="280" cy="80" r="14" fill="#818cf8" opacity="0.6" />
          <circle cx="250" cy="180" r="10" fill="#a5b4fc" opacity="0.5" />
          <circle cx="220" cy="270" r="16" fill="#6366f1" opacity="0.4" />
        </g>

        {/* Shock Action Comic Stamp: JATUH KE JURANG?! (Single Focal Text) */}
        {frame > 5 && (
          <g transform={`translate(540, 230) rotate(-2) scale(${Math.max(0, stampPop)})`}>
            <rect
              x="-240"
              y="-36"
              width="480"
              height="72"
              rx="36"
              fill="#fee2e2"
              stroke="#ef4444"
              strokeWidth="4"
              filter="drop-shadow(0px 8px 20px rgba(239, 68, 68, 0.4))"
            />
            <text
              x="0"
              y="13"
              fontSize="32"
              fontWeight="900"
              fill="#dc2626"
              textAnchor="middle"
              letterSpacing="1"
              fontFamily="'Fredoka', sans-serif"
            >
              💥 JATUH KE JURANG?!
            </text>
          </g>
        )}

        {/* ── TILTED BED IN THE ABYSS (Character falling from bed) ── */}
        <defs>
          <clipPath id="bedSleepClip2">
            <rect x="-400" y="-900" width="800" height="940" />
          </clipPath>
        </defs>

        <g transform={`translate(540, ${bedDropY}) rotate(${tiltAngle})`}>
          {/* Layer 1: Abyss Bed Frame & Ruffled Pillows */}
          <BedBackdrop theme="abyss" ruffledPillows={true} />

          {/* Layer 2: Character in Bed Shocked as Bed Tilts into Void (Scale 1.28x - Head on pillows) */}
          <g clipPath="url(#bedSleepClip2)" transform="translate(-20, 115)">
            <MainCharacter mood="shocked" sweatDrop={true} scale={1.28} />
          </g>

          {/* Layer 3: Duvet sliding off the bed */}
          <BedForeground variant="falling" theme="abyss" />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
