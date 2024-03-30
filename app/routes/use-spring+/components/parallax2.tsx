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

interface PageProps {
  offset: number;
  backClick: () => void | undefined;
  forwardClick: () => void | undefined;
  className?: string;
}

const Page: React.FC<PageProps> = ({
  offset,
  backClick,
  forwardClick,
  className,
}) => {
  const bgClass = className ? className : "bg-radial5op75"; // Default background class
  const backDisabled = backClick === undefined;
  const forwardDisabled = forwardClick === undefined;
  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2}>
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
        <div
          className={`absolute w-full h-full`}
          style={{
            clipPath: "circle(40% at 50% 50%)",
            boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.5)",
            background:
              "radial-gradient(circle, rgba(242, 125, 114, 0.5) 0%, rgba(156, 104, 146, 0.5) 100%)",
          }} // Smaller circle at the center
        />
      </ParallaxLayer>
      <ParallaxLayer offset={offset} speed={1.2}>
        <CenterFull>
          <VStack className="bg-col-960 p-[2vh] border-900-md shadowBroadTight">
            <span className="text-insane-looser text-col-100">
              Panel {offset + 1}
            </span>
            <HStackFull className="justify-between">
              <IconButton
                icon={BiChevronLeft}
                // type="unstyled"
                onClick={forwardClick}
                isDisabled={forwardDisabled}
              />
              <IconButton
                icon={BiChevronRight}
                // type="unstyled"
                onClick={backClick}
                isDisabled={backDisabled}
              />
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
    <div className="bg-100-radial3op25 w-full h-full">
      <Parallax ref={parallax} pages={totalPages} horizontal>
        {pages.map((page, index) => (
          <Page
            key={index}
            offset={index}
            forwardClick={() => {
              if (index === pages.length - 1) {
                scroll(0);
              }
            }}
            backClick={() => {
              if (index === 0) {
                scroll(pages.length - 1);
              }
            }}
            className="flex justify-center items-center bg-radial5op50"
          />
        ))}
      </Parallax>
    </div>
  );
}
