import { ParallaxLayer } from "@react-spring/parallax";
import Box from "~/components/buildingBlocks/box";
import VStack from "~/components/buildingBlocks/vStack";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { RefObject, useEffect, useRef } from "react";
import CenterFull from "~/components/buildingBlocks/centerFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import FlexFull from "~/components/buildingBlocks/flexFull";

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
  containerRef,
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
  containerRef: RefObject<HTMLDivElement>;
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: "all",

    margin: "300%",
  });

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: targetRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);
  return (
    <>
      <ParallaxLayer
        offset={0}
        className={`${bg} ${className}`}
        style={{ opacity: opacity }}
      >
        <CenterFull className="text-[6vh] text-col-100">One</CenterFull>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.5}
        speed={0.5}
        className={`${bg} ${className}`}
        style={{ opacity: opacity }}
      >
        <CenterFull className="text-[6vh] text-col-100">Two</CenterFull>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        className={`${bg} ${className}`}
        style={{ opacity: opacity }}
      >
        <CenterFull ref={targetRef}>
          <div ref={ref} className="relative">
            <h1 className="relative z-0 text-[7vh] text-white  uppercase">
              animated emojis
            </h1>
            <motion.div
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? "0" : "-100vh",
                x: isInView ? "0" : "100vh",
              }}
              transition={{ duration: 0.5 }}
              className="text-[10vh]"
            >
              😍
            </motion.div>
            <motion.div
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? "10vh" : "0%",
                x: isInView ? "10vw" : "0%",
              }}
              transition={{ duration: 0.75 }}
              className="text-[10vh]"
            >
              👽
            </motion.div>
            <motion.div
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? "-20vh" : "0%",
                x: isInView ? "40vw" : "0%",
              }}
              transition={{ duration: 1 }}
              className="text-[10vh]"
            >
              🦄
            </motion.div>
          </div>
        </CenterFull>
      </ParallaxLayer>
    </>
  );
}
