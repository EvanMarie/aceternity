import Flex from "~/components/buildingBlocks/flex";
import AnimationExample from "../gsap+/components/animationExample";
import FlexFull from "~/components/buildingBlocks/flexFull";

export default function TestPage() {
  return (
    <FlexFull className="w-full justify-center">
      <AnimationExample
        animationClass="animate-slideInLeft"
        style={{ animationDelay: "3s" }}
      />
    </FlexFull>
  );
}
