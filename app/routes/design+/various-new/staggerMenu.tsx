import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Flex from "~/components/buildingBlocks/flex";
import Button from "~/components/buildingBlocks/button";
import IconButton from "~/components/buildingBlocks/iconButton";
import { CgSmile } from "react-icons/cg";

const tempItems = ["Item 1", "Item 2", "Item 3", "Item 4"];

export default function StaggerMenu({
  enterFrom = "bottom",
  menuItems = tempItems,
  menuDirection = "flex-col",
  menuGap = "gap-[1vh]",
  containerClassName,
  itemPadding = "px-[1.5vh] py-[0.5vh]",
  itemStyle = "bg-col-300",
  itemHoverStyle = "hover:bg-col-200 transition-400",
  itemHoverAnimation = "hover:animate-wiggle",
  damping = 10,
  stiffness = 100,
  buttonText,
  buttonIcon,
}: {
  enterFrom?: string;
  menuItems: string[];
  menuDirection?: string;
  menuGap?: string;
  containerClassName?: string;
  itemStyle?: string;
  itemHoverStyle?: string;
  itemHoverAnimation?: string;
  itemPadding?: string;
  damping?: number;
  stiffness?: number;
  buttonText?: string;
  buttonIcon?: React.ComponentType<{ className?: string }>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const itemVariants = {
    hidden: (enterFrom: string) => {
      switch (enterFrom) {
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
      transition: { type: "spring", damping, stiffness },
    },
    exit: (enterFrom: string) => {
      switch (enterFrom) {
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
      {buttonText ? (
        <Button
          onClick={() => setIsOpen(!isOpen)}
          buttonText="Open Menu"
          iconLeft={buttonIcon ? buttonIcon : undefined}
        />
      ) : (
        <IconButton onClick={() => setIsOpen(!isOpen)} icon={CgSmile} />
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
          >
            <Flex
              className={`${menuDirection} ${menuGap} ${containerClassName}`}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={enterFrom}
                  exit={itemVariants.exit(enterFrom)}
                  className={`hover:cursor-pointer ${itemPadding} ${itemStyle} ${itemHoverStyle} ${itemHoverAnimation}`}
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
