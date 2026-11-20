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
        {/* Floating WhatsApp Voice Note Bubble Pop-Up (Cleanly positioned on right side) */}
        <g transform={`translate(700, 620) scale(${Math.max(0, chatPop)})`}>
          {/* Chat Container */}
          <rect
            x="-190"
            y="-52"
            width="380"
            height="104"
            rx="26"
            fill="#075e54"
            stroke="#25d366"
            strokeWidth="3.5"
            filter="drop-shadow(0px 10px 24px rgba(0,0,0,0.5))"
          />
          {/* Play Icon Circle */}
          <circle cx="-135" cy="0" r="26" fill="#25d366" />
          <polygon points="-140,-13 -140,13 -122,0" fill="#ffffff" />

          {/* Animated Audio Waveform Bars */}
          {[-80, -60, -40, -20, 0, 20, 40, 60, 80, 100, 120].map((barX, idx) => {
            const barH = 16 + Math.sin((frame * 0.3) + idx * 0.8) * 18;
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
          <text x="145" y="7" fill="#86efac" fontSize="18" fontWeight="800" fontFamily="'Fredoka', sans-serif">
            0:14
          </text>
        </g>

        {/* Sound Ripples from phone */}
        <g transform="translate(620, 980)">
          {[1, 2, 3].map((rIdx) => {
            const waveProgress = ((frame * 4 + rIdx * 20) % 60) / 60;
            return (
              <path
                key={rIdx}
                d="M 10 -25 C 25 -10 25 10 10 25"
                fill="none"
                stroke="#25d366"
                strokeWidth="4"
                strokeLinecap="round"
                opacity={1 - waveProgress}
                transform={`scale(${1 + waveProgress * 0.8})`}
              />
            );
          })}
        </g>

        {/* Character Holding Smartphone with Confused / Cringe Expression */}
        <g transform="translate(480, 1060)">
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
