import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { ParticleBackground } from '../../shared/effects/ParticleBackground';
import { MainCharacter } from '../../shared/characters/MainCharacter';
import { BrainMascot } from '../../shared/characters/BrainMascot';
import { Captions } from '../../components/Captions';
import { ProgressBar } from '../../components/ProgressBar';

export const KopiNgantukVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#000000', fontFamily: 'sans-serif' }}>
      {/* SCENE 1: Hook (0s - 10s | 300 frames) */}
      <Sequence from={0} durationInFrames={300}>
        <AbsoluteFill>
          <ParticleBackground theme="amber" />
          <svg viewBox="0 0 1080 1920" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 10 }}>
            {/* Floating 'Zzz' */}
            <text x="680" y="580" fontSize="80" fontWeight="bold" fill="#facc15" opacity="0.6">Zzz...</text>
            <g transform="translate(540, 1040)">
              <MainCharacter mood="sleepy" holdingItem="coffee" scale={1.35} />
            </g>
          </svg>
          <Captions
            badge="MINUM KOPI MALAH NGANTUK?!"
            text="Pernah nggak sih, kamu sengaja ngopi biar melek ngerjain tugas, tapi sejam kemudian malah ngantuk berat?"
          />
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 2: The Science (10s - 24s | 420 frames) */}
      <Sequence from={300} durationInFrames={420}>
        <AbsoluteFill>
          <ParticleBackground theme="purple" />
          <svg viewBox="0 0 1080 1920" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 10 }}>
            <g transform="translate(340, 1050)">
              <MainCharacter mood="confused" scale={1.25} />
            </g>
            <g transform="translate(740, 720) scale(0.95)">
              <BrainMascot mood="thinking" />
            </g>
          </svg>
          <Captions
            badge="FAKTOR ADENOSIN"
            text="Kafein di kopi sebenarnya bukan memberi energi baru, tapi cuma membajak reseptor adenosin (sinyal lelah) di otak kita!"
          />
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 3: The Caffeine Crash (24s - 36s | 360 frames) */}
      <Sequence from={720} durationInFrames={360}>
        <AbsoluteFill>
          <ParticleBackground theme="darkblue" />
          <svg viewBox="0 0 1080 1920" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 10 }}>
            <g transform="translate(540, 1040)">
              <MainCharacter mood="shocked" scale={1.35} />
            </g>
          </svg>
          <Captions
            badge="THE CAFFEINE CRASH!"
            text="Begitu efek kafein habis, tumpukan sinyal lelah yang tertahan tadi langsung menyerbu otakmu secara bersamaan!"
          />
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 4: Hack & Outro (36s - 45s | 270 frames) */}
      <Sequence from={1080} durationInFrames={270}>
        <AbsoluteFill>
          <ParticleBackground theme="emerald" />
          <svg viewBox="0 0 1080 1920" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 10 }}>
            <g transform="translate(540, 1040)">
              <MainCharacter mood="eureka" scale={1.35} />
            </g>
          </svg>
          <Captions
            badge="TRIK: COBA COFFEE NAP!"
            text="Solusinya: Minum kopi lalu langsung tidur siang 15 menit. Bangun-bangun badanmu bakal super segar!"
          />
        </AbsoluteFill>
      </Sequence>

      {/* Top Header */}
      <div
        style={{
          position: 'absolute',
          top: 60,
          left: 50,
          right: 50,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 80,
        }}
      >
        <div
          style={{
            backgroundColor: '#ea580c',
            color: '#ffffff',
            fontWeight: 800,
            fontSize: 24,
            padding: '8px 24px',
            borderRadius: 30,
            letterSpacing: 2,
          }}
        >
          ☕ SAINS KOPI
        </div>
        <div
          style={{
            color: '#f8fafc',
            fontWeight: 700,
            fontSize: 26,
            opacity: 0.8,
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '6px 20px',
            borderRadius: 20,
          }}
        >
          #EdukasiKesehatan
        </div>
      </div>

      <ProgressBar />
    </AbsoluteFill>
  );
};
