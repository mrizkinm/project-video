import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { Scene1 } from './components/Scene1';
import { Scene2 } from './components/Scene2';
import { Scene3 } from './components/Scene3';
import { Scene4 } from './components/Scene4';
import { Scene5 } from './components/Scene5';
import { Captions } from './components/Captions';
import { ProgressBar } from './components/ProgressBar';

export const DoorwayEffect: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#000000', fontFamily: 'sans-serif' }}>
      {/* SCENE 1: Hook (0s - 8s | 240 frames) */}
      <Sequence from={0} durationInFrames={240}>
        <Scene1 />
        <Captions
          badge="KENAPA MENDADAK BLANK?!"
          text="Pernah nggak sih, kamu niat ngambil sesuatu di kamar, tapi pas buka pintu... mendadak amnesia mau ngapain?"
        />
      </Sequence>

      {/* SCENE 2: Reassurance (8s - 16s | 240 frames) */}
      <Sequence from={240} durationInFrames={240}>
        <Scene2 />
        <Captions
          badge="TENANG, KAMU BUKAN PIKUN!"
          text="Tenang, kamu nggak sendirian dan kamu nggak lagi pikun. Ternyata ini ada penjelasan ilmiahnya!"
        />
      </Sequence>

      {/* SCENE 3: Sains (16s - 30s | 420 frames) */}
      <Sequence from={480} durationInFrames={420}>
        <Scene3 />
        <Captions
          badge="THE DOORWAY EFFECT"
          text="Namanya The Doorway Effect! Otak kita menganggap pintu sebagai batas episode baru, jadi memori ruangan lama langsung diarsipkan."
        />
      </Sequence>

      {/* SCENE 4: Life Hack (30s - 40s | 300 frames) */}
      <Sequence from={900} durationInFrames={300}>
        <Scene4 />
        <Captions
          badge="TRIK: BALIK KE POSISI AWAL!"
          text="Trik tercepatnya: coba jalan mundur atau balik lagi ke posisi awal tadi! Otak bakal otomatis me-reload ingatanmu."
        />
      </Sequence>

      {/* SCENE 5: Outro & Call to Action (40s - 48s | 240 frames) */}
      <Sequence from={1200} durationInFrames={240}>
        <Scene5 />
        <Captions
          badge="TAG TEMEN KAMU YANG SERING GINI!"
          text="Siapa temanmu yang paling sering amnesia mendadak kayak gini? Coba share video ini ke mereka ya!"
        />
      </Sequence>

      {/* TikTok Top Badge & Info */}
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
            backgroundColor: '#ef4444',
            color: '#ffffff',
            fontWeight: 800,
            fontSize: 24,
            padding: '8px 24px',
            borderRadius: 30,
            letterSpacing: 2,
          }}
        >
          ● EDUKASI TIKTOK
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
          #FaktaUnik
        </div>
      </div>

      {/* Progress Bar at Bottom */}
      <ProgressBar />
    </AbsoluteFill>
  );
};
