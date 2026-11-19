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

  // Big yellow question mark spring
  const qMarkPop = spring({
    frame: frame - 10,
    fps,
    config: { damping: 9, stiffness: 140 },
  });

  const stampPop = spring({
    frame: frame - 6,
    fps,
    config: { damping: 10, stiffness: 130 },
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
          fontFamily: "'Fredoka', 'Plus Jakarta Sans', sans-serif",
        }}
      >
        {/* Shockwave Rings */}
        <g transform="translate(540, 360)">
          <circle cx="0" cy="0" r={80 + frame * 3} fill="none" stroke="#ef4444" strokeWidth="6" opacity="0.35" />
          <circle cx="0" cy="0" r={55 + frame * 2} fill="none" stroke="#facc15" strokeWidth="5" opacity="0.5" />
        </g>

        {/* Comic Action Stamp: MENDADAK BLANK?! */}
        {frame > 5 && (
          <g transform={`translate(540, 205) rotate(-3) scale(${Math.max(0, stampPop)})`}>
            <rect
              x="-240"
              y="-38"
              width="480"
              height="76"
              rx="38"
              fill="#fee2e2"
              stroke="#ef4444"
              strokeWidth="5"
            />
            <text
              x="0"
              y="13"
              fontSize="34"
              fontWeight="900"
              fill="#dc2626"
              textAnchor="middle"
              letterSpacing="1"
              fontFamily="'Fredoka', sans-serif"
            >
              💥 MENDADAK BLANK?!
            </text>
          </g>
        )}

        {/* Character Shocked in Center Stage - scale 1.6x */}
        <g transform="translate(540, 980)">
          <MainCharacter mood="shocked" sweatDrop={true} scale={1.6} />
        </g>

        {/* Big Yellow Question Mark Hovering Cleanly Above Character's Head */}
        {frame > 8 && (
          <g transform={`translate(540, 360) scale(${Math.max(0, qMarkPop)})`}>
            <circle cx="0" cy="0" r="85" fill="#facc15" opacity="0.25" />
            <circle cx="0" cy="0" r="62" fill="#eab308" stroke="#facc15" strokeWidth="4" />
            <text
              x="0"
              y="38"
              fontSize="105"
              fontWeight="900"
              fill="#ffffff"
              textAnchor="middle"
              fontFamily="'Fredoka', sans-serif"
            >
              ?
            </text>
          </g>
        )}
      </svg>
    </AbsoluteFill>
  );
};
