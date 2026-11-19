import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene2_RelatableDilemma: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Switch between Dilemma 1 (Doorway Effect) and Dilemma 2 (Coffee Drowsiness) at frame 110 (~3.6s)
  const isPart2 = frame >= 110;

  const cardPop = spring({
    frame: isPart2 ? frame - 114 : frame - 8,
    fps,
    config: { damping: 10, stiffness: 150 },
  });

  return (
    <AbsoluteFill>
      <ParticleBackground theme={isPart2 ? 'amber' : 'darkblue'} />

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
        {!isPart2 ? (
          /* PART 1: PINTU & AMNESIA (Frame 0 - 109) */
          <g>
            {/* Door Frame Graphic in Background */}
            <g transform="translate(680, 440)">
              <rect x="0" y="0" width="260" height="520" rx="20" fill="#1e1e38" stroke="#fbbf24" strokeWidth="8" />
              <rect x="15" y="15" width="230" height="490" rx="14" fill="#030712" />
              <polygon points="15,15 100,60 100,450 15,490" fill="#334155" stroke="#475569" strokeWidth="4" />
              <circle cx="85" cy="260" r="7" fill="#facc15" />
            </g>

            {/* Dilemma Badge 1 */}
            <g transform={`translate(540, 360) scale(${Math.max(0, cardPop)})`}>
              <rect x="-260" y="-38" width="520" height="76" rx="38" fill="#ef4444" stroke="#ffffff" strokeWidth="3.5" />
              <text x="0" y="12" fill="#ffffff" fontSize="28" fontWeight="900" textAnchor="middle">
                🚪 Baru Buka Pintu... Blank?!
              </text>
            </g>

            {/* Shocked/Confused Character standing above caption */}
            <g transform="translate(420, 995)">
              <MainCharacter mood="confused" sweatDrop={true} scale={1.35} />
            </g>
          </g>
        ) : (
          /* PART 2: KOPI & NGANTUK (Frame 110 - 230) */
          <g>
            {/* Dilemma Badge 2 */}
            <g transform={`translate(540, 360) scale(${Math.max(0, cardPop)})`}>
              <rect x="-290" y="-38" width="580" height="76" rx="38" fill="#d97706" stroke="#ffffff" strokeWidth="3.5" />
              <text x="0" y="12" fill="#ffffff" fontSize="28" fontWeight="900" textAnchor="middle">
                ☕ Minum Kopi... Malah Ngantuk?!
              </text>
            </g>

            {/* Sleepy Floating 'Z z z' Particles */}
            <g fill="#93c5fd" fontWeight="900">
              <text x="680" y={640 - (frame - 110) * 1.5} fontSize="42" opacity={Math.sin((frame - 110) * 0.1)}>
                Z
              </text>
              <text x="730" y={590 - (frame - 110) * 2} fontSize="32" opacity={Math.sin((frame - 110) * 0.12)}>
                z
              </text>
              <text x="770" y={550 - (frame - 110) * 2.5} fontSize="24" opacity={Math.sin((frame - 110) * 0.15)}>
                z
              </text>
            </g>

            {/* Sleepy Character Holding Coffee standing above caption */}
            <g transform="translate(540, 995)">
              <MainCharacter mood="sleepy" holdingItem="coffee" scale={1.35} />
            </g>
          </g>
        )}
      </svg>
    </AbsoluteFill>
  );
};
