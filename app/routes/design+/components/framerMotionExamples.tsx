import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRef } from "react";

// EXAMPLE ONE
export function ExampleOne() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 180, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="w-[25vh] h-[25vh] bg-100-linear2op75 shadowBroadTight rounded-[2vh]"
    />
  );
}
// EXAMPLE TWO
export function ExampleTwo() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.ul
      className="w-85% h-97% grid list-none grid-cols-2 grid-rows-2 gap-[2vh] p-[2vh] border-200-md insetShadowXl"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {[0, 1, 2, 3].map((index) => (
        <motion.li
          key={index}
          className="bg-100-linear1op75 rounded-full shadowBroadTight"
          variants={item}
        />
      ))}
    </motion.ul>
  );
}

// EXAMPLE THREE
export function ExampleThree() {
  return (
    <motion.div
      className="bg-100-radial3op50 h-[23vh] w-[23vh] rounded-[2vh] shadowBroadTight"
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: "100%",
      }}
    />
  );
}

// EXAMPLE FOUR
export function ExampleFour() {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      ref={constraintsRef}
      className="w-95% h-95% flex justify-center items-center overflow-hidden bg-col-990 insetShadowXl rounded-[2vh] border-990-md"
    >
      <motion.div
        className="w-[8vh] h-[8vh] bg-100-linear2op75 border-300-sm shadowBroadTight rounded-[2vh]"
        drag
        dragConstraints={constraintsRef}
      />
    </motion.div>
  );
}

// EXAMPLE FIVE
export function ExampleFive() {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(0, 100, 100, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(0, 255, 255, 1)",
    },
  };

  return (
    <div className="w-95% h-95% flex justify-center items-center overflow-hidden bg-col-990 border-900-md insetShadowXl rounded-[2vh]">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-50% overflow-visible stroke-cyan-700 stroke-[0.2vh]"
      >
        <motion.path
          d="
M70,16
c0,20,-10,30,-20,30
c10,0,20,10,20,30
c0,-20,10,-30,20,-30
c-10,0,-20,-10,-20,-30
z
M30,0
c0,20,-10,30,-20,30
c10,0,20,10,20,30
c0,-20,10,-30,20,-30
c-10,0,-20,-10,-20,-30
z
M43,42
c0,20,-10,30,-20,30
c10,0,20,10,20,30
c0,-20,10,-30,20,-30
c-10,0,-20,-10,-20,-30
z
"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: {
              duration: 2,
              ease: [1, 0, 0.8, 1],
            },
          }}
        />
      </motion.svg>
    </div>
  );
}

// EXAMPLE SIX
export function ExampleSix() {
  return (
    <motion.div
      className="w-[15vh] h-[15vh] bg-500-radial5op50 rounded-[2vh] shadowBroadTight border-970-md"
      animate={{
        background: ["#00cfd6", "#d777fc", "#8d9df2", "#d777fc", "#00cfd6"],
        scale: [0.5, 1.5, 1.25, 1.75, 1.5, 1, 0.5],
        rotate: [0, -90, 180, -90, -180, 0],
        borderRadius: ["0%", "25%", "50%", "25%", "10%", "0%"],
      }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        times: [0, 0.2, 0.6, 0.8, 1],
        repeat: 1,
        repeatDelay: 0.2,
      }}
    />
  );
}

// EXAMPLE SEVEN
export function ExampleSeven() {
  return <motion.div>this</motion.div>;
}

// EXAMPLE EIGHT
export function ExampleEight() {
  return <motion.div>this</motion.div>;
}

// EXAMPLE NINE
export function ExampleNine() {
  return <motion.div>this</motion.div>;
}

// EXAMPLE TEN
export function ExampleTen() {
  return <motion.div>this</motion.div>;
}

// EXAMPLE ELEVEN
export function ExampleEleven() {
  return <motion.div>this</motion.div>;
}

// EXAMPLE TWELVE
export function ExampleTwelve() {
  return <motion.div>this</motion.div>;
}

// EXAMPLE THIRTEEN
export function ExampleThirteen() {
  return <motion.div>this</motion.div>;
}

// EXAMPLE FOURTEEN
export function ExampleFourteen() {
  return <motion.div>this</motion.div>;
}

// EXAMPLE FIFTEEN
export function ExampleFifteen() {
  return <motion.div>this</motion.div>;
}

// EXAMPLESIXTEEN
export function ExampleSixteen() {
  return <motion.div>this</motion.div>;
}
