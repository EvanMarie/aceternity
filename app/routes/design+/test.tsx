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

export default function Test() {
  return (
    <FlexFull className="h-screen overflow-y-auto overflow-x-hidden">
      <VStackFull>
        <Wrap className="w-full h-fit justify-evenly p-[1.5vh] gap-[1.5vh] ">
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
          <FramerReanimate
            title="gestures"
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
          <FramerReanimate
            title="drag"
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
          <FramerReanimate title="seven" code={``}>
            {" "}
            <ExampleSeven />
          </FramerReanimate>
          <FramerReanimate title="eight" code={``}>
            {" "}
            <ExampleEight />
          </FramerReanimate>
          <FramerReanimate title="nine" code={``}>
            {" "}
            <ExampleNine />
          </FramerReanimate>
          <FramerReanimate title="ten" code={``}>
            {" "}
            <ExampleTen />
          </FramerReanimate>
          <FramerReanimate title="eleven" code={``}>
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
