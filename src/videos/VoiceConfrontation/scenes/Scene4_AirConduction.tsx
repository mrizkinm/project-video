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
          <linearGradient id="lipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#be123c" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
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
              LEFT: REALISTIC HUMAN SPEAKING MOUTH PROFILE
              ══════════════════════════════════════════════════════════ */}
          <g transform="translate(-270, 0)">
            {/* Cutaway Facial Head Mass (Jaw, Chin, Lips Profile) */}
            <path
              d="M -110 -180
                 C -85 -150 -75 -110 -80 -60
                 C -80 -40 -65 -30 -35 -20
                 C -10 -12 10 -4 28 6
                 C 15 12 0 16 -12 20
                 C 2 28 16 35 26 44
                 C 10 52 -5 56 -18 64
                 C -35 74 -45 94 -55 120
                 C -65 155 -75 180 -100 200
                 L -135 200 L -135 -180 Z"
              fill="url(#skinGrad)"
              stroke="#475569"
              strokeWidth="4"
            />

            {/* Oral Cavity Interior (Rongga Mulut) */}
            <path
              d="M 5 6
                 C -25 2 -60 -5 -75 5
                 C -90 20 -90 55 -80 75
                 C -60 85 -35 75 -5 55
                 C 2 45 10 32 6 22
                 C 0 16 -8 12 -8 8
                 C -5 4 0 2 5 6 Z"
              fill="#0b0f19"
            />

            {/* Upper Lip Contour (Bibir Atas Manusia) */}
            <path
              d="M -25 -16
                 C 0 -10 16 -2 28 6
                 C 15 12 2 10 -10 4
                 C -20 -2 -24 -10 -25 -16 Z"
              fill="url(#lipGrad)"
              stroke="#e11d48"
              strokeWidth="2"
            />

            {/* Lower Lip Contour (Bibir Bawah Manusia) */}
            <path
              d="M -12 60
                 C 6 52 18 44 26 32
                 C 12 24 0 22 -8 30
                 C -14 38 -16 50 -12 60 Z"
              fill="url(#lipGrad)"
              stroke="#e11d48"
              strokeWidth="2"
            />

            {/* Hard Palate (Langit-langit Mulut) */}
            <path d="M -70 5 Q -35 -2 -4 6" fill="none" stroke="#fecdd3" strokeWidth="4" strokeLinecap="round" />

            {/* Upper Incisor Teeth (Gigi Seri Atas) */}
            <path d="M -2 2 L 14 5 L 14 18 L 0 16 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Lower Incisor Teeth (Gigi Seri Bawah) */}
            <path d="M -2 26 L 12 24 L 12 37 L 0 35 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Muscular Pink Tongue (Lidah Manusia) */}
            <path
              d="M -65 52
                 C -45 28 -25 26 -5 26
                 C 5 26 8 36 2 44
                 C -16 54 -48 62 -65 52 Z"
              fill="#fb7185"
              stroke="#f43f5e"
              strokeWidth="2"
            />

            {/* Label Tag for Mouth */}
            <g transform="translate(-40, 155)">
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
            </g>
          </g>

          {/* ══════════════════════════════════════════════════════════
              CENTER: ACOUSTIC PRESSURE WAVES IN AIR
              ══════════════════════════════════════════════════════════ */}
          <g transform="translate(-45, 10)">
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
            <g transform="translate(10, -210)">
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
          <g transform="translate(250, 10)">
            {/* Temporal Bone & Ear Tissue Surrounding (Natural Cross-Section Profile) */}
            <path
              d="M -70 -160
                 C 20 -155 60 -120 60 -40
                 C 60 40 35 115 0 155
                 C -35 185 -70 160 -60 115
                 C -50 80 -25 60 -30 20
                 C -30 5 -20 -5 -10 -15
                 C -25 -40 -40 -80 -70 -110 Z"
              fill="url(#skinGrad)"
              stroke="#64748b"
              strokeWidth="4"
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

            {/* Natural Ear Canal (Liang Telinga) - Seamless Conduit Tunnel (No black box!) */}
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
