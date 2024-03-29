import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Center from "~/components/buildingBlocks/center";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Heading from "~/components/buildingBlocks/headingText";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function Test() {
  const scrollYRef = useRef<HTMLDivElement>(null);
  const scrollXRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: scrollYRef,
    axis: "y",
  });

  useEffect(() => {
    const updateScrollX = () => {
      if (scrollXRef.current) {
        const scrollPosition =
          scrollYProgress.get() *
          (scrollXRef.current.scrollWidth - scrollXRef.current.clientWidth);
        scrollXRef.current.scrollLeft = scrollPosition;
      }
    };

    const unsubscribeScrollYProgress = scrollYProgress.onChange(updateScrollX);

    return () => {
      unsubscribeScrollYProgress();
    };
  }, [scrollYProgress]);

  function ScrollItem({ label }: { label: string }) {
    return (
      <Center className="w-[60vh] h-[70vh] bg-col-770 shadowBroadLoose border-970-md flex-shrink-0">
        {label}
      </Center>
    );
  }

  const items = Array.from({ length: 10 }, (_, i) => i);
  useEffect(() => {
    const updateScrollX = () => {
      if (scrollXRef.current && scrollYRef.current) {
        const scrollYProgressValue = scrollYProgress.get();
        const scrollPosition =
          scrollYProgressValue *
          (scrollXRef.current.scrollWidth - scrollXRef.current.clientWidth);

        console.log(`Scroll Y Progress: ${scrollYProgressValue}`);
        console.log(`Scroll Position: ${scrollPosition}`);
        console.log(`Scroll Width: ${scrollXRef.current.scrollWidth}`);
        console.log(`Client Width: ${scrollXRef.current.clientWidth}`);

        scrollXRef.current.scrollLeft = scrollPosition;
      }
    };

    const unsubscribe = scrollYProgress.on("change", updateScrollX);

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <FlexFull className="h-screen overflow-y-auto">
      <VStackFull
        className="h-[200vh] flex-shrink-0"
        gap="gap-[5vh]"
        ref={scrollYRef}
      >
        <CenterHorizontalFull className="h-[15vh]">
          <Heading text="Use Scroll" />
        </CenterHorizontalFull>
        <FlexFull className="w-[97vw] overflow-x-auto">
          <HStackFull className="w-fit py-[2vh]" ref={scrollXRef}>
            {items.map((i) => (
              <ScrollItem key={i} label={i.toString()} />
            ))}
          </HStackFull>
        </FlexFull>
      </VStackFull>
    </FlexFull>
  );
}
