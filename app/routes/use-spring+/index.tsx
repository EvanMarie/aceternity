import { div } from "three/examples/jsm/nodes/Nodes.js";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import Text from "~/components/buildingBlocks/text";
import SpringNav from "./components/springNav";

export default function Index() {
  return (
     <TransitionFull className="h-full bg-radial3op50 relative">
      <SpringNav activePanel="Intro" /><Text>INTRO</Text>
      </TransitionFull>
  );
}
