import Box from "~/components/buildingBlocks/box";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function Test() {
  return (
    <LayoutContainer className="justify-center p-[4vh] bg-col-170">
      <VStackFull>This</VStackFull>
    </LayoutContainer>
  );
}
