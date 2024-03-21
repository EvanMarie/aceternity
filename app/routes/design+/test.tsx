// import React from "react";
// import { motion } from "framer-motion";

import CenterFull from "~/components/buildingBlocks/centerFull";
import AnimatedCarousel from "./various-new/animatedCarousel";

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

export default function App() {
  return (
    <CenterFull>
      <AnimatedCarousel images={images} />
    </CenterFull>
  );
}
