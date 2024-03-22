import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface MovingImageProps {
  image01?: string;
  image02?: string;
  returnImage?: string;
  startPosition?: number;
  endPosition?: number;
  initialSpeed?: number;
  returnSpeed?: number;
  delay?: number;
  pausePosition?: number;
  shortPauseMin?: number;
  shortPauseMax?: number;
  longPauseMin?: number;
  longPauseMax?: number;
  returnDelay?: number;
}

const MovingImage = ({
  image01 = "/images/chin-01.png",
  image02 = "/images/chin-02.png",
  returnImage = "/images/chin-03.png",
  startPosition = -100,
  endPosition = 100,
  initialSpeed = 12,
  returnSpeed = 12,
  delay = 10,
  pausePosition = 0,
  shortPauseMin = 1,
  shortPauseMax = 5,
  longPauseMin = 10,
  longPauseMax = 30,
  returnDelay = 1,
}: MovingImageProps) => {
  const controls = useAnimation();
  const shortPauseDuration =
    Math.random() * (shortPauseMax - shortPauseMin) + (shortPauseMin * 10) / 10;
  const longPauseDuration =
    Math.random() * (longPauseMax - longPauseMin) + longPauseMin;

  useEffect(() => {
    const sequence = async () => {
      // Move the image from startPosition to pausePosition
      await controls.start({
        x: [`${startPosition}vh`, `${pausePosition}vh`],
        transition: { duration: initialSpeed / 2, ease: "easeInOut" },
      });

      // Change the background image to image02 and set opacity to 0
      await controls.start({
        backgroundImage: `url(${image02})`,
        opacity: 0.5,
        transition: { duration: 0 },
      });

      // Fade in image02
      await controls.start({
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      });

      // Pause for a short duration
      await new Promise((resolve) =>
        setTimeout(resolve, shortPauseDuration * 1000)
      );

      // Fade out image02
      await controls.start({
        opacity: 0.5,
        transition: { duration: 1, ease: "easeInOut" },
      });

      // Change the background image to image01 and set opacity to 0
      await controls.start({
        backgroundImage: `url(${image01})`,
        opacity: 0.5,
        transition: { duration: 1 },
      });

      // Fade in image01
      await controls.start({
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      });

      // Move the image from pausePosition to endPosition
      await controls.start({
        x: `${endPosition}vh`,
        transition: { duration: initialSpeed / 2, ease: "easeInOut" },
      });

      // Change the background image to returnImage and set opacity to 1
      await controls.start({
        backgroundImage: `url(${returnImage})`,
        opacity: 1,
        transition: { duration: returnDelay, ease: "easeInOut" },
      });

      // Move the image from endPosition back to startPosition
      await controls.start({
        x: `${startPosition}vh`,
        transition: { duration: returnSpeed, ease: "easeInOut" },
      });
    };

    // Run the animation sequence immediately
    sequence();

    // Set up an interval to repeat the animation sequence
    const intervalId = setInterval(
      sequence,
      initialSpeed * 1000 +
        delay * 1000 +
        longPauseDuration * 1000 +
        returnDelay * 1000 +
        returnSpeed * 1000
    );

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center">
      <motion.div
        className="w-16 h-16 bg-cover bg-center"
        animate={controls}
        initial={{ backgroundImage: `url(${image01})`, opacity: 1 }}
      />
    </div>
  );
};

export default MovingImage;
