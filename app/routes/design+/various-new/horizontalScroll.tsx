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
import AnimatedComponent from "~/components/animate-on-scroll/animateOnScroll";
import HStack from "~/components/buildingBlocks/hStack";

function ContentContainer({
  scrollPosition,
  triggerPosition,
  children,
}: {
  scrollPosition: number;
  triggerPosition: number;
  children: React.ReactNode;
}) {
  const contentContainer = "h-[30vh] w-30% bg-col-100 text-too-big-loose";
  const MotionCenter = motion(Center);
  const animationVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };
  return (
    <MotionCenter
      className={contentContainer}
      variants={animationVariants}
      initial="hidden"
      animate={triggerPosition <= scrollPosition ? "visible" : "hidden"}
    >
      {children}
    </MotionCenter>
  );
}

function Section({
  title,
  height = "h-screen",
  position,
  bg,
  children,
}: {
  title: string;
  height?: string;
  position: string;
  bg?: string;
  children: React.ReactNode;
}) {
  return (
    <CenterFull
      className={`w-screen ${height} sticky ${position} flex-shrink-0 text-col-100 overflow-x-hidden text-too-big-loose font-semibold`}
    >
      <FlexFull className="h-full p-[2vh]">
        <VStackFull
          className={`${bg} h-full py-[1vh] justify-between shadowBroadLoose border-970-md`}
        >
          <CenterHorizontalFull className="text-insane-loose">
            {title}
          </CenterHorizontalFull>
          <HStackFull className="justify-evenly text-col-900 h-fit">
            {children}
          </HStackFull>
          <CenterHorizontalFull className="text-insane-loose">
            {title}
          </CenterHorizontalFull>
        </VStackFull>
      </FlexFull>
    </CenterFull>
  );
}

function Spacer({ height = "h-[200vh]" }: { height?: string }) {
  return (
    <CenterFull className={`w-screen ${height} flex-shrink-0 text-transparent`}>
      .
    </CenterFull>
  );
}
const singleContentStyles =
  "w-[50vh] h-[50vh] p-[7vh] bg-col-390 border-970-md shadowBroadLoose text-too-big-loose text-col-900 flex-shrink-0";

function HorizontalParallaxScroll() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const hStackRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (mainContainerRef.current) {
      const handleScroll = () => {
        if (mainContainerRef.current) {
          const scrolled = mainContainerRef.current.scrollTop;
          const totalScrollRange =
            mainContainerRef.current.scrollHeight - window.innerHeight;
          const scrollRatio = scrolled / totalScrollRange;
          setScrollPosition(scrollRatio);
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

  useEffect(() => {
    if (hStackRef.current) {
      const hStackWidth = hStackRef.current.scrollWidth;
      const containerWidth = window.innerWidth;
      const scrollRange = hStackWidth - containerWidth;
      const scrollTranslation = scrollPosition * scrollRange;
      hStackRef.current.style.transform = `translateX(-${scrollTranslation}px)`;
    }
  }, [scrollPosition]);

  return (
    <FlexFull
      className="h-screen fixed top-0 left-0 overflow-y-auto scrollbar-hide"
      ref={mainContainerRef}
    >
      <VStackFull
        className="bg-col-200 h-fit flex-shrink-0 relative"
        gap="gap-[0.1vh]"
      >
        <Box className="absolute top-0 left-0 p-[1vh] bg-col-180 z-10 w-[13vh]">{`Scrolled ${RoundToDecimal(
          scrollPosition * 100,
          3
        )}%`}</Box>

        <FlexFull className="overflow-x-hidden p-[1vh] sticky top-0 left-0">
          <HStack
            className="w-fit h-screen py-[1vh] items-center"
            ref={hStackRef}
          >
            {/* ... Flex components ... */}
          </HStack>
        </FlexFull>

        <Spacer />
      </VStackFull>
    </FlexFull>
  );
}
