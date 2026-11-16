import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Character walk-in and stop
  const walkX = interpolate(frame, [0, 45], [-200, 0], {
    extrapolateRight: 'clamp',
  });

  // Question mark spring bounce
  const qMarkScale = spring({
    frame: frame - 40,
    fps,
    config: {
      damping: 10,
      stiffness: 120,
    },
  });

  // Camera zoom in on facial expression
  const cameraZoom = interpolate(frame, [40, 180], [1, 1.15], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #1e1b4b 0%, #0f172a 60%, #1e1e38 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        transform: `scale(${cameraZoom})`,
      }}
    >
      <svg
        viewBox="0 0 1080 1920"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Background Wall Decor */}
        <rect x="0" y="0" width="1080" height="1920" fill="#1e1e38" />
        
        {/* Door Frame */}
        <rect
          x="260"
          y="420"
          width="560"
          height="1100"
          rx="30"
          fill="#2d2b55"
          stroke="#facc15"
          strokeWidth="14"
        />
        
        {/* Open Door 3D Perspective */}
        <polygon
          points="260,420 440,520 440,1400 260,1520"
          fill="#e11d48"
          opacity="0.35"
        />

        {/* Character Group */}
        <g transform={`translate(${540 + walkX}, 1150)`}>
          {/* Shadow */}
          <ellipse cx="0" cy="180" rx="160" ry="35" fill="#000000" opacity="0.4" />
          
          {/* Body / Hoodie */}
          <rect x="-110" y="-80" width="220" height="260" rx="50" fill="#38bdf8" />
          
          {/* Neck & Head */}
          <rect x="-35" y="-130" width="70" height="70" fill="#ffd1a4" rx="10" />
          <circle cx="0" cy="-210" r="120" fill="#ffd1a4" />
          
          {/* Hair */}
          <path
            d="M -120 -210 Q -60 -360 30 -340 Q 130 -320 120 -210 Q 60 -260 -20 -260 Z"
            fill="#451a03"
          />
          
          {/* Puzzled Eyes */}
          <circle cx="-45" cy="-210" r="14" fill="#0f172a" />
          <circle cx="45" cy="-210" r="14" fill="#0f172a" />
          
          {/* Eyebrows Uneven (Confused) */}
          <line
            x1="-65"
            y1="-240"
            x2="-25"
            y2="-248"
            stroke="#451a03"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <line
            x1="25"
            y1="-265"
            x2="65"
            y2="-235"
            stroke="#451a03"
            strokeWidth="8"
            strokeLinecap="round"
          />
          
          {/* Confused Mouth */}
          <path
            d="M -30 -150 Q 0 -175 30 -145"
            stroke="#0f172a"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Giant Question Mark Springing Up */}
        {frame > 35 && (
          <g
            transform={`translate(540, 680) scale(${Math.max(0, qMarkScale)})`}
          >
            <circle cx="0" cy="0" r="110" fill="#facc15" opacity="0.25" />
            <text
              x="0"
              y="60"
              fontSize="200"
              fontWeight="900"
              fill="#facc15"
              textAnchor="middle"
              fontFamily="system-ui, sans-serif"
            >
              ?
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
