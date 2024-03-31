import React, { useRef } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import VStack from "~/components/buildingBlocks/vStack";
import Box from "~/components/buildingBlocks/box";
import Icon from "~/components/buildingBlocks/icon";
import { LuChevronsLeftRight } from "react-icons/lu";
import CenterFull from "~/components/buildingBlocks/centerFull";
import Image from "~/components/buildingBlocks/image";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import IconButton from "~/components/buildingBlocks/iconButton";
import {
  BiChevronLeft,
  BiChevronRight,
  BiChevronsLeft,
  BiChevronsRight,
} from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import Flex from "~/components/buildingBlocks/flex";
import { Center } from "@react-three/drei";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";

interface PageProps {
  offset: number;
  backClick: () => void | undefined;
  forwardClick: () => void | undefined;
  scrollToStart: () => void;
  scrollToEnd: () => void;
  className?: string;
  totalPages?: number;
}

const Page: React.FC<PageProps> = ({
  offset,
  backClick,
  forwardClick,
  scrollToStart,
  scrollToEnd,
  className,
  totalPages = 10,
}) => {
  const glowAnimation = useAnimation();
  const bgClass = className ? className : "bg-radial5op75"; // Default background class

  const randomOpacity = Math.random() * (0.7 - 0.3) + 0.3;
  const handleButtonClick = async (
    direction: "forward" | "back" | "start" | "end"
  ) => {
    // Start a more pronounced glow effect
    glowAnimation
      .start({
        scale: 0.9,
        background:
          "radial-gradient(circle, rgba(242, 181, 128, 0.5) 0%, rgba(156, 104, 146, 0.5) 100%)",
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      })
      .then(() => {
        // First change to a different state
        return glowAnimation.start({
          scale: 1.3,
          background:
            "radial-gradient(circle, rgba(242, 141, 128, 0.5) 0%, rgba(122, 71, 112, 0.5) 100%)",
          transition: {
            duration: 0.7,
            ease: "easeInOut",
          },
        });
      })
      .then(() => {
        // Then return to the original state
        return glowAnimation.start({
          scale: 1,
          background:
            "radial-gradient(circle, rgba(242, 181, 128, 0.5) 0%, rgba(156, 104, 146, 0.5) 100%)",
          transition: {
            duration: 0.9,
            ease: "easeIn",
          },
        });
      });

    if (direction === "forward" && offset < totalPages - 1) {
      forwardClick();
    } else if (direction === "back" && offset > 0) {
      backClick();
    } else if (direction === "start") {
      scrollToStart();
    } else if (direction === "end") {
      scrollToEnd();
    }
  };

  return (
    <>
      <ParallaxLayer
        offset={offset}
        speed={0.2}
        className="snap-center snap-always w-screen h-screen"
      >
        <div
          className="absolute w-full h-full"
          style={{
            clipPath: "circle(50% at 50% 50%)",
            background:
              "radial-gradient(circle, rgba(242, 181, 128, 0.3) 0%, rgba(3, 115, 140, 0.3) 100%)",
          }} // Outer circle (acts as border)
        />
      </ParallaxLayer>
      <ParallaxLayer offset={offset} speed={0.4}>
        <div
          className="absolute w-full h-full"
          style={{
            clipPath: "circle(44% at 50% 50%)", // Slightly smaller to show the layer beneath as a border
            background:
              "radial-gradient(circle, rgba(242, 125, 114, 0.3) 0%, rgba(3, 115, 140, 0.3) 100%)",
          }}
        />
      </ParallaxLayer>{" "}
      <ParallaxLayer offset={offset} speed={0.6}>
        <motion.div
          className="absolute w-full h-full"
          style={{
            clipPath: "circle(32% at 50% 50%)",
            background:
              "radial-gradient(circle, rgba(242, 181, 128, 0.3) 0%, rgba(3, 115, 140, 0.3) 100%)",
          }}
          animate={glowAnimation}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={offset} speed={0.8}>
        <motion.div
          className="absolute w-full h-full"
          style={{
            clipPath: "circle(31% at 50% 50%)",
            background:
              "radial-gradient(circle, rgba(242, 181, 128, 0.3) 0%, rgba(3, 115, 140, 0.3) 100%)",
          }}
          animate={glowAnimation}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={offset} speed={1}>
        <CenterFull>
          <VStack className="bg-col-880 p-[3vh] border-900-md shadowBroadTight">
            <HStackFull className="justify-between">
              <VStack className="flex-shrink-0">
                {offset >= 2 ? (
                  <IconButton
                    type="unstyled"
                    iconClassName="text-col-100 text-[3.5vh]"
                    containerClassName="border-270-md hover:metallicEdgesSm"
                    icon={BiChevronsLeft}
                    onClick={() => handleButtonClick("start")} // Changed from "back" to "start"
                  />
                ) : (
                  <div className="text-transparent">_</div>
                )}
                {offset >= 1 ? (
                  <IconButton
                    type="unstyled"
                    iconClassName="text-col-100 text-[3.5vh]"
                    containerClassName="border-270-md hover:metallicEdgesSm"
                    icon={BiChevronLeft}
                    onClick={() => handleButtonClick("back")}
                  />
                ) : (
                  <div className="text-transparent">_</div>
                )}
              </VStack>
              <CenterHorizontalFull className="h-full">
                <span className="text-insane-looser text-col-100 textShadow">
                  Panel {offset + 1}
                </span>
              </CenterHorizontalFull>
              <VStack className="flex-shrink-0">
                {offset < totalPages - 1 ? (
                  <IconButton
                    type="unstyled"
                    iconClassName="text-col-100 text-[3.5vh]"
                    containerClassName="border-270-md hover:metallicEdgesSm"
                    icon={BiChevronsRight}
                    onClick={() => handleButtonClick("end")} // Changed from "forward" to "end"
                  />
                ) : (
                  <div className="text-transparent">_</div>
                )}
                {offset < totalPages - 1 ? (
                  <IconButton
                    type="unstyled"
                    iconClassName="text-col-100 text-[3.5vh]"
                    containerClassName="border-270-md hover:metallicEdgesSm"
                    icon={BiChevronRight}
                    onClick={() => handleButtonClick("forward")}
                  />
                ) : (
                  <></>
                )}
              </VStack>
            </HStackFull>
            <Box>
              <Image
                src={`https://picsum.photos/seed/${offset}/600/600`}
                alt="example"
              />
            </Box>
          </VStack>
        </CenterFull>
      </ParallaxLayer>
    </>
  );
};

export default function Parallax2() {
  const parallax = useRef<IParallax>(null);

  const scroll = (to: number) => {
    if (parallax.current) {
      console.log("Before time: ", new Date().toISOString());
      parallax.current.scrollTo(to);
      console.log("After time: ", new Date().toISOString());
    }
  };

  const totalPages = 10;
  const pages = Array.from({ length: totalPages });

  return (
    <div className="bg-radial3op50 w-full h-full overflow-x-scroll snap-x snap-always">
      <Parallax ref={parallax} pages={totalPages} horizontal>
        {pages.map((page, index) => (
          <Page
            totalPages={totalPages}
            key={index}
            offset={index}
            forwardClick={() => {
              if (index < pages.length - 1) {
                scroll(index + 1);
              }
            }}
            backClick={() => {
              if (index > 0) {
                scroll(index - 1);
              }
            }}
            scrollToStart={() => scroll(0)}
            scrollToEnd={() => scroll(totalPages - 1)}
            className="flex justify-center items-center bg-radial5op50 "
          />
        ))}
      </Parallax>
    </div>
  );
}
