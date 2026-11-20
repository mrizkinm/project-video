import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';

export const Scene4_EmpathyMechanism: React.FC = () => {
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
          <filter id="beamGlow4" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="boxGrad4Yawn" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#082f49" stopOpacity="0.98" />
          </linearGradient>
        </defs>

        {/* 1. TOP HEADER STAMP: Mekanisme Resonansi Empati */}
        <g transform={`translate(540, 230) rotate(1) scale(${Math.max(0, stampPop)})`}>
          <rect
            x="-310"
            y="-38"
            width="620"
            height="76"
            rx="26"
            fill="#0f172a"
            stroke="#06b6d4"
            strokeWidth="4"
            filter="drop-shadow(0px 8px 24px rgba(6, 182, 212, 0.4))"
          />
          <text
            x="0"
            y="12"
            fill="#a5f3fc"
            fontSize="28"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
            letterSpacing="1"
          >
            🪞 RESONANSI EMPATI NIRKABEL
          </text>
        </g>

        {/* 2. CENTRAL SCIENTIFIC SHOWCASE (Two Minds Synchronizing, 860px Wide, y=750) */}
        <g transform={`translate(540, 750) scale(${Math.max(0, cardPop)})`}>
          <rect
            x="-430"
            y="-380"
            width="860"
            height="760"
            rx="40"
            fill="url(#boxGrad4Yawn)"
            stroke="#1e293b"
            strokeWidth="4"
            filter="drop-shadow(0px 20px 40px rgba(0,0,0,0.6))"
          />

          {/* ── LEFT PERSON A: ORANG YANG MENGUAP (Facing Right) ── */}
          <g transform="translate(-230, -35)">
            {/* Person A Anatomical Human Profile with Natural Cranium & Yawning Mouth */}
            <path
              d="M -75 170
                 C -85 110 -95 60 -105 10
                 C -118 -40 -115 -100 -85 -140
                 C -60 -175 -15 -180 25 -160
                 C 50 -140 60 -105 58 -80
                 C 56 -68 52 -62 56 -56
                 C 64 -48 78 -40 76 -32
                 C 74 -26 62 -22 55 -16
                 C 60 -10 60 -2 50 6
                 C 25 14 5 18 5 35
                 C 5 50 30 56 48 52
                 C 54 58 52 66 42 74
                 C 38 78 48 92 44 102
                 C 34 114 12 125 -2 132
                 C -8 144 -8 160 -10 170
                 Z"
              fill="rgba(56, 189, 248, 0.14)"
              stroke="#38bdf8"
              strokeWidth="3.5"
            />
            {/* Yawn Mouth Cavity */}
            <ellipse cx="28" cy="34" rx="20" ry="18" fill="#881337" stroke="#e11d48" strokeWidth="2.5" />
            <path d="M 14 42 Q 28 50 42 42" fill="#fb7185" />

            {/* Sleepy Closed Eye & Eyebrow */}
            <path d="M 28 -52 Q 40 -60 50 -52" fill="none" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M 24 -64 Q 38 -72 52 -62" fill="none" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" />

            {/* Anatomical Ear Outline */}
            <path
              d="M -30 -40
                 C -15 -42 -12 -20 -20 -5
                 C -26 8 -30 2 -26 -12
                 C -24 -24 -20 -30 -30 -40 Z"
              fill="rgba(56, 189, 248, 0.2)"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />

            {/* Brain A Highlight inside Cranium */}
            <circle cx="-35" cy="-80" r="42" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="-35" y="-71" fill="#7dd3fc" fontSize="28" textAnchor="middle">🧠</text>

            {/* Yawn breath emission ripples */}
            {[1, 2, 3].map((rIdx) => (
              <path
                key={rIdx}
                d="M 80 18 Q 100 34 80 50"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3"
                opacity={Math.max(0, Math.sin(frame * 0.2 + rIdx))}
                transform={`translate(${rIdx * 16}, 0)`}
              />
            ))}

            {/* Label Person A */}
            <g transform="translate(-10, 150)">
              <rect x="-85" y="-18" width="170" height="36" rx="18" fill="#0c4a6e" stroke="#0284c7" strokeWidth="2" />
              <text x="0" y="6" fill="#38bdf8" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
                Orang A (Nguap) 🥱
              </text>
            </g>
          </g>

          {/* ── WIRELESS MIRROR RESONANCE BEAMS (Between Brain A and Brain B) ── */}
          <g transform="translate(0, -110)">
            {/* Connecting pulsing laser beam */}
            <line
              x1="-190"
              y1="0"
              x2="190"
              y2="0"
              stroke="#06b6d4"
              strokeWidth="4"
              strokeDasharray="8 8"
              strokeDashoffset={-frame * 6}
              filter="url(#beamGlow4)"
            />

            {/* Glowing Mirror Emblem in Center */}
            <circle cx="0" cy="0" r="42" fill="#0f172a" stroke="#f472b6" strokeWidth="3.5" filter="url(#beamGlow4)" />
            <text x="0" y="10" fill="#f472b6" fontSize="30" textAnchor="middle">🪞</text>

            {/* Animated wireless ping waves */}
            {[1, 2].map((pIdx) => {
              const pingScale = 1 + (((frame * 3 + pIdx * 25) % 60) / 60) * 0.5;
              const pingOp = 1 - (((frame * 3 + pIdx * 25) % 60) / 60);
              return (
                <circle
                  key={pIdx}
                  cx="0"
                  cy="0"
                  r={42 * pingScale}
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                  opacity={pingOp * 0.7}
                />
              );
            })}

            {/* Beam tag */}
            <g transform="translate(0, -55)">
              <rect x="-140" y="-16" width="280" height="32" rx="16" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
              <text x="0" y="5" fill="#c7d2fe" fontSize="16" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
                Sinyal Mirror Neurons 📡
              </text>
            </g>
          </g>

          {/* ── RIGHT PERSON B: ORANG YANG TERTULAR (Facing Left) ── */}
          <g transform="translate(230, -35)">
            {/* Person B Anatomical Human Profile with Natural Cranium (Mirrored Facing Left) */}
            <path
              d="M 75 170
                 C 85 110 95 60 105 10
                 C 118 -40 115 -100 85 -140
                 C 60 -175 15 -180 -25 -160
                 C -50 -140 -60 -105 -58 -80
                 C -56 -68 -52 -62 -56 -56
                 C -64 -48 -78 -40 -76 -32
                 C -74 -26 -62 -22 -55 -16
                 C -60 -10 -60 -2 -50 6
                 C -25 14 -5 18 -5 35
                 C -5 50 -30 56 -48 52
                 C -54 58 -52 66 -42 74
                 C -38 78 -48 92 -44 102
                 C -34 114 -12 125 2 132
                 C 8 144 8 160 10 170
                 Z"
              fill="rgba(236, 72, 153, 0.14)"
              stroke="#ec4899"
              strokeWidth="3.5"
            />
            {/* Involuntary Open Mouth Cavity (Catching the yawn) */}
            <ellipse cx="-28" cy="34" rx="20" ry="18" fill="#881337" stroke="#e11d48" strokeWidth="2.5" />
            <path d="M -14 42 Q -28 50 -42 42" fill="#fb7185" />

            {/* Surprised / Reflected Eye & Arched Brow */}
            <circle cx="-38" cy="-52" r="7.5" fill="#fbcfe8" />
            <circle cx="-38" cy="-52" r="3.5" fill="#0f172a" />
            <path d="M -24 -66 Q -38 -76 -52 -64" fill="none" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" />

            {/* Anatomical Ear Outline */}
            <path
              d="M 30 -40
                 C 15 -42 12 -20 20 -5
                 C 26 8 30 2 26 -12
                 C 24 -24 20 -30 30 -40 Z"
              fill="rgba(236, 72, 153, 0.2)"
              stroke="#ec4899"
              strokeWidth="2.5"
            />

            {/* Brain B Highlight (Firing mirror simulation) */}
            <circle
              cx="35"
              cy="-80"
              r={42 + Math.sin(frame * 0.4) * 4}
              fill="rgba(236, 72, 153, 0.28)"
              stroke="#f472b6"
              strokeWidth="2.5"
              filter="url(#beamGlow4)"
            />
            <text x="35" y="-71" fill="#f472b6" fontSize="28" textAnchor="middle">⚡</text>

            {/* Involuntary Jaw Trigger Label */}
            <g transform="translate(10, 150)">
              <rect x="-90" y="-18" width="180" height="36" rx="18" fill="#831843" stroke="#f472b6" strokeWidth="2" />
              <text x="0" y="6" fill="#fbcfe8" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
                Orang B (Tertular!) 😲
              </text>
            </g>
          </g>

          {/* 3. BOTTOM EXPLANATION BOX (With safe margin from subtitle badge) */}
          <g transform="translate(0, 280)">
            <rect
              x="-360"
              y="-42"
              width="720"
              height="84"
              rx="22"
              fill="rgba(15, 23, 42, 0.9)"
              stroke="#0284c7"
              strokeWidth="3"
            />
            <text
              x="0"
              y="-8"
              fill="#bae6fd"
              fontSize="22"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="'Plus Jakarta Sans', sans-serif"
            >
              Otak kita secara nirkabel "mensimulasikan"
            </text>
            <text
              x="0"
              y="24"
              fill="#38bdf8"
              fontSize="22"
              fontWeight="900"
              textAnchor="middle"
              fontFamily="'Fredoka', sans-serif"
            >
              rasa kantuk orang lain agar tercipta ikatan empati.
            </text>
          </g>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
