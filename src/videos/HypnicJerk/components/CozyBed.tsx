import React from 'react';

export interface CozyBedProps {
  variant?: 'tucked' | 'waist' | 'falling' | 'neat';
  theme?: 'night' | 'abyss' | 'zen';
  bedWidth?: number;
  tiltAngle?: number;
}

/**
 * BedBackdrop: Headboard, bed posts, mattress, and pillows.
 * Render this BEHIND the MainCharacter.
 */
export const BedBackdrop: React.FC<{
  theme?: 'night' | 'abyss' | 'zen';
  ruffledPillows?: boolean;
}> = ({ theme = 'night', ruffledPillows = false }) => {
  const isAbyss = theme === 'abyss';

  const woodDark = isAbyss ? '#1e1b4b' : '#2c1506';
  const woodMid = isAbyss ? '#312e81' : '#4a250e';
  const woodLight = isAbyss ? '#4338ca' : '#6b3614';
  const mattressColor = isAbyss ? '#312e81' : '#f8fafc';
  const pillowColor = isAbyss ? '#4338ca' : '#ffffff';
  const pillowShadow = isAbyss ? '#1e1b4b' : '#cbd5e1';

  return (
    <g id="bed-backdrop">
      <defs>
        {/* Headboard Wood Gradient */}
        <linearGradient id="headboardWoodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={woodLight} />
          <stop offset="60%" stopColor={woodMid} />
          <stop offset="100%" stopColor={woodDark} />
        </linearGradient>

        {/* Mattress Soft Gradient */}
        <linearGradient id="mattressGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={mattressColor} />
          <stop offset="100%" stopColor={isAbyss ? '#1e1b4b' : '#e2e8f0'} />
        </linearGradient>

        {/* Pillow Soft Radial Gradient */}
        <radialGradient id="pillowGrad" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor={pillowColor} />
          <stop offset="85%" stopColor={pillowColor} />
          <stop offset="100%" stopColor={pillowShadow} />
        </radialGradient>
      </defs>

      {/* ── 1. SOLID WOODEN HEADBOARD (Width: 700px, Y: -320 to -60) ── */}
      <g id="headboard">
        {/* Headboard Back Glow / Drop Shadow */}
        <rect
          x="-345"
          y="-315"
          width="690"
          height="250"
          rx="20"
          fill="#000000"
          opacity="0.3"
        />

        {/* Main Headboard Solid Panel */}
        <rect
          x="-340"
          y="-310"
          width="680"
          height="240"
          rx="18"
          fill="url(#headboardWoodGrad)"
          stroke={woodDark}
          strokeWidth="4"
        />

        {/* Headboard Top Cap Rail */}
        <rect
          x="-350"
          y="-322"
          width="700"
          height="22"
          rx="6"
          fill={woodLight}
          stroke={woodDark}
          strokeWidth="3"
        />

        {/* Vertical Decorative Inset Panelling */}
        {[-220, -110, 0, 110, 220].map((xOffset) => (
          <line
            key={xOffset}
            x1={xOffset}
            y1="-295"
            x2={xOffset}
            y2="-90"
            stroke={woodDark}
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.75"
          />
        ))}
      </g>

      {/* ── 2. MATTRESS BASE (Width: 640px, Y: -120 to +300) ── */}
      <g id="mattress">
        {/* Mattress Cushion */}
        <rect
          x="-320"
          y="-110"
          width="640"
          height="390"
          rx="24"
          fill="url(#mattressGrad)"
          stroke={isAbyss ? '#4338ca' : '#cbd5e1'}
          strokeWidth="3.5"
        />
        {/* Fitted Sheet Side Seam Line */}
        <line
          x1="-315"
          y1="-40"
          x2="315"
          y2="-40"
          stroke={isAbyss ? '#6366f1' : '#cbd5e1'}
          strokeWidth="2.5"
          strokeDasharray="14,10"
          opacity="0.6"
        />
      </g>

      {/* ── 3. PLUSH FLUFFY PILLOWS (Propped up against headboard) ── */}
      <g id="pillows">
        {/* Left Pillow */}
        <g transform={`translate(-140, -145) rotate(${ruffledPillows ? -9 : -3})`}>
          <rect
            x="-120"
            y="-65"
            width="240"
            height="130"
            rx="36"
            fill="url(#pillowGrad)"
            stroke={pillowShadow}
            strokeWidth="3.5"
          />
          {/* Pillow center indentation / crease */}
          <path
            d="M -55 -5 Q 0 16 55 -5"
            stroke={pillowShadow}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M -35 -16 Q 0 0 35 -16"
            stroke={isAbyss ? '#6366f1' : '#f1f5f9'}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>

        {/* Right Pillow */}
        <g transform={`translate(140, -145) rotate(${ruffledPillows ? 11 : 3})`}>
          <rect
            x="-120"
            y="-65"
            width="240"
            height="130"
            rx="36"
            fill="url(#pillowGrad)"
            stroke={pillowShadow}
            strokeWidth="3.5"
          />
          {/* Pillow center indentation / crease */}
          <path
            d="M -55 -5 Q 0 16 55 -5"
            stroke={pillowShadow}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M -35 -16 Q 0 0 35 -16"
            stroke={isAbyss ? '#6366f1' : '#f1f5f9'}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>
      </g>
    </g>
  );
};

/**
 * BedForeground: The cozy duvet / blanket, bed frame, footboard, and bed legs.
 * Render this IN FRONT of the MainCharacter.
 */
export const BedForeground: React.FC<{
  variant?: 'tucked' | 'waist' | 'falling' | 'neat';
  theme?: 'night' | 'abyss' | 'zen';
}> = ({ variant = 'tucked', theme = 'night' }) => {
  const isAbyss = theme === 'abyss';

  // Duvet colors: Cozy modern Nordic navy / teal / indigo
  const duvetTop = isAbyss ? '#312e81' : theme === 'zen' ? '#0f766e' : '#1e3a8a';
  const duvetMid = isAbyss ? '#1e1b4b' : theme === 'zen' ? '#115e59' : '#172554';
  const duvetFold = isAbyss ? '#4338ca' : theme === 'zen' ? '#2dd4bf' : '#38bdf8';
  const cuffColor = isAbyss ? '#6366f1' : '#f8fafc';
  const woodDark = isAbyss ? '#1e1b4b' : '#2c1506';
  const woodLight = isAbyss ? '#4338ca' : '#5c3317';

  // Sturdy wooden bed legs & footboard frame (firmly grounded at Y=280 to 350)
  const renderBedBaseAndLegs = () => (
    <g id="bed-base-and-legs">
      {/* Left Bed Leg (rests on floor) */}
      <rect x="-310" y="275" width="30" height="65" rx="6" fill={woodDark} />
      <rect x="-315" y="332" width="40" height="12" rx="3" fill="#140a03" />

      {/* Right Bed Leg (rests on floor) */}
      <rect x="280" y="275" width="30" height="65" rx="6" fill={woodDark} />
      <rect x="275" y="332" width="40" height="12" rx="3" fill="#140a03" />

      {/* Solid Wooden Footboard Rail */}
      <rect
        x="-335"
        y="265"
        width="670"
        height="32"
        rx="8"
        fill={woodLight}
        stroke={woodDark}
        strokeWidth="3.5"
      />
    </g>
  );

  if (variant === 'falling') {
    // Dramatic Slipping Duvet for Scene 2 (Abyss Fall)
    return (
      <g id="duvet-falling">
        {/* Tilted Bed Base & Legs */}
        {renderBedBaseAndLegs()}

        {/* Ruffled Duvet sliding off bed into void */}
        <g transform="translate(0, 30) rotate(-14)">
          <path
            d="M -330 -10 C -220 -35 200 -5 320 20 L 300 270 C 150 290 -180 260 -330 220 Z"
            fill={duvetMid}
            stroke={duvetTop}
            strokeWidth="4"
          />
          {/* Turned down folded cuff */}
          <path
            d="M -330 -10 C -200 15 180 20 320 20 L 310 65 C 170 65 -210 60 -330 35 Z"
            fill={cuffColor}
            stroke={duvetFold}
            strokeWidth="3"
          />
          {/* Dynamic fold lines */}
          <path
            d="M -180 90 Q -60 140 80 110"
            stroke={duvetFold}
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>
      </g>
    );
  }

  if (variant === 'waist') {
    // Duvet bunched comfortably around the waist (Character sitting upright in shock - Scene 3)
    return (
      <g id="duvet-waist">
        {/* Bunched Duvet covering from waist Y=35 down to footboard Y=275 */}
        <path
          d="M -325 35 C -200 15 200 15 325 35 L 325 275 C 200 285 -200 285 -325 275 Z"
          fill={duvetMid}
          stroke={duvetTop}
          strokeWidth="4"
        />
        {/* Fluffy Folded Cuff around waist */}
        <path
          d="M -320 35 C -180 18 180 18 320 35 C 320 75 180 60 -320 75 Z"
          fill={cuffColor}
          stroke={duvetFold}
          strokeWidth="3"
        />
        {/* Organic fabric wrinkles */}
        <path
          d="M -160 110 Q 0 135 160 110"
          stroke={duvetFold}
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M -220 185 Q 0 210 220 185"
          stroke={duvetFold}
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Sturdy Bed Base & Legs */}
        {renderBedBaseAndLegs()}
      </g>
    );
  }

  if (variant === 'neat') {
    // Neat duvet folded along bottom third of bed (Scene 7 - Relaxing/Stretching)
    return (
      <g id="duvet-neat">
        {/* Folded blanket runner across lower bed (Y=120 to Y=275) */}
        <rect
          x="-325"
          y="120"
          width="650"
          height="150"
          rx="16"
          fill={duvetMid}
          stroke={duvetTop}
          strokeWidth="3.5"
        />
        {/* Accent runner fold band */}
        <rect
          x="-325"
          y="120"
          width="650"
          height="35"
          rx="8"
          fill={cuffColor}
          stroke={duvetFold}
          strokeWidth="2.5"
        />
        <line
          x1="-280"
          y1="195"
          x2="280"
          y2="195"
          stroke={duvetFold}
          strokeWidth="3"
          strokeDasharray="18,12"
          opacity="0.6"
        />

        {/* Sturdy Bed Base & Legs */}
        {renderBedBaseAndLegs()}
      </g>
    );
  }

  // Default: 'tucked' — Pulled cozily up to chest (Scene 1 - Sleeping Soundly)
  return (
    <g id="duvet-tucked">
      {/* Main Duvet Covering body up to chest (from Y=-50 down to Y=275, fully hiding feet/legs) */}
      <path
        d="M -325 -50 C -200 -75 200 -75 325 -50 L 325 275 C 200 285 -200 285 -325 275 Z"
        fill={duvetMid}
        stroke={duvetTop}
        strokeWidth="4"
      />
      {/* Soft Folded-over Duvet Cuff (Covering lower chest) */}
      <path
        d="M -320 -50 C -180 -75 180 -75 320 -50 C 315 -10 180 -30 -315 -10 Z"
        fill={cuffColor}
        stroke={duvetFold}
        strokeWidth="3"
      />
      {/* Gentle Blanket Crease Folds */}
      <path
        d="M -180 55 Q 0 85 180 55"
        stroke={duvetFold}
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M -220 155 Q 0 185 220 155"
        stroke={duvetFold}
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Sturdy Bed Base & Legs resting on the floor */}
      {renderBedBaseAndLegs()}
    </g>
  );
};
