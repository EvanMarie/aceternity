import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function AnimationExample({
  id,
  text,
  animationClass,
  className,
  heading,
  description,
  code,
  dimensions = "h-[15vh] w-[15vh]",
  bg = "bg-col-700",
  textColor = "text-col-100",
  isMulti = false,
  children,
}: {
  id?: string;
  text?: string;
  code?: string;
  heading?: string;
  description?: string;
  animationClass?: string;
  className?: string;
  dimensions?: string;
  bg?: string;
  textColor?: string;
  isMulti?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <VStack className="bg-col-200 shadowBroadLoose h-fit w-90%">
      <FlexFull className="py-[0.2vh] justify-center font-semibold bg-col-100 rounded-b-none border-b-950-md ">
        <VStackFull gap="gap-[0px]" className="px-[0.5vh]">
          <Text className="text-xl-tight">{heading}</Text>
          <Text className="text-wrap">{description}</Text>
          <Text className="font-mono text-[1.3vh] leading-[1.9vh] tracking-tighter text-wrap">
            {code}
          </Text>
        </VStackFull>
      </FlexFull>

      <Flex className="h-[40vh] w-full justify-center items-center ">
        {isMulti ? (
          children
        ) : (
          <div
            className={`flex justify-center items-center shadowBroadNormal textShadow border-970-md ${bg} ${dimensions} ${textColor} ${className} ${animationClass}`}
            id={id}
          >
            {text}
          </div>
        )}
      </Flex>
    </VStack>
  );
}
