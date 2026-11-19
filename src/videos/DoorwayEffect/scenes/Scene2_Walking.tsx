import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { LivingRoomHallway } from '../../../shared/environments/LivingRoomHallway';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene2_Walking: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ── 3D FORWARD DEPTH WALK TIMELINE (110 Frames) ──
  // 1. Frames 0-18: Character starts deep inside the bedroom (scale=0.90, Y=905), stepping forward to doorway threshold
  // 2. Frames 18-24: Front foot crosses the threshold (Y=1180), triggering golden doorway threshold contact pulse
  // 3. Frames 24-88: Dynamic forward 3D stride into the hallway foreground (scaling 1.05 -> 1.35, Y: 945 -> 995, X: 500 -> 620)
  // 4. Frames 88-110: Confident foreground stride towards the living room

  // X-position: from inside doorway opening (500) forward-rightward into hallway (635)
  const charX = interpolate(frame, [0, 22, 88, 110], [500, 520, 615, 645], {
    extrapolateRight: 'clamp',
  });

  // Y-position: deep bedroom floor (880) -> threshold sill (920) -> foreground hallway (960)
  const charY = interpolate(frame, [0, 22, 88], [880, 920, 960], {
    extrapolateRight: 'clamp',
  });

  // 3D Perspective Scaling: growing as he emerges from the deep room towards the camera (1.10x -> 1.60x)
  const charScale = interpolate(frame, [0, 22, 88], [1.10, 1.30, 1.60], {
    extrapolateRight: 'clamp',
  });

  // Lighting transition: Slightly shadowy while deep inside bedroom, brightening fully as he steps into hallway light
  const charBrightness = interpolate(frame, [0, 24], [0.82, 1.0], {
    extrapolateRight: 'clamp',
  });

  // Threshold crossing golden ripple (Frame 16-42)
  const thresholdRippleRadius = interpolate(frame, [16, 42], [10, 85], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const thresholdRippleOpacity = interpolate(frame, [16, 26, 42], [0, 0.75, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill>
      {/* Hallway environment with cozy bedroom visible through the doorway */}
      <LivingRoomHallway />

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
        {/* In-Scene Movement Goal Badge */}
        <g transform="translate(540, 310)">
          <rect
            x="-230"
            y="-34"
            width="460"
            height="68"
            rx="34"
            fill="rgba(15, 23, 42, 0.9)"
            stroke="#10b981"
            strokeWidth="3.5"
          />
          <text
            x="0"
            y="11"
            fill="#10b981"
            fontSize="26"
            fontWeight="800"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="'Fredoka', sans-serif"
          >
            🚶 MENUJU RUANGAN DEPAN
          </text>
        </g>

        {/* ── THRESHOLD STEPPING VISUAL EFFECT (Doorway contact ripple) ── */}
        {frame >= 16 && frame <= 42 && (
          <g transform="translate(520, 1180)">
            <ellipse
              cx="0"
              cy="0"
              rx={thresholdRippleRadius * 1.8}
              ry={thresholdRippleRadius * 0.45}
              fill="none"
              stroke="#fbbf24"
              strokeWidth="5"
              opacity={thresholdRippleOpacity}
            />
            <ellipse
              cx="0"
              cy="0"
              rx={thresholdRippleRadius * 0.9}
              ry={thresholdRippleRadius * 0.22}
              fill="#f59e0b"
              opacity={thresholdRippleOpacity * 0.4}
            />
          </g>
        )}

        {/* ── RHYTHMIC FOOT DUST PUFFS ALONG PERSPECTIVE FLOOR ── */}
        {frame >= 20 && frame <= 36 && (
          <g transform="translate(520, 1180)" opacity={interpolate(frame, [20, 36], [0.65, 0])}>
            <circle cx="0" cy="0" r="10" fill="#ffffff" />
            <circle cx="-14" cy="4" r="7" fill="#ffffff" />
          </g>
        )}
        {frame >= 38 && frame <= 54 && (
          <g transform="translate(550, 1215)" opacity={interpolate(frame, [38, 54], [0.6, 0])}>
            <circle cx="0" cy="0" r="12" fill="#ffffff" />
            <circle cx="-18" cy="4" r="8" fill="#ffffff" />
          </g>
        )}
        {frame >= 56 && frame <= 72 && (
          <g transform="translate(578, 1248)" opacity={interpolate(frame, [56, 72], [0.55, 0])}>
            <circle cx="0" cy="0" r="13" fill="#ffffff" />
            <circle cx="-20" cy="5" r="9" fill="#ffffff" />
          </g>
        )}
        {frame >= 74 && frame <= 90 && (
          <g transform="translate(605, 1275)" opacity={interpolate(frame, [74, 90], [0.5, 0])}>
            <circle cx="0" cy="0" r="14" fill="#ffffff" />
            <circle cx="-22" cy="5" r="10" fill="#ffffff" />
          </g>
        )}
        {frame >= 92 && (
          <g transform={`translate(${charX - 60}, 1285)`} opacity="0.35">
            <circle cx="0" cy="0" r="14" fill="#ffffff" />
            <circle cx="-25" cy="5" r="10" fill="#ffffff" />
          </g>
        )}

        {/* ── CHARACTER DYNAMICALLY STEPPING OUT OF BEDROOM INTO HALLWAY ── */}
        <g
          transform={`translate(${charX}, ${charY})`}
          style={{ filter: `brightness(${charBrightness})` }}
        >
          <MainCharacter
            mood="happy"
            isWalking={true}
            walkDirection="forward"
            scale={charScale}
          />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
