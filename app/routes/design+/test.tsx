import TransitionFullScreen from "~/components/buildingBlocks/transitionFullScreen";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Center from "~/components/buildingBlocks/center";
import Sunrise from "../css+/components/advancedExamples/sunrise";
import Flex from "~/components/buildingBlocks/flex";
import ParallaxScroll from "../css+/components/advancedExamples/parallaxScroll";
import ParallaxImage from "~/components/specialty/parallaxImage";
import Box from "~/components/buildingBlocks/box";
import Image from "~/components/buildingBlocks/image";

export default function Test() {
  return (
    <TransitionFullScreen>
      <CenterHorizontalFull>
        {/* <ParallaxScroll numImages={23} /> */}
        <ParallaxImage bgImage="https://picsum.photos/seed/44/500/900" />
      </CenterHorizontalFull>
    </TransitionFullScreen>
  );
}
