import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Character walking backward
  const walkBackX = interpolate(frame, [0, 50], [80, -60], {
    extrapolateRight: 'clamp',
  });

  // Lightbulb pop and pulse
  const bulbScale = spring({
    frame: frame - 30,
    fps,
    config: { damping: 9, stiffness: 140 },
  });

  const bulbGlow = interpolate(
    Math.sin((frame / fps) * Math.PI * 4),
    [-1, 1],
    [0.2, 0.5]
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #451a03 0%, #0f172a 60%, #172554 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <svg viewBox="0 0 1080 1920" style={{ width: '100%', height: '100%' }}>
        {/* Rewind Motion Trails */}
        <line x1="880" y1="920" x2="620" y2="920" stroke="#38bdf8" strokeWidth="10" strokeLinecap="round" opacity="0.5" />
        <line x1="920" y1="1020" x2="710" y2="1020" stroke="#38bdf8" strokeWidth="10" strokeLinecap="round" opacity="0.3" />

        {/* Character Stepping Backward */}
        <g transform={`translate(${540 + walkBackX}, 1120)`}>
          <ellipse cx="0" cy="180" rx="160" ry="35" fill="#000000" opacity="0.4" />
          <rect x="-110" y="-80" width="220" height="260" rx="50" fill="#38bdf8" />
          <rect x="-35" y="-130" width="70" height="70" fill="#ffd1a4" rx="10" />
          <circle cx="0" cy="-210" r="120" fill="#ffd1a4" />

          {/* Hair */}
          <path
            d="M -120 -210 Q -60 -360 30 -340 Q 130 -320 120 -210 Q 60 -260 -20 -260 Z"
            fill="#451a03"
          />

          {/* Delighted Happy Eyes */}
          <path d="M -70 -210 Q -45 -235 -20 -210" stroke="#0f172a" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M 20 -210 Q 45 -235 70 -210" stroke="#0f172a" strokeWidth="10" fill="none" strokeLinecap="round" />

          {/* Big Open Smile */}
          <path d="M -30 -140 Q 0 -105 30 -140" stroke="#0f172a" strokeWidth="10" fill="#e11d48" strokeLinecap="round" />

          {/* Hand Pointing Up */}
          <circle cx="150" cy="-40" r="40" fill="#ffd1a4" />
        </g>

        {/* Radiant Lightbulb (Eureka Moment) */}
        {frame > 25 && (
          <g
            transform={`translate(${540 + walkBackX}, 650) scale(${Math.max(0, bulbScale)})`}
          >
            <circle cx="0" cy="0" r="140" fill="#facc15" opacity={bulbGlow} />
            <path
              d="M -50 -30 C -80 -90 80 -90 50 -30 C 40 0 32 30 32 55 L -32 55 C -32 30 -40 0 -50 -30 Z"
              fill="#facc15"
            />
            <rect x="-26" y="60" width="52" height="22" rx="6" fill="#94a3b8" />
            <line x1="0" y1="-120" x2="0" y2="-160" stroke="#facc15" strokeWidth="14" strokeLinecap="round" />
            <line x1="-80" y1="-100" x2="-120" y2="-130" stroke="#facc15" strokeWidth="14" strokeLinecap="round" />
            <line x1="80" y1="-100" x2="120" y2="-130" stroke="#facc15" strokeWidth="14" strokeLinecap="round" />
          </g>
        )}
      </svg>
    </div>
  );
};
