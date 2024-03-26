import { set } from "lodash";
import { useEffect, useRef, useState } from "react";
import AnimatedComponentSpring from "~/components/animate-on-scroll/animateOnScrollSpring";
import Box from "~/components/buildingBlocks/box";
import Center from "~/components/buildingBlocks/center";
import CenterFull from "~/components/buildingBlocks/centerFull";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import RoundToDecimal from "~/utils/roundDecPlace";
import { motion } from "framer-motion";

function Section({
  title,
  height = "h-screen",
  position,
  bg,
  scrollPosition,
  triggerPositions,
}: {
  title: string;
  height?: string;
  position: string;
  bg?: string;
  scrollPosition: number;
  triggerPositions: number[];
}) {
  const contentContainer = "h-[30vh] w-30% bg-col-100 text-too-big-loose";
  const MotionCenter = motion(Center);
  const animationVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  const visibilityRefs = useRef([false, false, false]);

  useEffect(() => {
    visibilityRefs.current = visibilityRefs.current.map((visibility, index) => {
      return scrollPosition >= triggerPositions[index] || visibility;
    });
  }, [scrollPosition, triggerPositions]);

  return (
    <CenterFull
      className={`w-screen ${height} sticky ${position} flex-shrink-0 text-col-100 text-too-big-loose font-semibold`}
    >
      <FlexFull className="h-full p-[2vh] ">
        <VStackFull
          className={` ${bg} h-full py-[1vh] justify-between shadowBroadLoose border-970-md`}
        >
          <CenterHorizontalFull className="text-insane-loose">
            {title}
          </CenterHorizontalFull>
          <HStackFull className="justify-evenly text-col-900 h-fit">
            <MotionCenter
              className={contentContainer}
              variants={animationVariants}
              initial="hidden"
              animate={visibilityRefs.current[0] ? "visible" : "hidden"}
            >
              Content 1
            </MotionCenter>

            <MotionCenter
              className={contentContainer}
              variants={animationVariants}
              initial="hidden"
              animate={visibilityRefs.current[1] ? "visible" : "hidden"}
            >
              Content 1
            </MotionCenter>

            <MotionCenter
              className={contentContainer}
              variants={animationVariants}
              initial="hidden"
              animate={visibilityRefs.current[2] ? "visible" : "hidden"}
            >
              Content 1
            </MotionCenter>
          </HStackFull>
          <CenterHorizontalFull className="text-insane-loose">
            {title}
          </CenterHorizontalFull>
        </VStackFull>
      </FlexFull>
    </CenterFull>
  );
}

function Spacer({ height = "h-screen" }: { height?: string }) {
  return (
    <CenterFull className={`w-screen ${height} flex-shrink-0 text-transparent`}>
      .
    </CenterFull>
  );
}

export default function HorizontalParallaxScroll() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (mainContainerRef.current) {
      const handleScroll = () => {
        if (mainContainerRef.current) {
          const scrolled = mainContainerRef.current.scrollTop;
          const percentage =
            (scrolled / mainContainerRef.current.scrollHeight) * 100;
          setScrollPosition(percentage);
        }
      };
      mainContainerRef.current.addEventListener("scroll", handleScroll);
      return () => {
        if (mainContainerRef.current) {
          mainContainerRef.current.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, [mainContainerRef.current]);

  return (
    <FlexFull
      className="h-screen fixed top-0 left-0 overflow-y-auto"
      ref={mainContainerRef}
    >
      <VStackFull
        className="bg-col-200 h-fit flex-shrink-0 relative"
        gap="gap-[0.1vh]"
      >
        <Box className="fixed top-0 left-0 p-[1vh] bg-col-180 z-10 w-[13vh]">{`Scrolled ${RoundToDecimal(
          scrollPosition,
          3
        )}`}</Box>
        <Section
          title="Section 1"
          position="top-0"
          bg="bg-col-900"
          scrollPosition={scrollPosition}
          triggerPositions={[3, 6, 9]}
        />
        <Spacer />
        <Section
          title="Section 2"
          position="top-0"
          bg="bg-col-800"
          scrollPosition={scrollPosition}
          triggerPositions={[18, 24, 27]}
        />
        <Spacer />
        <Section
          title="Section 3"
          position="top-0"
          bg="bg-col-700"
          scrollPosition={scrollPosition}
          triggerPositions={[36, 40, 43]}
        />
        <Spacer />
        <Section
          title="Section 4"
          position="top-0"
          bg="bg-col-600"
          scrollPosition={scrollPosition}
          triggerPositions={[54, 57, 60]}
        />
        <Spacer />
        <Section
          title="Section 5"
          position="top-0"
          bg="bg-col-500"
          scrollPosition={scrollPosition}
          triggerPositions={[73, 77, 81]}
        />
        <Spacer />
        <Section
          title="Section 6"
          position="top-0"
          bg="bg-col-400"
          scrollPosition={scrollPosition}
          triggerPositions={[88, 89, 90]}
        />
      </VStackFull>
    </FlexFull>
  );
}
