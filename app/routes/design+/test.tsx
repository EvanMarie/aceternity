import FlexFull from "~/components/buildingBlocks/flexFull";
import SVGMultiPaths from "../svg+/components/multiPath";
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

  const paths = [
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

  function ExampleContainer({ children }: { children: React.ReactNode }) {
    return (
      <Flex className="shadowBroadNormal">
        <Center className="w-[40vh] h-[40vh] bg-100-radial6op75 insetShadowXL relative border-970-md">
          {children}
        </Center>
      </Flex>
    );
  }

  return (
    <FlexFull className="h-full justify-center overflow-y-auto bg-100-diagonal5op50 py-[2vh]">
      <VStackFull className="h-fit">
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
          <FloatDown />
        </ExampleContainer>
      </VStackFull>
    </FlexFull>
  );
}
