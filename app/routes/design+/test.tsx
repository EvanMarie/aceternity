import { useRef } from "react";
import BackgroundGrid from "../use-spring+/components/backgroundGrid";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import ScrollYAnimated from "../use-spring+/components/animatedScrollY";
import Center from "~/components/buildingBlocks/center";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";

export default function Test() {
  const parallax = useRef<IParallax>(null!);
  const containerRef = useRef(null);

  return (
    <Parallax
      ref={parallax}
      pages={6}
      config={{ mass: 1, tension: 300, friction: 60 }}
    >
      {/* ENTIRE BACKGROUND  */}
      <div
        className="bg-gray-900 text-zinc-50 w-screen h-screen overflow-y-auto scrollbar-hide"
        ref={containerRef}
      >
        {/* BACKGROUND GRID  */}
        <BackgroundGrid />
        {/* SCROLL Y ANIMATION  */}
        <ScrollYAnimated containerRef={containerRef} />
        <ScrollYAnimated containerRef={containerRef} />
        {/* PARALLAX LAYERS  */}
        <ParallaxLayer offset={1.5} speed={0.8} className="bg-red-200">
          <Center className="w-screen h-screen">
            <VStack className="bg-gray-900 text-col-100 p-[2vh] text-[2vh]">
              <Text>Layer One</Text>
              <Text>offset: 1.5</Text>
              <Text>speed: 0.8</Text>
            </VStack>
          </Center>
        </ParallaxLayer>{" "}
        <ParallaxLayer offset={2} speed={0.4} className="bg-orange-200">
          {" "}
          <Center className="w-screen h-screen">
            <VStack className="bg-gray-900 text-col-100 p-[2vh] text-[2vh]">
              <Text>Layer Two</Text>
              <Text>offset: 2</Text>
              <Text>speed: 0.4</Text>
            </VStack>
          </Center>
        </ParallaxLayer>{" "}
        <ParallaxLayer offset={2.5} speed={1.2} className="bg-yellow-200">
          {" "}
          <Center className="w-screen h-screen">
            <VStack className="bg-gray-900 text-col-100 p-[2vh] text-[2vh]">
              <Text>Layer Three</Text>
              <Text>offset: 2.5</Text>
              <Text>speed: 1.2</Text>
            </VStack>
          </Center>
        </ParallaxLayer>{" "}
        <ParallaxLayer offset={3} speed={0.5} className="bg-yellow-200">
          {" "}
          <Center className="w-screen h-screen">
            <VStack className="bg-gray-900 text-col-100 p-[2vh] text-[2vh]">
              <Text>Layer Four</Text>
              <Text>offset: 3</Text>
              <Text>speed: 0.5</Text>
            </VStack>
          </Center>
        </ParallaxLayer>{" "}
      </div>
    </Parallax>
  );
}
