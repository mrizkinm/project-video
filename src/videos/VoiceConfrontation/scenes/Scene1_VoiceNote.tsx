import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CozyBedroomBackground } from '../../../shared/environments/CozyBedroomBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene1_VoiceNote: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const chatPop = spring({
    frame: frame - 6,
    fps,
    config: { damping: 11, stiffness: 140 },
  });

  return (
    <AbsoluteFill>
      <CozyBedroomBackground hideDesk={false} showNightstand={false} />

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
          <filter id="vnGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Floating WhatsApp Voice Note Bubble - Elevated & Shifted Right (100% UNBLOCKED from Head) */}
        <g transform={`translate(730, 480) scale(${Math.max(0, chatPop)})`}>
          {/* Chat Container */}
          <rect
            x="-200"
            y="-54"
            width="400"
            height="108"
            rx="28"
            fill="#075e54"
            stroke="#25d366"
            strokeWidth="4"
            filter="url(#vnGlow)"
          />
          {/* Play Icon Circle */}
          <circle cx="-140" cy="0" r="28" fill="#25d366" />
          <polygon points="-146,-14 -146,14 -126,0" fill="#ffffff" />

          {/* Animated Audio Waveform Bars */}
          {[-85, -65, -45, -25, -5, 15, 35, 55, 75, 95, 115, 135].map((barX, idx) => {
            const barH = 16 + Math.sin((frame * 0.3) + idx * 0.8) * 20;
            return (
              <line
                key={idx}
                x1={barX}
                y1={-barH / 2}
                x2={barX}
                y2={barH / 2}
                stroke="#dcfce7"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            );
          })}
          {/* Audio Duration */}
          <text x="160" y="8" fill="#86efac" fontSize="20" fontWeight="800" fontFamily="'Fredoka', sans-serif">
            0:14
          </text>

          {/* WhatsApp Chat Pointer Tail pointing down-left toward phone */}
          <polygon points="-180,54 -160,54 -190,78" fill="#075e54" stroke="#25d366" strokeWidth="2" />
        </g>

        {/* Sound Waves radiating upwards from smartphone held in hand */}
        <g transform="translate(560, 960)">
          {[1, 2, 3].map((rIdx) => {
            const waveProgress = ((frame * 4 + rIdx * 20) % 60) / 60;
            return (
              <path
                key={rIdx}
                d="M 15 -35 C 35 -15 35 15 15 35"
                fill="none"
                stroke="#25d366"
                strokeWidth="4.5"
                strokeLinecap="round"
                opacity={1 - waveProgress}
                transform={`scale(${1 + waveProgress * 0.9})`}
              />
            );
          })}
        </g>

        {/* Character Shifted Slightly Left to Give Room to VN Bubble */}
        <g transform="translate(410, 1070)">
          <MainCharacter
            mood="confused"
            holdingItem="phone"
            scale={1.58}
            sweatDrop={true}
          />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
