import { motion } from "framer-motion";

export default function AnimatedCircle() {
  const viewBoxWidth = 1000;
  const viewBoxHeight = 1000;
  const circleRadius = 450;
  const circleX = 500;
  const circleY = 500;

  const circleVariants = {
    initial: {
      strokeDasharray: `${2 * Math.PI * circleRadius}`,
      strokeDashoffset: `${2 * Math.PI * circleRadius}`,
      fill: "cyan",
      fillOpacity: 0,
      filter: "drop-shadow(2vh 2vh 2vh rgba(0, 0, 0, 1))",
    },
    animate: {
      strokeDashoffset: 0,
      fillOpacity: 1,
      transition: {
        strokeDashoffset: { duration: 2, ease: "easeInOut" },
        fillOpacity: { duration: 1, ease: "easeInOut", delay: 2 },
        filter: { duration: 1, ease: "easeInOut", delay: 2 },
      },
    },
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className="w-64 h-64"
      >
        <motion.circle
          cx={circleX}
          cy={circleY}
          r={circleRadius}
          stroke="deeppink"
          strokeWidth="0.7vh"
          fill="transparent"
          initial="initial"
          animate="animate"
          variants={circleVariants}
        />
      </svg>
    </div>
  );
}
