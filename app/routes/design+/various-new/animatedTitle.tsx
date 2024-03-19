import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text?: string;
  className?: string;
  direction?: "top" | "bottom" | "left" | "right" | "fadeIn" | "custom";
  letterDelay?: number;
  textClassName?: string;
  damping?: number;
  stiffness?: number;
  overallDelay?: number;
  overallDuration?: number;
  letterDuration?: number;
  yDistance?: number | string;
  xDistance?: number | string;
  fadeLetterDuration?: number;
  distanceAsString?: boolean;
}

export default function AnimatedText({
  text,
  className = "",
  direction = "top",
  letterDelay = 0.09,
  damping = 12,
  stiffness = 100,
  overallDelay = 0.2,
  overallDuration,
  letterDuration,
  yDistance = 150,
  xDistance = 150,
  fadeLetterDuration = 0.5,
  distanceAsString = false,
  textClassName = "text-[6vh] font-bold text-col-200 textShadow text-stroke-10-500",
}: AnimatedTextProps) {
  const letters = text ? Array.from(text) : [];

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
        type: letterDuration ? "tween" : "spring",
        duration: letterDuration,
        damping: damping,
        stiffness: stiffness,
      },
    },
    hidden: {
      opacity: 0,
      y:
        direction === "custom" || distanceAsString
          ? yDistance
          : direction === "top"
          ? -yDistance
          : direction === "bottom"
          ? yDistance
          : 0,
      x:
        direction === "custom" || distanceAsString
          ? xDistance
          : direction === "left"
          ? -xDistance
          : direction === "right"
          ? xDistance
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
          variants={direction === "fadeIn" ? fadeLetterVariants : child}
          className={textClassName}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
