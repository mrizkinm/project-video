# Remotion Animation Patterns

Practical patterns for creating engaging visual animations, transitions, and character movements in Remotion.

---

## 1. Pop & Stagger Entry

Make elements pop in sequence using `spring` with frame delay offsets:

```tsx
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const StaggeredBadges = ({ items }: { items: string[] }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: 'flex', gap: 20 }}>
      {items.map((item, index) => {
        const delay = index * 8; // 8 frames between each badge
        const pop = spring({
          frame: frame - delay,
          fps,
          config: { damping: 12, stiffness: 140 },
        });

        return (
          <div
            key={item}
            style={{
              transform: `scale(${pop})`,
              opacity: pop > 0 ? 1 : 0,
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};
```

---

## 2. Looping Wave / Breathing Animation

Continuous cyclic motion using sine waves:

```tsx
import { useCurrentFrame } from 'remotion';

export const FloatingElement = ({ children }: { children: React.ReactNode }) => {
  const frame = useCurrentFrame();

  // 60 frames = 2.0s per full cycle @ 30fps
  const floatOffset = Math.sin((frame / 60) * 2 * Math.PI) * 12; // +/- 12px
  const tilt = Math.cos((frame / 60) * 2 * Math.PI) * 2;         // +/- 2 degrees

  return (
    <div
      style={{
        transform: `translateY(${floatOffset}px) rotate(${tilt}deg)`,
      }}
    >
      {children}
    </div>
  );
};
```

---

## 3. Kinetic Typography (Viral Caption Highlight)

Highlight specific words at exact timings:

```tsx
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface WordCue {
  word: string;
  startFrame: number;
  highlight?: boolean;
}

export const KineticCaptions = ({ words }: { words: WordCue[] }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
      {words.map(({ word, startFrame, highlight }, i) => {
        const isVisible = frame >= startFrame;
        const pop = spring({
          frame: frame - startFrame,
          fps,
          config: { damping: 10, stiffness: 200 },
        });

        if (!isVisible) return null;

        return (
          <span
            key={i}
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: highlight ? '#facc15' : '#ffffff',
              transform: `scale(${pop})`,
              display: 'inline-block',
              textShadow: '0 4px 12px rgba(0,0,0,0.8)',
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
```

---

## 4. Custom Scene Transition Masks

Transitions can be implemented as overlay sequences that cover and uncover scenes:

```tsx
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const WipeTransition = ({
  durationFrames = 15,
  color = '#000000',
  direction = 'left-to-right',
}: {
  durationFrames?: number;
  color?: string;
  direction?: 'left-to-right' | 'circle-expand';
}) => {
  const frame = useCurrentFrame();

  if (direction === 'left-to-right') {
    // 0% -> 100% -> 200% movement
    const progress = interpolate(frame, [0, durationFrames], [-100, 100], {
      extrapolateRight: 'clamp',
    });

    return (
      <AbsoluteFill
        style={{
          backgroundColor: color,
          transform: `translateX(${progress}%)`,
          zIndex: 999,
        }}
      />
    );
  }

  // Circle Reveal
  const radius = interpolate(frame, [0, durationFrames / 2, durationFrames], [0, 150, 0]);
  return (
    <AbsoluteFill
      style={{
        backgroundColor: color,
        clipPath: `circle(${radius}% at 50% 50%)`,
        zIndex: 999,
      }}
    />
  );
};
```
