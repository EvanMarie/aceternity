import gsap from "gsap";
import { useEffect } from "react";
import Box from "~/components/buildingBlocks/box";
import Flex from "~/components/buildingBlocks/flex";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Wrap from "~/components/buildingBlocks/wrap";

export default function One() {
  useEffect(() => {
    gsap.to("#one", { duration: 1, opacity: 1, from: 0 });
  }, []);

  function AnimationExample({
    id,
    text,
    animationClass,
    className,
    dimensions = "h-[15vh] w-[15vh]",
    bg = "bg-col-700",
    textColor = "text-col-100",
  }: {
    id?: string;
    text?: string;
    animationClass?: string;
    className?: string;
    dimensions?: string;
    bg?: string;
    textColor?: string;
  }) {
    return (
      <div
        className={`flex justify-center items-center shadowBroadNormal textShadow ${bg} ${dimensions} ${textColor} ${className} ${animationClass}`}
        id={id}
      >
        {text}
      </div>
    );
  }

  return (
    <Wrap className="p-[1.5vh] h-full overflow-auto gap-[2vh]">
      <AnimationExample id="one" text="Example 1" animationClass="opacity-0" />
      <AnimationExample id="two" text="Example 2" animationClass="opacity-0" />
    </Wrap>
  );
}
