import { useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import CenterFull from "~/components/buildingBlocks/centerFull";
import Flex from "~/components/buildingBlocks/flex";
import { ItemComponent } from "./components/framerMotionExamples";
import Center from "~/components/buildingBlocks/center";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Text from "~/components/buildingBlocks/text";

function ScrollItem({ id, random }: { id: number; random: number }) {
  return (
    <section className="flex justify-center items-center relative snap-center perspective-200">
      <div className="w-[70vh] h-[90vh] relative overflow-hidden rounded-none">
        <img
          src={`https://picsum.photos/id/${random}/600/600`}
          alt={`image ${id}`}
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-none"
        />
      </div>
    </section>
  );
}

const imageItems = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  random: Math.floor(Math.random() * 100) + 1,
}));

function ScrollBox({ label }: { label: string }) {
  random: Math.floor(Math.random() * 100) + 1;
  return (
    <div className="w-[70vh] h-[90vh] relative overflow-hidden rounded-none p-[2vh]">
      <Center className="w-full h-full bg-cyan-500">
        <VStackFull>
          <Text>{label}</Text>
          <img
            src={`https://picsum.photos/id/${random}/600/600`}
            alt={`image ex`}
            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-none"
          />
        </VStackFull>
      </Center>
    </div>
  );
}

const testItems = Array.from({ length: 15 }, (_, i) => ({
  label: `Box ${i + 1}`,
  content: `Content ${i + 1}`,
}));

type ItemComponent = React.ComponentType<any>;

export function VerticalScrollProgressContainer({
  position = "top",
  height = "h-[90vh]",
  width = "w-[70vh]",
  padding = "p-[0vh]",
  gap = "gap-[0vh]",
  progressColor = "bg-pink-500",
  itemComponent: ItemComponent,
  items,
  snapScroll = true,
  itemClassName = "",
  springScroll = true,
}: {
  position?: "top" | "bottom";
  height?: string;
  width?: string;
  padding?: string;
  gap?: string;
  progressColor?: string;
  itemComponent: ItemComponent;
  items: any[];
  snapScroll?: boolean;
  itemClassName?: string;
  springScroll?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const scaleX = springScroll
    ? useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]))
    : useTransform(scrollYProgress, [0, 1], [0, 1]); // Ensure it scales from 0 to 100%
  const placement =
    position === "top"
      ? "top-0 left-0 "
      : position === "bottom"
      ? "bottom-0 left-0 "
      : "";

  return (
    <div
      ref={ref}
      className={`${width} ${height} relative insetShadowXl overflow-y-auto scrollbar-hide ${
        snapScroll ? "snap-mandatory snap-y" : ""
      } `}
    >
      {/* Progress bar */}
      <motion.div
        className={`sticky ${placement} h-[1vh] ${progressColor}`}
        style={{ scaleX, zIndex: "2" }}
      />
      <div
        className={`absolute top-0 left-0 h-fit ${padding} flex flex-col`}
        style={{ gap }}
      >
        {items.map((item, index) => (
          <Flex
            key={index}
            className={
              snapScroll
                ? `snap-center snap-always ${itemClassName}`
                : itemClassName
            }
          >
            <ItemComponent {...item} />
          </Flex>
        ))}
      </div>
    </div>
  );
}

export default function Test() {
  return (
    <CenterFull>
      <VerticalScrollProgressContainer
        items={testItems}
        itemComponent={ScrollBox}
      />
    </CenterFull>
  );
}

// return <FramerExperiments />;
