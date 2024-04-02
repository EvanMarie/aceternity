import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import Flex from "~/components/buildingBlocks/flex";
import ParallaxAnimateOnScroll from "./animateOnScrollParallax";
import Center from "~/components/buildingBlocks/center";
import Box from "~/components/buildingBlocks/box";

export default function AnimatedParallaxExperiments() {
  const parallax = useRef<IParallax>(null!);
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <Flex className="w-screen h-screen bg-radial6op75 relative">
      <Parallax
        ref={parallax}
        pages={6}
        config={{ mass: 1, tension: 300, friction: 60 }}
      >
        <ParallaxAnimateOnScroll
          offset={0}
          speed={1}
          animation="fadeIn"
          inViewMargin="100%"
          duration={0.5}
        >
          <Center className="h-[60vh] w-[80vw] bg-gray-800 text-col-100">
            I AM ANIMATED
          </Center>
        </ParallaxAnimateOnScroll>
        <ParallaxLayer offset={0.5} speed={0.6}>
          <Box className="absolute top-[2vh] left-[2vh] text-[12vh]">♥️</Box>
        </ParallaxLayer>
        <ParallaxAnimateOnScroll
          offset={1}
          speed={1.4}
          animation="fadeIn"
          // inViewMargin="100% 0% 200% 0%"
          duration={0.5}
        >
          <Center className="h-[60vh] w-[80vw] bg-gray-800 text-col-100">
            I AM ANIMATED
          </Center>
        </ParallaxAnimateOnScroll>
        <ParallaxAnimateOnScroll
          offset={2}
          speed={-0.02}
          animation="fadeIn"
          // inViewMargin="100% 0% 200% 0%"
          duration={0.5}
        >
          <Center className="h-[60vh] w-[80vw] bg-gray-800 text-col-100">
            I AM ANIMATED
          </Center>
        </ParallaxAnimateOnScroll>
        <ParallaxAnimateOnScroll
          offset={3}
          speed={0.5}
          animation="fadeIn"
          // inViewMargin="100% 0% 200% 0%"
          duration={0.5}
        >
          <Center className="h-[60vh] w-[80vw] bg-gray-800 text-col-100">
            I AM ANIMATED
          </Center>
        </ParallaxAnimateOnScroll>
      </Parallax>
    </Flex>
  );
}
