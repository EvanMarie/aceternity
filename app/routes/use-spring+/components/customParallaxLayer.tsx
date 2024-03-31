import { ParallaxLayer } from "@react-spring/parallax";
import CenterFull from "~/components/buildingBlocks/centerFull";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";

export default function CustomParallaxLayer({
  offset,
  speed,
  className,
  sticky,
  layerNum,
  info,
  opacity,
  children,
}: {
  offset?: number;
  speed?: number;
  className?: string;
  sticky?: { start: number; end: number };
  layerNum?: string;
  info?: string[];
  opacity?: number;
  children?: React.ReactNode;
}) {
  return (
    <ParallaxLayer
      offset={offset}
      speed={speed}
      sticky={sticky}
      className={className}
      style={{ opacity: opacity }}
    >
      {" "}
      <CenterFull>
        {" "}
        {children}
        <VStack
          gap="gap-[0px]"
          className="bg-100-linear4op50 shadowBroadTight h-[40vh] w-[40vh] justify-evenly border-900-md"
        >
          <Text className="text-[3vh] font-semibold">
            Parallax Layer: {layerNum}
          </Text>
          <VStack className="text-[2.4vh]" gap="gap-[0px]">
            <Text>
              <b>Offset: </b>
              {offset}
            </Text>
            <Text>
              <b>Speed:</b> {speed}
            </Text>

            {opacity && (
              <Text>
                <b>Opacity:</b> {opacity}{" "}
              </Text>
            )}
          </VStack>

          {info?.map((text, i) => (
            <Text key={i}>{text}</Text>
          ))}
        </VStack>
      </CenterFull>
    </ParallaxLayer>
  );
}
