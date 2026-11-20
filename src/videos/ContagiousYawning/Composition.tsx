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
 * Total Durasi Final: 2177 frame (~72.57 detik)
 *
 * Akustik & Audio:
 * - Voiceover User: public/audio/ep5_voiceover/scene1.mp3 s/d scene8.mp3
 * - BGM Ducking: 14% volume agar suara voiceover terdengar jernih dan tajam.
 * - Subtitle 100% Verbatim dengan Acoustic Pause Alignment per Rule 4.
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
          if (f > 2110) {
            return interpolate(f, [2110, 2177], [0.14, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
          }
          return 0.14;
        }}
        loop
      />

      {/* ══════════════════════════════════════════════════════════════
          SCENE 1: 0 - 9.27s (278 frames)
          Voiceover: 8.75s (263 frames) + 15 frames safety breathing room
          Naskah: "Lihat orang nguap, kamu ikutan nguap. Bahkan baru baca kata 'NGUAP' di layar ini aja... rahangmu udah mulai gatal mau kebuka, kan?"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={0} durationInFrames={278}>
        <Scene1_PsychologicalTrigger />
        <Audio src={staticFile('audio/ep5_voiceover/scene1.mp3')} volume={1.0} />

        {/* Phrase 1 (frames 0 - 120) */}
        <Sequence from={0} durationInFrames={120}>
          <ViralCaptions
            badge="🥱 UJI REFLEKS"
            badgeColor="#f59e0b"
            text="Lihat orang nguap, kamu ikutan nguap."
            highlightWord="ikutan nguap."
          />
        </Sequence>

        {/* Phrase 2 (frames 120 - 278) */}
        <Sequence from={120} durationInFrames={158}>
          <ViralCaptions
            badge="🥱 UJI PSIKOLOGIS"
            badgeColor="#f59e0b"
            text="Baru baca kata 'NGUAP' di layar aja, rahangmu udah mulai gatal mau kebuka, kan?"
            highlightWord="NGUAP"
          />
        </Sequence>
      </Sequence>

      {/* ✨ TRANSITION 1→2: Centered at frame 278 (frames 272-284) */}
      <Sequence from={272} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#ec4899" />
        <Audio src={staticFile('audio/sfx/whoosh.wav')} volume={0.16} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 2: 9.27s - 18.37s (273 frames, from 278 to 551)
          Voiceover: 8.59s (258 frames) + 15 frames safety breathing room
          Naskah: "Nguap menular itu salah satu fenomena paling aneh di bumi. Bahkan anjing atau kucing peliharaanmu bisa ikutan nguap pas ngeliat kamu nguap!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={278} durationInFrames={273}>
        <Scene2_PetContagion />
        <Audio src={staticFile('audio/ep5_voiceover/scene2.mp3')} volume={1.0} />

        {/* Phrase 1 (frames 0 - 125) */}
        <Sequence from={0} durationInFrames={125}>
          <ViralCaptions
            badge="🌍 FENOMENA ANEH"
            badgeColor="#ec4899"
            text="Nguap menular itu salah satu fenomena paling aneh di bumi."
            highlightWord="paling aneh"
          />
        </Sequence>

        {/* Phrase 2 (frames 125 - 273) */}
        <Sequence from={125} durationInFrames={148}>
          <ViralCaptions
            badge="🐕 NULAR KE HEWAN"
            badgeColor="#ec4899"
            text="Bahkan anjing atau kucing peliharaanmu bisa ikutan nguap pas ngeliat kamu nguap!"
            highlightWord="anjing atau kucing"
          />
        </Sequence>
      </Sequence>

      {/* ✨ TRANSITION 2→3: Centered at frame 551 (frames 545-557) */}
      <Sequence from={545} durationInFrames={12}>
        <SceneTransition type="wipe-diagonal" durationFrames={12} color="#38bdf8" />
        <Audio src={staticFile('audio/sfx/pop.wav')} volume={0.20} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 3: 18.37s - 27.33s (269 frames, from 551 to 820)
          Voiceover: 8.44s (254 frames) + 15 frames safety breathing room
          Naskah: "Tapi tenang, kamu nguap bukan melulu karena kurang tidur. Di dalam otak kita, ada sistem saraf canggih bernama Mirror Neurons!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={551} durationInFrames={269}>
        <Scene3_MirrorNeurons />
        <Audio src={staticFile('audio/ep5_voiceover/scene3.mp3')} volume={1.0} />

        {/* Phrase 1 (frames 0 - 120) */}
        <Sequence from={0} durationInFrames={120}>
          <ViralCaptions
            badge="💤 BUKAN KURANG TIDUR"
            badgeColor="#38bdf8"
            text="Tapi tenang, kamu nguap bukan melulu karena kurang tidur."
            highlightWord="kurang tidur."
          />
        </Sequence>

        {/* Phrase 2 (frames 120 - 269) */}
        <Sequence from={120} durationInFrames={149}>
          <ViralCaptions
            badge="🧠 MIRROR NEURONS"
            badgeColor="#38bdf8"
            text="Di dalam otak kita, ada sistem saraf canggih bernama Mirror Neurons!"
            highlightWord="Mirror Neurons!"
          />
        </Sequence>
      </Sequence>

      {/* ✨ TRANSITION 3→4: Centered at frame 820 (frames 814-826) */}
      <Sequence from={814} durationInFrames={12}>
        <SceneTransition type="circle-reveal" durationFrames={12} color="#06b6d4" />
        <Audio src={staticFile('audio/sfx/whoosh.wav')} volume={0.16} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 4: 27.33s - 36.03s (261 frames, from 820 to 1081)
          Voiceover: 8.20s (246 frames) + 15 frames safety breathing room
          Naskah: "Neuron cermin ini bertugas meniru tindakan orang lain secara otomatis, agar kita bisa merasakan apa yang orang lain rasakan."
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={820} durationInFrames={261}>
        <Scene4_EmpathyMechanism />
        <Audio src={staticFile('audio/ep5_voiceover/scene4.mp3')} volume={1.0} />

        {/* Phrase 1 (frames 0 - 130) */}
        <Sequence from={0} durationInFrames={130}>
          <ViralCaptions
            badge="🪞 SISTEM EMPATI"
            badgeColor="#06b6d4"
            text="Neuron cermin ini bertugas meniru tindakan orang lain secara otomatis,"
            highlightWord="meniru tindakan"
          />
        </Sequence>

        {/* Phrase 2 (frames 130 - 261) */}
        <Sequence from={130} durationInFrames={131}>
          <ViralCaptions
            badge="📡 RESONANSI OTAK"
            badgeColor="#06b6d4"
            text="agar kita bisa merasakan apa yang orang lain rasakan."
            highlightWord="merasakan"
          />
        </Sequence>
      </Sequence>

      {/* ✨ TRANSITION 4→5: Centered at frame 1081 (frames 1075-1087) */}
      <Sequence from={1075} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#0284c7" />
        <Audio src={staticFile('audio/sfx/glitch.wav')} volume={0.18} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 5: 36.03s - 45.47s (283 frames, from 1081 to 1364)
          Voiceover: 8.91s (268 frames) + 15 frames safety breathing room
          Naskah: "Zaman purba dulu, nguap barengan dipakai buat sinkronisasi kelompok: mendinginkan suhu otak dan memastikan semua anggota tetap waspada!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={1081} durationInFrames={283}>
        <Scene5_BrainRadiator />
        <Audio src={staticFile('audio/ep5_voiceover/scene5.mp3')} volume={1.0} />

        {/* Phrase 1 (frames 0 - 140) */}
        <Sequence from={0} durationInFrames={140}>
          <ViralCaptions
            badge="🔥 EVOLUSI PURBA"
            badgeColor="#f59e0b"
            text="Zaman purba dulu, nguap barengan dipakai buat sinkronisasi kelompok:"
            highlightWord="sinkronisasi kelompok:"
          />
        </Sequence>

        {/* Phrase 2 (frames 140 - 283) */}
        <Sequence from={140} durationInFrames={143}>
          <ViralCaptions
            badge="❄️ RADIATOR OTAK"
            badgeColor="#0284c7"
            text="mendinginkan suhu otak dan memastikan semua anggota tetap waspada!"
            highlightWord="tetap waspada!"
          />
        </Sequence>
      </Sequence>

      {/* ✨ TRANSITION 5→6: Centered at frame 1364 (frames 1358-1370) */}
      <Sequence from={1358} durationInFrames={12}>
        <SceneTransition type="wipe-diagonal" durationFrames={12} color="#10b981" />
        <Audio src={staticFile('audio/sfx/whoosh.wav')} volume={0.16} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 6: 45.47s - 56.10s (319 frames, from 1364 to 1683)
          Voiceover: 10.11s (304 frames) + 15 frames safety breathing room
          Naskah: "Makanya, makin tinggi rasa empatimu, makin gampang kamu ketularan nguap. Penelitian membuktikan orang yang manipulatif dan minim empati justru kebal!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={1364} durationInFrames={319}>
        <Scene6_EmpathyRadar />
        <Audio src={staticFile('audio/ep5_voiceover/scene6.mp3')} volume={1.0} />

        {/* Phrase 1 (frames 0 - 155) */}
        <Sequence from={0} durationInFrames={155}>
          <ViralCaptions
            badge="📊 RADAR EMPATI"
            badgeColor="#10b981"
            text="Makanya, makin tinggi rasa empatimu, makin gampang kamu ketularan nguap."
            highlightWord="rasa empatimu,"
          />
        </Sequence>

        {/* Phrase 2 (frames 155 - 319) */}
        <Sequence from={155} durationInFrames={164}>
          <ViralCaptions
            badge="🛡️ MINIM EMPATI"
            badgeColor="#ef4444"
            text="Penelitian membuktikan orang yang manipulatif dan minim empati justru kebal!"
            highlightWord="justru kebal!"
          />
        </Sequence>
      </Sequence>

      {/* ✨ TRANSITION 6→7: Centered at frame 1683 (frames 1677-1689) */}
      <Sequence from={1677} durationInFrames={12}>
        <SceneTransition type="circle-reveal" durationFrames={12} color="#34d399" />
        <Audio src={staticFile('audio/sfx/chime.wav')} volume={0.20} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 7: 56.10s - 65.07s (269 frames, from 1683 to 1952)
          Voiceover: 8.44s (254 frames) + 15 frames safety breathing room
          Naskah: "Jadi kalau dari tadi kamu udah nguap berkali-kali, selamat! Itu bukti ilmiah kalau otakmu punya rasa empati sosial yang sehat."
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={1683} durationInFrames={269}>
        <Scene7_SocialValidation />
        <Audio src={staticFile('audio/ep5_voiceover/scene7.mp3')} volume={1.0} />

        {/* Phrase 1 (frames 0 - 125) */}
        <Sequence from={0} durationInFrames={125}>
          <ViralCaptions
            badge="🌟 SELAMAT!"
            badgeColor="#34d399"
            text="Jadi kalau dari tadi kamu udah nguap berkali-kali, selamat!"
            highlightWord="selamat!"
          />
        </Sequence>

        {/* Phrase 2 (frames 125 - 269) */}
        <Sequence from={125} durationInFrames={144}>
          <ViralCaptions
            badge="🧠 OTAK SEHAT"
            badgeColor="#34d399"
            text="Itu bukti ilmiah kalau otakmu punya rasa empati sosial yang sehat."
            highlightWord="empati sosial yang sehat."
          />
        </Sequence>
      </Sequence>

      {/* ✨ TRANSITION 7→8: Centered at frame 1952 (frames 1946-1958) */}
      <Sequence from={1946} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#ef4444" />
        <Audio src={staticFile('audio/sfx/ding.wav')} volume={0.20} />
      </Sequence>

      {/* ══════════════════════════════════════════════════════════════
          SCENE 8: 65.07s - 72.57s (225 frames, from 1952 to 2177)
          Voiceover: 7.00s (210 frames) + 15 frames safety breathing room
          Naskah: "Jujur, selama nonton video ini kamu udah nguap berapa kali? Tulis di komentar dan follow biar Tiba-Tiba Paham!"
          ══════════════════════════════════════════════════════════════ */}
      <Sequence from={1952} durationInFrames={225}>
        <Scene8_OutroCTA />
        <Audio src={staticFile('audio/ep5_voiceover/scene8.mp3')} volume={1.0} />

        {/* Phrase 1 (frames 0 - 110) */}
        <Sequence from={0} durationInFrames={110}>
          <ViralCaptions
            badge="💬 KUIS NGUAP"
            badgeColor="#ef4444"
            text="Jujur, selama nonton video ini kamu udah nguap berapa kali?"
            highlightWord="berapa kali?"
          />
        </Sequence>

        {/* Phrase 2 (frames 110 - 225) */}
        <Sequence from={110} durationInFrames={115}>
          <ViralCaptions
            badge="👉 FOLLOW @TibaTibaPaham"
            badgeColor="#ef4444"
            text="Tulis di komentar dan follow biar Tiba-Tiba Paham!"
            highlightWord="Tiba-Tiba Paham!"
          />
        </Sequence>
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
