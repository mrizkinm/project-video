import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const MorningBedroomBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Subtle morning breeze sway for curtains
  const curtainSway = interpolate(
    Math.sin((frame / fps) * Math.PI * 1.2),
    [-1, 1],
    [-6, 6]
  );

  // Gentle morning sun shimmer
  const sunPulse = interpolate(
    Math.sin((frame / fps) * Math.PI * 1.5),
    [-1, 1],
    [0.9, 1.05]
  );

  // Dust motes floating in sunlight beam
  const mote1Y = interpolate((frame * 1.2) % 120, [0, 120], [0, -80]);
  const mote2Y = interpolate((frame * 0.9 + 40) % 120, [0, 120], [0, -90]);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <svg
        viewBox="0 0 1080 1920"
        style={{
          width: '100%',
          height: '100%',
          fontFamily: '"Plus Jakarta Sans", "Fredoka", sans-serif',
        }}
      >
        <defs>
          {/* Bright, Warm Scandinavian Morning Wall Gradient */}
          <linearGradient id="morningWall" x1="0%" y1="0%" x2="30%" y2="100%">
            <stop offset="0%" stopColor="#fffbeb" />
            <stop offset="50%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#fde68a" />
          </linearGradient>

          {/* Warm Oak Parquet Floor */}
          <linearGradient id="morningFloor" x1="0%" y1="0%" x2="10%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="40%" stopColor="#b45309" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          {/* Crisp Morning Sky outside Window */}
          <linearGradient id="morningSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#7dd3fc" />
            <stop offset="85%" stopColor="#fed7aa" />
            <stop offset="100%" stopColor="#fef08a" />
          </linearGradient>

          {/* Golden Morning Sunbeam Streaming Through Window */}
          <linearGradient id="sunbeamGrad" x1="0%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.45" />
            <stop offset="40%" stopColor="#fef9c3" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#fed7aa" stopOpacity="0" />
          </linearGradient>

          {/* Sun Aura Glow */}
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="35%" stopColor="#fef08a" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>

          {/* Morning Rug Gradient */}
          <radialGradient id="morningRug" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="65%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </radialGradient>
        </defs>

        {/* ── BACK WALL (BRIGHT MORNING ROOM) ── */}
        <rect x="0" y="0" width="1080" height="1180" fill="url(#morningWall)" />
        {/* Soft baseboard wood trim */}
        <rect x="0" y="1165" width="1080" height="15" fill="#92400e" stroke="#78350f" strokeWidth="2" />

        {/* ── SUNBEAM STREAMING FROM WINDOW ACROSS THE ROOM ── */}
        <polygon
          points="80,240 372,240 760,1400 180,1400"
          fill="url(#sunbeamGrad)"
          style={{ mixBlendMode: 'screen' }}
        />

        {/* Floating dust motes in sunlight */}
        <circle cx="340" cy={680 + mote1Y} r="4" fill="#ffffff" opacity="0.6" />
        <circle cx="480" cy={820 + mote2Y} r="3" fill="#ffffff" opacity="0.5" />
        <circle cx="280" cy={920 + mote1Y * 0.8} r="3.5" fill="#ffffff" opacity="0.6" />

        {/* ── WINDOW (LEFT SIDE: BRIGHT SUNNY MORNING) ── */}
        <g transform="translate(80, 220)">
          {/* Window Outer Sill / Frame */}
          <rect x="-12" y="-12" width="316" height="502" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="6" />
          <rect x="0" y="0" width="292" height="478" rx="10" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="6" />

          {/* Morning Sky Box */}
          <rect x="12" y="12" width="268" height="454" rx="6" fill="url(#morningSky)" />

          {/* ☀️ Radiant Morning Sun */}
          <g transform={`translate(100, 110) scale(${sunPulse})`}>
            {/* Glowing outer aura */}
            <circle cx="0" cy="0" r="64" fill="url(#sunGlow)" />
            {/* Bright sun disk */}
            <circle cx="0" cy="0" r="32" fill="#fef08a" stroke="#facc15" strokeWidth="4" />
            {/* Sun Rays */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <line
                key={angle}
                x1={Math.cos((angle * Math.PI) / 180) * 40}
                y1={Math.sin((angle * Math.PI) / 180) * 40}
                x2={Math.cos((angle * Math.PI) / 180) * 54}
                y2={Math.sin((angle * Math.PI) / 180) * 54}
                stroke="#facc15"
                strokeWidth="4"
                strokeLinecap="round"
              />
            ))}
          </g>

          {/* Fluffy morning clouds */}
          <g opacity="0.9">
            <ellipse cx="200" cy="180" rx="35" ry="16" fill="#ffffff" />
            <circle cx="185" cy="172" r="18" fill="#ffffff" />
            <circle cx="215" cy="175" r="14" fill="#ffffff" />

            <ellipse cx="60" cy="280" rx="40" ry="18" fill="#ffffff" opacity="0.8" />
            <circle cx="45" cy="272" r="20" fill="#ffffff" opacity="0.8" />
          </g>

          {/* Fresh Green Tree Leaves Peeking at bottom of window */}
          <g transform="translate(14, 380)">
            <ellipse cx="40" cy="50" rx="50" ry="40" fill="#15803d" />
            <ellipse cx="120" cy="40" rx="60" ry="50" fill="#16a34a" />
            <ellipse cx="200" cy="55" rx="55" ry="45" fill="#22c55e" />
          </g>

          {/* Glass Pane Divider (White Window Mullions) */}
          <rect x="136" y="0" width="20" height="478" fill="#ffffff" />
          <rect x="0" y="234" width="292" height="18" fill="#ffffff" />

          {/* Window Sill */}
          <rect x="-14" y="478" width="320" height="22" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />

          {/* Small Potted Plant on Sill enjoying morning sun */}
          <g transform="translate(235, 465)">
            <rect x="-14" y="-22" width="28" height="22" rx="4" fill="#ea580c" />
            <ellipse cx="0" cy="-26" rx="12" ry="14" fill="#16a34a" />
            <ellipse cx="-10" cy="-24" rx="8" ry="10" fill="#22c55e" />
            <ellipse cx="10" cy="-24" rx="8" ry="10" fill="#4ade80" />
          </g>
        </g>

        {/* ── BREEZY WHITE LINEN CURTAINS ── */}
        <g transform={`translate(0, 220) skewY(${curtainSway * 0.3})`}>
          {/* Left Curtain */}
          <path d="M 70 0 Q 60 240 55 478" stroke="#ffffff" strokeWidth="85" strokeLinecap="round" fill="none" opacity="0.9" />
          <path d="M 60 0 Q 50 240 45 478" stroke="#f1f5f9" strokeWidth="25" strokeLinecap="round" fill="none" opacity="0.6" />
          {/* Right Curtain */}
          <path d="M 390 0 Q 400 240 405 478" stroke="#ffffff" strokeWidth="85" strokeLinecap="round" fill="none" opacity="0.9" />
          <path d="M 400 0 Q 410 240 415 478" stroke="#f1f5f9" strokeWidth="25" strokeLinecap="round" fill="none" opacity="0.6" />
          {/* Wooden Curtain Rod */}
          <line x1="40" y1="0" x2="420" y2="0" stroke="#b45309" strokeWidth="12" strokeLinecap="round" />
        </g>

        {/* ── WALL ART (CENTER): MORNING SUNRISE LANDSCAPE ── */}
        <g transform="translate(440, 240)">
          {/* Frame shadow */}
          <rect x="8" y="8" width="216" height="260" rx="12" fill="#d97706" opacity="0.2" />
          {/* Outer Frame (Warm Birch Wood) */}
          <rect x="0" y="0" width="216" height="260" rx="12" fill="#d97706" stroke="#b45309" strokeWidth="6" />
          {/* Inner White Mat */}
          <rect x="12" y="12" width="192" height="236" rx="8" fill="#ffffff" />
          {/* Artwork: Sunny Morning Hills */}
          <rect x="20" y="20" width="176" height="220" rx="6" fill="#e0f2fe" />
          {/* Golden Sun */}
          <circle cx="108" cy="80" r="28" fill="#fbbf24" opacity="0.9" />
          {/* Rolling Green Hills */}
          <path d="M 20 240 Q 80 140 140 200 Q 170 170 196 240 Z" fill="#86efac" />
          <path d="M 20 240 Q 60 180 120 220 Q 160 190 196 240 Z" fill="#22c55e" />
        </g>

        {/* ── BOOKSHELF (RIGHT TOP) ── */}
        <g transform="translate(725, 290)">
          {/* Shelf back panel */}
          <rect x="-10" y="-130" width="280" height="140" rx="8" fill="#fef3c7" stroke="#fde68a" strokeWidth="3" />
          {/* Wooden Shelf Board */}
          <rect x="-10" y="8" width="280" height="22" rx="5" fill="#b45309" stroke="#92400e" strokeWidth="2" />

          {/* Books in vibrant daytime colors */}
          <rect x="14" y="-118" width="28" height="126" rx="5" fill="#ef4444" />
          <text x="28" y="-55" fontSize="13" fill="#fee2e2" textAnchor="middle" fontWeight="800" transform="rotate(-90, 28, -55)">SAINS</text>

          <rect x="48" y="-128" width="34" height="136" rx="5" fill="#3b82f6" />
          <rect x="54" y="-120" width="22" height="8" rx="2" fill="#dbeafe" />

          <rect x="88" y="-110" width="26" height="118" rx="5" fill="#10b981" />
          <rect x="90" y="-102" width="22" height="6" rx="2" fill="#d1fae5" />

          <rect x="120" y="-125" width="38" height="133" rx="5" fill="#f59e0b" />
          <text x="139" y="-60" fontSize="13" fill="#fef3c7" textAnchor="middle" fontWeight="800" transform="rotate(-90, 139, -60)">KOPI</text>

          <rect x="164" y="-105" width="30" height="113" rx="5" fill="#8b5cf6" />
          <rect x="200" y="-118" width="24" height="126" rx="5" fill="#ec4899" />

          {/* Small Desk Globe */}
          <circle cx="236" cy="-45" r="28" fill="#0284c7" stroke="#0369a1" strokeWidth="3" />
          <ellipse cx="236" cy="-45" rx="28" ry="9" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.6" />
          <line x1="236" y1="-17" x2="236" y2="6" stroke="#475569" strokeWidth="4" />
          <ellipse cx="236" cy="8" rx="16" ry="5" fill="#475569" />
        </g>

        {/* ── BEDSIDE / STUDY TABLE (RIGHT, GROUNDED AT Y=1180) ── */}
        <g transform="translate(620, 1030)">
          {/* Table Surface (Warm oak wood) */}
          <path d="M 0 0 L 460 0 L 460 30 L 0 30 Z" fill="#b45309" stroke="#92400e" strokeWidth="2" />
          <rect x="10" y="30" width="440" height="42" fill="#92400e" />
          <rect x="180" y="48" width="80" height="6" rx="3" fill="#fef08a" />
          {/* Legs */}
          <rect x="25" y="72" width="22" height="78" rx="4" fill="#78350f" />
          <rect x="410" y="72" width="22" height="78" rx="4" fill="#78350f" />

          {/* ⏰ RINGING MORNING ALARM CLOCK (07:00 AM) */}
          <g transform="translate(90, -55)">
            {/* Clock twin bells */}
            <circle cx="-28" cy="-28" r="14" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
            <circle cx="28" cy="-28" r="14" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
            <line x1="-20" y1="-20" x2="-10" y2="-10" stroke="#7f1d1d" strokeWidth="4" />
            <line x1="20" y1="-20" x2="10" y2="-10" stroke="#7f1d1d" strokeWidth="4" />
            {/* Clock body */}
            <circle cx="0" cy="0" r="46" fill="#ef4444" stroke="#991b1b" strokeWidth="4" />
            <circle cx="0" cy="0" r="37" fill="#ffffff" />
            {/* Clock Hands pointing to 07:00 */}
            <line x1="0" y1="0" x2="0" y2="-24" stroke="#0f172a" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="0" y1="0" x2="-16" y2="15" stroke="#0f172a" strokeWidth="4.5" strokeLinecap="round" />
            <circle cx="0" cy="0" r="5" fill="#ef4444" />
            {/* Clock Feet */}
            <line x1="-24" y1="36" x2="-32" y2="48" stroke="#991b1b" strokeWidth="4" strokeLinecap="round" />
            <line x1="24" y1="36" x2="32" y2="48" stroke="#991b1b" strokeWidth="4" strokeLinecap="round" />
            {/* Time Tag */}
            <rect x="-48" y="46" width="96" height="28" rx="14" fill="#0f172a" stroke="#ef4444" strokeWidth="2.5" />
            <text x="0" y="66" fill="#facc15" fontSize="16" fontWeight="900" textAnchor="middle">07:00 AM</text>
          </g>

          {/* ☕ Fresh Coffee French Press / Kettle */}
          <g transform="translate(230, -48)">
            <rect x="-22" y="-40" width="44" height="74" rx="8" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" opacity="0.9" />
            {/* Coffee Liquid inside */}
            <rect x="-18" y="-6" width="36" height="38" rx="4" fill="#78350f" />
            {/* Plunger rod & lid */}
            <rect x="-24" y="-45" width="48" height="8" rx="4" fill="#334155" />
            <line x1="0" y1="-45" x2="0" y2="-62" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
            <circle cx="0" cy="-65" r="7" fill="#334155" />
            {/* Handle */}
            <path d="M 22 -24 Q 42 0 22 18" stroke="#475569" strokeWidth="5" fill="none" />
            {/* Steam */}
            <path d="M 0 -45 Q 6 -62 0 -76" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.65" />
          </g>
        </g>

        {/* ── FLOOR (WARM PARQUET OAK) ── */}
        <rect x="0" y="1180" width="1080" height="740" fill="url(#morningFloor)" />

        {/* Floor Planks Perspective Lines */}
        {[0, 150, 300, 460, 620, 780, 940, 1080].map((x, i) => (
          <line
            key={`plank-${i}`}
            x1={x}
            y1="1180"
            x2={x + (x - 540) * 0.4}
            y2="1920"
            stroke="#5c2606"
            strokeWidth="3"
            opacity="0.4"
          />
        ))}

        {/* ── COZY MORNING WOVEN RUG (CENTER) ── */}
        <ellipse cx="540" cy="1380" rx="420" ry="140" fill="url(#morningRug)" />
        <ellipse cx="540" cy="1380" rx="400" ry="125" fill="none" stroke="#bae6fd" strokeWidth="4" strokeDasharray="14 10" />
        <ellipse cx="540" cy="1380" rx="360" ry="105" fill="#0284c7" opacity="0.8" />
      </svg>
    </div>
  );
};