import Center from "~/components/buildingBlocks/center";
import CenterFull from "~/components/buildingBlocks/centerFull";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";

function Section({
  title,
  height = "h-screen",
  position,
  bg,
}: {
  title: string;
  height?: string;
  position: string;
  bg?: string;
}) {
  return (
    <CenterFull
      className={`w-screen ${height} sticky ${position} flex-shrink-0 text-col-100 text-too-big-loose font-semibold`}
    >
      <FlexFull className="h-full p-[2vh] ">
        <VStackFull
          className={` ${bg} h-full py-[1vh] justify-between shadowBroadLoose border-970-md`}
        >
          <CenterHorizontalFull className="text-insane-loose">
            {title}
          </CenterHorizontalFull>
          <HStackFull className="justify-evenly text-col-900 h-fit">
            <Center className="h-[30vh] w-30% bg-col-100 text-too-big-loose">
              Content 1
            </Center>
            <Center className="h-[30vh] w-30% bg-col-100 text-too-big-loose">
              Content 2
            </Center>
            <Center className="h-[30vh]   w-30% bg-col-100 text-too-big-loose">
              Content 3
            </Center>
          </HStackFull>
          <CenterHorizontalFull className="text-insane-loose">
            {title}
          </CenterHorizontalFull>
        </VStackFull>
      </FlexFull>
    </CenterFull>
  );
}

export default function HorizontalParallaxScroll() {
  return (
    <FlexFull className=" h-screen fixed top-0 left-0 overflow-y-auto">
      <VStackFull
        className="bg-col-200 h-fit flex-shrink-0 relative"
        gap="gap-[0.1vh]"
      >
        <Section title="Section 1" position="top-0" bg="bg-col-800" />
        <Section
          title="Section 2"
          position="top-[12vh]"
          bg="bg-col-700"
          height="h-[88vh]"
        />
        <Section
          title="Section 3"
          position="top-[24vh]"
          bg="bg-col-600"
          height="h-[76vh]"
        />
        <Section
          title="Section 4"
          position="top-[36vh]"
          bg="bg-col-500"
          height="h-[64vh]"
        />
      </VStackFull>
    </FlexFull>
  );
}
