import TransitionFullScreen from "~/components/buildingBlocks/transitionFullScreen";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import HorizontalParallaxCarousel from "../css+/components/advancedExamples/parallaxCarousel";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Heading from "~/components/buildingBlocks/headingText";
import FlexFull from "~/components/buildingBlocks/flexFull";

export default function Test() {
  const images = [
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/1000/1000`,
  ];
  return (
    <TransitionFullScreen>
      <CenterHorizontalFull>
        <VStackFull>
          <Heading
            text="Horizontal Parallax Carousel 😍"
            layout="text-insane-looser"
          />
          <FlexFull className="overflow-x-auto">
            <HorizontalParallaxCarousel
              images={images}
              height="h-[65vh]"
              includeModal
            />
          </FlexFull>
        </VStackFull>

        {/* <FlexFull className="h-full overflow-x-auto justify-center">
          <HStack className="w-fit">
            <ParallaxImage
              bgImage={`https://picsum.photos/seed/${
                Math.floor(Math.random() * 100) + 1
              }/500/900`}
            />
            <ParallaxImage
              bgImage={`https://picsum.photos/seed/${
                Math.floor(Math.random() * 100) + 1
              }/500/900`}
            />
            <ParallaxImage
              bgImage={`https://picsum.photos/seed/${
                Math.floor(Math.random() * 100) + 1
              }/500/900`}
            />
            <ParallaxImage
              bgImage={`https://picsum.photos/seed/${
                Math.floor(Math.random() * 100) + 1
              }/500/900`}
            />
            <ParallaxImage
              bgImage={`https://picsum.photos/seed/${
                Math.floor(Math.random() * 100) + 1
              }/500/900`}
            />
            <ParallaxImage
              bgImage={`https://picsum.photos/seed/${
                Math.floor(Math.random() * 100) + 1
              }/500/900`}
            />
            <ParallaxImage
              bgImage={`https://picsum.photos/seed/${
                Math.floor(Math.random() * 100) + 1
              }/500/900`}
            />
            <ParallaxImage
              bgImage={`https://picsum.photos/seed/${
                Math.floor(Math.random() * 100) + 1
              }/500/900`}
            />
          </HStack>
        </FlexFull> */}
      </CenterHorizontalFull>
    </TransitionFullScreen>
  );
}
