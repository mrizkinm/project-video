import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Celebration rotation of ray lines
  const rayRotation = interpolate(frame, [0, 240], [0, 90]);

  // Character celebration bounce
  const bounceY = interpolate(
    Math.sin((frame / fps) * Math.PI * 3),
    [-1, 1],
    [-15, 15]
  );

  const cableScale = spring({
    frame: frame - 15,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #064e3b 0%, #0f172a 60%, #1e1b4b 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <svg viewBox="0 0 1080 1920" style={{ width: '100%', height: '100%' }}>
        {/* Celebration Sunburst Rays */}
        <g
          transform={`translate(540, 900) rotate(${rayRotation})`}
          opacity="0.25"
        >
          <line x1="-500" y1="-500" x2="500" y2="500" stroke="#34d399" strokeWidth="12" />
          <line x1="500" y1="-500" x2="-500" y2="500" stroke="#34d399" strokeWidth="12" />
          <line x1="0" y1="-600" x2="0" y2="600" stroke="#34d399" strokeWidth="12" />
          <line x1="-600" y1="0" x2="600" y2="0" stroke="#34d399" strokeWidth="12" />
        </g>

        {/* Character Group */}
        <g transform={`translate(540, ${1100 + bounceY})`}>
          <ellipse cx="0" cy="180" rx="160" ry="35" fill="#000000" opacity="0.4" />
          
          {/* Green Hero Hoodie */}
          <rect x="-110" y="-80" width="220" height="260" rx="50" fill="#10b981" />
          <rect x="-35" y="-130" width="70" height="70" fill="#ffd1a4" rx="10" />
          <circle cx="0" cy="-210" r="120" fill="#ffd1a4" />

          {/* Hair */}
          <path
            d="M -120 -210 Q -60 -360 30 -340 Q 130 -320 120 -210 Q 60 -260 -20 -260 Z"
            fill="#451a03"
          />

          {/* Winking Eyes */}
          <path d="M -70 -210 Q -45 -195 -20 -210" stroke="#0f172a" strokeWidth="10" fill="none" strokeLinecap="round" />
          <circle cx="45" cy="-210" r="14" fill="#0f172a" />

          {/* Big Grin */}
          <path d="M -40 -140 Q 0 -95 40 -140" stroke="#0f172a" strokeWidth="10" fill="#e11d48" strokeLinecap="round" />

          {/* Phone Charger Cable in Hand */}
          <g
            transform={`translate(120, -50) scale(${Math.max(0, cableScale)})`}
          >
            <path
              d="M 0 60 Q 60 80 40 -60 Q 20 -140 70 -120"
              stroke="#f8fafc"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
            />
            {/* USB-C / Adapter plug */}
            <rect x="55" y="-150" width="34" height="46" rx="8" fill="#cbd5e1" stroke="#64748b" strokeWidth="4" />
            <circle cx="72" cy="-127" r="5" fill="#10b981" />
          </g>
        </g>
      </svg>
    </div>
  );
};
