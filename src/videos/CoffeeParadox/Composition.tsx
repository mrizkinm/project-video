import React from 'react';
import {
  AbsoluteFill,
  Audio,
  interpolate,
  Sequence,
  staticFile,
} from 'remotion';
import { Scene1_SleepyCoffee } from './scenes/Scene1_SleepyCoffee';
import { Scene2_CrashDilemma } from './scenes/Scene2_CrashDilemma';
import { Scene3_BrainParkingLot } from './scenes/Scene3_BrainParkingLot';
import { Scene4_AdenosineTraffic } from './scenes/Scene4_AdenosineTraffic';
import { Scene5_CaffeineCrash } from './scenes/Scene5_CaffeineCrash';
import { Scene6_NinetyMinuteHack } from './scenes/Scene6_NinetyMinuteHack';
import { Scene7_OutroCTA } from './scenes/Scene7_OutroCTA';
import { ViralCaptions } from '../../shared/ui/ViralCaptions';
import { SceneTransition } from '../../shared/effects/SceneTransition';
import { ProgressBar } from '../../components/ProgressBar';

/**
 * ☕ EPISODE 2: The Coffee Paradox (Kenapa Minum Kopi Malah Tambah Ngantuk?)
 *
 * Durasi: 62.67 detik (1.880 frame @ 30 FPS)
 * Voiceover: 100% Utuh tanpa terpotong (diukur presisi per frame)
 * Subtitle: 100% Sinkron Kata demi Kata dengan Audio ElevenLabs
 * Tipografi Resmi: Fredoka Bold + Plus Jakarta Sans (Lokal Offline)
 */
export const CoffeeParadoxVideo: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0a0a0c',
        fontFamily: "'Plus Jakarta Sans', 'Fredoka', sans-serif",
      }}
    >
      {/* 🔤 Local High-Speed Font Loader (100% Offline & Deterministic) */}
      <style>{`
        @font-face {
          font-family: 'Fredoka';
          src: url('${staticFile('fonts/Fredoka.ttf')}') format('truetype');
          font-weight: 100 900;
          font-style: normal;
          font-display: block;
        }
        @font-face {
          font-family: 'Plus Jakarta Sans';
          src: url('${staticFile('fonts/PlusJakartaSans.ttf')}') format('truetype');
          font-weight: 200 800;
          font-style: normal;
          font-display: block;
        }
      `}</style>

      {/* 🎵 BACKGROUND MUSIC (Subtle Mystery / Upbeat BGM ducked to 16%) */}
      <Audio
        src={staticFile('audio/bgm/bgm_mystery.mp3')}
        volume={(f) => {
          if (f > 1820) {
            return interpolate(f, [1820, 1880], [0.16, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
          }
          return 0.16;
        }}
        loop
      />

      {/* 🎬 SCENE 1: HOOK — BANGUN TIDUR NGOPI (0 - 210 | 210 frames / 7.00s | Audio: 198 frames) */}
      <Sequence from={0} durationInFrames={210}>
        <Audio src={staticFile('audio/ep2_voiceover/scene1.mp3')} volume={1.0} />
        <Scene1_SleepyCoffee />

        {/* Dynamic Caption 1A (0 - 118 | ~3.9s) */}
        <Sequence from={0} durationInFrames={118}>
          <ViralCaptions
            badge="MELEK PAGI HARI? 🌅"
            badgeColor="#f59e0b"
            text="Pernah nggak, baru bangun tidur langsung minum kopi biar melek..."
            highlightWord="minum kopi"
          />
        </Sequence>

        {/* Dynamic Caption 1B (118 - 210 | ~3.1s) */}
        <Sequence from={118} durationInFrames={92}>
          <ViralCaptions
            badge="MALAH LEMES 😴"
            badgeColor="#ef4444"
            text="...tapi kok malah lemes dan makin ngantuk?"
            highlightWord="makin ngantuk?"
          />
        </Sequence>
      </Sequence>

      {/* ✨ TRANSITION 1→2 (204 - 216) */}
      <Sequence from={204} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#f59e0b" />
        <Audio src={staticFile('audio/sfx/whoosh.wav')} volume={0.14} />
      </Sequence>

      {/* 🎬 SCENE 2: CRASH DILEMMA (210 - 410 | 200 frames / 6.67s | Audio: 188 frames) */}
      <Sequence from={210} durationInFrames={200}>
        <Audio src={staticFile('audio/ep2_voiceover/scene2.mp3')} volume={1.0} />
        <Scene2_CrashDilemma />

        {/* Dynamic Caption 2A (0 - 83 | ~2.8s) */}
        <Sequence from={0} durationInFrames={83}>
          <ViralCaptions
            badge="BUKAN KOPINYA ☕"
            badgeColor="#f59e0b"
            text="Tenang, bukan kopinya yang salah..."
            highlightWord="bukan kopinya"
          />
        </Sequence>

        {/* Dynamic Caption 2B (83 - 200 | ~3.9s) */}
        <Sequence from={83} durationInFrames={117}>
          <ViralCaptions
            badge="JEBAKAN RESEPTOR 🧠"
            badgeColor="#ef4444"
            text="...yang lagi dikerjain itu reseptor di otakmu!"
            highlightWord="reseptor di otakmu!"
          />
        </Sequence>
      </Sequence>

      {/* ✨ TRANSITION 2→3 (404 - 416) */}
      <Sequence from={404} durationInFrames={12}>
        <SceneTransition type="circle-reveal" durationFrames={12} color="#8b5cf6" />
        <Audio src={staticFile('audio/sfx/whoosh.wav')} volume={0.14} />
      </Sequence>

      {/* 🎬 SCENE 3: BRAIN ROOM PARKING LOT (410 - 800 | 390 frames / 13.00s | Audio: 373 frames) */}
      <Sequence from={410} durationInFrames={390}>
        <Audio src={staticFile('audio/ep2_voiceover/scene3.mp3')} volume={1.0} />
        <Scene3_BrainParkingLot />

        {/* Dynamic Caption 3A (0 - 175 | ~5.8s) */}
        <Sequence from={0} durationInFrames={175}>
          <ViralCaptions
            badge="ZAT ADENOSIN ⏳"
            badgeColor="#8b5cf6"
            text="Di otak kita ada zat Adenosin, sinyal rasa capek yang mau parkir di reseptor."
            highlightWord="zat Adenosin"
          />
        </Sequence>

        {/* Dynamic Caption 3B (175 - 280 | ~3.5s) */}
        <Sequence from={175} durationInFrames={105}>
          <ViralCaptions
            badge="PENYAMARAN KAFEIN ⚡"
            badgeColor="#f59e0b"
            text="Nah, molekul kafein itu bentuknya mirip banget."
            highlightWord="mirip banget"
          />
        </Sequence>

        {/* Dynamic Caption 3C (280 - 390 | ~3.7s) */}
        <Sequence from={280} durationInFrames={110}>
          <ViralCaptions
            badge="SLOT DISEROBOT 🚗"
            badgeColor="#8b5cf6"
            text="Pas masuk, dia langsung nyerobot slot parkir Adenosin!"
            highlightWord="nyerobot slot parkir"
          />
        </Sequence>
      </Sequence>

      {/* ✨ TRANSITION 3→4 (794 - 806) */}
      <Sequence from={794} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#ec4899" />
        <Audio src={staticFile('audio/sfx/whoosh.wav')} volume={0.14} />
      </Sequence>

      {/* 🎬 SCENE 4: ADENOSINE TRAFFIC JAM (800 - 1120 | 320 frames / 10.67s | Audio: 306 frames) */}
      <Sequence from={800} durationInFrames={320}>
        <Audio src={staticFile('audio/ep2_voiceover/scene4.mp3')} volume={1.0} />
        <Scene4_AdenosineTraffic />

        {/* Dynamic Caption 4A (0 - 160 | ~5.3s) */}
        <Sequence from={0} durationInFrames={160}>
          <ViralCaptions
            badge="CUMA NYUMBAT 🛑"
            badgeColor="#ef4444"
            text="Tapi ingat: kafein cuma nyumbat lubangnya, bukan ngilangin capeknya."
            highlightWord="bukan ngilangin capeknya"
          />
        </Sequence>

        {/* Dynamic Caption 4B (160 - 320 | ~5.3s) */}
        <Sequence from={160} durationInFrames={160}>
          <ViralCaptions
            badge="ADENOSIN MACET ⏳"
            badgeColor="#ec4899"
            text="Di belakang, molekul Adenosin terus diproduksi dan numpuk macet parah!"
            highlightWord="numpuk macet parah!"
          />
        </Sequence>
      </Sequence>

      {/* ✨ TRANSITION 4→5 (1114 - 1126) */}
      <Sequence from={1114} durationInFrames={12}>
        <SceneTransition type="split-vertical" durationFrames={12} color="#ef4444" />
        <Audio src={staticFile('audio/sfx/glitch.wav')} volume={0.15} />
      </Sequence>

      {/* 🎬 SCENE 5: CAFFEINE CRASH (1120 - 1420 | 300 frames / 10.00s | Audio: 285 frames) */}
      <Sequence from={1120} durationInFrames={300}>
        <Audio src={staticFile('audio/ep2_voiceover/scene5.mp3')} volume={1.0} />
        <Scene5_CaffeineCrash />

        {/* Dynamic Caption 5A (0 - 195 | ~6.5s) */}
        <Sequence from={0} durationInFrames={195}>
          <ViralCaptions
            badge="EFEK HABIS 💥"
            badgeColor="#ef4444"
            text="Begitu efek kafein habis, seluruh antrean rasa lelah tadi menyerbu reseptor sekaligus."
            highlightWord="menyerbu reseptor"
          />
        </Sequence>

        {/* Dynamic Caption 5B (195 - 300 | ~3.5s) */}
        <Sequence from={195} durationInFrames={105}>
          <ViralCaptions
            badge="CAFFEINE CRASH ⚡"
            badgeColor="#dc2626"
            text="Inilah yang bikin kamu kena Caffeine Crash!"
            highlightWord="Caffeine Crash!"
          />
        </Sequence>
      </Sequence>

      {/* ✨ TRANSITION 5→6 (1414 - 1426) */}
      <Sequence from={1414} durationInFrames={12}>
        <SceneTransition type="circle-reveal" durationFrames={12} color="#10b981" />
        <Audio src={staticFile('audio/sfx/ding.wav')} volume={0.14} />
      </Sequence>

      {/* 🎬 SCENE 6: 90-MINUTE HACK (1420 - 1700 | 280 frames / 9.33s | Audio: 265 frames) */}
      <Sequence from={1420} durationInFrames={280}>
        <Audio src={staticFile('audio/ep2_voiceover/scene6.mp3')} volume={1.0} />
        <Scene6_NinetyMinuteHack />

        {/* Dynamic Caption 6A (0 - 110 | ~3.7s) */}
        <Sequence from={0} durationInFrames={110}>
          <ViralCaptions
            badge="HACK SAINS 💡"
            badgeColor="#10b981"
            text="Solusinya? Terapkan aturan 90 menit:"
            highlightWord="aturan 90 menit"
          />
        </Sequence>

        {/* Dynamic Caption 6B (110 - 280 | ~5.7s) */}
        <Sequence from={110} durationInFrames={170}>
          <ViralCaptions
            badge="TUNGGU 90 MENIT ⏳"
            badgeColor="#059669"
            text="Tunggu 1 sampai 1,5 jam pasca bangun tidur baru seruput kopi pertamamu!"
            highlightWord="seruput kopi pertamamu!"
          />
        </Sequence>
      </Sequence>

      {/* ✨ TRANSITION 6→7 (1694 - 1706) */}
      <Sequence from={1694} durationInFrames={12}>
        <SceneTransition type="flash-cut" durationFrames={12} color="#f59e0b" />
        <Audio src={staticFile('audio/sfx/bell.wav')} volume={0.14} />
      </Sequence>

      {/* 🎬 SCENE 7: OUTRO CTA (1700 - 1880 | 180 frames / 6.00s | Audio: 167 frames) */}
      <Sequence from={1700} durationInFrames={180}>
        <Audio src={staticFile('audio/ep2_voiceover/scene7.mp3')} volume={1.0} />
        <Scene7_OutroCTA />

        {/* Dynamic Caption 7A (0 - 82 | ~2.7s) */}
        <Sequence from={0} durationInFrames={82}>
          <ViralCaptions
            badge="TAG TEMENMU 👥"
            badgeColor="#f59e0b"
            text="Tag temenmu yang kalau ngopi malah molor!"
            highlightWord="malah molor!"
          />
        </Sequence>

        {/* Dynamic Caption 7B (82 - 180 | ~3.3s) */}
        <Sequence from={82} durationInFrames={98}>
          <ViralCaptions
            badge="FOLLOW SEKARANG! 🔔"
            badgeColor="#f59e0b"
            text="Follow Tiba-Tiba Paham biar makin paham!"
            highlightWord="Tiba-Tiba Paham"
          />
        </Sequence>
      </Sequence>

      {/* 🏷️ Top Header Floating Bar (#TibaTibaPaham Brand Watermark) */}
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
            background: 'linear-gradient(90deg, #f59e0b 0%, #ef4444 100%)',
            color: '#ffffff',
            fontWeight: 900,
            fontSize: 24,
            padding: '10px 26px',
            borderRadius: 30,
            letterSpacing: 1.5,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            boxShadow: '0 6px 18px rgba(0,0,0,0.5)',
            border: '2px solid rgba(255,255,255,0.25)',
          }}
        >
          ☕ SAINS KOPI
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
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            boxShadow: '0 6px 18px rgba(0,0,0,0.4)',
          }}
        >
          #TibaTibaPaham
        </div>
      </div>

      {/* 🔴 Progress Bar at Bottom */}
      <ProgressBar />
    </AbsoluteFill>
  );
};