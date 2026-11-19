import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { MorningBedroomBackground } from '../../../shared/environments/MorningBedroomBackground';
import { MainCharacter } from '../../../shared/characters/MainCharacter';

export const Scene1_SleepyCoffee: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Floating sleepy Zzz particles
  const z1Y = interpolate(frame % 45, [0, 45], [0, -70]);
  const z1Opacity = interpolate(frame % 45, [0, 10, 35, 45], [0, 0.9, 0.8, 0]);

  const z2Y = interpolate((frame + 20) % 50, [0, 50], [0, -85]);
  const z2Opacity = interpolate((frame + 20) % 50, [0, 10, 40, 50], [0, 0.8, 0.7, 0]);

  // Steam wobble from hot coffee
  const steamWave = Math.sin((frame / fps) * Math.PI * 4) * 8;

  // Question badge pop
  const badgePop = spring({
    frame: frame - 15,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  return (
    <AbsoluteFill>
      <MorningBedroomBackground />

      <svg
        viewBox="0 0 1080 1920"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          fontFamily: "'Plus Jakarta Sans', 'Fredoka', sans-serif",
        }}
      >
        {/* Rising Warm Coffee Steam */}
        <g transform="translate(570, 930)">
          <path
            d={`M 0 0 Q ${steamWave} -35 0 -70 Q ${-steamWave} -105 0 -140`}
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
          />
          <path
            d={`M 16 -12 Q ${-steamWave} -45 16 -80 Q ${steamWave} -115 16 -150`}
            stroke="#ffffff"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.38"
          />
        </g>

        {/* Floating Drowsy 'Z z z' Particles */}
        <g fill="#38bdf8" fontWeight="900" fontFamily="'Fredoka', sans-serif">
          <text
            x="340"
            y={760 + z1Y}
            fontSize="54"
            opacity={z1Opacity}
            textAnchor="middle"
          >
            Z
          </text>
          <text
            x="290"
            y={800 + z2Y}
            fontSize="38"
            opacity={z2Opacity}
            textAnchor="middle"
          >
            z
          </text>
          <text
            x="250"
            y={830 + z1Y}
            fontSize="28"
            opacity={z1Opacity}
            textAnchor="middle"
          >
            z
          </text>
        </g>

        {/* Prominent Hero Character holding coffee mug sleepily */}
        <g transform="translate(480, 960)">
          <MainCharacter mood="sleepy" holdingItem="coffee" scale={1.6} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
