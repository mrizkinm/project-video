import React from 'react';
import {
  AbsoluteFill,
  Audio,
  interpolate,
  Sequence,
  staticFile,
} from 'remotion';

// Import 8 Dedicated Scenes for Episode 5
import { Scene1_PsychologicalTrigger } from './scenes/Scene1_PsychologicalTrigger';
import { Scene2_PetContagion } from './scenes/Scene2_PetContagion';
import { Scene3_MirrorNeurons } from './scenes/Scene3_MirrorNeurons';
import { Scene4_EmpathyMechanism } from './scenes/Scene4_EmpathyMechanism';
import { Scene5_BrainRadiator } from './scenes/Scene5_BrainRadiator';
import { Scene6_EmpathyRadar } from './scenes/Scene6_EmpathyRadar';
import { Scene7_SocialValidation } from './scenes/Scene7_SocialValidation';
import { Scene8_OutroCTA } from './scenes/Scene8_OutroCTA';

// Shared Components
import { SceneTransition } from '../../shared/effects/SceneTransition';
import { ViralCaptions } from '../../shared/ui/ViralCaptions';
import { ProgressBar } from '../../components/ProgressBar';

/**
 * Episode 5: "Kenapa Nguap Itu Bisa Nular?" (Contagious Yawning & Mirror Neurons)
 * Saluran: Tiba-Tiba Paham (@tibatibapaham)
 * Format: 9:16 Vertical (1080 x 1920) @ 30 FPS
 * Total Durasi Estimasi Preview: 1060 frame (~35.33 detik)
 *
 * Akustik & Audio:
 * - Folder Voiceover Pengguna: public/audio/ep5_voiceover/scene1.mp3 s/d scene8.mp3
 * - BGM Ducking: 14% volume agar suara voiceover terdengar jernih dan tajam.
 */
export const ContagiousYawningVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#030712' }}>
      {/* 100% Offline Local Fonts Setup */}
      <style>{`
        @font-face {
          font-family: 'Fredoka';
          src: url('${staticFile('fonts/Fredoka.ttf')}') format('truetype');
          font-weight: 400 900;
          font-style: normal;
          font-display: block;
        }
        @font-face {
          font-family: 'Plus Jakarta Sans';
          src: url('${staticFile('fonts/PlusJakartaSans.ttf')}') format('truetype');
          font-weight: 400 800;
          font-style: normal;
          font-display: block;
        }
      `}</style>

      {/* 🎵 BACKGROUND MUSIC (Sneaky / Mystery Theme - Ducked to 14% for crystal clear VO) */}
      <Audio
        src={staticFile('audio/bgm/bgm_mystery.mp3')}
        volume={(f) => {
          if (f > 1000) {
            return interpolate(f, [1000, 1060], [0.14, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
          }
          return 0.14;
        }}
        loop
      />

      {/* ══════════════════════════════════════════════════════════════
          SCENE 1: 0 - 4.5s (135 frames)
          Naskah: "Lihat orang nguap, kamu ikutan nguap. Bahkan baru baca kata 'NGUAP' di layar ini aja... rahangmu udah mulai gatal mau kebuka, kan?"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={0} durationInFrames={135}>
        <Scene1_PsychologicalTrigger />
        <ViralCaptions
          badge="🥱 UJI PSIKOLOGIS"
          badgeColor="#f59e0b"
          text="Baru baca kata 'NGUAP' di layar aja, rahangmu udah mulai gatal mau kebuka, kan?"
          highlightWord="NGUAP"
        />
      </Sequence>

      {/* ✨ TRANSITION 1→2: Centered at frame 135 (frames 129-141) */}
      <Sequence from={129} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#ec4899" />
        <Audio src={staticFile('audio/sfx/whoosh.wav')} volume={0.16} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 2: 4.5s - 9.0s (135 frames, from 135 to 270)
          Naskah: "Nguap menular itu salah satu fenomena paling aneh di bumi. Bahkan anjing atau kucing peliharaanmu bisa ikutan nguap pas ngeliat kamu nguap!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={135} durationInFrames={135}>
        <Scene2_PetContagion />
        <ViralCaptions
          badge="🐕 NULAR KE HEWAN"
          badgeColor="#ec4899"
          text="Bahkan anjing atau kucing peliharaanmu bisa ikutan nguap pas ngeliat kamu nguap!"
          highlightWord="anjing atau kucing"
        />
      </Sequence>

      {/* ✨ TRANSITION 2→3: Centered at frame 270 (frames 264-276) */}
      <Sequence from={264} durationInFrames={12}>
        <SceneTransition type="wipe-diagonal" durationFrames={12} color="#38bdf8" />
        <Audio src={staticFile('audio/sfx/pop.wav')} volume={0.20} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 3: 9.0s - 13.5s (135 frames, from 270 to 405)
          Naskah: "Tapi tenang, kamu nguap bukan melulu karena kurang tidur. Di dalam otak kita, ada sistem saraf canggih bernama Mirror Neurons!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={270} durationInFrames={135}>
        <Scene3_MirrorNeurons />
        <ViralCaptions
          badge="🧠 MIRROR NEURONS"
          badgeColor="#38bdf8"
          text="Di dalam otak kita, ada sistem saraf canggih bernama Mirror Neurons!"
          highlightWord="Mirror Neurons!"
        />
      </Sequence>

      {/* ✨ TRANSITION 3→4: Centered at frame 405 (frames 399-411) */}
      <Sequence from={399} durationInFrames={12}>
        <SceneTransition type="circle-reveal" durationFrames={12} color="#06b6d4" />
        <Audio src={staticFile('audio/sfx/whoosh.wav')} volume={0.16} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 4: 13.5s - 17.67s (125 frames, from 405 to 530)
          Naskah: "Neuron cermin ini bertugas meniru tindakan orang lain secara otomatis, agar kita bisa merasakan apa yang orang lain rasakan."
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={405} durationInFrames={125}>
        <Scene4_EmpathyMechanism />
        <ViralCaptions
          badge="🪞 SISTEM EMPATI"
          badgeColor="#06b6d4"
          text="Neuron cermin bertugas meniru aksi orang lain secara otomatis buat ngerasain emosinya."
          highlightWord="meniru aksi"
        />
      </Sequence>

      {/* ✨ TRANSITION 4→5: Centered at frame 530 (frames 524-536) */}
      <Sequence from={524} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#0284c7" />
        <Audio src={staticFile('audio/sfx/glitch.wav')} volume={0.18} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 5: 17.67s - 22.17s (135 frames, from 530 to 665)
          Naskah: "Zaman purba dulu, nguap barengan dipakai buat sinkronisasi kelompok: mendinginkan suhu otak dan memastikan semua anggota tetap waspada!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={530} durationInFrames={135}>
        <Scene5_BrainRadiator />
        <ViralCaptions
          badge="❄️ RADIATOR OTAK"
          badgeColor="#0284c7"
          text="Zaman purba, nguap bareng mendinginkan suhu otak agar kelompok tetap waspada!"
          highlightWord="mendinginkan suhu"
        />
      </Sequence>

      {/* ✨ TRANSITION 5→6: Centered at frame 665 (frames 659-671) */}
      <Sequence from={659} durationInFrames={12}>
        <SceneTransition type="wipe-diagonal" durationFrames={12} color="#10b981" />
        <Audio src={staticFile('audio/sfx/whoosh.wav')} volume={0.16} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 6: 22.17s - 26.67s (135 frames, from 665 to 800)
          Naskah: "Makanya, makin tinggi rasa empatimu, makin gampang kamu ketularan nguap. Penelitian membuktikan orang yang manipulatif dan minim empati justru kebal!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={665} durationInFrames={135}>
        <Scene6_EmpathyRadar />
        <ViralCaptions
          badge="📊 RADAR EMPATI"
          badgeColor="#10b981"
          text="Makin tinggi rasa empatimu, makin gampang ketularan. Orang minim empati justru kebal!"
          highlightWord="rasa empatimu"
        />
      </Sequence>

      {/* ✨ TRANSITION 6→7: Centered at frame 800 (frames 794-806) */}
      <Sequence from={794} durationInFrames={12}>
        <SceneTransition type="circle-reveal" durationFrames={12} color="#34d399" />
        <Audio src={staticFile('audio/sfx/chime.wav')} volume={0.20} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 7: 26.67s - 30.83s (125 frames, from 800 to 925)
          Naskah: "Jadi kalau dari tadi kamu udah nguap berkali-kali, selamat! Itu bukti ilmiah kalau otakmu punya rasa empati sosial yang sehat."
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={800} durationInFrames={125}>
        <Scene7_SocialValidation />
        <ViralCaptions
          badge="🌟 OTAK SEHAT"
          badgeColor="#34d399"
          text="Kalau dari tadi kamu ikutan nguap, selamat! Itu bukti otak sosialmu sangat sehat."
          highlightWord="otak sosialmu"
        />
      </Sequence>

      {/* ✨ TRANSITION 7→8: Centered at frame 925 (frames 919-931) */}
      <Sequence from={919} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#ef4444" />
        <Audio src={staticFile('audio/sfx/ding.wav')} volume={0.20} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 8: 30.83s - 35.33s (135 frames, from 925 to 1060)
          Naskah: "Jujur, selama nonton video ini kamu udah nguap berapa kali? Tulis di komentar dan follow biar Tiba-Tiba Paham!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={925} durationInFrames={135}>
        <Scene8_OutroCTA />
        <ViralCaptions
          badge="💬 KUIS NGUAP"
          badgeColor="#ef4444"
          text="Jujur kamu udah nguap berapa kali? Tulis di komentar dan follow biar Tiba-Tiba Paham!"
          highlightWord="Tiba-Tiba Paham!"
        />
      </Sequence>

      {/* 🏷️ TOP HEADER WATERMARK (Kurzgesagt/Vox Branding) */}
      <div
        style={{
          position: 'absolute',
          top: 60,
          left: 50,
          right: 50,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 90,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(90deg, #f59e0b 0%, #ec4899 100%)',
            color: '#ffffff',
            fontWeight: 900,
            fontSize: 24,
            padding: '10px 26px',
            borderRadius: 30,
            letterSpacing: 1.5,
            fontFamily: "'Fredoka', sans-serif",
            boxShadow: '0 6px 18px rgba(0,0,0,0.5)',
            border: '2px solid rgba(255,255,255,0.25)',
          }}
        >
          🥱 SAINS NGUAP
        </div>
        <div
          style={{
            color: '#facc15',
            fontWeight: 800,
            fontSize: 26,
            backgroundColor: 'rgba(15,23,42,0.85)',
            padding: '8px 22px',
            borderRadius: 20,
            border: '2px solid rgba(250,204,21,0.5)',
            fontFamily: "'Fredoka', sans-serif",
          }}
        >
          #TibaTibaPaham
        </div>
      </div>

      {/* 📊 BOTTOM PROGRESS BAR */}
      <ProgressBar />
    </AbsoluteFill>
  );
};
