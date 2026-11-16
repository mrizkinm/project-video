---
name: remotion
description: >-
  Build, animate, test, and render programmatic React videos using Remotion (remotion-dev/remotion).
  Use this skill whenever creating compositions, sequencing scenes, building spring animations,
  syncing audio/voiceover, designing transitions, or executing Remotion CLI preview and render commands.
---

# Remotion Video Development Skill

This skill guides you through developing, animating, and rendering high-quality programmatic videos using **Remotion** (`remotion-dev/remotion`).

---

## 1. Quick Reference & Core Guides

Read these modular references as needed:
- [API Cheat Sheet](./references/api-cheatsheet.md): Primitives (`<Composition>`, `<Sequence>`, `<AbsoluteFill>`), hooks (`useCurrentFrame`, `useVideoConfig`), and animation functions (`spring`, `interpolate`, `random`).
- [Animation Patterns](./references/animation-patterns.md): Kinetic typography, staggered badges, looping breathing/wave effects, and transition overlays.
- [CLI & Rendering Guide](./references/cli-and-rendering.md): Render commands, preview server, memory limits, and Windows execution rules.
- [Boilerplate Composition](./examples/composition-template.tsx): Ready-to-use template for a multi-scene composition.

---

## 2. Core Golden Rules

1. **Always Be Deterministic**:
   - ❌ Never use `Math.random()`, `Date.now()`, or uncontrolled random values during render.
   - ✅ Use Remotion's `random(seed)` (e.g. `random("star-1")`) to guarantee identical output across frames.

2. **Frame-Driven Animations**:
   - Derive all animations strictly from `useCurrentFrame()` and `useVideoConfig()`.
   - Use `spring()` for natural physical motion (scale pops, sliding cards).
   - Use `interpolate()` for bounded values (opacity, rotation, linear transitions) with `extrapolateLeft: 'clamp'` and `extrapolateRight: 'clamp'`.

3. **Layout & Dimensions**:
   - Wrap scenes in `<AbsoluteFill>` to automatically inherit full canvas dimensions.
   - Calculate responsive positioning using `width` and `height` from `useVideoConfig()`.

4. **Asset Paths**:
   - Place audio, images, and fonts inside the root `public/` directory.
   - Load them with `staticFile('path/inside/public')`.

---

## 3. Standard Workflow: Creating a New Video

### Step 1: Define Composition in Root
Register the video in `src/Root.tsx`:
```tsx
import { Composition } from 'remotion';
import { MyVideo } from './videos/MyVideo/Composition';

<Composition
  id="MyVideo"
  component={MyVideo}
  durationInFrames={900} // 30 seconds @ 30fps
  fps={30}
  width={1080}
  height={1920} // Vertical 9:16 format
/>
```

### Step 2: Structure Scenes & Audio
Use `<Sequence>` blocks to time each scene and align voiceover or SFX:
```tsx
<AbsoluteFill style={{ backgroundColor: '#0f172a' }}>
  {/* BGM */}
  <Audio src={staticFile('audio/bgm/music.mp3')} volume={0.25} loop />

  {/* Scene 1 (0s - 4s) */}
  <Sequence from={0} durationInFrames={120}>
    <Audio src={staticFile('audio/voiceover/scene1.mp3')} volume={1.0} />
    <Scene1 />
  </Sequence>

  {/* Scene 2 (4s - 8s) */}
  <Sequence from={120} durationInFrames={120}>
    <Audio src={staticFile('audio/voiceover/scene2.mp3')} volume={1.0} />
    <Scene2 />
  </Sequence>
</AbsoluteFill>
```

### Step 3: Verify TypeScript Before Rendering
Always run a type check:
```bash
cmd.exe /c "npx tsc --noEmit"
```

### Step 4: Preview a Single Frame (Fast Check)
```bash
cmd.exe /c "npx remotion still MyVideo out/preview.png --frame=60 --scale=0.5"
```

### Step 5: Render Full Video
```bash
cmd.exe /c "npx remotion render MyVideo out/my_video.mp4 --concurrency=1 --scale=0.5"
```

---

## 4. Common Troubleshooting

| Issue | Cause | Fix |
| :--- | :--- | :--- |
| `npm.ps1 cannot be loaded` | Windows PowerShell execution policy | Wrap CLI commands with `cmd.exe /c "npx remotion ..."` |
| Chromium crash / OOM | Concurrency exceeds memory capacity | Add `--concurrency=1` to render command |
| Frame flickering on render | `Math.random()` used in components | Replace with `random(seed)` from `remotion` |
| Video black screen / missing asset | Incorrect asset path | Ensure asset is in `public/` and loaded via `staticFile(...)` |
| Audio muffled / distorted | Multiple overlapping unmuted tracks | Check volume levels (VO: 1.0, SFX: 0.45, BGM: 0.25) |
