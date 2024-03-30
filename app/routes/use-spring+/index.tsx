import { div } from "three/examples/jsm/nodes/Nodes.js";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import Text from "~/components/buildingBlocks/text";
import SpringNav from "./components/springNav";
import CenterFull from "~/components/buildingBlocks/centerFull";

export default function Index() {
  return (
    <TransitionFull className="h-full bg-radial3op50 relative">
      <CenterFull className="pt-[5vh]">
        <SpringNav activePanel="Intro" />
        <Text>INTRO</Text>
      </CenterFull>
    </TransitionFull>
  );
}
