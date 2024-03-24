import { CgSmile } from "react-icons/cg";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import CenterFull from "~/components/buildingBlocks/centerFull";
import DrawerWithButton from "~/components/buildingBlocks/drawerWithButton";
import StaggeredMenu from "./various-new/staggerMenu";

export default function Test() {
  return (
    <CenterFull>
      <StaggeredMenu />
    </CenterFull>
  );
}
