import React from 'react';
import { Composition } from 'remotion';
import { IntroTibaTibaPahamVideo } from './videos/IntroTibaTibaPaham/Composition';
import { DoorwayEffectVideo } from './videos/DoorwayEffect/Composition';
import { CoffeeParadoxVideo } from './videos/CoffeeParadox/Composition';
import { HypnicJerkVideo } from './videos/HypnicJerk/Composition';
import { VoiceConfrontationVideo } from './videos/VoiceConfrontation/Composition';
import { ContagiousYawningVideo } from './videos/ContagiousYawning/Composition';
import { Scene1_SleepyCoffee } from './videos/CoffeeParadox/scenes/Scene1_SleepyCoffee';
import { Scene2_CrashDilemma } from './videos/CoffeeParadox/scenes/Scene2_CrashDilemma';
import { Scene3_BrainParkingLot } from './videos/CoffeeParadox/scenes/Scene3_BrainParkingLot';
import { Scene4_AdenosineTraffic } from './videos/CoffeeParadox/scenes/Scene4_AdenosineTraffic';
import { Scene5_CaffeineCrash } from './videos/CoffeeParadox/scenes/Scene5_CaffeineCrash';
import { Scene6_NinetyMinuteHack } from './videos/CoffeeParadox/scenes/Scene6_NinetyMinuteHack';
import { Scene7_OutroCTA } from './videos/CoffeeParadox/scenes/Scene7_OutroCTA';
import {
  PFP_Concept1_Eureka,
  PFP_Concept2_Brain,
  PFP_Concept3_Monogram,
  PFP_Comparison,
} from './branding/ProfilePictures';
import {
  YouTubeBanner,
  Highlight_MulaiSini,
  Highlight_OtakKita,
  Highlight_Relatable,
  Highlight_TanyaSains,
  Highlight_BalikLayar,
  HighlightShowcase,
} from './branding/SocialAssets';

export const Root: React.FC = () => {
  return (
    <>
      {/* VIDEO 0: Intro Channel / Trailer (29.00 seconds / 870 frames @ 30 fps) */}
      <Composition
        id="IntroTibaTibaPaham"
        component={IntroTibaTibaPahamVideo}
        durationInFrames={870}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* VIDEO 1: The Doorway Effect (38 seconds / 1140 frames @ 30 fps) */}
      <Composition
        id="DoorwayEffect"
        component={DoorwayEffectVideo}
        durationInFrames={1140}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* VIDEO 2: Coffee Paradox - Kenapa Minum Kopi Malah Ngantuk (62.67 seconds / 1880 frames @ 30 fps) */}
      <Composition
        id="CoffeeParadox"
        component={CoffeeParadoxVideo}
        durationInFrames={1880}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* VIDEO 3: Hypnic Jerk - Kenapa Pas Mau Tidur Kaki Berasa Jatuh dari Jurang (40.67 seconds / 1220 frames @ 30 fps) */}
      <Composition
        id="HypnicJerk"
        component={HypnicJerkVideo}
        durationInFrames={1220}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* VIDEO 4: Voice Confrontation Effect - Kenapa Suara Rekaman Sendiri Kedengeran Asing & Geli (59.43 seconds / 1783 frames @ 30 fps) */}
      <Composition
        id="VoiceConfrontation"
        component={VoiceConfrontationVideo}
        durationInFrames={1783}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* VIDEO 5: Contagious Yawning - Kenapa Nguap Itu Bisa Nular (35.33 seconds / 1060 frames @ 30 fps) */}
      <Composition
        id="ContagiousYawning"
        component={ContagiousYawningVideo}
        durationInFrames={1060}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* ── EPISODE 2 SCENE PREVIEWS (1080 x 1920) ── */}
      <Composition
        id="Ep2-Scene1-SleepyCoffee"
        component={Scene1_SleepyCoffee}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Ep2-Scene2-CrashDilemma"
        component={Scene2_CrashDilemma}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Ep2-Scene3-BrainParkingLot"
        component={Scene3_BrainParkingLot}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Ep2-Scene4-AdenosineTraffic"
        component={Scene4_AdenosineTraffic}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Ep2-Scene5-CaffeineCrash"
        component={Scene5_CaffeineCrash}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Ep2-Scene6-NinetyMinuteHack"
        component={Scene6_NinetyMinuteHack}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Ep2-Scene7-OutroCTA"
        component={Scene7_OutroCTA}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* ── PROFILE PICTURE (PFP) ASSETS (1080x1080 Square Avatar) ── */}
      <Composition
        id="PFP-Concept1-Eureka"
        component={PFP_Concept1_Eureka}
        durationInFrames={30}
        fps={30}
        width={1080}
        height={1080}
      />

      <Composition
        id="PFP-Concept2-Brain"
        component={PFP_Concept2_Brain}
        durationInFrames={30}
        fps={30}
        width={1080}
        height={1080}
      />

      <Composition
        id="PFP-Concept3-Monogram"
        component={PFP_Concept3_Monogram}
        durationInFrames={30}
        fps={30}
        width={1080}
        height={1080}
      />

      <Composition
        id="PFP-Comparison"
        component={PFP_Comparison}
        durationInFrames={30}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* ── YOUTUBE CHANNEL BANNER (2560x1440 TV / Mobile Safe Zone) ── */}
      <Composition
        id="YouTube-Banner"
        component={YouTubeBanner}
        durationInFrames={30}
        fps={30}
        width={2560}
        height={1440}
      />

      {/* ── INSTAGRAM HIGHLIGHT COVERS (1080x1080 Square Covers) ── */}
      <Composition
        id="Highlight-MulaiSini"
        component={Highlight_MulaiSini}
        durationInFrames={30}
        fps={30}
        width={1080}
        height={1080}
      />

      <Composition
        id="Highlight-OtakKita"
        component={Highlight_OtakKita}
        durationInFrames={30}
        fps={30}
        width={1080}
        height={1080}
      />

      <Composition
        id="Highlight-Relatable"
        component={Highlight_Relatable}
        durationInFrames={30}
        fps={30}
        width={1080}
        height={1080}
      />

      <Composition
        id="Highlight-TanyaSains"
        component={Highlight_TanyaSains}
        durationInFrames={30}
        fps={30}
        width={1080}
        height={1080}
      />

      <Composition
        id="Highlight-BalikLayar"
        component={Highlight_BalikLayar}
        durationInFrames={30}
        fps={30}
        width={1080}
        height={1080}
      />

      <Composition
        id="Highlight-Showcase"
        component={HighlightShowcase}
        durationInFrames={30}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
