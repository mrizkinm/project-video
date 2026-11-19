import React from 'react';
import { AbsoluteFill } from 'remotion';
import { MainCharacter } from '../shared/characters/MainCharacter';
import { BrainMascot } from '../shared/characters/BrainMascot';

// ==========================================
// KONSEP 1: THE EUREKA PROTAGONIST (1080x1080)
// ==========================================
export const PFP_Concept1_Eureka: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#090d16',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"Plus Jakarta Sans", "Nunito", -apple-system, sans-serif',
      }}
    >
      <svg viewBox="0 0 1080 1080" style={{ width: '100%', height: '100%' }}>
        <defs>
          <clipPath id="circleClip1">
            <circle cx="540" cy="540" r="490" />
          </clipPath>

          <radialGradient id="pfpBgGrad1" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="60%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>

          <radialGradient id="bulbAura1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fde047" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="goldRingGrad1" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#d97706" />
          </radialGradient>
        </defs>

        {/* ── BASE CIRCLE AVATAR ── */}
        <g clipPath="url(#circleClip1)">
          {/* Deep Navy Radial Background */}
          <rect x="0" y="0" width="1080" height="1080" fill="url(#pfpBgGrad1)" />

          {/* Soft Science Grid / Radiating Ray Accents */}
          <g stroke="#38bdf8" strokeWidth="2" opacity="0.12">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <line
                key={deg}
                x1="540"
                y1="540"
                x2={540 + Math.cos((deg * Math.PI) / 180) * 600}
                y2={540 + Math.sin((deg * Math.PI) / 180) * 600}
              />
            ))}
          </g>

          {/* Warm Eureka Aura behind character head */}
          <circle cx="540" cy="380" r="280" fill="url(#bulbAura1)" />

          {/* 💡 Radiant Eureka Lightbulb above head */}
          <g transform="translate(540, 180)">
            {/* Glow halo */}
            <circle cx="0" cy="0" r="105" fill="#facc15" opacity="0.32" />
            <circle cx="0" cy="0" r="65" fill="#fef08a" opacity="0.55" />
            
            {/* Sparkle rays */}
            <line x1="0" y1="-85" x2="0" y2="-120" stroke="#fde047" strokeWidth="10" strokeLinecap="round" />
            <line x1="-70" y1="-60" x2="-98" y2="-85" stroke="#fde047" strokeWidth="10" strokeLinecap="round" />
            <line x1="70" y1="-60" x2="98" y2="-85" stroke="#fde047" strokeWidth="10" strokeLinecap="round" />
            <line x1="-90" y1="0" x2="-120" y2="0" stroke="#fde047" strokeWidth="10" strokeLinecap="round" />
            <line x1="90" y1="0" x2="120" y2="0" stroke="#fde047" strokeWidth="10" strokeLinecap="round" />

            {/* Lightbulb glass body */}
            <path
              d="M -42 -28 C -68 -75 68 -75 42 -28 C 32 0 24 26 24 44 L -24 44 C -24 26 -32 0 -42 -28 Z"
              fill="#facc15"
              stroke="#ca8a04"
              strokeWidth="6"
            />
            {/* Screw base */}
            <rect x="-20" y="48" width="40" height="18" rx="5" fill="#94a3b8" stroke="#64748b" strokeWidth="3" />
            {/* Golden filament */}
            <path d="M -14 -14 Q 0 -36 14 -14" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
          </g>

          {/* Star Sparkles floating near head */}
          <text x="290" y="290" fontSize="56" fill="#fde047">✨</text>
          <text x="750" y="310" fontSize="50" fill="#38bdf8">✨</text>
          <text x="220" y="460" fontSize="38" fill="#38bdf8">★</text>
          <text x="830" y="480" fontSize="40" fill="#fde047">★</text>

          {/* ── MAIN CHARACTER CLOSE-UP BUST SHOT (ZOOMED WITH EUREKA MOOD) ── */}
          <g transform="translate(540, 1070)">
            <MainCharacter
              mood="eureka"
              scale={2.75}
              sweatDrop={false}
            />
          </g>
        </g>

        {/* ── GOLDEN POPPING OUTER BORDER RING ── */}
        <circle
          cx="540"
          cy="540"
          r="490"
          fill="none"
          stroke="url(#goldRingGrad1)"
          strokeWidth="20"
        />
        {/* Subtle Cyan Accent Ring */}
        <circle
          cx="540"
          cy="540"
          r="470"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="3.5"
          opacity="0.45"
        />
      </svg>
    </AbsoluteFill>
  );
};

// ==========================================
// KONSEP 2: THE BRAIN MASCOT (1080x1080)
// ==========================================
export const PFP_Concept2_Brain: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#090d16',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"Plus Jakarta Sans", "Nunito", -apple-system, sans-serif',
      }}
    >
      <svg viewBox="0 0 1080 1080" style={{ width: '100%', height: '100%' }}>
        <defs>
          <clipPath id="circleClip2">
            <circle cx="540" cy="540" r="490" />
          </clipPath>

          <radialGradient id="pfpBgGrad2" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#2e1065" />
            <stop offset="55%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>

          <radialGradient id="brainAuraGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f472b6" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#ec4899" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#db2777" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="ringGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>

        {/* ── BASE CIRCLE AVATAR ── */}
        <g clipPath="url(#circleClip2)">
          {/* Deep Violet/Cosmic Gradient */}
          <rect x="0" y="0" width="1080" height="1080" fill="url(#pfpBgGrad2)" />

          {/* Neuron / Constellation nodes */}
          <g stroke="#818cf8" strokeWidth="2.5" opacity="0.35">
            <line x1="220" y1="260" x2="350" y2="180" />
            <line x1="350" y1="180" x2="480" y2="240" />
            <line x1="720" y1="200" x2="860" y2="260" />
            <line x1="860" y1="260" x2="900" y2="400" />
            <line x1="180" y1="780" x2="290" y2="860" />
            <line x1="800" y1="840" x2="920" y2="760" />
          </g>
          <g fill="#c084fc" opacity="0.7">
            <circle cx="220" cy="260" r="8" />
            <circle cx="350" cy="180" r="10" />
            <circle cx="480" cy="240" r="7" />
            <circle cx="720" cy="200" r="9" />
            <circle cx="860" cy="260" r="11" />
            <circle cx="900" cy="400" r="8" />
            <circle cx="180" cy="780" r="9" />
            <circle cx="290" cy="860" r="10" />
            <circle cx="800" cy="840" r="10" />
            <circle cx="920" cy="760" r="8" />
          </g>

          {/* Glowing Aura Behind Brain */}
          <circle cx="540" cy="510" r="320" fill="url(#brainAuraGrad)" />

          {/* Mini Idea Lightbulb above Mascot */}
          <g transform="translate(710, 230) rotate(18)">
            <circle cx="0" cy="0" r="55" fill="#facc15" opacity="0.4" />
            <line x1="0" y1="-50" x2="0" y2="-70" stroke="#fde047" strokeWidth="6" strokeLinecap="round" />
            <line x1="-35" y1="-35" x2="-50" y2="-50" stroke="#fde047" strokeWidth="6" strokeLinecap="round" />
            <line x1="35" y1="-35" x2="50" y2="-50" stroke="#fde047" strokeWidth="6" strokeLinecap="round" />
            <path
              d="M -26 -18 C -42 -46 42 -46 26 -18 C 19 0 14 16 14 28 L -14 28 C -14 16 -19 0 -26 -18 Z"
              fill="#facc15"
              stroke="#ca8a04"
              strokeWidth="4"
            />
            <rect x="-12" y="30" width="24" height="10" rx="3" fill="#94a3b8" />
          </g>

          {/* Sparkles */}
          <text x="210" y="300" fontSize="52" fill="#fde047">✨</text>
          <text x="290" y="780" fontSize="42" fill="#38bdf8">★</text>
          <text x="780" y="760" fontSize="46" fill="#f472b6">✨</text>
          <text x="820" y="440" fontSize="36" fill="#fde047">★</text>

          {/* ── THE BRAIN MASCOT CENTER STAGE ── */}
          <g transform="translate(540, 530)">
            <BrainMascot mood="waving" scale={2.05} />

            {/* Smart Scientist Round Glasses */}
            <g transform="translate(0, 0)">
              {/* Left Lens Frame */}
              <circle cx="-120" cy="-20" r="68" fill="none" stroke="#0f172a" strokeWidth="13" />
              <circle cx="-120" cy="-20" r="59" fill="#38bdf8" opacity="0.18" />
              {/* Lens Glare reflection */}
              <path d="M -150 -42 Q -120 -66 -90 -42" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" opacity="0.8" />

              {/* Right Lens Frame */}
              <circle cx="120" cy="-20" r="68" fill="none" stroke="#0f172a" strokeWidth="13" />
              <circle cx="120" cy="-20" r="59" fill="#38bdf8" opacity="0.18" />
              {/* Lens Glare reflection */}
              <path d="M 90 -42 Q 120 -66 150 -42" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" opacity="0.8" />

              {/* Glasses Bridge */}
              <path d="M -52 -20 Q 0 -40 52 -20" fill="none" stroke="#0f172a" strokeWidth="13" strokeLinecap="round" />
            </g>
          </g>
        </g>

        {/* ── POPPING GRADIENT NEON BORDER RING ── */}
        <circle
          cx="540"
          cy="540"
          r="490"
          fill="none"
          stroke="url(#ringGrad2)"
          strokeWidth="20"
        />
        <circle
          cx="540"
          cy="540"
          r="470"
          fill="none"
          stroke="#facc15"
          strokeWidth="3.5"
          opacity="0.4"
        />
      </svg>
    </AbsoluteFill>
  );
};

// ==========================================
// KONSEP 3: MODERN MONOGRAM "TP" (1080x1080)
// ==========================================
export const PFP_Concept3_Monogram: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#090d16',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"Plus Jakarta Sans", "Nunito", -apple-system, sans-serif',
      }}
    >
      <svg viewBox="0 0 1080 1080" style={{ width: '100%', height: '100%' }}>
        <defs>
          <clipPath id="circleClip3">
            <circle cx="540" cy="540" r="490" />
          </clipPath>

          <radialGradient id="pfpBgGrad3" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#0c1e36" />
            <stop offset="55%" stopColor="#081426" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>

          <linearGradient id="tGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          <linearGradient id="pGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="60%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>

          <linearGradient id="ringGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>

        {/* ── BASE CIRCLE AVATAR ── */}
        <g clipPath="url(#circleClip3)">
          {/* Deep Tech Blue Background */}
          <rect x="0" y="0" width="1080" height="1080" fill="url(#pfpBgGrad3)" />

          {/* Radial Light Burst from Center */}
          <circle cx="540" cy="500" r="380" fill="#0284c7" opacity="0.18" />
          <circle cx="540" cy="500" r="220" fill="#facc15" opacity="0.12" />

          {/* High-tech Grid Circles */}
          <circle cx="540" cy="500" r="320" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="14,14" opacity="0.25" />
          <circle cx="540" cy="500" r="410" fill="none" stroke="#818cf8" strokeWidth="2" strokeDasharray="8,18" opacity="0.18" />

          {/* ── INTERLOCKING "TP" MONOGRAM ── */}
          <g transform="translate(540, 480)">
            {/* Shadow for 3D depth */}
            <g transform="translate(10, 15)" opacity="0.35">
              {/* T Shadow */}
              <path d="M -300 -180 L -60 -180 L -60 -90 L -140 -90 L -140 180 L -220 180 L -220 -90 L -300 -90 Z" fill="#000000" />
              {/* P Shadow */}
              <path d="M -40 -180 L 160 -180 C 260 -180 300 -120 300 -40 C 300 40 260 100 160 100 L 40 100 L 40 180 L -40 180 Z M 40 -100 L 150 -100 C 195 -100 215 -80 215 -40 C 215 0 195 20 150 20 L 40 20 Z" fill="#000000" />
            </g>

            {/* Letter 'T' in Electric Cyan */}
            <path
              d="M -300 -180 L -60 -180 L -60 -90 L -140 -90 L -140 180 L -220 180 L -220 -90 L -300 -90 Z"
              fill="url(#tGrad)"
              stroke="#0f172a"
              strokeWidth="10"
              strokeLinejoin="round"
            />

            {/* Letter 'P' in Vibrant Gold */}
            <path
              d="M -40 -180 L 160 -180 C 260 -180 300 -120 300 -40 C 300 40 260 100 160 100 L 40 100 L 40 180 L -40 180 Z M 40 -100 L 150 -100 C 195 -100 215 -80 215 -40 C 215 0 195 20 150 20 L 40 20 Z"
              fill="url(#pGrad)"
              stroke="#0f172a"
              strokeWidth="10"
              strokeLinejoin="round"
            />

            {/* 💡 Radiant Mini Eureka Bulb inside the P counter */}
            <g transform="translate(125, -40)">
              <circle cx="0" cy="0" r="32" fill="#ffffff" opacity="0.9" />
              <text x="0" y="14" fontSize="36" textAnchor="middle" fill="#0f172a">💡</text>
            </g>
          </g>

          {/* Sparkle Stars */}
          <text x="240" y="240" fontSize="50" fill="#fde047">✨</text>
          <text x="820" y="260" fontSize="44" fill="#38bdf8">✨</text>
          <text x="860" y="700" fontSize="38" fill="#fde047">★</text>
          <text x="180" y="680" fontSize="36" fill="#38bdf8">★</text>

          {/* Curved / Bottom Brand Pill Badge */}
          <g transform="translate(540, 840)">
            <rect x="-240" y="-36" width="480" height="72" rx="36" fill="#0f172a" stroke="#facc15" strokeWidth="4" />
            <text
              x="0"
              y="12"
              fill="#ffffff"
              fontSize="28"
              fontWeight="900"
              letterSpacing="3"
              textAnchor="middle"
            >
              TIBA-TIBA PAHAM
            </text>
          </g>
        </g>

        {/* ── POPPING GRADIENT OUTER BORDER RING ── */}
        <circle
          cx="540"
          cy="540"
          r="490"
          fill="none"
          stroke="url(#ringGrad3)"
          strokeWidth="20"
        />
        <circle
          cx="540"
          cy="540"
          r="470"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          opacity="0.3"
        />
      </svg>
    </AbsoluteFill>
  );
};

// ==========================================
// SHOWCASE / COMPARISON BOARD (1920x1080)
// ==========================================
export const PFP_Comparison: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#070b12',
        color: '#ffffff',
        fontFamily: '"Plus Jakarta Sans", "Nunito", -apple-system, sans-serif',
        padding: '50px 80px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div
          style={{
            display: 'inline-block',
            backgroundColor: 'rgba(250, 204, 21, 0.15)',
            color: '#facc15',
            padding: '6px 20px',
            borderRadius: 30,
            fontSize: 18,
            fontWeight: 800,
            border: '1.5px solid #facc15',
            marginBottom: 12,
            letterSpacing: 2,
          }}
        >
          TIBA-TIBA PAHAM • PROFILE PICTURE OPTIONS
        </div>
        <h1 style={{ fontSize: 44, fontWeight: 900, margin: 0, letterSpacing: -0.5 }}>
          Rekomendasi Foto Profil Akun (@tibatibapaham)
        </h1>
        <p style={{ fontSize: 20, color: '#94a3b8', margin: '8px 0 0' }}>
          Format lingkaran 1080x1080 px, dioptimalkan untuk visibilitas maksimal di TikTok, Reels, & Shorts.
        </p>
      </div>

      {/* 3 Columns Showcase */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: 50,
          width: '100%',
          maxWidth: 1680,
        }}
      >
        {/* Card 1: Protagonist Eureka */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#0f172a',
            borderRadius: 32,
            padding: 30,
            border: '2px solid #facc15',
            boxShadow: '0 16px 40px rgba(250,204,21,0.12)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#facc15',
              color: '#000000',
              fontWeight: 900,
              fontSize: 16,
              padding: '6px 16px',
              borderRadius: 20,
              marginBottom: 20,
            }}
          >
            ★ REKOMENDASI UTAMA
          </div>
          <div style={{ width: 280, height: 280, position: 'relative', marginBottom: 24 }}>
            <PFP_Concept1_Eureka />
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 900, margin: '0 0 8px' }}>
            Opsi 1: The Eureka Protagonist
          </h2>
          <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
            Karakter utama dengan ekspresi bahagia berbinar bintang & bohlam ide menyala. Sangat personal, ramah, dan langsung dikenali audiens.
          </p>
        </div>

        {/* Card 2: The Brain Mascot */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#0f172a',
            borderRadius: 32,
            padding: 30,
            border: '2px solid #ec4899',
            boxShadow: '0 16px 40px rgba(236,72,153,0.12)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#ec4899',
              color: '#ffffff',
              fontWeight: 900,
              fontSize: 16,
              padding: '6px 16px',
              borderRadius: 20,
              marginBottom: 20,
            }}
          >
            IKONIK & GEMAS
          </div>
          <div style={{ width: 280, height: 280, position: 'relative', marginBottom: 24 }}>
            <PFP_Concept2_Brain />
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 900, margin: '0 0 8px' }}>
            Opsi 2: The Brain Mascot
          </h2>
          <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
            Maskot otak pintar berkacamata sains melambaikan tangan. Gaya universal & memorable ala maskot Duolingo / Kurzgesagt.
          </p>
        </div>

        {/* Card 3: Modern Monogram */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#0f172a',
            borderRadius: 32,
            padding: 30,
            border: '2px solid #38bdf8',
            boxShadow: '0 16px 40px rgba(56,189,248,0.12)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#0284c7',
              color: '#ffffff',
              fontWeight: 900,
              fontSize: 16,
              padding: '6px 16px',
              borderRadius: 20,
              marginBottom: 20,
            }}
          >
            MODERN & MEDIA BRAND
          </div>
          <div style={{ width: 280, height: 280, position: 'relative', marginBottom: 24 }}>
            <PFP_Concept3_Monogram />
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 900, margin: '0 0 8px' }}>
            Opsi 3: Modern Monogram "TP"
          </h2>
          <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
            Logo monogram geometris TP tebal dengan bohlam ide di dalamnya. Memberi kesan institusi media pop-science resmi & futuristik.
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
