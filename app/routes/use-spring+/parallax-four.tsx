import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import SpringNav from "./components/springNav";
import Box from "~/components/buildingBlocks/box";
import CodeExample from "~/components/buildingBlocks/codeExample";
import DescriptionModal from "./components/descriptionModal";
import Parallax2 from "./components/parallax2";
import Parallax3 from "./components/parallax3";
import Parallax4 from "./components/parallax4";

export default function ParallaxFour() {
  return (
    <TransitionFull className="h-full bg-radial3op50 relative pt-[5vh]">
      <SpringNav activePanel="Ex 3" />
      <Box className="absolute bottom-[1vh] left-[1vh] z-10">
        <DescriptionModal title="Parallax">
          <CodeExample textColor="text-col-100" textSize="text-sm">
            {``}
          </CodeExample>
        </DescriptionModal>
      </Box>
      <Parallax4 />
    </TransitionFull>
  );
}
