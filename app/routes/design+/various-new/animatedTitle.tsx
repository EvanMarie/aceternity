import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text?: string;
  className?: string;
  direction?: "top" | "bottom" | "left" | "right";
  letterDelay?: number;
  textClassName?: string;
  damping?: number;
  stiffness?: number;
  overallDelay?: number;
}

export default function AnimatedText({
  text,
  className = "",
  direction = "top",
  letterDelay = 0.09,
  damping = 12,
  stiffness = 100,
  overallDelay = 0.2,
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
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: damping,
        stiffness: stiffness,
      },
    },
    hidden: {
      opacity: 0,
      y: direction === "top" ? -150 : direction === "bottom" ? 150 : 0,
      x: direction === "left" ? -150 : direction === "right" ? 150 : 0,
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
        <motion.span key={index} variants={child} className={textClassName}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
