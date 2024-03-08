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
  pulsateScale: number;
}

interface FloatDownProps {
  containerWidth?: string;
  containerHeight?: string;
  containerBg?: string;
  containerShadow?: string;
  containerBorder?: string;
  numCircles?: number;
  circleColor?: string;
  maxMovements?: number;
  minMovements?: number;
  minDuration?: number;
  maxDuration?: number;
  viewBoxWidth?: number;
  viewBoxHeight?: number;
  radiusMax?: number;
  radiusMin?: number;
  horizontalMax?: number;
  verticalMax?: number;
  durationMultiplier?: number;
  shimmerColor?: string;
  shimmerOpacity?: number;
  maxCircleAnimationDuration?: number;
  minCircleAnimationDuration?: number;
  minGlowScale?: number;
  maxGlowScale?: number;
  minShimmerWidth?: number;
  maxShimmerWidth?: number;
  minPulsateScale?: number;
  maxPulsateScale?: number;
  circleAnimation?: "pulsate" | "glow" | "shimmer" | "none";
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
  circleColor = "cyan",
  minMovements = 4,
  maxMovements = 8,
  viewBoxHeight = 1000,
  viewBoxWidth = 1000,
  radiusMax = 20,
  radiusMin = 5,
  horizontalMax = 200,
  verticalMax = 20,
  minDuration = 5,
  maxDuration = 23,
  durationMultiplier = 20,
  shimmerColor = "red",
  shimmerOpacity = 1,
  maxCircleAnimationDuration = 5,
  minCircleAnimationDuration = 0.5,
  minGlowScale = 0.8,
  maxGlowScale = 1.2,
  minShimmerWidth = 1,
  maxShimmerWidth = 5,
  minPulsateScale = 0.4,
  maxPulsateScale = 1.6,
  circleAnimation = "none",
}: FloatDownProps) {
  const numMovements =
    Math.floor(Math.random() * (maxMovements - minMovements + 1)) +
    minMovements;

  const circleAnimationDuration =
    Math.random() * (maxCircleAnimationDuration - minCircleAnimationDuration) +
    minCircleAnimationDuration;
  const pulsateScale =
    circleAnimation === "pulsate"
      ? Math.random() * (maxPulsateScale - minPulsateScale) + minPulsateScale
      : 0;
  const shimmerWidth =
    circleAnimation === "shimmer"
      ? Math.random() * (maxShimmerWidth - minShimmerWidth) + minShimmerWidth
      : 0;
  const circleVariants: Variants = {
    initial: (custom: Circle) => ({
      cx: custom.x,
      cy: custom.y[0],
      r: generateRandomValues(1, radiusMin, radiusMax),
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
    shimmer: {
      strokeOpacity: [shimmerOpacity, 0],
      transition: {
        duration: circleAnimationDuration,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
    pulsate: (custom: Circle) => ({
      scale: [1, custom.pulsateScale],
      transition: {
        duration: custom.animationDuration,
        repeat: Infinity,
        repeatType: "reverse",
      },
    }),
    glow: (custom: Circle) => ({
      scale: [minGlowScale, maxGlowScale],
      transition: {
        duration: custom.animationDuration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    }),
  };

  const circles: Circle[] = Array.from({ length: numCircles }, (_, index) => {
    const pulsateScale =
      circleAnimation === "pulsate"
        ? Math.random() * (maxPulsateScale - minPulsateScale) + minPulsateScale
        : 0;
    const animationDuration =
      Math.random() *
        (maxCircleAnimationDuration - minCircleAnimationDuration) +
      minCircleAnimationDuration;

    return {
      x: Math.random() * viewBoxWidth,
      y: [
        -60,
        ...generateRandomValues(numMovements - 1, -verticalMax, verticalMax),
      ],
      key: index,
      duration: Math.random() * (maxDuration - minDuration) + minDuration,
      delay: Math.random() * durationMultiplier,
      animationDuration,
      pulsateScale,
    };
  });

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
            {circles.map((circle) => (
              <motion.circle
                key={circle.key}
                initial="initial"
                animate={[
                  "animate",
                  circleAnimation === "pulsate"
                    ? "pulsate"
                    : circleAnimation === "shimmer"
                    ? "shimmer"
                    : circleAnimation === "glow"
                    ? "glow"
                    : "",
                ]}
                variants={circleVariants}
                fill={circleColor}
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
