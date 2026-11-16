import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Mascot spring in
  const mascotScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Mascot floating animation
  const floatY = interpolate(
    Math.sin((frame / fps) * Math.PI * 2.5),
    [-1, 1],
    [-20, 20]
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #0c4a6e 0%, #0f172a 60%, #134e4a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <svg viewBox="0 0 1080 1920" style={{ width: '100%', height: '100%' }}>
        {/* Glow Halo */}
        <circle cx="540" cy="850" r="450" fill="#38bdf8" opacity="0.15" />
        
        {/* Mascot Group */}
        <g
          transform={`translate(540, ${850 + floatY}) scale(${Math.max(0, mascotScale)})`}
        >
          {/* Shadow */}
          <ellipse cx="0" cy="380" rx="280" ry="60" fill="#000000" opacity="0.35" />

          {/* Brain Shape */}
          <path
            d="M -220 -80 C -280 -220 -110 -300 0 -220 C 110 -300 280 -220 220 -80 C 300 60 190 220 0 200 C -190 220 -300 60 -220 -80 Z"
            fill="#f472b6"
            stroke="#db2777"
            strokeWidth="18"
          />

          {/* Brain Wrinkles */}
          <path
            d="M -90 -150 Q -35 -70 -110 35 Q -145 90 -70 130"
            stroke="#db2777"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 90 -150 Q 35 -70 110 35 Q 145 90 70 130"
            stroke="#db2777"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />

          {/* Big Cute Eyes */}
          <circle cx="-90" cy="-20" r="48" fill="#0f172a" />
          <circle cx="-75" cy="-35" r="18" fill="#ffffff" />
          <circle cx="90" cy="-20" r="48" fill="#0f172a" />
          <circle cx="105" cy="-35" r="18" fill="#ffffff" />

          {/* Cheerful Smile */}
          <path
            d="M -45 65 Q 0 105 45 65"
            stroke="#0f172a"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />

          {/* Blushing Cheeks */}
          <ellipse cx="-150" cy="35" rx="30" ry="16" fill="#fb7185" opacity="0.7" />
          <ellipse cx="150" cy="35" rx="30" ry="16" fill="#fb7185" opacity="0.7" />

          {/* Waving Hands */}
          <circle cx="-270" cy="0" r="35" fill="#f472b6" />
          <circle cx="270" cy="0" r="35" fill="#f472b6" />
        </g>

        {/* Floating Sparkles */}
        <polygon points="250,550 262,580 292,592 262,604 250,634 238,604 208,592 238,580" fill="#38bdf8" />
        <polygon points="820,1180 832,1210 862,1222 832,1234 820,1264 808,1234 778,1222 808,1210" fill="#facc15" />
      </svg>
    </div>
  );
};
