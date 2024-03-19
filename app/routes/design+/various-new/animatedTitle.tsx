import React from "react";
import { distance, motion } from "framer-motion";

export type AnimationType =
  | "inFromTop"
  | "inFromBottom"
  | "inFromLeft"
  | "inFromRight"
  | "fadeIn"
  | "custom";

interface AnimatedTextProps {
  text?: string;
  className?: string;
  animationType?: AnimationType;
  animationMotion?: "spring" | "tween";
  letterDelay?: number;
  textClassName?: string;
  damping?: number;
  stiffness?: number;
  overallDelay?: number;
  overallDuration?: number;
  letterDuration?: number;
  yDistance?: number;
  xDistance?: number;
  fadeLetterDuration?: number;
  distanceAsVH?: boolean;
}

export default function AnimatedText({
  text,
  className = "",
  animationType = "inFromTop",
  animationMotion = "spring",
  letterDelay = 0.09,
  damping = 12,
  stiffness = 100,
  overallDelay = 0.2,
  overallDuration,
  letterDuration,
  yDistance = 150,
  xDistance = 150,
  fadeLetterDuration = 0.5,
  distanceAsVH = false,
  textClassName = "text-[6vh] font-bold text-col-200 textShadow text-stroke-10-500",
}: AnimatedTextProps) {
  const letters = text ? Array.from(text) : [];
  const xStringDistance = distanceAsVH ? String(xDistance) + "vh" : undefined;
  const yStringDistance = distanceAsVH ? String(yDistance) + "vh" : undefined;

  const useXDistance = distanceAsVH ? xStringDistance : xDistance;
  const useNegXDistance = distanceAsVH ? "-" + xStringDistance : -xDistance;
  const useYDistance = distanceAsVH ? yStringDistance : yDistance;
  const useNegYDistance = distanceAsVH ? "-" + yStringDistance : -yDistance;

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: letterDelay,
        delayChildren: overallDelay * i,
        duration: overallDuration,
      },
    }),
  };

  const fadeLetterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: fadeLetterDuration },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: animationMotion,
        duration: letterDuration,
        damping: damping,
        stiffness: stiffness,
      },
    },
    hidden: {
      opacity: 0,
      y:
        animationType === "custom"
          ? useYDistance
          : animationType === "inFromTop"
          ? useNegYDistance
          : animationType === "inFromBottom"
          ? useYDistance
          : 0,
      x:
        animationType === "custom"
          ? useXDistance
          : animationType === "inFromLeft"
          ? useNegXDistance
          : animationType === "inFromRight"
          ? useXDistance
          : 0,
    },
  };

  return (
    <motion.div
      className={`flex justify-center items-center ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={animationType === "fadeIn" ? fadeLetterVariants : child}
          className={textClassName}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
