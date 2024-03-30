import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import Box from "~/components/buildingBlocks/box";
import Center from "~/components/buildingBlocks/center";
import Heading from "~/components/buildingBlocks/headingText";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";
import DescriptionModal from "./components/descriptionModal";
import CodeExample from "~/components/buildingBlocks/codeExample";

export default function ParallaxPages() {
  const verticalCenter = "flex items-center";

  function MovingBox({
    text,
    heading,
    className,
    bg,
  }: {
    text?: string;
    className?: string;
    heading?: string;
    bg?: string;
  }) {
    return (
      <Center className="w-1/2 h-screen">
        <VStack className="w-90% bg-col-940 p-[2vh] border-900-md shadowBroadTight">
          <Heading
            layout="text-[3vh] lg:text-[4vh]"
            text={heading}
            className="py-[2vh]"
          />
          <Center className="w-1/2 h-1/2 ">
            <Center
              className={`text-md h-[20vh] w-[40vw] text-col-100 shadowBroadTight border-900-md ${bg} ${className} font-mono font-semibold`}
            >
              <Text>{text}</Text>
            </Center>
          </Center>
        </VStack>
      </Center>
    );
  }
  return (
    <TransitionFull className="h-full bg-radial3op50 relative">
      <Box className="absolute bottom-[1vh] left-[1vh] z-10">
        <DescriptionModal title="Parallax Pages">
          <CodeExample textColor="text-col-100" textSize="text-sm">
            {`export default function ParallaxPages() {
  const verticalCenter = "flex items-center";

  function MovingBox({
    text,
    heading,
    className,
    bg,
  }: {
    text?: string;
    className?: string;
    heading?: string;
    bg?: string;
  }) {
    return (
      <Center className="w-1/2 h-screen">
        <VStack className="w-90% bg-col-940 p-[2vh] border-900-md shadowBroadTight">
          <Heading
            layout="text-[3vh] lg:text-[4vh]"
            text={heading}
            className="py-[2vh]"
          />
          <Center className="w-1/2 h-1/2 ">
            <Center
              className={\`text-md h-[20vh] w-[40vw] text-col-100 shadowBroadTight border-900-md \${bg} \${className} font-mono font-semibold\`}
            >
              <Text>{text}</Text>
            </Center>
          </Center>
        </VStack>
      </Center>
    );
  }
  return (
    <TransitionFull className="h-full bg-radial3op50 relative">
      <Parallax pages={7}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          className={\`\${verticalCenter} justify-center bg-col-920\`}
        >
          <MovingBox
            text="offset={0} speed={0.5}"
            heading="I am parallax layer 1."
            bg="bg-700-diagonal6op25"
          />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          className={\`\${verticalCenter} justify-start bg-col-820\`}
        >
          <MovingBox
            text="sticky={{start: 1, end: 3}}"
            heading="I am parallax layer 2."
            bg="bg-500-linear6op75"
          />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 4, end: 5 }}
          className={\`\${verticalCenter} justify-end bg-col-720\`}
        >
          <MovingBox
            text="sticky={{start: 4, end: 5}}"
            heading="I am parallax layer 3."
            bg="bg-500-linear6op75"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={1.5}
          className={\`\${verticalCenter} justify-end bg-col-620\`}
        >
          <MovingBox
            text="offset={1.5} speed={1.5}"
            heading="I am parallax layer 4."
            bg="bg-600-linear6op75"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={1.5}
          className="flex items-center justify-end bg-col-520"
        >
          <MovingBox
            text="offset={2.5} speed={1.5}"
            heading="I am parallax layer 5."
            bg="bg-900-diagonal3op50"
          />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 6, end: 7 }}
          className={\`\${verticalCenter} justify-start bg-col-820\`}
        >
          <MovingBox
            text="sticky={{start: 6, end: 7}}"
            heading="I am parallax layer 6."
            bg="bg-500-linear6op75"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={1.5}
          className={\`\${verticalCenter} justify-start bg-col-720\`}
        >
          <MovingBox
            text="offset={5} speed={1.5}"
            bg="bg-500-linear6op75"
            heading="I am parallax layer 7."
          />
        </ParallaxLayer>
      </Parallax>
    </TransitionFull>
  );
}`}
          </CodeExample>
        </DescriptionModal>
      </Box>
      <Parallax pages={7}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          className={`${verticalCenter} justify-center bg-col-920`}
        >
          <MovingBox
            text="offset={0} speed={0.5}"
            heading="I am parallax layer 1."
            bg="bg-700-diagonal6op25"
          />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          className={`${verticalCenter} justify-start bg-col-820`}
        >
          <MovingBox
            text="sticky={{start: 1, end: 3}}"
            heading="I am parallax layer 2."
            bg="bg-500-linear6op75"
          />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 4, end: 5 }}
          className={`${verticalCenter} justify-end bg-col-720`}
        >
          <MovingBox
            text="sticky={{start: 4, end: 5}}"
            heading="I am parallax layer 3."
            bg="bg-500-linear6op75"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={1.5}
          className={`${verticalCenter} justify-end bg-col-620`}
        >
          <MovingBox
            text="offset={1.5} speed={1.5}"
            heading="I am parallax layer 4."
            bg="bg-600-linear6op75"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={1.5}
          className="flex items-center justify-end bg-col-520"
        >
          {" "}
          <MovingBox
            text="offset={2.5} speed={1.5}"
            heading="I am parallax layer 5."
            bg="bg-900-diagonal3op50"
          />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 6, end: 7 }}
          className={`${verticalCenter} justify-start bg-col-820`}
        >
          <MovingBox
            text="sticky={{start: 6, end: 7}}"
            heading="I am parallax layer 6."
            bg="bg-500-linear6op75"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={1.5}
          className={`${verticalCenter} justify-start bg-col-720`}
        >
          <MovingBox
            text="offset={5} speed={1.5}"
            bg="bg-500-linear6op75"
            heading="I am parallax layer 7."
          />
        </ParallaxLayer>
      </Parallax>
    </TransitionFull>
  );
}
