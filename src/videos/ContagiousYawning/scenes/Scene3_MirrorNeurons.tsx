import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { BrainMascot } from '../../../shared/characters/BrainMascot';

export const Scene3_MirrorNeurons: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stampPop = spring({
    frame: frame - 4,
    fps,
    config: { damping: 11, stiffness: 140 },
  });

  const cardPop = spring({
    frame: frame - 8,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  const mascotPop = spring({
    frame: frame - 12,
    fps,
    config: { damping: 11, stiffness: 130 },
  });

  return (
    <AbsoluteFill>
      <ParticleBackground theme="indigo" />

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
          <filter id="cortexGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="boxGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.98" />
          </linearGradient>
          <linearGradient id="brainPinkGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="60%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#be185d" />
          </linearGradient>
        </defs>

        {/* 1. TOP HEADER STAMP: Sistem Saraf Cermin */}
        <g transform={`translate(330, 215) rotate(-1) scale(${Math.max(0, stampPop)})`}>
          <rect
            x="-240"
            y="-38"
            width="480"
            height="76"
            rx="26"
            fill="#0f172a"
            stroke="#38bdf8"
            strokeWidth="4"
            filter="drop-shadow(0px 8px 24px rgba(56, 189, 248, 0.4))"
          />
          <text
            x="0"
            y="12"
            fill="#38bdf8"
            fontSize="24"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="'Fredoka', sans-serif"
            letterSpacing="1"
          >
            🧠 SISTEM MIRROR NEURONS
          </text>
        </g>

        {/* 2. PROFESSOR BRAIN MASCOT (Top Right with Synchronized Glasses) */}
        <g transform={`translate(840, 280) scale(${Math.max(0, mascotPop) * 0.98})`}>
          <BrainMascot mood="thinking" scale={0.98} glasses={true} />
        </g>

        {/* 3. CENTRAL ANATOMICAL BRAIN CORTEX SHOWCASE (840px Wide, y=980) */}
        <g transform={`translate(540, 980) scale(${Math.max(0, cardPop)})`}>
          <rect
            x="-420"
            y="-400"
            width="840"
            height="800"
            rx="40"
            fill="url(#boxGrad5)"
            stroke="#334155"
            strokeWidth="4"
            filter="drop-shadow(0px 20px 40px rgba(0,0,0,0.5))"
          />

          {/* Grid lines inside showcase box */}
          {[-260, -130, 0, 130, 260].map((coord, i) => (
            <React.Fragment key={i}>
              <line x1="-380" y1={coord} x2="380" y2={coord} stroke="#1e293b" strokeWidth="2" strokeDasharray="6 6" />
              <line x1={coord} y1="-360" x2={coord} y2="360" stroke="#1e293b" strokeWidth="2" strokeDasharray="6 6" />
            </React.Fragment>
          ))}

          {/* Elegant Anatomical Human Head Outline Facing Left */}
          <path
            d="M 20 -250
               C -70 -250 -125 -190 -140 -110
               C -145 -90 -145 -75 -150 -60
               C -158 -45 -172 -30 -185 -15
               C -190 -5 -182 2 -162 8
               C -160 16 -162 20 -166 24
               C -172 28 -170 34 -160 38
               C -155 40 -150 42 -155 45
               C -168 50 -168 60 -158 66
               C -150 72 -148 78 -150 84
               C -162 94 -162 110 -148 122
               C -125 142 -85 160 -45 175
               C -40 200 -45 225 -40 250
               L 160 250
               C 165 200 170 150 175 100
               C 190 40 195 -30 185 -100
               C 175 -180 120 -250 20 -250 Z"
            fill="rgba(56, 189, 248, 0.06)"
            stroke="#38bdf8"
            strokeWidth="3.5"
          />

          {/* Stylized Giant Brain with Anatomical Lobes */}
          <g transform="translate(15, -40)">
            {/* Brain Mass */}
            <path
              d="M -90 -120
                 C -60 -180 40 -190 90 -140
                 C 140 -90 150 -10 130 50
                 C 110 90 60 110 10 100
                 C -40 90 -70 120 -100 80
                 C -130 40 -120 -60 -90 -120 Z"
              fill="url(#brainPinkGrad5)"
              stroke="#db2777"
              strokeWidth="4"
              opacity="0.85"
            />

            {/* Brain Sulci / Folds */}
            <path d="M -50 -100 C -20 -60 20 -70 50 -100" fill="none" stroke="#be185d" strokeWidth="3" strokeLinecap="round" />
            <path d="M -70 -30 C -20 0 40 -20 90 0" fill="none" stroke="#be185d" strokeWidth="3" strokeLinecap="round" />
            <path d="M -50 40 C 0 60 40 30 80 50" fill="none" stroke="#be185d" strokeWidth="3" strokeLinecap="round" />

            {/* 🌟 HIGHLIGHTED MIRROR NEURON NETWORK (Frontoparietal Circuit) */}
            <g id="mirror-network">
              {/* Pulsing Synaptic Energy Field */}
              <circle cx="-35" cy="-55" r="75" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6 6" opacity="0.7" />
              <circle
                cx="-35"
                cy="-55"
                r={60 + Math.sin(frame * 0.3) * 12}
                fill="none"
                stroke="#67e8f9"
                strokeWidth="3"
                opacity={0.8 + Math.sin(frame * 0.3) * 0.2}
                filter="url(#cortexGlow)"
              />

              {/* Neural Synapse Nodes (Interactive Glowing Points) */}
              {[
                { x: -70, y: -75 },
                { x: -35, y: -90 },
                { x: 0, y: -65 },
                { x: -45, y: -40 },
                { x: -10, y: -30 },
                { x: -65, y: -20 },
              ].map((node, nIdx) => (
                <g key={nIdx}>
                  <circle cx={node.x} cy={node.y} r="8" fill="#facc15" filter="url(#cortexGlow)" />
                  <circle cx={node.x} cy={node.y} r="4" fill="#ffffff" />
                </g>
              ))}

              {/* Connecting Neural Axon Lines */}
              <line x1="-70" y1="-75" x2="-35" y2="-90" stroke="#facc15" strokeWidth="3" />
              <line x1="-35" y1="-90" x2="0" y2="-65" stroke="#facc15" strokeWidth="3" />
              <line x1="-70" y1="-75" x2="-45" y2="-40" stroke="#facc15" strokeWidth="3" />
              <line x1="-45" y1="-40" x2="-10" y2="-30" stroke="#facc15" strokeWidth="3" />
              <line x1="0" y1="-65" x2="-10" y2="-30" stroke="#facc15" strokeWidth="3" />
              <line x1="-45" y1="-40" x2="-65" y2="-20" stroke="#facc15" strokeWidth="3" />
            </g>
          </g>

          {/* 4. EXPLANATION PILL BADGE AT BOTTOM OF BOX */}
          <g transform="translate(0, 290)">
            <rect
              x="-350"
              y="-42"
              width="700"
              height="84"
              rx="22"
              fill="rgba(12, 74, 110, 0.75)"
              stroke="#0284c7"
              strokeWidth="2.5"
            />
            <text
              x="0"
              y="-6"
              fill="#bae6fd"
              fontSize="22"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="'Plus Jakarta Sans', sans-serif"
            >
              "Neuron Cermin" otomatis meniru aksi orang lain,
            </text>
            <text
              x="0"
              y="26"
              fill="#38bdf8"
              fontSize="24"
              fontWeight="900"
              textAnchor="middle"
              fontFamily="'Fredoka', sans-serif"
            >
              membuat rahang kita refleks ikut terbuka! 🪞✨
            </text>
          </g>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
