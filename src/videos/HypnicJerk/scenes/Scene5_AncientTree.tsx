import React from 'react';
import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { MainCharacter } from '../../../shared/characters/MainCharacter';
import { BrainMascot } from '../../../shared/characters/BrainMascot';

export const Scene5_AncientTree: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ── TIMELINE:
  // Frames 0 - 45 (0.0s - 1.5s): Sleeping comfortably on the ancient tree branch
  // Frames 45 - 60 (1.5s - 2.0s): Sudden slip! Branch vibrates, character slips off
  // Frames 60 - 175 (2.0s - 5.8s): Dramatic plunge / free-fall downward with wind speed lines!
  const isFalling = frame >= 45;

  // Branch vibration when character slips
  const branchShake = isFalling
    ? Math.sin((frame - 45) * 0.6) * 14 * Math.max(0, 1 - (frame - 45) / 45)
    : Math.sin((frame / fps) * Math.PI * 1.2) * 2;

  // Falling motion curve (smooth acceleration downwards)
  const fallProgress = interpolate(frame, [45, 95], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.4, 0.0, 0.6, 1.0),
  });

  // Coordinates of Character:
  // On branch (Frame 0-45): Resting horizontally along branch at Y=620, X=520, Rotate=-75deg
  // Falling (Frame 45-175): Tumbles downward to Y=980, X=540, Rotate=26deg (flailing)
  const charX = interpolate(fallProgress, [0, 1], [520, 540]);
  const charY = interpolate(fallProgress, [0, 1], [620, 980]);
  const charRotate =
    interpolate(fallProgress, [0, 1], [-75, 26]) +
    (isFalling ? Math.sin(frame * 0.5) * 5 : 0);

  // Speed lines animation: rushing upward at high speed
  const speedCycle = (frame * 50) % 700;

  // Pop-in springs
  const alertPop = spring({
    frame: frame - 46,
    fps,
    config: { damping: 9, stiffness: 160 },
  });

  const bubblePop = spring({
    frame: frame - 50,
    fps,
    config: { damping: 11, stiffness: 140 },
  });

  // Zzz sleeping particles (Frames 0 - 44)
  const zzzFloat = ((frame * 1.5) % 80);

  // Tumbling leaf particles during fall
  const leafData = [
    { startX: 420, startY: 620, speedX: -3.2, speedY: 8.5, rot: 7 },
    { startX: 520, startY: 600, speedX: 3.5, speedY: 9.5, rot: -8 },
    { startX: 610, startY: 630, speedX: -1.8, speedY: 7.8, rot: 6 },
    { startX: 470, startY: 650, speedX: 2.8, speedY: 10.0, rot: -9 },
    { startX: 560, startY: 610, speedX: -4.0, speedY: 8.2, rot: 10 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: '#020b07', overflow: 'hidden' }}>
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
          <linearGradient id="jungleNight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#082419" />
            <stop offset="45%" stopColor="#041810" />
            <stop offset="85%" stopColor="#020c07" />
            <stop offset="100%" stopColor="#000302" />
          </linearGradient>

          <linearGradient id="dangerRedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
        </defs>

        {/* Prehistoric Deep Jungle Night Sky */}
        <rect width="1080" height="1920" fill="url(#jungleNight)" />

        {/* Pale Prehistoric Full Moon (Top Left, clear of badges) */}
        <circle cx="180" cy="180" r="100" fill="#fef08a" opacity="0.12" />
        <circle cx="180" cy="180" r="70" fill="#fef9c3" opacity="0.65" />

        {/* ── TOP BADGES (Vertical Budget: Y = 170 to 390) ── */}
        {/* 1. Category Pill */}
        <g transform="translate(540, 185)">
          <rect
            x="-280"
            y="-32"
            width="560"
            height="64"
            rx="32"
            fill="rgba(15, 23, 42, 0.92)"
            stroke="#10b981"
            strokeWidth="3.5"
          />
          <text
            x="0"
            y="11"
            fill="#34d399"
            fontSize="26"
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="'Fredoka', sans-serif"
          >
            🌳 REFLEKS PURBA: TIDUR DI POHON
          </text>
        </g>

        {/* 2. Balance Sensor HUD */}
        <g transform="translate(540, 265)">
          {!isFalling ? (
            <g>
              <rect
                x="-250"
                y="-25"
                width="500"
                height="50"
                rx="25"
                fill="rgba(6, 78, 59, 0.9)"
                stroke="#10b981"
                strokeWidth="3"
              />
              <text
                x="0"
                y="8"
                fontSize="22"
                fontWeight="900"
                fill="#a7f3d0"
                textAnchor="middle"
                fontFamily="'Fredoka', sans-serif"
              >
                🟢 KESEIMBANGAN: NORMAL (DAHAN 15M)
              </text>
            </g>
          ) : (
            <g transform={`scale(${Math.max(0, alertPop)})`}>
              <rect
                x="-280"
                y="-30"
                width="560"
                height="60"
                rx="30"
                fill="url(#dangerRedGrad)"
                stroke="#fef08a"
                strokeWidth="3.5"
                filter="drop-shadow(0px 8px 24px rgba(239, 68, 68, 0.6))"
              />
              <text
                x="0"
                y="9"
                fontSize="24"
                fontWeight="900"
                fill="#ffffff"
                textAnchor="middle"
                fontFamily="'Fredoka', sans-serif"
                letterSpacing="1"
              >
                🚨 SENSOR KESEIMBANGAN: ANJLOK! (0G)
              </text>
            </g>
          )}
        </g>

        {/* 3. Comic Panic Speech Bubble (Frame 48+) */}
        {frame >= 48 && (
          <g transform={`translate(540, 355) scale(${Math.max(0, bubblePop)})`}>
            <rect
              x="-280"
              y="-34"
              width="560"
              height="68"
              rx="34"
              fill="#ffffff"
              stroke="#0f172a"
              strokeWidth="4"
              filter="drop-shadow(0px 10px 22px rgba(0,0,0,0.5))"
            />
            {/* Bubble Tail pointing down toward character */}
            <polygon points="-12,34 12,34 0,54" fill="#ffffff" stroke="#0f172a" strokeWidth="4" />
            <polygon points="-9,32 9,32 0,50" fill="#ffffff" />
            <text
              x="0"
              y="11"
              fontSize="24"
              fontWeight="900"
              fill="#0f172a"
              textAnchor="middle"
              fontFamily="'Fredoka', sans-serif"
            >
              "Gawat! Tubuh kita jatuh dari dahan!"
            </text>
          </g>
        )}

        {/* ── ANCIENT TREE TRUNK & BRANCH (Y = 560 - 680) ── */}
        <g transform={`translate(0, ${branchShake})`}>
          {/* Main Ancient Tree Trunk on Left Edge */}
          <path
            d="M -100 0 L 130 0 C 150 300 120 700 145 1100 C 165 1500 120 1800 140 1920 L -100 1920 Z"
            fill="#221103"
            stroke="#100601"
            strokeWidth="8"
          />
          {/* Bark Details */}
          <path d="M 50 250 Q 90 600 65 950" stroke="#361c06" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M 100 1050 Q 75 1400 95 1750" stroke="#361c06" strokeWidth="8" fill="none" strokeLinecap="round" />

          {/* Sturdy Prehistoric Tree Branch Stretching Across at Y=620 */}
          <path
            d="M 110 590 Q 380 560 680 610 Q 890 640 1100 620 L 1100 690 Q 800 710 480 680 Q 260 690 110 690 Z"
            fill="#381d06"
            stroke="#180b02"
            strokeWidth="7"
          />
          {/* Branch Bark highlights */}
          <path d="M 200 620 Q 450 600 700 630" stroke="#542e0d" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 380 650 Q 640 655 860 645" stroke="#221003" strokeWidth="4" fill="none" strokeLinecap="round" />

          {/* Hanging Jungle Vines & Moss */}
          <path d="M 260 680 C 250 740 280 780 270 830" stroke="#047857" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M 720 670 C 730 730 710 770 720 815" stroke="#065f46" strokeWidth="3.5" fill="none" strokeLinecap="round" />

          {/* Lush Canopy Foliage Clusters */}
          <circle cx="200" cy="550" r="95" fill="#047857" opacity="0.85" />
          <circle cx="300" cy="520" r="80" fill="#065f46" opacity="0.85" />
          <circle cx="750" cy="570" r="95" fill="#047857" opacity="0.85" />
          <circle cx="860" cy="590" r="85" fill="#065f46" opacity="0.85" />
          <circle cx="990" cy="600" r="90" fill="#047857" opacity="0.85" />

          {/* Snapped Twig & Splinter FX on Branch (Frame 45+) */}
          {isFalling && (
            <g transform="translate(520, 620)">
              <line x1="-15" y1="0" x2="15" y2="10" stroke="#facc15" strokeWidth="4" strokeLinecap="round" />
              <line x1="-5" y1="-8" x2="20" y2="2" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
              <circle cx="5" cy="5" r="3" fill="#ffffff" />
            </g>
          )}
        </g>

        {/* ── TAPERED COMIC SPEED LINES (Free-Fall Action, Frame 45+) ── */}
        {/* Rushing upward arrows/streaks simulating dramatic downward plunge */}
        {isFalling && (
          <g opacity={Math.min(1, (frame - 45) / 10)}>
            {[180, 260, 330, 410, 670, 750, 830, 910, 990].map((lineX, idx) => {
              const yPos = 480 + ((speedCycle + idx * 75) % 950);
              const streakLen = 150 + (idx % 3) * 60;
              const halfW = idx % 2 === 0 ? 3.5 : 2;
              return (
                <polygon
                  key={idx}
                  points={`${lineX - halfW},${yPos} ${lineX + halfW},${yPos} ${lineX},${Math.max(380, yPos - streakLen)}`}
                  fill={idx % 2 === 0 ? '#ffffff' : '#38bdf8'}
                  opacity={0.85}
                />
              );
            })}
          </g>
        )}

        {/* ── TUMBLING JUNGLE LEAVES (Frame 45+) ── */}
        {isFalling &&
          leafData.map((leaf, i) => {
            const timeSinceSlip = frame - 45;
            const curX = leaf.startX + leaf.speedX * timeSinceSlip + Math.sin(timeSinceSlip * 0.15 + i) * 22;
            const curY = leaf.startY + leaf.speedY * timeSinceSlip;
            const curRot = timeSinceSlip * leaf.rot;
            if (curY > 1550) return null;
            return (
              <g key={i} transform={`translate(${curX}, ${curY}) rotate(${curRot}) scale(1.4)`}>
                <path
                  d="M 0 -18 C 12 -9 12 9 0 18 C -12 9 -12 -9 0 -18 Z"
                  fill={i % 2 === 0 ? '#10b981' : '#34d399'}
                  stroke="#047857"
                  strokeWidth="2"
                />
                <line x1="0" y1="-14" x2="0" y2="14" stroke="#064e3b" strokeWidth="1.5" />
              </g>
            );
          })}

        {/* ── THE FALLING CHARACTER SEQUENCE ── */}
        <g transform={`translate(${charX}, ${charY}) rotate(${charRotate})`}>
          {/* Vertical Motion Smear Streaks behind Character */}
          {isFalling && (
            <g opacity={0.6}>
              <line x1="-50" y1="50" x2="-50" y2="-180" stroke="#38bdf8" strokeWidth="4" strokeDasharray="16 12" strokeLinecap="round" />
              <line x1="50" y1="50" x2="50" y2="-180" stroke="#38bdf8" strokeWidth="4" strokeDasharray="16 12" strokeLinecap="round" />
              <line x1="0" y1="80" x2="0" y2="-210" stroke="#ffffff" strokeWidth="5" strokeDasharray="20 15" strokeLinecap="round" />
            </g>
          )}

          {/* Main Character: Sleeping before slip, Shocked & flailing when plunging */}
          <MainCharacter
            mood={isFalling ? 'shocked' : 'sleepy'}
            scale={1.22}
            sweatDrop={isFalling}
          />

          {/* Sleeping Zzz rising from resting character (Frames 0 - 44) */}
          {!isFalling && (
            <g transform={`translate(40, ${-180 - zzzFloat})`} opacity={1 - zzzFloat / 80}>
              <text x="0" y="0" fill="#facc15" fontSize="28" fontWeight="900" fontFamily="'Fredoka', sans-serif">Z</text>
              <text x="18" y="-20" fill="#facc15" fontSize="34" fontWeight="900" fontFamily="'Fredoka', sans-serif">z</text>
              <text x="38" y="-45" fill="#facc15" fontSize="42" fontWeight="900" fontFamily="'Fredoka', sans-serif">z</text>
            </g>
          )}

          {/* Comic Action Star at the instant of slip (Frames 45 - 75) */}
          {frame >= 45 && frame <= 75 && (
            <g transform="translate(30, -210) scale(1.35)">
              <polygon
                points="0,-35 12,-10 38,-18 20,4 42,24 16,24 10,48 -8,28 -34,40 -20,12 -42,-4 -14,-10"
                fill="#facc15"
                stroke="#0f172a"
                strokeWidth="3.5"
              />
              <text x="0" y="8" fill="#dc2626" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="'Fredoka', sans-serif">
                SLIP!
              </text>
            </g>
          )}
        </g>

        {/* ── BRAIN MASCOT: GUARDIAN OF PRIMAL SURVIVAL ── */}
        {/* Floating Holographic Monitor (Top Right) */}
        <g transform="translate(930, 270)">
          <circle
            cx="0"
            cy="0"
            r="82"
            fill="rgba(15, 23, 42, 0.94)"
            stroke={isFalling ? '#ef4444' : '#10b981'}
            strokeWidth="3.5"
            filter="drop-shadow(0px 6px 16px rgba(0,0,0,0.4))"
          />
          {/* Emergency siren beacon on top of mascot */}
          {isFalling && (
            <g transform="translate(0, -90)">
              <rect x="-12" y="-14" width="24" height="20" rx="6" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
              <polygon points="-8,-14 8,-14 0,-24" fill="#fef08a" />
            </g>
          )}
          <BrainMascot mood={isFalling ? 'thinking' : 'happy'} scale={0.5} />
          <rect x="-65" y="55" width="130" height="28" rx="14" fill="rgba(15, 23, 42, 0.95)" stroke="#334155" strokeWidth="2" />
          <text
            x="0"
            y="75"
            fill={isFalling ? '#f87171' : '#34d399'}
            fontSize="16"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
          >
            🧠 OTAK PURBA
          </text>
        </g>

        {/* ── ALTITUDE METER (Right Side) ── */}
        <g transform="translate(995, 780)">
          <rect x="-42" y="-120" width="84" height="240" rx="14" fill="rgba(15, 23, 42, 0.88)" stroke="#334155" strokeWidth="2.5" />
          <text x="0" y="-90" fill="#38bdf8" fontSize="15" fontWeight="900" textAnchor="middle">15m</text>
          <text x="0" y="-72" fill="#64748b" fontSize="12" fontWeight="700" textAnchor="middle">DAHAN</text>
          
          <line x1="0" y1="-55" x2="0" y2="55" stroke="#475569" strokeWidth="2.5" strokeDasharray="4 4" />
          <circle
            cx="0"
            cy={interpolate(fallProgress, [0, 1], [-55, 45])}
            r="8"
            fill={isFalling ? '#ef4444' : '#10b981'}
            stroke="#ffffff"
            strokeWidth="2"
          />
          <text x="0" y="80" fill="#ef4444" fontSize="15" fontWeight="900" textAnchor="middle">0m</text>
          <text x="0" y="98" fill="#64748b" fontSize="12" fontWeight="700" textAnchor="middle">TANAH</text>
        </g>

        {/* ── GROUND DANGER (Predators in Distant Jungle Abyss) ── */}
        <g transform="translate(0, 1720)">
          <path
            d="M 0 120 Q 220 40 480 90 Q 780 30 1080 100 L 1080 200 L 0 200 Z"
            fill="#010604"
          />
          <path
            d="M 0 150 Q 350 80 700 130 Q 900 100 1080 140 L 1080 200 L 0 200 Z"
            fill="#000201"
          />
          {/* Glowing predator eyes lurking in dark grass */}
          <g opacity={0.85}>
            <circle cx="280" cy="130" r="4" fill="#facc15" />
            <circle cx="295" cy="130" r="4" fill="#facc15" />
            <circle cx="820" cy="145" r="4" fill="#ef4444" />
            <circle cx="835" cy="145" r="4" fill="#ef4444" />
          </g>
          <text
            x="540"
            y="180"
            fill="#64748b"
            fontSize="18"
            fontWeight="700"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
          >
            ⚠️ LANTAI HUTAN: PREDATOR MENGINTAI (15 METER DI BAWAH)
          </text>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
