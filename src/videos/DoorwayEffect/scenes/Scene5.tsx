import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { ParticleBackground } from '../../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();

  const rayRotation = interpolate(frame, [0, 240], [0, 90]);

  return (
    <AbsoluteFill>
      <ParticleBackground theme="emerald" />

      <svg
        viewBox="0 0 1080 1920"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
        }}
      >
        {/* Celebration Sunburst Rays */}
        <g transform={`translate(540, 750) rotate(${rayRotation})`} opacity="0.25">
          <line x1="-550" y1="-550" x2="550" y2="550" stroke="#34d399" strokeWidth="14" />
          <line x1="550" y1="-550" x2="-550" y2="550" stroke="#34d399" strokeWidth="14" />
          <line x1="0" y1="-650" x2="0" y2="650" stroke="#34d399" strokeWidth="14" />
          <line x1="-650" y1="0" x2="650" y2="0" stroke="#34d399" strokeWidth="14" />
        </g>

        {/* Master Character holding charger, winking */}
        <g transform="translate(540, 1040)">
          <MainCharacter mood="happy" holdingItem="charger" scale={1.35} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
