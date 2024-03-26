import { useEffect, useRef, useState } from "react";
import RoundToDecimal from "~/utils/roundDecPlace";
import Box from "~/components/buildingBlocks/box";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStack from "~/components/buildingBlocks/hStack";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import CenterFull from "~/components/buildingBlocks/centerFull";

function Spacer({ height = "h-[200vh]" }: { height?: string }) {
  return (
    <CenterFull className={`w-screen ${height} flex-shrink-0 text-transparent`}>
      .
    </CenterFull>
  );
}

const singleContentStyles =
  "w-[50vh] h-[50vh] p-[7vh] bg-col-390 border-970-md shadowBroadLoose text-too-big-loose text-col-900 flex-shrink-0";

export default function HorizontalParallaxScroll() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const hStackRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        if (mainContainerRef.current && hStackRef.current) {
          const scrollTop = mainContainerRef.current.scrollTop;
          const containerHeight = mainContainerRef.current.scrollHeight;
          const viewportHeight = window.innerHeight;
          const scrollProgress = scrollTop / (containerHeight - viewportHeight);
          const hStackWidth = hStackRef.current.scrollWidth;
          const viewportWidth = window.innerWidth;
          const translateX = (hStackWidth - viewportWidth) * scrollProgress;

          hStackRef.current.style.transform = `translateX(-${translateX}px)`;
          setScrollPosition(scrollProgress * 100);
        }
      });
    };

    const container = mainContainerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FlexFull
      className="h-screen fixed top-0 left-0 overflow-y-auto scrollbar-hide"
      ref={mainContainerRef}
    >
      <VStackFull
        className="bg-col-200 h-fit flex-shrink-0 relative"
        gap="gap-[0.1vh]"
      >
        <Box className="absolute top-0 left-0 p-[1vh] bg-col-180 z-10 w-[13vh]">
          {`Scrolled ${RoundToDecimal(scrollPosition, -0.5)}%`}
        </Box>

        <FlexFull className="overflow-x-hidden p-[1vh] sticky top-0 left-0">
          <HStack
            className="w-fit h-screen py-[1vh] items-center"
            ref={hStackRef}
          >
            <Flex className={singleContentStyles}>THIS 1</Flex>
            <Flex className={singleContentStyles}>THIS 2</Flex>
            <Flex className={singleContentStyles}>THIS 3</Flex>
            <Flex className={singleContentStyles}>THIS 4</Flex>
            <Flex className={singleContentStyles}>THIS 5</Flex>
            <Flex className={singleContentStyles}>THIS 6</Flex>
            <Flex className={singleContentStyles}>THIS 7</Flex>
            <Flex className={singleContentStyles}>THIS 8</Flex>
            <Flex className={singleContentStyles}>THIS 9</Flex>
            <Flex className={singleContentStyles}>THIS 10</Flex>
            <Flex className={singleContentStyles}>THIS 11</Flex>
          </HStack>
        </FlexFull>

        <Spacer />
      </VStackFull>
    </FlexFull>
  );
}
