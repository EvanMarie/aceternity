import { motion } from "framer-motion";
import Flex from "~/components/buildingBlocks/flex";

export type Path = {
  path: string;
  delay?: number;
  duration?: number;
  fill?: string;
  fillDelay?: number;
  fillDuration?: number;
  fillOpacity?: number;
  stroke?: string;
  strokeWidth?: number | string;
  ease?: string;
  repeat?: number;
};

export default function SVGMultiPaths({
  paths,
  width = "w-[50vh] max-w-full",
  height = "h-[50vh] max-h-full",
  viewBox = "0 0 200 200",
  containerClassName,
}: {
  paths: Path[];
  height?: string;
  width?: string;
  viewBox?: string;
  containerClassName?: string;
}) {
  return (
    <Flex className={`${height} ${width} ${containerClassName}`}>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
      >
        {paths.map((path, i) => (
          <motion.path
            key={i}
            d={path.path}
            fill={path.fill ? path.fill : "transparent"}
            stroke={path.stroke || "#000000"}
            strokeWidth={path.strokeWidth}
            initial={{ pathLength: 0, fillOpacity: 0 }}
            animate={{ pathLength: 1, fillOpacity: path.fillOpacity || 1 }}
            transition={{
              pathLength: {
                duration: path.duration || 1,
                ease: path.ease || "easeInOut",
                delay: path.delay || 0,
                repeat: path.repeat || 0,
                repeatType: path.repeat ? "reverse" : "mirror",
              },
              fillOpacity: {
                duration: path.fillDuration || 0.5,
                delay:
                  (path.delay || 0) +
                  (path.duration || 1) +
                  (path.fillDelay || 0),
              },
            }}
          />
        ))}
      </svg>
    </Flex>
  );
}
