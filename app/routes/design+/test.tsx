import Box from "~/components/buildingBlocks/box";
import StickyStackingCards from "./various-new/stickyStackingCardsDemo";
import HorizontalParallaxScroll from "./various-new/horizontalScroll";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import FlexFull from "~/components/buildingBlocks/flexFull";

export default function Test() {
  return (
    <FlexFull className="fixed top-0 left-0 w-screen h-screen overflow-y-auto overflow-x-hidden">
      <HorizontalParallaxScroll />
      <HorizontalParallaxScroll />
    </FlexFull>
  );
  // return <StickyStackingCards />;
}
