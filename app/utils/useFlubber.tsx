import { MotionValue, useAnimation, useTransform } from "framer-motion";
import flubber from "flubber";
const { interpolate } = flubber;
import { useState } from "react";

export const getIndex = (_: any, index: number) => index;

export function useFlubber(progress: MotionValue<number>, paths: string[]) {
  // Ensure `paths` is not empty and has valid SVG path data
  if (paths.length === 0) {
    throw new Error("Paths array must not be empty");
  }

  return useTransform(progress, [0, paths.length - 1], paths, {
    mixer: (fromPath, toPath) =>
      flubber.interpolate(fromPath, toPath, { maxSegmentLength: 0.1 }),
  });
}

export function useFlubberInterpolation(startPath: string, endPath: string) {
  const [path, setPath] = useState<string>(startPath);
  const controls = useAnimation();

  const animateShape = () => {
    const interpolator = interpolate(startPath, endPath, {
      maxSegmentLength: 2,
    });

    controls.start({
      path: [startPath, endPath],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    });

    // Update the path gradually
    for (let t = 0; t <= 1; t += 0.1) {
      setTimeout(() => setPath(interpolator(t)), t * 2000); // 2000 to match the duration
    }
  };

  return { path, animateShape, controls };
}
