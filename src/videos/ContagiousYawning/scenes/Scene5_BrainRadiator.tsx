import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';

export const Scene5_BrainRadiator: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stampPop = spring({
    frame: frame - 4,
    fps,
    config: { damping: 11, stiffness: 140 },
  });

  const cardPop = spring({
    frame: frame - 8,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  // Campfire flame flickering
  const fireFlicker1 = Math.sin(frame * 0.45) * 12;
  const fireFlicker2 = Math.cos(frame * 0.35) * 9;

  // Radar pulse expansion
  const radarRadius = 200 + ((frame * 4.5) % 260);
  const radarOpacity = 1 - (((frame * 4.5) % 260) / 260);

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
          fontFamily: "'Fredoka', 'Plus Jakarta Sans', sans-serif",
        }}
      >
        <defs>
          <filter id="fireGlow5" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="18" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="coolGlow5" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="caveCardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0b132b" stopOpacity="0.98" />
            <stop offset="50%" stopColor="#1c2541" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#080c18" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="fireGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#fde047" />
          </linearGradient>
          <linearGradient id="fireGrad2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ea580c" />
            <stop offset="60%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="coolBrainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#075985" />
          </linearGradient>
        </defs>

        {/* 1. TOP HEADER STAMP: Evolusi & Sinkronisasi Kelompok */}
        <g transform={`translate(540, 225) rotate(-1) scale(${Math.max(0, stampPop)})`}>
          <rect
            x="-330"
            y="-38"
            width="660"
            height="76"
            rx="26"
            fill="#0f172a"
            stroke="#f59e0b"
            strokeWidth="4"
            filter="drop-shadow(0px 8px 24px rgba(245, 158, 11, 0.45))"
          />
          <text
            x="0"
            y="12"
            fill="#fef08a"
            fontSize="28"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
            letterSpacing="1"
          >
            🔥 RADIATOR ALAMI & EVOLUSI PURBA
          </text>
        </g>

        {/* 2. CENTRAL PREHISTORIC SHOWCASE CARD (880px Wide, y=790) */}
        <g transform={`translate(540, 790) scale(${Math.max(0, cardPop)})`}>
          {/* Outer Showcase Box */}
          <rect
            x="-440"
            y="-430"
            width="880"
            height="860"
            rx="40"
            fill="url(#caveCardGrad)"
            stroke="#334155"
            strokeWidth="4"
            filter="drop-shadow(0px 20px 40px rgba(0,0,0,0.7))"
          />

          {/* Starry night & Moon in prehistoric sky */}
          {[-340, -220, 260, 360].map((starX, i) => (
            <circle
              key={i}
              cx={starX}
              cy={-360 + (i % 2) * 50}
              r={2.5 + (i % 2)}
              fill="#fef08a"
              opacity={0.6 + Math.sin(frame * 0.2 + i) * 0.3}
            />
          ))}

          {/* Prehistoric Ground Silhouette */}
          <path
            d="M -440 200 Q -200 170 0 190 Q 200 210 440 190 L 440 430 L -440 430 Z"
            fill="#0f172a"
          />

          {/* ── 📡 COLLECTIVE VIGILANCE RADAR HEADER (At very top of card) ── */}
          <g transform="translate(0, -360)">
            <rect x="-210" y="-22" width="420" height="44" rx="22" fill="rgba(15, 23, 42, 0.95)" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="0" y="8" fill="#7dd3fc" fontSize="20" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
              📡 RADAR KEWASPADAAN KELOMPOK
            </text>
          </g>

          {/* ── 📡 EXPANDING RADAR DOME WAVES (Center at campfire y=90) ── */}
          <g transform="translate(0, 90)">
            {/* Outer Expanding Radar Wave */}
            <ellipse
              cx="0"
              cy="0"
              rx={radarRadius * 1.55}
              ry={radarRadius * 0.85}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="3.5"
              strokeDasharray="12 10"
              opacity={radarOpacity * 0.75}
            />
            {/* Inner Fixed Sync Dome */}
            <ellipse
              cx="0"
              cy="0"
              rx="400"
              ry="230"
              fill="rgba(56, 189, 248, 0.05)"
              stroke="#06b6d4"
              strokeWidth="2.5"
              strokeDasharray="8 6"
            />
          </g>

          {/* ── 🔥 CAMPFIRE IN CENTER (Base y=170) ── */}
          <g transform="translate(0, 170)">
            {/* Warm Radial Firelight Glow on Ground */}
            <ellipse cx="0" cy="15" rx="260" ry="80" fill="rgba(249, 115, 22, 0.28)" filter="url(#fireGlow5)" />

            {/* Stone Ring around fire */}
            {[-80, -50, -15, 20, 55, 85].map((sX, i) => (
              <ellipse key={i} cx={sX} cy={20 + (i % 2) * 4} rx="20" ry="12" fill="#475569" stroke="#1e293b" strokeWidth="2.5" />
            ))}

            {/* Crossed Wooden Fireplace Logs */}
            <line x1="-70" y1="14" x2="70" y2="-14" stroke="#78350f" strokeWidth="18" strokeLinecap="round" />
            <line x1="-65" y1="-14" x2="65" y2="14" stroke="#92400e" strokeWidth="18" strokeLinecap="round" />

            {/* Outer Orange Flame */}
            <path
              d={`M -55 8
                 C -70 -45 -35 ${ -100 + fireFlicker1 } 0 ${ -140 + fireFlicker2 }
                 C 35 ${ -100 - fireFlicker1 } 70 -45 55 8
                 Z`}
              fill="url(#fireGrad1)"
              filter="url(#fireGlow5)"
            />

            {/* Inner Yellow Core Flame */}
            <path
              d={`M -30 8
                 C -40 -30 -18 ${ -70 + fireFlicker2 } 0 ${ -100 + fireFlicker1 }
                 C 18 ${ -70 - fireFlicker2 } 40 -30 30 8
                 Z`}
              fill="url(#fireGrad2)"
            />

            {/* Rising Fire Sparks / Embers */}
            {[1, 2, 3, 4].map((spIdx) => {
              const spY = -80 - ((frame * 3.5 + spIdx * 30) % 110);
              const spX = Math.sin(frame * 0.25 + spIdx) * 25;
              return (
                <circle key={spIdx} cx={spX} cy={spY} r="3.5" fill="#fef08a" opacity={1 - (Math.abs(spY + 80) / 110)} />
              );
            })}
          </g>

          {/* ── 👥 PREHISTORIC HUMANS AROUND FIRE (Larger & More Expressive) ── */}

          {/* 1. CAVEMAN 1 (Left - Alert Tribe Member) */}
          <g transform="translate(-260, 110)">
            {/* Alert Eye Icon */}
            <g transform="translate(0, -180)">
              <circle cx="0" cy="0" r="24" fill="#0f172a" stroke="#facc15" strokeWidth="3" />
              <text x="0" y="8" fill="#facc15" fontSize="24" textAnchor="middle">👁️</text>
            </g>

            {/* Body / Fur Tunic */}
            <path d="M -55 70 L -30 -40 L 30 -40 L 55 70 Z" fill="#92400e" stroke="#78350f" strokeWidth="3.5" />
            {/* Fur Tunic Texture */}
            <circle cx="-14" cy="5" r="5" fill="#78350f" />
            <circle cx="15" cy="25" r="5" fill="#78350f" />

            {/* Shaggy Caveman Hair & Beard */}
            <ellipse cx="0" cy="-85" rx="42" ry="40" fill="#1c1917" />
            {/* Face */}
            <circle cx="8" cy="-80" r="28" fill="#e0a96d" />
            {/* Shaggy Bangs */}
            <path d="M -24 -105 Q 6 -80 30 -105" fill="#1c1917" />
            {/* Wide Alert Open Eye */}
            <circle cx="16" cy="-80" r="7" fill="#ffffff" />
            <circle cx="18" cy="-80" r="3.5" fill="#0f172a" />
            {/* Beard */}
            <path d="M -18 -65 C -5 -38 28 -38 28 -65 Z" fill="#1c1917" />

            {/* Seated Legs */}
            <ellipse cx="-25" cy="75" rx="26" ry="16" fill="#78350f" />
            <ellipse cx="25" cy="75" rx="26" ry="16" fill="#78350f" />

            {/* Label */}
            <text x="0" y="112" fill="#cbd5e1" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
              Waspada 🛡️
            </text>
          </g>

          {/* 2. CAVEMAN 2 (Center-Left - THE MAIN YAWNER WITH BRAIN COOLING EFFECT) */}
          <g transform="translate(-75, 45)">
            {/* Body / Fur Tunic */}
            <path d="M -60 135 L -35 30 L 35 30 L 60 135 Z" fill="#b45309" stroke="#78350f" strokeWidth="3.5" />
            <ellipse cx="0" cy="140" rx="48" ry="24" fill="#78350f" />

            {/* Head Tilted Back in Deep Yawn */}
            <ellipse cx="0" cy="-25" rx="44" ry="42" fill="#1c1917" />
            <circle cx="0" cy="-20" r="32" fill="#f7c5a4" />

            {/* Sleepy Closed Squint Eyes */}
            <path d="M -20 -28 Q -10 -38 0 -28" fill="none" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
            <path d="M 8 -28 Q 18 -38 28 -28" fill="none" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />

            {/* WIDE OPEN YAWNING MOUTH */}
            <ellipse cx="4" cy="-5" rx="20" ry="26" fill="#881337" stroke="#e11d48" strokeWidth="3" />
            <path d="M -6 0 Q 4 10 14 0" fill="#fb7185" />

            {/* Cold Air Intake Streamlines into Mouth */}
            {[-1, 0, 1].map((sIdx) => (
              <path
                key={sIdx}
                d={`M ${-65 + sIdx * 10} ${-25 + sIdx * 18} Q -35 -10 0 -5`}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3.5"
                strokeDasharray="8 5"
                strokeDashoffset={-frame * 5}
                opacity={0.85}
              />
            ))}

            {/* ── ❄️ FLOATING BRAIN RADIATOR THERMOSTAT (Above Head with Clear Space) ── */}
            <g transform="translate(0, -190)">
              {/* Cooling Aura Glow */}
              <circle cx="0" cy="0" r="70" fill="rgba(56, 189, 248, 0.22)" filter="url(#coolGlow5)" />

              {/* Stylized Glowing Cyan Brain */}
              <path
                d="M -48 -14
                   C -65 -48 -28 -70 0 -48
                   C 28 -70 65 -48 48 -14
                   C 70 22 42 55 0 48
                   C -42 55 -70 22 -48 -14 Z"
                fill="url(#coolBrainGrad)"
                stroke="#bae6fd"
                strokeWidth="4"
              />
              {/* Brain Wrinkles */}
              <path d="M -20 -28 Q -8 -10 -22 12" stroke="#bae6fd" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M 20 -28 Q 8 -10 22 12" stroke="#bae6fd" strokeWidth="3" fill="none" strokeLinecap="round" />

              {/* Cold Snowflakes on Brain */}
              <text x="-28" y="-32" fill="#ffffff" fontSize="22" filter="url(#coolGlow5)">❄️</text>
              <text x="14" y="-32" fill="#ffffff" fontSize="22" filter="url(#coolGlow5)">❄️</text>

              {/* Cooling Thermostat Tag */}
              <g transform="translate(0, 68)">
                <rect x="-115" y="-18" width="230" height="36" rx="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
                <text x="0" y="6" fill="#38bdf8" fontSize="17" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
                  ❄️ Suhu Turun 0.5°C ⬇️
                </text>
              </g>
            </g>

            {/* Label */}
            <text x="0" y="180" fill="#fde047" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
              Nguap Mendinginkan Otak 🥱
            </text>
          </g>

          {/* 3. CAVEMAN 3 (Right - Catching the Yawn / Alerted) */}
          <g transform="translate(255, 105)">
            {/* Alert / Exclamation Icon */}
            <g transform="translate(0, -170)">
              <circle cx="0" cy="0" r="24" fill="#0f172a" stroke="#f43f5e" strokeWidth="3" />
              <text x="0" y="8" fill="#f43f5e" fontSize="22" fontWeight="900" textAnchor="middle">⚡</text>
            </g>

            {/* Body / Fur Tunic */}
            <path d="M -50 75 L -25 -35 L 35 -35 L 55 75 Z" fill="#78350f" stroke="#92400e" strokeWidth="3.5" />

            {/* Shaggy Hair */}
            <ellipse cx="0" cy="-75" rx="42" ry="40" fill="#292524" />
            {/* Face */}
            <circle cx="-8" cy="-70" r="28" fill="#d97706" />

            {/* Reflexive Contagious Yawn Mouth */}
            <ellipse cx="-12" cy="-60" rx="15" ry="22" fill="#881337" stroke="#e11d48" strokeWidth="2.5" />
            <path d="M -18 -55 Q -12 -48 -6 -55" fill="#fb7185" />

            {/* Surprised / Alert Eye */}
            <circle cx="-14" cy="-78" r="6" fill="#ffffff" />
            <circle cx="-15" cy="-78" r="3" fill="#0f172a" />

            {/* Seated Base */}
            <ellipse cx="0" cy="80" rx="46" ry="20" fill="#451a03" />

            {/* Connecting Resonance Wave from Yawner */}
            <path
              d="M -195 -30 Q -90 -85 0 -60"
              fill="none"
              stroke="#fb7185"
              strokeWidth="4"
              strokeDasharray="8 6"
              strokeDashoffset={-frame * 4}
            />

            {/* Label */}
            <text x="0" y="118" fill="#fbcfe8" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
              Ikutan Nguap! 😲
            </text>
          </g>

          {/* 4. BOTTOM NARRATIVE BOX (Positioned comfortably at y=295) */}
          <g transform="translate(0, 310)">
            <rect
              x="-380"
              y="-42"
              width="760"
              height="84"
              rx="22"
              fill="rgba(15, 23, 42, 0.92)"
              stroke="#f59e0b"
              strokeWidth="3"
            />
            <text
              x="0"
              y="-8"
              fill="#fef08a"
              fontSize="22"
              fontWeight="900"
              textAnchor="middle"
              fontFamily="'Fredoka', sans-serif"
            >
              Nguap mendinginkan otak & menyalakan radar kelompok,
            </text>
            <text
              x="0"
              y="24"
              fill="#bae6fd"
              fontSize="20"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="'Plus Jakarta Sans', sans-serif"
            >
              membuat seluruh kawanan tetap waspada dari predator malam! 🐆🛡️
            </text>
          </g>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
