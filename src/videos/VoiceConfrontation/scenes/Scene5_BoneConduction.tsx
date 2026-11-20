import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';

export const Scene5_BoneConduction: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stampPop = spring({
    frame: frame - 6,
    fps,
    config: { damping: 11, stiffness: 140 },
  });

  const cardPop = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  return (
    <AbsoluteFill>
      <ParticleBackground theme="amber" />

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
          <filter id="goldGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Single Golden Bass Booster Stamp at Top */}
        <g transform={`translate(540, 230) rotate(1.5) scale(${Math.max(0, stampPop)})`}>
          <rect
            x="-260"
            y="-36"
            width="520"
            height="72"
            rx="26"
            fill="#78350f"
            stroke="#fbbf24"
            strokeWidth="4"
            filter="drop-shadow(0px 8px 24px rgba(251, 191, 36, 0.45))"
          />
          <text
            x="0"
            y="13"
            fontSize="30"
            fontWeight="900"
            fill="#fef08a"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="'Fredoka', sans-serif"
          >
            🔊 BASS BOOSTER ALAMI! (+6dB)
          </text>
        </g>

        {/* Big Science X-Ray Showcase Box (Width 840px, centered nicely) */}
        <g transform={`translate(540, 840) scale(${Math.max(0, cardPop)})`}>
          <rect
            x="-420"
            y="-460"
            width="840"
            height="920"
            rx="40"
            fill="rgba(24, 24, 27, 0.94)"
            stroke="#854d0e"
            strokeWidth="4"
            filter="drop-shadow(0px 16px 36px rgba(0,0,0,0.5))"
          />

          {/* Detailed Stylized Human Skull Profile in X-Ray / Blueprint */}
          <g transform="translate(0, -50)">
            {/* Skull Cranium Silhouette */}
            <path
              d="M -50 -250 C 70 -250 170 -180 180 -70 C 190 30 180 120 150 190 L 140 250 L 50 250 L 30 180 C 0 170 -50 170 -90 140 C -120 120 -140 90 -160 50 C -140 30 -120 20 -110 0 C -130 -20 -150 -40 -160 -70 C -170 -140 -130 -220 -50 -250 Z"
              fill="#3f2f18"
              stroke="#fbbf24"
              strokeWidth="5"
            />

            {/* Orbit / Eye Socket */}
            <ellipse cx="-70" cy="-60" rx="36" ry="44" fill="#1c1917" stroke="#ca8a04" strokeWidth="4" />

            {/* Nasal Cavity */}
            <polygon points="-110,0 -85,25 -95,45 -115,20" fill="#1c1917" stroke="#ca8a04" strokeWidth="3" />

            {/* Teeth Row Indication */}
            <g transform="translate(-110, 80)">
              {[-15, 0, 15, 30].map((tx, ti) => (
                <rect key={ti} x={tx} y="0" width="10" height="18" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
              ))}
            </g>

            {/* Glowing Golden Mandible (Rahang Bawah) */}
            <path
              d="M -110 95 C -90 180 -20 210 60 180 C 110 160 130 100 130 30"
              fill="none"
              stroke="#facc15"
              strokeWidth="14"
              strokeLinecap="round"
              filter="url(#goldGlow)"
            />

            {/* Vocal Cords Origin (Throat base) */}
            <g transform="translate(-90, 190)">
              <circle cx="0" cy="0" r="32" fill="#ef4444" opacity="0.4" />
              <circle cx="0" cy="0" r="18" fill="#f87171" filter="url(#goldGlow)" />
              <text
                x="0"
                y="54"
                fill="#fca5a5"
                fontSize="22"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="'Fredoka', sans-serif"
              >
                Pita Suara
              </text>
            </g>

            {/* Inner Ear Cochlea (Siput telinga) Target */}
            <g transform="translate(60, -10)">
              <circle cx="0" cy="0" r="36" fill="#eab308" opacity="0.3" />
              <circle cx="0" cy="0" r="22" fill="#facc15" filter="url(#goldGlow)" />
              <circle cx="0" cy="0" r="11" fill="#ffffff" />
              <text
                x="70"
                y="8"
                fill="#fde047"
                fontSize="24"
                fontWeight="900"
                textAnchor="start"
                fontFamily="'Fredoka', sans-serif"
              >
                Koklea
              </text>
            </g>

            {/* Powerful Bone Vibration Waves Traveling Through Jaw & Skull */}
            {[-3, -1, 1, 3].map((idx) => {
              const pulse = ((frame * 6 + idx * 25) % 100) / 100;
              const curX = interpolate(pulse, [0, 1], [-90, 60]);
              const curY = interpolate(pulse, [0, 1], [190, -10]);
              return (
                <circle
                  key={idx}
                  cx={curX}
                  cy={curY}
                  r={14 + pulse * 32}
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="5"
                  opacity={1 - pulse}
                  filter="url(#goldGlow)"
                />
              );
            })}

            {/* Solid Golden Vibration Conduit Vector */}
            <path
              d="M -90 190 Q 0 160 60 -10"
              fill="none"
              stroke="#facc15"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="16 10"
              strokeDashoffset={-frame * 5}
              filter="url(#goldGlow)"
            />
          </g>

          {/* Bottom Explanation Banner */}
          <g transform="translate(0, 310)">
            <rect
              x="-360"
              y="-54"
              width="720"
              height="108"
              rx="24"
              fill="rgba(69, 26, 3, 0.75)"
              stroke="#eab308"
              strokeWidth="3"
            />
            <text
              x="0"
              y="-12"
              fill="#fef08a"
              fontSize="24"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="'Plus Jakarta Sans', sans-serif"
            >
              Kepadatan tulang menyaring nada tinggi (treble),
            </text>
            <text
              x="0"
              y="28"
              fill="#fbbf24"
              fontSize="24"
              fontWeight="900"
              textAnchor="middle"
              fontFamily="'Fredoka', sans-serif"
            >
              sekaligus melipatgandakan resonansi bass rendah!
            </text>
          </g>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
