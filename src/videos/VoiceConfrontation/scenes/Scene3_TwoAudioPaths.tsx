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
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0.95" />
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

          {/* 1. Translucent Outer Head Silhouette */}
          <path
            d="M -40 -270 C 60 -270 160 -210 180 -100 C 200 0 190 90 170 180 L 160 270 L 60 270 L 40 190 C 20 180 -30 190 -80 170 C -120 150 -150 130 -185 90 C -175 70 -135 60 -125 50 C -145 30 -175 20 -185 0 C -195 -20 -165 -40 -145 -60 C -155 -140 -125 -240 -40 -270 Z"
            fill="rgba(56, 189, 248, 0.08)"
            stroke="#38bdf8"
            strokeWidth="3.5"
            strokeDasharray="8 6"
          />

          {/* Outer Ear / Pinna on silhouette */}
          <path
            d="M 45 -45 C 80 -35 85 10 70 40 C 55 65 35 55 35 35"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3.5"
          />

          {/* 2. Anatomically Accurate Inner Skull (Cranium & Facial Skeleton) */}
          <g transform="translate(0, -20)">
            {/* Cranial Vault (Tempurung Kepala) */}
            <path
              d="M -115 -50 C -105 -130 -50 -210 20 -210 C 90 -210 150 -165 170 -100 C 185 -30 175 40 145 80 C 120 100 85 80 65 60 L 40 30 L -50 40 L -90 40 C -100 30 -90 0 -115 -50 Z"
              fill="#1e293b"
              stroke="#fbbf24"
              strokeWidth="5"
            />

            {/* Cranial Suture Lines */}
            <path d="M 25 -210 Q 15 -140 -10 -90" fill="none" stroke="#ca8a04" strokeWidth="2.5" strokeDasharray="4 4" />
            <path d="M 120 -180 Q 90 -110 50 -60" fill="none" stroke="#ca8a04" strokeWidth="2.5" strokeDasharray="4 4" />

            {/* Brain nestled inside neurocranium */}
            <g transform="translate(40, -110)">
              <path
                d="M -90 10 C -110 -50 -40 -90 10 -70 C 60 -90 110 -50 90 10 C 110 60 40 80 0 60 C -40 80 -110 60 -90 10 Z"
                fill="rgba(244, 114, 182, 0.35)"
                stroke="#f472b6"
                strokeWidth="4"
              />
              {/* Brain Gyri wrinkles */}
              <path d="M -50 -30 Q -10 0 -40 30" fill="none" stroke="#f472b6" strokeWidth="3" />
              <path d="M 20 -40 Q 50 -10 10 20" fill="none" stroke="#f472b6" strokeWidth="3" />
            </g>

            {/* Orbit / Eye Socket */}
            <ellipse cx="-65" cy="-45" rx="30" ry="38" fill="#0f172a" stroke="#fbbf24" strokeWidth="3.5" />

            {/* Nasal Cavity */}
            <polygon points="-100,0 -80,18 -90,34 -105,15" fill="#0f172a" stroke="#ca8a04" strokeWidth="2.5" />

            {/* Zygomatic Arch (Tulang Pipi) */}
            <path d="M 40 20 Q -10 15 -50 -5" fill="none" stroke="#facc15" strokeWidth="6" strokeLinecap="round" />

            {/* Teeth Row (Maxilla & Mandible dental arch) */}
            <g transform="translate(-100, 50)">
              {[-12, 0, 12, 24].map((tx, ti) => (
                <rect key={ti} x={tx} y="0" width="9" height="15" rx="2" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
              ))}
            </g>

            {/* Mandible (Rahang Bawah) with TMJ joint connecting right near ear */}
            <path
              d="M 38 28 C 30 50 55 90 45 110 C 35 125 -10 130 -50 125 C -80 120 -95 105 -100 70 L -60 70 C -45 90 10 95 20 80 L 15 40 Z"
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

          {/* Vocal Cords (Pita Suara) in throat */}
          <g transform="translate(-80, 180)">
            <circle cx="0" cy="0" r="26" fill="#ef4444" opacity="0.4" />
            <circle cx="0" cy="0" r="16" fill="#f87171" filter="url(#glowCyan3)" />
            <circle cx="0" cy="0" r="8" fill="#ffffff" />
            <text
              x="-40"
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

          {/* Cochlea (Inner Ear / Koklea) nestled inside temporal bone */}
          <g transform="translate(45, -20)">
            <circle cx="0" cy="0" r="32" fill="#3b82f6" opacity="0.3" />
            <circle cx="0" cy="0" r="20" fill="#60a5fa" filter="url(#glowGold3)" />
            <circle cx="0" cy="0" r="10" fill="#ffffff" />
            {/* Cochlea snail spiral icon */}
            <path
              d="M -10 -10 C -5 -20 12 -20 18 -8 C 22 4 14 16 4 18 C -6 20 -14 12 -12 2"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <text
              x="35"
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

          {/* PATHWAY 1: AIR CONDUCTION (Cyan Arcing Path from mouth to ear) */}
          <path
            d="M -180 40 C -320 0 -280 -180 -120 -230 C 20 -260 80 -140 45 -20"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="7"
            strokeDasharray="14 10"
            strokeDashoffset={-frame * 3.5}
            filter="url(#glowCyan3)"
          />

          {/* PATHWAY 2: BONE CONDUCTION (Gold / Amber straight internal line through jaw & skull) */}
          <path
            d="M -80 180 C -40 160 0 140 30 90 L 45 -20"
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
