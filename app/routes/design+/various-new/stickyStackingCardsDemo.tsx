import Center from "~/components/buildingBlocks/center";
import CenterFull from "~/components/buildingBlocks/centerFull";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import VStack from "~/components/buildingBlocks/vStack";
import VStackFull from "~/components/buildingBlocks/vStackFull";

function Section({
  title,
  height = "h-screen",
  innerWidth = "w-full",
  innerHeight = "h-full",
  position,
  bg,
}: {
  title: string;
  height?: string;
  innerWidth?: string;
  innerHeight?: string;
  position: string;
  bg?: string;
}) {
  const contentStyles =
    "h-[30vh] w-30% bg-col-100 text-too-big-loose shadow-shadowBroadLoose";
  return (
    <CenterFull
      className={`w-screen ${height} sticky ${position} flex-shrink-0 text-col-100 text-too-big-loose font-semibold`}
    >
      <FlexFull className="h-full p-[2vh] ">
        <VStack
          className={`${bg} ${innerWidth} ${innerHeight} py-[1vh] justify-between shadowBroadLoose border-970-md`}
        >
          <CenterHorizontalFull className="text-insane-loose">
            {title}
          </CenterHorizontalFull>
          <HStackFull className="justify-evenly text-col-900 h-fit">
            <Center className={contentStyles}>Content 1</Center>
            <Center className={contentStyles}>Content 2</Center>
            <Center className={contentStyles}>Content 3</Center>
          </HStackFull>
          <CenterHorizontalFull className="text-insane-loose">
            {title}
          </CenterHorizontalFull>
        </VStack>
      </FlexFull>
    </CenterFull>
  );
}

export default function StickStackingCards() {
  return (
    <FlexFull className=" h-screen fixed top-0 left-0 overflow-y-auto">
      <VStackFull
        className="bg-col-200 h-fit flex-shrink-0 relative"
        gap="gap-[0.1vh]"
      >
        <Section title="Section 1" position="top-0" bg="bg-col-800" />
        <Section
          title="Section 2"
          position="top-[10vh]"
          bg="bg-col-700"
          height="h-[90vh]"
          innerWidth="w-95%"
          innerHeight="h-[80vh]"
        />
        <Section
          title="Section 3"
          position="top-[20vh]"
          bg="bg-col-600"
          height="h-[80vh]"
          innerWidth="w-90%"
          innerHeight="h-[70vh]"
        />
        <Section
          title="Section 4"
          position="top-[30vh]"
          bg="bg-col-500"
          height="h-[70vh]"
          innerWidth="w-85%"
          innerHeight="h-[60vh]"
        />
        <Section
          title="Section 4"
          position="top-[40vh]"
          bg="bg-col-400"
          height="h-[60vh]"
          innerWidth="w-75%"
          innerHeight="h-[50vh]"
        />
        <Section title="Section 1" position="top-0" bg="bg-col-300" />
      </VStackFull>
    </FlexFull>
  );
}
