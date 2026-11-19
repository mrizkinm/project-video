import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { LivingRoomHallway } from '../../../shared/environments/LivingRoomHallway';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene7_RewindHack: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. Walking backwards timeline:
  // - Frames 0-18: Thinks in hallway foreground (realizes trick)
  // - Frames 18-145: Steps backwards into doorway with 3D depth (shrinking scale & moving from foreground floor to door threshold)
  const isWalking = frame >= 18 && frame <= 148;

  // 3D Depth Interpolation:
  // Character steps from hallway foreground (X=580, Y=995, scale=1.35) backward into doorway (X=525, Y=945, scale=1.08)
  const charX = interpolate(frame, [18, 145], [580, 525], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const charY = interpolate(frame, [18, 145], [960, 920], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const charScale = interpolate(frame, [18, 145], [1.58, 1.22], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Soft darkening as he steps deep into the shadowy doorway
  const doorShadowOpacity = interpolate(frame, [80, 145], [1.0, 0.88], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // 2. Rewind Indicator pulse
  const rewindPulse = Math.sin((frame / fps) * Math.PI * 4) * 0.2 + 0.8;

  // 3. Tip card pop
  const cardScale = spring({
    frame: frame - 5,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  return (
    <AbsoluteFill>
      {/* Hallway background with clock spinning backwards */}
      <LivingRoomHallway isRewind={true} />

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
        {/* Soft Modern Rewind Badge floating above doorway */}
        <g transform={`translate(540, 205) scale(${Math.max(0, cardScale)})`}>
          <rect x="-270" y="-38" width="540" height="76" rx="38" fill="#f59e0b" stroke="#ffffff" strokeWidth="4" />
          <text
            x="0"
            y="14"
            fill="#000000"
            fontSize="32"
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="'Fredoka', sans-serif"
          >
            💡 Trik Kilat: Jalan Mundur! ⏪
          </text>
        </g>

        {/* Supporting Hint Sub-badge */}
        <g transform="translate(540, 275)">
          <rect x="-220" y="-26" width="440" height="52" rx="26" fill="rgba(15, 23, 42, 0.9)" stroke="#38bdf8" strokeWidth="2.5" />
          <text
            x="0"
            y="9"
            fill="#e0f2fe"
            fontSize="24"
            fontWeight="700"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
          >
            Kembali ke Posisi Semula ↩
          </text>
        </g>

        {/* ⏪ Dynamic Streaming Rewind Trails & Motion Lines flowing backward into the doorway */}
        {isWalking && (
          <g>
            {/* Speed trails streaming from right to left toward the door opening */}
            <g stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" opacity="0.55" strokeDasharray="28,20">
              <line x1="880" y1="880" x2="480" y2="880" strokeDashoffset={frame * 24} />
              <line x1="920" y1="980" x2="520" y2="980" strokeDashoffset={frame * 26} />
              <line x1="850" y1="1080" x2="440" y2="1080" strokeDashoffset={frame * 22} />
              <line x1="890" y1="1160" x2="480" y2="1160" strokeDashoffset={frame * 25} />
            </g>

            {/* Floating Rewind Chevrons drifting backward into the room */}
            <g fill="#38bdf8" opacity={rewindPulse * 0.75} fontWeight="900" fontSize="32">
              <text x={840 - ((frame * 12) % 350)} y="940" textAnchor="middle">◀◀</text>
              <text x={880 - (((frame + 15) * 12) % 350)} y="1040" textAnchor="middle">◀◀</text>
            </g>

            {/* Backward Heel Dust Puffs under shoes as he steps back */}
            <g transform={`translate(${charX + 45}, ${charY + 280})`} opacity="0.45">
              <circle cx="0" cy="0" r="10" fill="#ffffff" />
              <circle cx="16" cy="3" r="7" fill="#ffffff" />
            </g>
          </g>
        )}

        {/* 🚶 Main Character genuinely walking backwards from hallway back into doorway:
            - Faces forward/right towards where he came from (flipX={false})
            - Reverse walk cycle (walkDirection="backward")
            - Shrinks in 3D perspective from foreground into doorway opening */}
        <g transform={`translate(${charX}, ${charY})`} opacity={doorShadowOpacity}>
          <MainCharacter
            mood="thinking"
            isWalking={isWalking}
            walkDirection="backward"
            flipX={false}
            scale={charScale}
          />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
