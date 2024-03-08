import FlexFull from "~/components/buildingBlocks/flexFull";
import SVGMultiPaths, { Path } from "../svg+/components/multiPath";
import Flex from "~/components/buildingBlocks/flex";
import Center from "~/components/buildingBlocks/center";
import AnimatedCircle from "./animatedCircle";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import DrawCircle from "./drawCircle";
import Button from "~/components/buildingBlocks/button";
import Box from "~/components/buildingBlocks/box";
import Transition from "~/components/buildingBlocks/transition";
import FloatDown from "../svg+/components/floatDown";

export default function Test() {
  const claudePaths = [
    {
      path: "M10 10 H 190 V 190 H 10 Z",
      delay: 0,
      duration: 2,
      fill: "none",
      stroke: "#ff0000",
      strokeWidth: 2,
      ease: "easeInOut",
      repeat: 1,
    },
    {
      path: "M50 50 L 100 100 L 150 50 L 200 100 L 250 50",
      delay: 0.5,
      duration: 1.5,
      fill: "none",
      stroke: "#00ff00",
      strokeWidth: 4,
      ease: "easeIn",
      repeat: 2,
    },
    {
      path: "M100 100 C 150 50, 200 150, 250 100 S 300 150, 350 100",
      delay: 1,
      duration: 3,
      fill: "none",
      stroke: "#0000ff",
      strokeWidth: 3,
      ease: "easeOut",
      repeat: 0,
    },
    {
      path: "M20 180 Q 100 100, 180 180 T 340 180",
      delay: 0.2,
      duration: 2.5,
      fill: "none",
      stroke: "#ffff00",
      strokeWidth: 5,
      ease: "easeInOut",
      repeat: 3,
    },
    {
      path: "M50 50 L 100 100 L 150 50 L 200 100 L 250 50 Z",
      delay: 0.8,
      duration: 1.8,
      fill: "#ff00ff",
      stroke: "none",
      ease: "easeOut",
      repeat: 1,
    },
    {
      path: "M10 100 Q 50 50, 100 100 T 190 100",
      delay: 1.2,
      duration: 2.2,
      fill: "none",
      stroke: "#00ffff",
      strokeWidth: 6,
      ease: "easeInOut",
      repeat: 2,
    },
    {
      path: "M50 100 A 50 50 0 1 1 150 100 A 50 50 0 1 1 50 100 Z",
      delay: 0.4,
      duration: 3,
      fill: "#800080",
      stroke: "none",
      ease: "easeIn",
      repeat: 0,
    },
    {
      path: "M100 50 L 200 50 L 150 100 Z",
      delay: 0.6,
      duration: 1.6,
      fill: "#008000",
      stroke: "#ffffff",
      strokeWidth: 2,
      ease: "easeOut",
      repeat: 3,
    },
  ];

  const gptPaths = [
    {
      path: "M10 10 C 20 20, 40 20, 50 10",
      fill: "red",
      stroke: "blue",
      strokeWidth: 2,
      duration: 2,
      ease: "easeIn",
      repeat: Infinity,
    },
    {
      path: "M70 10 C 70 20, 120 20, 120 10",
      fill: "green",
      stroke: "orange",
      strokeWidth: 3,
      duration: 1.5,
      delay: 0.5,
      ease: "easeOut",
      repeat: 2,
    },
    {
      path: "M10 40 C 20 60, 40 60, 50 40",
      fill: "transparent",
      stroke: "black",
      strokeWidth: 1,
      duration: 3,
      ease: "easeInOut",
      repeat: 1,
    },
    {
      path: "M70 40 C 70 60, 120 60, 120 40",
      fill: "transparent",
      stroke: "#FF00FF",
      strokeWidth: 4,
      duration: 2.5,
      ease: "linear",
      repeat: 0,
    },
    {
      path: "M10 70 Q 25 95, 50 70 T 90 70",
      fill: "yellow",
      stroke: "red",
      strokeWidth: 5,
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
    },
  ];

  const paths = [
    "m503.25624,109.244c118.32979,0 214.32568,89.20398 214.32568,197.8227c0,108.61877 -95.9959,196.73646 -214.32568,196.73646c-118.32984,0 -214.32574,88.20264 -214.32574,196.82133c0,108.61874 95.9959,196.73646 214.32574,196.73646c236.65957,0 428.74377,-176.32039 428.74377,-393.55782c0,-217.23746 -192.0842,-393.55774 -428.74377,-393.55774l0,-1.00139z",
    "m503.25624,245.56005c-36.99709,0 -67.00571,27.54577 -67.00571,61.50664c0,33.96092 30.00853,61.50664 67.00571,61.50664c36.99715,0 67.00562,-27.54577 67.00562,-61.50664c0,-33.96087 -30.00848,-61.50664 -67.00562,-61.50664z",
    "m503.25624,639.11787c36.978,0 67.00562,27.56327 67.00562,61.50664c0,33.94329 -30.0276,61.5067 -67.00562,61.5067c-36.97805,0 -67.00571,-27.56338 -67.00571,-61.5067c0,-33.94329 30.02766,-61.50664 67.00571,-61.50664z",
    "m933.38358,503.0525c0,217.07604 -193.70789,394.05237 -430.19179,394.05237c-236.48378,0 -437.19179,-175.97491 -437.19179,-393.05095c0,-217.07612 197.708,-395.05392 434.19179,-395.05392c236.4839,0 433.19179,176.97639 433.19179,394.0525z",
  ];

  const yinYangPaths: Path = [
    //The outer circle path.
    {
      path: "m503.25624,109.244c118.32979,0 214.32568,89.20398 214.32568,197.8227c0,108.61877 -95.9959,196.73646 -214.32568,196.73646c-118.32984,0 -214.32574,88.20264 -214.32574,196.82133c0,108.61874 95.9959,196.73646 214.32574,196.73646c236.65957,0 428.74377,-176.32039 428.74377,-393.55782c0,-217.23746 -192.0842,-393.55774 -428.74377,-393.55774l0,-1.00139z",
      stroke: "red",
      strokeWidth: "0.5vh",
      delay: 0,
      duration: 1,
      fill: "white",
      fillDelay: 0.1,
      fillDuration: 0.8,
    },
    // The small circle at the top.
    {
      path: "m503.25624,245.56005c-36.99709,0 -67.00571,27.54577 -67.00571,61.50664c0,33.96092 30.00853,61.50664 67.00571,61.50664c36.99715,0 67.00562,-27.54577 67.00562,-61.50664c0,-33.96087 -30.00848,-61.50664 -67.00562,-61.50664z",
      stroke: "white",
      strokeWidth: "0.5vh",
      delay: 0.5,
      duration: 1,
    },
    // The small circle at the bottom.
    {
      path: "m503.25624,639.11787c36.978,0 67.00562,27.56327 67.00562,61.50664c0,33.94329 -30.0276,61.5067 -67.00562,61.5067c-36.97805,0 -67.00571,-27.56338 -67.00571,-61.5067c0,-33.94329 30.02766,-61.50664 67.00571,-61.50664z",
      stroke: "black",
      strokeWidth: "0.5vh",
      delay: 0.5,
      duration: 1,
    },
    // The outer ring path.
    {
      path: "m933.38358,503.0525c0,217.07604 -193.70789,394.05237 -430.19179,394.05237c-236.48378,0 -437.19179,-175.97491 -437.19179,-393.05095c0,-217.07612 197.708,-395.05392 434.19179,-395.05392c236.4839,0 433.19179,176.97639 433.19179,394.0525z",
      stroke: "yellow",
      fill: "black",
      strokeWidth: "0.5vh",
      delay: 1,
      duration: 1,
    },
  ];

  function ExampleContainer({
    children,
    width = "w-[40vh]",
    height = "40vh]",
  }: {
    children: React.ReactNode;
    width?: string;
    height?: string;
  }) {
    return (
      <Flex className="shadowBroadNormal">
        <Center
          className={`${width} ${height} bg-100-radial6op75 insetShadowXL relative border-970-md`}
        >
          {children}
        </Center>
      </Flex>
    );
  }

  return (
    <FlexFull className="h-full py-[2vh] justify-center overflow-y-auto bg-100-diagonal5op50 ">
      <VStackFull className="h-fit">
        <ExampleContainer width="w-[70vh]" height="h-[70vh]">
          <SVGMultiPaths paths={yinYangPaths} viewBox="0 0 1000 1000" />
        </ExampleContainer>
        <FloatDown />

        <ExampleContainer>
          <AnimatedCircle />
        </ExampleContainer>
        <ExampleContainer>
          <Center className="w-full h-full absolute top-0 right-0">
            <DrawCircle />
          </Center>

          <Flex className="absolute top-50% left-50% animate-scaleFadeIn p-[2vh] bg-100-linear2op50 shadowBroadNormal border-970-sm">
            SOME CIRCLE!
          </Flex>
        </ExampleContainer>
        <ExampleContainer>
          <SVGMultiPaths paths={gptPaths} viewBox="0 0 1000 1000" />
        </ExampleContainer>
      </VStackFull>
    </FlexFull>
  );
}
