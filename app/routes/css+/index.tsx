import FlexFull from "~/components/buildingBlocks/flexFull";
import FlexFullResponsiveHalf from "~/components/buildingBlocks/flexResponsiveHalf";
import Wrap from "~/components/buildingBlocks/wrap";
import CSSAnimationExample from "./components/cssAnimationExample";
import Flex from "~/components/buildingBlocks/flex";
import ScrollingSelector from "~/components/buildingBlocks/scrollingSelector";
import { useCallback, useState } from "react";

export default function AnimationsOne() {
  const animations = [
    "animate-none",
    "animate-bounce",
    "animate-spin",
    "animate-pulse",
    "animate-ping",
    "animate-wiggle",
    "animate-fadeIn",
    "animate-fadeOut",
    "animate-fadeInUp",
    "animate-fadeInDown",
    "animate-fadeInLeft",
    "animate-fadeInRight",
    "animate-fadeOutUp",
    "animate-fadeOutDown",
    "animate-fadeOutLeft",
    "animate-fadeOutRight",
    "animate-scaleUp",
    "animate-scaleDown",
    "animate-scaleUpLeft",
    "animate-scaleUpRight",
    "animate-scaleDownLeft",
    "animate-scaleDownRight",
    "animate-rotate",
    "animate-rotateUp",
    "animate-rotateDown",
    "animate-rotateLeft",
    "animate-rotateRight",
    "animate-slideUp",
    "animate-slideDown",
    "animate-slideLeft",
    "animate-slideRight",
    "animate-slideUpLeft",
    "animate-slideUpRight",
    "animate-slideDownLeft",
    "animate-slideDownRight",
    "animate-hueRotate",
    "animate-hueRotateUp",
    "animate-hueRotateDown",
    "animate-hueRotateLeft",
    "animate-hueRotateRight",
    "animate-ripple",
    "animate-rippleUp",
    "animate-rippleDown",
    "animate-rippleLeft",
    "animate-rippleRight",
    "animate-rippleUpLeft",
    "animate-rippleUpRight",
    "animate-rippleDownLeft",
    "animate-rippleDownRight",
    "animate-vibrate",
    "animate-vibrateUp",
    "animate-vibrateDown",
    "animate-vibrateLeft",
    "animate-vibrateRight",
    "animate-vibrateUpLeft",
    "animate-vibrateUpRight",
    "animate-vibrateDownLeft",
    "animate-vibrateDownRight",
  ];
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
  const handleAnimationChange = useCallback((selectedOption: string) => {
    const index = animations.findIndex(
      (animation) => animation === selectedOption
    );
    setCurrentAnimationIndex(index);
  }, []);

  return (
    <FlexFull className="justify-center items-center">
      <Flex className="w-35% h-[70vh] px-[2vh]">
        <ScrollingSelector
          selectedOnTop={false}
          options={animations}
          setExternalSelection={handleAnimationChange}
          selectedOption={animations[currentAnimationIndex]}
          heading="CSS Animations"
          bg="bg-col-500"
          border="border-980-md"
          showClose={false}
        />
      </Flex>
      <Flex className="justify-center items-center w-65% h-[70vh] px-[8vh]">
        <FlexFull className="h-full bg-col-200">
          <CSSAnimationExample animation={animations[currentAnimationIndex]} />
        </FlexFull>
      </Flex>
    </FlexFull>
  );
}
