import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

interface LivingRoomHallwayProps {
  isRewind?: boolean;
}

export const LivingRoomHallway: React.FC<LivingRoomHallwayProps> = ({
  isRewind = false,
}) => {
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
      <svg
        viewBox="0 0 1080 1920"
        style={{
          width: '100%',
          height: '100%',
          fontFamily: '"Plus Jakarta Sans", "Nunito", -apple-system, sans-serif',
        }}
      >
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

          {/* Cozy bedroom ambiance visible beyond doorway */}
          <linearGradient id="bedroomDoorInterior" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e1208" />
            <stop offset="50%" stopColor="#2c1506" />
            <stop offset="100%" stopColor="#3d1f08" />
          </linearGradient>
          <radialGradient id="bedroomLampBeyond" cx="70%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── WALLS (Back Wall from Y=0 to Y=1180) ── */}
        <rect x="0" y="0" width="1080" height="1180" fill="url(#livingWall)" />

        {/* ── BASEBOARD TRIM (Along bottom of wall, meeting the door frame sides at x=310 and x=770) ── */}
        <rect x="0" y="1162" width="310" height="18" fill="#18182e" stroke="#334155" strokeWidth="2" />
        <rect x="770" y="1162" width="310" height="18" fill="#18182e" stroke="#334155" strokeWidth="2" />

        {/* ── CENTRAL DOORWAY IN THE BACK WALL (Mounted from Y=380 down to floor at Y=1180) ── */}
        <g transform="translate(310, 380)">
          {/* Outer Door Frame / Trim - Architectural 3-sided Arch (Left post, curved header, right post - open at floor) */}
          <path
            d="M 0 800 L 0 36 Q 0 0 36 0 L 424 0 Q 460 0 460 36 L 460 800"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="12"
            strokeLinecap="square"
          />

          {/* Inner Doorway Opening (Cozy Bedroom Beyond) */}
          <path
            d="M 6 800 L 6 42 Q 6 6 42 6 L 418 6 Q 454 6 454 42 L 454 800 Z"
            fill="url(#bedroomDoorInterior)"
          />
          {/* Distant bedroom desk lamp glow shining through doorway from Scene 1 */}
          <ellipse cx="280" cy="480" rx="200" ry="160" fill="url(#bedroomLampBeyond)" />

          {/* Subtle wooden threshold sill at floor junction (Y=1180) */}
          <rect x="6" y="792" width="448" height="12" rx="2" fill="#2a1205" stroke="#451a03" strokeWidth="2" />

          {/* Warm Light Beam Spilling from Doorway Forward onto Hallway Floor */}
          <polygon points="12,800 448,800 620,1150 -160,1150" fill="url(#portalBeam)" />

          {/* Open Door Panel (Swung inward in 3D perspective, reaching floor) */}
          <polygon points="12,12 165,95 165,745 12,798" fill="#334155" stroke="#475569" strokeWidth="6" />
          <circle cx="138" cy="420" r="10" fill="#facc15" />
        </g>

        {/* ── HALLWAY WOOD FLOOR (Begins at base of wall Y=1180, extending forward) ── */}
        <rect x="0" y="1180" width="1080" height="740" fill="url(#hallwayFloor)" />
        {/* Floor plank perspective lines */}
        {[1270, 1380, 1510, 1660, 1820].map((y, i) => (
          <line key={i} x1="0" y1={y} x2="1080" y2={y} stroke="#1c0a00" strokeWidth={i === 0 ? 5 : 3} opacity="0.8" />
        ))}
        {[160, 360, 540, 720, 920].map((x, i) => (
          <line key={i} x1={x + 30} y1="1180" x2={x - 30} y2="1920" stroke="#1c0a00" strokeWidth="3" opacity="0.6" />
        ))}

        {/* Monstera Floor Plant (Left Corner) - standing on floor at Y=1180 */}
        <g transform="translate(60, 880)">
          {/* Ceramic Pot */}
          <polygon points="20,180 120,180 110,300 30,300" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="4" />
          {/* Monstera Leaves */}
          <ellipse cx="70" cy="140" rx="60" ry="80" fill="#15803d" />
          <ellipse cx="20" cy="80" rx="55" ry="70" fill="#16a34a" />
          <ellipse cx="120" cy="90" rx="50" ry="65" fill="#22c55e" />
          <ellipse cx="70" cy="30" rx="45" ry="60" fill="#4ade80" />
        </g>

        {/* Modern Minimalist Wall Clock (Right) - spins counter-clockwise during rewind */}
        <g transform="translate(860, 440)">
          <circle cx="0" cy="0" r="70" fill="#0f172a" stroke="#cbd5e1" strokeWidth="8" />
          {/* Minute Hand: spins counter-clockwise if rewind */}
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="-44"
            stroke="#facc15"
            strokeWidth="6"
            strokeLinecap="round"
            transform={isRewind ? `rotate(${-frame * 16})` : undefined}
          />
          {/* Hour Hand: spins counter-clockwise if rewind */}
          <line
            x1="0"
            y1="0"
            x2="25"
            y2="15"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
            transform={isRewind ? `rotate(${-frame * 3})` : undefined}
          />
          <circle cx="0" cy="0" r="8" fill="#ef4444" />
        </g>
      </svg>
    </div>
  );
};
