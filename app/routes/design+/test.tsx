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

export default function Test() {
  return (
    <FlexFull className="h-screen overflow-y-auto overflow-x-hidden">
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
        <FramerReanimate title="four" code={``}>
          {" "}
          <ExampleFour />
        </FramerReanimate>
        <FramerReanimate title="five" code={``}>
          {" "}
          <ExampleFive />
        </FramerReanimate>
        <FramerReanimate title="six" code={``}>
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
    </FlexFull>
  );
}
