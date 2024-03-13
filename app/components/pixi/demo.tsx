import { reactPixi, pixi, loadReactPix } from "~/utils/pixi";
//import { Stage, Container, Sprite, Text } from "@pixi/react";
import { useEffect, useMemo, useState } from "react";

export const SimplestDemo = () => {
  const [activeReactPixi, setActiveReactPixi] = useState(reactPixi);
  const [activePixi, setActivePixi] = useState(pixi);
  const { BlurFilter } = activePixi || {};
  const blurFilter = useMemo(
    () => (BlurFilter ? new BlurFilter(4) : null),
    [activePixi]
  );

  useEffect(() => {
    loadReactPix().then(() => {
      setActiveReactPixi(reactPixi);
      setActivePixi(pixi);
    });
  }, []);

  const { Stage, Container, Sprite, Text } = activeReactPixi || {};
  return Stage ? (
    <Stage>
      <Sprite
        image="/images/fallbackAvatar.png"
        x={400}
        y={270}
        anchor={{ x: 0.5, y: 0.5 }}
      />

      <Container x={400} y={330}>
        <Text
          text="Hello World"
          anchor={{ x: 0.5, y: 0.5 }}
          filters={[blurFilter]}
        />
      </Container>
    </Stage>
  ) : null;
};
