import Box from "~/components/buildingBlocks/box";
import TransitionFullScreen from "~/components/buildingBlocks/transitionFullScreen";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Fireworks from "../css+/components/advancedExamples/fireworks";

export default function Test() {
  return (
    <TransitionFullScreen>
      <CenterHorizontalFull>
        <Box className="h-[60vh] w-[60vh] bg-col-990 relative shadow3DXl">
          <Fireworks placementClassName="right-[12vh] bottom-[15vh]" />
          <Fireworks delay={1} placementClassName="top-[12vh] left-[15vh]" />
          <Fireworks delay={1.5} placementClassName="top-[12vh] right-[15vh]" />
          <Fireworks
            delay={1.75}
            placementClassName="bottom-[12vh] left-[15vh]"
          />
          <Fireworks delay={2} placementClassName="top-[25vh] right-[35vh]" />
        </Box>
      </CenterHorizontalFull>
    </TransitionFullScreen>
  );
}
