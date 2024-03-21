// import React from "react";
// import { motion } from "framer-motion";

import CenterFull from "~/components/buildingBlocks/centerFull";
import AnimatedCarousel from "./various-new/animatedCarousel";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Heading from "~/components/buildingBlocks/headingText";
import FlexFull from "~/components/buildingBlocks/flexFull";
import { useState } from "react";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Slider from "~/components/buildingBlocks/slider";
import CounterInput from "~/components/buildingBlocks/counterInput";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import HStack from "~/components/buildingBlocks/hStack";
import Checkbox from "~/components/buildingBlocks/checkBox";

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
  `https://picsum.photos/id/${randomNumberGenerator(1, 100)}/700/700`,
  `https://picsum.photos/id/${randomNumberGenerator(1, 100)}/700/700`,
  `https://picsum.photos/id/${randomNumberGenerator(1, 100)}/700/700`,
  `https://picsum.photos/id/${randomNumberGenerator(1, 100)}/700/700`,
  `https://picsum.photos/id/${randomNumberGenerator(1, 100)}/700/700`,
];

// shiftDurationOffset = 2,
// buttonGap = "gap-[12vh]",

export default function App() {
  const [imageSize, setImageSize] = useState(50);
  const [xOffsetFactor, setXOffsetFactor] = useState(0.53);
  const [yOffsetFactor, setYOffsetFactor] = useState(0.2);
  const [shiftOffset, setShiftOffset] = useState(0.2);
  const [damping, setDamping] = useState(15);
  const [stiffness, setStiffness] = useState(50);
  const [transitionType, setTransitionType] = useState<"spring" | "tween">(
    "spring"
  );
  const checkboxContainerStyles =
    "bg-200-diagonal1op25 py-[0.7vh] px-[1vh] insetShadowMd border-400-md gap-[0.5vh]";
  return (
    <CenterFull>
      <VStackFull className="h-screen">
        <VStackFull className="h-[20vh] justify-center items-center">
          <Heading text="Animated Carousel" layout="text-xxl-loose" />
          <HStackFull>
            <CounterInput
              showButtons
              showInput={false}
              label="Image Size"
              min={20}
              max={50}
              incrementStep={10}
              value={imageSize}
              onChange={(newValue) => setImageSize(newValue)}
              labelTextSizes="text-sm-tight"
            />
            <CounterInput
              showButtons
              showInput={false}
              label="X Offset Factor"
              min={0.1}
              max={2}
              incrementStep={0.1}
              value={xOffsetFactor}
              onChange={(newValue) => setXOffsetFactor(newValue)}
              labelTextSizes="text-sm-tight"
            />
            <CounterInput
              showButtons
              showInput={false}
              label="Y Offset Factor"
              min={0.1}
              max={2}
              incrementStep={0.1}
              value={yOffsetFactor}
              onChange={(newValue) => setYOffsetFactor(newValue)}
              labelTextSizes="text-sm-tight"
            />
            <HStack gap="gap-[3vh]" className={checkboxContainerStyles}>
              <Checkbox
                label="spring"
                isChecked={transitionType === "spring"}
                onChange={() => setTransitionType("spring")}
              />
              <Checkbox
                label="tween"
                isChecked={transitionType === "tween"}
                onChange={() => setTransitionType("tween")}
              />
            </HStack>
            {transitionType === "tween" && (
              <CounterInput
                showButtons
                showInput={false}
                label="Shift Duration Offset"
                min={0}
                max={2}
                incrementStep={0.1}
                value={shiftOffset}
                onChange={(newValue) => setShiftOffset(newValue)}
                labelTextSizes="text-sm-tight"
              />
            )}
            {transitionType === "spring" && (
              <CounterInput
                showButtons
                showInput={false}
                label="Damping"
                min={1}
                max={50}
                value={damping}
                onChange={(newValue) => setDamping(newValue)}
                labelTextSizes="text-sm-tight"
              />
            )}
            {transitionType === "spring" && (
              <CounterInput
                showButtons
                showInput={false}
                label="Stiffness"
                min={0}
                max={200}
                incrementStep={5}
                value={stiffness}
                onChange={(newValue) => setStiffness(newValue)}
                labelTextSizes="text-sm-tight"
              />
            )}
          </HStackFull>
        </VStackFull>
        <CenterHorizontalFull className="h-[75vh]">
          <AnimatedCarousel
            images={images}
            imageSize={imageSize}
            xOffsetFactor={xOffsetFactor}
            yOffsetFactor={yOffsetFactor}
            shiftDurationOffset={shiftOffset}
            damping={damping}
            stiffness={stiffness}
            transitionType={transitionType}
          />
        </CenterHorizontalFull>
      </VStackFull>
    </CenterFull>
  );
}
