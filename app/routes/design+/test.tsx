import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import CenterFull from "~/components/buildingBlocks/centerFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Box from "~/components/buildingBlocks/box";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Test() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);
  const parallax = useRef<IParallax>(null!);
  return (
    <FlexFull className="h-fit flex-shrink-0">
      <Parallax
        ref={parallax}
        pages={6}
        config={{ mass: 1, tension: 300, friction: 60 }}
      >
        <CenterFull
          className="overflow-y-scroll h-screen"
          ref={scrollContainerRef}
        >
          <ParallaxLayer offset={0} speed={1.4}>
            <VStackFull className="h-[200vh]">
              <FlexFull className="bg-red-200 h-[200vh] flex-shrink-0">
                Scroll Down
              </FlexFull>
              <CenterFull className="h-screen bg-purple-200 flex-shrink-0">
                <motion.div
                  style={{ rotate }}
                  className="h-[20vh] w-[20vh] bg-indigo-500"
                />
              </CenterFull>
            </VStackFull>
          </ParallaxLayer>
        </CenterFull>
      </Parallax>
    </FlexFull>
  );
}
