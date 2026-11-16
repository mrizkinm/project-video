import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

type TransitionType =
  | 'slide-left'
  | 'slide-right'
  | 'slide-up'
  | 'wipe-diagonal'
  | 'circle-reveal'
  | 'flash-cut'
  | 'zoom-out'
  | 'split-vertical';

interface SceneTransitionProps {
  type?: TransitionType;
  durationFrames?: number;
  color?: string;
}

export const SceneTransition: React.FC<SceneTransitionProps> = ({
  type = 'slide-left',
  durationFrames = 12,
  color = '#facc15',
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // progress goes 0 → 1 over durationFrames, then 1 → 0 for reveal
  const progress = interpolate(frame, [0, durationFrames], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  if (type === 'flash-cut') {
    // Quick flash of colour on cut
    const opacity = interpolate(frame, [0, 2, durationFrames], [0, 0.9, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    return (
      <AbsoluteFill style={{ backgroundColor: color, opacity, pointerEvents: 'none', zIndex: 100 }} />
    );
  }

  if (type === 'circle-reveal') {
    const r = interpolate(progress, [0, 1], [0, Math.sqrt(width ** 2 + height ** 2)]);
    return (
      <AbsoluteFill style={{ pointerEvents: 'none', zIndex: 100 }}>
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
          <defs>
            <mask id="circleMask">
              <rect width={width} height={height} fill="white" />
              <circle cx={width / 2} cy={height / 2} r={r} fill="black" />
            </mask>
          </defs>
          <rect width={width} height={height} fill={color} mask="url(#circleMask)" />
        </svg>
      </AbsoluteFill>
    );
  }

  if (type === 'wipe-diagonal') {
    const offset = interpolate(progress, [0, 1], [-(width + height), 0]);
    return (
      <AbsoluteFill style={{ pointerEvents: 'none', zIndex: 100 }}>
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
          <polygon
            points={`
              ${offset},0
              ${offset + width + height},0
              ${offset + width},${height}
              ${offset - height},${height}
            `}
            fill={color}
          />
        </svg>
      </AbsoluteFill>
    );
  }

  if (type === 'split-vertical') {
    const topY = interpolate(progress, [0, 1], [0, -height / 2]);
    const botY = interpolate(progress, [0, 1], [0, height / 2]);
    return (
      <AbsoluteFill style={{ pointerEvents: 'none', zIndex: 100 }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '50%',
          backgroundColor: color, transform: `translateY(${topY}px)`,
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
          backgroundColor: color, transform: `translateY(${botY}px)`,
        }} />
      </AbsoluteFill>
    );
  }

  if (type === 'zoom-out') {
    const sc = interpolate(progress, [0, 0.5, 1], [1, 1.12, 1]);
    const op = interpolate(progress, [0, 0.3, 0.6, 1], [0, 0.6, 0.6, 0]);
    return (
      <AbsoluteFill style={{
        backgroundColor: color, opacity: op,
        transform: `scale(${sc})`,
        pointerEvents: 'none', zIndex: 100,
      }} />
    );
  }

  // slide-left / slide-right / slide-up
  let translateX = 0;
  let translateY = 0;
  if (type === 'slide-left') translateX = interpolate(progress, [0, 0.5, 1], [width, 0, -width]);
  if (type === 'slide-right') translateX = interpolate(progress, [0, 0.5, 1], [-width, 0, width]);
  if (type === 'slide-up') translateY = interpolate(progress, [0, 0.5, 1], [height, 0, -height]);

  return (
    <AbsoluteFill style={{
      backgroundColor: color,
      transform: `translate(${translateX}px, ${translateY}px)`,
      pointerEvents: 'none',
      zIndex: 100,
    }} />
  );
};
