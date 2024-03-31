import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Flex from "~/components/buildingBlocks/flex";
import Box from "~/components/buildingBlocks/box";
import CenterFull from "~/components/buildingBlocks/centerFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import VStack from "~/components/buildingBlocks/vStack";
import Text from "~/components/buildingBlocks/text";

function CustomParallaxLayer({
  offset,
  speed,
  className,
  sticky,
  layerNum,
  info,
}: {
  offset?: number;
  speed?: number;
  className?: string;
  sticky?: { start: number; end: number };
  layerNum?: string;
  info?: string[];
}) {
  return (
    <ParallaxLayer
      offset={offset}
      speed={speed}
      sticky={sticky}
      className={className}
    >
      <CenterFull>
        <VStack
          gap="gap-[0px]"
          className="bg-100-linear4op50 shadowBroadTight h-[40vh] w-[40vh] justify-evenly border-900-md"
        >
          <Text className="text-[3vh] font-semibold">
            Layer Number: {layerNum}
          </Text>
          <VStack className="text-[2.4vh]">
            <Text>
              <b>Offset: </b>
              {offset}
            </Text>
            <Text>
              <b>Speed:</b> {speed}
            </Text>
          </VStack>

          {info?.map((text, i) => (
            <Text key={i}>{text}</Text>
          ))}
        </VStack>
      </CenterFull>
    </ParallaxLayer>
  );
}

export default function Parallax4() {
  const parallax = useRef<IParallax>(null!);
  return (
    <Flex className="w-screen h-screen bg-radial6op75">
      <Parallax
        ref={parallax}
        pages={6}
        config={{ mass: 1, tension: 280, friction: 60 }}
      >
        <CustomParallaxLayer
          offset={0}
          speed={1}
          className="bg-col-950"
          layerNum="One"
        />
        <ParallaxLayer offset={2} speed={1} className="bg-col-850" />
        {/* 
        <ParallaxLayer offset={0} speed={0} factor={3} className="bg-col-750" />

        <ParallaxLayer
          offset={2.5}
          speed={-0.6}
          style={{ pointerEvents: "none" }}
          className="bg-col-250"
        >
          <Box
            style={{ width: "30%", marginLeft: "40%" }}
            className="p-[2vh] bg-col-100"
          >
            Large Item 1
          </Box>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={1.2}
          style={{ opacity: 0.1 }}
          className="bg-col-350"
        >
          <Box
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
            className="p-[2vh] bg-col-100"
          >
            Small Item 1
          </Box>

          <Box
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
            className="p-[2vh] bg-col-100"
          >
            Small Item 2
          </Box>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.25}
          speed={0.5}
          style={{ opacity: 0.7 }}
          className="bg-col-450"
        >
          <Box
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
            className="p-[2vh] bg-col-100"
          >
            Small Item 3
          </Box>

          <Box
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
            className="p-[2vh] bg-col-100"
          >
            Small Item 4
          </Box>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.2}
          style={{ opacity: 0.7 }}
          className="bg-col-550"
        >
          <Box
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
            className="p-[2vh] bg-col-100"
          >
            Small Item 5
          </Box>
          <Box
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
            className="p-[2vh] bg-col-100"
          >
            Small Item 6
          </Box>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.25}
          speed={-0.1}
          style={{ opacity: 0.7 }}
          className="bg-col-650"
        >
          <Box
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
            className="p-[2vh] bg-col-100"
          >
            Small Item 7
          </Box>
          <Box
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
            className="p-[2vh] bg-col-100"
          >
            Small Item 8
          </Box>
          <Box
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
            className="p-[2vh] bg-col-100"
          >
            Small Item 9
          </Box>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.6}
          speed={0.4}
          style={{ opacity: 0.7 }}
          className="bg-col-750"
        >
          <Box
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
            className="p-[2vh] bg-col-100"
          >
            Small Item 10
          </Box>
          <Box
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
            className="p-[2vh] bg-col-100"
          >
            Small Item 11
          </Box>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={-0.9}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
          className="bg-col-850"
        >
          <Box
            style={{ width: "60%", height: "40%" }}
            className="p-[2vh] bg-col-100"
          >
            Large Item 1
          </Box>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={-0.3} className="bg-col-160" />

        <ParallaxLayer
          offset={2.75}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="bg-col-950"
        >
          <Box style={{ width: "20%" }} className="p-[2vh] bg-col-100">
            Large Item 2
          </Box>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.5}
          speed={0.5}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="bg-col-150"
        >
          <Box style={{ width: "40%" }} className="p-[2vh] bg-col-100">
            Large Item 3
          </Box>
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="bg-col-250"
          onClick={() => parallax.current.scrollTo(0)}
        >
          <Box style={{ width: "40%" }} className="p-[2vh] bg-col-100">
            Large Item 4
          </Box>
        </ParallaxLayer> */}
      </Parallax>
    </Flex>
  );
}
