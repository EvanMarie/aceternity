import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "~/components/buildingBlocks/button";
import CenterFull from "~/components/buildingBlocks/centerFull";
import RoundToDecimal from "~/utils/roundDecPlace";

export default function AnimatedCarousel({
  images,
  imageSize = 50,
  xOffsetFactor = 0.53,
  yOffsetFactor = 0.2,
  rounded = "rounded-[6vh]",
  containerDimensions = "w-full",
  frontShadow = "border-100-md metallicEdgesSm",
  backShadow = "border-900-md shadowBroadLooser",
  backImageEffects = "brightness(40%) blur(2px)",
  shiftDurationOffset = 0.3,
  buttonGap = "gap-[12vh]",
  damping = 15,
  stiffness = 50,
  transitionType = "spring",
}: {
  images?: string[];
  imageSize?: number;
  xOffsetFactor?: number;
  yOffsetFactor?: number;
  rounded?: string;
  backImageEffects?: string;
  backImageBlur?: string;
  frontShadow?: string;
  backShadow?: string;
  containerDimensions?: string;
  buttonGap?: string;
  shiftDurationOffset?: number;
  damping?: number;
  stiffness?: number;
  transitionType?: "spring" | "tween";
}) {
  if (!Array.isArray(images)) {
    return null;
  }
  const imageDimensions = `w-[${imageSize}vh] h-[${imageSize}vh]`;
  console.log("imageDimensions", imageDimensions);
  const backImageXOffset = RoundToDecimal(imageSize * xOffsetFactor, 0) + "vh";
  const backImageYOffset = RoundToDecimal(imageSize * yOffsetFactor, 0) + "vh";
  const imageContainerClassName = `absolute ${imageDimensions} ${rounded} bg-center bg-cover bg-no-repeat`;
  const imageClassName = `w-full h-full ${rounded} ${backShadow}`;
  const frontImageClassName = `${imageClassName} ${frontShadow}`;
  const backImageClassName = `${imageClassName} ${backShadow}`;
  const [shift, setshift] = useState(true);
  const [FrontId, setFrontId] = useState(0);
  const [leftImage, setleftImage] = useState(images.length - 1);
  const [rightImage, setrightImage] = useState(1);

  const handleNextClick = () => {
    if (leftImage === images.length - 1) {
      setleftImage(0);
    } else {
      setleftImage(leftImage + 1);
    }
    if (FrontId === images.length - 1) {
      setFrontId(0);
    } else {
      setFrontId(FrontId + 1);
    }

    if (rightImage === images.length - 1) {
      setrightImage(0);
    } else {
      setrightImage(rightImage + 1);
    }
    setshift(true);
  };
  const handlePreviousClick = () => {
    setshift(false);
    if (leftImage === 0) {
      setleftImage(images.length - 1);
    } else {
      setleftImage(leftImage - 1);
    }
    if (FrontId === 0) {
      setFrontId(images.length - 1);
    } else {
      setFrontId(FrontId - 1);
    }
    if (rightImage === 0) {
      setrightImage(images.length - 1);
    } else {
      setrightImage(rightImage - 1);
    }
  };

  const variants = {
    center: {
      x: "0vh",
      y: "0vh",
      opacity: 1,
      scale: 1.15,
      zIndex: "5",
      filter: "brightness(100%)",
      backgroundImage: "url(" + images[FrontId] + ")",
      transition: {
        type: transitionType,
        duration: 1 * shiftDurationOffset,
        filter: { type: "tween" },
        stiffness: stiffness,
        damping: damping,
      },
    },
    left: {
      x: "-" + backImageXOffset,
      y: backImageYOffset,
      opacity: 1,
      filter: backImageEffects,
      scale: 1,
      backgroundImage: "url(" + images[leftImage] + ")",
      zIndex: "4",
      transition: {
        type: transitionType,
        duration: 2 * shiftDurationOffset,
        filter: { type: "tween" },
        stiffness: stiffness,
        damping: damping,
      },
    },
    right: {
      backgroundImage: "url(" + images[rightImage] + ")",
      x: backImageXOffset,
      y: backImageYOffset,
      opacity: 1,
      filter: backImageEffects,
      scale: 1,
      zIndex: "3",
      transition: {
        type: transitionType,
        duration: 3 * shiftDurationOffset,
        filter: { type: "tween" },
        stiffness: stiffness,
        damping: damping,
      },
    },
    rightHidden: {
      x: "10rem",
      scale: 0,
      opacity: 0,
    },
    leftHidden: {
      x: "-10rem",
      scale: 0,
      opacity: 0,
    },
  };
  return (
    <motion.div
      className={`flex flex-col ${buttonGap} items-center ${rounded} ${containerDimensions}`}
    >
      <motion.div className={`relative ${imageDimensions}`}>
        <AnimatePresence initial={false}>
          <motion.div
            key={leftImage}
            variants={variants}
            initial={shift ? "center" : "leftHidden"}
            animate="left"
            exit={"leftHidden"}
            className={`${imageContainerClassName}`}
          >
            <img
              src={images[leftImage]}
              alt="carousel item"
              className={`${backImageClassName}`}
            />
          </motion.div>
          <motion.div
            variants={variants}
            key={FrontId}
            initial={shift ? "right" : "left"}
            animate="center"
            className={`${imageContainerClassName}`}
          >
            <img
              src={images[FrontId]}
              alt="carousel item"
              className={`${frontImageClassName}`}
            />
          </motion.div>
          <motion.div
            key={rightImage}
            variants={variants}
            initial={shift ? "rightHidden" : "center"}
            animate="right"
            exit={"rightHidden"}
            className={imageContainerClassName}
          >
            <img
              src={images[rightImage]}
              alt="carousel item"
              className={`${backImageClassName}`}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="mt-8 mb-8 flex justify-center space-x-4 z-10">
        <Button onClick={handlePreviousClick} buttonText="Previous" />
        <Button onClick={handleNextClick} buttonText="Next" />
      </div>
    </motion.div>
  );
}
