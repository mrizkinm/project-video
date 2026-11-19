import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface ViralCaptionsProps {
  badge: string;
  badgeColor?: string;
  text: string;
  highlightWord?: string;
}

export const ViralCaptions: React.FC<ViralCaptionsProps> = ({
  badge,
  badgeColor = '#ef4444',
  text,
  highlightWord,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Gentle pop bounce
  const popScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  const words = text.split(' ');

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 380, // Safe Zone: Clear of Reels/TikTok profile, username, audio & captions overlay
        left: 45,
        right: 45,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        zIndex: 100,
        pointerEvents: 'none',
      }}
    >
      {/* Top Rounded Category Badge */}
      <div
        style={{
          backgroundColor: badgeColor,
          color: '#ffffff',
          fontWeight: 900,
          fontSize: 26,
          padding: '10px 28px',
          borderRadius: 40,
          boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
          marginBottom: 16,
          letterSpacing: 1.5,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          border: '3px solid #ffffff',
          transform: `scale(${Math.max(0.9, popScale)})`,
        }}
      >
        {badge}
      </div>

      {/* Main Kinetic Subtitle Box with Modern Soft Rounded Styling */}
      <div
        style={{
          display: 'inline-flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          color: '#ffffff',
          fontWeight: 800,
          fontSize: 38,
          lineHeight: 1.35,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          textShadow: `
            -3px -3px 0 #0f172a,  
             3px -3px 0 #0f172a,
            -3px  3px 0 #0f172a,
             3px  3px 0 #0f172a,
             0 6px 18px rgba(0,0,0,0.8)
          `,
          backgroundColor: 'rgba(15, 23, 42, 0.92)',
          padding: '22px 36px',
          borderRadius: 32,
          border: '3.5px solid #facc15',
          boxShadow: '0 16px 40px rgba(0,0,0,0.7), inset 0 0 24px rgba(250,204,21,0.15)',
          backdropFilter: 'blur(12px)',
          maxWidth: 960,
        }}
      >
        {words.map((w, idx) => {
          const isHighlight =
            highlightWord &&
            w.toLowerCase().includes(highlightWord.toLowerCase());

          return (
            <span
              key={idx}
              style={{
                display: 'inline-block',
                margin: '0 8px',
                color: isHighlight ? '#facc15' : '#ffffff',
                transform: isHighlight ? 'scale(1.14)' : 'scale(1)',
                textShadow: isHighlight
                  ? '0 0 20px rgba(250,204,21,1), -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000'
                  : undefined,
              }}
            >
              {w}
            </span>
          );
        })}
      </div>
    </div>
  );
};
