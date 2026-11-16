# Remotion API Cheat Sheet

A comprehensive reference for core Remotion primitives, hooks, and utilities.

---

## 1. Core Primitives (`remotion`)

### `<Composition />`
Defines a video or graphic composition inside the root component (usually `src/Root.tsx`).

```tsx
import { Composition } from 'remotion';
import { MyVideo } from './MyVideo';

export const RemotionRoot = () => {
  return (
    <Composition
      id="MyVideo"
      component={MyVideo}
      durationInFrames={900} // 30s @ 30fps
      fps={30}
      width={1080}
      height={1920} // Vertical 9:16
      defaultProps={{
        title: 'Hello Remotion',
      }}
    />
  );
};
```

### `<AbsoluteFill />`
An absolute container pre-styled with `position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; display: flex; flex-direction: column;`.
Use as the root layout wrapper for scenes and components.

```tsx
import { AbsoluteFill } from 'remotion';

export const MyScene = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#0f172a', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Title</h1>
    </AbsoluteFill>
  );
};
```

### `<Sequence />`
Shifts time forward for its child components.

```tsx
import { Sequence } from 'remotion';

// Starts at frame 60 (2.0s at 30fps) and lasts 90 frames (3.0s)
<Sequence from={60} durationInFrames={90} layout="none">
  <Subtitle />
</Sequence>
```
- `layout="none"`: Disables the default `AbsoluteFill` wrapper around children (useful when positioning manually or wrapping audio).
- `premountFor`: Pre-mounts children before their `from` frame for smooth media initialization.

### `<Series />`
Automatically chains sequential scenes without needing to manually calculate `from` offsets.

```tsx
import { Series } from 'remotion';

<Series>
  <Series.Sequence durationInFrames={90}>
    <Scene1 />
  </Series.Sequence>
  <Series.Sequence durationInFrames={120} offset={-15}>
    {/* Negative offset allows overlap for cross-fade transitions */}
    <Scene2 />
  </Series.Sequence>
</Series>
```

---

## 2. Hooks

### `useCurrentFrame()`
Returns the current frame number within the closest `<Composition>` or `<Sequence>`.
- Starts at `0`.
- In a `<Sequence from={30}>`, `useCurrentFrame()` inside that sequence returns `0` when the global composition is at frame `30`.

### `useVideoConfig()`
Returns configuration properties of the active composition:
```tsx
const { fps, durationInFrames, width, height, id } = useVideoConfig();
```

---

## 3. Animation Mathematics

### `interpolate()`
Maps a frame range to an output range.

```tsx
import { interpolate, useCurrentFrame } from 'remotion';

const frame = useCurrentFrame();

const opacity = interpolate(
  frame,
  [0, 15, 75, 90], // input frames
  [0, 1, 1, 0],    // output values (fade in, hold, fade out)
  {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: (t) => t, // Optional easing function
  }
);
```

### `spring()`
Creates natural, physics-based spring motion (bounce, snap, smooth settle).

```tsx
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

const frame = useCurrentFrame();
const { fps } = useVideoConfig();

const scale = spring({
  frame,
  fps,
  config: {
    damping: 12,       // Lower = bouncier (default: 10)
    mass: 0.5,         // Lower = snappier (default: 1)
    stiffness: 100,    // Higher = faster snap (default: 100)
    overshootClamping: false,
  },
  from: 0,
  to: 1,
});
```

### `random(seed)`
**Never use `Math.random()` in Remotion** because it is non-deterministic and produces flickering between preview and renders.
Always use `random()`:

```tsx
import { random } from 'remotion';

// Deterministic value between 0 and 1:
const particleX = random(`particle-x-${index}`) * 1080;
```

---

## 4. Media Elements

### Assets from `public/`: `staticFile()`
Referencing local media files placed inside the root `public/` directory:

```tsx
import { staticFile, Audio, Img } from 'remotion';

<Img src={staticFile('images/mascot.png')} />
<Audio src={staticFile('audio/sfx/pop.wav')} volume={0.6} />
```

### `<Audio />`
Plays audio synced with video timeline.
- `volume`: number between `0` and `1`, or a callback function `(frame) => number` for dynamic fading.
- `loop`: boolean to repeat audio.
- `playbackRate`: playback speed multiplier.

### `<Video />` vs `<OffthreadVideo />`
- `<Video />`: Uses standard HTML5 `<video>` tag. Best for simple preview playback.
- `<OffthreadVideo />`: Extracts frames in a separate background process. Preferred when rendering multiple transparent or high-bitrate video clips concurrently without frame dropping.

---

## 5. Async Loading (`delayRender`)

For fonts, external APIs, or Canvas generation:

```tsx
import { delayRender, continueRender } from 'remotion';
import { useEffect, useState } from 'react';

export const AsyncAsset = () => {
  const [handle] = useState(() => delayRender('Waiting for custom font...'));

  useEffect(() => {
    document.fonts.ready.then(() => {
      continueRender(handle);
    });
  }, [handle]);

  return <div>Ready!</div>;
};
```
