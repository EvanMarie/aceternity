import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Flex from "~/components/buildingBlocks/flex";
import HStack from "~/components/buildingBlocks/hStack";
import AnimationExample from "./animationExample";

interface StaggerAnimationProps {
  duration: number;
  opacity: number;
  stagger?: number;
}

interface StaggerAnimationExampleProps {
  items: { id: string; bg: string }[];
  animationParams: StaggerAnimationProps;
}

const StaggerAnimationExample: React.FC<StaggerAnimationExampleProps> = ({
  items,
  animationParams,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current.children, {
        ...animationParams,
        stagger: animationParams.stagger,
      });
    }
  }, [animationParams]);

  return (
    <HStack ref={containerRef}>
      {items.map((item, index) => (
        <Flex key={index} style={{ opacity: 0 }}>
          <Flex
            className={`${item.bg} p-[1vh] text-col-100 justify-center items-center shadowBroadNormal textShadow border-970-md h-[10vh] w-[10vh]`}
          >
            {item.id}
          </Flex>
        </Flex>
      ))}
    </HStack>
  );
};

export default StaggerAnimationExample;
