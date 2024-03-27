import { motion } from "framer-motion";

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
  return <motion.div>this</motion.div>;
}

// EXAMPLE FIVE
export function ExampleFive() {
  return <motion.div>this</motion.div>;
}

// EXAMPLE SIX
export function ExampleSix() {
  return <motion.div>this</motion.div>;
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
