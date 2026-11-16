import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();

  // Portal pulse
  const portalGlow = interpolate(
    Math.sin((frame / 30) * Math.PI * 2),
    [-1, 1],
    [0.2, 0.45]
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #31104b 0%, #0f172a 60%, #1e1b4b 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <svg viewBox="0 0 1080 1920" style={{ width: '100%', height: '100%' }}>
        {/* Memory Filing Shelves (Left) */}
        <g transform="translate(100, 480)">
          <rect x="0" y="0" width="380" height="600" rx="24" fill="#312e81" stroke="#6366f1" strokeWidth="10" />
          
          {/* Drawer 1 */}
          <rect x="30" y="60" width="320" height="110" rx="14" fill="#4338ca" />
          <text x="190" y="130" fill="#c7d2fe" fontSize="32" fontWeight="bold" textAnchor="middle">
            MEMORI RUANGAN A
          </text>

          {/* Drawer 2 (Archived) */}
          <rect x="30" y="210" width="320" height="110" rx="14" fill="#3730a3" />
          <text x="190" y="280" fill="#a5b4fc" fontSize="28" fontWeight="bold" textAnchor="middle">
            [ DIARSIPKAN ]
          </text>

          {/* Drawer 3 */}
          <rect x="30" y="360" width="320" height="110" rx="14" fill="#1e1b4b" />
          <text x="190" y="430" fill="#6366f1" fontSize="26" fontWeight="bold" textAnchor="middle">
            MEMORI BARU (KOSONG)
          </text>
        </g>

        {/* Glowing Doorway / Reset Portal (Right) */}
        <g transform="translate(560, 450)">
          <rect
            x="0"
            y="0"
            width="420"
            height="660"
            rx="28"
            fill="#1e1b4b"
            stroke="#ec4899"
            strokeWidth="14"
          />
          <rect
            x="30"
            y="30"
            width="360"
            height="600"
            rx="20"
            fill="#f43f5e"
            opacity={portalGlow}
          />
          
          {/* Reset Symbol */}
          <circle cx="210" cy="310" r="90" fill="#f43f5e" opacity="0.3" />
          <path
            d="M 160 310 A 50 50 0 1 1 240 350"
            stroke="#ffffff"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />
          <polygon points="248,328 268,368 226,368" fill="#ffffff" />
          
          <text
            x="210"
            y="480"
            fill="#ffffff"
            fontSize="36"
            fontWeight="bold"
            textAnchor="middle"
          >
            RESET GATE
          </text>
        </g>

        {/* Animated Directional Flow Line */}
        <path
          d="M 290 1200 Q 540 1100 770 1200"
          stroke="#facc15"
          strokeWidth="12"
          strokeDasharray="20,20"
          fill="none"
        />
        <polygon points="785,1200 755,1175 760,1225" fill="#facc15" />
      </svg>
    </div>
  );
};
