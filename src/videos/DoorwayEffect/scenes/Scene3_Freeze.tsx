import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene3_Freeze: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Sudden screen shake
  const shakeX = frame >= 8 && frame <= 22
    ? Math.sin(frame * 4) * 14
    : 0;

  // Giant question mark spring
  const qMarkPop = spring({
    frame: frame - 10,
    fps,
    config: { damping: 9, stiffness: 140 },
  });

  return (
    <AbsoluteFill style={{ backgroundColor: '#0f172a', overflow: 'hidden' }}>
      <svg
        viewBox="0 0 1080 1920"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          transform: `translate(${shakeX}px, 0px)`,
        }}
      >
        {/* Shockwave Rings */}
        <g transform="translate(540, 700)">
          <circle cx="0" cy="0" r={100 + frame * 3} fill="none" stroke="#ef4444" strokeWidth="8" opacity="0.35" />
          <circle cx="0" cy="0" r={70 + frame * 2} fill="none" stroke="#facc15" strokeWidth="6" opacity="0.5" />
        </g>

        {/* Big Yellow Question Mark */}
        {frame > 8 && (
          <g transform={`translate(540, 500) scale(${Math.max(0, qMarkPop)})`}>
            <circle cx="0" cy="0" r="110" fill="#facc15" opacity="0.25" />
            <circle cx="0" cy="0" r="80" fill="#eab308" />
            <text
              x="0"
              y="48"
              fontSize="140"
              fontWeight="900"
              fill="#ffffff"
              textAnchor="middle"
              fontFamily='"Arial Black", Impact, sans-serif'
            >
              ?
            </text>
          </g>
        )}

        {/* Character Shocked in Center Stage */}
        <g transform="translate(540, 1020)">
          <MainCharacter mood="shocked" sweatDrop={true} scale={1.4} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
