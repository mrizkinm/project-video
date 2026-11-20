import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CozyBedroomBackground } from '../../../shared/environments/CozyBedroomBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';
import { BedBackdrop, BedForeground } from '../components/CozyBed';

export const Scene1_FloatingSleep: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Gentle sleeping breath (0.8 Hz) applied ONLY to the character's breathing motion
  const breathBobY = interpolate(
    Math.sin((frame / fps) * Math.PI * 1.6),
    [-1, 1],
    [-4, 4]
  );

  // Floating Zzz particle springs
  const zzz1 = spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 100 } });
  const zzz2 = spring({ frame: frame - 25, fps, config: { damping: 12, stiffness: 100 } });
  const zzz3 = spring({ frame: frame - 40, fps, config: { damping: 12, stiffness: 100 } });

  const pillPop = spring({
    frame: frame - 4,
    fps,
    config: { damping: 12, stiffness: 130 },
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
        {/* In-Scene Time Pill: Minimalist & Clean */}
        <g transform={`translate(540, 220) scale(${Math.max(0, pillPop)})`}>
          <rect
            x="-180"
            y="-30"
            width="360"
            height="60"
            rx="30"
            fill="rgba(15, 23, 42, 0.92)"
            stroke="#38bdf8"
            strokeWidth="3"
          />
          <text
            x="0"
            y="10"
            fill="#38bdf8"
            fontSize="26"
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="'Fredoka', sans-serif"
          >
            🌙 23:30 MALAM
          </text>
        </g>

        {/* Ambient Dream Halo around the Bed - STATIC on the floor */}
        <ellipse
          cx="540"
          cy="950"
          rx="390"
          ry="220"
          fill="#38bdf8"
          opacity="0.08"
        />

        {/* ── COZY BED IN BEDROOM (100% STATIC AT Y=960, ZERO WOBBLE) ── */}
        <defs>
          <clipPath id="bedSleepClip1">
            <rect x="-400" y="-900" width="800" height="940" />
          </clipPath>
        </defs>

        <g transform="translate(540, 960)">
          {/* Layer 1: Headboard, Bed Posts, Mattress, Pillows (100% Static) */}
          <BedBackdrop theme="night" />

          {/* Layer 2: Character Comfortably Sleeping in Bed (Scale 1.28x - Head resting on pillow)
              ONLY the character breathes gently */}
          <g clipPath="url(#bedSleepClip1)" transform={`translate(0, ${115 + breathBobY})`}>
            <MainCharacter mood="sleepy" scale={1.28} />
          </g>

          {/* Layer 3: Plush Duvet pulled up to chest (100% Static) */}
          <BedForeground variant="tucked" theme="night" />
        </g>

        {/* Floating Animated Zzz particles rising softly from the head & pillow */}
        {frame > 10 && (
          <g transform={`translate(640, ${700 - (frame - 10) * 0.3}) scale(${Math.max(0, zzz1)})`} opacity="0.9">
            <text x="0" y="0" fill="#facc15" fontSize="32" fontWeight="900" fontFamily="'Fredoka', sans-serif">Z</text>
          </g>
        )}
        {frame > 25 && (
          <g transform={`translate(675, ${630 - (frame - 25) * 0.3}) scale(${Math.max(0, zzz2)})`} opacity="0.8">
            <text x="0" y="0" fill="#facc15" fontSize="40" fontWeight="900" fontFamily="'Fredoka', sans-serif">z</text>
          </g>
        )}
        {frame > 40 && (
          <g transform={`translate(710, ${555 - (frame - 40) * 0.3}) scale(${Math.max(0, zzz3)})`} opacity="0.7">
            <text x="0" y="0" fill="#facc15" fontSize="48" fontWeight="900" fontFamily="'Fredoka', sans-serif">z</text>
          </g>
        )}
      </svg>
    </AbsoluteFill>
  );
};
