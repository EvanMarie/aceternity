import React, { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Flex from "~/components/buildingBlocks/flex";
import Box from "~/components/buildingBlocks/box";
import CenterFull from "~/components/buildingBlocks/centerFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import VStack from "~/components/buildingBlocks/vStack";
import Text from "~/components/buildingBlocks/text";
import CustomParallaxLayer from "./customParallaxLayer";
import { ParallaxEmoji } from "./parallaxEmoji";
import FlexFull from "~/components/buildingBlocks/flexFull";
import ParallaxPositions from "./parallaxPoisitons";
import { ParallaxPolygon } from "./parallaxPolygon";

const animations = [
  "rotate 30s linear infinite",
  "pulse 2s ease-in-out infinite",
  "bounce 1s ease infinite",
  "fade 3s ease-in-out infinite",
  "slide 5s linear infinite",
  "flipH 2s linear infinite",
  "flipV 2s linear infinite",
  "swing 1s ease-in-out infinite",
  "zoom 10s linear infinite",
  "wobble 1s ease-in-out infinite",
  "jello 2s ease-in-out infinite",
  "shake 0.5s linear infinite",
  "tada 2s linear infinite",
  "flash 1s linear infinite",
  "blink 2s steps(2, start) infinite",
  "expand 4s ease-in-out infinite",
  "compress 4s ease-in-out infinite",
  "rise 6s ease-in-out infinite",
  "fall 6s ease-in-out infinite",
  "rotateFade 8s linear infinite",
];

function getRandomAnimation(duration: number) {
  const randomIndex = Math.floor(Math.random() * animations.length);
  const animation = animations[randomIndex];

  // Replace the duration in the animation string with the passed duration
  const modifiedAnimation = animation.replace(/\d+s/, `${duration}s`);

  return modifiedAnimation;
}

export default function Parallax4() {
  const parallax = useRef<IParallax>(null!);

  return (
    <Flex className="w-screen h-screen bg-radial6op75 relative">
      <Parallax
        ref={parallax}
        pages={6}
        config={{ mass: 1, tension: 300, friction: 60 }}
      >
        <ParallaxPolygon
          top="top-[5vh]"
          left="left-[10vh]"
          animation={getRandomAnimation(5)}
        />
        <ParallaxPolygon
          top="top-[7vh]"
          left="right-[30vh]"
          radius="15vh"
          animation={getRandomAnimation(5)}
        />
        <ParallaxPositions numPages={6} />
        <CustomParallaxLayer offset={0} speed={0.2} layerNum="One" />
        <ParallaxEmoji
          offset={0}
          speed={1}
          emoji="dragon"
          top="top-[20vh]"
          left="left-[20vh]"
        />
        <ParallaxEmoji
          sticky={{ start: 0.2, end: 1.8 }}
          emoji="butterfly"
          top="top-[10vh]"
          left="right-[10vh]"
          transform="-rotate-45"
        />
        <CustomParallaxLayer offset={1} speed={0.2} layerNum="Two" />
        <ParallaxEmoji
          sticky={{ start: 1, end: 3.5 }}
          emoji="whale"
          top="top-[10vh]"
          left="left-[15vh]"
          transform="-rotate-30"
        />
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
