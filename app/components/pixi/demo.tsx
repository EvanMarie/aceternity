import { reactPixi, pixi, loadReactPix, useTick } from "~/utils/pixi";
//import { Stage, Container, Sprite, Text } from "@pixi/react";
import React, { useEffect, useMemo, useState } from "react";
import { render } from "react-dom";

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
          filters={blurFilter ? [blurFilter] : undefined}
        />
      </Container>
    </Stage>
  ) : null;
};

let i = 0;

export const Bunny = () => {
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

  // states
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotation, setRotation] = useState(0);

  // custom ticker
  useTick((delta) => {
    i += 0.05 * delta;

    setX(Math.sin(i) * 100);
    setY(Math.sin(i / 1.5) * 100);
    setRotation(-10 + Math.sin(i / 10 + Math.PI * 2) * 10);
  });

  const BunnySprite = () => (
    <Sprite
      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
      anchor={0.5}
      x={x}
      y={y}
      rotation={rotation}
    />
  );

  return Stage
    ? render(
        <>
          {Stage ? (
            <Stage
              width={300}
              height={300}
              options={{ autoDensity: true, backgroundColor: 0x01262a }}
            >
              <Container x={150} y={150}>
                <BunnySprite />
              </Container>
            </Stage>
          ) : null}
        </>,
        document.body
      )
    : null;
};
