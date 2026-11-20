import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CozyBedroomBackground } from '../../../shared/environments/CozyBedroomBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';
import { BedBackdrop, BedForeground } from '../components/CozyBed';

export const Scene3_WakeUpShock: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Rapid heartbeat breathing motion (heavy heaving chest)
  const heavyBreathY = Math.sin((frame / fps) * Math.PI * 6) * 5;

  const widgetPop = spring({
    frame: frame - 6,
    fps,
    config: { damping: 11, stiffness: 130 },
  });

  const stampPop = spring({
    frame: frame - 16,
    fps,
    config: { damping: 11, stiffness: 130 },
  });

  // Bedside warm lamp alert glow
  const lampGlow = interpolate(
    Math.sin((frame / fps) * Math.PI * 4),
    [-1, 1],
    [0.7, 1.0]
  );

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
        {/* Rapid Heartbeat EKG Monitor Widget (Sole Clean Indicator) */}
        <g transform={`translate(540, 230) scale(${Math.max(0, widgetPop)})`}>
          <rect
            x="-260"
            y="-35"
            width="520"
            height="70"
            rx="35"
            fill="rgba(15, 23, 42, 0.95)"
            stroke="#ef4444"
            strokeWidth="3.5"
            filter="drop-shadow(0px 8px 20px rgba(239, 68, 68, 0.35))"
          />
          <text
            x="-100"
            y="11"
            fill="#f87171"
            fontSize="26"
            fontWeight="900"
            letterSpacing="1"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
          >
            💓 DETAK: 130 BPM
          </text>
          {/* Mini EKG Waveform */}
          <path
            d="M 35 0 L 65 0 L 78 -20 L 92 20 L 104 -26 L 116 10 L 128 0 L 180 0"
            stroke="#ef4444"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* Sudden Light Aura from lamp */}
        <circle cx="880" cy="980" r="280" fill="#fef08a" opacity={lampGlow * 0.15} />

        {/* ── CHARACTER BOLTING AWAKE IN BED (Centered at Y=960) ── */}
        <defs>
          <clipPath id="bedSleepClip3">
            <rect x="-400" y="-900" width="800" height="940" />
          </clipPath>
        </defs>

        <g transform={`translate(540, 960)`}>
          {/* Layer 1: Bed Frame, Headboard & Ruffled Pillows */}
          <BedBackdrop theme="night" ruffledPillows={true} />

          {/* Layer 2: Character Sitting Upright in Bed with Heaving Breath (Scale 1.28x - Head at pillows) */}
          <g clipPath="url(#bedSleepClip3)" transform={`translate(0, ${105 + heavyBreathY})`}>
            <MainCharacter mood="shocked" sweatDrop={true} scale={1.28} />
          </g>

          {/* Layer 3: Duvet bunched around waist / lap */}
          <BedForeground variant="waist" theme="night" />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
