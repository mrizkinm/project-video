import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();

  const pulse = interpolate(
    Math.sin((frame / 30) * Math.PI * 2),
    [-1, 1],
    [0.25, 0.55]
  );

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
        }}
      >
        {/* Memory Cabinet on Left */}
        <g transform="translate(100, 420)">
          <rect x="0" y="0" width="380" height="640" rx="28" fill="#312e81" stroke="#818cf8" strokeWidth="12" />
          
          <rect x="30" y="60" width="320" height="120" rx="16" fill="#4338ca" />
          <text x="190" y="132" fill="#c7d2fe" fontSize="32" fontWeight="bold" textAnchor="middle">
            MEMORI RUANG A
          </text>

          <rect x="30" y="220" width="320" height="120" rx="16" fill="#3730a3" />
          <text x="190" y="292" fill="#a5b4fc" fontSize="28" fontWeight="bold" textAnchor="middle">
            [ DIARSIPKAN ]
          </text>

          <rect x="30" y="380" width="320" height="120" rx="16" fill="#1e1b4b" />
          <text x="190" y="452" fill="#6366f1" fontSize="26" fontWeight="bold" textAnchor="middle">
            MEMORI BARU (0%)
          </text>
        </g>

        {/* Glowing Doorway Portal on Right */}
        <g transform="translate(560, 390)">
          <rect x="0" y="0" width="420" height="700" rx="30" fill="#1e1b4b" stroke="#ec4899" strokeWidth="14" />
          <rect x="30" y="30" width="360" height="640" rx="20" fill="#f43f5e" opacity={pulse} />
          
          <circle cx="210" cy="330" r="100" fill="#f43f5e" opacity="0.3" />
          <path
            d="M 155 330 A 55 55 0 1 1 245 375"
            stroke="#ffffff"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />
          <polygon points="252,350 275,395 228,395" fill="#ffffff" />
          <text x="210" y="520" fill="#ffffff" fontSize="38" fontWeight="bold" textAnchor="middle">
            RESET GATE
          </text>
        </g>

        {/* Dynamic Curved Flow Arrow */}
        <path
          d="M 290 1180 Q 540 1080 780 1180"
          stroke="#facc15"
          strokeWidth="14"
          strokeDasharray="20,20"
          fill="none"
        />
        <polygon points="795,1180 765,1155 770,1205" fill="#facc15" />
      </svg>
    </AbsoluteFill>
  );
};
