import gsap from "gsap";
import { useEffect } from "react";
import Box from "~/components/buildingBlocks/box";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Wrap from "~/components/buildingBlocks/wrap";
import AnimationExample from "./components/animationExample";

export default function One() {
  useEffect(() => {
    gsap.to("#one", { duration: 1, opacity: 1 });
    gsap.to("#two", { duration: 2, x: 50, opacity: 1 });
    gsap.to("#three", { duration: 1.5, scale: 1.5 });
    gsap.to("#four", { duration: 2, rotation: 360 });
    gsap.to("#five", { duration: 2, x: 100, ease: "elastic.out(1, 0.3)" });
    gsap.to(".item", { duration: 0.5, opacity: 1, stagger: 0.2 });
    gsap.to("#seven", { duration: 1, x: 100, repeat: 3, yoyo: true });

    let tl = gsap.timeline();
    tl.to("#eight", { duration: 1, x: 100 })
      .to("#eight", { duration: 1, scale: 1.5 })
      .to("#eight", { duration: 1, rotation: 90 });

    gsap.to("#nine", {
      scrollTrigger: "#nine", // start the animation when "#nine" enters the viewport
      x: 400,
      duration: 3,
    });
  }, []);

  return (
    <Wrap className="p-[1.5vh] h-full overflow-auto gap-[2vh]">
      <AnimationExample
        id="one"
        text="Example 1"
        animationClass="opacity-0"
        heading="Fade In"
        description="A simple fade-in animation where an element gradually becomes visible."
        code='gsap.to("#one", { duration: 1, opacity: 1 });'
      />
      <AnimationExample
        id="two"
        text="Example 2"
        heading="Horizontal Movement"
        description="Animate an element to move horizontally across the screen."
        animationClass="opacity-0"
        code='gsap.to("#two", { duration: 2, x: 50, opacity: 1 });'
      />

      <AnimationExample
        id="three"
        text="Example 3"
        heading="Scale"
        description="Animate an element to grow or shrink in size."
        animationClass="opacity-0"
        code='gsap.to("#three", { duration: 1.5, scale: 1.5 });'
      />

      <AnimationExample
        id="four"
        text="Example 4"
        heading="Rotation"
        description="Animate an element to rotate."
        animationClass="opacity-0"
        code='gsap.to("#four", { duration: 2, rotation: 360 });'
      />

      <AnimationExample
        id="five"
        text="Example 5"
        heading="Elastic Ease"
        description="Animate an element to move with an elastic ease."
        animationClass="opacity-0"
        code='gsap.to("#five", { duration: 2, x: 100, ease: "elastic.out(1, 0.3)" });'
      />

      <AnimationExample
        id="six"
        text="Example 6"
        heading="Stagger"
        description="Animate multiple elements with a stagger effect."
        animationClass="opacity-0"
        code='gsap.to(".item", { duration: 0.5, opacity: 1, stagger: 0.2 });'
      />

      <AnimationExample
        id="seven"
        text="Example 7"
        heading="Repeat and Yoyo"
        description="Animate an element to repeat and yoyo."
        animationClass="opacity-0"
        code='gsap.to("#seven", { duration: 1, x: 100, repeat: 3, yoyo: true });'
      />

      <AnimationExample
        id="eight"
        text="Example 8"
        heading="Timeline"
        description="Create a timeline to sequence multiple animations."
        animationClass="opacity-0"
        code={`let tl = gsap.timeline();
tl.to("#eight", { duration: 1, x: 100 })
.to("#eight", { duration: 1, scale: 1.5 })
.to("#eight", { duration: 1, rotation: 90 });`}
      />

      <AnimationExample
        id="nine"
        text="Example 9"
        heading="Scroll Trigger"
        description="Animate an element when it enters the viewport."
        animationClass="opacity-0"
        code={`gsap.to("#nine", {
  scrollTrigger: "#nine", // start the animation when "#nine" enters the viewport
  x: 400,
  duration: 3,
});`}
      />
    </Wrap>
  );
}
