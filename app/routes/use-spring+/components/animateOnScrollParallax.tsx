import { ParallaxLayer } from "@react-spring/parallax";
import Box from "~/components/buildingBlocks/box";
import VStack from "~/components/buildingBlocks/vStack";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
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
  //   const targetRef = useRef(null);
  //   const { scrollYProgress } = useScroll({
  //     target: targetRef,
  //     offset: ["start end", "end start"],
  //     // offset: ["start start", "end start"],
  //   });

  //   const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"]);
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: "all",
  });

  useEffect(() => {
    console.log(`The element ${isInView ? "is" : "is NOT"} in view`);
  }, [isInView]);
  return (
    <ParallaxLayer
      offset={2}
      speed={speed}
      sticky={sticky}
      className={`${bg} ${className}`}
      style={{ opacity: opacity }}
    >
      <CenterFull ref={containerRef}>
        <div
          ref={ref}
          className="relative mx-auto grid h-32 w-96 place-content-center"
        >
          <h1 className="relative z-0 text-3xl font-black uppercase">
            Show me on scroll
          </h1>
          <motion.div
            animate={{
              y: isInView ? "-100%" : "0%",
            }}
            className="absolute bottom-0 left-0 top-0 z-10 w-1/3 bg-indigo-500"
          />
          <motion.div
            animate={{
              y: isInView ? "100%" : "0%",
            }}
            className="absolute bottom-0 left-1/3 top-0 z-10 w-1/3 bg-indigo-500"
          />
          <motion.div
            animate={{
              y: isInView ? "-100%" : "0%",
            }}
            className="absolute bottom-0 left-2/3 top-0 z-10 w-1/3 bg-indigo-500"
          />
        </div>
        {/* <motion.div
        ref={targetRef}
        style={{ rotate }}
        className={`p-[2vh] absolute ${top} ${right} ${left} ${bottom} ${transform}`}
      >
        <Box
          className={`${animationClassName} bg-purple-400 p-[4vh] text-[6vh]`}
        >
          This
        </Box>
      </motion.div> */}
      </CenterFull>
    </ParallaxLayer>
  );
}
