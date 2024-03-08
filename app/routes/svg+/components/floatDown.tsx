import { animate, motion, Variants } from "framer-motion";
import Center from "~/components/buildingBlocks/center";
import Flex from "~/components/buildingBlocks/flex";

interface Circle {
  x: number;
  y: number[];
  duration: number;
  delay: number;
  key: number;
  animationDuration: number;
  shimmerDelay: number;
}

interface FloatDownProps {
  containerWidth?: string;
  containerHeight?: string;
  containerBg?: string;
  containerShadow?: string;
  containerBorder?: string;
  numCircles?: number;
  startFrom?: number;
  endAt?: number;
  repeat?: number;
  repeatType?: "reverse" | "mirror";
  circleColor?: string;
  circleColors?: string[];
  maxMovements?: number;
  minMovements?: number;
  minDuration?: number;
  maxDuration?: number;
  maxDelay?: number;
  viewBoxWidth?: number;
  viewBoxHeight?: number;
  radiusMax?: number;
  radiusMin?: number;
  horizontalMax?: number;
  verticalMax?: number;
  durationMultiplier?: number;
  shimmerColor?: string;
  shimmerOpacity?: number;
  maxShimmerDelay?: number;
  maxCircleAnimationDuration?: number;
  minCircleAnimationDuration?: number;
  minBouncyScale?: number;
  maxBouncyScale?: number;
  minShimmerWidth?: number;
  maxShimmerWidth?: number;
  circleAnimation?: "bouncy" | "shimmer" | "none";
  circleShadow?: string;
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

export default function FloatDown({
  containerHeight = "h-[40vh]",
  containerWidth = "w-[40vh]",
  containerBg = "bg-100-radial6op75",
  containerShadow = "insetShadowXL",
  containerBorder = "border-970-md",
  numCircles = 53,
  circleColors,
  startFrom = -30,
  endAt = 30,
  maxDelay = 5,
  repeat = Infinity,
  repeatType = "mirror",
  circleColor = "cyan",
  minMovements = 4,
  maxMovements = 8,
  viewBoxHeight = 1000,
  viewBoxWidth = 1000,
  radiusMax = 20,
  radiusMin = 5,
  horizontalMax = 200,
  verticalMax = 5,
  minDuration = 5,
  maxDuration = 23,
  shimmerColor = "deeppink",
  shimmerOpacity = 1,
  maxCircleAnimationDuration = 5,
  minCircleAnimationDuration = 2,
  minBouncyScale = 0.5,
  maxBouncyScale = 2,
  minShimmerWidth = 0.8,
  maxShimmerWidth = 8,
  maxShimmerDelay = 2,
  circleAnimation = "none",
  circleShadow = "drop-shadow(2vh 2vh 2vh rgba(0, 0, 0, 1))",
}: FloatDownProps) {
  function shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]; // Swap elements
    }
    return shuffledArray;
  }

  const numMovements =
    Math.floor(Math.random() * (maxMovements - minMovements + 1)) +
    minMovements;

  const circleAnimationDuration =
    Math.random() * (maxCircleAnimationDuration - minCircleAnimationDuration) +
    minCircleAnimationDuration;

  const shimmerWidth =
    circleAnimation === "shimmer"
      ? Math.random() * (maxShimmerWidth - minShimmerWidth) + minShimmerWidth
      : 0;

  const circleVariants: Variants = {
    initial: (custom: Circle) => ({
      cx: custom.x,
      cy: custom.y[0],
      r: generateRandomValues(1, radiusMin, radiusMax),
      filter: circleShadow,
    }),

    animate: (custom: Circle) => ({
      cy: viewBoxHeight + endAt,
      x: generateRandomValues(numMovements, -horizontalMax, horizontalMax),
      y: custom.y,
      transition: {
        duration: custom.duration,
        ease: "easeInOut",
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        loop: repeat,
        delay: custom.delay,
        filter: { circleShadow },
      },
    }),
    shimmer: (custom: Circle) => ({
      strokeOpacity: [shimmerOpacity, 0],
      transition: {
        duration: circleAnimationDuration,
        delay: custom.shimmerDelay,
        repeat: repeat,
        repeatType: repeatType, // use reverse for best
      },
    }),
    bouncy: (custom: Circle) => ({
      scale: [minBouncyScale, maxBouncyScale],
      transition: {
        duration: custom.animationDuration,
        repeat: repeat,
        repeatType: repeatType, // use mirror for best
        ease: "easeInOut",
      },
    }),
  };

  const circles: Circle[] = Array.from({ length: numCircles }, (_, index) => {
    const animationDuration =
      Math.random() *
        (maxCircleAnimationDuration - minCircleAnimationDuration) +
      minCircleAnimationDuration;
    const shimmerDelay = Math.random() * (maxShimmerDelay || 5);
    let delay = Math.random() * maxDelay; // Assign a random delay based on maxDelay

    // Ensure the first circle has a delay of 0
    if (index === 0) {
      delay = 0;
    }

    return {
      x: Math.random() * viewBoxWidth,
      y: [
        startFrom,
        ...generateRandomValues(numMovements - 1, -verticalMax, verticalMax),
      ],
      key: index,
      duration: Math.random() * (maxDuration - minDuration) + minDuration,
      delay,
      animationDuration,
      shimmerDelay,
    };
  });

  // Shuffle the circles to randomize which one gets the delay of 0
  const shuffledCircles = shuffleArray(circles);

  const getRandomColor = () => {
    if (circleColors) {
      return circleColors[Math.floor(Math.random() * circleColors.length)];
    }
    return circleColor;
  };

  return (
    <Flex className="shadowBroadNormal">
      <Center
        className={`${containerHeight} ${containerWidth} ${containerBg} ${containerShadow} relative ${containerBorder}`}
      >
        <div className="w-full h-full flex items-center justify-center">
          <svg
            viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
            className="w-full h-full"
          >
            {shuffledCircles.map((circle) => (
              <motion.circle
                key={circle.key}
                initial="initial"
                animate={[
                  "animate",
                  circleAnimation === "shimmer"
                    ? "shimmer"
                    : circleAnimation === "bouncy"
                    ? "bouncy"
                    : "",
                ]}
                variants={circleVariants}
                fill={circleColors ? getRandomColor() : circleColor}
                stroke={shimmerColor ? shimmerColor : circleColor}
                strokeWidth={shimmerWidth ? shimmerWidth : 0.2}
                custom={circle}
              />
            ))}
          </svg>
        </div>
      </Center>
    </Flex>
  );
}
