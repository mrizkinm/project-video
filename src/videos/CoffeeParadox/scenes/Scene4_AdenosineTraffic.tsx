import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';

export const Scene4_AdenosineTraffic: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Traffic buildup count
  const trafficWave = Math.sin((frame / fps) * Math.PI * 3) * 6;

  // Pressure gauge percentage: 25% to 98% gradually over 220 frames (~7.3s)
  const pressure = interpolate(frame, [0, 220], [25, 98], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
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
        {/* ── PRESSURE GAUGE / WARNING METER (Y: 280 | Expanded 780px width) ── */}
        <g transform="translate(540, 280)">
          {/* Flashing Warning Glow */}
          <rect
            x="-400"
            y="-40"
            width="800"
            height="80"
            rx="40"
            fill="#ef4444"
            opacity={0.25 + Math.sin(frame * 0.2) * 0.15}
            filter="blur(10px)"
          />
          {/* Gauge Outer Shell */}
          <rect x="-400" y="-38" width="800" height="76" rx="38" fill="#0f172a" stroke="#ef4444" strokeWidth="5" />
          
          {/* Pressure Bar Fill */}
          <rect
            x="-390"
            y="-28"
            width={(780 * pressure) / 100}
            height="56"
            rx="28"
            fill="url(#pressureGrad)"
          />

          {/* Animated Hazard Diagonal Striped Overlay */}
          <g opacity="0.18">
            {[-350, -280, -210, -140, -70, 0, 70, 140, 210, 280, 350].map((x, i) => (
              <line key={i} x1={x + (frame % 20) * 3.5} y1="-26" x2={x + 35 + (frame % 20) * 3.5} y2="26" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" />
            ))}
          </g>

          <text x="0" y="12" fill="#ffffff" fontSize="34" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
            🚨 TEKANAN CAPEK: {Math.round(pressure)}% 🚨
          </text>
        </g>

        {/* Gradient for Pressure Meter */}
        <defs>
          <linearGradient id="pressureGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
        </defs>

        {/* ── CONNECTING ROADWAY FROM QUEUE TO RECEPTOR ── */}
        <polygon
          points="270,580 380,720 -380,720 -270,580"
          fill="#1e1b4b"
          opacity="0.6"
          stroke="#4338ca"
          strokeWidth="3"
        />

        {/* ── THE CONGESTED RECEPTOR BAY (Y: 530 | Expanded 700px width with comfortable padding) ── */}
        <g transform="translate(540, 530)">
          {/* Receptor Dock */}
          <rect x="-350" y="26" width="700" height="154" rx="32" fill="#0f172a" stroke="#6366f1" strokeWidth="8" />
          
          {/* Lock Hazard Caution Tape (Expanded to 660px x 56px for comfortable text breathing room) */}
          <rect x="-330" y="104" width="660" height="56" rx="28" fill="#dc2626" stroke="#fca5a5" strokeWidth="3.5" />
          <text x="0" y="141" fill="#ffffff" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
            🔒 RESEPTOR TERTUTUP (KAFEIN NYUMBAT)
          </text>

          {/* ⚡ Smug Caffeine sitting comfortably in the slot */}
          <g transform="translate(0, -10) scale(1.25)">
            <polygon
              points="0,-48 44,-24 44,24 0,48 -44,24 -44,-24"
              fill="#facc15"
              stroke="#ca8a04"
              strokeWidth="5.5"
            />
            {/* Sleeping smirk & sunglasses */}
            <circle cx="-15" cy="-8" r="8" fill="#0f172a" />
            <circle cx="15" cy="-8" r="8" fill="#0f172a" />
            <line x1="-8" y1="-8" x2="8" y2="-8" stroke="#0f172a" strokeWidth="5" />
            <path d="M -12 18 Q 0 26 12 18" stroke="#0f172a" strokeWidth="4" fill="none" />
            <rect x="-75" y="-80" width="150" height="34" rx="17" fill="#0f172a" stroke="#facc15" strokeWidth="3" />
            <text x="0" y="-57" fill="#fde047" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
              ⚡ KAFEIN
            </text>
          </g>
        </g>

        {/* ── MASSIVE ADENOSINE QUEUE TRAFFIC (Y: 900 | Expanded 840px width x 360px height) ── */}
        <g transform="translate(540, 900)">
          {/* Highway Asphalt Backdrop */}
          <rect x="-420" y="-120" width="840" height="380" rx="36" fill="#0f172a" stroke="#ec4899" strokeWidth="4" />
          
          {/* Traffic Lane Dividers */}
          <line x1="-380" y1="0" x2="380" y2="0" stroke="#f472b6" strokeWidth="4" strokeDasharray="18 14" opacity="0.4" />
          <line x1="-380" y1="130" x2="380" y2="130" stroke="#f472b6" strokeWidth="4" strokeDasharray="18 14" opacity="0.4" />

          {/* Traffic Signs & Cones on Sides */}
          <g transform="translate(-370, -75)">
            <text x="0" y="10" fontSize="32" textAnchor="middle">🚧</text>
          </g>
          <g transform="translate(370, -75)">
            <text x="0" y="10" fontSize="32" textAnchor="middle">🚧</text>
          </g>
          <g transform="translate(-370, 60)">
            <text x="0" y="10" fontSize="32" textAnchor="middle">🛑</text>
          </g>
          <g transform="translate(370, 60)">
            <text x="0" y="10" fontSize="32" textAnchor="middle">🛑</text>
          </g>

          {/* Row 1 of Tired Molecules (Bumper to Bumper) */}
          {[
            { x: -280, y: -65, delay: 0 },
            { x: -140, y: -65, delay: 15 },
            { x: 0, y: -65, delay: 30 },
            { x: 140, y: -65, delay: 45 },
            { x: 280, y: -65, delay: 60 },
          ].map((item, idx) => (
            <g
              key={`row1-${idx}`}
              transform={`translate(${item.x}, ${item.y + Math.sin((frame + item.delay) * 0.15) * 6}) scale(1.15)`}
            >
              <circle cx="0" cy="0" r="38" fill="#f472b6" stroke="#db2777" strokeWidth="4.5" />
              <path d="M -18 -4 Q -10 -14 -2 -4" stroke="#0f172a" strokeWidth="3.5" fill="none" />
              <path d="M 2 -4 Q 10 -14 18 -4" stroke="#0f172a" strokeWidth="3.5" fill="none" />
              <ellipse cx="0" cy="15" rx="6" ry="9" fill="#be123c" />
              <text x="22" y="-18" fontSize="20">💢</text>
            </g>
          ))}

          {/* Row 2 of Tired Molecules */}
          {[
            { x: -210, y: 65, delay: 20 },
            { x: -70, y: 65, delay: 35 },
            { x: 70, y: 65, delay: 50 },
            { x: 210, y: 65, delay: 65 },
          ].map((item, idx) => (
            <g
              key={`row2-${idx}`}
              transform={`translate(${item.x}, ${item.y + Math.sin((frame + item.delay) * 0.15) * 6}) scale(1.15)`}
            >
              <circle cx="0" cy="0" r="36" fill="#ec4899" stroke="#be185d" strokeWidth="4.5" />
              <path d="M -16 -4 Q -8 -12 0 -4" stroke="#0f172a" strokeWidth="3.5" fill="none" />
              <path d="M 0 -4 Q 8 -12 16 -4" stroke="#0f172a" strokeWidth="3.5" fill="none" />
              <ellipse cx="0" cy="14" rx="5" ry="8" fill="#881337" />
              <text x="-24" y="-16" fontSize="18">😤</text>
            </g>
          ))}

          {/* Row 3: Jam Header / Speech comic bubbles (Enlarged 24px for clear mobile legibility) */}
          <g transform="translate(-150, 190)">
            <rect x="-110" y="-26" width="220" height="52" rx="26" fill="#fef08a" stroke="#ca8a04" strokeWidth="3.5" />
            <text x="0" y="9" fill="#854d0e" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
              📢 MACET PARAH!
            </text>
          </g>
          <g transform="translate(150, 190)">
            <rect x="-110" y="-26" width="220" height="52" rx="26" fill="#fee2e2" stroke="#dc2626" strokeWidth="3.5" />
            <text x="0" y="9" fill="#991b1b" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
              😴 NUMPUK TERUS!
            </text>
          </g>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
