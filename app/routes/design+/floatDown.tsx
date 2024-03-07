import { motion, Variants } from "framer-motion";

interface Circle {
  x: number;
  y: number[];
  duration: number;
  delay: number;
  key: number;
}

interface FloatDownProps {
  numCircles?: number;
  maxMovements?: number;
  minMovements?: number;
  minDuration?: number;
  maxDuration?: number;
  viewBoxWidth?: number;
  viewBoxHeight?: number;
  circleRadius?: number;
  horizontalMax?: number;
  verticalMax?: number;
  durationMultiplier?: number;
}

const generateRandomValues = (
  count: number,
  minValue: number,
  maxValue: number
): number[] => {
  return Array.from(
    { length: count },
    () => Math.random() * (maxValue - minValue) + minValue
  );
};

const FloatDown: React.FC<FloatDownProps> = ({
  numCircles = 100,
  minMovements = 4,
  maxMovements = 8,
  viewBoxHeight = 1000,
  viewBoxWidth = 1000,
  circleRadius = 20,
  horizontalMax = 200,
  verticalMax = 40,
  minDuration = 2,
  maxDuration = 23,
  durationMultiplier = 20,
}) => {
  const numMovements =
    Math.floor(Math.random() * (maxMovements - minMovements + 1)) +
    minMovements;

  const circleVariants: Variants = {
    initial: (custom: Circle) => ({
      cx: custom.x,
      cy: custom.y[0],
      r: circleRadius,
      filter: "drop-shadow(2vh 2vh 2vh rgba(0, 0, 0, 1))",
    }),
    animate: (custom: Circle) => ({
      cy: viewBoxHeight + 60,
      x: generateRandomValues(numMovements, -horizontalMax, horizontalMax),
      y: custom.y,
      transition: {
        duration: custom.duration,
        ease: "easeInOut",
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        loop: Infinity,
        delay: custom.delay,
        filter: "drop-shadow(2vh 2vh 2vh rgba(0, 0, 0, 1))",
      },
    }),
  };

  const circles: Circle[] = Array.from({ length: numCircles }, (_, index) => ({
    x: Math.random() * viewBoxWidth,
    y: [
      -60,
      ...generateRandomValues(numMovements - 1, -verticalMax, verticalMax),
    ],
    duration: Math.random() * (maxDuration - minDuration) + minDuration,
    delay: Math.random() * durationMultiplier,
    key: index,
  }));

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className="w-full h-full"
      >
        {circles.map((circle) => (
          <motion.circle
            key={circle.key}
            initial="initial"
            animate="animate"
            variants={circleVariants}
            fill="cyan"
            custom={circle}
          />
        ))}
      </svg>
    </div>
  );
};

export default FloatDown;
