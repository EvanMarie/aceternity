import FlexFull from "~/components/buildingBlocks/flexFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import FlashCard from "./components/flashCard/flashCard";
import ComponentExample from "./components/componentExample";

export default function AdvancedAnimations() {
  return (
    <FlexFull className="h-full overflow-y-auto md:w-80% xl:w-70%">
      <VStackFull className="items-center p-[2vh]">
        <ComponentExample title="Flashcard">
          <FlashCard />
        </ComponentExample>
      </VStackFull>
    </FlexFull>
  );
}
