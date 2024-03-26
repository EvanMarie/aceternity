import { useEffect, useRef } from "react";
import Center from "~/components/buildingBlocks/center";
import CenterFull from "~/components/buildingBlocks/centerFull";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

function AnimatedContent({
  children,
  threshold = 0.1,
}: {
  children: React.ReactNode;
  threshold?: number;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="h-[30vh] w-30% bg-col-100 text-too-big-loose"
    >
      {children}
    </motion.div>
  );
}

function Section({
  title,
  height = "h-screen",
  position,
  bg,
}: {
  title: string;
  height?: string;
  position: string;
  bg?: string;
}) {
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
            <Center className="h-[30vh] w-30% bg-col-100 text-too-big-loose">
              Content 1
            </Center>
            <Center className="h-[30vh] w-30% bg-col-100 text-too-big-loose">
              Content 2
            </Center>
            <Center className="h-[30vh]   w-30% bg-col-100 text-too-big-loose">
              Content 3
            </Center>
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Assuming the viewport height (vh) is 100 units
          const scrolledVh = entry.intersectionRatio * 100;
          console.log(`Scrolled ${scrolledVh}vh`);

          // Trigger animations based on scrolledVh
          // For example, if scrolledVh > 50, do something
        });
      },
      {
        root: mainContainerRef.current,
        threshold: [0, 0.25, 0.5, 0.75, 1], // Trigger at various scroll points
      }
    );

    // Observe each section
    const sections = mainContainerRef.current?.children;
    sections &&
      Array.from(sections).forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Clean up
  }, []);

  return (
    <FlexFull className="h-screen fixed top-0 left-0 overflow-y-auto">
      <VStackFull
        className="bg-col-200 h-fit flex-shrink-0 relative"
        gap="gap-[0.1vh]"
        ref={mainContainerRef}
      >
        <Section title="Section 1" position="top-0" bg="bg-col-900" />
        <Spacer />
        <Section title="Section 2" position="top-0" bg="bg-col-800" />
        <Section title="Section 3" position="top-0" bg="bg-col-700" />
        <Section title="Section 4" position="top-0" bg="bg-col-600" />
        <Section title="Section 5" position="top-0" bg="bg-col-500" />
      </VStackFull>
    </FlexFull>
  );
}
