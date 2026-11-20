import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene6_PhoneSpeakerDissonance: React.FC = () => {
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
      <ParticleBackground theme="purple" />

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
          <linearGradient id="eqGreen" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
          <linearGradient id="eqRed" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#f87171" />
          </linearGradient>
        </defs>

        {/* Single Punchy Warning Stamp at Top */}
        <g transform={`translate(540, 230) rotate(-2) scale(${Math.max(0, stampPop)})`}>
          <rect
            x="-260"
            y="-36"
            width="520"
            height="72"
            rx="26"
            fill="#450a0a"
            stroke="#ef4444"
            strokeWidth="4"
            filter="drop-shadow(0px 8px 24px rgba(239, 68, 68, 0.45))"
          />
          <text
            x="0"
            y="13"
            fontSize="30"
            fontWeight="900"
            fill="#fecaca"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="'Fredoka', sans-serif"
          >
            ❌ GETARAN TULANG LENYAP!
          </text>
        </g>

        {/* Comparison Equalizer Box (Elevated to y=520, height 380px) */}
        <g transform={`translate(540, 520) scale(${Math.max(0, cardPop)})`}>
          <rect
            x="-410"
            y="-190"
            width="820"
            height="380"
            rx="32"
            fill="rgba(15, 23, 42, 0.94)"
            stroke="#334155"
            strokeWidth="4"
            filter="drop-shadow(0px 16px 36px rgba(0,0,0,0.5))"
          />

          {/* Top Panel: Di Kepala (Udara + Tulang) */}
          <g transform="translate(0, -80)">
            <text
              x="-360"
              y="-35"
              fill="#34d399"
              fontSize="22"
              fontWeight="900"
              fontFamily="'Fredoka', sans-serif"
            >
              🧠 DI KEPALA: UDARA + TULANG (Hangat & Nge-Bass)
            </text>
            {/* Equalizer Bars: High bass on left, balanced mid/high */}
            {[-330, -260, -190, -120, -50, 20, 90, 160, 230, 300].map((bx, i) => {
              const bassBoost = i < 4 ? 40 : 0;
              const h = 42 + bassBoost + Math.sin(frame * 0.25 + i * 0.7) * 22;
              return (
                <rect
                  key={i}
                  x={bx}
                  y={55 - h}
                  width="52"
                  height={h}
                  rx="10"
                  fill="url(#eqGreen)"
                  opacity="0.9"
                />
              );
            })}
          </g>

          {/* Divider Line */}
          <line x1="-370" y1="15" x2="370" y2="15" stroke="#334155" strokeWidth="2.5" strokeDasharray="8 8" />

          {/* Bottom Panel: Di Speaker HP (Cuma Udara) */}
          <g transform="translate(0, 105)">
            <text
              x="-360"
              y="-25"
              fill="#f87171"
              fontSize="22"
              fontWeight="900"
              fontFamily="'Fredoka', sans-serif"
            >
              📱 DI REKAMAN HP: CUMA UDARA (Cempreng & Tipis)
            </text>
            {/* Equalizer Bars: Zero bass on left, only mid/high */}
            {[-330, -260, -190, -120, -50, 20, 90, 160, 230, 300].map((bx, i) => {
              const bassCut = i < 4 ? 12 : 55;
              const h = bassCut + Math.sin(frame * 0.35 + i * 0.9) * (i < 4 ? 6 : 24);
              return (
                <rect
                  key={i}
                  x={bx}
                  y={55 - h}
                  width="52"
                  height={h}
                  rx="10"
                  fill={i < 4 ? '#475569' : 'url(#eqRed)'}
                  opacity={i < 4 ? '0.4' : '0.9'}
                />
              );
            })}
          </g>
        </g>

        {/* Floating Smartphone Playing Thin Sound */}
        <g transform="translate(260, 920)">
          <rect x="-40" y="-70" width="80" height="140" rx="16" fill="#1e293b" stroke="#64748b" strokeWidth="4" />
          <rect x="-32" y="-55" width="64" height="110" rx="8" fill="#0f172a" />
          <polygon points="-12,-12 -12,12 8,0" fill="#f87171" />
          {/* Thin sound waves */}
          {[1, 2, 3].map((w) => (
            <path
              key={w}
              d={`M 50 ${-20 * w} Q 75 0 50 ${20 * w}`}
              fill="none"
              stroke="#f87171"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* Character Shocked / Cringing at the Bottom (Positioned comfortably without overlap) */}
        <g transform="translate(560, 1140)">
          <MainCharacter
            mood="shocked"
            scale={1.55}
            sweatDrop={true}
          />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
