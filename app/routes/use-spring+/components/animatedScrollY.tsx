import { RefObject, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Text from "~/components/buildingBlocks/text";

export default function ScrollYAnimated({
  containerRef,
}: {
  containerRef: RefObject<HTMLElement> | undefined;
}) {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    container: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-360deg"]);
  return (
    <div className="relative z-10">
      <motion.div
        ref={targetRef}
        style={{ rotate }}
        className="mx-auto size-48 bg-indigo-400 shadowBroadLoose"
      >
        <VStackFull>
          <Text>I am a box</Text>
          <Text>I rotate as I cross the screen.</Text>
        </VStackFull>
      </motion.div>
    </div>
  );
}
