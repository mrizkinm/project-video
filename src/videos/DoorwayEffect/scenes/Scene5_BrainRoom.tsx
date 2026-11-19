import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { BrainMascot } from '../../../shared/characters/BrainMascot';

export const Scene5_BrainRoom: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stampPop = spring({
    frame: frame - 20,
    fps,
    config: { damping: 11, stiffness: 140 },
  });

  return (
    <AbsoluteFill>
      <ParticleBackground theme="purple" />

      <svg
        viewBox="0 0 1080 1920"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {/* Soft Modern Header Pill */}
        <g transform="translate(540, 260)">
          <rect x="-240" y="-36" width="480" height="72" rx="36" fill="#312e81" stroke="#818cf8" strokeWidth="4" />
          <text x="0" y="12" fill="#ffffff" fontSize="28" fontWeight="800" textAnchor="middle" letterSpacing="1">
            🧠 Di Dalam Otak Kita
          </text>
        </g>

        {/* Friendly Memory Archive Cards */}
        <g transform="translate(100, 340)">
          {/* Main Card Container */}
          <rect x="0" y="0" width="880" height="380" rx="32" fill="rgba(15, 23, 42, 0.85)" stroke="#6366f1" strokeWidth="6" />

          {/* Left Card: Memori Kamar (Diarsipkan) */}
          <g transform="translate(50, 45)">
            <rect x="0" y="0" width="360" height="190" rx="24" fill="#1e1b4b" stroke="#818cf8" strokeWidth="3" />
            <text x="40" y="60" fontSize="42">📁</text>
            <text x="100" y="64" fill="#f8fafc" fontSize="32" fontWeight="800">
              Memori Kamar
            </text>
            <rect x="30" y="105" width="300" height="50" rx="20" fill="#f59e0b" opacity="0.2" />
            <text x="180" y="138" fill="#fbbf24" fontSize="22" fontWeight="800" textAnchor="middle">
              ✓ Disimpan ke Arsip
            </text>
          </g>

          {/* Right Card: Memori Ruang Baru (Kosong) */}
          <g transform="translate(470, 45)">
            <rect x="0" y="0" width="360" height="190" rx="24" fill="#064e3b" stroke="#34d399" strokeWidth="3" />
            <text x="40" y="60" fontSize="42">📄</text>
            <text x="100" y="64" fill="#f8fafc" fontSize="30" fontWeight="800">
              Ruangan Baru
            </text>
            <rect x="30" y="105" width="300" height="50" rx="20" fill="#10b981" opacity="0.2" />
            <text x="180" y="138" fill="#34d399" fontSize="22" fontWeight="800" textAnchor="middle">
              ● Siap Lembar Baru
            </text>
          </g>

          {/* Friendly Stamp: DI-RESET OTOMATIS */}
          {frame > 18 && (
            <g transform={`translate(230, 285) rotate(-7) scale(${Math.max(0, stampPop)})`}>
              <rect x="-225" y="-45" width="450" height="90" rx="24" fill="#fee2e2" stroke="#ef4444" strokeWidth="6" />
              <text
                x="0"
                y="15"
                fontSize="34"
                fontWeight="900"
                fill="#dc2626"
                textAnchor="middle"
                letterSpacing="1"
                fontFamily="'Fredoka', sans-serif"
              >
                🔄 DI-RESET OTOMATIS
              </text>
            </g>
          )}
        </g>

        {/* Mascot Brain in Center Stage - scale 1.35x */}
        <g transform="translate(540, 970)">
          <BrainMascot mood="waving" scale={1.35} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
