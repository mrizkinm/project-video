import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

interface ParticleBackgroundProps {
  theme?: 'indigo' | 'darkblue' | 'purple' | 'amber' | 'emerald' | 'rose' | 'cyber';
}

const THEMES = {
  indigo: {
    bg: 'linear-gradient(145deg, #1e1b4b 0%, #0f172a 50%, #1a1035 100%)',
    particleColor: '#818cf8',
    accentColor: '#6366f1',
    glowColor: '#4f46e5',
  },
  darkblue: {
    bg: 'linear-gradient(145deg, #0c4a6e 0%, #0f172a 50%, #083344 100%)',
    particleColor: '#38bdf8',
    accentColor: '#0ea5e9',
    glowColor: '#0284c7',
  },
  purple: {
    bg: 'linear-gradient(145deg, #3b0764 0%, #0f172a 50%, #2d1b4e 100%)',
    particleColor: '#c084fc',
    accentColor: '#a855f7',
    glowColor: '#9333ea',
  },
  amber: {
    bg: 'linear-gradient(145deg, #451a03 0%, #0f172a 50%, #1c1200 100%)',
    particleColor: '#fbbf24',
    accentColor: '#f59e0b',
    glowColor: '#d97706',
  },
  emerald: {
    bg: 'linear-gradient(145deg, #064e3b 0%, #0f172a 50%, #052e1a 100%)',
    particleColor: '#34d399',
    accentColor: '#10b981',
    glowColor: '#059669',
  },
  rose: {
    bg: 'linear-gradient(145deg, #4c0519 0%, #0f172a 50%, #2d0a14 100%)',
    particleColor: '#fb7185',
    accentColor: '#f43f5e',
    glowColor: '#e11d48',
  },
  cyber: {
    bg: 'linear-gradient(145deg, #0d2232 0%, #050d1a 50%, #001520 100%)',
    particleColor: '#22d3ee',
    accentColor: '#06b6d4',
    glowColor: '#0891b2',
  },
};

// Deterministic particles — more of them, more varied shapes
const PARTICLES = [
  { x: 110,  baseY: 380,  speed: 1.3, r: 7,  phase: 0.0, shape: 'circle' },
  { x: 920,  baseY: 320,  speed: 0.9, r: 11, phase: 2.1, shape: 'diamond' },
  { x: 290,  baseY: 790,  speed: 1.6, r: 5,  phase: 4.0, shape: 'circle' },
  { x: 800,  baseY: 940,  speed: 1.1, r: 9,  phase: 1.0, shape: 'diamond' },
  { x: 170,  baseY: 1280, speed: 1.4, r: 6,  phase: 3.1, shape: 'circle' },
  { x: 930,  baseY: 1480, speed: 0.8, r: 13, phase: 5.2, shape: 'circle' },
  { x: 540,  baseY: 280,  speed: 1.2, r: 8,  phase: 2.5, shape: 'diamond' },
  { x: 460,  baseY: 1620, speed: 1.5, r: 7,  phase: 3.6, shape: 'circle' },
  { x: 350,  baseY: 530,  speed: 1.0, r: 5,  phase: 1.5, shape: 'star' },
  { x: 740,  baseY: 680,  speed: 1.3, r: 6,  phase: 0.7, shape: 'star' },
  { x: 200,  baseY: 1050, speed: 0.7, r: 10, phase: 4.5, shape: 'circle' },
  { x: 870,  baseY: 1200, speed: 1.6, r: 5,  phase: 2.8, shape: 'diamond' },
  { x: 630,  baseY: 1700, speed: 0.9, r: 8,  phase: 1.9, shape: 'circle' },
  { x: 480,  baseY: 420,  speed: 1.4, r: 6,  phase: 3.3, shape: 'star' },
  { x: 100,  baseY: 1750, speed: 1.1, r: 9,  phase: 0.4, shape: 'circle' },
];

// Hexagonal grid pattern (for depth / grid feel)
const HEX_GRID = [
  { x: 150, y: 500 }, { x: 350, y: 500 }, { x: 550, y: 500 }, { x: 750, y: 500 }, { x: 950, y: 500 },
  { x: 250, y: 700 }, { x: 450, y: 700 }, { x: 650, y: 700 }, { x: 850, y: 700 },
  { x: 150, y: 900 }, { x: 350, y: 900 }, { x: 550, y: 900 }, { x: 750, y: 900 }, { x: 950, y: 900 },
  { x: 250, y: 1100 }, { x: 450, y: 1100 }, { x: 650, y: 1100 }, { x: 850, y: 1100 },
];

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  theme = 'indigo',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = THEMES[theme] || THEMES.indigo;

  // Global slow scan-line drift
  const scanOffset = (frame / fps) * 60 % 1920;

  // Pulsing grid opacity
  const gridPulse = interpolate(
    Math.sin((frame / fps) * Math.PI * 0.7),
    [-1, 1],
    [0.03, 0.09]
  );

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: t.bg,
      overflow: 'hidden',
    }}>
      <svg
        viewBox="0 0 1080 1920"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        <defs>
          <radialGradient id={`centerGlow_${theme}`} cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor={t.glowColor} stopOpacity="0.18" />
            <stop offset="100%" stopColor={t.glowColor} stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`particleGlow_${theme}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={t.particleColor} stopOpacity="1" />
            <stop offset="100%" stopColor={t.particleColor} stopOpacity="0" />
          </radialGradient>
          <filter id={`glow_${theme}`}>
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background center glow */}
        <circle cx="540" cy="860" r="650"
          fill={`url(#centerGlow_${theme})`} />

        {/* Hexagonal dot grid (subtle) */}
        {HEX_GRID.map((h, i) => (
          <circle key={i} cx={h.x} cy={h.y} r="4"
            fill={t.accentColor} opacity={gridPulse} />
        ))}

        {/* Scan line (ambient movement) */}
        <line x1="0" y1={scanOffset} x2="1080" y2={scanOffset}
          stroke={t.accentColor} strokeWidth="2" opacity="0.07" />
        <line x1="0" y1={(scanOffset + 480) % 1920} x2="1080" y2={(scanOffset + 480) % 1920}
          stroke={t.accentColor} strokeWidth="1" opacity="0.04" />

        {/* Corner accent lines */}
        <line x1="0" y1="0" x2="180" y2="0" stroke={t.accentColor} strokeWidth="4" opacity="0.3" />
        <line x1="0" y1="0" x2="0" y2="180" stroke={t.accentColor} strokeWidth="4" opacity="0.3" />
        <line x1="1080" y1="0" x2="900" y2="0" stroke={t.accentColor} strokeWidth="4" opacity="0.3" />
        <line x1="1080" y1="0" x2="1080" y2="180" stroke={t.accentColor} strokeWidth="4" opacity="0.3" />
        <line x1="0" y1="1920" x2="180" y2="1920" stroke={t.accentColor} strokeWidth="4" opacity="0.3" />
        <line x1="0" y1="1920" x2="0" y2="1740" stroke={t.accentColor} strokeWidth="4" opacity="0.3" />
        <line x1="1080" y1="1920" x2="900" y2="1920" stroke={t.accentColor} strokeWidth="4" opacity="0.3" />
        <line x1="1080" y1="1920" x2="1080" y2="1740" stroke={t.accentColor} strokeWidth="4" opacity="0.3" />

        {/* Floating particles */}
        {PARTICLES.map((p, i) => {
          const offsetY = interpolate(
            Math.sin((frame / fps) * p.speed + p.phase),
            [-1, 1],
            [-38, 38]
          );
          const opacity = interpolate(
            Math.sin((frame / fps) * p.speed * 1.6 + p.phase),
            [-1, 1],
            [0.15, 0.75]
          );
          const scale = interpolate(
            Math.sin((frame / fps) * p.speed * 0.9 + p.phase + 1),
            [-1, 1],
            [0.7, 1.3]
          );
          const cy = p.baseY + offsetY;

          if (p.shape === 'diamond') {
            const s = p.r * scale;
            return (
              <g key={i} transform={`translate(${p.x}, ${cy})`}
                filter={`url(#glow_${theme})`}>
                <polygon
                  points={`0,${-s * 1.6} ${s},0 0,${s * 1.6} ${-s},0`}
                  fill={t.particleColor}
                  opacity={opacity}
                />
              </g>
            );
          }

          if (p.shape === 'star') {
            const s = p.r * scale;
            const pts = Array.from({ length: 5 }).map((_, j) => {
              const a = (j * 72 - 90) * (Math.PI / 180);
              const b = (j * 72 - 90 + 36) * (Math.PI / 180);
              return `${Math.cos(a) * s},${Math.sin(a) * s} ${Math.cos(b) * s * 0.4},${Math.sin(b) * s * 0.4}`;
            }).join(' ');
            return (
              <g key={i} transform={`translate(${p.x}, ${cy})`}
                filter={`url(#glow_${theme})`}>
                <polygon points={pts} fill={t.accentColor} opacity={opacity * 0.9} />
              </g>
            );
          }

          // Default: glowing circle
          return (
            <g key={i} filter={`url(#glow_${theme})`}>
              <circle
                cx={p.x}
                cy={cy}
                r={p.r * scale * 2.5}
                fill={t.particleColor}
                opacity={opacity * 0.15}
              />
              <circle
                cx={p.x}
                cy={cy}
                r={p.r * scale}
                fill={t.particleColor}
                opacity={opacity}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};
