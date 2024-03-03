import FlexFull from "~/components/buildingBlocks/flexFull";
import Transition from "~/components/buildingBlocks/transition";

export default function CSSAnimation() {
  return (
    <Transition className="w-full h-full">
      <FlexFull className="h-full justify-center items-center">This</FlexFull>
    </Transition>
  );
}
