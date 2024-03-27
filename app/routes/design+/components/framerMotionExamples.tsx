import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useRef, useState } from "react";
import Flex from "~/components/buildingBlocks/flex";

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
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ffeede 0%, #025373 100%)",
    "linear-gradient(180deg, #F27D72 0%, #45233e 100%)",
    "linear-gradient(180deg, #9C6892 0%, #F2B680 100%)",
  ]);
  const color = useTransform(x, xInput, [
    "rgb(69, 35, 62)",
    "rgb(2, 83, 115)",
    "rgb(156, 104, 146)",
  ]);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);

  return (
    <motion.div className="w-full h-full relative" style={{ background }}>
      <motion.div
        className="bg-100-linear2op25 w-[10vh] h-[10vh] absolute top-1/3 left-1/3 flex justify-center items-center rounded-[2vh] shadowBroadTight border-970-md"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      >
        <svg className="w-80% h-80%" viewBox="0 0 50 50">
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{ translateX: 5, translateY: 5 }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M14,26 L 22,33 L 35,16"
            strokeDasharray="0 1"
            style={{ pathLength: tickPath }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M17,17 L33,33"
            strokeDasharray="0 1"
            style={{ pathLength: crossPathA }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M33,17 L17,33"
            strokeDasharray="0 1"
            style={{ pathLength: crossPathB }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

// EXAMPLE EIGHT
export function ExampleEight() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: "spring",
    stiffness: 800,
    damping: 33,
  };
  return (
    <Flex
      className={`${
        isOn ? "bg-col-200" : "bg-col-500"
      } px-[5vh] py-[7vh] insetShadowXl transition-500 border-900-md`}
    >
      <div
        className={`w-[13vh] h-[7vh] bg-500-radial6op75 flex ${
          isOn === true ? "justify-start" : "justify-end"
        } rounded-[5vh] p-[1vh] cursor-pointer shadowBroadTight border-970-md`}
        data-isOn={isOn}
        onClick={toggleSwitch}
      >
        <motion.div
          className="h-[5vh] bg-100-radial5op50 w-[5vh] rounded-full shadowBroadTight border-970-md"
          layout
          transition={spring}
        />
      </div>
    </Flex>
  );
}

// EXAMPLE NINE
export function ExampleNine() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 50 }}
      className={`bg-col-200 w-[10vh] h-[10vh] flex justify-center items-center shadowBroadTight border-900-md ${
        isOpen === true ? "w-80% h-80%" : "w-50% h-50%"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div
        layout
        transition={{ duration: 0.9 }}
        className="w-[4vh] h-[4vh] bg-col-800 rounded-full shadowBroadTight border-900-md"
      />
    </motion.div>
  );
}

// EXAMPLE TEN
export function ExampleTen() {
  interface Ingredient {
    icon: string;
    label: string;
  }

  function removeItem<T>([...arr]: T[], item: T) {
    const index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
    return arr;
  }

  function closestItem<T>(arr: T[], item: T) {
    const index = arr.indexOf(item);
    if (index === -1) {
      return arr[0];
    } else if (index === arr.length - 1) {
      return arr[arr.length - 2];
    } else {
      return arr[index + 1];
    }
  }

  const allIngredients = [
    { icon: "🍅", label: "Tomato" },
    { icon: "🥬", label: "Lettuce" },
    { icon: "🧀", label: "Cheese" },
    { icon: "🥕", label: "Carrot" },
    { icon: "🍌", label: "Banana" },
    { icon: "🫐", label: "Blueberries" },
    { icon: "🥂", label: "Champers?" },
  ];

  const [tomato, lettuce, cheese] = allIngredients;
  const tabs = [tomato, lettuce, cheese];

  function getNextIngredient(
    ingredients: Ingredient[]
  ): Ingredient | undefined {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
  }
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div className="w-95% h-95% bg-col-980 overflow-hidden shadowBroadTight flex flex-col">
      <nav className="bg-col-880 rounded-b-none border-b-100-sm h-[4vh]">
        <ul className="list-none font-semibold flex w-full">
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div
                  className="absolute left-0 right-0 bg-col-200"
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.icon : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
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
