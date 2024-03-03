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

export default function CSSAnimation() {
  return (
    <Transition className="w-full h-full">
      <VStackFull className="h-full overflow-y-auto p-[2vh]" gap="gap-[2vh]">
        <CSSExampleOne />
        <CSSExampleTwo />
        <CSSExampleThree />
        {/* <CSSExampleFour />
        <CSSExampleFive /> */}
      </VStackFull>
    </Transition>
  );
}
