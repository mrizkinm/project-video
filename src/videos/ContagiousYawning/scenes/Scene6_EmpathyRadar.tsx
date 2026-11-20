import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';

export const Scene6_EmpathyRadar: React.FC = () => {
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
      <ParticleBackground theme="emerald" />

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
          <filter id="heartGlow6" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="meterHighGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
          <linearGradient id="meterLowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#f87171" />
          </linearGradient>
        </defs>

        {/* 1. TOP HEADER STAMP: Korelasi Empati Sosial */}
        <g transform={`translate(540, 230) rotate(-1) scale(${Math.max(0, stampPop)})`}>
          <rect
            x="-310"
            y="-38"
            width="620"
            height="76"
            rx="26"
            fill="#0f172a"
            stroke="#10b981"
            strokeWidth="4"
            filter="drop-shadow(0px 8px 24px rgba(16, 185, 129, 0.45))"
          />
          <text
            x="0"
            y="12"
            fill="#a7f3d0"
            fontSize="28"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
            letterSpacing="1"
          >
            📊 MAKIN EMPATIS = MAKIN GAMPANG NULAR!
          </text>
        </g>

        {/* 2. DUAL COMPARISON STAGE (860px Wide, y=750 - Safe Buffer from Subtitles) */}
        <g transform={`translate(540, 750) scale(${Math.max(0, cardPop)})`}>
          <rect
            x="-430"
            y="-380"
            width="860"
            height="760"
            rx="40"
            fill="#0f172a"
            stroke="#1e293b"
            strokeWidth="4"
            filter="drop-shadow(0px 20px 40px rgba(0,0,0,0.6))"
          />

          {/* ── LEFT COLUMN: EMPATI TINGGI (GREEN) ── */}
          <g transform="translate(-210, -45)">
            {/* Background Card */}
            <rect
              x="-180"
              y="-245"
              width="360"
              height="490"
              rx="28"
              fill="#064e3b"
              stroke="#10b981"
              strokeWidth="3.5"
              filter="drop-shadow(0px 10px 25px rgba(16, 185, 129, 0.3))"
            />

            {/* Glowing Heart Icon */}
            <circle cx="0" cy="-155" r="44" fill="#047857" stroke="#34d399" strokeWidth="3" filter="url(#heartGlow6)" />
            <text x="0" y="-144" fill="#ffffff" fontSize="38" textAnchor="middle">💚</text>

            {/* Title */}
            <text x="0" y="-75" fill="#a7f3d0" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
              EMPATI TINGGI
            </text>
            <text x="0" y="-46" fill="#6ee7b7" fontSize="17" fontWeight="800" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif">
              Sangat Peka & Hangat
            </text>

            {/* Meter Bar Gauge (95%) */}
            <g transform="translate(0, 5)">
              <rect x="-140" y="-15" width="280" height="30" rx="15" fill="#065f46" stroke="#10b981" strokeWidth="2" />
              <rect x="-140" y="-15" width="265" height="30" rx="15" fill="url(#meterHighGrad)" />
              <text x="0" y="6" fill="#064e3b" fontSize="17" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
                95% SANGAT PEKA
              </text>
            </g>

            {/* Result Stamp */}
            <g transform="translate(0, 115)">
              <rect x="-140" y="-34" width="280" height="68" rx="18" fill="#047857" stroke="#6ee7b7" strokeWidth="2" />
              <text x="0" y="-4" fill="#ffffff" fontSize="19" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
                ✅ CEPAT TERTULAR!
              </text>
              <text x="0" y="20" fill="#a7f3d0" fontSize="15" fontWeight="800" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif">
                Langsung ikutan nguap 🥱
              </text>
            </g>
          </g>

          {/* ── RIGHT COLUMN: MINIM EMPATI / KEBAL (RED) ── */}
          <g transform="translate(210, -45)">
            {/* Background Card */}
            <rect
              x="-180"
              y="-245"
              width="360"
              height="490"
              rx="28"
              fill="#450a0a"
              stroke="#ef4444"
              strokeWidth="3.5"
              filter="drop-shadow(0px 10px 25px rgba(239, 68, 68, 0.3))"
            />

            {/* Frozen Shield Icon */}
            <circle cx="0" cy="-155" r="44" fill="#7f1d1d" stroke="#f87171" strokeWidth="3" />
            <text x="0" y="-144" fill="#ffffff" fontSize="38" textAnchor="middle">🛡️</text>

            {/* Title */}
            <text x="0" y="-75" fill="#fecaca" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
              MINIM EMPATI
            </text>
            <text x="0" y="-46" fill="#fca5a5" fontSize="17" fontWeight="800" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif">
              Cenderung Kebal & Dingin
            </text>

            {/* Meter Bar Gauge (10%) */}
            <g transform="translate(0, 5)">
              <rect x="-140" y="-15" width="280" height="30" rx="15" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
              <rect x="-140" y="-15" width="40" height="30" rx="15" fill="url(#meterLowGrad)" />
              <text x="0" y="6" fill="#fca5a5" fontSize="17" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
                10% KEBAL
              </text>
            </g>

            {/* Result Stamp */}
            <g transform="translate(0, 115)">
              <rect x="-140" y="-34" width="280" height="68" rx="18" fill="#7f1d1d" stroke="#fca5a5" strokeWidth="2" />
              <text x="0" y="-4" fill="#ffffff" fontSize="19" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
                🚫 SUSAH KETULARAN!
              </text>
              <text x="0" y="20" fill="#fca5a5" fontSize="15" fontWeight="800" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif">
                Neuron cermin tidak merespon
              </text>
            </g>
          </g>

          {/* 3. SCIENTIFIC TAKEAWAY BANNER (Bottom, comfortably within card) */}
          <g transform="translate(0, 290)">
            <rect
              x="-360"
              y="-42"
              width="720"
              height="84"
              rx="22"
              fill="rgba(12, 74, 110, 0.75)"
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
              Penelitian membuktikan individu manipulatif
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
              dan minim empati justru sangat kebal ketularan nguap! 🧠
            </text>
          </g>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
