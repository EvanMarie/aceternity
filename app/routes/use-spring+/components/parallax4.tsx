import { IParallax, Parallax } from "@react-spring/parallax";
import { useReducer, useRef } from "react";
import Flex from "~/components/buildingBlocks/flex";
import ParallaxPositions from "./parallaxPoisitons";
import CustomParallaxLayer from "./customParallaxLayer";
import AnimateOnScrollParallax from "./animateOnScrollParallax";

export default function Parallax4() {
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
        <AnimateOnScrollParallax offset={0} speed={0.2} />
      </Parallax>
    </Flex>
  );
}
