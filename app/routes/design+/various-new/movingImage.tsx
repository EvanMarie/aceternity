import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface MovingImageProps {
  startPosition?: number;
  endPosition?: number;
  initialSpeed?: number;
  returnSpeed?: number;
  delay?: number;
  pausePosition?: number;
  minPauseDuration?: number;
  maxPauseDuration?: number;
  returnDelay?: number;
  pauseImage?: string;
}

const MovingImage = ({
  startPosition = -100,
  endPosition = 100,
  initialSpeed = 12,
  returnSpeed = 12,
  delay = 10,
  pausePosition = 0,
  minPauseDuration = 10,
  maxPauseDuration = 30,
  returnDelay = 1,
  pauseImage = "/images/pauseImage.png",
}: MovingImageProps) => {
  const controls = useAnimation();
  const imageUrl = "/images/fallbackAvatar.png";
  const randomPauseDuration1 =
    Math.random() * (maxPauseDuration - minPauseDuration) + minPauseDuration;
  const randomPauseDuration2 =
    Math.random() * (maxPauseDuration - minPauseDuration) + minPauseDuration;

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        x: [`${startPosition}vh`, `${pausePosition}vh`],
        transition: { duration: initialSpeed / 2, ease: "easeInOut" },
      });
      await controls.start({
        backgroundImage: `url(${pauseImage})`,
        transition: { duration: 0 },
      });
      await controls.start({ backgroundImage: `url(${pauseImage})` });
      await controls.start({
        backgroundImage: `url(${imageUrl})`,
        transition: { delay: randomPauseDuration1 },
      });
      await controls.start({
        x: `${endPosition}vh`,
        transition: { duration: initialSpeed / 2, ease: "easeInOut" },
      });
      await controls.start({
        x: `${endPosition}vh`,
        transition: { duration: returnDelay },
      });
      await controls.start({
        x: `${startPosition}vh`,
        transition: { duration: returnSpeed, ease: "easeInOut" },
      });
    };

    sequence();
    const intervalId = setInterval(
      sequence,
      initialSpeed * 1000 +
        delay * 1000 +
        randomPauseDuration2 * 1000 +
        returnDelay * 1000 +
        returnSpeed * 1000
    );

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center">
      <motion.div
        className="w-16 h-16 bg-cover bg-center"
        animate={controls}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
  );
};

export default MovingImage;
