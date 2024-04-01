import { ParallaxLayer } from "@react-spring/parallax";
import Box from "~/components/buildingBlocks/box";
import VStack from "~/components/buildingBlocks/vStack";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CenterFull from "~/components/buildingBlocks/centerFull";

export default function AnimateOnScrollParallax({
  offset,
  bg,
  speed,
  className,
  sticky,
  opacity,
  top,
  right,
  left,
  bottom,
  transform,
  animationClassName,
}: {
  offset?: number;
  bg?: string;
  speed?: number;
  className?: string;
  sticky?: { start: number; end: number };
  opacity?: number;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  emojiSize?: string;
  transform?: string;
  animationClassName?: string;
}) {
  const containerRef = useRef(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
    // offset: ["start start", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"]);
  return (
    <ParallaxLayer
      offset={offset}
      speed={speed}
      sticky={sticky}
      className={`${bg} ${className}`}
      style={{ opacity: opacity }}
    >
      <CenterFull ref={containerRef}>
        <motion.div
          ref={targetRef}
          style={{ rotate }}
          className={`p-[2vh] absolute ${top} ${right} ${left} ${bottom} ${transform}`}
        >
          <Box
            className={`${animationClassName} bg-purple-400 p-[4vh] text-[6vh]`}
          >
            This
          </Box>
        </motion.div>
      </CenterFull>
    </ParallaxLayer>
  );
}
