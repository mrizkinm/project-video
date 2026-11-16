import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const CozyBedroomBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Warm lamp flicker
  const lampFlicker = interpolate(
    Math.sin((frame / fps) * Math.PI * 2.8) + Math.sin((frame / fps) * Math.PI * 5.1) * 0.3,
    [-1.3, 1.3],
    [0.82, 1.0]
  );

  // Moon subtle glow pulse
  const moonGlow = interpolate(
    Math.sin((frame / fps) * Math.PI * 0.6),
    [-1, 1],
    [0.75, 1.0]
  );

  // Stars twinkling
  const star1 = interpolate(Math.sin((frame / fps) * Math.PI * 2.4 + 0.5), [-1, 1], [0.3, 1.0]);
  const star2 = interpolate(Math.sin((frame / fps) * Math.PI * 1.8 + 1.2), [-1, 1], [0.2, 0.9]);
  const star3 = interpolate(Math.sin((frame / fps) * Math.PI * 3.1 + 2.0), [-1, 1], [0.4, 1.0]);
  const star4 = interpolate(Math.sin((frame / fps) * Math.PI * 2.0 + 0.8), [-1, 1], [0.1, 0.8]);

  // Curtain gentle sway
  const curtainSway = interpolate(
    Math.sin((frame / fps) * Math.PI * 0.8),
    [-1, 1],
    [-8, 8]
  );

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <svg viewBox="0 0 1080 1920" style={{ width: '100%', height: '100%' }}>
        <defs>
          {/* Rich deep night wall gradient */}
          <linearGradient id="bedroomWall2" x1="0%" y1="0%" x2="20%" y2="100%">
            <stop offset="0%" stopColor="#0a0f1e" />
            <stop offset="45%" stopColor="#12163a" />
            <stop offset="100%" stopColor="#0d1534" />
          </linearGradient>

          {/* Warm parquet floor */}
          <linearGradient id="woodFloor2" x1="0%" y1="0%" x2="10%" y2="100%">
            <stop offset="0%" stopColor="#3b2008" />
            <stop offset="60%" stopColor="#2a1506" />
            <stop offset="100%" stopColor="#180d04" />
          </linearGradient>

          {/* Lamp warm cone */}
          <radialGradient id="lampCone" cx="30%" cy="0%" r="80%">
            <stop offset="0%" stopColor="#fef3c7" stopOpacity={0.72 * lampFlicker} />
            <stop offset="55%" stopColor="#fbbf24" stopOpacity={0.3 * lampFlicker} />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>

          {/* Floor lamp pool */}
          <radialGradient id="lampPool" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef3c7" stopOpacity={0.4 * lampFlicker} />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </radialGradient>

          {/* Window moonlight */}
          <radialGradient id="moonBeam" cx="50%" cy="10%" r="70%">
            <stop offset="0%" stopColor="#e0f2fe" stopOpacity={0.25 * moonGlow} />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>

          {/* Rug gradient */}
          <radialGradient id="rugGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#312e81" />
            <stop offset="70%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#14123a" />
          </radialGradient>

          {/* Wall ambient glow (from lamp) */}
          <radialGradient id="wallAmb" cx="85%" cy="65%" r="40%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.18 * lampFlicker} />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>

          {/* TV glow (blue-ish) */}
          <radialGradient id="tvGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── BACK WALL ── */}
        <rect x="0" y="0" width="1080" height="1310" fill="url(#bedroomWall2)" />

        {/* Wall ambient glow from lamp */}
        <ellipse cx="900" cy="1200" rx="460" ry="380" fill="url(#wallAmb)" />

        {/* ── WINDOW (LEFT) ── */}
        <g transform="translate(80, 220)">
          {/* Window outer frame with sill */}
          <rect x="-12" y="-12" width="316" height="502" rx="6"
            fill="#1a1f2e" stroke="#2d3348" strokeWidth="6" />

          {/* Window frame */}
          <rect x="0" y="0" width="292" height="478" rx="12"
            fill="#08101e" stroke="#374151" strokeWidth="10" />

          {/* Glass panes with subtle reflection */}
          <rect x="14" y="14" width="122" height="216" rx="6" fill="#070f1d" opacity="0.95" />
          <rect x="156" y="14" width="122" height="216" rx="6" fill="#070f1d" opacity="0.95" />
          <rect x="14" y="248" width="122" height="216" rx="6" fill="#070f1d" opacity="0.95" />
          <rect x="156" y="248" width="122" height="216" rx="6" fill="#070f1d" opacity="0.95" />

          {/* Night sky inside window */}
          <rect x="14" y="14" width="264" height="450" rx="6"
            fill="#040c18" opacity="0.9" />

          {/* Moon */}
          <circle cx="90" cy="85" r="38" fill="#fef9c3" opacity={moonGlow} />
          <circle cx="104" cy="76" r="32" fill="#040c18" />
          {/* Moon craters */}
          <circle cx="68" cy="94" r="6" fill="#fef08a" opacity="0.3" />
          <circle cx="80" cy="78" r="4" fill="#fef08a" opacity="0.2" />

          {/* Stars inside window */}
          <circle cx="200" cy="55" r="4" fill="#ffffff" opacity={star1} />
          <circle cx="240" cy="110" r="3" fill="#ffffff" opacity={star2} />
          <circle cx="60" cy="320" r="3.5" fill="#ffffff" opacity={star3} />
          <circle cx="210" cy="380" r="2.5" fill="#ffffff" opacity={star4} />
          <circle cx="145" cy="175" r="2" fill="#bae6fd" opacity={star1 * 0.7} />
          <circle cx="265" cy="295" r="3" fill="#ffffff" opacity={star2 * 0.8} />

          {/* Moonlight glow through glass */}
          <rect x="14" y="14" width="264" height="450" rx="6"
            fill="url(#moonBeam)" />

          {/* Window cross divider */}
          <rect x="134" y="0" width="24" height="478" fill="#374151" />
          <rect x="0" y="232" width="292" height="20" fill="#374151" />

          {/* Window sill */}
          <rect x="-14" y="478" width="320" height="22" rx="4" fill="#1f2937" />

          {/* Small decorative potted succulent on sill */}
          <g transform="translate(240, 465)">
            <ellipse cx="0" cy="0" rx="22" ry="8" fill="#78350f" />
            <rect x="-14" y="-20" width="28" height="20" rx="4" fill="#854d0e" />
            <ellipse cx="0" cy="-22" rx="10" ry="12" fill="#15803d" />
            <line x1="0" y1="-30" x2="0" y2="-22" stroke="#166534" strokeWidth="4" />
          </g>
        </g>

        {/* Curtains (animated gentle sway) */}
        <g transform={`translate(0, 220) skewY(${curtainSway * 0.3})`}>
          {/* Left curtain */}
          <path d="M 70 0 Q 60 240 55 478" stroke="#1e3a5f"
            strokeWidth="90" strokeLinecap="round" fill="none" opacity="0.85" />
          <path d="M 60 0 Q 48 240 42 478" stroke="#1a3252"
            strokeWidth="30" strokeLinecap="round" fill="none" opacity="0.5" />
          {/* Right curtain */}
          <path d="M 390 0 Q 400 240 405 478" stroke="#1e3a5f"
            strokeWidth="90" strokeLinecap="round" fill="none" opacity="0.85" />
          <path d="M 400 0 Q 412 240 418 478" stroke="#1a3252"
            strokeWidth="30" strokeLinecap="round" fill="none" opacity="0.5" />
          {/* Curtain rod */}
          <line x1="40" y1="0" x2="420" y2="0" stroke="#374151" strokeWidth="14"
            strokeLinecap="round" />
        </g>

        {/* ── WALL ART (CENTER) ── more stylish */}
        <g transform="translate(440, 240)">
          {/* Frame shadow */}
          <rect x="8" y="8" width="216" height="260" rx="12" fill="#000000" opacity="0.4" />
          {/* Outer frame */}
          <rect x="0" y="0" width="216" height="260" rx="12"
            fill="#b45309" stroke="#92400e" strokeWidth="8" />
          {/* Inner mat */}
          <rect x="12" y="12" width="192" height="236" rx="8" fill="#fef3c7" />
          {/* Artwork — minimal mountain landscape */}
          <rect x="12" y="12" width="192" height="236" rx="8" fill="#0c1a35" />
          {/* Sky gradient inside frame */}
          <rect x="12" y="12" width="192" height="140" rx="8" fill="#0f2855" opacity="0.9" />
          {/* Stars in artwork */}
          <circle cx="60" cy="45" r="2" fill="#ffffff" opacity="0.8" />
          <circle cx="120" cy="30" r="2.5" fill="#ffffff" opacity="0.9" />
          <circle cx="175" cy="55" r="2" fill="#bae6fd" opacity="0.7" />
          <circle cx="90" cy="70" r="1.5" fill="#ffffff" opacity="0.6" />
          {/* Mountains */}
          <polygon points="12,248 72,120 132,248" fill="#1d4ed8" />
          <polygon points="90,248 160,148 230,248" fill="#1e40af" />
          <polygon points="40,248 95,165 150,248" fill="#1e3a8a" />
          {/* Snow caps */}
          <polygon points="72,120 60,148 84,148" fill="#f8fafc" />
          <polygon points="160,148 148,172 172,172" fill="#e2e8f0" />
          {/* Reflection in lake (bottom) */}
          <rect x="12" y="210" width="192" height="38" rx="0" fill="#0c1a35" opacity="0.6" />
          <line x1="40" y1="225" x2="180" y2="225" stroke="#38bdf8"
            strokeWidth="2" opacity="0.3" />
        </g>

        {/* ── BOOKSHELF (RIGHT) ── */}
        <g transform="translate(725, 290)">
          {/* Shelf back panel */}
          <rect x="-10" y="-130" width="280" height="140" rx="8"
            fill="#1c0f06" stroke="#2c1a0e" strokeWidth="4" />
          {/* Shelf board */}
          <rect x="-10" y="8" width="280" height="22" rx="5" fill="#5c2d0e"
            stroke="#3f1f08" strokeWidth="3" />

          {/* Books — various widths and heights */}
          <rect x="12" y="-118" width="28" height="126" rx="5" fill="#dc2626" />
          <text x="26" y="-55" fontSize="16" fill="#fecaca" textAnchor="middle"
            fontWeight="800" transform="rotate(-90, 26, -55)">脳</text>

          <rect x="46" y="-128" width="34" height="136" rx="5" fill="#2563eb" />
          <rect x="52" y="-120" width="22" height="8" rx="2" fill="#93c5fd" />

          <rect x="86" y="-110" width="26" height="118" rx="5" fill="#16a34a" />
          <rect x="88" y="-102" width="22" height="6" rx="2" fill="#bbf7d0" />

          <rect x="118" y="-125" width="38" height="133" rx="5" fill="#d97706" />
          <text x="137" y="-60" fontSize="14" fill="#fef3c7" textAnchor="middle"
            fontWeight="700" transform="rotate(-90, 137, -60)">PSY</text>

          <rect x="162" y="-105" width="30" height="113" rx="5" fill="#7c3aed" />
          <rect x="164" y="-97" width="26" height="6" rx="2" fill="#c4b5fd" />

          <rect x="198" y="-118" width="24" height="126" rx="5" fill="#be185d" />

          {/* Small globe on shelf */}
          <circle cx="234" cy="-45" r="30" fill="#0369a1" stroke="#075985" strokeWidth="4" />
          <ellipse cx="234" cy="-45" rx="30" ry="10" fill="none"
            stroke="#0ea5e9" strokeWidth="2" opacity="0.6" />
          <ellipse cx="234" cy="-45" rx="12" ry="30" fill="none"
            stroke="#0ea5e9" strokeWidth="2" opacity="0.4" />
          {/* Globe base */}
          <line x1="234" y1="-15" x2="234" y2="6" stroke="#374151" strokeWidth="5" />
          <ellipse cx="234" cy="8" rx="18" ry="6" fill="#374151" />
        </g>

        {/* ── DESK + LAPTOP (RIGHT SIDE) ── */}
        <g transform="translate(760, 1020)">
          {/* Desk surface with perspective */}
          <path d="M -40 0 L 340 0 L 340 36 L -40 36 Z" fill="#3d1f08" />
          <rect x="-40" y="36" width="380" height="260" fill="#2c1506" />
          {/* Desk legs */}
          <rect x="-20" y="296" width="20" height="120" rx="6" fill="#1a0d04" />
          <rect x="300" y="296" width="20" height="120" rx="6" fill="#1a0d04" />
          {/* Desk edge highlight */}
          <line x1="-40" y1="0" x2="340" y2="0" stroke="#6b3215" strokeWidth="4" />

          {/* Laptop */}
          <rect x="20" y="-55" width="220" height="140" rx="10"
            fill="#1e293b" stroke="#334155" strokeWidth="5" />
          {/* Screen */}
          <rect x="30" y="-45" width="200" height="118" rx="6" fill="#0c1a2e" />
          {/* TV glow on screen */}
          <rect x="30" y="-45" width="200" height="118" rx="6" fill="url(#tvGlow)" />
          {/* Code lines on screen */}
          <rect x="40" y="-35" width="80" height="8" rx="2" fill="#38bdf8" opacity="0.6" />
          <rect x="40" y="-22" width="130" height="8" rx="2" fill="#34d399" opacity="0.5" />
          <rect x="40" y="-9" width="60" height="8" rx="2" fill="#f472b6" opacity="0.5" />
          <rect x="40" y="4" width="110" height="8" rx="2" fill="#38bdf8" opacity="0.4" />
          <rect x="40" y="17" width="90" height="8" rx="2" fill="#a3e635" opacity="0.5" />
          {/* Laptop hinge */}
          <rect x="20" y="80" width="220" height="12" rx="4" fill="#0f172a" />
          {/* Laptop keyboard base */}
          <rect x="20" y="88" width="220" height="20" rx="4" fill="#1e293b" />

          {/* Coffee mug */}
          <g transform="translate(260, -20)">
            <rect x="-18" y="0" width="38" height="42" rx="8" fill="#e2e8f0"
              stroke="#94a3b8" strokeWidth="3" />
            <path d="M 20 10 Q 36 10 36 25 Q 36 40 20 40"
              fill="none" stroke="#94a3b8" strokeWidth="5" />
            {/* Coffee */}
            <ellipse cx="1" cy="4" rx="15" ry="5" fill="#6b3f24" />
            {/* Steam */}
            <path d="M -5 -4 Q -2 -18 -5 -28" stroke="#94a3b8"
              strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4" />
            <path d="M 7 -4 Q 10 -16 7 -26" stroke="#94a3b8"
              strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4" />
          </g>
        </g>

        {/* ── LAMP on bedside table ── */}
        <g transform="translate(804, 1095)">
          {/* Table */}
          <rect x="0" y="110" width="195" height="210" rx="12" fill="#3b1a07" />
          <rect x="0" y="108" width="195" height="16" rx="6" fill="#5c2d0e" />

          {/* Lamp base disc */}
          <ellipse cx="97" cy="104" rx="44" ry="13" fill="#94a3b8" />
          {/* Lamp pole - curved */}
          <path d="M 97 104 Q 112 54 68 10" stroke="#64748b"
            strokeWidth="14" fill="none" strokeLinecap="round" />
          {/* Lampshade */}
          <path d="M 22 -24 Q 68 -50 115 -24 L 125 42 Q 68 60 12 42 Z"
            fill="#fef3c7" stroke="#fde68a" strokeWidth="4" />
          <path d="M 32 -20 Q 68 -40 106 -20" stroke="#fde68a"
            strokeWidth="6" fill="none" opacity="0.5" />

          {/* Light cone emanating from shade */}
          <path d="M 22 42 L 125 42 L 280 480 L -120 480 Z"
            fill="url(#lampCone)" />

          {/* Pool of light on table surface */}
          <ellipse cx="97" cy="118" rx="90" ry="22" fill="url(#lampPool)" />

          {/* Book on table */}
          <g transform="translate(10, 130)">
            <rect x="0" y="0" width="80" height="58" rx="4" fill="#1e3a8a" />
            <rect x="0" y="0" width="8" height="58" rx="2" fill="#1e40af" />
            <rect x="12" y="10" width="55" height="6" rx="2" fill="#93c5fd" opacity="0.7" />
            <rect x="12" y="22" width="40" height="4" rx="2" fill="#93c5fd" opacity="0.4" />
          </g>

          {/* Phone with notification glow */}
          <g transform="translate(115, 125)">
            <rect x="0" y="0" width="50" height="85" rx="10"
              fill="#0f172a" stroke="#334155" strokeWidth="3" />
            <rect x="4" y="10" width="42" height="62" rx="6" fill="#1e293b" />
            {/* Notification dot */}
            <circle cx="42" cy="6" r="6" fill="#ef4444" />
          </g>
        </g>

        {/* ── FLOOR ── */}
        <rect x="0" y="1310" width="1080" height="610" fill="url(#woodFloor2)" />

        {/* Floor plank lines (perspective) */}
        {[1430, 1570, 1720, 1860].map((y, i) => (
          <line key={i} x1="0" y1={y} x2="1080" y2={y}
            stroke="#1a0d04" strokeWidth={i === 0 ? 5 : 3} opacity="0.7" />
        ))}
        {[180, 400, 580, 720, 900].map((x, i) => (
          <line key={i} x1={x + 20} y1="1310" x2={x - 20} y2="1920"
            stroke="#1a0d04" strokeWidth="3" opacity="0.5" />
        ))}

        {/* Floor sheen from lamp */}
        <ellipse cx="900" cy="1540" rx="280" ry="80"
          fill="#fef3c7" opacity={0.07 * lampFlicker} />

        {/* ── COZY RUG ── */}
        <ellipse cx="430" cy="1570" rx="380" ry="130" fill="url(#rugGrad)" />
        <ellipse cx="430" cy="1570" rx="340" ry="108"
          fill="none" stroke="#4338ca" strokeWidth="8" strokeDasharray="18,10" />
        <ellipse cx="430" cy="1570" rx="290" ry="88"
          fill="none" stroke="#6366f1" strokeWidth="4" strokeDasharray="8,14" opacity="0.5" />
        {/* Rug pattern dots */}
        {[[-150, 0], [0, -40], [150, 0], [0, 40], [-75, -30], [75, -30], [-75, 30], [75, 30]].map(([dx, dy], i) => (
          <circle key={i} cx={430 + dx} cy={1570 + dy} r="10"
            fill="#818cf8" opacity="0.3" />
        ))}
      </svg>
    </div>
  );
};
