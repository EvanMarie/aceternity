import { Parallax, IParallax } from "@react-spring/parallax";
import Flex from "~/components/buildingBlocks/flex";
import CustomParallaxLayer from "./customParallaxLayer";
import { ParallaxEmoji } from "./parallaxEmoji";
import ParallaxPositions from "./parallaxPoisitons";
import { ParallaxPolygon } from "./parallaxPolygon";
import { useRef } from "react";

export default function ParallaxExp() {
  const parallax = useRef<IParallax>(null!);

  return (
    <Flex className="w-screen h-screen bg-radial6op75 relative">
      <Parallax
        ref={parallax}
        pages={6}
        config={{ mass: 1, tension: 300, friction: 60 }}
      >
        {/* POSITION MARKERS  */}
        <ParallaxPositions numPages={6} />

        {/* BIG OCTAGON  */}
        <ParallaxPolygon offset={1} top="top-[5vh]" left="left-[10vh]" />

        {/* LITTLE OCTAGON  */}
        <ParallaxPolygon
          top="top-[7vh]"
          offset={2}
          left="right-[30vh]"
          radius="15vh"
          animationClassName="animate-slideInRight"
        />

        {/* LAYER ONE  */}
        <CustomParallaxLayer offset={0} speed={0.2} layerNum="One" />

        {/* LITTLE OCTAGON  */}
        <ParallaxPolygon
          sticky={{ start: 0, end: 0.7 }}
          bottom="bottom-[15vh]"
          left="left-[23vh]"
          radius="20vh"
          animationClassName="animate-slideInRight"
        />

        {/* DRAGON 
        <ParallaxEmoji
          sticky={{ start: 0, end: 1.2 }}
          emoji="dragon"
          top="top-[15vh]"
          left="left-[23vh]"
          animationClassName="animate-slideInLeft"
        /> */}

        {/* WHALE  */}
        <ParallaxEmoji
          sticky={{ start: 1.2, end: 3.5 }}
          emoji="whale"
          top="top-[5vh]"
          left="left-[23vh]"
          transform="-rotate-30"
        />

        {/* BUTTERFLY  */}
        <ParallaxEmoji
          sticky={{ start: 0.2, end: 1.8 }}
          emoji="butterfly"
          top="top-[10vh]"
          left="right-[10vh]"
          transform="-rotate-45"
          animationClassName="animate-slideInRight"
        />

        {/* LAYER TWO  */}
        <CustomParallaxLayer offset={1} speed={0.2} layerNum="Two" />

        {/* LAYER THREE  */}
        <CustomParallaxLayer
          offset={2}
          speed={1}
          layerNum="Three"
          opacity={0.9}
        />
      </Parallax>
    </Flex>
  );
}
