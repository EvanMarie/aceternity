// import React from "react";
// import { motion } from "framer-motion";

// const HoverDiv3D = () => {
//   return (
//     <motion.div
//       className="w-[20vh] h-[20vh] bg-col-400 overflow-hidden"
//       animate={{
//         x: 0,
//         y: 0,
//         //   border:"2px solid #000",
//         boxShadow: "-0rem 0rem 0 #252525",
//         rotate: "0deg",
//       }}
//       whileHover={{
//         x: 5,
//         y: -5,

//         boxShadow: "-0.5rem 0.5rem 0 #fff ",
//         rotate: "0.7deg",
//       }}
//     >
//       <h1>Hey Hover Me</h1>
//       <motion.p
//         animate={{
//           overflow: "hidden",
//           textOverflow: "ellipsis",
//           display: "-webkit-box",
//           WebkitLineClamp: 2,
//           WebkitBoxOrient: "vertical",
//           wordBreak: "break-word",
//         }}
//       >
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ad
//         distinctio voluptatem necessitatibus, non, obcaecati voluptate amet
//         suscipit alias nesciunt nostrum deserunt cum, totam corrupti in
//         cupiditate debitis quas? Excepturi!
//       </motion.p>
//     </motion.div>
//   );
// };

// export default HoverDiv3D;

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "~/components/buildingBlocks/button";
import CenterFull from "~/components/buildingBlocks/centerFull";
const randomNumberGenerator = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const images = [
  `https://picsum.photos/id/${randomNumberGenerator(1, 100)}/700/700`,
  `https://picsum.photos/id/${randomNumberGenerator(1, 100)}/700/700`,
  `https://picsum.photos/id/${randomNumberGenerator(1, 100)}/700/700`,
  `https://picsum.photos/id/${randomNumberGenerator(1, 100)}/700/700`,
  `https://picsum.photos/id/${randomNumberGenerator(1, 100)}/700/700`,
  `https://picsum.photos/id/${randomNumberGenerator(1, 100)}/700/700`,
  `https://picsum.photos/id/${randomNumberGenerator(1, 100)}/700/700`,
  `https://picsum.photos/id/${randomNumberGenerator(1, 100)}/700/700`,
  `https://picsum.photos/id/${randomNumberGenerator(1, 100)}/700/700`,
  `https://picsum.photos/id/${randomNumberGenerator(1, 100)}/700/700`,
];

export function Carousel({
  images,
  imageSize = 50,
  rounded = "rounded-[4vh]",
  containerDimensions,
  shadow = "metallicEdgesMd",
  backImageBrightness = "brightness(25%)",
  backImageXOffset = "27vh",
  backImageYOffset = "8vh",
  shiftDurationOffset = 0.75,
}: {
  images?: string[];
  imageSize?: number;
  rounded?: string;
  backImageBrightness?: string;
  shadow?: string;
  containerDimensions?: string;
  backImageXOffset?: string;
  backImageYOffset?: string;
  shiftDurationOffset?: number;
}) {
  if (!Array.isArray(images)) {
    return null; // or some fallback UI
  }
  const imageDimensions = `w-[${imageSize}vh] h-[${imageSize}vh]`;

  const imageContainerClassName = `absolute ${imageDimensions} ${rounded} bg-center bg-cover bg-no-repeat`;
  const imageClassName = `w-full h-full ${rounded} ${shadow}`;
  const [FlowDirection, setFlowDirection] = useState(true);
  const [FrontId, setFrontId] = useState(0);
  const [LeftId, setLeftId] = useState(images.length - 1);
  const [RightId, setRightId] = useState(1);

  const nextBtn = () => {
    if (LeftId === images.length - 1) {
      setLeftId(0);
    } else {
      setLeftId(LeftId + 1);
    }
    if (FrontId === images.length - 1) {
      setFrontId(0);
    } else {
      setFrontId(FrontId + 1);
    }

    if (RightId === images.length - 1) {
      setRightId(0);
    } else {
      setRightId(RightId + 1);
    }
    setFlowDirection(true);
  };
  const prevBtn = () => {
    setFlowDirection(false);
    if (LeftId === 0) {
      setLeftId(images.length - 1);
    } else {
      setLeftId(LeftId - 1);
    }
    if (FrontId === 0) {
      setFrontId(images.length - 1);
    } else {
      setFrontId(FrontId - 1);
    }
    if (RightId === 0) {
      setRightId(images.length - 1);
    } else {
      setRightId(RightId - 1);
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
        type: "spring",
        duration: 1 * shiftDurationOffset,
        filter: { type: "tween" },
      },
    },
    left: {
      x: "-" + backImageXOffset,
      y: backImageYOffset,
      opacity: 1,
      filter: backImageBrightness,
      scale: 1,
      backgroundImage: "url(" + images[LeftId] + ")",
      zIndex: "4",

      transition: {
        type: "spring",
        duration: 2 * shiftDurationOffset,
        filter: { type: "tween" },
      },
    },
    right: {
      backgroundImage: "url(" + images[RightId] + ")",
      x: backImageXOffset,
      y: backImageYOffset,
      opacity: 1,
      filter: backImageBrightness,
      scale: 1,

      zIndex: "3",
      transition: {
        type: "spring",
        duration: 3 * shiftDurationOffset,
        filter: { type: "tween" },
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
      className={`flex flex-col gap-[10vh] items-center ${rounded} ${containerDimensions}`}
    >
      <motion.div className={`relative ${imageDimensions}`}>
        <AnimatePresence initial={false}>
          <motion.div
            key={LeftId}
            variants={variants}
            initial={FlowDirection ? "center" : "leftHidden"}
            animate="left"
            exit={"leftHidden"}
            className={`${imageContainerClassName}`}
          >
            <img
              src={images[LeftId]}
              alt="carousel item"
              className={`${imageClassName}`}
            />
          </motion.div>
          <motion.div
            variants={variants}
            key={FrontId}
            initial={FlowDirection ? "right" : "left"}
            animate="center"
            className={`${imageContainerClassName}`}
          >
            <img
              src={images[FrontId]}
              alt="carousel item"
              className={`${imageClassName}`}
            />
          </motion.div>
          <motion.div
            key={RightId}
            variants={variants}
            initial={FlowDirection ? "rightHidden" : "center"}
            animate="right"
            exit={"rightHidden"}
            className={imageContainerClassName}
          >
            <img
              src={images[RightId]}
              alt="carousel item"
              className={`${imageClassName}`}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="mt-8 mb-8 flex justify-center space-x-4 z-10">
        <Button onClick={prevBtn} buttonText="Previous" />
        <Button onClick={nextBtn} buttonText="Next" />
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <CenterFull>
      <Carousel images={images} />
    </CenterFull>
  );
}
