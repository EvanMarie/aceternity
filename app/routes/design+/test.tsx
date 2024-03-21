import { motion, MotionStyle } from "framer-motion";
import { useRef } from "react";
import Center from "~/components/buildingBlocks/center";
import CenterFull from "~/components/buildingBlocks/centerFull";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";

export default function InteractivePerspectiveContainer({
  width = "w-[60vw]",
  height = "h-[60vh]",
  bg = "bg-900-radial3op75",
  shadow = "shadowBroadLooser",
  perspective = "1000px",
  scale = 1.02,
  rotateAmount = 45,
  children,
}: {
  width: string;
  height: string;
  bg: string;
  shadow: string;
  perspective: string;
  scale: number;
  rotateAmount: number;
  children: React.ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const rotateY = (mouseX / rect.width - 0.5) * rotateAmount;
      const rotateX = (mouseY / rect.height - 0.5) * -rotateAmount;
      const style: MotionStyle = {
        transform: `perspective(${perspective}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
      };
      card.style.transform = style.transform as string;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      const style: MotionStyle = {
        transform: `perspective(${perspective}) rotateX(0deg) rotateY(0deg) scale(1)`,
      };
      card.style.transform = style.transform as string;
    }
  };

  return (
    <CenterFull className="bg-col-300">
      <Center className={`${width} ${height}`}>
        <motion.div
          ref={cardRef}
          className={`relative ${width} ${height} cursor-pointer`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Center className={`absolute inset-0 ${bg} ${shadow}`}>
            {/* {children} */}
            <Text className="text-insane-loose">"Hello"</Text>
          </Center>
        </motion.div>
      </Center>
    </CenterFull>
  );
}
