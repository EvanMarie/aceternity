import VStackFull from "~/components/buildingBlocks/vStackFull";
import AnimatedText from "./animatedTitle";

export default function AnimatedTitleExamples() {
  return (
    <VStackFull className="h-full justify-evenly">
      <AnimatedText
        text="I come in from the top!"
        className="text-insane-loose font-bold"
        animationType="inFromTop"
        letterDelay={0.09}
      />
      <AnimatedText
        text="I arrive from the bottom."
        className="text-insane-loose font-bold"
        animationType="inFromBottom"
        letterDelay={0.09}
      />
      <AnimatedText
        text="I fly in from the left!"
        className="text-insane-loose font-bold"
        animationType="inFromLeft"
        letterDelay={0.09}
      />
      <AnimatedText
        text="I fly in from the right!"
        className="text-insane-loose font-bold"
        animationType="inFromRight"
        letterDelay={0.09}
      />
      <AnimatedText
        text="I fade in from the void!"
        className="text-insane-loose font-bold"
        animationType="fadeIn"
        letterDelay={0.1}
      />
      <AnimatedText
        text="I am some really great text!"
        className="text-insane-loose font-bold"
        animationType="custom"
        overallDuration={3}
        letterDuration={0.5}
        letterDelay={0.1}
        distanceAsVH
        xDistance={-100}
        yDistance={-100}
      />
    </VStackFull>
  );
}
