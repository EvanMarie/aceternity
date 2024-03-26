import { useEffect, useRef } from "react";
import Center from "~/components/buildingBlocks/center";
import FlexFull from "~/components/buildingBlocks/flexFull";

function HorizontalParallaxScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    const horizontal = horizontalRef.current;

    if (!scrollContainer || !horizontal) return;

    // Total height of the element that can scroll
    const totalScrollHeight = scrollContainer.scrollHeight - window.innerHeight;

    // Current scroll position
    const currentScroll = scrollContainer.scrollTop;

    // Calculate the horizontal scroll
    const totalHorizontalWidth = horizontal.scrollWidth - window.innerWidth;
    const horizontalScroll =
      (currentScroll / totalScrollHeight) * totalHorizontalWidth;

    horizontal.style.transform = `translateX(-${horizontalScroll}px)`;
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", onScroll);

      return () => {
        scrollContainer.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  function ScrollContainer({ children }: { children: React.ReactNode }) {
    return (
      <Center className="min-w-[100vw] h-full flex-shrink-0 relative">
        <Center className="w-full h-full top-0 left-0">{children}</Center>
      </Center>
    );
  }

  return (
    <FlexFull className="w-screen h-screen relative">
      <div
        ref={scrollContainerRef}
        className="fixed top-0 left-0 w-full h-full overflow-auto scrollbar-hide"
      >
        <div className="relative w-full" style={{ height: "200vh" }}>
          <div ref={horizontalRef} className="absolute top-0 flex h-full">
            <ScrollContainer>
              <div className="w-full h-full bg-red-500">THIS</div>
            </ScrollContainer>
            <ScrollContainer>
              <div className="w-full h-full bg-blue-500" />
            </ScrollContainer>
            <ScrollContainer>
              <div className="w-full h-full bg-green-500" />
            </ScrollContainer>
            <ScrollContainer>
              <div className="w-full h-full bg-yellow-500" />
            </ScrollContainer>
          </div>
        </div>
      </div>
    </FlexFull>
  );
}

export default HorizontalParallaxScroll;
