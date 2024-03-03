import FlexFull from "~/components/buildingBlocks/flexFull";
import Transition from "~/components/buildingBlocks/transition";
import TailwindAnimationExample from "./components/tailwindAnimationExample";
import CSSAnimationExample from "./components/cssAnimationExample";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Text from "~/components/buildingBlocks/text";
import {
  CSSExampleFive,
  CSSExampleFour,
  CSSExampleOne,
  CSSExampleThree,
  CSSExampleTwo,
} from "./components/cssAnimationExampleComponents";
import Heading from "~/components/buildingBlocks/headingText";

export default function CSSAnimation() {
  return (
    <Transition className="w-full h-full">
      <VStackFull className="h-full overflow-y-auto p-[2vh]" gap="gap-[2vh]">
        <FlexFull className="px-[2vh] pt-[1vh] justify-center">
          <Heading
            text="Default & Custom Timing Functions"
            layout="text-too-big-normal"
            shadow="textShadow"
            color="text-col-100"
            className="py-[0.7vh]"
          />
        </FlexFull>
        <CSSExampleOne />
        <CSSExampleTwo />
        <CSSExampleThree />
        <CSSExampleFour />
        {/*  <CSSExampleFive /> */}
      </VStackFull>
    </Transition>
  );
}
