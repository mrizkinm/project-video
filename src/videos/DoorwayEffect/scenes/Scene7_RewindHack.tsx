import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { LivingRoomHallway } from '../../../shared/environments/LivingRoomHallway';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene7_RewindHack: React.FC = () => {
  const frame = useCurrentFrame();

  // Character walking backwards smoothly
  const walkBackX = interpolate(frame, [0, 210], [140, -120], {
    extrapolateRight: 'clamp',
  });

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
          fontFamily: '"Plus Jakarta Sans", "Nunito", -apple-system, sans-serif',
        }}
      >
        {/* Soft Modern Rewind Badge at Top */}
        <g transform="translate(540, 310)">
          <rect x="-260" y="-38" width="520" height="76" rx="38" fill="#f59e0b" stroke="#ffffff" strokeWidth="4" />
          <text x="0" y="14" fill="#000000" fontSize="30" fontWeight="900" textAnchor="middle" letterSpacing="1">
            💡 Trik Kilat: Jalan Mundur!
          </text>
        </g>

        {/* Supporting Hint Sub-badge */}
        <g transform="translate(540, 395)">
          <rect x="-200" y="-25" width="400" height="50" rx="25" fill="rgba(15, 23, 42, 0.85)" stroke="#38bdf8" strokeWidth="2.5" />
          <text x="0" y="9" fill="#e0f2fe" fontSize="22" fontWeight="700" textAnchor="middle">
            Kembali ke Posisi Semula ↩
          </text>
        </g>

        {/* Soft Cyan Motion Blur Trails */}
        <g stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" opacity="0.45">
          <line x1="880" y1="920" x2="680" y2="920" />
          <line x1="920" y1="1020" x2="740" y2="1020" />
          <line x1="840" y1="1120" x2="660" y2="1120" />
        </g>

        {/* Character Stepping Backward with thoughtful expression */}
        <g transform={`translate(${540 + walkBackX}, 1080)`}>
          <MainCharacter mood="thinking" isWalking={true} flipX={true} scale={1.35} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
