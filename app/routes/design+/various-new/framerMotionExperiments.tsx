import { motion } from "framer-motion";
import { RefreshIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import Center from "~/components/buildingBlocks/center";
import CenterFull from "~/components/buildingBlocks/centerFull";
import Flex from "~/components/buildingBlocks/flex";
import HStack from "~/components/buildingBlocks/hStack";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import IconButton from "~/components/buildingBlocks/iconButton";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";
import useReanimate from "~/utils/useReanimate";

const containerStyles =
  "flex flex-col gap-[1vh] bg-col-350 p-[3vh] shadowBroadTight border-900-md ";
const childStyles = "p-[1vh] bg-col-750 shadowBroadTight border-600-md text-lg";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 3,
//       delayChildren: 0.5,
//       staggerChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 2,
//       ease: "easeOut",
//     },
//   },
// };

// export default function App() {
//   const [animationKey, reanimate] = useReanimate();
//   return (
//     <CenterFull className="h-full text-col-100">
//       <VStack gap="gap-[2vh]">
//         <Button onClick={reanimate} buttonText="reanimate" />
//         <Center className="w-[40vh] h-[40vh]">
//           <motion.div
//             key={animationKey}
//             className="bg-col-940 flex justify-center flex-col gap-[2vh] p-[2vh] shadowBroadTight border-900-md"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.div className="bg-col-550 p-[1vh]" variants={itemVariants}>
//               <h2>Item 1</h2>
//             </motion.div>
//             <motion.div className="bg-col-550 p-[1vh]" variants={itemVariants}>
//               <h2>Item 2</h2>
//             </motion.div>
//             <motion.div className="bg-col-550 p-[1vh]" variants={itemVariants}>
//               <h2>Item 3</h2>
//             </motion.div>
//           </motion.div>
//         </Center>
//       </VStack>
//     </CenterFull>
//   );
// }

// const xyVariants = {
//   hidden: { opacity: 0, y: "-60vh", x: "50vw" },
//   visible: { opacity: 1, y: 0, x: 0 },
//   exit: { opacity: 0, y: -20 },
// };

// const scaleRotateVariants = {
//   hidden: { scale: 0, rotate: -720 },
//   visible: { scale: 1, rotate: 0 },
//   exit: { scale: 0, rotate: 180 },
//   transition: {
//     duration: 1.5,
//     ease: "easeInOut",
//   },
// };

// const staggerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const keyframesVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     y: [0, -20, 0, -20, 0],
//     x: [0, 20, 0, -20, 0],
//     transition: {
//       duration: 1,
//       times: [0, 0.25, 0.5, 0.75, 1],
//       ease: "easeInOut",
//     },
//   },
// };

// export default function TestComponent() {
//   const [animationKey, reanimate] = useReanimate();
//   return (
//     <CenterFull className="h-full text-col-100">
//       <VStack gap="gap-[2vh]">
//         <Button onClick={reanimate} buttonText="reanimate" />
//         <Center className="w-[40vh] h-[40vh]">
//           <motion.div
//             key={animationKey}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={keyframesVariants}
//           >
//             <h1 className="text-[5vh] textShadow font-semibold">
//               Framer Motion
//             </h1>
//           </motion.div>
//         </Center>
//       </VStack>
//     </CenterFull>
//   );
// }

const parentVariants = {
  hidden: { opacity: 0, scale: 0.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5, // Increased duration for slower parent animation
      staggerChildren: 1, // Increased stagger duration for slower staggering
      staggerDirection: -1, // 1 for forward, -1 for backward
      delayChildren: 1, // Increased delay before child animations start
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: "-50vh", x: "-50vh", scale: 0.1, rotate: -720 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotate: 0,

    transition: {
      duration: 1, // Increased duration for slower child animation
      ease: "easeOut", // Changed easing function for a slower start

      // type: "spring",
      // stiffness: 120,
      // damping: 200, // Increased damping for slower transition
      // mass: 1.5,
      // velocity: -10, // Decreased velocity for slower transition
    },
  },
};

export default function ParentComponent() {
  const [animationKey, reanimate] = useReanimate();
  return (
    <CenterFull className="h-full text-col-100">
      <VStack gap="gap-[2vh]" className="p-[1vh] bg-col-200">
        <HStack className="gap-[5vh]">
          <Flex className="p-[0.2vh] bg-col-970 border-900-md shadowBroadTight">
            <Text className="text-lg text-col-100">Example One </Text>
          </Flex>
          <IconButton onClick={reanimate} icon={RefreshIcon} />
        </HStack>
        <Center className="w-[30vh] h-fit">
          <motion.div
            key={animationKey}
            initial="hidden"
            animate="visible"
            variants={parentVariants}
            className={containerStyles}
          >
            <ChildComponent />
            <ChildComponent />
            <ChildComponent />
          </motion.div>
        </Center>{" "}
      </VStack>
    </CenterFull>
  );
}

function ChildComponent() {
  return (
    <motion.div variants={childVariants} className={childStyles}>
      <h2 className="textShadow">Child Component</h2>
    </motion.div>
  );
}

// const draggableVariants = {
//   hover: { scale: 1.1 },
//   tap: { scale: 0.9 },
// };

// const repeatVariants = {
//   move: {
//     x: [0, 100, 0],
//     transition: {
//       duration: 2,
//       repeat: 3,
//       repeatType: "loop",
//     },
//   },
// };

// export default function App() {
//   return (
//     <div className="container">
//       <motion.div
//         className={containerStyles}
//         drag
//         dragConstraints={{ left: 0, right: 300, top: 0, bottom: 200 }}
//         dragElastic={0.8}
//         variants={draggableVariants}
//         whileHover="hover"
//         whileTap="tap"
//       >
//         Drag me!
//       </motion.div>

//       <motion.div
//         className={childStyles}
//         variants={repeatVariants}
//         animate="move"
//       >
//         I will repeat!
//       </motion.div>
//     </div>
//   );
// }
