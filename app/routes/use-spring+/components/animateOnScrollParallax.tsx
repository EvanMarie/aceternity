import { ParallaxLayer } from "@react-spring/parallax";
import Box from "~/components/buildingBlocks/box";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CenterFull from "~/components/buildingBlocks/centerFull";

export default function ParallaxAnimateOnScroll({
  animation = "inFromTopRight",
  yStart,
  xStart,
  offset,
  speed = 1,
  duration = 2,
  top,
  bottom,
  right,
  left,
  bg,
  className,
  ease = "easeInOut",
  transitionType = "spring",
  damping = 30,
  mass = 1,
  stiffness = 50,
  opacity,
  startOpacity = 0,
  layerOpacity,
  runOnce = false,
  inViewMargin = "0%",
  children,
}: {
  animation?:
    | "inFromTopRight"
    | "inFromTopLeft"
    | "inFromBottomRight"
    | "inFromBottomLeft"
    | "inFromRight"
    | "inFromLeft"
    | "inFromTop"
    | "inFromBottom";
  offset?: number;
  yStart?: string;
  xStart?: string;
  bg?: string;
  duration?: number;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  speed?: number;
  className?: string;
  ease?: string;
  transitionType?: string;
  damping?: number;
  mass?: number;
  stiffness?: number;
  opacity?: number;
  startOpacity?: number;
  layerOpacity?: number;
  transform?: string;
  animationClassName?: string;
  runOnce?: boolean;
  inViewMargin?: string;
  children?: React.ReactNode;
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: "all",
    once: runOnce,
    margin: inViewMargin,
  });

  const targetRef = useRef(null);

  const animations = {
    inFromTopRight: {
      opacity: isInView ? opacity : startOpacity,
      y: isInView ? "0" : "-100vh",
      x: isInView ? "0" : "-100vh",
    },
    inFromTopLeft: {
      opacity: isInView ? opacity : startOpacity,
      y: isInView ? "0" : "-100vh",
      x: isInView ? "0" : "-100vh",
    },
    inFromBottomRight: {
      opacity: isInView ? opacity : startOpacity,
      y: isInView ? "0" : "100vh",
      x: isInView ? "0" : "-100vh",
    },
    inFromBottomLeft: {
      opacity: isInView ? opacity : startOpacity,
      y: isInView ? "0" : "100vh",
      x: isInView ? "0" : "100vh",
    },
    inFromRight: {
      opacity: isInView ? opacity : startOpacity,
      y: isInView ? "0" : "0",
      x: isInView ? "0" : "-100vh",
    },
    inFromLeft: {
      opacity: isInView ? opacity : startOpacity,
      y: isInView ? "0" : "0",
      x: isInView ? "0" : "100vh",
    },
    inFromTop: {
      opacity: isInView ? opacity : startOpacity,
      y: isInView ? "0" : "-100vh",
      x: isInView ? "0" : "0",
    },
    inFromBottom: {
      opacity: isInView ? opacity : startOpacity,
      y: isInView ? "0" : "100vh",
      x: isInView ? "0" : "0",
    },
  };

  return (
    <>
      <ParallaxLayer
        offset={offset}
        speed={speed}
        className={`${bg} ${className}`}
        style={{ opacity: layerOpacity }}
      >
        <CenterFull ref={targetRef}>
          <Box className={`absolute ${top} ${bottom} ${left} ${right}`}>
            <Box ref={ref} className="relative">
              <motion.div
                animate={
                  animation
                    ? animations[animation]
                    : {
                        opacity: isInView ? opacity : 0,
                        y: isInView ? "0" : yStart,
                        x: isInView ? "0" : xStart,
                      }
                }
                transition={{
                  duration: duration,
                  ease: ease,
                  type: transitionType,
                  damping: damping,
                  mass: mass,
                  stiffness: stiffness,
                }}
                className="text-[10vh]"
              >
                {children}
              </motion.div>
            </Box>
          </Box>
        </CenterFull>
      </ParallaxLayer>
    </>
  );
}
