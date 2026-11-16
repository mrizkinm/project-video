import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export type CharacterMood =
  | 'confused'
  | 'eureka'
  | 'happy'
  | 'sleepy'
  | 'shocked'
  | 'thinking';

export type HoldingItem = 'none' | 'charger' | 'coffee' | 'phone' | 'scissors';

interface MainCharacterProps {
  mood?: CharacterMood;
  holdingItem?: HoldingItem;
  isWalking?: boolean;
  sweatDrop?: boolean;
  flipX?: boolean;
  scale?: number;
}

export const MainCharacter: React.FC<MainCharacterProps> = ({
  mood = 'confused',
  holdingItem = 'none',
  isWalking = false,
  sweatDrop = false,
  flipX = false,
  scale = 1,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. Breathing animation (smooth sine wave)
  const breathY = interpolate(
    Math.sin((frame / fps) * Math.PI * 1.4),
    [-1, 1],
    [-5, 5]
  );

  // 2. Walking cycle with dynamic arm swing
  const walkCycle = isWalking ? Math.sin((frame / fps) * Math.PI * 6.5) : 0;
  const legAngleLeft = walkCycle * 28;
  const legAngleRight = -walkCycle * 28;
  const walkBobY = isWalking ? Math.abs(Math.sin((frame / fps) * Math.PI * 6.5)) * -18 : 0;
  const armSwingLeft = isWalking ? -walkCycle * 22 : 0;
  const armSwingRight = isWalking ? walkCycle * 22 : 0;

  // 3. Blink every ~3.5s
  const blinkCycle = frame % 105;
  const isBlinking = blinkCycle >= 99 && blinkCycle <= 104;

  // 4. Head tilt by mood
  const headTilt =
    mood === 'confused' ? 7 :
    mood === 'thinking' ? -6 :
    mood === 'shocked' ? 2 : 0;

  // 5. Tail/ear wiggle for expressiveness
  const wiggle = Math.sin((frame / fps) * Math.PI * 2.5) * 4;

  // 6. Hover bounce when idle
  const hoverY = isWalking ? 0 : interpolate(
    Math.sin((frame / fps) * Math.PI * 0.9),
    [-1, 1],
    [-3, 3]
  );

  const bodyColor = '#38bdf8';
  const bodyColorDark = '#0284c7';
  const bodyColorAccent = '#7dd3fc';
  const skinLight = '#fddcb5';
  const skinMid = '#f5be93';
  const skinDark = '#e29b68';
  const hairDark = '#2d1810';
  const hairMid = '#4a2419';

  return (
    <g transform={`scale(${flipX ? -scale : scale}, ${scale})`}>
      <defs>
        <linearGradient id="skinGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={skinLight} />
          <stop offset="60%" stopColor={skinMid} />
          <stop offset="100%" stopColor={skinDark} />
        </linearGradient>
        <linearGradient id="hairGrad2" x1="0%" y1="0%" x2="30%" y2="100%">
          <stop offset="0%" stopColor={hairMid} />
          <stop offset="100%" stopColor={hairDark} />
        </linearGradient>
        <linearGradient id="bodyGrad2" x1="-50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor={bodyColorAccent} />
          <stop offset="50%" stopColor={bodyColor} />
          <stop offset="100%" stopColor={bodyColorDark} />
        </linearGradient>
        <linearGradient id="pantsGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="shoeGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <radialGradient id="shadowGrad2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sweatGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <filter id="charGlow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ground shadow ellipse */}
      <ellipse cx="0" cy="235" rx={120 + (isWalking ? 20 : 0)} ry="18"
        fill="url(#shadowGrad2)" opacity="0.5" />

      {/* ── LEGS ── */}
      <g transform="translate(0, 125)">
        {/* Left leg */}
        <g transform={`rotate(${legAngleLeft}, -38, 0)`}>
          <rect x="-58" y="0" width="40" height="90" rx="18"
            fill="url(#pantsGrad2)" />
          {/* Shoe */}
          <ellipse cx="-38" cy="96" rx="30" ry="13" fill="url(#shoeGrad2)" />
          <ellipse cx="-28" cy="93" rx="18" ry="8" fill="#f8fafc" />
          {/* Shoe stripe */}
          <path d="M -58 93 L -18 93" stroke={bodyColor} strokeWidth="4"
            strokeLinecap="round" opacity="0.8" />
        </g>
        {/* Right leg */}
        <g transform={`rotate(${legAngleRight}, 38, 0)`}>
          <rect x="18" y="0" width="40" height="90" rx="18"
            fill="url(#pantsGrad2)" />
          <ellipse cx="38" cy="96" rx="30" ry="13" fill="url(#shoeGrad2)" />
          <ellipse cx="28" cy="93" rx="18" ry="8" fill="#f8fafc" />
          <path d="M 18 93 L 58 93" stroke={bodyColor} strokeWidth="4"
            strokeLinecap="round" opacity="0.8" />
        </g>
      </g>

      {/* ── TORSO + HEAD (breath + walk bob + hover) ── */}
      <g transform={`translate(0, ${breathY + walkBobY + hoverY})`}>

        {/* ── ARMS ── rendered behind body */}
        {/* Left arm */}
        <g transform={`rotate(${armSwingLeft - (mood === 'thinking' ? 25 : 0)}, -80, 10)`}>
          <path d="M -72 -5 Q -130 50 -105 110" stroke="url(#bodyGrad2)"
            strokeWidth="45" strokeLinecap="round" fill="none" />
          {/* Left hand */}
          <circle cx="-108" cy="118" r="22" fill="url(#skinGrad2)"
            stroke={skinDark} strokeWidth="3" />
          {/* Thinking finger on chin */}
          {mood === 'thinking' && (
            <path d="M -95 118 Q -80 115 -75 108"
              stroke={skinDark} strokeWidth="6" fill="none" strokeLinecap="round" />
          )}
        </g>
        {/* Right arm */}
        <g transform={`rotate(${armSwingRight + (mood === 'eureka' ? -40 : 0)}, 80, 10)`}>
          <path d="M 72 -5 Q 130 50 105 110" stroke="url(#bodyGrad2)"
            strokeWidth="45" strokeLinecap="round" fill="none" />
          {/* Right hand */}
          <circle cx="108" cy="118" r="22" fill="url(#skinGrad2)"
            stroke={skinDark} strokeWidth="3" />
          {/* Eureka raised fist */}
          {mood === 'eureka' && (
            <g transform="translate(108, 100)">
              <circle cx="0" cy="0" r="24" fill="#facc15" opacity="0.3" />
              <text x="0" y="12" fontSize="38" textAnchor="middle">✊</text>
            </g>
          )}
        </g>

        {/* ── HOODIE BODY ── */}
        {/* Back panel / hood shadow */}
        <ellipse cx="0" cy="-45" rx="80" ry="60" fill={bodyColorDark} opacity="0.3" />

        {/* Main hoodie shape - more rounded/cute */}
        <path
          d="M -100 -15 C -118 80 -88 148 -65 155 L 65 155 C 88 148 118 80 100 -15 C 60 -55 -60 -55 -100 -15 Z"
          fill="url(#bodyGrad2)"
          stroke={bodyColorDark}
          strokeWidth="5"
        />

        {/* Hood rim at top */}
        <path
          d="M -80 -20 C -60 -65 60 -65 80 -20"
          fill="none"
          stroke={bodyColorAccent}
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Kangaroo pocket — rounder */}
        <path
          d="M -50 72 Q 0 95 50 72 L 42 132 Q 0 140 -42 132 Z"
          fill={bodyColorDark}
          opacity="0.55"
        />

        {/* Hoodie drawstrings with knot */}
        <line x1="-14" y1="-8" x2="-16" y2="48"
          stroke="#f0f9ff" strokeWidth="6" strokeLinecap="round" />
        <line x1="14" y1="-8" x2="16" y2="48"
          stroke="#f0f9ff" strokeWidth="6" strokeLinecap="round" />
        <circle cx="-16" cy="51" r="6" fill="#94a3b8" />
        <circle cx="16" cy="51" r="6" fill="#94a3b8" />

        {/* Sleeve cuffs */}
        <ellipse cx="-108" cy="125" rx="22" ry="8" fill={bodyColorDark} opacity="0.4" />
        <ellipse cx="108" cy="125" rx="22" ry="8" fill={bodyColorDark} opacity="0.4" />

        {/* Neck */}
        <rect x="-22" y="-58" width="44" height="48" rx="14"
          fill="url(#skinGrad2)" />
        {/* Neck shadow line */}
        <ellipse cx="0" cy="-20" rx="18" ry="6" fill="#000000" opacity="0.1" />

        {/* ── HEAD GROUP ── */}
        <g transform={`translate(0, -112) rotate(${headTilt + wiggle * 0.3})`}>

          {/* Head glow aura for expressive moods */}
          {(mood === 'eureka' || mood === 'shocked') && (
            <circle cx="0" cy="0" r="115"
              fill={mood === 'eureka' ? '#facc15' : '#ef4444'}
              opacity="0.12" />
          )}

          {/* Ears */}
          <circle cx="-98" cy="5" r="26" fill="url(#skinGrad2)"
            stroke={skinDark} strokeWidth="4" />
          <circle cx="-98" cy="5" r="14" fill={skinDark} opacity="0.3" />
          <circle cx="98" cy="5" r="26" fill="url(#skinGrad2)"
            stroke={skinDark} strokeWidth="4" />
          <circle cx="98" cy="5" r="14" fill={skinDark} opacity="0.3" />

          {/* Main head shape (slightly more oval/cute) */}
          <ellipse cx="0" cy="0" rx="94" ry="97"
            fill="url(#skinGrad2)" stroke={skinDark} strokeWidth="4.5" />

          {/* ── HAIR ── more stylish with layers */}
          {/* Hair base */}
          <path
            d="M -97 -22 C -110 -130 -15 -165 22 -155 C 72 -142 128 -88 108 -22 C 92 -72 48 -92 2 -92 C -48 -92 -88 -66 -97 -22 Z"
            fill="url(#hairGrad2)"
          />
          {/* Layered hair strands */}
          <path
            d="M -92 -38 Q -50 -105 -8 -68 Q 24 -98 68 -55 Q 32 -74 -18 -74 Z"
            fill={hairDark} opacity="0.7"
          />
          {/* Hair sheen highlight */}
          <path
            d="M -30 -130 Q 10 -145 42 -120"
            stroke="#8d5b41" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.5"
          />
          {/* Side sideburn detail */}
          <path
            d="M -97 -10 Q -104 25 -97 42"
            stroke={hairDark} strokeWidth="6" strokeLinecap="round" fill="none"
          />
          <path
            d="M 97 -10 Q 104 25 97 42"
            stroke={hairDark} strokeWidth="6" strokeLinecap="round" fill="none"
          />

          {/* ── EYEBROWS + EYES + MOUTH (by mood) ── */}

          {/* Cheeks (always present, opacity varies) */}
          <ellipse cx="-58" cy="32" rx="22" ry="11"
            fill="#f43f5e" opacity={mood === 'eureka' ? 0.55 : 0.28} />
          <ellipse cx="58" cy="32" rx="22" ry="11"
            fill="#f43f5e" opacity={mood === 'eureka' ? 0.55 : 0.28} />

          {/* Nose */}
          <path d="M 0 8 Q 7 15 0 18" stroke={skinDark}
            strokeWidth="4.5" strokeLinecap="round" fill="none" />

          {/* BLINK OVERRIDE */}
          {isBlinking ? (
            <g stroke="#1e293b" strokeWidth="8" strokeLinecap="round" fill="none">
              <path d="M -58 2 Q -40 -10 -22 2" />
              <path d="M 22 2 Q 40 -10 58 2" />
              <path d="M -24 42 Q 0 32 24 42" stroke="#1e293b" strokeWidth="7" fill="none" />
            </g>
          ) : mood === 'confused' ? (
            <g>
              {/* Uneven eyebrows */}
              <path d="M -63 -32 Q -44 -46 -24 -36" stroke={hairDark}
                strokeWidth="8" strokeLinecap="round" fill="none" />
              <path d="M 24 -48 Q 44 -38 63 -32" stroke={hairDark}
                strokeWidth="8" strokeLinecap="round" fill="none" />
              {/* Round eyes with shine */}
              <circle cx="-42" cy="-5" r="18" fill="#0f172a" />
              <circle cx="-36" cy="-11" r="6" fill="#ffffff" />
              <circle cx="-44" cy="1" r="2.5" fill="#ffffff" opacity="0.6" />
              <circle cx="42" cy="-5" r="18" fill="#0f172a" />
              <circle cx="48" cy="-11" r="6" fill="#ffffff" />
              <circle cx="40" cy="1" r="2.5" fill="#ffffff" opacity="0.6" />
              {/* Wavy confused mouth */}
              <path d="M -26 44 Q -10 38 0 44 Q 10 50 26 44"
                stroke="#0f172a" strokeWidth="7" fill="none" strokeLinecap="round" />
            </g>
          ) : mood === 'eureka' ? (
            <g>
              {/* High raised excited eyebrows */}
              <path d="M -60 -44 Q -40 -58 -20 -44" stroke={hairDark}
                strokeWidth="8" strokeLinecap="round" fill="none" />
              <path d="M 20 -44 Q 40 -58 60 -44" stroke={hairDark}
                strokeWidth="8" strokeLinecap="round" fill="none" />
              {/* Sparkle stars in eyes */}
              <circle cx="-40" cy="-5" r="20" fill="#0f172a" />
              <text x="-40" y="2" fontSize="20" textAnchor="middle" fill="#facc15">★</text>
              <circle cx="40" cy="-5" r="20" fill="#0f172a" />
              <text x="40" y="2" fontSize="20" textAnchor="middle" fill="#facc15">★</text>
              {/* Big happy mouth */}
              <path d="M -32 32 Q 0 72 32 32 Z"
                fill="#e11d48" stroke="#0f172a" strokeWidth="6" />
              <path d="M -18 40 Q 0 56 18 40" fill="#fb7185" />
              {/* Teeth */}
              <path d="M -20 36 L 20 36" stroke="#f8fafc" strokeWidth="6"
                strokeLinecap="round" opacity="0.9" />
            </g>
          ) : mood === 'happy' ? (
            <g>
              <path d="M -60 -34 Q -40 -46 -20 -36" stroke={hairDark}
                strokeWidth="8" strokeLinecap="round" fill="none" />
              <path d="M 20 -36 Q 40 -46 60 -34" stroke={hairDark}
                strokeWidth="8" strokeLinecap="round" fill="none" />
              {/* Squinting happy eyes */}
              <path d="M -58 -2 Q -40 -18 -22 -2" stroke="#0f172a"
                strokeWidth="10" fill="none" strokeLinecap="round" />
              <circle cx="40" cy="-5" r="17" fill="#0f172a" />
              <circle cx="46" cy="-11" r="6" fill="#ffffff" />
              {/* Smile */}
              <path d="M -24 40 Q 0 64 24 40"
                stroke="#0f172a" strokeWidth="8" fill="none" strokeLinecap="round" />
            </g>
          ) : mood === 'shocked' ? (
            <g>
              {/* Flat shocked eyebrows */}
              <line x1="-62" y1="-46" x2="-20" y2="-46"
                stroke={hairDark} strokeWidth="9" strokeLinecap="round" />
              <line x1="20" y1="-46" x2="62" y2="-46"
                stroke={hairDark} strokeWidth="9" strokeLinecap="round" />
              {/* Wide open eyes */}
              <circle cx="-40" cy="-5" r="23" fill="#0f172a" />
              <circle cx="-34" cy="-12" r="8" fill="#ffffff" />
              <circle cx="-42" cy="4" r="3.5" fill="#ffffff" opacity="0.5" />
              <circle cx="40" cy="-5" r="23" fill="#0f172a" />
              <circle cx="46" cy="-12" r="8" fill="#ffffff" />
              <circle cx="38" cy="4" r="3.5" fill="#ffffff" opacity="0.5" />
              {/* Open mouth O-shape */}
              <ellipse cx="0" cy="45" rx="20" ry="26"
                fill="#e11d48" stroke="#0f172a" strokeWidth="6" />
              <ellipse cx="0" cy="45" rx="12" ry="18" fill="#9f1239" opacity="0.7" />
            </g>
          ) : (
            <g>
              {/* Thinking brows */}
              <path d="M -62 -36 Q -42 -32 -22 -36" stroke={hairDark}
                strokeWidth="8" strokeLinecap="round" fill="none" />
              <path d="M 22 -36 Q 42 -32 62 -36" stroke={hairDark}
                strokeWidth="8" strokeLinecap="round" fill="none" />
              {/* One eye looking up (thinking) */}
              <circle cx="-40" cy="-12" r="16" fill="#0f172a" />
              <circle cx="-36" cy="-18" r="5" fill="#ffffff" />
              <circle cx="40" cy="-12" r="16" fill="#0f172a" />
              <circle cx="46" cy="-18" r="5" fill="#ffffff" />
              {/* Small thoughtful smile */}
              <path d="M -20 42 Q 0 50 20 42"
                stroke="#0f172a" strokeWidth="7" fill="none" strokeLinecap="round" />
              {/* Thinking dots "..." in bubble */}
            </g>
          )}

          {/* Sweat drop (anime-style teardrop) */}
          {sweatDrop && (
            <g transform="translate(85, -55)">
              <path d="M 0 -20 C -16 -8 -16 16 0 16 C 16 16 16 -8 0 -20 Z"
                fill="url(#sweatGrad2)" stroke="#0891b2" strokeWidth="3" />
            </g>
          )}

        </g>
        {/* ── END HEAD ── */}

        {/* ── HELD ITEMS ── */}
        {holdingItem === 'charger' && (
          <g transform="translate(100, 55)">
            <circle cx="0" cy="0" r="24" fill="url(#skinGrad2)"
              stroke={skinDark} strokeWidth="3" />
            <path d="M 0 -4 Q 32 20 22 -55 Q 14 -120 54 -100"
              stroke="#f8fafc" strokeWidth="9" fill="none" strokeLinecap="round" />
            <rect x="40" y="-130" width="30" height="40" rx="7"
              fill="#e2e8f0" stroke="#64748b" strokeWidth="3" />
            <circle cx="55" cy="-110" r="5" fill="#10b981" />
            {/* Plug icon */}
            <line x1="48" y1="-130" x2="48" y2="-140"
              stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />
            <line x1="62" y1="-130" x2="62" y2="-140"
              stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />
          </g>
        )}

        {holdingItem === 'coffee' && (
          <g transform="translate(95, 60)">
            <circle cx="0" cy="0" r="23" fill="url(#skinGrad2)"
              stroke={skinDark} strokeWidth="3" />
            {/* Coffee cup */}
            <path d="M -18 -55 L -14 20 Q 0 26 14 20 L 18 -55 Z"
              fill="#f8fafc" stroke="#94a3b8" strokeWidth="4" />
            <rect x="-20" y="-62" width="40" height="12" rx="4" fill="#ef4444" />
            {/* Coffee waves */}
            <path d="M -6 -40 Q 0 -50 6 -40" stroke="#6b4f35"
              strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6" />
          </g>
        )}

        {holdingItem === 'phone' && (
          <g transform="translate(96, 56)">
            <circle cx="0" cy="0" r="23" fill="url(#skinGrad2)"
              stroke={skinDark} strokeWidth="3" />
            <rect x="-14" y="-75" width="38" height="66" rx="8"
              fill="#1e293b" stroke="#475569" strokeWidth="3" />
            <rect x="-10" y="-71" width="30" height="52" rx="5" fill="#38bdf8" opacity="0.4" />
            <circle cx="10" cy="-15" r="4" fill="#64748b" />
          </g>
        )}

        {holdingItem === 'scissors' && (
          <g transform="translate(96, 55)">
            <circle cx="0" cy="0" r="23" fill="url(#skinGrad2)"
              stroke={skinDark} strokeWidth="3" />
            <circle cx="10" cy="-24" r="14" fill="none"
              stroke="#ef4444" strokeWidth="6" />
            <circle cx="28" cy="-14" r="14" fill="none"
              stroke="#ef4444" strokeWidth="6" />
            <line x1="18" y1="-32" x2="50" y2="-80"
              stroke="#94a3b8" strokeWidth="7" strokeLinecap="round" />
            <line x1="34" y1="-24" x2="54" y2="-72"
              stroke="#94a3b8" strokeWidth="7" strokeLinecap="round" />
          </g>
        )}

      </g>
      {/* ── END TORSO+HEAD ── */}
    </g>
  );
};
