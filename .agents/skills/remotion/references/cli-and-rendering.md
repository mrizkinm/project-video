# Remotion CLI, Rendering & Production

Essential commands, best practices for rendering on Windows/sandboxes, memory tuning, and troubleshooting.

---

## 1. CLI Commands

### Start Preview Player (Dev Server)
```bash
npx remotion preview
```
- Interactive timeline player in the browser.
- Hot reloads React components on file changes.

### Still / Frame Preview
Render a single frame as an image to verify layouts and visual alignment quickly:
```bash
npx remotion still <CompositionId> out/preview.png --frame=0 --scale=0.5
```

### Full Video Render
Render an entire composition to MP4:
```bash
npx remotion render <CompositionId> out/video.mp4 --scale=0.5 --concurrency=1
```

---

## 2. Windows & Sandbox Optimization Rules

### PowerShell Script Execution Policy
On Windows, running `npx remotion` directly in PowerShell can trigger an execution policy error (`npm.ps1 cannot be loaded`).
**Solution:**
Always invoke via `cmd.exe /c`:
```bash
cmd.exe /c "npx remotion render <CompositionId> out/output.mp4"
```

### Memory Management & Concurrency
By default, Remotion spins up headless Chromium instances equal to CPU cores. In containerized, virtualized, or memory-limited environments (like Windows dev sandboxes), this can trigger Out-Of-Memory (OOM) crashes.
**Recommended flags:**
- `--concurrency=1`: Renders one frame thread at a time (stable, prevents browser crash).
- `--scale=0.5`: Downscales 1080x1920 to 540x960 during draft renders (4x faster, minimal memory).
- `--gl=angle` or `--gl=swiftshader`: Useful if GPU hardware acceleration fails inside headless Chromium.

### Pre-Render Type Checking
Always run TypeScript verification before starting long renders:
```bash
cmd.exe /c "npx tsc --noEmit"
```

---

## 3. Remotion Config (`remotion.config.ts`)

Configure renderer defaults project-wide:

```ts
import { Config } from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg'); // Faster frame capture than png
Config.setOverwriteOutput(true);
Config.setChromiumOpenGlRenderer('angle');
```

---

## 4. Audio Mixing Best Practices

| Audio Layer | Recommended Volume Range | Characteristics |
| :--- | :--- | :--- |
| **Voiceover (VO)** | `1.0` (Master reference) | Clear speech, no ducking |
| **Sound Effects (SFX)** | `0.35` – `0.60` | Crisp punch without clipping |
| **Background Music (BGM)**| `0.15` – `0.28` | Ambient bed; avoid overpowering VO |

Dynamic volume ducking example:
```tsx
<Audio
  src={staticFile('audio/bgm/music.mp3')}
  volume={(f) => {
    // Duck music when voiceover is speaking (e.g., frames 0-300)
    return f < 300 ? 0.15 : 0.40;
  }}
  loop
/>
```
