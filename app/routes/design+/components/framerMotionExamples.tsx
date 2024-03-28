import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useRef, useState } from "react";
import CenterFull from "~/components/buildingBlocks/centerFull";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStack from "~/components/buildingBlocks/hStack";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";
import VStackFull from "~/components/buildingBlocks/vStackFull";

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
        data-ison={isOn}
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
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <VStackFull className="h-full">
      {" "}
      <CenterFull className="h-full">
        <motion.div
          layout
          data-isopen={isExpanded}
          initial={{ borderRadius: 50 }}
          className={`bg-col-200 w-[10vh] h-[10vh] flex justify-center items-center shadowBroadTight border-900-md ${
            isExpanded === true ? "w-[25vh] h-25vh" : "w-[10vh] h-[10vh]"
          }`}
        >
          <motion.div
            layout
            transition={{ duration: 0.9 }}
            className="w-[4vh] h-[4vh] bg-col-800 rounded-full shadowBroadTight border-900-md cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          />
        </motion.div>
      </CenterFull>
    </VStackFull>
  );
}

// EXAMPLE TEN
export function ExampleTen() {
  interface Item {
    id: number;
    icon: string;
    label: string;
  }
  const allItems: Item[] = [
    { id: 0, icon: "💜", label: "Heart" },
    { id: 1, icon: "🦄", label: "Uni" },
    { id: 2, icon: "🔥", label: "Fire" },
    { id: 3, icon: "👽", label: "Alien" },
  ];

  const [selectedTab, setSelectedTab] = useState<Item>(allItems[0]);

  return (
    <VStackFull className="w-full h-full overflow-hidden ">
      <main className="flex-1 flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: -50, x: -50, opacity: 0 }}
            animate={{ y: 0, x: 0, opacity: 1 }}
            exit={{ y: 50, x: 50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-[20vh]"
          >
            {selectedTab ? selectedTab.icon : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
      <nav className="w-full">
        <ul className={`flex justify-around bg-col-980 `}>
          {allItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer w-25% py-[0.5vh] relative flex justify-center items-center font-semibold ${
                selectedTab.id === item.id ? "text-col-900" : "text-col-100"
              }`}
              onClick={() => setSelectedTab(item)}
            >
              {/* Animated background */}
              {selectedTab.id === item.id && (
                <motion.div
                  layoutId="active-background"
                  className="absolute inset-0 bg-col-200"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}

              {/* Tab content */}
              <div className="z-10">
                {item.icon} {item.label}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </VStackFull>
  );
}

// EXAMPLE ELEVEN

interface Item {
  id: number;
  text: string;
}

export function ItemComponent({
  item,
  isSelected,
  onClick,
}: {
  item: Item;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      onClick={onClick}
      initial={{ borderRadius: 10 }}
      className={`p-[1vh] cursor-pointer w-full flex flex-col shadowBroadTight border-900-md ${
        isSelected ? "bg-blue-300 h-45%" : "bg-col-200 h-23%"
      }`}
    >
      {item.text}
      {isSelected && (
        <CenterFull className="h-full">
          <motion.div
            layoutId={`expandable-${item.id}`}
            className="overflow-hidden bg-col-960 text-col-100 p-[1vh] w-full"
            initial={false}
          >
            Detailed view of {item.text}
          </motion.div>
        </CenterFull>
      )}
    </motion.div>
  );
}

export function ExampleEleven() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const items: Item[] = [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ];

  return (
    <VStackFull className="h-full p-[1vh]">
      {items.map((item) => (
        <ItemComponent
          key={item.id}
          item={item}
          isSelected={selectedId === item.id}
          onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
        />
      ))}
    </VStackFull>
  );
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
