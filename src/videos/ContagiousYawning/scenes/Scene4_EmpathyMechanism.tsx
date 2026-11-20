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

        {/* 2. CENTRAL SCIENTIFIC SHOWCASE (Two Minds Synchronizing, 860px Wide) */}
        <g transform={`translate(540, 840) scale(${Math.max(0, cardPop)})`}>
          <rect
            x="-430"
            y="-460"
            width="860"
            height="920"
            rx="40"
            fill="url(#boxGrad4Yawn)"
            stroke="#1e293b"
            strokeWidth="4"
            filter="drop-shadow(0px 20px 40px rgba(0,0,0,0.6))"
          />

          {/* ── LEFT PERSON A: ORANG YANG MENGUAP (Facing Right) ── */}
          <g transform="translate(-230, -30)">
            {/* Person A Anatomical Profile with Open Yawning Mouth */}
            <path
              d="M -90 -160
                 C -30 -170 30 -150 45 -100
                 C 50 -80 75 -60 70 -40
                 C 60 -35 48 -28 42 -22
                 C 15 -15 -15 -10 -15 15
                 C -15 40 20 48 48 42
                 C 55 52 65 72 45 88
                 C 25 102 0 120 0 160
                 L -90 160
                 C -100 60 -105 -60 -90 -160 Z"
              fill="rgba(56, 189, 248, 0.12)"
              stroke="#38bdf8"
              strokeWidth="4"
            />
            {/* Yawn Mouth Cavity */}
            <ellipse cx="16" cy="15" rx="22" ry="26" fill="#881337" stroke="#e11d48" strokeWidth="2" />
            <path d="M 0 24 Q 16 34 32 24" fill="#fb7185" />

            {/* Sleepy Closed Eye */}
            <path d="M 15 -75 Q 30 -85 45 -75" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />

            {/* Brain A Highlight */}
            <circle cx="-30" cy="-75" r="42" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="-30" y="-66" fill="#7dd3fc" fontSize="28" textAnchor="middle">🧠</text>

            {/* Yawn breath emission ripples */}
            {[1, 2, 3].map((rIdx) => (
              <path
                key={rIdx}
                d="M 65 -5 Q 85 15 65 35"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3"
                opacity={Math.max(0, Math.sin(frame * 0.2 + rIdx))}
                transform={`translate(${rIdx * 16}, 0)`}
              />
            ))}

            {/* Label Person A */}
            <g transform="translate(-15, 145)">
              <rect x="-85" y="-18" width="170" height="36" rx="18" fill="#0c4a6e" stroke="#0284c7" strokeWidth="2" />
              <text x="0" y="6" fill="#38bdf8" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
                Orang A (Nguap) 🥱
              </text>
            </g>
          </g>

          {/* ── WIRELESS MIRROR RESONANCE BEAMS (Between Brain A and Brain B) ── */}
          <g transform="translate(0, -105)">
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
          <g transform="translate(230, -30)">
            {/* Person B Silhouette (Mirrored facing left with jaw dropping open) */}
            <path
              d="M 90 -160
                 C 30 -170 -30 -150 -45 -100
                 C -50 -80 -75 -60 -70 -40
                 C -60 -35 -48 -28 -42 -22
                 C -15 -15 15 -10 15 15
                 C 15 40 -20 48 -48 42
                 C -55 52 -65 72 -45 88
                 C -25 102 0 120 0 160
                 L 90 160
                 C 100 60 105 -60 90 -160 Z"
              fill="rgba(236, 72, 153, 0.12)"
              stroke="#ec4899"
              strokeWidth="4"
            />
            {/* Involuntary Open Mouth Cavity (Catching the yawn) */}
            <ellipse cx="-16" cy="15" rx="22" ry="26" fill="#881337" stroke="#e11d48" strokeWidth="2" />
            <path d="M 0 24 Q -16 34 -32 24" fill="#fb7185" />

            {/* Surprised / Reflected Eye */}
            <circle cx="-30" cy="-75" r="9" fill="#fbcfe8" />
            <circle cx="-30" cy="-75" r="4.5" fill="#0f172a" />

            {/* Brain B Highlight (Firing mirror simulation) */}
            <circle
              cx="30"
              cy="-75"
              r={42 + Math.sin(frame * 0.4) * 4}
              fill="rgba(236, 72, 153, 0.28)"
              stroke="#f472b6"
              strokeWidth="2.5"
              filter="url(#beamGlow4)"
            />
            <text x="30" y="-66" fill="#f472b6" fontSize="28" textAnchor="middle">⚡</text>

            {/* Involuntary Jaw Trigger Label */}
            <g transform="translate(15, 145)">
              <rect x="-90" y="-18" width="180" height="36" rx="18" fill="#831843" stroke="#f472b6" strokeWidth="2" />
              <text x="0" y="6" fill="#fbcfe8" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
                Orang B (Tertular!) 😲
              </text>
            </g>
          </g>

          {/* 3. BOTTOM EXPLANATION BOX */}
          <g transform="translate(0, 310)">
            <rect
              x="-360"
              y="-54"
              width="720"
              height="108"
              rx="24"
              fill="rgba(15, 23, 42, 0.75)"
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
              Otak kita secara nirkabel "mensimulasikan"
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
              rasa kantuk orang lain agar tercipta ikatan empati.
            </text>
          </g>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
