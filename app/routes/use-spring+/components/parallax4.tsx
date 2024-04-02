import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import Flex from "~/components/buildingBlocks/flex";
import ParallaxAnimateOnScroll from "./animateOnScrollParallax";
import Center from "~/components/buildingBlocks/center";

export default function Parallax4() {
  const parallax = useRef<IParallax>(null!);
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <Flex className="w-screen h-screen bg-radial6op75 relative">
      <Parallax
        ref={parallax}
        pages={6}
        config={{ mass: 1, tension: 300, friction: 60 }}
      >
        <ParallaxLayer offset={0.5} speed={1.4} className="bg-blue-200" />
        <ParallaxAnimateOnScroll
          offset={1}
          speed={-0.02}
          className="bg-red-200"
          animation="inFromLeft"
          inViewMargin="100% 0% 200% 0%"
        >
          <Center className="w-20vh h-[10vh] bg-gray-800 text-col-100">
            I AM ANIMATED
          </Center>
        </ParallaxAnimateOnScroll>
      </Parallax>
    </Flex>
  );
}
