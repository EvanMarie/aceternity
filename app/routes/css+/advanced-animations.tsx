import FlexFull from "~/components/buildingBlocks/flexFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import FlashCard from "./components/flashCard";
import ComponentExample from "./components/componentExample";
import FlashcardExplained from "./components/flashcardExplained";

export default function AdvancedAnimations() {
  return (
    <FlexFull className="h-full overflow-y-auto md:w-80% xl:w-70%">
      <VStackFull className="items-center p-[2vh]" gap="gap-[3vh]">
        <ComponentExample
          title="3D Flashcard"
          descriptionContent={<FlashcardExplained />}
        >
          <FlashCard />
        </ComponentExample>
      </VStackFull>
    </FlexFull>
  );
}
