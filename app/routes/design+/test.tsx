import CenterFull from "~/components/buildingBlocks/centerFull";
import NewestHorizontalParallax from "./various-new/newestHorizontalParallax";
import FlexFull from "~/components/buildingBlocks/flexFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import AnimationExample from "../gsap+/components/animationExample";
import ComponentExample from "../css+/components/componentExample";
import { Reanimate } from "../svg+/components/reanimate";
import {
  ExampleEight,
  ExampleEleven,
  ExampleFifteen,
  ExampleFive,
  ExampleFour,
  ExampleFourteen,
  ExampleNine,
  ExampleOne,
  ExampleSeven,
  ExampleSix,
  ExampleSixteen,
  ExampleTen,
  ExampleThirteen,
  ExampleThree,
  ExampleTwelve,
  ExampleTwo,
} from "./components/framerMotionExamples";
import VStack from "~/components/buildingBlocks/vStack";
import Heading from "~/components/buildingBlocks/headingText";
import { FramerReanimate } from "./components/framerReanimate";
import Wrap from "~/components/buildingBlocks/wrap";
import { InteractiveKeyFrames } from "./components/interactiveKeyframes";
import Text from "~/components/buildingBlocks/text";
import { BulletListItem, HeadingText } from "./components/infoComponents";

export default function Test() {
  return (
    <FlexFull className="h-screen overflow-y-auto overflow-x-hidden">
      <VStackFull>
        <Wrap className="w-full h-fit justify-evenly p-[1.5vh] gap-[1.5vh] ">
          {/* ONE  */}
          <FramerReanimate
            title="animation"
            code={`<motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="w-[15vh] h-[15vh] bg-col-200 shadowBroadTight rounded-[2vh]"
            />`}
          >
            <ExampleOne />
          </FramerReanimate>
          {/* TWO  */}
          <FramerReanimate
            title="variants"
            code={`const container = {
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
        className="w-97% h-97% grid list-none grid-cols-2 grid-rows-2 gap-[2vh] p-[2vh] border-200-md insetShadowXl"
        variants={container}
        initial="hidden"
        animate="visible"
            >
        {[0, 1, 2, 3].map((index) => (
          <motion.li
            key={index}
            className=" bg-col-300 rounded-full shadowBroadTight"
            variants={item}
          />
        ))}
            </motion.ul>`}
          >
            {" "}
            <ExampleTwo />
          </FramerReanimate>
          {/* THREE  */}
          <FramerReanimate
            title="gestures"
            showReanimate={false}
            code={`<motion.div
        className="bg-100-radial3op50 h-[23vh] w-[23vh] rounded-[2vh] shadowBroadTight"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
            />`}
          >
            <ExampleThree />
          </FramerReanimate>
          {/* FOUR  */}
          <FramerReanimate
            title="drag"
            showReanimate={false}
            code={`const constraintsRef = useRef(null);
            <motion.div
        ref={constraintsRef}
        className="w-95% h-95% flex justify-center items-center overflow-hidden bg-col-990 insetShadowXl rounded-[2vh] border-990-md"
            >
        <motion.div
          className="w-[8vh] h-[8vh] bg-100-linear2op75 border-300-sm shadowBroadTight rounded-[2vh]"
          drag
          dragConstraints={constraintsRef}
        />
            </motion.div>`}
          >
            {" "}
            <ExampleFour />
          </FramerReanimate>
          {/* FIVE  */}
          <FramerReanimate
            title="path"
            code={`const icon = {
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
          );`}
          >
            {" "}
            <ExampleFive />
          </FramerReanimate>
          {/* SIX  */}
          <FramerReanimate
            title="keyframes"
            code={`<motion.div
        className="w-[15vh] h-[15vh] bg-500-radial5op50 rounded-[2vh] shadowBroadTight border-970-md"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: 1,
          repeatDelay: 1,
        }}
            />`}
          >
            {" "}
            <ExampleSix />
          </FramerReanimate>
          {/* SEVEN  */}
          <FramerReanimate
            title="motion values"
            showReanimate={false}
            code={`const x = useMotionValue(0);
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
  );`}
          >
            {" "}
            <ExampleSeven />
          </FramerReanimate>
          {/* EIGHT  */}
          <FramerReanimate
            title="layout 1"
            showReanimate={false}
            code={`
    <Flex className={\`\${isOn ? "bg-col-200" : "bg-col-500"} px-[5vh] py-[7vh] insetShadowXl transition-500 border-900-md\`}>
      <div
        className={\`w-[13vh] h-[7vh] bg-500-radial6op75 flex \${
          isOn === true ? "justify-start" : "justify-end"
        } rounded-[5vh] p-[1vh] cursor-pointer shadowBroadTight border-970-md\`}
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
  `}
          >
            {" "}
            <ExampleEight />
          </FramerReanimate>
          {/* NINE  */}
          <FramerReanimate
            title="layout 2"
            showReanimate={false}
            code={`
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <motion.div
        layout
        data-isOpen={isOpen}
        initial={{ borderRadius: 50 }}
        className={\`bg-col-200 w-[10vh] h-[10vh] flex justify-center items-center shadowBroadTight border-900-md \${
          isOpen === true ? "w-80% h-80%" : "w-50% h-50%"
        }\`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          layout
          className="w-[4vh] h-[4vh] bg-col-800 rounded-full shadowBroadTight border-900-md"
        />
      </motion.div>
    );
  `}
          >
            {" "}
            <ExampleNine />
          </FramerReanimate>
          {/* TEN  */}
          <FramerReanimate
            title="layoutId 1"
            code={`interface Item {
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
      <VStackFull className="w-full h-full overflow-hidden">
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
          <ul className={\`flex justify-around bg-col-980\`}>
            {allItems.map((item) => (
              <li
                key={item.id}
                className={\`cursor-pointer w-25% py-[0.5vh] relative flex justify-center items-center font-semibold \${
                  selectedTab.id === item.id ? "text-col-900" : "text-col-100"
                }\`}
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
  `}
          >
            {" "}
            <ExampleTen />
          </FramerReanimate>
          {/* ELEVEN  */}
          <FramerReanimate
            title="layoutId 2"
            code={`interface Item {
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
  const containerVariants = {
    visible: {
      borderRadius: "2vh",
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 30,
      },
    },
  };

  const detailVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      layout
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onClick={onClick}
      className={\`p-[1vh] cursor-pointer w-full flex flex-col shadowBroadTight border-900-md \${
        isSelected ? "bg-col-300 h-45%" : "bg-col-200 h-23%"
      }\`}
    >
      <Text
        className={\`\${
          isSelected ? "font-bold text-[2.3vh]" : "font-semibold text-[2vh]"
        }\`}
      >
        {item.text}
      </Text>
      {isSelected && (
        <CenterFull className="h-full">
          <motion.div
            layoutId={\`expandable-\${item.id}\`}
            variants={detailVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden bg-col-960 text-col-100 p-[1vh] w-full textShadow shadow-shadowBroadTight border-900-md rounded-[2vh] h-fit"
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
}`}
            infoTitle="LayoutId"
            info={
              <VStackFull className="w-full h-fit" align="items-start">
                <HeadingText heading="Purpose of layoutId" />
                <BulletListItem highlighted="Animate Layout Changes:">
                  layoutId is used by Framer Motion to identify and animate
                  layout changes of components across different renders. When
                  two or more components in a React tree have the same layoutId,
                  Framer Motion understands that these components are linked and
                  should animate between them as their layout changes.
                </BulletListItem>{" "}
                <BulletListItem highlighted="Shared Element Transition: ">
                  This is especially useful for shared element transitions where
                  an element moves from one part of the application to another
                  and you want to animate this transition smoothly.
                </BulletListItem>{" "}
                <HeadingText heading="How layoutId is Used in Your Component" />
                <BulletListItem>
                  In the ItemComponent, layoutId is applied to a motion.div
                  inside the component. This motion.div becomes the target for
                  layout animations when the component's state changes (e.g.,
                  when an item is selected).
                </BulletListItem>{" "}
                <BulletListItem>
                  When an item is selected (isSelected is true), the motion.div
                  with the specific layoutId (expandable-{"itemId"}) appears. If
                  the item is deselected, the component with that layoutId will
                  disappear or change its layout.
                </BulletListItem>
                <BulletListItem>
                  Framer Motion automatically calculates the animation needed to
                  transition the motion.div from its initial layout to its final
                  layout (and vice versa) when the item is selected or
                  deselected.
                </BulletListItem>
                <HeadingText heading="Detailed Flow" />
                <BulletListItem highlighted="Initial Render: ">
                  When ItemComponent is first rendered, the motion.div with
                  layoutId (expandable-{"itemId"}) is either rendered in its
                  collapsed state or not rendered at all, depending on whether
                  the item is selected.
                </BulletListItem>
                <BulletListItem highlighted="Selection Change: ">
                  When a user clicks on an item, the onClick handler updates the
                  state in the parent component, which then passes down new
                  props to ItemComponent, triggering a re-render.
                </BulletListItem>
                <BulletListItem highlighted="Animation Trigger: ">
                  Upon re-render, if the state has changed (an item is selected
                  or deselected), Framer Motion finds the elements with matching
                  layoutIds and animates the transition between their initial
                  and final states. In this case, it animates the expansion or
                  collapse of the detailed view inside ItemComponent.
                </BulletListItem>
                <BulletListItem highlighted="Unique layoutId: ">
                  By using (expandable-{"itemId"}) as the layoutId, each item
                  gets a unique identifier, ensuring that Framer Motion
                  correctly associates the layout changes with the specific item
                  that has been selected or deselected.
                </BulletListItem>
                <BulletListItem>
                  By utilizing layoutId in this way, Framer Motion enables the
                  creation of complex animations based on changes in the
                  component layout without manually managing the animation
                  details. The library takes care of interpolating the styles
                  and layout properties needed to transition between the
                  different states smoothly.
                </BulletListItem>
              </VStackFull>
            }
          >
            {" "}
            <ExampleEleven />
          </FramerReanimate>
          <FramerReanimate title="twelve" code={``}>
            {" "}
            <ExampleTwelve />
          </FramerReanimate>
          <FramerReanimate title="thirteen" code={``}>
            {" "}
            <ExampleThirteen />
          </FramerReanimate>
          <FramerReanimate title="fourteen" code={``}>
            {" "}
            <ExampleFourteen />
          </FramerReanimate>
          <FramerReanimate title="fifteen" code={``}>
            {" "}
            <ExampleFifteen />
          </FramerReanimate>
          <FramerReanimate title="sixteen" code={``}>
            {" "}
            <ExampleSixteen />
          </FramerReanimate>
        </Wrap>
        <InteractiveKeyFrames />
      </VStackFull>
    </FlexFull>
  );
}
