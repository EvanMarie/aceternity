import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text?: string;
  className?: string;
  direction?: "top" | "bottom" | "left" | "right";
  delay?: number;
  textClassName?: string;
}

export default function AnimatedText({
  text,
  className = "",
  direction = "top",
  delay = 0.1,
  textClassName = "text-[6vh] font-bold text-col-100 textShadow text-stroke-10-900",
}: AnimatedTextProps) {
  const letters = text ? Array.from(text) : [];

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: delay, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
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
