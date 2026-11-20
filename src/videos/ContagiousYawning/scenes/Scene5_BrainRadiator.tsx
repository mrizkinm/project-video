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

  // Thermometer temperature animation dropping
  const tempDrop = Math.sin(frame * 0.1) * 0.3;

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
          <filter id="iceGlow5" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="iceAirGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="thermoGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="60%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
          <linearGradient id="brainCoolGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#0369a1" />
            <stop offset="100%" stopColor="#0c4a6e" />
          </linearGradient>
        </defs>

        {/* 1. TOP HEADER STAMP: Radiator Pendingin Otak */}
        <g transform={`translate(540, 230) rotate(-1.5) scale(${Math.max(0, stampPop)})`}>
          <rect
            x="-310"
            y="-38"
            width="620"
            height="76"
            rx="26"
            fill="#0f172a"
            stroke="#38bdf8"
            strokeWidth="4"
            filter="drop-shadow(0px 8px 24px rgba(56, 189, 248, 0.45))"
          />
          <text
            x="0"
            y="12"
            fill="#bae6fd"
            fontSize="30"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
            letterSpacing="1"
          >
            ❄️ RADIATOR PENDINGIN OTAK
          </text>
        </g>

        {/* 2. CENTRAL SCIENTIFIC SHOWCASE: THE RADIATOR BRAIN (860px Wide) */}
        <g transform={`translate(540, 840) scale(${Math.max(0, cardPop)})`}>
          <rect
            x="-430"
            y="-460"
            width="860"
            height="920"
            rx="40"
            fill="#0f172a"
            stroke="#1e293b"
            strokeWidth="4"
            filter="drop-shadow(0px 20px 40px rgba(0,0,0,0.6))"
          />

          {/* Central Stylized Brain with Cold Cooling Circulation */}
          <g transform="translate(-70, -35)">
            {/* Brain Aura / Cooling Glow */}
            <circle cx="0" cy="0" r="200" fill="rgba(56, 189, 248, 0.16)" filter="url(#iceGlow5)" />

            {/* Brain Mass with rich cool gradient */}
            <path
              d="M -130 -40
                 C -170 -130 -70 -190 0 -135
                 C 70 -190 170 -130 130 -40
                 C 190 50 110 150 0 130
                 C -110 150 -190 50 -130 -40 Z"
              fill="url(#brainCoolGrad)"
              stroke="#38bdf8"
              strokeWidth="5"
              filter="drop-shadow(0px 10px 20px rgba(2, 132, 199, 0.5))"
            />
            {/* Brain Wrinkle Folds */}
            <path d="M -50 -80 Q -20 -40 -60 20 Q -80 50 -40 80" stroke="#bae6fd" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M 50 -80 Q 20 -40 60 20 Q 80 50 40 80" stroke="#bae6fd" strokeWidth="5" fill="none" strokeLinecap="round" />

            {/* Cold Air Inflow Arrows (Rushing in like radiator coolants) */}
            {[-120, -40, 40, 110].map((posY, idx) => {
              const arrowOffset = (frame * 5 + idx * 30) % 200;
              return (
                <g key={idx} transform={`translate(${-240 + arrowOffset}, ${posY})`}>
                  <line x1="-30" y1="0" x2="30" y2="0" stroke="#38bdf8" strokeWidth="4.5" strokeLinecap="round" />
                  <polygon points="30,0 20,-6 20,6" fill="#38bdf8" />
                </g>
              );
            })}

            {/* Cool Air Tag on Left with plenty of clearance */}
            <g transform="translate(-250, -190)">
              <rect x="-95" y="-18" width="190" height="36" rx="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="6" fill="#7dd3fc" fontSize="17" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
                🌬️ Udara Dingin
              </text>
            </g>

            {/* Cold Ice Crystals */}
            {[-80, 80].map((xP, i) => (
              <text key={i} x={xP} y={-85} fill="#7dd3fc" fontSize="34" filter="url(#iceGlow5)">
                ❄️
              </text>
            ))}
          </g>

          {/* 3. TEMPERATURE GAUGE THERMOMETER (Right Side of Box) */}
          <g transform="translate(260, -35)">
            {/* Thermometer Glass Outer Frame */}
            <rect x="-24" y="-180" width="48" height="320" rx="24" fill="#1e293b" stroke="#64748b" strokeWidth="4" />
            {/* Thermometer Bulb Base */}
            <circle cx="0" cy="150" r="44" fill="#0284c7" stroke="#38bdf8" strokeWidth="4" />

            {/* Mercury Liquid Level (Animated Dropping -0.5C) */}
            <rect x="-14" y="-30" width="28" height="170" rx="14" fill="url(#thermoGrad)" />
            <circle cx="0" cy="150" r="32" fill="#0284c7" />

            {/* Measurement Ticks */}
            {[-140, -100, -60, -20, 20, 60, 100].map((tY, i) => (
              <line key={i} x1="28" y1={tY} x2="42" y2={tY} stroke="#94a3b8" strokeWidth="3" />
            ))}

            {/* Temperature Value Tag */}
            <g transform="translate(-10, -215)">
              <rect x="-85" y="-22" width="170" height="44" rx="22" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="0" y="8" fill="#38bdf8" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
                36.7°C ❄️ ⬇️
              </text>
            </g>
          </g>

          {/* 4. EVOLUTIONARY ALERT RADAR (Bottom of Box) */}
          <g transform="translate(0, 310)">
            <rect
              x="-360"
              y="-54"
              width="720"
              height="108"
              rx="24"
              fill="rgba(12, 74, 110, 0.55)"
              stroke="#0284c7"
              strokeWidth="3"
            />
            <text
              x="0"
              y="-12"
              fill="#bae6fd"
              fontSize="24"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="'Plus Jakarta Sans', sans-serif"
            >
              Udara dingin mendinginkan otak yang panas,
            </text>
            <text
              x="0"
              y="28"
              fill="#38bdf8"
              fontSize="24"
              fontWeight="900"
              textAnchor="middle"
              fontFamily="'Fredoka', sans-serif"
            >
              membuat kelompok manusia purba tetap waspada! ⚡
            </text>
          </g>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
