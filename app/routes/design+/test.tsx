import React from "react";
import AnimatedText from "./various-new/animatedTitle";
import VStackFull from "~/components/buildingBlocks/vStackFull";

const AnimatedTextRoute: React.FC = () => {
  return (
    <VStackFull className="h-full justify-evenly">
      <AnimatedText
        text="Hello, World!"
        className="text-insane-loose font-bold"
        direction="bottom"
        delay={0.05}
      />
      <AnimatedText
        text="This is a test."
        className="text-insane-loose font-bold"
        direction="left"
        delay={0.04}
      />
      <AnimatedText
        text="Animated Text Component"
        className="text-insane-loose font-bold"
        direction="right"
        delay={0.04}
      />
    </VStackFull>
  );
};

export default AnimatedTextRoute;
