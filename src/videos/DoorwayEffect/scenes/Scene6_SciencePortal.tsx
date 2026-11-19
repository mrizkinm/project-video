import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';

export const Scene6_SciencePortal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Glow pulse
  const portalPulse = interpolate(
    Math.sin((frame / fps) * Math.PI * 3),
    [-1, 1],
    [0.3, 0.7]
  );

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
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {/* Top Header Label */}
        <g transform="translate(540, 310)">
          <rect x="-260" y="-36" width="520" height="72" rx="36" fill="#0f172a" stroke="#38bdf8" strokeWidth="4" />
          <text x="0" y="12" fill="#38bdf8" fontSize="28" fontWeight="800" textAnchor="middle" letterSpacing="1">
            🚪 Ambang Pintu = Batas Babak
          </text>
        </g>

        {/* Left Side: Sebelum Lewat */}
        <g transform="translate(55, 430)">
          <rect x="0" y="0" width="390" height="720" rx="32" fill="#1e1b4b" stroke="#818cf8" strokeWidth="6" />
          {/* Base pedestal support */}
          <rect x="35" y="720" width="320" height="20" rx="10" fill="#312e81" />
          
          <rect x="25" y="40" width="340" height="65" rx="20" fill="#312e81" />
          <text x="195" y="82" fill="#c7d2fe" fontSize="28" fontWeight="800" textAnchor="middle">
            Sebelum Lewat
          </text>

          {/* Card 1 */}
          <rect x="15" y="150" width="360" height="115" rx="20" fill="#2d2b55" />
          <text x="42" y="202" fontSize="32">🎯</text>
          <text x="82" y="196" fill="#ffffff" fontSize="24" fontWeight="800">
            Niat: Ambil Barang
          </text>
          <text x="82" y="235" fill="#a5b4fc" fontSize="20" fontWeight="600">
            Konteks kamar aktif
          </text>

          {/* Card 2 */}
          <rect x="15" y="290" width="360" height="115" rx="20" fill="#2d2b55" />
          <text x="42" y="342" fontSize="32">💭</text>
          <text x="82" y="336" fill="#ffffff" fontSize="24" fontWeight="800">
            Fokus Terjaga
          </text>
          <text x="82" y="375" fill="#a5b4fc" fontSize="20" fontWeight="600">
            Memori jangka pendek
          </text>

          {/* Status bottom badge */}
          <rect x="15" y="520" width="360" height="85" rx="24" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" strokeWidth="3" />
          <text x="195" y="573" fill="#fbbf24" fontSize="24" fontWeight="800" textAnchor="middle">
            ✓ Masih Tersimpan
          </text>
        </g>

        {/* Center Doorway Frame (The Threshold Portal - grounded on floor base) */}
        <g transform="translate(485, 390)">
          {/* Grounded Base Pedestal */}
          <rect x="-25" y="860" width="160" height="30" rx="12" fill="#0f172a" stroke="#facc15" strokeWidth="4" />
          <rect x="0" y="0" width="110" height="860" rx="24" fill="#1e1e38" stroke="#facc15" strokeWidth="8" />
          <rect x="18" y="20" width="74" height="820" rx="16" fill="#fef08a" opacity={portalPulse} />
          {/* Gentle horizontal door indicator */}
          <circle cx="55" cy="420" r="32" fill="#0f172a" stroke="#facc15" strokeWidth="4" />
          <text x="55" y="432" fontSize="32" textAnchor="middle">🚪</text>
        </g>

        {/* Right Side: Setelah Lewat Pintu */}
        <g transform="translate(635, 430)">
          <rect x="0" y="0" width="390" height="720" rx="32" fill="#0f172a" stroke="#34d399" strokeWidth="6" />
          {/* Base pedestal support */}
          <rect x="35" y="720" width="320" height="20" rx="10" fill="#064e3b" />
          
          <rect x="25" y="40" width="340" height="65" rx="20" fill="#064e3b" />
          <text x="195" y="82" fill="#a7f3d0" fontSize="28" fontWeight="800" textAnchor="middle">
            Setelah Lewat
          </text>

          {/* Card 1 */}
          <rect x="15" y="150" width="360" height="115" rx="20" fill="#1e293b" />
          <text x="42" y="202" fontSize="32">🔄</text>
          <text x="82" y="196" fill="#ffffff" fontSize="24" fontWeight="800">
            Reset Lingkungan
          </text>
          <text x="82" y="235" fill="#94a3b8" fontSize="20" fontWeight="600">
            Babak baru dimulai
          </text>

          {/* Card 2 */}
          <rect x="15" y="290" width="360" height="115" rx="20" fill="#1e293b" />
          <text x="42" y="342" fontSize="32">📂</text>
          <text x="82" y="336" fill="#ffffff" fontSize="24" fontWeight="800">
            Arsip Otomatis
          </text>
          <text x="82" y="375" fill="#94a3b8" fontSize="20" fontWeight="600">
            Kapasitas dikosongkan
          </text>

          {/* Status bottom badge */}
          <rect x="15" y="520" width="360" height="85" rx="24" fill="#38bdf8" opacity="0.2" stroke="#38bdf8" strokeWidth="3" />
          <text x="195" y="573" fill="#38bdf8" fontSize="24" fontWeight="800" textAnchor="middle">
            ● Memori Di-refresh
          </text>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
