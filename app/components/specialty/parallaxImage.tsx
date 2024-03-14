import Box from "../buildingBlocks/box";
import FlexFull from "../buildingBlocks/flexFull";
import VStackFull from "../buildingBlocks/vStackFull";
import HStackFull from "../buildingBlocks/hStackFull";
import Icon from "../buildingBlocks/icon";
import { CgScrollV } from "react-icons/cg";
import Flex from "../buildingBlocks/flex";
import Image from "../buildingBlocks/image";

export default function ParallaxImage({
  dimensions = "w-[50vh] h-[50vh]",
  bgImage = "https://picsum.photos/seed/44/500/900",
  bgPosition = "bg-center",
  bgFit = "bg-cover",
  bgAttachment = "bg-fixed",
}: {
  dimensions?: string;
  bgImage?: string;
  bgPosition?: string;
  bgAttachment?: string;
  bgFit?: string;
}) {
  return (
    <>
      <Flex className="relative">
        <Box
          className={`${dimensions} border-970-md overflow-y-scroll ${bgAttachment} ${bgFit} ${bgPosition} bg-no-repeat shadowWideLoose 
        `}
          style={{ backgroundImage: `url(${bgImage})` }}
        ></Box>
      </Flex>
    </>
  );
}
