import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface FlashWipeTransitionProps {
  color?: string;
}

export const FlashWipeTransition: React.FC<FlashWipeTransitionProps> = ({
  color = '#38bdf8',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fast pop in and out within 12 frames
  const progress = spring({
    frame,
    fps,
    config: { damping: 10, mass: 0.3, stiffness: 200 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: color,
        transform: `scaleY(${progress})`,
        transformOrigin: 'top',
        pointerEvents: 'none',
        zIndex: 100,
      }}
    />
  );
};
