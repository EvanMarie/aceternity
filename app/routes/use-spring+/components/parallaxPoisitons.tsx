import { ParallaxLayer } from "@react-spring/parallax";
import CenterFull from "~/components/buildingBlocks/centerFull";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";

export default function ParallaxPositions({
  numPages,
  increment = 0.25,
}: {
  numPages: number;
  increment?: number;
}) {
  function generateIncrements({
    numPages,
    increment,
  }: {
    numPages: number;
    increment: number;
  }) {
    const result = [];
    for (let i = 0; i <= numPages; i += increment) {
      result.push(i);
      // If the increment leads to surpassing numPages, break the loop
      if (i + increment > numPages && i !== numPages) {
        result.push(numPages);
        break;
      }
    }
    return result;
  }

const incrementsArray = generateIncrements({ numPages, increment });

  return (
    <>
      {incrementsArray.map((offset) => (
        <ParallaxLayer
          offset={offset}
          speed={1}
          className="absolute top-0 left-1/2"
        >
          <FlexFull className="h-full">
            <Flex className="p-[1vh]">
              <Flex className="bg-col-930 p-[1vh] border-900-md shadowBroadTight h-fit text-col-100 font-mono text-sm">
                offset: {offset.toFixed(2)}
              </Flex>
            </Flex>
          </FlexFull>
        </ParallaxLayer>
      ))}
    </>
  );
}
