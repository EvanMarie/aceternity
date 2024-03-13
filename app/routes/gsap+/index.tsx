import gsap from "gsap";
import { createElement, useCallback, useEffect, useRef, useState } from "react";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import AnimationExample from "./components/animationExample";
import ScrollingSelector from "~/components/buildingBlocks/scrollingSelector";
import StaggerAnimationExample from "./components/staggerExample";
import HorizontalScrollingSelector from "~/components/buildingBlocks/horizontalScrollingSelector";
import Heading from "~/components/buildingBlocks/headingText";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export function FadeIn() {
  useEffect(() => {
    gsap.to("#animation", { duration: 1, opacity: 1 });
  }, []);
  return (
    <AnimationExample
      id="animation"
      text="Fade In"
      animationClass="opacity-0"
      heading="Fade In"
      description="A simple fade-in animation where an element gradually becomes visible."
      code='gsap.to("#animation", { duration: 1, opacity: 1 });'
    />
  );
}

export function HorizontalMovement() {
  useEffect(() => {
    gsap.to("#animation", { duration: 2, x: 150, opacity: 1 });
  }, []);

  return (
    <AnimationExample
      id="animation"
      text="X-Axis Movement"
      heading="Horizontal X-Axis Movement"
      description="Animate an element to move horizontally across the screen."
      animationClass="opacity-0"
      code='gsap.to("#animation", { duration: 2, x: 150, opacity: 1 });'
    />
  );
}

export function ScaleOut() {
  useEffect(() => {
    gsap.to("#animation", { duration: 1.5, scale: 0.4 });
  }, []);

  return (
    <AnimationExample
      id="animation"
      text="Scale Out"
      heading="Scaling"
      description="Animate an element to increase or decrease in size."
      code='gsap.to("#animation", { duration: 1.5, scale: 0.4 });'
    />
  );
}

export function ScaleIn() {
  useEffect(() => {
    gsap.to("#animation", { duration: 1.5, scale: 1.4 });
  }, []);

  return (
    <AnimationExample
      id="animation"
      text="Scale In"
      heading="Scaling"
      description="Animate an element to increase in size."
      code='gsap.to("#animation", { duration: 1.5, scale: 1.4 });'
    />
  );
}

export function Rotation() {
  useEffect(() => {
    gsap.to("#animation", { duration: 2, rotation: 360 });
  }, []);

  return (
    <AnimationExample
      id="animation"
      text="Rotation"
      heading="Rotation"
      description="Rotate an element around its center point."
      code='gsap.to("#animation", { duration: 2, rotation: 360 });'
    />
  );
}

export function Easing() {
  useEffect(() => {
    gsap.to("#animation", { duration: 2, x: 100, ease: "elastic.out(1, 0.3)" });
  }, []);

  return (
    <AnimationExample
      id="animation"
      text="Easing"
      heading="Easing"
      description="Easing functions can make animations more natural by accelerating or decelerating the motion."
      code='gsap.to("#animation", { duration: 2, x: 100, ease: "elastic.out(1, 0.3)" });'
    />
  );
}

export const Stagger: React.FC = () => {
  const animationParams = {
    duration: 0.5,
    opacity: 1,
    stagger: 0.5,
  };

  const items = [
    { id: "Item 1", bg: "bg-col-900" },
    { id: "Item 2", bg: "bg-col-800" },
    { id: "Item 3", bg: "bg-col-700" },
    { id: "Item 4", bg: "bg-col-600" },
    { id: "Item 5", bg: "bg-col-500" },
  ];

  return (
    <AnimationExample
      isMulti
      heading="Staggering"
      description="Staggering allows you to animate multiple elements with a delay between each one."
      code={`gsap.to("#animation-<ITEM>", { duration: 0.5, opacity: 1, stagger: 0.5 });`}
    >
      <StaggerAnimationExample
        items={items}
        animationParams={animationParams}
      />
    </AnimationExample>
  );
};

export function RepeatAndYoyo() {
  useEffect(() => {
    gsap.to("#animation", { duration: 1, x: 100, repeat: 3, yoyo: true });
  }, []);

  return (
    <AnimationExample
      id="animation"
      text="Repeat & Yoyo"
      heading="Repeat and Yoyo"
      description="Repeat an animation a number of times and reverse it each time."
      code='gsap.to("#animation", { duration: 1, x: 100, repeat: 3, yoyo: true });'
    />
  );
}

export function Timeline() {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to("#animation", { duration: 1, x: 100 })
      .to("#animation", { duration: 1, scale: 1.2 })
      .to("#animation", { duration: 1, rotation: 90 });
  }, []);

  return (
    <AnimationExample
      id="animation"
      text="Multiple"
      heading="Timeline"
      description="A timeline allows you to sequence multiple animations."
      code={`let tl = gsap.timeline();
tl.to("#animation", { duration: 1, x: 100 })
  .to("#animation", { duration: 1, scale: 1.5 })
  .to("#animation", { duration: 1, rotation: 90 });`}
    />
  );
}

interface Animation {
  name: string;
  component: React.FC<any>;
}

const animations: Animation[] = [
  {
    name: "Fade In",
    component: FadeIn,
  },
  {
    name: "Horizontal Movement",
    component: HorizontalMovement,
  },
  {
    name: "Scale In",
    component: ScaleIn,
  },
  {
    name: "Scale Out",
    component: ScaleOut,
  },
  {
    name: "Rotation",
    component: Rotation,
  },
  {
    name: "Easing",
    component: Easing,
  },
  {
    name: "Stagger",
    component: Stagger,
  },
  {
    name: "Repeat and Yoyo",
    component: RepeatAndYoyo,
  },
  {
    name: "Timeline",
    component: Timeline,
  },
];

export default function AnimationsOne() {
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);

  const handleAnimationChange = useCallback((selectedOption: string) => {
    const index = animations.findIndex((anim) => anim.name === selectedOption);
    setCurrentAnimationIndex(index);
  }, []);

  return (
    <VStackFull className="justify-evenly items-center h-full">
      <FlexFull className="h-15% items-center justify-center">
        <Flex className="bg-col-900 h-fit px-[2vh] py-[1vh] shadowBroadNormal">
          <Heading
            color="text-col-100"
            text="GSAP Introduction"
            shadow="textShadow"
            layout="tex-lg-loose md:text-xl-loose text-xxl-loose"
          />
        </Flex>
      </FlexFull>
      <FlexFull
        className="h-15% justify-center items-center md:w-85% xl:w-65% bg-white
      "
      >
        <HorizontalScrollingSelector
          showCurrent={false}
          selectedOnTop={false}
          options={animations.map((anim) => anim.name)}
          setExternalSelection={handleAnimationChange}
          selectedOption={animations[currentAnimationIndex].name}
          heading="Animations"
          bg="bg-col-500"
          border="border-980-md"
          showClose={false}
          buttonClassName="text-nowrap"
        />
      </FlexFull>

      <FlexFull className="justify-center items-center w-65% h-[70vh]">
        {createElement(animations[currentAnimationIndex].component)}
      </FlexFull>
    </VStackFull>
  );
}
