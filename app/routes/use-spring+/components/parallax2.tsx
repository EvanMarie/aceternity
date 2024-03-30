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
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";

interface PageProps {
  offset: number;
  backClick: () => void | undefined;
  forwardClick: () => void | undefined;
  className?: string;
  totalPages?: number;
}

const Page: React.FC<PageProps> = ({
  offset,
  backClick,
  forwardClick,
  className,
  totalPages = 10,
}) => {
  const glowAnimation = useAnimation();
  const bgClass = className ? className : "bg-radial5op75"; // Default background class

  const handleButtonClick = async (direction: "forward" | "back") => {
    // Start a more pronounced glow effect
    glowAnimation
      .start({
        scale: 1.05,
        background:
          "radial-gradient(circle, rgba(69, 35, 62, 0.5) 0%, rgba(156, 104, 146, 0.5) 100%)",
        transition: {
          duration: 1,
          ease: "linear",
        },
      })
      .then(() => {
        // After the glow, return to normal
        glowAnimation.start({
          scale: 1.1,
          background:
            "radial-gradient(circle, rgba(156, 104, 146, 0.5) 0%, rgba(69, 35, 62, 0.5) 100%)",
          transition: {
            duration: 1,
            ease: "linear",
          },
        });
      });

    if (direction === "forward" && offset < totalPages - 1) {
      forwardClick();
    } else if (direction === "back" && offset > 0) {
      backClick();
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
          className={`absolute w-full h-full`}
          style={{
            clipPath: "circle(50% at 50% 50%)",
            background:
              "radial-gradient(circle, rgba(242, 181, 128, 0.5) 0%, rgba(3, 115, 140, 0.5) 100%)",
          }} // Circle at the center
        />
      </ParallaxLayer>
      <ParallaxLayer offset={offset} speed={0.6}>
        <motion.div
          className={`absolute w-full h-full`}
          style={{
            clipPath: "circle(40% at 50% 50%)",
            boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.5)",
            background:
              "radial-gradient(circle, rgba(242, 125, 114, 0.5) 0%, rgba(156, 104, 146, 0.5) 100%)",
          }}
          animate={glowAnimation}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={offset} speed={1.2}>
        <CenterFull>
          <VStack className="bg-col-660 p-[2vh] border-900-md shadowBroadTight">
            <span className="text-insane-looser text-col-100 textShadow">
              Panel {offset + 1}
            </span>
            <HStackFull className="justify-between">
              {offset >= 1 ? (
                <IconButton
                  icon={BiChevronLeft}
                  onClick={() => handleButtonClick("back")}
                />
              ) : (
                <div className="text-transparent">_</div>
              )}
              {offset < totalPages - 1 ? (
                <IconButton
                  icon={BiChevronRight}
                  onClick={() => handleButtonClick("forward")}
                />
              ) : (
                <></>
              )}
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
    <div className="bg-100-radial3op25 w-full h-full overflow-x-scroll snap-x snap-always">
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
              } else {
                undefined;
              }
            }}
            className="flex justify-center items-center bg-radial5op50 "
          />
        ))}
      </Parallax>
    </div>
  );
}
