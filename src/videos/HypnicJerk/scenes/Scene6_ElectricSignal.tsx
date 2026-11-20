import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene6_ElectricSignal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Rapid electric pulse streaming
  const boltPulse = (frame * 32) % 240;

  // Screen flash on strike
  const flashGlow = interpolate(
    Math.sin((frame / fps) * Math.PI * 6),
    [-1, 1],
    [0.3, 0.75]
  );

  const stampPop = spring({
    frame: frame - 16,
    fps,
    config: { damping: 11, stiffness: 140 },
  });

  return (
    <AbsoluteFill style={{ backgroundColor: '#070b14', overflow: 'hidden' }}>
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
          <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="50%" stopColor="#0b1329" />
            <stop offset="100%" stopColor="#030712" />
          </linearGradient>
          <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="1080" height="1920" fill="url(#neuralGrad)" />

        {/* Top Neural Command Hub (Concise & Punchy) */}
        <g transform="translate(540, 230)">
          <rect
            x="-260"
            y="-35"
            width="520"
            height="70"
            rx="35"
            fill="rgba(15, 23, 42, 0.95)"
            stroke="#facc15"
            strokeWidth="3.5"
            filter="drop-shadow(0px 8px 22px rgba(250, 204, 21, 0.35))"
          />
          <text
            x="0"
            y="12"
            fill="#facc15"
            fontSize="26"
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="'Fredoka', sans-serif"
          >
            ⚡ SINYAL KEJUT LISTRIK KE KAKI
          </text>
        </g>

        {/* Neural Pathway Wiring (Width 840px Diagram with Anatomical Blueprint Backdrop) */}
        {/* Anatomical Wireframe Ribs & Spine Backdrop */}
        <g stroke="#1e293b" strokeWidth="3" opacity="0.45" fill="none">
          <ellipse cx="540" cy="520" rx="220" ry="80" />
          <ellipse cx="540" cy="640" rx="190" ry="70" />
          <ellipse cx="540" cy="760" rx="160" ry="60" />
          <path d="M 400 460 Q 540 400 680 460" strokeWidth="4" />
          <path d="M 440 840 Q 540 800 640 840" strokeWidth="4" />
        </g>

        {/* Branching Neural Dendrites on Left and Right */}
        <g stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" opacity="0.5" fill="none">
          <path d="M 540 495 L 420 460 L 340 475" />
          <path d="M 540 495 L 660 460 L 740 475" />
          <path d="M 540 675 L 390 640 L 320 660" />
          <path d="M 540 675 L 690 640 L 760 660" />
          <path d="M 540 855 L 430 830 L 370 850" />
          {/* Synaptic nodes */}
          <circle cx="340" cy="475" r="6" fill="#38bdf8" />
          <circle cx="740" cy="475" r="6" fill="#38bdf8" />
          <circle cx="320" cy="660" r="6" fill="#38bdf8" />
          <circle cx="760" cy="660" r="6" fill="#38bdf8" />
        </g>

        <g transform="translate(540, 315)">
          {/* Main Spinal Nerve Cable */}
          <path
            d="M 0 0 L 0 540 Q 0 620 160 680 L 260 740"
            stroke="#1e293b"
            strokeWidth="28"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 0 0 L 0 540 Q 0 620 160 680 L 260 740"
            stroke="#38bdf8"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />

          {/* Glowing High-Voltage Electric Bolts zapping down */}
          <path
            d="M 0 0 L 0 540 Q 0 620 160 680 L 260 740"
            stroke="#facc15"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray="45, 90"
            strokeDashoffset={-boltPulse}
            filter="url(#neonGlow)"
            fill="none"
          />

          {/* Electric Spark Junction Nodes */}
          <circle cx="0" cy="180" r="22" fill="#facc15" opacity={flashGlow} />
          <circle cx="0" cy="360" r="22" fill="#facc15" opacity={flashGlow} />
          <circle cx="0" cy="540" r="26" fill="#facc15" opacity={flashGlow} />

          {/* Spark Burst Icons */}
          <text x="35" y="190" fontSize="30" fill="#facc15">⚡</text>
          <text x="-60" y="370" fontSize="30" fill="#facc15">⚡</text>
          <text x="40" y="550" fontSize="34" fill="#facc15">⚡</text>
        </g>

        {/* Single Impact Action Stamp (No duplicate stacked boxes) */}
        {frame > 14 && (
          <g transform={`translate(540, 1080) rotate(-2) scale(${Math.max(0, stampPop)})`}>
            <rect
              x="-240"
              y="-36"
              width="480"
              height="72"
              rx="24"
              fill="#fee2e2"
              stroke="#ef4444"
              strokeWidth="4.5"
              filter="drop-shadow(0px 8px 24px rgba(239, 68, 68, 0.45))"
            />
            <text
              x="0"
              y="13"
              fontSize="28"
              fontWeight="900"
              fill="#dc2626"
              textAnchor="middle"
              letterSpacing="1"
              fontFamily="'Fredoka', sans-serif"
            >
              💥 TENDANGAN REFLEKS!
            </text>
          </g>
        )}
      </svg>
    </AbsoluteFill>
  );
};
