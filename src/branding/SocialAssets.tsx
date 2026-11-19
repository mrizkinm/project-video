import React, { useState, useEffect } from 'react';
import { AbsoluteFill, staticFile, delayRender, continueRender } from 'remotion';
import { MainCharacter } from '../shared/characters/MainCharacter';
import { BrainMascot } from '../shared/characters/BrainMascot';

// =========================================================================
// 1. YOUTUBE CHANNEL BANNER (2560 x 1440 px)
// Safe Area (Mobile & Desktop guaranteed): 1546 x 423 px (Center X=1280, Y=720)
// =========================================================================
export const YouTubeBanner: React.FC = () => {
  const [handle] = useState(() => delayRender('load-fonts'));

  useEffect(() => {
    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(() => {
        continueRender(handle);
      }).catch(() => {
        continueRender(handle);
      });
    } else {
      continueRender(handle);
    }
  }, [handle]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#050811',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Plus Jakarta Sans', 'Fredoka', 'Poppins', sans-serif",
      }}
    >
      <svg viewBox="0 0 2560 1440" style={{ width: '100%', height: '100%' }}>
        <defs>
          {/* Embedded Local Fonts - 100% Reliable & Offline */}
          <style>{`
            @font-face {
              font-family: 'Fredoka';
              src: url('${staticFile('fonts/Fredoka.ttf')}') format('truetype');
              font-weight: 100 900;
              font-style: normal;
              font-display: block;
            }
            @font-face {
              font-family: 'Plus Jakarta Sans';
              src: url('${staticFile('fonts/PlusJakartaSans.ttf')}') format('truetype');
              font-weight: 200 800;
              font-style: normal;
              font-display: block;
            }
            @font-face {
              font-family: 'Poppins';
              src: url('${staticFile('fonts/Poppins-Bold.ttf')}') format('truetype');
              font-weight: 700;
              font-style: normal;
              font-display: block;
            }
            @font-face {
              font-family: 'Poppins';
              src: url('${staticFile('fonts/Poppins-Black.ttf')}') format('truetype');
              font-weight: 900;
              font-style: normal;
              font-display: block;
            }
          `}</style>

          {/* Deep Navy TV / Full Canvas Background */}
          <radialGradient id="ytBgGrad" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#111c33" />
            <stop offset="45%" stopColor="#0a1020" />
            <stop offset="100%" stopColor="#03060d" />
          </radialGradient>

          {/* Safe Area Inner Glow */}
          <radialGradient id="bannerSafeGlow" cx="68%" cy="50%" r="45%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#0284c7" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="bulbGlowBanner" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fde047" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="pahamTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          <linearGradient id="cyanTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          {/* Clip path for the central safe area character so it integrates smoothly */}
          <clipPath id="bannerSafeClip" clipPathUnits="userSpaceOnUse">
            <rect x="0" y="508" width="2560" height="424" />
          </clipPath>
        </defs>

        {/* ── 1. FULL CANVAS BACKGROUND (FOR 4K / SMART TV) ── */}
        <rect x="0" y="0" width="2560" height="1440" fill="url(#ytBgGrad)" />

        {/* TV Atmosphere: Subtle Science Constellations in TV margins */}
        <g stroke="#38bdf8" strokeWidth="1.5" opacity="0.15">
          <line x1="320" y1="240" x2="680" y2="180" />
          <line x1="680" y1="180" x2="900" y2="340" />
          <line x1="1680" y1="200" x2="2020" y2="160" />
          <line x1="2020" y1="160" x2="2280" y2="320" />
          <line x1="420" y1="1200" x2="850" y2="1320" />
          <line x1="1720" y1="1280" x2="2150" y2="1180" />
        </g>
        <g fill="#38bdf8" opacity="0.4">
          <circle cx="320" cy="240" r="6" />
          <circle cx="680" cy="180" r="8" />
          <circle cx="900" cy="340" r="5" />
          <circle cx="1680" cy="200" r="7" />
          <circle cx="2020" cy="160" r="9" />
          <circle cx="2280" cy="320" r="6" />
          <circle cx="420" cy="1200" r="7" />
          <circle cx="850" cy="1320" r="8" />
          <circle cx="1720" cy="1280" r="6" />
          <circle cx="2150" cy="1180" r="8" />
        </g>

        {/* ── 2. DESKTOP / MOBILE CORE SAFE ZONE (Y: 508 to 932 | Height: 424px) ── */}
        {/* Soft background glow within safe zone */}
        <rect x="0" y="508" width="2560" height="424" fill="#090f1d" opacity="0.75" />
        <rect x="507" y="508" width="1546" height="424" fill="url(#bannerSafeGlow)" />

        {/* Subtle grid lines in safe area */}
        <g stroke="#1e293b" strokeWidth="1.5" opacity="0.4">
          {[550, 650, 750, 850].map((y) => (
            <line key={y} x1="507" y1={y} x2="2053" y2={y} />
          ))}
          {[700, 900, 1100, 1300, 1500, 1700, 1900].map((x) => (
            <line key={x} x1={x} y1="508" x2={x} y2="932" />
          ))}
        </g>

        {/* Safe Area Top and Bottom Trim Borders */}
        <line x1="0" y1="508" x2="2560" y2="508" stroke="#1e293b" strokeWidth="2" />
        <line x1="0" y1="932" x2="2560" y2="932" stroke="#1e293b" strokeWidth="2" />

        {/* ── 3. LEFT CONTENT: BRAND TYPOGRAPHY & TAGLINE (X: 540 to 1400) ── */}
        <g transform="translate(540, 565)">
          {/* Top Pill Category Badge - Generously sized with ample internal breathing room */}
          <g transform="translate(0, 0)">
            <rect
              x="0"
              y="0"
              width="430"
              height="48"
              rx="24"
              fill="rgba(56, 189, 248, 0.12)"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />
            <text
              x="215"
              y="25"
              fill="#38bdf8"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontSize="14"
              fontWeight="800"
              letterSpacing="2.2"
              textAnchor="middle"
              dominantBaseline="central"
            >
              ✨ POP-SCIENCE & HUMAN BEHAVIOR
            </text>
          </g>

          {/* Main Giant Channel Title - Friendly Pop-Science Typography */}
          <g transform="translate(0, 130)">
            <text
              x="0"
              y="0"
              fill="#ffffff"
              fontFamily="'Fredoka', 'Poppins', sans-serif"
              fontSize="80"
              fontWeight="700"
              letterSpacing="1"
            >
              TIBA-TIBA{' '}
              <tspan fill="url(#pahamTextGrad)">PAHAM</tspan>
            </text>
          </g>

          {/* Punchy Value Tagline */}
          <g transform="translate(0, 192)">
            <text
              x="0"
              y="0"
              fill="#cbd5e1"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontSize="23"
              fontWeight="600"
            >
              Bedah sains, psikologi, & misteri tubuh sehari-hari biar kamu langsung{' '}
              <tspan fill="#fde047" fontWeight="800">paham!</tspan>
            </text>
          </g>

          {/* Badges Bar (Schedule + Social Handle) */}
          <g transform="translate(0, 250)">
            {/* Upload Schedule Badge */}
            <rect x="0" y="0" width="250" height="44" rx="22" fill="#facc15" />
            <text
              x="125"
              y="23"
              fill="#000000"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontSize="13.5"
              fontWeight="800"
              letterSpacing="0.8"
              textAnchor="middle"
              dominantBaseline="central"
            >
              🎬 VIDEO BARU TIAP MINGGU
            </text>

            {/* Handle Tag */}
            <rect
              x="268"
              y="0"
              width="185"
              height="44"
              rx="22"
              fill="#0f172a"
              stroke="#334155"
              strokeWidth="2"
            />
            <text
              x="360"
              y="23"
              fill="#94a3b8"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontSize="15"
              fontWeight="800"
              textAnchor="middle"
              dominantBaseline="central"
            >
              @tibatibapaham
            </text>

            {/* Platform Mini Icons */}
            <text x="475" y="30" fill="#facc15" fontSize="20">💡</text>
            <text x="510" y="30" fill="#38bdf8" fontSize="20">🧠</text>
            <text x="545" y="30" fill="#ffffff" fontSize="20">✨</text>
          </g>
        </g>

        {/* ── 4. RIGHT CONTENT: THE EUREKA PROTAGONIST IN SAFE AREA (X: 1800) ── */}
        <g transform="translate(1800, 0)">
          {/* Circular Glowing Aura */}
          <circle cx="0" cy="700" r="280" fill="url(#bulbGlowBanner)" />

          {/* Eureka Lightbulb lowered closer to head (~55px floating gap, natural idea pop) */}
          <g transform="translate(0, 485)">
            <circle cx="0" cy="0" r="62" fill="#facc15" opacity="0.38" />
            <circle cx="0" cy="0" r="38" fill="#fef08a" opacity="0.6" />
            {/* Sparkle rays */}
            <line x1="0" y1="-52" x2="0" y2="-76" stroke="#fde047" strokeWidth="6.5" strokeLinecap="round" />
            <line x1="-40" y1="-36" x2="-58" y2="-54" stroke="#fde047" strokeWidth="6.5" strokeLinecap="round" />
            <line x1="40" y1="-36" x2="58" y2="-54" stroke="#fde047" strokeWidth="6.5" strokeLinecap="round" />
            <line x1="-52" y1="0" x2="-76" y2="0" stroke="#fde047" strokeWidth="6.5" strokeLinecap="round" />
            <line x1="52" y1="0" x2="76" y2="0" stroke="#fde047" strokeWidth="6.5" strokeLinecap="round" />

            {/* Bulb body */}
            <path
              d="M -26 -16 C -42 -48 42 -48 26 -16 C 20 0 15 16 15 28 L -15 28 C -15 16 -20 0 -26 -16 Z"
              fill="#facc15"
              stroke="#ca8a04"
              strokeWidth="4"
            />
            <rect x="-13" y="30" width="26" height="12" rx="3.5" fill="#94a3b8" stroke="#64748b" strokeWidth="2.5" />
            <path d="M -10 -8 Q 0 -22 10 -8" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
          </g>

          {/* Sparkles around character */}
          <text x="-160" y="560" fontSize="42" fill="#fde047">✨</text>
          <text x="150" y="570" fontSize="38" fill="#38bdf8">✨</text>
          <text x="-210" y="730" fontSize="34" fill="#38bdf8">★</text>
          <text x="200" y="740" fontSize="36" fill="#fde047">★</text>

          {/* Main Character Heroic Bust Shot (Comfortably positioned with generous gap below lightbulb) */}
          <g transform="translate(0, 1180)">
            <MainCharacter
              mood="eureka"
              scale={1.9}
              sweatDrop={false}
            />
          </g>
        </g>
      </svg>
    </AbsoluteFill>
  );
};

// =========================================================================
// 2. INSTAGRAM STORY HIGHLIGHT COVERS (1080 x 1080 px each)
// =========================================================================

interface HighlightBaseProps {
  title: string;
  badgeColor?: string;
  children: React.ReactNode;
}

const HighlightCoverBase: React.FC<HighlightBaseProps> = ({
  title,
  badgeColor = '#facc15',
  children,
}) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#070b13',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Plus Jakarta Sans', 'Fredoka', sans-serif",
      }}
    >
      <svg viewBox="0 0 1080 1080" style={{ width: '100%', height: '100%' }}>
        <defs>
          <style>{`
            @font-face {
              font-family: 'Fredoka';
              src: url('${staticFile('fonts/Fredoka.ttf')}') format('truetype');
              font-weight: 100 900;
              font-style: normal;
              font-display: block;
            }
            @font-face {
              font-family: 'Plus Jakarta Sans';
              src: url('${staticFile('fonts/PlusJakartaSans.ttf')}') format('truetype');
              font-weight: 200 800;
              font-style: normal;
              font-display: block;
            }
          `}</style>

          <clipPath id="hlCircleClip">
            <circle cx="540" cy="540" r="490" />
          </clipPath>

          <radialGradient id="hlBgGrad" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="60%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>

          <radialGradient id="hlGoldRing" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#d97706" />
          </radialGradient>
        </defs>

        {/* ── BASE CIRCLE ── */}
        <g clipPath="url(#hlCircleClip)">
          {/* Deep Navy Background */}
          <rect x="0" y="0" width="1080" height="1080" fill="url(#hlBgGrad)" />

          {/* Subtle Concentric Rings */}
          <circle cx="540" cy="500" r="340" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="12,12" opacity="0.2" />
          <circle cx="540" cy="500" r="230" fill="none" stroke="#facc15" strokeWidth="2" strokeDasharray="8,16" opacity="0.18" />

          {/* Central Main Icon */}
          <g transform="translate(540, 500)">{children}</g>

          {/* Bottom Label Badge */}
          <g transform="translate(540, 840)">
            <rect x="-210" y="-32" width="420" height="64" rx="32" fill="#0f172a" stroke={badgeColor} strokeWidth="3.5" />
            <text
              x="0"
              y="10"
              fill="#ffffff"
              fontFamily="'Plus Jakarta Sans', 'Fredoka', sans-serif"
              fontSize="24"
              fontWeight="800"
              letterSpacing="2"
              textAnchor="middle"
            >
              {title}
            </text>
          </g>
        </g>

        {/* ── GOLDEN POPPING OUTER BORDER RING ── */}
        <circle cx="540" cy="540" r="490" fill="none" stroke="url(#hlGoldRing)" strokeWidth="18" />
        <circle cx="540" cy="540" r="472" fill="none" stroke="#38bdf8" strokeWidth="3.5" opacity="0.4" />
      </svg>
    </AbsoluteFill>
  );
};

// Highlight 1: Mulai Sini (Intro / Best Of)
export const Highlight_MulaiSini: React.FC = () => {
  return (
    <HighlightCoverBase title="MULAI SINI 💡" badgeColor="#facc15">
      {/* Big Radiant Eureka Lightbulb */}
      <circle cx="0" cy="0" r="160" fill="#facc15" opacity="0.2" />
      <circle cx="0" cy="0" r="110" fill="#fde047" opacity="0.35" />

      {/* Light Rays */}
      <line x1="0" y1="-140" x2="0" y2="-190" stroke="#fde047" strokeWidth="12" strokeLinecap="round" />
      <line x1="-100" y1="-100" x2="-140" y2="-140" stroke="#fde047" strokeWidth="12" strokeLinecap="round" />
      <line x1="100" y1="-100" x2="140" y2="-140" stroke="#fde047" strokeWidth="12" strokeLinecap="round" />
      <line x1="-140" y1="0" x2="-190" y2="0" stroke="#fde047" strokeWidth="12" strokeLinecap="round" />
      <line x1="140" y1="0" x2="190" y2="0" stroke="#fde047" strokeWidth="12" strokeLinecap="round" />

      {/* Bulb body */}
      <path
        d="M -60 -40 C -100 -110 100 -110 60 -40 C 48 0 38 40 38 70 L -38 70 C -38 40 -48 0 -60 -40 Z"
        fill="#facc15"
        stroke="#ca8a04"
        strokeWidth="8"
      />
      {/* Filament */}
      <path d="M -22 -20 Q 0 -60 22 -20" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
      {/* Screw Base */}
      <rect x="-32" y="76" width="64" height="28" rx="8" fill="#94a3b8" stroke="#64748b" strokeWidth="4" />
      <rect x="-24" y="108" width="48" height="12" rx="4" fill="#475569" />
    </HighlightCoverBase>
  );
};

// Highlight 2: Otak Kita (Brain & Psychology)
export const Highlight_OtakKita: React.FC = () => {
  return (
    <HighlightCoverBase title="OTAK KITA 🧠" badgeColor="#ec4899">
      <g transform="translate(0, 10)">
        <BrainMascot mood="happy" scale={1.5} />
      </g>
    </HighlightCoverBase>
  );
};

// Highlight 3: Relatable (Habits & Daily Dilemmas)
export const Highlight_Relatable: React.FC = () => {
  return (
    <HighlightCoverBase title="RELATABLE ☕" badgeColor="#38bdf8">
      {/* Steaming Coffee Mug + Clock Dial */}
      <circle cx="0" cy="0" r="140" fill="#38bdf8" opacity="0.15" />
      
      {/* Coffee Mug */}
      <g transform="translate(-10, 30)">
        {/* Mug body */}
        <rect x="-90" y="-70" width="160" height="150" rx="36" fill="#38bdf8" stroke="#0284c7" strokeWidth="8" />
        {/* Mug Handle */}
        <path d="M 70 -30 Q 140 -30 140 25 Q 140 80 70 80" fill="none" stroke="#0284c7" strokeWidth="14" strokeLinecap="round" />
        {/* Coffee Liquid */}
        <ellipse cx="-10" cy="-65" rx="72" ry="22" fill="#6b3f24" stroke="#451a03" strokeWidth="4" />
        {/* Steam wisps */}
        <path d="M -40 -90 Q -25 -140 -45 -180" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" opacity="0.75" />
        <path d="M 10 -90 Q 25 -130 5 -170" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" opacity="0.75" />
      </g>

      {/* Mini Clock on top right */}
      <g transform="translate(110, -70)">
        <circle cx="0" cy="0" r="42" fill="#0f172a" stroke="#facc15" strokeWidth="6" />
        <line x1="0" y1="0" x2="0" y2="-22" stroke="#facc15" strokeWidth="5" strokeLinecap="round" />
        <line x1="0" y1="0" x2="16" y2="8" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      </g>
    </HighlightCoverBase>
  );
};

// Highlight 4: Tanya Sains (Science Facts & Q&A)
export const Highlight_TanyaSains: React.FC = () => {
  return (
    <HighlightCoverBase title="TANYA SAINS 🔬" badgeColor="#a855f7">
      {/* Science Flask with bubbling sparkles */}
      <circle cx="0" cy="0" r="140" fill="#a855f7" opacity="0.15" />

      <g transform="translate(0, 10)">
        {/* Flask Glass Body */}
        <path
          d="M -30 -120 L 30 -120 L 30 -40 L 110 80 C 130 110 110 140 70 140 L -70 140 C -110 140 -130 110 -110 80 L -30 -40 Z"
          fill="#1e1b4b"
          stroke="#c084fc"
          strokeWidth="8"
          strokeLinejoin="round"
        />
        {/* Flask Rim */}
        <rect x="-42" y="-132" width="84" height="18" rx="6" fill="#a855f7" stroke="#c084fc" strokeWidth="4" />

        {/* Liquid inside */}
        <path
          d="M -75 25 L 75 25 L 90 85 C 105 110 90 130 60 130 L -60 130 C -90 130 -105 110 -90 85 Z"
          fill="#a855f7"
        />

        {/* Bubbles */}
        <circle cx="-30" cy="70" r="14" fill="#ffffff" opacity="0.75" />
        <circle cx="25" cy="50" r="18" fill="#ffffff" opacity="0.65" />
        <circle cx="5" cy="95" r="10" fill="#ffffff" opacity="0.8" />
        <circle cx="-10" cy="-10" r="12" fill="#c084fc" opacity="0.7" />
        <circle cx="15" cy="-70" r="15" fill="#facc15" opacity="0.85" />
      </g>

      {/* Sparkles around */}
      <text x="-130" y="-80" fontSize="42" fill="#fde047">✨</text>
      <text x="110" y="-80" fontSize="36" fill="#38bdf8">★</text>
    </HighlightCoverBase>
  );
};

// Highlight 5: Balik Layar (Behind The Scenes)
export const Highlight_BalikLayar: React.FC = () => {
  return (
    <HighlightCoverBase title="BALIK LAYAR 🎬" badgeColor="#10b981">
      {/* Movie Clapperboard */}
      <circle cx="0" cy="0" r="140" fill="#10b981" opacity="0.15" />

      <g transform="translate(0, 10)">
        {/* Clapperboard Body */}
        <rect x="-110" y="-40" width="220" height="160" rx="18" fill="#0f172a" stroke="#10b981" strokeWidth="8" />

        {/* Slate lines */}
        <line x1="-80" y1="20" x2="80" y2="20" stroke="#334155" strokeWidth="5" />
        <line x1="-80" y1="65" x2="80" y2="65" stroke="#334155" strokeWidth="5" />

        {/* Play Icon in center */}
        <polygon points="-12,95 24,107 -12,119" fill="#10b981" />

        {/* Top Clapper Stick (Opened at angle) */}
        <g transform="translate(-110, -40) rotate(-16)">
          <rect x="0" y="-42" width="230" height="42" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="7" />
          {/* White diagonal stripes */}
          <polygon points="30,-40 60,-40 40,-2 10,-2" fill="#ffffff" />
          <polygon points="85,-40 115,-40 95,-2 65,-2" fill="#ffffff" />
          <polygon points="140,-40 170,-40 150,-2 120,-2" fill="#ffffff" />
          <polygon points="195,-40 220,-40 205,-2 180,-2" fill="#ffffff" />
        </g>
      </g>
    </HighlightCoverBase>
  );
};

// =========================================================================
// 3. SHOWCASE BOARD (1920 x 1080 px) - All 5 Highlights on Display
// =========================================================================
export const HighlightShowcase: React.FC = () => {
  const items = [
    { component: <Highlight_MulaiSini />, name: 'Mulai Sini', desc: 'Perkenalan & Best Of' },
    { component: <Highlight_OtakKita />, name: 'Otak Kita', desc: 'Psikologi & Memori' },
    { component: <Highlight_Relatable />, name: 'Relatable', desc: 'Dilema Keseharian' },
    { component: <Highlight_TanyaSains />, name: 'Tanya Sains', desc: 'Fakta Sains & Q&A' },
    { component: <Highlight_BalikLayar />, name: 'Balik Layar', desc: 'Animasi & BTS' },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#070b13',
        color: '#ffffff',
        fontFamily: '"Plus Jakarta Sans", "Nunito", -apple-system, sans-serif',
        padding: '50px 80px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <style>{`
        @font-face {
          font-family: 'Fredoka';
          src: url('${staticFile('fonts/Fredoka.ttf')}') format('truetype');
          font-weight: 100 900;
          font-style: normal;
          font-display: block;
        }
        @font-face {
          font-family: 'Plus Jakarta Sans';
          src: url('${staticFile('fonts/PlusJakartaSans.ttf')}') format('truetype');
          font-weight: 200 800;
          font-style: normal;
          font-display: block;
        }
      `}</style>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div
          style={{
            display: 'inline-block',
            backgroundColor: 'rgba(250, 204, 21, 0.15)',
            color: '#facc15',
            padding: '6px 20px',
            borderRadius: 30,
            fontSize: 16,
            fontWeight: 800,
            border: '1.5px solid #facc15',
            marginBottom: 12,
            letterSpacing: 2,
          }}
        >
          TIBA-TIBA PAHAM • INSTAGRAM STORY HIGHLIGHTS
        </div>
        <h1 style={{ fontSize: 42, fontWeight: 900, margin: 0 }}>
          5 Sampul Sorotan Resmi Instagram (@tibatibapaham)
        </h1>
        <p style={{ fontSize: 19, color: '#94a3b8', margin: '8px 0 0' }}>
          Format lingkaran 1080x1080 px, serasi dengan Foto Profil Opsi 1 (Deep Navy + Golden Ring).
        </p>
      </div>

      {/* 5 Columns Layout */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: 32,
          width: '100%',
          maxWidth: 1720,
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            style={{
              flex: 1,
              backgroundColor: '#0f172a',
              borderRadius: 28,
              padding: '24px 16px',
              border: '2px solid #1e293b',
              boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div style={{ width: 220, height: 220, position: 'relative', marginBottom: 18 }}>
              {item.component}
            </div>
            <h2 style={{ fontSize: 20, fontWeight: 900, margin: '0 0 6px' }}>{item.name}</h2>
            <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.4, margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
