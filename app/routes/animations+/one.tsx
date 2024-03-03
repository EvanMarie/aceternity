import gsap from "gsap";
import { useEffect } from "react";
import Box from "~/components/buildingBlocks/box";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Wrap from "~/components/buildingBlocks/wrap";

function AnimationExample({
  id,
  text,
  animationClass,
  className,
  description,
  dimensions = "h-[15vh] w-[15vh]",
  bg = "bg-col-700",
  textColor = "text-col-100",
}: {
  id?: string;
  text?: string;
  description?: string;
  animationClass?: string;
  className?: string;
  dimensions?: string;
  bg?: string;
  textColor?: string;
}) {
  return (
    <VStack className="bg-col-200 shadowBroadLoose h-fit">
      <FlexFull className="py-[0.2vh] justify-center font-semibold bg-col-100 rounded-b-none border-b-950-md font-mono">
        <Text>{description}</Text>
      </FlexFull>
      <Flex className="h-[20vh] w-[40vh] justify-center items-center ">
        <div
          className={`flex justify-center items-center shadowBroadNormal textShadow ${bg} ${dimensions} ${textColor} ${className} ${animationClass}`}
          id={id}
        >
          {text}
        </div>
      </Flex>
    </VStack>
  );
}

export default function One() {
  useEffect(() => {
    gsap.to("#one", { duration: 1, opacity: 1 });
    gsap.to("#two", { duration: 2, x: 50, opacity: 1 });
  }, []);

  return (
    <Wrap className="p-[1.5vh] h-full overflow-auto gap-[2vh]">
      <AnimationExample
        id="one"
        text="Example 1"
        animationClass="opacity-0"
        description='gsap.to("#one", { duration: 1, opacity: 1 });'
      />
      <AnimationExample
        id="two"
        text="Example 2"
        animationClass="opacity-0"
        description='gsap.to("#two", { duration: 2, x: 50, opacity: 1 });'
      />
    </Wrap>
  );
}
