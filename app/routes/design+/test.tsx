import { useRef } from "react";
import BackgroundGrid from "../use-spring+/components/backgroundGrid";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import ScrollYAnimated from "../use-spring+/components/animatedScrollY";
import Center from "~/components/buildingBlocks/center";

export default function Test() {
  const parallax = useRef<IParallax>(null!);
  const containerRef = useRef(null);

  return (
    <Parallax
      ref={parallax}
      pages={6}
      config={{ mass: 1, tension: 300, friction: 60 }}
    >
      <div
        className="bg-gray-800 text-zinc-50 w-screen h-screen overflow-y-auto"
        ref={containerRef}
      >
        <BackgroundGrid />{" "}
        <ParallaxLayer offset={0.2} speed={2} className="bg-col-550">
          <Center className="w-screen h-screen">This</Center>
        </ParallaxLayer>{" "}
        <ParallaxLayer offset={0.6} speed={2.4} className="bg-col-650" />
        <div className="relative z-10">
          <div className="h-[150vh]" />
          <ScrollYAnimated containerRef={containerRef} />{" "}
          <div className="h-[150vh]" />{" "}
        </div>
        <ParallaxLayer offset={1} speed={1} className="bg-col-550" />
      </div>
    </Parallax>
  );
}
