import React from "react";
import { Variants, motion } from "framer-motion";
import Center from "~/components/buildingBlocks/center";

export default function Sunrise({
  width = "w-[50vh]",
  height = "h-[80vh]",
}: {
  width?: string;
  height?: string;
}) {
  const skyVariants = {
    initial: { background: "linear-gradient(to bottom, #000000, #000000)" },
    animate: {
      background: [
        "linear-gradient(to bottom, #00FFFF, #FDB813)",
        "linear-gradient(to bottom, #87CEFA, #FFA500)",
        "linear-gradient(to bottom, #00FFFF, #FDB813)",
      ],
      transition: { duration: 10, repeat: Infinity, repeatType: "reverse" },
    },
  };

  const groundVariants = {
    initial: { background: "linear-gradient(135deg, #228B22, #006400)" },
    animate: {
      background: [
        "linear-gradient(135deg, #228B22, #04b34f)",
        "linear-gradient(135deg, #32CD32, #008000)",
        "linear-gradient(135deg, #7CFC00, #04b34f)",
      ],
      transition: { duration: 10, repeat: Infinity, repeatType: "reverse" },
    },
  };

  const sunVariants = {
    initial: { y: "100vh", scale: 0.8 },
    animate: {
      y: "-20vh",
      scale: 1.2,
      background: [
        "radial-gradient(circle at 50% 50%, #FFD700 0%, #FF8C00 100%)",
        "radial-gradient(circle at 50% 50%, #FFFF00 0%, #FFA500 100%)",
        "radial-gradient(circle at 50% 50%, #F0E68C 0%, #FF4500 100%)",
      ],

      transition: {
        y: { duration: 10, ease: "easeOut" },
        scale: { duration: 2, ease: "easeOut" },
        background: { duration: 10, repeat: Infinity, repeatType: "reverse" },
      },
    },
  };

  const cloudVariants = {
    initial: { x: "-100%", y: "30%" },
    animate: { x: "500%" },
  };

  return (
    <Center className={`${width} ${height}`}>
      <motion.div
        className="relative w-full h-full overflow-hidden"
        variants={skyVariants as Variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 10 }}
      >
        <motion.div
          className="absolute bottom-0 w-full h-[13%] overflow-hidden z-10"
          variants={groundVariants as Variants}
          initial="initial"
          animate="animate"
          transition={{ duration: 10 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full"
          variants={sunVariants as Variants}
          initial="initial"
          animate="animate"
          transition={{ duration: 6, delay: 0 }}
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #FFD700 0%, #FF8C00 100%)",
          }}
        />
        <motion.div
          className="absolute top-[25%] w-48 h-16 bg-white rounded-full before:content-[''] before:absolute before:-top-7 before:left-7 before:w-20 before:h-20 before:bg-white before:rounded-full after:content-[''] after:absolute after:-top-12 after:right-7 after:w-28 after:h-28 after:bg-white after:rounded-full"
          variants={cloudVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 20,
            delay: 1,
            repeatType: "loop",
            repeatDelay: 2,
          }}
        />
        <motion.div
          className="absolute top-[35%] w-48 h-16 bg-white rounded-full before:content-[''] before:absolute before:-top-7 before:left-7 before:w-20 before:h-20 before:bg-white before:rounded-full after:content-[''] after:absolute after:-top-12 after:right-7 after:w-28 after:h-28 after:bg-white after:rounded-full"
          variants={cloudVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 20,
            delay: 3,
            repeatType: "loop",
            repeatDelay: 1,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </Center>
  );
}
