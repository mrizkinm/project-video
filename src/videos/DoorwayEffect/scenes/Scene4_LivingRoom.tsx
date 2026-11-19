import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { LivingRoomHallway } from '../../../shared/environments/LivingRoomHallway';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene4_LivingRoom: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Character looking left then right (smoothly at frame 65)
  const flip = frame > 65;

  // 3 Orbiting question marks
  const orbitAngle = (frame / fps) * Math.PI * 1.5;

  return (
    <AbsoluteFill>
      <LivingRoomHallway />

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
        {/* Reassuring In-Scene Pill */}
        <g transform="translate(540, 310)">
          <rect
            x="-230"
            y="-34"
            width="460"
            height="68"
            rx="34"
            fill="rgba(15, 23, 42, 0.9)"
            stroke="#facc15"
            strokeWidth="3.5"
          />
          <text
            x="0"
            y="11"
            fill="#facc15"
            fontSize="26"
            fontWeight="800"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="'Fredoka', sans-serif"
          >
            🧘 TENANG, BUKAN PIKUN!
          </text>
        </g>

        {/* Orbiting Question Marks */}
        <g transform="translate(540, 780)">
          {/* Question Mark 1 */}
          <g transform={`translate(${Math.cos(orbitAngle) * 220}, ${Math.sin(orbitAngle) * 80 - 180})`}>
            <circle cx="0" cy="0" r="34" fill="#facc15" />
            <text x="0" y="16" fontSize="50" fontWeight="900" fill="#000000" textAnchor="middle">?</text>
          </g>
          {/* Question Mark 2 */}
          <g transform={`translate(${Math.cos(orbitAngle + 2) * 260}, ${Math.sin(orbitAngle + 2) * 90 - 180})`}>
            <circle cx="0" cy="0" r="28" fill="#38bdf8" />
            <text x="0" y="14" fontSize="42" fontWeight="900" fill="#000000" textAnchor="middle">?</text>
          </g>
          {/* Question Mark 3 */}
          <g transform={`translate(${Math.cos(orbitAngle + 4) * 240}, ${Math.sin(orbitAngle + 4) * 85 - 180})`}>
            <circle cx="0" cy="0" r="30" fill="#f43f5e" />
            <text x="0" y="15" fontSize="46" fontWeight="900" fill="#ffffff" textAnchor="middle">?</text>
          </g>
        </g>

        {/* Character standing bewildered in living room - scale 1.6x */}
        <g transform="translate(540, 960)">
          <MainCharacter mood="confused" flipX={flip} scale={1.6} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
