import { motion } from "framer-motion";

export default function AnimatedCircle() {
  const viewBoxWidth = 1000;
  const viewBoxHeight = 1000;
  const circleRadius = 300;
  const circleX = 500;
  const circleY = 500;

  const circleVariants = {
    initial: {
      cx: circleX,
      cy: 0,
      r: circleRadius,
      filter: "drop-shadow(2vh 2vh 2vh rgba(0, 0, 0, 1))",
    },
    animate: {
      cx: circleX,
      cy: circleY,
      transition: {
        duration: 1,
        ease: "easeInOut",
        filter: "drop-shadow(2vh 2vh 2vh rgba(0, 0, 0, 1))",
      },
    },
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className="w-full h-full"
      >
        <motion.circle
          initial="initial"
          animate="animate"
          variants={circleVariants}
          fill="cyan"
          className="animate-zoomIn"
        />
      </svg>
    </div>
  );
}
