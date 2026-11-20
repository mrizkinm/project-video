import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { BrainMascot } from '../../../shared/characters/BrainMascot';

export const Scene3_TwoAudioPaths: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const diagramPop = spring({
    frame: frame - 6,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  const mascotPop = spring({
    frame: frame - 10,
    fps,
    config: { damping: 11, stiffness: 120 },
  });

  return (
    <AbsoluteFill>
      <ParticleBackground theme="indigo" />

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
          <linearGradient id="boxGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.98" />
          </linearGradient>
          <filter id="glowCyan3" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glowGold3" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Brain Mascot (Top Right, professor role, comfortably positioned) */}
        <g transform={`translate(770, 360) scale(${Math.max(0, mascotPop) * 1.15})`}>
          <BrainMascot mood="thinking" scale={1.15} />
          {/* Smart Glasses on Brain */}
          <g transform="translate(0, -20)">
            <rect x="-85" y="-18" width="60" height="36" rx="8" fill="none" stroke="#38bdf8" strokeWidth="6" />
            <rect x="25" y="-18" width="60" height="36" rx="8" fill="none" stroke="#38bdf8" strokeWidth="6" />
            <line x1="-25" y1="0" x2="25" y2="0" stroke="#38bdf8" strokeWidth="6" />
            <line x1="-85" y1="0" x2="-115" y2="-10" stroke="#38bdf8" strokeWidth="6" />
            <line x1="85" y1="0" x2="115" y2="-10" stroke="#38bdf8" strokeWidth="6" />
          </g>
        </g>

        {/* Central Anatomical Showcase Box (Wide 840px, y=980) */}
        <g transform={`translate(540, 980) scale(${Math.max(0, diagramPop)})`}>
          <rect
            x="-420"
            y="-390"
            width="840"
            height="780"
            rx="40"
            fill="url(#boxGrad3)"
            stroke="#334155"
            strokeWidth="4"
            filter="drop-shadow(0px 20px 40px rgba(0,0,0,0.5))"
          />

          {/* Grid lines inside box */}
          {[-260, -130, 0, 130, 260].map((coord, i) => (
            <React.Fragment key={i}>
              <line x1="-380" y1={coord} x2="380" y2={coord} stroke="#1e293b" strokeWidth="2" strokeDasharray="6 6" />
              <line x1={coord} y1="-350" x2={coord} y2="350" stroke="#1e293b" strokeWidth="2" strokeDasharray="6 6" />
            </React.Fragment>
          ))}

          {/* 1. ANATOMICALLY ACCURATE HUMAN HEAD PROFILE (Smooth, Beautiful & Natural) */}
          <path
            d="M 20 -250
               C -70 -250 -125 -190 -140 -110
               C -145 -90 -145 -75 -150 -60
               C -158 -45 -172 -30 -185 -15
               C -190 -5 -182 2 -162 8
               C -160 16 -162 20 -166 24
               C -172 28 -170 34 -160 38
               C -155 40 -150 42 -155 45
               C -168 50 -168 60 -158 66
               C -150 72 -148 78 -150 84
               C -162 94 -162 110 -148 122
               C -125 142 -85 160 -45 175
               C -40 200 -45 225 -40 250
               C -35 270 -30 280 -25 290
               L 160 290
               C 165 240 170 185 175 135
               C 190 65 195 -5 185 -85
               C 175 -165 120 -250 20 -250 Z"
            fill="rgba(56, 189, 248, 0.08)"
            stroke="#38bdf8"
            strokeWidth="4"
          />

          {/* Realistic Anatomical Human Ear (Pinna) on Silhouette */}
          <g transform="translate(42, -15)">
            {/* Outer Rim (Helix & Lobe) */}
            <path
              d="M -15 -42
                 C 20 -48 42 -35 42 -12
                 C 42 12 30 35 22 48
                 C 14 58 -2 54 -6 38
                 C -12 24 -4 16 0 8"
              fill="rgba(56, 189, 248, 0.18)"
              stroke="#38bdf8"
              strokeWidth="3"
            />
            {/* Inner Cartilage Folds (Antihelix & Concha) */}
            <path
              d="M 2 -28 C 18 -26 24 -12 22 6 C 20 20 8 30 2 32"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />
            {/* Tragus flap */}
            <path
              d="M -12 -6 C -6 -4 -4 2 -8 8 C -12 12 -16 6 -14 -1 Z"
              fill="#0284c7"
              stroke="#38bdf8"
              strokeWidth="2"
            />
          </g>

          {/* 2. INNER SKULL & BRAIN ANATOMY (Nested Harmoniously Inside Head) */}
          <g transform="translate(0, -20)">
            {/* Cranium Vault */}
            <path
              d="M -115 -60
                 C -110 -140 -60 -210 15 -210
                 C 85 -210 150 -165 170 -105
                 C 185 -35 175 35 145 75
                 C 120 95 85 75 65 55
                 L 40 30 L -50 38 L -90 38
                 C -102 28 -95 0 -115 -60 Z"
              fill="#1e293b"
              stroke="#fbbf24"
              strokeWidth="4.5"
            />

            {/* Cranial Sutures */}
            <path d="M 20 -210 Q 5 -145 -18 -85" fill="none" stroke="#ca8a04" strokeWidth="2.5" strokeDasharray="4 4" />
            <path d="M 120 -185 Q 90 -115 50 -55" fill="none" stroke="#ca8a04" strokeWidth="2.5" strokeDasharray="4 4" />

            {/* Brain nestled inside neurocranium */}
            <g transform="translate(35, -115)">
              <path
                d="M -90 10 C -110 -50 -40 -90 10 -70 C 60 -90 110 -50 90 10 C 110 60 40 80 0 60 C -40 80 -110 60 -90 10 Z"
                fill="rgba(244, 114, 182, 0.35)"
                stroke="#f472b6"
                strokeWidth="4"
              />
              <path d="M -50 -30 Q -10 0 -40 30" fill="none" stroke="#f472b6" strokeWidth="3" />
              <path d="M 20 -40 Q 50 -10 10 20" fill="none" stroke="#f472b6" strokeWidth="3" />
            </g>

            {/* Orbit / Eye Socket */}
            <ellipse cx="-70" cy="-48" rx="28" ry="36" fill="#0f172a" stroke="#fbbf24" strokeWidth="3.5" />

            {/* Nasal Aperture */}
            <polygon points="-105,0 -85,18 -95,34 -110,15" fill="#0f172a" stroke="#ca8a04" strokeWidth="2.5" />

            {/* Zygomatic Arch (Tulang Pipi) */}
            <path d="M 40 20 Q -10 15 -50 -5" fill="none" stroke="#facc15" strokeWidth="5.5" strokeLinecap="round" />

            {/* Teeth Rows (Alveolar Process) */}
            <g transform="translate(-108, 46)">
              {[-12, 0, 12, 24, 36].map((tx, ti) => (
                <rect key={ti} x={tx} y="0" width="9" height="15" rx="2" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
              ))}
            </g>

            {/* Mandible (Rahang Bawah) articulated at TMJ near the ear canal */}
            <path
              d="M 38 25
                 C 28 45 52 85 42 105
                 C 32 120 -15 125 -55 120
                 C -85 115 -105 100 -112 65
                 L -68 65
                 C -52 85 5 90 15 75
                 L 15 35 Z"
              fill="#27272a"
              stroke="#facc15"
              strokeWidth="4.5"
            />

            {/* Cervical Vertebrae (Tulang Leher) */}
            <g transform="translate(100, 130)">
              {[0, 30, 60].map((vy, vi) => (
                <rect key={vi} x="-20" y={vy} width="35" height="20" rx="6" fill="#1e293b" stroke="#ca8a04" strokeWidth="2.5" />
              ))}
            </g>
          </g>

          {/* Vocal Cords (Pita Suara) in Throat */}
          <g transform="translate(-40, 230)">
            <circle cx="0" cy="0" r="26" fill="#ef4444" opacity="0.4" />
            <circle cx="0" cy="0" r="16" fill="#f87171" filter="url(#glowCyan3)" />
            <circle cx="0" cy="0" r="8" fill="#ffffff" />
            <text
              x="-45"
              y="6"
              fill="#fca5a5"
              fontSize="22"
              fontWeight="900"
              textAnchor="end"
              fontFamily="'Fredoka', sans-serif"
            >
              Pita Suara
            </text>
          </g>

          {/* Cochlea (Inner Ear / Koklea) in Temporal Bone */}
          <g transform="translate(45, -15)">
            <circle cx="0" cy="0" r="32" fill="#3b82f6" opacity="0.3" />
            <circle cx="0" cy="0" r="20" fill="#60a5fa" filter="url(#glowGold3)" />
            <circle cx="0" cy="0" r="10" fill="#ffffff" />
            <path
              d="M -10 -10 C -5 -20 12 -20 18 -8 C 22 4 14 16 4 18 C -6 20 -14 12 -12 2"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <text
              x="38"
              y="6"
              fill="#93c5fd"
              fontSize="22"
              fontWeight="900"
              textAnchor="start"
              fontFamily="'Fredoka', sans-serif"
            >
              Koklea
            </text>
          </g>

          {/* PATHWAY 1: AIR CONDUCTION (Cyan Arcing Path directly from parted lips to ear) */}
          <path
            d="M -155 42
               C -330 -10 -300 -190 -140 -240
               C 0 -270 75 -150 42 -15"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="7"
            strokeDasharray="14 10"
            strokeDashoffset={-frame * 3.5}
            filter="url(#glowCyan3)"
          />

          {/* PATHWAY 2: BONE CONDUCTION (Gold / Amber straight internal line through jaw & skull) */}
          <path
            d="M -40 230
               C -15 190 10 150 30 80
               L 45 -15"
            fill="none"
            stroke="#eab308"
            strokeWidth="11"
            strokeDasharray="18 10"
            strokeDashoffset={-frame * 4.5}
            filter="url(#glowGold3)"
          />

          {/* Floating Pill Label 1: Air Conduction */}
          <g transform="translate(-190, -260)">
            <rect
              x="-160"
              y="-28"
              width="320"
              height="56"
              rx="28"
              fill="#083344"
              stroke="#06b6d4"
              strokeWidth="3.5"
            />
            <text
              x="0"
              y="9"
              fill="#22d3ee"
              fontSize="24"
              fontWeight="900"
              textAnchor="middle"
              fontFamily="'Fredoka', sans-serif"
            >
              💨 JALUR UDARA (Air)
            </text>
          </g>

          {/* Floating Pill Label 2: Bone Conduction */}
          <g transform="translate(170, 240)">
            <rect
              x="-160"
              y="-28"
              width="320"
              height="56"
              rx="28"
              fill="#422006"
              stroke="#eab308"
              strokeWidth="3.5"
            />
            <text
              x="0"
              y="9"
              fill="#fde047"
              fontSize="24"
              fontWeight="900"
              textAnchor="middle"
              fontFamily="'Fredoka', sans-serif"
            >
              🦴 JALUR TULANG (Bone)
            </text>
          </g>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
