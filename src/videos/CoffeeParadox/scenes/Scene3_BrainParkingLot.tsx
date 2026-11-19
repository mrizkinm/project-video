import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { BrainMascot } from '../../../shared/characters/BrainMascot';

export const Scene3_BrainParkingLot: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Caffeine swoops in from left to receptor dock
  const caffeineX = interpolate(frame, [15, 45], [-350, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const caffeineScale = spring({
    frame: frame - 15,
    fps,
    config: { damping: 11, stiffness: 120 },
  });

  // Adenosine approaches from right but gets blocked
  const adenosineX = interpolate(frame, [0, 30, 45, 80], [350, 150, 160, 170], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Stamp pop
  const stampPop = spring({
    frame: frame - 50,
    fps,
    config: { damping: 9, stiffness: 140 },
  });

  return (
    <AbsoluteFill>
      <ParticleBackground theme="purple" />

      <svg
        viewBox="0 0 1080 1920"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          fontFamily: "'Plus Jakarta Sans', 'Fredoka', sans-serif",
        }}
      >
        {/* Brain Mascot at Top as Traffic Controller (Prominent 1.25x scale) */}
        <g transform="translate(540, 310)">
          <circle cx="0" cy="0" r="140" fill="#818cf8" opacity="0.12" />
          <BrainMascot mood="thinking" scale={1.25} />
        </g>

        {/* Comic Stamp: SLOT DISEROBOT! */}
        {frame > 35 && (
          <g transform={`translate(540, 485) rotate(-3) scale(${Math.max(0, stampPop)})`}>
            <rect x="-260" y="-44" width="520" height="88" rx="26" fill="#0f172a" />
            <rect x="-255" y="-40" width="510" height="80" rx="24" fill="#fef08a" stroke="#eab308" strokeWidth="5.5" />
            <text
              x="0"
              y="14"
              fontSize="36"
              fontWeight="900"
              fill="#854d0e"
              textAnchor="middle"
              fontFamily="'Fredoka', sans-serif"
            >
              🚗💨 SLOT DISEROBOT!
            </text>
          </g>
        )}

        {/* ── PARKING BAY DIAGRAM CONTAINER (Center: Y=830 | Expanded & Rich Layout) ── */}
        <g transform="translate(540, 830)">
          {/* Parking Lot Road Surface Backdrop */}
          <rect x="-420" y="-80" width="840" height="420" rx="36" fill="#0f172a" stroke="#312e81" strokeWidth="4" />
          
          {/* Yellow Road Lane Divider Markings */}
          <line x1="-360" y1="290" x2="360" y2="290" stroke="#facc15" strokeWidth="6" strokeDasharray="24 16" opacity="0.6" />
          <line x1="0" y1="210" x2="0" y2="330" stroke="#facc15" strokeWidth="5" strokeDasharray="16 12" opacity="0.5" />

          {/* Main Receptor Dock (U-shaped docking cradle - Expanded to 660px width) */}
          <rect x="-310" y="40" width="620" height="170" rx="30" fill="#1e1b4b" stroke="#6366f1" strokeWidth="9" />
          {/* Dock Slot Opening (Target cradle) */}
          <path
            d="M -140 40 L -140 -15 C -140 -60, 140 -60, 140 -15 L 140 40 Z"
            fill="#0f172a"
            stroke="#a5b4fc"
            strokeWidth="6"
          />
          {/* Neon Slot Bay Label */}
          <rect x="-215" y="142" width="430" height="52" rx="26" fill="#0f172a" stroke="#818cf8" strokeWidth="3.5" />
          <text x="0" y="177" fill="#c7d2fe" fontSize="28" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
            🅿️ RESEPTOR OTAK (SLOT A-1)
          </text>

          {/* ⚡ CAFFEINE MOLECULE (Hero hijacker, parks snugly in slot) */}
          <g transform={`translate(${caffeineX}, -5) scale(${Math.max(0, caffeineScale) * 1.35})`}>
            {/* Hexagon Molecule Body */}
            <polygon
              points="0,-58 52,-29 52,29 0,58 -52,29 -52,-29"
              fill="#facc15"
              stroke="#ca8a04"
              strokeWidth="6"
            />
            {/* Sunglasses / Confident Smug Face */}
            <circle cx="-18" cy="-10" r="9" fill="#0f172a" />
            <circle cx="18" cy="-10" r="9" fill="#0f172a" />
            <line x1="-9" y1="-10" x2="9" y2="-10" stroke="#0f172a" strokeWidth="5.5" />
            <path d="M -14 20 Q 0 30 14 20" stroke="#0f172a" strokeWidth="4.5" fill="none" />
            {/* Label Tag */}
            <rect x="-80" y="-98" width="160" height="38" rx="19" fill="#0f172a" stroke="#facc15" strokeWidth="3" />
            <text x="0" y="-72" fill="#fde047" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
              ⚡ KAFEIN
            </text>
          </g>

          {/* 😴 ADENOSINE MOLECULE (Tired natural sleep chemical, blocked outside) */}
          <g transform={`translate(${adenosineX + 90}, -5) scale(1.35)`}>
            {/* Pink Tired Blob Body */}
            <circle cx="0" cy="0" r="54" fill="#f472b6" stroke="#db2777" strokeWidth="6" />
            {/* Sleepy droopy eyes */}
            <path d="M -26 -6 Q -18 -18 -10 -6" stroke="#0f172a" strokeWidth="4.5" fill="none" />
            <path d="M 10 -6 Q 18 -18 26 -6" stroke="#0f172a" strokeWidth="4.5" fill="none" />
            <ellipse cx="0" cy="18" rx="8" ry="12" fill="#be123c" />
            {/* Label Tag */}
            <rect x="-85" y="-98" width="170" height="38" rx="19" fill="#0f172a" stroke="#f472b6" strokeWidth="3" />
            <text x="0" y="-72" fill="#fbcfe8" fontSize="23" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
              😴 ADENOSIN
            </text>

            {/* Blocked Stop Sign Badge */}
            <g transform="translate(62, -22)">
              <circle cx="0" cy="0" r="26" fill="#ef4444" stroke="#ffffff" strokeWidth="3.5" />
              <text x="0" y="9" fill="#ffffff" fontSize="26" fontWeight="900" textAnchor="middle">
                ✋
              </text>
            </g>
          </g>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
