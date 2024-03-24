import AnimatedComponentSpring from "~/components/animate-on-scroll/animateOnScrollSpring";
import Center from "~/components/buildingBlocks/center";
import Flex from "~/components/buildingBlocks/flex";
import SnapScrollContainer from "~/components/specialty/snapScrollContainer";
import SnapScrollPage from "~/components/specialty/snapScrollPage";

export default function FallingBoxes() {
  return (
    <SnapScrollContainer>
      <SnapScrollPage id="">
        <Flex className="p-[2vh] bg-col-200 text-xxl-loose font-bold shadowBroadLoose">
          FALLING BOX
        </Flex>
      </SnapScrollPage>
      <SnapScrollPage id="">
        <AnimatedComponentSpring yOffset="-40vh" runOnce>
          <Center className="h-60vh w-[60vh] ">
            <Flex className="p-[2vh] bg-col-200 text-xxl-loose font-bold shadowBroadLoose">
              FALLING BOX
            </Flex>
          </Center>
        </AnimatedComponentSpring>
      </SnapScrollPage>
      <SnapScrollPage id="">
        <AnimatedComponentSpring yOffset="-40vh" runOnce>
          <Flex className="p-[2vh] bg-col-200 text-xxl-loose font-bold shadowBroadLoose">
            FALLING BOX
          </Flex>
        </AnimatedComponentSpring>
      </SnapScrollPage>
    </SnapScrollContainer>
  );
}
