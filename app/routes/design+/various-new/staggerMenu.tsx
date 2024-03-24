import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Flex from "~/components/buildingBlocks/flex";

const tempItems = ["Item 1", "Item 2", "Item 3", "Item 4"];

export default function StaggerMenu({
  direction = "top",
  menuItems = tempItems,
  menuDirection = "flex-col",
  containerClassName,
}: {
  direction?: string;
  menuItems: string[];
  menuDirection?: string;
  containerClassName?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const itemVariants = {
    hidden: (direction: string) => {
      switch (direction) {
        case "left":
          return { x: -100, opacity: 0 };
        case "right":
          return { x: 100, opacity: 0 };
        case "top":
          return { y: -100, opacity: 0 };
        case "bottom":
          return { y: 100, opacity: 0 };
        default:
          return { x: 0, opacity: 0 };
      }
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
    exit: (direction: string) => {
      switch (direction) {
        case "left":
          return { x: -100, opacity: 0 }; // Exit to the left
        case "right":
          return { x: 100, opacity: 0 }; // Exit to the right
        case "top":
          return { y: -100, opacity: 0 }; // Exit to the top
        case "bottom":
          return { y: 100, opacity: 0 }; // Exit to the bottom
        default:
          return { x: 0, opacity: 0 };
      }
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.3,
        staggerDirection: -1,
      },
    },
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu</button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
          >
            <Flex className={`${menuDirection} ${containerClassName}`}>
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={direction}
                  exit={itemVariants.exit(direction)}
                >
                  {item}
                </motion.div>
              ))}
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
