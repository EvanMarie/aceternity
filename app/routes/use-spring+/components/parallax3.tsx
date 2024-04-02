import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Heading from "~/components/buildingBlocks/headingText";
import Center from "~/components/buildingBlocks/center";

function Container({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Flex className={`w-screen h-[95vh] relative`}>
      <Center
        className={`w-[35vh] h-[20vh] bg-col-850 shadowBroadLoose border-900-md text-col-100 text-[10vh] ${className}`}
      >
        {children}
      </Center>
    </Flex>
  );
}

function ParallaxLayerContainer({
  offset,
  speed,
  sticky,
  position,
  label,
}: {
  offset?: number;
  speed?: number;
  sticky?: { start: number; end: number };
  position?: string;
  label?: string;
}) {
  return (
    <ParallaxLayer offset={offset} speed={speed} sticky={sticky}>
      <Container className={`absolute ${position}`}>
        <VStack gap="gap-[0px]" className="text-md-normal" align="items-start">
          <Center className="w-full">
            <Heading className="text-[1.5rem]" text={label} />
          </Center>
          {offset && (
            <HStackFull className="justify-between">
              <Text>offset:</Text>
              <span className="text-cyan-300">{offset}</span>
            </HStackFull>
          )}
          {speed && (
            <HStackFull className="justify-between">
              <Text>speed:</Text>
              <span className="text-cyan-300">{speed}</span>
            </HStackFull>
          )}
          {position && (
            <HStackFull className="justify-between">
              <Text>position:</Text>
              <span className="text-cyan-300">{position}</span>
            </HStackFull>
          )}
          {sticky && (
            <HStackFull>
              <Text>sticky: </Text>
              <span className="text-cyan-300">start: {sticky.start} </span>
              <span className="text-cyan-300">end: {sticky.end}</span>
            </HStackFull>
          )}
        </VStack>
      </Container>
    </ParallaxLayer>
  );
}

export default function Parallax3() {
  const parallax = useRef<IParallax>(null!);
  return (
    <Parallax
      ref={parallax}
      pages={6}
      config={{ mass: 1, tension: 300, friction: 60 }}
    >
      <ParallaxLayerContainer
        label="One"
        sticky={{ start: 0, end: 1.5 }}
        position="top-[5vh] left-[10vw]"
      />

      <ParallaxLayerContainer
        label="Two"
        sticky={{ start: 1.8, end: 2.5 }}
        position="top-[5vh] right-[19vw]"
      />

      <ParallaxLayerContainer
        label="Four"
        offset={0.6}
        speed={0.5}
        position="left-[30vw]"
      />

      <ParallaxLayerContainer
        label="Three"
        offset={0.9}
        speed={-0.25}
        position="left-[40vw]"
      />

      <ParallaxLayerContainer
        label="Five"
        offset={1.2}
        speed={2}
        position="right-[5vw]"
      />

      <ParallaxLayerContainer label="Six" offset={1.5} position="left-[60vw]" />

      <ParallaxLayerContainer
        label="Seven"
        offset={2.8}
        position="left-[50vw]"
      />

      <ParallaxLayerContainer
        label="Eight"
        offset={2.5}
        position="left-[40vw]"
      />
    </Parallax>
  );
}
