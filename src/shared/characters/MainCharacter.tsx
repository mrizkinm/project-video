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

  // 1. Natural Breathing Motion
  const breathY = interpolate(
    Math.sin((frame / fps) * Math.PI * 1.5),
    [-1, 1],
    [-3.5, 3.5]
  );

  // 2. Walking Cycle (Leg swing, arm swing, body bob)
  const walkCycle = isWalking ? Math.sin((frame / fps) * Math.PI * 6.5) : 0;
  const legAngleLeft = walkCycle * 24;
  const legAngleRight = -walkCycle * 24;
  const walkBobY = isWalking ? Math.abs(Math.sin((frame / fps) * Math.PI * 6.5)) * -16 : 0;
  const armSwingLeft = isWalking ? -walkCycle * 20 : 0;
  const armSwingRight = isWalking ? walkCycle * 20 : 0;

  // 3. Eye Blinking Cycle (~3.5 seconds)
  const blinkCycle = frame % 105;
  const isBlinking = blinkCycle >= 99 && blinkCycle <= 104;

  // 4. Subtle Head Tilt by Mood
  const headTilt =
    mood === 'confused' ? 7 :
    mood === 'thinking' ? -5 :
    mood === 'shocked' ? 2 : 0;

  // 5. Idle Hover Floating
  const hoverY = isWalking ? 0 : interpolate(
    Math.sin((frame / fps) * Math.PI * 1.0),
    [-1, 1],
    [-2, 2]
  );

  // Palette: Modern Young Adult Vector Explainer (Kurzgesagt / Webtoon aesthetic)
  const skinLight = '#fde3d0';
  const skinMid = '#f7c5a4';
  const skinShadow = '#e09e78';
  const hairDark = '#181826';
  const hairMid = '#2a283e';
  const sweaterPrimary = '#0284c7';
  const sweaterAccent = '#38bdf8';
  const sweaterDark = '#0369a1';
  const pantsColor = '#1e293b';
  const pantsShadow = '#0f172a';
  const sneakerSole = '#ffffff';

  return (
    <g transform={`scale(${flipX ? -scale : scale}, ${scale})`}>
      <defs>
        <linearGradient id="skinGradModern" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={skinLight} />
          <stop offset="65%" stopColor={skinMid} />
          <stop offset="100%" stopColor={skinShadow} />
        </linearGradient>

        <linearGradient id="hairGradModern" x1="0%" y1="0%" x2="30%" y2="100%">
          <stop offset="0%" stopColor={hairMid} />
          <stop offset="100%" stopColor={hairDark} />
        </linearGradient>

        <linearGradient id="sweaterGradModern" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={sweaterAccent} />
          <stop offset="45%" stopColor={sweaterPrimary} />
          <stop offset="100%" stopColor={sweaterDark} />
        </linearGradient>

        <linearGradient id="pantsGradModern" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={pantsColor} />
          <stop offset="100%" stopColor={pantsShadow} />
        </linearGradient>

        <radialGradient id="shadowGradModern" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="sweatGradModern" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>

      {/* ── GROUND SHADOW (Anchor: cy = 200) ── */}
      <ellipse
        cx="0"
        cy="200"
        rx={100 + (isWalking ? 15 : 0)}
        ry="14"
        fill="url(#shadowGradModern)"
      />

      {/* ── 1. LEGS (Slim-Fit Chinos + Modern Sneakers) ── */}
      <g transform="translate(0, 15)">
        {/* Left Leg */}
        <g transform={`rotate(${legAngleLeft}, -30, 0)`}>
          <path
            d="M -45 0 L -49 175 L -18 175 L -14 0 Z"
            fill="url(#pantsGradModern)"
          />
          {/* Sneaker Left */}
          <g transform="translate(-60, 170)">
            <path d="M 0 20 L 52 20 C 60 20 58 6 45 6 L 10 6 Z" fill={sweaterDark} />
            <rect x="0" y="19" width="54" height="9" rx="3.5" fill={sneakerSole} />
            <path d="M 15 9 L 24 16" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          </g>
        </g>

        {/* Right Leg */}
        <g transform={`rotate(${legAngleRight}, 30, 0)`}>
          <path
            d="M 14 0 L 18 175 L 49 175 L 45 0 Z"
            fill="url(#pantsGradModern)"
          />
          {/* Sneaker Right */}
          <g transform="translate(15, 170)">
            <path d="M 0 6 L 35 6 C 48 6 46 20 55 20 L 0 20 Z" fill={sweaterDark} />
            <rect x="-3" y="19" width="60" height="9" rx="3.5" fill={sneakerSole} />
            <path d="M 18 9 L 27 16" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          </g>
        </g>
      </g>

      {/* ── 2. UPPER BODY & HEAD ── */}
      <g transform={`translate(0, ${breathY + walkBobY + hoverY})`}>

        {/* ── SLENDER HUMAN NECK ── */}
        <rect
          x="-16"
          y="-190"
          width="32"
          height="46"
          rx="7"
          fill="url(#skinGradModern)"
        />
        {/* Neck shadow under jawline */}
        <ellipse cx="0" cy="-154" rx="18" ry="5" fill="#000000" opacity="0.12" />

        {/* ── TORSO: MODERN CREWNECK SWEATER ── */}
        <path
          d="M -68 -148 C -82 -80 -70 0 -52 30 L 52 30 C 70 0 82 -80 68 -148 C 36 -160 -36 -160 -68 -148 Z"
          fill="url(#sweaterGradModern)"
          stroke={sweaterDark}
          strokeWidth="4"
        />

        {/* Ribbed Sweater Collar */}
        <path
          d="M -26 -154 Q 0 -136 26 -154"
          stroke={sweaterDark}
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M -26 -154 Q 0 -136 26 -154"
          stroke="#e0f2fe"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        />

        {/* Sweater Ribbed Bottom Hem */}
        <line
          x1="-50"
          y1="26"
          x2="50"
          y2="26"
          stroke={sweaterDark}
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Minimalist Chest Accent */}
        <path
          d="M -36 -100 L -15 -100 L -15 -80 L -25 -72 L -36 -80 Z"
          fill={sweaterDark}
          opacity="0.3"
        />

        {/* ── HEAD GROUP (Tilted by mood) ── */}
        <g transform={`translate(0, -210) rotate(${headTilt})`}>

          {/* Eureka / Shocked Aura Glow */}
          {mood === 'eureka' && (
            <circle cx="0" cy="-10" r="105" fill="#facc15" opacity="0.16" />
          )}
          {mood === 'shocked' && (
            <circle cx="0" cy="-10" r="105" fill="#ef4444" opacity="0.16" />
          )}

          {/* Ears (Human Anatomical Position) */}
          <path
            d="M -54 -8 C -63 -14 -63 12 -54 18"
            stroke={skinShadow}
            strokeWidth="4"
            fill="url(#skinGradModern)"
          />
          <path
            d="M 54 -8 C 63 -14 63 12 54 18"
            stroke={skinShadow}
            strokeWidth="4"
            fill="url(#skinGradModern)"
          />

          {/* Head & Jawline (Modern Slender Human Taper) */}
          <path
            d="M -52 -30 C -54 24 -33 58 0 64 C 33 58 54 24 52 -30 C 52 -90 -52 -90 -52 -30 Z"
            fill="url(#skinGradModern)"
            stroke={skinShadow}
            strokeWidth="3.5"
          />

          {/* ── MODERN CURTAIN HAIR ── */}
          {/* Solid Hair Cap covering full cranium (Previous base shape preserved) */}
          <path
            d="M -56 -24 C -62 -105 62 -105 56 -24 C 50 -8 38 2 30 -6 C 20 -18 12 -34 0 -34 C -12 -34 -20 -18 -30 -6 C -38 2 -50 -8 -56 -24 Z"
            fill="url(#hairGradModern)"
          />

          {/* Sideburns framing ears */}
          <path
            d="M -54 -6 L -51 15 L -46 5"
            stroke={hairDark}
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 54 -6 L 51 15 L 46 5"
            stroke={hairDark}
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Healthy Cheek Blush */}
          <ellipse cx="-30" cy="22" rx="11" ry="6" fill="#f43f5e" opacity="0.2" />
          <ellipse cx="30" cy="22" rx="11" ry="6" fill="#f43f5e" opacity="0.2" />

          {/* Nose (Clean Minimalist Bridge) */}
          <path
            d="M 0 6 L 0 20 L 5 23"
            stroke={skinShadow}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* ── FACIAL EXPRESSIONS BY MOOD ── */}
          {isBlinking ? (
            /* Natural Blink */
            <g stroke={hairDark} strokeWidth="4" strokeLinecap="round" fill="none">
              <path d="M -33 6 Q -22 -1 -12 6" />
              <path d="M 12 6 Q 22 -1 33 6" />
              <path d="M -12 42 Q 0 46 12 42" strokeWidth="3" />
            </g>
          ) : mood === 'thinking' ? (
            <g>
              {/* Asymmetrical Thinking Eyebrows */}
              <path d="M -34 -8 Q -22 -16 -10 -7" stroke={hairDark} strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M 10 -13 Q 22 -19 34 -8" stroke={hairDark} strokeWidth="4" strokeLinecap="round" fill="none" />

              {/* Eyes Looking Thoughtfully Upward */}
              <ellipse cx="-22" cy="6" rx="8" ry="9.5" fill="#ffffff" stroke={hairDark} strokeWidth="2.5" />
              <circle cx="-24" cy="3" r="5.5" fill="#0f172a" />
              <circle cx="-26" cy="1" r="2" fill="#ffffff" />

              <ellipse cx="22" cy="6" rx="8" ry="9.5" fill="#ffffff" stroke={hairDark} strokeWidth="2.5" />
              <circle cx="20" cy="3" r="5.5" fill="#0f172a" />
              <circle cx="18" cy="1" r="2" fill="#ffffff" />

              {/* Thoughtful Smirk */}
              <path d="M -9 40 Q 0 43 12 37" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            </g>
          ) : mood === 'confused' ? (
            <g>
              {/* Confused Eyebrows (One high, one furrowed) */}
              <path d="M -35 -5 Q -22 -18 -10 -7" stroke={hairDark} strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M 10 -15 Q 23 -6 35 -4" stroke={hairDark} strokeWidth="4" strokeLinecap="round" fill="none" />

              {/* Perplexed Eyes */}
              <ellipse cx="-22" cy="6" rx="8.5" ry="10" fill="#ffffff" stroke={hairDark} strokeWidth="2.5" />
              <circle cx="-21" cy="6" r="6" fill="#0f172a" />
              <circle cx="-23" cy="4" r="2" fill="#ffffff" />

              <ellipse cx="22" cy="6" rx="8.5" ry="10" fill="#ffffff" stroke={hairDark} strokeWidth="2.5" />
              <circle cx="23" cy="6" r="6" fill="#0f172a" />
              <circle cx="21" cy="4" r="2" fill="#ffffff" />

              {/* Wavy Confused Mouth */}
              <path d="M -14 40 Q -4 34 0 40 Q 4 46 14 37" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            </g>
          ) : mood === 'shocked' ? (
            <g>
              {/* High Arched Shock Eyebrows */}
              <path d="M -34 -18 Q -22 -25 -10 -18" stroke={hairDark} strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M 10 -18 Q 22 -25 34 -18" stroke={hairDark} strokeWidth="4" strokeLinecap="round" fill="none" />

              {/* Wide Eyes with Small Pinpoint Pupils */}
              <circle cx="-22" cy="6" r="11" fill="#ffffff" stroke={hairDark} strokeWidth="2.8" />
              <circle cx="-22" cy="6" r="4" fill="#0f172a" />
              <circle cx="-23" cy="4.5" r="1.5" fill="#ffffff" />

              <circle cx="22" cy="6" r="11" fill="#ffffff" stroke={hairDark} strokeWidth="2.8" />
              <circle cx="22" cy="6" r="4" fill="#0f172a" />
              <circle cx="21" cy="4.5" r="1.5" fill="#ffffff" />

              {/* Open Shocked Mouth (Gasp) */}
              <ellipse cx="0" cy="42" rx="9" ry="13" fill="#0f172a" stroke="#0f172a" strokeWidth="2" />
              <ellipse cx="0" cy="43" rx="6" ry="9" fill="#be123c" />
            </g>
          ) : mood === 'eureka' ? (
            <g>
              {/* Excited Raised Eyebrows */}
              <path d="M -34 -13 Q -22 -20 -10 -13" stroke={hairDark} strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M 10 -13 Q 22 -20 34 -13" stroke={hairDark} strokeWidth="4" strokeLinecap="round" fill="none" />

              {/* Eyes with Star Sparkles */}
              <ellipse cx="-22" cy="6" rx="9" ry="10" fill="#ffffff" stroke={hairDark} strokeWidth="2.5" />
              <circle cx="-22" cy="6" r="6.5" fill="#0f172a" />
              <text x="-22" y="10" fontSize="11" textAnchor="middle" fill="#facc15">★</text>

              <ellipse cx="22" cy="6" rx="9" ry="10" fill="#ffffff" stroke={hairDark} strokeWidth="2.5" />
              <circle cx="22" cy="6" r="6.5" fill="#0f172a" />
              <text x="22" y="10" fontSize="11" textAnchor="middle" fill="#facc15">★</text>

              {/* Triumphant Smile */}
              <path d="M -18 36 Q 0 58 18 36 Z" fill="#be123c" stroke="#0f172a" strokeWidth="2.8" />
              <path d="M -13 39 Q 0 45 13 39" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            </g>
          ) : mood === 'sleepy' ? (
            <g>
              {/* Droopy Eyebrows */}
              <path d="M -32 -6 Q -22 -3 -12 -6" stroke={hairDark} strokeWidth="3.5" strokeLinecap="round" fill="none" />
              <path d="M 12 -6 Q 22 -3 32 -6" stroke={hairDark} strokeWidth="3.5" strokeLinecap="round" fill="none" />

              {/* Half Closed Eyelids */}
              <path d="M -30 7 Q -22 0 -13 7" stroke={hairDark} strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M 13 7 Q 22 0 30 7" stroke={hairDark} strokeWidth="4" strokeLinecap="round" fill="none" />

              {/* Yawn Mouth */}
              <ellipse cx="0" cy="38" rx="7" ry="10" fill="#be123c" stroke="#0f172a" strokeWidth="2.5" />
            </g>
          ) : (
            /* Default Friendly / Confident */
            <g>
              <path d="M -32 -8 Q -22 -14 -12 -8" stroke={hairDark} strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M 12 -8 Q 22 -14 32 -8" stroke={hairDark} strokeWidth="4" strokeLinecap="round" fill="none" />

              <ellipse cx="-22" cy="6" rx="8.5" ry="9.5" fill="#ffffff" stroke={hairDark} strokeWidth="2.5" />
              <circle cx="-20" cy="6" r="5.8" fill="#0f172a" />
              <circle cx="-22" cy="4" r="2" fill="#ffffff" />

              <ellipse cx="22" cy="6" rx="8.5" ry="9.5" fill="#ffffff" stroke={hairDark} strokeWidth="2.5" />
              <circle cx="20" cy="6" r="5.8" fill="#0f172a" />
              <circle cx="18" cy="4" r="2" fill="#ffffff" />

              {/* Confident Smile */}
              <path d="M -15 36 Q 0 50 15 36" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            </g>
          )}

          {/* Anime Sweat Drop */}
          {sweatDrop && (
            <g transform="translate(45, -35)">
              <path
                d="M 0 -17 C -11 -6 -11 11 0 11 C 11 11 11 -6 0 -17 Z"
                fill="url(#sweatGradModern)"
                stroke="#0284c7"
                strokeWidth="2.5"
              />
            </g>
          )}

        </g>
        {/* ── END HEAD GROUP ── */}

        {/* ── 3. ARMS & HANDS (Rendered in Front of Torso for Natural Anatomy) ── */}

        {/* --- LEFT ARM --- */}
        {mood === 'thinking' ? (
          /* Thinking Pose: Arm crosses upward with hand resting thoughtfully under chin */
          <g>
            {/* Upper arm from shoulder to elbow */}
            <path
              d="M -66 -140 Q -102 -95 -75 -60"
              stroke="url(#sweaterGradModern)"
              strokeWidth="28"
              strokeLinecap="round"
              fill="none"
            />
            {/* Forearm from elbow up to chin */}
            <path
              d="M -75 -60 Q -48 -95 -22 -145"
              stroke="url(#sweaterGradModern)"
              strokeWidth="26"
              strokeLinecap="round"
              fill="none"
            />
            {/* Hand resting thoughtfully under chin */}
            <g transform="translate(-22, -145)">
              <circle cx="0" cy="0" r="12" fill="url(#skinGradModern)" stroke={skinShadow} strokeWidth="2.5" />
              {/* Thinking finger pointing towards chin */}
              <path d="M 0 -3 L 3 -15" stroke={skinShadow} strokeWidth="3.5" strokeLinecap="round" />
            </g>
          </g>
        ) : mood === 'shocked' ? (
          /* Shocked Pose: Hand clutching side of face */
          <g>
            <path
              d="M -66 -140 Q -102 -150 -60 -210"
              stroke="url(#sweaterGradModern)"
              strokeWidth="28"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="-60" cy="-212" r="14" fill="url(#skinGradModern)" stroke={skinShadow} strokeWidth="2.8" />
          </g>
        ) : (
          /* Relaxed / Walking Left Arm */
          <g transform={`rotate(${armSwingLeft}, -68, -140)`}>
            <path
              d="M -66 -140 Q -88 -60 -72 0"
              stroke="url(#sweaterGradModern)"
              strokeWidth="28"
              strokeLinecap="round"
              fill="none"
            />
            <circle
              cx="-72"
              cy="6"
              r="13.5"
              fill="url(#skinGradModern)"
              stroke={skinShadow}
              strokeWidth="2.5"
            />
          </g>
        )}

        {/* --- RIGHT ARM --- */}
        {mood === 'eureka' ? (
          /* Eureka Pose: Arm raised high in triumph */
          <g>
            <path
              d="M 66 -140 Q 102 -180 92 -260"
              stroke="url(#sweaterGradModern)"
              strokeWidth="28"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="92" cy="-270" r="15" fill="url(#skinGradModern)" stroke={skinShadow} strokeWidth="2.8" />
            <text x="92" y="-285" fontSize="30" textAnchor="middle">✨</text>
          </g>
        ) : mood === 'shocked' ? (
          /* Shocked Pose: Hand clutching other side of face */
          <g>
            <path
              d="M 66 -140 Q 102 -150 60 -210"
              stroke="url(#sweaterGradModern)"
              strokeWidth="28"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="60" cy="-212" r="14" fill="url(#skinGradModern)" stroke={skinShadow} strokeWidth="2.8" />
          </g>
        ) : holdingItem !== 'none' ? (
          /* Holding Item Arm: Reaching forward in front of sweater */
          <g>
            <path
              d="M 66 -140 Q 92 -80 66 -40"
              stroke="url(#sweaterGradModern)"
              strokeWidth="28"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        ) : (
          /* Relaxed / Walking Right Arm */
          <g transform={`rotate(${armSwingRight}, 68, -140)`}>
            <path
              d="M 66 -140 Q 88 -60 72 0"
              stroke="url(#sweaterGradModern)"
              strokeWidth="28"
              strokeLinecap="round"
              fill="none"
            />
            <circle
              cx="72"
              cy="6"
              r="13.5"
              fill="url(#skinGradModern)"
              stroke={skinShadow}
              strokeWidth="2.5"
            />
          </g>
        )}

        {/* ── 4. HELD ITEMS (Positioned naturally in front hand) ── */}
        {holdingItem === 'charger' && (
          <g transform="translate(66, -40)">
            {/* Hand grasping adapter */}
            <circle cx="0" cy="0" r="14" fill="url(#skinGradModern)" stroke={skinShadow} strokeWidth="2.5" />
            {/* White Cable Loop */}
            <path
              d="M 0 -3 Q 30 24 21 -48 Q 12 -112 54 -93"
              stroke="#f8fafc"
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
            />
            {/* Charger Adapter Block */}
            <rect
              x="39"
              y="-135"
              width="30"
              height="42"
              rx="7"
              fill="#f1f5f9"
              stroke="#64748b"
              strokeWidth="3"
            />
            <circle cx="54" cy="-114" r="4.5" fill="#10b981" />
            {/* Metal Prongs */}
            <line x1="46" y1="-135" x2="46" y2="-147" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />
            <line x1="62" y1="-135" x2="62" y2="-147" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />
          </g>
        )}

        {holdingItem === 'coffee' && (
          <g transform="translate(66, -38)">
            <circle cx="0" cy="0" r="14" fill="url(#skinGradModern)" stroke={skinShadow} strokeWidth="2.5" />
            {/* Coffee Cup */}
            <path
              d="M -18 -57 L -13 18 Q 0 24 13 18 L 18 -57 Z"
              fill="#f8fafc"
              stroke="#64748b"
              strokeWidth="3"
            />
            {/* Kraft Sleeve */}
            <path
              d="M -16 -33 L -13 0 Q 0 4 13 0 L 16 -33 Z"
              fill="#d97706"
              opacity="0.85"
            />
            {/* Coffee Lid */}
            <rect x="-21" y="-63" width="42" height="10" rx="3.5" fill="#ea580c" />
          </g>
        )}

        {holdingItem === 'phone' && (
          <g transform="translate(66, -40)">
            <circle cx="0" cy="0" r="14" fill="url(#skinGradModern)" stroke={skinShadow} strokeWidth="2.5" />
            <rect
              x="-12"
              y="-78"
              width="36"
              height="66"
              rx="7"
              fill="#0f172a"
              stroke="#334155"
              strokeWidth="3"
            />
            <rect x="-7" y="-72" width="27" height="52" rx="4" fill="#38bdf8" opacity="0.6" />
          </g>
        )}

        {holdingItem === 'scissors' && (
          <g transform="translate(66, -40)">
            <circle cx="0" cy="0" r="14" fill="url(#skinGradModern)" stroke={skinShadow} strokeWidth="2.5" />
            <circle cx="10" cy="-22" r="12" fill="none" stroke="#ef4444" strokeWidth="5" />
            <circle cx="25" cy="-12" r="12" fill="none" stroke="#ef4444" strokeWidth="5" />
            <line x1="18" y1="-30" x2="48" y2="-81" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
            <line x1="33" y1="-22" x2="54" y2="-72" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
          </g>
        )}

      </g>
      {/* ── END UPPER BODY ── */}
    </g>
  );
};
