import { useEffect, useRef } from "react";
import Box from "~/components/buildingBlocks/box";
import Center from "~/components/buildingBlocks/center";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Text from "~/components/buildingBlocks/text";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function NewestHorizontalParallax() {
  function Content({ label }: { label?: string }) {
    return (
      <Box className="p-[2vh]">
        <Center className="w-[50vh] h-[50vh] bg-col-500 shadowNarrowTight border-970-md flex-shrink-0">
          <Text className="text-col-100 textShadow text-too-big-loose">
            content {label}
          </Text>
        </Center>
      </Box>
    );
  }

  const scrollRef = useRef<HTMLDivElement>(null);

  function HorizontalScrollComponent() {
    return (
      <FlexFull
        className="max-w-full overflow-x-auto scrollbar-hide flex-shrink-0"
        ref={scrollRef}
        style={{ scrollBehavior: "smooth" }}
      >
        <HStackFull className="w-fit flex-shrink-0">
          <Content label="one" />
          <Content label="two" />
          <Content label="three" />
          <Content label="four" />
          <Content label="five" />
          <Content label="six" />
          <Content label="seven" />
          <Content label="eight" />
          <Content label="nine" />
          <Content label="ten" />
        </HStackFull>
      </FlexFull>
    );
  }

  useEffect(() => {
    let isThrottled = false;
    let isHorizontalScrollComplete = false;

    const handleScroll = (e: WheelEvent) => {
      if (!isThrottled && scrollRef.current) {
        e.preventDefault();
        const scrollMultiplier = 50;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const isScrolledToRight = scrollLeft + clientWidth >= scrollWidth;

        if (!isScrolledToRight) {
          scrollRef.current.scrollLeft += e.deltaY * scrollMultiplier;
        } else {
          isHorizontalScrollComplete = true;
        }

        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, 500); // Throttle period in milliseconds
      }
    };

    const handleVerticalScroll = (e: WheelEvent) => {
      if (!isHorizontalScrollComplete) {
        e.preventDefault();
      }
    };

    const resetHorizontalScrollComplete = () => {
      if (window.scrollY === 0) {
        isHorizontalScrollComplete = false;
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("wheel", handleVerticalScroll, { passive: false });
    window.addEventListener("scroll", resetHorizontalScrollComplete);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("wheel", handleVerticalScroll);
      window.removeEventListener("scroll", resetHorizontalScrollComplete);
    };
  }, []);

  return (
    <FlexFull className="h-full overflow-y-auto">
      <VStackFull className="h-full items-center">
        <FlexFull className="h-screen flex-shrink-0 items-center">
          <HorizontalScrollComponent />
        </FlexFull>
        <FlexFull className="h-[50vh]">
          {" "}
          <Content label="one" />
        </FlexFull>
        <FlexFull className="h-[50vh]">
          {" "}
          <Content label="one" />
        </FlexFull>
        <FlexFull className="h-[50vh]">
          {" "}
          <Content label="one" />
        </FlexFull>
      </VStackFull>
    </FlexFull>
  );
}
