import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CozyBedroomBackground } from '../../../shared/environments/CozyBedroomBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';
import { BedBackdrop, BedForeground } from '../components/CozyBed';

export const Scene7_StretchingHack: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardPop = spring({
    frame: frame - 6,
    fps,
    config: { damping: 11, stiffness: 130 },
  });

  const tipPop = spring({
    frame: frame - 20,
    fps,
    config: { damping: 12, stiffness: 120 },
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
        {/* Warning Pill: Pemicu Utama (Kurang Tidur & Main HP) */}
        <g transform="translate(540, 205)">
          <rect
            x="-260"
            y="-30"
            width="520"
            height="60"
            rx="30"
            fill="rgba(69, 10, 10, 0.9)"
            stroke="#ef4444"
            strokeWidth="3.5"
          />
          <text
            x="0"
            y="11"
            fill="#f87171"
            fontSize="24"
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="'Fredoka', sans-serif"
          >
            🚫 PEMICU: KURANG TIDUR & MAIN HP
          </text>
        </g>

        {/* Generous Solution Card (Width 800px) */}
        <g transform={`translate(540, 295) scale(${Math.max(0, cardPop)})`}>
          <rect
            x="-400"
            y="-48"
            width="800"
            height="96"
            rx="28"
            fill="rgba(15, 23, 42, 0.95)"
            stroke="#10b981"
            strokeWidth="4"
          />
          <text
            x="0"
            y="-6"
            fill="#34d399"
            fontSize="28"
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="'Fredoka', sans-serif"
          >
            🧘 HACK: 5 MENIT PEREGANGAN SANTAI
          </text>

          {/* Subtitle Inside Card */}
          <rect x="-280" y="10" width="560" height="30" rx="15" fill="#064e3b" opacity="0.6" />
          <text
            x="0"
            y="32"
            fill="#a7f3d0"
            fontSize="21"
            fontWeight="700"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
          >
            Otot mengendur bertahap, otak tidur lelap! ✨
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
