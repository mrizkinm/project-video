import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene2_CrashDilemma: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Clock hands spinning fast (20 minutes passing)
  const clockSpin = frame * 18;

  // Battery blink
  const batteryBlink = Math.sin((frame / fps) * Math.PI * 6) > 0 ? 1 : 0.25;

  // Card pop
  const cardPop = spring({
    frame: frame - 8,
    fps,
    config: { damping: 9, stiffness: 130 },
  });

  return (
    <AbsoluteFill>
      <ParticleBackground theme="amber" />

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
        {/* 🧠 Holographic Brain Receptor Scanner (Top Center: Y=315 | Clean clearance above head) */}
        <g transform="translate(540, 315)">
          {/* Scanning Beam pointing to character head */}
          <polygon
            points="-180,50 180,50 90,280 -90,280"
            fill="url(#scanBeamGrad)"
            opacity={0.3 + Math.sin(frame * 0.15) * 0.15}
          />
          {/* Holographic Ring */}
          <circle cx="0" cy="0" r="95" fill="#1e1b4b" stroke="#818cf8" strokeWidth="4" strokeDasharray="12 6" />
          <circle cx="0" cy="0" r="82" fill="#0f172a" stroke="#6366f1" strokeWidth="3" />
          {/* Stylized Brain Icon with pulsing receptor nodes */}
          <text x="0" y="24" fontSize="72" textAnchor="middle">
            🧠
          </text>
          {/* Pulsing Receptor Node Markers */}
          <circle cx="-35" cy="-10" r="8" fill="#ec4899" stroke="#ffffff" strokeWidth="2" opacity={Math.sin(frame * 0.2) > 0 ? 1 : 0.4} />
          <circle cx="35" cy="-10" r="8" fill="#facc15" stroke="#ffffff" strokeWidth="2" opacity={Math.sin(frame * 0.2 + 2) > 0 ? 1 : 0.4} />
          <circle cx="0" cy="28" r="8" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" opacity={Math.sin(frame * 0.2 + 4) > 0 ? 1 : 0.4} />

          {/* Scanner Badge */}
          <rect x="-155" y="85" width="310" height="50" rx="25" fill="#0f172a" stroke="#818cf8" strokeWidth="3.5" />
          <text x="0" y="119" fill="#c7d2fe" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
            🔬 RESEPTOR OTAK
          </text>
        </g>

        {/* Scan Beam Gradient */}
        <defs>
          <linearGradient id="scanBeamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ⏱️ Left: Fast Spinning Clock Widget (Positioned closer to character shoulder) */}
        <g transform="translate(260, 680)">
          {/* Subtle Glow backdrop */}
          <circle cx="0" cy="0" r="115" fill="#f59e0b" opacity="0.14" />
          {/* Clock Outer Rim */}
          <circle cx="0" cy="0" r="98" fill="#0f172a" stroke="#f59e0b" strokeWidth="8" />
          <circle cx="0" cy="0" r="82" fill="#1e293b" />
          {/* Hour & Minute Hands */}
          <line
            x1="0"
            y1="0"
            x2={Math.cos((clockSpin * Math.PI) / 180) * 56}
            y2={Math.sin((clockSpin * Math.PI) / 180) * 56}
            stroke="#ffffff"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2={Math.cos(((clockSpin / 12) * Math.PI) / 180) * 36}
            y2={Math.sin(((clockSpin / 12) * Math.PI) / 180) * 36}
            stroke="#f59e0b"
            strokeWidth="7.5"
            strokeLinecap="round"
          />
          <circle cx="0" cy="0" r="8" fill="#facc15" />

          {/* Time Passed Label below clock */}
          <rect x="-105" y="115" width="210" height="52" rx="26" fill="#0f172a" stroke="#f59e0b" strokeWidth="3.5" />
          <text x="0" y="150" fill="#facc15" fontSize="26" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
            ⏱️ 20 MENIT
          </text>
        </g>

        {/* 🪫 Right: Low Battery Indicator Widget (Positioned closer to character shoulder) */}
        <g transform="translate(820, 680)">
          {/* Subtle Glow backdrop */}
          <circle cx="0" cy="0" r="115" fill="#ef4444" opacity="0.14" />

          {/* Battery Box */}
          <g opacity={batteryBlink}>
            <rect x="-90" y="-38" width="160" height="76" rx="18" fill="#0f172a" stroke="#ef4444" strokeWidth="5.5" />
            <rect x="70" y="-15" width="16" height="30" rx="4" fill="#ef4444" />
            {/* 5% Red Charge bar */}
            <rect x="-80" y="-28" width="24" height="56" rx="8" fill="#ef4444" />
            <text x="14" y="13" fill="#ef4444" fontSize="30" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
              5%
            </text>
          </g>

          {/* Label below battery */}
          <rect x="-105" y="115" width="210" height="52" rx="26" fill="#0f172a" stroke="#ef4444" strokeWidth="3.5" />
          <text x="0" y="150" fill="#fca5a5" fontSize="25" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
            🪫 LEMES
          </text>
        </g>

        {/* Confused Hero Character scratching head (Prominent 1.6x scale) */}
        <g transform="translate(540, 960)">
          <MainCharacter mood="confused" sweatDrop={true} scale={1.6} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
