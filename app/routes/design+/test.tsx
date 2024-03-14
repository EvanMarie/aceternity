import TransitionFullScreen from "~/components/buildingBlocks/transitionFullScreen";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Center from "~/components/buildingBlocks/center";
import Sunrise from "../css+/components/advancedExamples/sunrise";
import Flex from "~/components/buildingBlocks/flex";

export default function Test() {
  return (
    <TransitionFullScreen>
      <CenterHorizontalFull>
        <Flex>
          <Sunrise />
        </Flex>
      </CenterHorizontalFull>
    </TransitionFullScreen>
  );
}
