import React from 'react';
import { Composition } from 'remotion';
import { DoorwayEffectVideo } from './videos/DoorwayEffect/Composition';
import { KopiNgantukVideo } from './videos/KopiNgantuk/Composition';

export const Root: React.FC = () => {
  return (
    <>
      {/* VIDEO 1: The Doorway Effect (32 seconds / 960 frames @ 30 fps) */}
      <Composition
        id="DoorwayEffect"
        component={DoorwayEffectVideo}
        durationInFrames={960}
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
