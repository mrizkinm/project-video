import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const LivingRoomHallway: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Gentle doorway glow pulse
  const doorwayGlow = interpolate(
    Math.sin((frame / fps) * Math.PI * 2),
    [-1, 1],
    [0.3, 0.6]
  );

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <svg viewBox="0 0 1080 1920" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="livingWall" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e1e38" />
            <stop offset="70%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient id="hallwayFloor" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#451a03" />
            <stop offset="100%" stopColor="#1c0a00" />
          </linearGradient>

          <radialGradient id="portalBeam" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#facc15" stopOpacity={doorwayGlow} />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Walls */}
        <rect x="0" y="0" width="1080" height="1360" fill="url(#livingWall)" />
        {/* Floor */}
        <rect x="0" y="1360" width="1080" height="560" fill="url(#hallwayFloor)" />
        {/* Baseboard trim */}
        <rect x="0" y="1340" width="1080" height="24" fill="#64748b" opacity="0.3" />

        {/* Central Archway / Doorway */}
        <g transform="translate(300, 320)">
          {/* Outer Arch Trim */}
          <rect x="0" y="0" width="480" height="1040" rx="36" fill="#18182e" stroke="#fbbf24" strokeWidth="14" />
          {/* Inner Doorway Opening */}
          <rect x="30" y="30" width="420" height="980" rx="24" fill="#030712" />
          {/* Doorway Light Beam onto Floor */}
          <polygon points="30,980 450,980 620,1350 -140,1350" fill="url(#portalBeam)" />
          {/* Open Door Panel 3D Perspective */}
          <polygon points="30,30 180,120 180,920 30,980" fill="#334155" stroke="#475569" strokeWidth="8" />
          <circle cx="150" cy="530" r="12" fill="#facc15" />
        </g>

        {/* Monstera Floor Plant (Left Corner) */}
        <g transform="translate(60, 1100)">
          {/* Ceramic Pot */}
          <polygon points="20,180 120,180 110,300 30,300" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="4" />
          {/* Monstera Leaves */}
          <ellipse cx="70" cy="140" rx="60" ry="80" fill="#15803d" />
          <ellipse cx="20" cy="80" rx="55" ry="70" fill="#16a34a" />
          <ellipse cx="120" cy="90" rx="50" ry="65" fill="#22c55e" />
          <ellipse cx="70" cy="30" rx="45" ry="60" fill="#4ade80" />
        </g>

        {/* Modern Minimalist Wall Clock (Right) */}
        <g transform="translate(860, 380)">
          <circle cx="0" cy="0" r="70" fill="#0f172a" stroke="#cbd5e1" strokeWidth="8" />
          <line x1="0" y1="0" x2="0" y2="-40" stroke="#facc15" strokeWidth="6" strokeLinecap="round" />
          <line x1="0" y1="0" x2="25" y2="15" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
          <circle cx="0" cy="0" r="8" fill="#ef4444" />
        </g>
      </svg>
    </div>
  );
};
