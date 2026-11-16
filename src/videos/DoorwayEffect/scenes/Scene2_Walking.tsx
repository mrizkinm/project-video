import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { LivingRoomHallway } from '../../../shared/environments/LivingRoomHallway';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene2_Walking: React.FC = () => {
  const frame = useCurrentFrame();

  // Walk position across screen (snappy 90 frames / 3.0s)
  const walkX = interpolate(frame, [0, 90], [-180, 220], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill>
      <LivingRoomHallway />

      <svg
        viewBox="0 0 1080 1920"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 10 }}
      >
        {/* Motion dust puffs near feet */}
        <g transform={`translate(${540 + walkX - 80}, 1370)`} opacity="0.4">
          <circle cx="0" cy="0" r="14" fill="#ffffff" />
          <circle cx="-25" cy="5" r="10" fill="#ffffff" />
        </g>

        {/* Character dynamically walking with leg rotation */}
        <g transform={`translate(${540 + walkX}, 1120)`}>
          <MainCharacter mood="happy" isWalking={true} scale={1.3} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
