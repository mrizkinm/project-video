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
          <filter id="cyanNeon" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Big Science Showcase Stage (Width 840px, centered nicely) */}
        <g transform={`translate(540, 800) scale(${Math.max(0, cardPop)})`}>
          <rect
            x="-420"
            y="-460"
            width="840"
            height="920"
            rx="40"
            fill="rgba(15, 23, 42, 0.90)"
            stroke="#1e293b"
            strokeWidth="4"
            filter="drop-shadow(0px 16px 36px rgba(0,0,0,0.5))"
          />

          {/* Left: Speaker Mouth Silhouette */}
          <g transform="translate(-280, 0)">
            <path
              d="M -70 -160 C -40 -120 -30 -60 -40 0 C -30 60 -40 120 -70 160 L -120 160 L -120 -160 Z"
              fill="#334155"
            />
            <path
              d="M -40 -50 C -10 -40 10 -30 20 -10 C 0 -5 -10 5 -40 0 C -10 5 0 15 20 20 C 10 35 -10 45 -40 50"
              fill="#f43f5e"
              stroke="#e11d48"
              strokeWidth="4"
            />
            <text
              x="-60"
              y="120"
              fill="#94a3b8"
              fontSize="24"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="'Fredoka', sans-serif"
            >
              Mulut
            </text>
          </g>

          {/* Center: Propagating Acoustic Pressure Wavefronts in Air */}
          <g transform="translate(-80, 0)">
            {[-120, -60, 0, 60, 120].map((offset, i) => {
              const waveProgress = (frame * 5 + i * 40) % 240;
              const waveX = -120 + waveProgress * 1.5;
              const alpha = Math.sin((waveProgress / 240) * Math.PI);
              return (
                <path
                  key={i}
                  d={`M ${waveX} -140 Q ${waveX + 50} 0 ${waveX} 140`}
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="7"
                  strokeLinecap="round"
                  opacity={alpha * 0.9}
                  filter="url(#cyanNeon)"
                />
              );
            })}

            {/* Floating Air Particles */}
            {Array.from({ length: 18 }).map((_, idx) => {
              const px = ((idx * 37 + frame * 3) % 360) - 180;
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
            <g transform="translate(30, -190)">
              <rect
                x="-130"
                y="-24"
                width="260"
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
                fontWeight="800"
                textAnchor="middle"
                fontFamily="'Fredoka', sans-serif"
              >
                Partikel Udara 💨
              </text>
            </g>
          </g>

          {/* Right: Outer Ear & Ear Canal Target */}
          <g transform="translate(270, 0)">
            <path
              d="M -30 -140 C 60 -120 70 -40 50 20 C 30 80 40 120 0 150 C -30 170 -60 140 -40 100 C -20 60 10 30 10 -20 C 10 -70 -20 -100 -30 -140 Z"
              fill="#334155"
              stroke="#64748b"
              strokeWidth="5"
            />
            <rect x="-60" y="-18" width="60" height="36" rx="10" fill="#0f172a" stroke="#475569" strokeWidth="3" />
            <line x1="-58" y1="-14" x2="-58" y2="14" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round" />

            <text
              x="10"
              y="200"
              fill="#94a3b8"
              fontSize="24"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="'Fredoka', sans-serif"
            >
              Liang Telinga
            </text>
          </g>

          {/* Bottom Explanation Card */}
          <g transform="translate(0, 330)">
            <rect
              x="-350"
              y="-54"
              width="700"
              height="108"
              rx="24"
              fill="rgba(12, 74, 110, 0.45)"
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
              Gelombang suara merambat lewat udara terbuka,
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
              sebagian energi frekuensi rendah (bass) menyebar luas.
            </text>
          </g>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
