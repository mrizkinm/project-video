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
          <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.98" />
          </linearGradient>
          <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
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

        {/* Central Anatomical Diagram Box (Wide 820px, y=980) */}
        <g transform={`translate(540, 980) scale(${Math.max(0, diagramPop)})`}>
          {/* Diagram Container Frame */}
          <rect
            x="-410"
            y="-380"
            width="820"
            height="760"
            rx="40"
            fill="url(#headGrad)"
            stroke="#334155"
            strokeWidth="4"
            filter="drop-shadow(0px 20px 40px rgba(0,0,0,0.5))"
          />

          {/* Grid lines inside diagram */}
          {[-260, -130, 0, 130, 260].map((coord, i) => (
            <React.Fragment key={i}>
              <line x1="-370" y1={coord} x2="370" y2={coord} stroke="#1e293b" strokeWidth="2" strokeDasharray="6 6" />
              <line x1={coord} y1="-340" x2={coord} y2="340" stroke="#1e293b" strokeWidth="2" strokeDasharray="6 6" />
            </React.Fragment>
          ))}

          {/* Stylized Human Profile Silhouette with High Contrast */}
          <path
            d="M -50 -260 C 50 -260 140 -200 160 -100 C 180 0 170 80 150 160 L 150 260 L 50 260 L 30 180 C 10 170 -40 180 -80 160 C -120 140 -150 120 -180 80 C -170 60 -130 50 -120 40 C -140 20 -170 10 -180 -10 C -190 -30 -160 -50 -140 -70 C -150 -140 -120 -230 -50 -260 Z"
            fill="#334155"
            stroke="#64748b"
            strokeWidth="5"
          />

          {/* Glowing Vocal Cords */}
          <g transform="translate(-80, 130)">
            <circle cx="0" cy="0" r="24" fill="#ef4444" opacity="0.4" />
            <circle cx="0" cy="0" r="15" fill="#f87171" filter="url(#glowCyan)" />
            <circle cx="0" cy="0" r="7" fill="#ffffff" />
            <circle
              cx="0"
              cy="0"
              r={15 + (frame % 25) * 1.5}
              fill="none"
              stroke="#fca5a5"
              strokeWidth="3"
              opacity={1 - (frame % 25) / 25}
            />
          </g>

          {/* Inner Ear / Cochlea */}
          <g transform="translate(30, -20)">
            <circle cx="0" cy="0" r="30" fill="#3b82f6" opacity="0.3" />
            <circle cx="0" cy="0" r="18" fill="#60a5fa" />
            <circle cx="0" cy="0" r="9" fill="#ffffff" />
            <path
              d="M -12 -15 C -5 -25 15 -25 20 -10 C 25 5 15 20 5 25"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>

          {/* PATHWAY 1: AIR CONDUCTION (Cyan Arcing Path) */}
          <path
            d="M -160 30 C -280 0 -250 -140 -100 -180 C -10 -200 40 -120 30 -20"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="7"
            strokeDasharray="14 10"
            strokeDashoffset={-frame * 3.5}
            filter="url(#glowCyan)"
          />

          {/* PATHWAY 2: BONE CONDUCTION (Gold / Amber straight internal line) */}
          <path
            d="M -80 130 C -30 90 0 40 30 -20"
            fill="none"
            stroke="#eab308"
            strokeWidth="11"
            strokeDasharray="18 10"
            strokeDashoffset={-frame * 4.5}
            filter="url(#glowGold)"
          />

          {/* Floating Pill Label 1: Air Conduction */}
          <g transform="translate(-180, -220)">
            <rect
              x="-150"
              y="-28"
              width="300"
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
          <g transform="translate(150, 220)">
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
