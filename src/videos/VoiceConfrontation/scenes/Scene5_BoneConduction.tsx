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
          <filter id="goldGlow5" x="-25%" y="-25%" width="150%" height="150%">
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
            fill="rgba(20, 16, 12, 0.95)"
            stroke="#854d0e"
            strokeWidth="4"
            filter="drop-shadow(0px 16px 36px rgba(0,0,0,0.6))"
          />

          {/* Detailed Anatomical Human Skull Profile in X-Ray / Blueprint */}
          <g transform="translate(0, -60)">
            {/* 1. Cranium / Neurocranium (Tempurung Kepala) */}
            <path
              d="M -130 -60 C -120 -150 -60 -240 20 -240 C 100 -240 170 -190 190 -120 C 210 -40 200 40 160 90 C 130 110 90 90 70 70 L 45 40 L 20 50 L -70 50 L -125 50 L -130 30 L -105 10 L -125 -10 L -130 -60 Z"
              fill="#2e2010"
              stroke="#fbbf24"
              strokeWidth="6"
            />

            {/* Cranial Sutures (Garis Jahitan Tulang Tengkorak) */}
            <path
              d="M 20 -240 Q 5 -170 -25 -100"
              fill="none"
              stroke="#ca8a04"
              strokeWidth="3.5"
              strokeDasharray="5 5"
            />
            <path
              d="M 140 -190 Q 100 -120 60 -50"
              fill="none"
              stroke="#ca8a04"
              strokeWidth="3.5"
              strokeDasharray="5 5"
            />
            <path
              d="M 180 -100 Q 140 -20 160 80"
              fill="none"
              stroke="#ca8a04"
              strokeWidth="3.5"
              strokeDasharray="5 5"
            />

            {/* 2. Anatomical Orbit (Lubang Mata) */}
            <ellipse
              cx="-75"
              cy="-50"
              rx="34"
              ry="42"
              fill="#0f0c08"
              stroke="#facc15"
              strokeWidth="4"
            />
            <ellipse cx="-72" cy="-48" rx="22" ry="28" fill="#1c140c" />

            {/* 3. Piriform Aperture (Rongga Hidung) */}
            <polygon
              points="-115,5 -95,28 -105,45 -125,20"
              fill="#0f0c08"
              stroke="#ca8a04"
              strokeWidth="3"
            />

            {/* 4. Zygomatic Arch (Tulang Pipi) */}
            <path
              d="M 45 20 Q -10 15 -60 -10 L -50 15 Q -10 35 45 28 Z"
              fill="#ca8a04"
              stroke="#facc15"
              strokeWidth="3"
            />

            {/* 5. Upper Teeth (Gigi Rahang Atas / Maxilla) */}
            <g transform="translate(-125, 48)">
              {[-12, 2, 16, 30, 44, 58].map((tx, ti) => (
                <rect
                  key={ti}
                  x={tx}
                  y="0"
                  width="11"
                  height="16"
                  rx="3"
                  fill="#fef9c3"
                  stroke="#ca8a04"
                  strokeWidth="2"
                />
              ))}
            </g>

            {/* 6. Lower Teeth (Gigi Rahang Bawah / Mandible) */}
            <g transform="translate(-122, 68)">
              {[-12, 2, 16, 30, 44, 58].map((tx, ti) => (
                <rect
                  key={ti}
                  x={tx}
                  y="0"
                  width="11"
                  height="16"
                  rx="3"
                  fill="#fef9c3"
                  stroke="#ca8a04"
                  strokeWidth="2"
                />
              ))}
            </g>

            {/* 7. Mandible (Tulang Rahang Bawah - TMJ Condyle connects right by ear) */}
            <path
              d="M 42 25 C 30 35 15 35 5 50 C -10 70 -25 90 -45 95 L -120 95 C -130 115 -125 140 -90 155 C -50 165 20 160 65 135 C 80 120 75 75 62 45 L 42 25 Z"
              fill="#3a2814"
              stroke="#facc15"
              strokeWidth="6"
              filter="url(#goldGlow5)"
            />

            {/* Mental Protuberance (Dagu) */}
            <circle cx="-100" cy="140" r="14" fill="#ca8a04" opacity="0.5" />

            {/* Cervical Vertebrae (Tulang Leher Belakang) */}
            <g transform="translate(100, 150)">
              {[0, 32, 64].map((vy, vi) => (
                <rect
                  key={vi}
                  x="-25"
                  y={vy}
                  width="45"
                  height="22"
                  rx="6"
                  fill="#2e2010"
                  stroke="#ca8a04"
                  strokeWidth="3"
                />
              ))}
            </g>

            {/* Vocal Cords Origin (Pita Suara di Tenggorokan / Larynx) */}
            <g transform="translate(-90, 220)">
              <circle cx="0" cy="0" r="32" fill="#ef4444" opacity="0.4" />
              <circle cx="0" cy="0" r="18" fill="#f87171" filter="url(#goldGlow5)" />
              <circle cx="0" cy="0" r="8" fill="#ffffff" />
              <text
                x="0"
                y="50"
                fill="#fca5a5"
                fontSize="22"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="'Fredoka', sans-serif"
              >
                Pita Suara
              </text>
            </g>

            {/* Cochlea (Inner Ear / Koklea) nestled inside Temporal Bone */}
            <g transform="translate(50, -10)">
              <circle cx="0" cy="0" r="38" fill="#eab308" opacity="0.3" />
              <circle cx="0" cy="0" r="24" fill="#facc15" filter="url(#goldGlow5)" />
              <circle cx="0" cy="0" r="12" fill="#ffffff" />
              {/* Cochlea Spiral Vector */}
              <path
                d="M -12 -12 C -6 -24 14 -24 20 -10 C 26 4 16 18 4 20 C -8 22 -16 14 -14 2"
                fill="none"
                stroke="#854d0e"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <text
                x="75"
                y="10"
                fill="#fde047"
                fontSize="26"
                fontWeight="900"
                textAnchor="start"
                fontFamily="'Fredoka', sans-serif"
              >
                Koklea
              </text>
            </g>

            {/* Concentric Golden Shockwaves Radiating Along Jaw & Skull Bone */}
            {[-3, -1, 1, 3].map((idx) => {
              const pulse = ((frame * 6 + idx * 25) % 100) / 100;
              const curX = interpolate(pulse, [0, 1], [-90, 50]);
              const curY = interpolate(pulse, [0, 1], [220, -10]);
              return (
                <circle
                  key={idx}
                  cx={curX}
                  cy={curY}
                  r={16 + pulse * 36}
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="5.5"
                  opacity={1 - pulse}
                  filter="url(#goldGlow5)"
                />
              );
            })}

            {/* Solid Golden Vibration Conduit Vector through Jawbone & Temporal Bone */}
            <path
              d="M -90 220 C -50 180 10 160 50 120 L 50 -10"
              fill="none"
              stroke="#facc15"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="18 12"
              strokeDashoffset={-frame * 5}
              filter="url(#goldGlow5)"
            />

            {/* Resonance Callout Pill beside Jawbone (Zero overlap) */}
            <g transform="translate(-160, 130)">
              <rect
                x="-120"
                y="-22"
                width="240"
                height="44"
                rx="22"
                fill="#451a03"
                stroke="#eab308"
                strokeWidth="3"
              />
              <text
                x="0"
                y="7"
                fill="#fde047"
                fontSize="20"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="'Fredoka', sans-serif"
              >
                Getaran Rahang 🦴
              </text>
            </g>
          </g>

          {/* Bottom Explanation Banner */}
          <g transform="translate(0, 310)">
            <rect
              x="-360"
              y="-54"
              width="720"
              height="108"
              rx="24"
              fill="rgba(69, 26, 3, 0.85)"
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
              sekaligus melipatgandakan resonansi nada rendah (bass)!
            </text>
          </g>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
