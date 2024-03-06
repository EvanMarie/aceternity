import FlexFull from "~/components/buildingBlocks/flexFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import FlashCard from "./components/advancedExamples/flashCard";
import ComponentExample from "./components/componentExample";
import FlashcardExplained from "./components/explanations/flashcardExplained";
import Rain from "./components/advancedExamples/rain";
import Flex from "~/components/buildingBlocks/flex";
import RainExplained from "./components/explanations/rainExplained";
import FlowerOfLife from "./components/advancedExamples/flowerOfLife";
import FlowerOfLifeExplained from "./components/explanations/flowerOfLifeExplained";
import Transition from "~/components/buildingBlocks/transition";

export default function AdvancedAnimations() {
  return (
    <Transition className="w-full h-full">
      <FlexFull className="h-full overflow-y-auto justify-center">
        <VStackFull
          className="md:w-80% xl:w-70% items-center p-[2vh] h-fit"
          gap="gap-[3vh]"
        >
          <ComponentExample
            title="3D Flashcard"
            descriptionContent={<FlashcardExplained />}
          >
            <FlashCard />
          </ComponentExample>
          <ComponentExample
            title="Rain Window"
            descriptionContent={<RainExplained />}
          >
            <Flex className="w-[60vh] h-[40vh] bg-100-linear6op75 insetShadowXl">
              <Rain />
            </Flex>
          </ComponentExample>
          <ComponentExample
            title="Flower of Life"
            descriptionContent={<FlowerOfLifeExplained />}
          >
            <FlowerOfLife />
          </ComponentExample>
        </VStackFull>
      </FlexFull>
    </Transition>
  );
}
