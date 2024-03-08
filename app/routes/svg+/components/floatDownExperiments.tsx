import Center from "~/components/buildingBlocks/center";
import Flex from "~/components/buildingBlocks/flex";
import VStack from "~/components/buildingBlocks/vStack";
import FlexFull from "~/components/buildingBlocks/flexFull";
import { useState } from "react";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Wrap from "~/components/buildingBlocks/wrap";
import Heading from "~/components/buildingBlocks/headingText";
import FloatDown from "./floatDown";
import IconButton from "~/components/buildingBlocks/iconButton";
import { RefreshIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import Text from "~/components/buildingBlocks/text";

export default function FloatDownExperiements() {
  const [animationKey, setAnimationKey] = useState(0);

  const handleReanimate = () => {
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const animations = ["shimmer", "bouncy", "none"];
  const activeStyle =
    "text-cyan-200 font-semibol px-[0.5vh] metallicEdgesSm textShadow";
  const inactiveStyle = "text-col-100 textShadow";
  const [animation, setAnimation] = useState("none");
  const headingStyles = "text-cyan-200  text-md-normal md:text-lg-normal";
  const buttonStyles =
    "text-sm-tight md:text-lg-tight md:px-[1vh] justify-center flex-shrink-0 hover:cursor-pointer";

  return (
    <FlexFull className="justify-center">
      <Flex className="w-95% xxl:w-80% h-fit justify-center overflow-y-auto bg-600-linear6op75">
        <VStack className="h-fit pb-[2vh]" gap="gap-[3vh]">
          <VStackFull gap="gap-[2vh]">
            <Heading text="Fun with Floating Circles" className="py-[1vh]" />
            <Wrap className="w-90% p-[1vh] shadowBroadNormal justify-evenly gap-x-[3vh] gap-y-[1vh] bg-col-970 items-center">
              {animations.map((e, i) => (
                <Flex
                  key={i}
                  onClick={() => setAnimation(e)}
                  className={buttonStyles}
                >
                  <Text
                    className={e === animation ? activeStyle : inactiveStyle}
                  >
                    {e}
                  </Text>
                </Flex>
              ))}
            </Wrap>
          </VStackFull>
          <FlexFull className="justify-center">
            {" "}
            <Center className="w-fit h-fit insetShadowXl relative">
              <Box className="absolute top-[1vh] right-[1vh] z-10">
                <IconButton
                  onClick={handleReanimate}
                  icon={RefreshIcon}
                  type="smallNormal"
                />
              </Box>
              <FloatDown
                startFrom={-50}
                endAt={80}
                key={animationKey}
                containerHeight="h-[50vh]"
                containerWidth="w-full md:w-[90vh]"
                viewBoxHeight={1000}
                viewBoxWidth={2000}
                circleAnimation={animation as "shimmer" | "bouncy" | "none"}
              />
            </Center>
          </FlexFull>
        </VStack>
      </Flex>
    </FlexFull>
  );
}
