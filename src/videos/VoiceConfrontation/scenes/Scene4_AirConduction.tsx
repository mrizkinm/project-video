import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';

export const Scene4_AirConduction: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardPop = spring({
    frame: frame - 6,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  return (
    <AbsoluteFill>
      <ParticleBackground theme="darkblue" />

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
          <filter id="cyanNeon4" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="boxGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#082f49" stopOpacity="0.98" />
          </linearGradient>
          <linearGradient id="skinGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="tongueGrad4" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#be123c" />
            <stop offset="60%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#fda4af" />
          </linearGradient>
        </defs>

        {/* Big Science Showcase Stage (Width 860px, centered nicely at y=800) */}
        <g transform={`translate(540, 800) scale(${Math.max(0, cardPop)})`}>
          <rect
            x="-430"
            y="-460"
            width="860"
            height="920"
            rx="40"
            fill="url(#boxGrad4)"
            stroke="#1e293b"
            strokeWidth="4"
            filter="drop-shadow(0px 16px 36px rgba(0,0,0,0.6))"
          />

          {/* ══════════════════════════════════════════════════════════
              LEFT: BEAUTIFULLY PROPORTIONED HUMAN FACE & SAGITTAL VOCAL TRACT
              Vertical offset: -23 so mouth opening center (y=23) aligns precisely with y=0!
              ══════════════════════════════════════════════════════════ */}
          <g transform="translate(-250, -23)">
            {/* 1. Seamless Anatomical Profile & Cross-Section Mass */}
            <path
              d="M -150 -190
                 L -60 -190
                 C -35 -190 -18 -150 -15 -110
                 C -15 -105 -12 -95 10 -65
                 C 22 -48 36 -38 36 -30
                 C 36 -24 26 -20 16 -18
                 C 14 -12 18 -6 24 -4
                 C 26 0 26 4 12 10
                 L 0 8
                 C -22 6 -45 6 -65 4
                 C -75 4 -85 12 -85 24
                 C -85 30 -78 30 -80 24
                 L -95 40
                 L -95 150
                 C -95 165 -75 165 -75 150
                 L -75 100
                 C -70 85 -55 70 -35 60
                 C -15 52 0 54 8 56
                 L 10 36
                 C 16 38 24 40 24 44
                 C 24 50 16 56 8 62
                 C 4 72 16 85 22 94
                 C 24 104 15 114 0 120
                 C -20 128 -35 138 -45 150
                 C -52 165 -55 180 -55 200
                 L -150 200 Z"
              fill="url(#skinGrad4)"
              stroke="#38bdf8"
              strokeWidth="3.5"
            />

            {/* Nostril Ala Contour */}
            <path
              d="M 16 -18 C 24 -18 26 -12 18 -8 C 12 -6 10 -12 14 -16 Z"
              fill="#060913"
              stroke="#64748b"
              strokeWidth="1.5"
            />

            {/* Nasal Cavity (Rongga Hidung / Cavitas Nasi) */}
            <path
              d="M 8 -22
                 C -15 -35 -45 -38 -75 -32
                 C -90 -26 -98 -12 -98 4
                 L -70 4
                 C -45 4 -15 -4 8 -22 Z"
              fill="#082f49"
              opacity="0.85"
            />
            <path d="M -12 -20 Q -42 -24 -68 -16" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />

            {/* Hard Palate Bone Plate (Langit-langit Mulut) */}
            <path
              d="M 0 8 C -22 6 -45 6 -65 4"
              fill="none"
              stroke="#f1f5f9"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Soft Palate & Uvula (Tekak / Anak Lidah) */}
            <path
              d="M -65 4 C -75 4 -85 12 -85 24 C -85 30 -78 30 -80 24"
              fill="#f43f5e"
              stroke="#be123c"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Upper Lip Vermilion (Bibir Atas) */}
            <path
              d="M 16 -16
                 C 14 -10 18 -6 24 -4
                 C 26 0 26 4 12 10
                 C 6 6 8 -4 16 -16 Z"
              fill="#f43f5e"
              opacity="0.9"
            />

            {/* Upper Gums & Central Incisor Tooth */}
            <path d="M -2 0 Q 6 -2 14 0" fill="none" stroke="#f43f5e" strokeWidth="5" strokeLinecap="round" />
            <polygon points="1,0 13,0 12,14 0,12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="6" y1="0" x2="5" y2="13" stroke="#e2e8f0" strokeWidth="1" />

            {/* Lower Lip Vermilion (Bibir Bawah) */}
            <path
              d="M 10 36
                 C 16 38 24 40 24 44
                 C 24 50 16 56 8 62
                 C 4 56 6 44 10 36 Z"
              fill="#f43f5e"
              opacity="0.9"
            />

            {/* Lower Gums & Central Incisor Tooth */}
            <path d="M -2 38 Q 6 40 14 38" fill="none" stroke="#f43f5e" strokeWidth="5" strokeLinecap="round" />
            <polygon points="0,26 12,24 11,38 -1,38" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Anatomical Muscular Tongue (Lidah Manusia) */}
            <path
              d="M -75 100
                 C -70 85 -55 70 -35 60
                 C -15 52 0 54 8 56
                 L 10 36
                 C 2 40 -8 46 -18 52
                 C -40 65 -65 82 -75 100 Z"
              fill="url(#tongueGrad4)"
              stroke="#be123c"
              strokeWidth="2.5"
            />
            {/* Tongue Surface Papillae Texture */}
            <path d="M -30 58 Q -14 56 2 59" fill="none" stroke="#fda4af" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M -48 64 Q -34 62 -20 66" fill="none" stroke="#fda4af" strokeWidth="2" strokeLinecap="round" />

            {/* Larynx & Vibrating Vocal Cords (Pita Suara) */}
            <g transform="translate(-85, 150)">
              <rect x="-18" y="-12" width="36" height="24" rx="6" fill="#1e293b" stroke="#facc15" strokeWidth="2.5" />
              {/* Vibrating cords */}
              <line x1="-10" y1="-4" x2="10" y2="4" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" />
              <line x1="-10" y1="4" x2="10" y2="-4" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" />
              {/* Acoustic vibration pulse */}
              <circle
                cx="0"
                cy="0"
                r={16 + Math.sin(frame * 0.5) * 5}
                fill="none"
                stroke="#facc15"
                strokeWidth="2"
                opacity={0.6 + Math.sin(frame * 0.5) * 0.4}
              />
            </g>

            {/* Acoustic Energy Stream flowing from vocal cords out parted lips */}
            <path
              d="M -85 135
                 C -85 85 -70 50 -35 38
                 C -10 30 12 24 38 23"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="4"
              strokeDasharray="6 6"
              strokeDashoffset={-frame * 4}
              filter="url(#cyanNeon4)"
            />

            {/* 🏷️ Clean Anatomical Labels (No overlapping, ample breathing room) */}
            {/* Rongga Mulut Tag (Placed gracefully above palate with pointer) */}
            <g transform="translate(-40, -65)">
              <rect x="-70" y="-18" width="140" height="36" rx="18" fill="#0c4a6e" stroke="#0284c7" strokeWidth="2" />
              <text
                x="0"
                y="6"
                fill="#38bdf8"
                fontSize="18"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="'Fredoka', sans-serif"
              >
                Rongga Mulut 👄
              </text>
              {/* Guide pointer down to oral cavity */}
              <path d="M 0 18 L 10 45" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
            </g>

            {/* Pita Suara Tag (Placed directly below larynx) */}
            <g transform="translate(-85, 195)">
              <rect x="-65" y="-14" width="130" height="28" rx="14" fill="#1e293b" stroke="#facc15" strokeWidth="2" />
              <text
                x="0"
                y="5"
                fill="#fef08a"
                fontSize="14"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="'Fredoka', sans-serif"
              >
                Pita Suara ⚡
              </text>
            </g>
          </g>

          {/* ══════════════════════════════════════════════════════════
              CENTER: ACOUSTIC PRESSURE WAVES IN AIR
              ══════════════════════════════════════════════════════════ */}
          <g transform="translate(-45, 0)">
            {[-100, -40, 20, 80, 140].map((offset, i) => {
              const waveProgress = (frame * 5 + i * 40) % 250;
              const waveX = -120 + waveProgress * 1.5;
              const alpha = Math.sin((waveProgress / 250) * Math.PI);
              return (
                <path
                  key={i}
                  d={`M ${waveX} -160 Q ${waveX + 60} 0 ${waveX} 160`}
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="7"
                  strokeLinecap="round"
                  opacity={alpha * 0.92}
                  filter="url(#cyanNeon4)"
                />
              );
            })}

            {/* Floating Air Particles */}
            {Array.from({ length: 18 }).map((_, idx) => {
              const px = ((idx * 37 + frame * 3.5) % 360) - 180;
              const py = ((idx * 53) % 260) - 130;
              const pSize = 5 + (idx % 4) * 2;
              return (
                <circle
                  key={idx}
                  cx={px}
                  cy={py}
                  r={pSize}
                  fill="#7dd3fc"
                  opacity={0.6 + Math.sin(frame * 0.2 + idx) * 0.3}
                />
              );
            })}

            {/* Molecule label badge */}
            <g transform="translate(10, -220)">
              <rect
                x="-140"
                y="-24"
                width="280"
                height="48"
                rx="24"
                fill="#0c4a6e"
                stroke="#0284c7"
                strokeWidth="2.5"
              />
              <text
                x="0"
                y="8"
                fill="#38bdf8"
                fontSize="22"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="'Fredoka', sans-serif"
              >
                Partikel Udara Bebas 💨
              </text>
            </g>
          </g>

          {/* ══════════════════════════════════════════════════════════
              RIGHT: SEAMLESS ANATOMICAL HUMAN EAR CROSS-SECTION
              (Daun Telinga -> Concha -> Liang Telinga Halus -> Gendang -> Tulang Pendengaran -> Koklea)
              ══════════════════════════════════════════════════════════ */}
          <g transform="translate(250, 0)">
            {/* Temporal Bone & Ear Tissue Surrounding (Natural Cross-Section Profile) */}
            <path
              d="M -70 -160
                 C 20 -155 60 -120 60 -40
                 C 60 40 35 115 0 155
                 C -35 185 -70 160 -60 115
                 C -50 80 -25 60 -30 20
                 C -30 5 -20 -5 -10 -15
                 C -25 -40 -40 -80 -70 -110 Z"
              fill="url(#skinGrad4)"
              stroke="#38bdf8"
              strokeWidth="3.5"
            />

            {/* Helix & Antihelix Cartilage Folds of Pinna */}
            <path
              d="M -45 -120 C 15 -110 32 -70 28 -20 C 22 25 8 70 -15 105"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Tragus Cartilage Flap */}
            <path
              d="M -45 -12 C -32 -10 -30 4 -40 14 Z"
              fill="#475569"
              stroke="#64748b"
              strokeWidth="2"
            />

            {/* Natural Ear Canal (Liang Telinga) - Seamless Conduit Tunnel */}
            {/* Top Canal Wall */}
            <path
              d="M -25 -16 C 5 -18 30 -14 65 -12"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Bottom Canal Wall */}
            <path
              d="M -25 18 C 5 18 30 14 65 12"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Canal Interior Soft Acoustic Glow */}
            <path
              d="M -25 -16 C 5 -18 30 -14 65 -12 L 65 12 C 30 14 5 18 -25 18 Z"
              fill="rgba(56, 189, 248, 0.08)"
            />

            {/* Tympanic Membrane (Gendang Telinga) - Vibrating Angled Diaphragm */}
            <line
              x1="65"
              y1="-14"
              x2="65"
              y2="14"
              stroke="#f43f5e"
              strokeWidth="7"
              strokeLinecap="round"
              filter="url(#cyanNeon4)"
            />
            {/* Acoustic shock ripples on eardrum */}
            {[-1, 1].map((vDir) => (
              <path
                key={vDir}
                d={`M 75 ${-12 * vDir} Q 82 0 75 ${12 * vDir}`}
                fill="none"
                stroke="#fca5a5"
                strokeWidth="2.5"
                opacity={0.7 + Math.sin(frame * 0.4) * 0.3}
              />
            ))}

            {/* Middle Ear Cavity & 3 Ossicles (Martil, Landasan, Sanggurdi) */}
            <g transform="translate(75, 0)">
              {/* Malleus (Martil) connected to eardrum */}
              <line x1="0" y1="0" x2="18" y2="-8" stroke="#facc15" strokeWidth="4" strokeLinecap="round" />
              {/* Incus (Landasan) */}
              <line x1="18" y1="-8" x2="32" y2="2" stroke="#facc15" strokeWidth="4" strokeLinecap="round" />
              {/* Stapes (Sanggurdi) */}
              <polygon points="32,0 44,-6 44,6" fill="none" stroke="#facc15" strokeWidth="3" />
            </g>

            {/* Inner Ear: Cochlea (Koklea / Rumah Siput) & Balance Canals */}
            <g transform="translate(145, 0)">
              {/* Semicircular canal loops above cochlea */}
              <path
                d="M -10 -15 C -25 -40 10 -40 2 -15"
                fill="none"
                stroke="#0284c7"
                strokeWidth="3"
              />
              {/* Cochlea Shell */}
              <circle cx="0" cy="0" r="30" fill="#0284c7" opacity="0.3" />
              <circle cx="0" cy="0" r="18" fill="#38bdf8" filter="url(#cyanNeon4)" />
              <circle cx="0" cy="0" r="8" fill="#ffffff" />
              <path
                d="M -8 -8 C -4 -16 10 -16 14 -6 C 18 4 10 14 2 14 C -6 16 -12 10 -10 2"
                fill="none"
                stroke="#0c4a6e"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>

            {/* Labels for Ear Structure */}
            <g transform="translate(-20, 185)">
              <rect x="-80" y="-18" width="160" height="36" rx="18" fill="#0c4a6e" stroke="#0284c7" strokeWidth="2" />
              <text
                x="0"
                y="6"
                fill="#38bdf8"
                fontSize="18"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="'Fredoka', sans-serif"
              >
                Daun Telinga 👂
              </text>
            </g>

            <g transform="translate(95, -60)">
              <rect x="-70" y="-16" width="140" height="32" rx="16" fill="#1e293b" stroke="#f43f5e" strokeWidth="2" />
              <text
                x="0"
                y="5"
                fill="#fca5a5"
                fontSize="16"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="'Fredoka', sans-serif"
              >
                Gendang Telinga
              </text>
            </g>
          </g>

          {/* Bottom Explanation Banner */}
          <g transform="translate(0, 330)">
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
              Gelombang suara merambat lewat medium udara,
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
              masuk ke liang telinga lalu menggetarkan gendang telinga.
            </text>
          </g>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
