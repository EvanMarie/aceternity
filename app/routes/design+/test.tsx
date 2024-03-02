/* eslint-disable react/no-unescaped-entities */
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import VStack from "~/components/buildingBlocks/vStack";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function TextRoute() {
  return (
    <LayoutContainer>
      <VStack className="h-fit p-[2vh] bg-col-200 text-col-900 overflow-y-auto hover:bg-col-900 hover:text-col-200 transition-1000">
        This
      </VStack>
    </LayoutContainer>
  );
}
