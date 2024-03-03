import gsap from "gsap";
import { createElement, useCallback, useEffect, useState } from "react";
import Box from "~/components/buildingBlocks/box";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Wrap from "~/components/buildingBlocks/wrap";
import AnimationExample from "./components/animationExample";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import ScrollingSelector from "~/components/buildingBlocks/scrollingSelector";

export function FadeIn() {
  useEffect(() => {
    gsap.to("#animation", { duration: 1, opacity: 1 });
  }, []);
  return (
    <AnimationExample
      id="animation"
      text="Example 1"
      animationClass="opacity-0"
      heading="Fade In"
      description="A simple fade-in animation where an element gradually becomes visible."
      code='gsap.to("#animation", { duration: 1, opacity: 1 });'
    />
  );
}

export function HorizontalMovement() {
  useEffect(() => {
    gsap.to("#animation", { duration: 2, x: 50, opacity: 1 });
  }, []);

  return (
    <AnimationExample
      id="animation"
      text="Example 2"
      heading="Horizontal Movement"
      description="Animate an element to move horizontally across the screen."
      animationClass="opacity-0"
      code='gsap.to("#animation", { duration: 2, x: 50, opacity: 1 });'
    />
  );
}

export function Scaling() {
  useEffect(() => {
    gsap.to("#animation", { duration: 1.5, scale: 0.4 });
  }, []);

  return (
    <AnimationExample
      id="animation"
      text="Example 3"
      heading="Scaling"
      description="Animate an element to increase or decrease in size."
      code='gsap.to("#animation", { duration: 1.5, scale: 0.4 });'
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
      text="Example 4"
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
      text="Example 5"
      heading="Easing"
      description="Easing functions can make animations more natural by accelerating or decelerating the motion."
      code='gsap.to("#animation", { duration: 2, x: 100, ease: "elastic.out(1, 0.3)" });'
    />
  );
}

export function Staggering() {
  useEffect(() => {
    gsap.to("#animation", { duration: 0.5, opacity: 1, stagger: 0.2 });
  }, []);

  return (
    <AnimationExample
      id="animation"
      text="Example 6"
      heading="Staggering"
      description="Staggering allows you to animate multiple elements with a delay between each one."
      code='gsap.to("animation", { duration: 0.5, opacity: 1, stagger: 0.2 });'
    />
  );
}

export function RepeatAndYoyo() {
  useEffect(() => {
    gsap.to("#animation", { duration: 1, x: 100, repeat: 3, yoyo: true });
  }, []);

  return (
    <AnimationExample
      id="animation"
      text="Example 7"
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
      text="Example 8"
      heading="Timeline"
      description="A timeline allows you to sequence multiple animations."
      code={`let tl = gsap.timeline();
tl.to("#animation", { duration: 1, x: 100 })
  .to("#animation", { duration: 1, scale: 1.5 })
  .to("#animation", { duration: 1, rotation: 90 });`}
    />
  );
}

export function ScrollTrigger() {
  useEffect(() => {
    gsap.to("#animation", {
      scrollTrigger: "#nine",
      x: 200,
      duration: 3,
    });
  }, []);

  return (
    <AnimationExample
      id="animation"
      text="Example 9"
      heading="Scroll Trigger"
      description="Start an animation when an element enters the viewport."
      code={`gsap.to("#animation", {
  scrollTrigger: "#animation",
  x: 400,
  duration: 3,
});`}
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
    name: "Scaling",
    component: Scaling,
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
    name: "Staggering",
    component: Staggering,
  },
  {
    name: "Repeat and Yoyo",
    component: RepeatAndYoyo,
  },
  {
    name: "Timeline",
    component: Timeline,
  },
  {
    name: "Scroll Trigger",
    component: ScrollTrigger,
  },
];

export default function AnimationsOne() {
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);

  // Correctly use useCallback to ensure the function is properly memoized
  const handleAnimationChange = useCallback((selectedOption: string) => {
    // Find the index of the animation based on the selected option's name
    const index = animations.findIndex((anim) => anim.name === selectedOption);
    // Update the state with the new index
    setCurrentAnimationIndex(index);
  }, []);

  return (
    <FlexFull className="justify-center items-center">
      <Flex className="w-35% h-[70vh] px-[2vh]">
        <ScrollingSelector
          selectedOnTop={false}
          options={animations.map((anim) => anim.name)}
          setExternalSelection={handleAnimationChange} // Correctly pass the function here
          selectedOption={animations[currentAnimationIndex].name}
          heading="Animations"
          bg="bg-col-500"
          border="border-980-md"
        />
      </Flex>
      <Flex className="justify-center items-center w-65% h-[70vh]">
        {createElement(animations[currentAnimationIndex].component)}
      </Flex>
    </FlexFull>
  );
}
