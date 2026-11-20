import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CozyBedroomBackground } from '../../../shared/environments/CozyBedroomBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';
import { BedBackdrop, BedForeground } from '../components/CozyBed';

export const Scene7_StretchingHack: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pillPop = spring({
    frame: frame - 6,
    fps,
    config: { damping: 11, stiffness: 130 },
  });

  return (
    <AbsoluteFill>
      <CozyBedroomBackground hideDesk={true} showNightstand={true} />

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
        {/* Sleek Minimalist Solution Pill (1 single clean badge, zero clutter) */}
        <g transform={`translate(540, 220) scale(${Math.max(0, pillPop)})`}>
          <rect
            x="-260"
            y="-32"
            width="520"
            height="64"
            rx="32"
            fill="rgba(15, 23, 42, 0.92)"
            stroke="#10b981"
            strokeWidth="3"
            filter="drop-shadow(0px 8px 20px rgba(16, 185, 129, 0.35))"
          />
          <text
            x="0"
            y="11"
            fill="#34d399"
            fontSize="24"
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="'Fredoka', sans-serif"
          >
            🧘 TIPS: PEREGANGAN SEBELUM TIDUR
          </text>
        </g>

        {/* ── CHARACTER SITTING RELAXED ON BED (Centered at Y=960) ── */}
        <defs>
          <clipPath id="bedSleepClip7">
            <rect x="-400" y="-900" width="800" height="940" />
          </clipPath>
        </defs>

        <g transform="translate(540, 960)">
          {/* Layer 1: Neat Bed Frame, Headboard & Fluffy Pillows */}
          <BedBackdrop theme="zen" ruffledPillows={false} />

          {/* Layer 2: Character Sitting Calmly on Bed (Scale 1.28x - Head at pillows) */}
          <g clipPath="url(#bedSleepClip7)" transform="translate(0, 105)">
            <MainCharacter mood="happy" scale={1.28} />
          </g>

          {/* Layer 3: Cozy Zen Duvet bunched around waist / lap */}
          <BedForeground variant="waist" theme="zen" />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
