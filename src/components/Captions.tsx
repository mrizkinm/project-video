import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

interface CaptionsProps {
  badge: string;
  text: string;
}

export const Captions: React.FC<CaptionsProps> = ({ badge, text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Subtle breathing / scale animation
  const scale = interpolate(
    Math.sin((frame / fps) * Math.PI * 2),
    [-1, 1],
    [0.98, 1.02]
  );

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 180,
        left: 40,
        right: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        zIndex: 50,
      }}
    >
      {/* Top Hook Badge */}
      <div
        style={{
          backgroundColor: '#facc15',
          color: '#000000',
          fontWeight: 900,
          fontSize: 32,
          padding: '10px 24px',
          borderRadius: 16,
          boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
          marginBottom: 16,
          letterSpacing: 2,
          textTransform: 'uppercase',
          transform: `scale(${scale})`,
        }}
      >
        {badge}
      </div>

      {/* Main Subtitle / Caption */}
      <div
        style={{
          color: '#ffffff',
          fontWeight: 800,
          fontSize: 42,
          lineHeight: 1.35,
          textShadow: '0 4px 16px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)',
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          padding: '16px 28px',
          borderRadius: 24,
          border: '2px solid rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {text}
      </div>
    </div>
  );
};
