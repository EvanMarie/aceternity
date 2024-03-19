import React from "react";
import AnimatedText from "./various-new/animatedTitle";
import VStackFull from "~/components/buildingBlocks/vStackFull";

const AnimatedTextRoute: React.FC = () => {
  return (
    <VStackFull className="h-full justify-evenly">
      <AnimatedText
        text="I come in from the top!"
        className="text-insane-loose font-bold"
        direction="top"
        delay={0.09}
      />
      <AnimatedText
        text="I arrive from the bottom."
        className="text-insane-loose font-bold"
        direction="bottom"
        delay={0.09}
      />
      <AnimatedText
        text="I fly in from the left"
        className="text-insane-loose font-bold"
        direction="left"
        delay={0.09}
      />
      <AnimatedText
        text="I fly in from the right!"
        className="text-insane-loose font-bold"
        direction="right"
        delay={0.09}
      />
    </VStackFull>
  );
};

export default AnimatedTextRoute;
