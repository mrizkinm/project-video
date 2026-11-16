import React from 'react';
import { Composition } from 'remotion';
import { IntroTibaTibaPahamVideo } from './videos/IntroTibaTibaPaham/Composition';
import { DoorwayEffectVideo } from './videos/DoorwayEffect/Composition';
import { KopiNgantukVideo } from './videos/KopiNgantuk/Composition';

export const Root: React.FC = () => {
  return (
    <>
      {/* VIDEO 0: Intro Channel / Trailer (27.67 seconds / 830 frames @ 30 fps) */}
      <Composition
        id="IntroTibaTibaPaham"
        component={IntroTibaTibaPahamVideo}
        durationInFrames={830}
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

      {/* VIDEO 2: Kenapa Minum Kopi Malah Ngantuk (45 seconds / 1350 frames @ 30 fps) */}
      <Composition
        id="KopiNgantuk"
        component={KopiNgantukVideo}
        durationInFrames={1350}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
