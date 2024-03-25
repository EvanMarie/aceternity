import React, { useState, useEffect, useRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import "./animatedCounter.css";

const usePrevious = (value: number) => {
  const ref = useRef<number>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

const formatForDisplay = (number: number, includeDecimals: boolean) => {
  return parseFloat(Math.max(number, 0).toString())
    .toFixed(includeDecimals ? 2 : 0)
    .split("")
    .reverse();
};

const DecimalColumn: React.FC<{ fontSize: string; color: string }> = ({
  fontSize = "text-[1vh]",
  color,
}) => {
  return (
    <div>
      <span className={`${fontSize} `}>.</span>
    </div>
  );
};

interface NumberColumnProps extends HTMLMotionProps<"div"> {
  digit: string;
  delta: string | null;
  fontSize: string;
  color: string;
  incrementColor: string;
  decrementColor: string;
}

const NumberColumn: React.FC<NumberColumnProps> = ({
  digit,
  delta,
  fontSize = "text-[1vh]",
  color,
  incrementColor,
  decrementColor,
  ...motionProps
}) => {
  const [position, setPosition] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const previousDigit = usePrevious(parseInt(digit));
  const columnContainer = useRef<HTMLDivElement>(null);

  const setColumnToNumber = (number: number) => {
    if (columnContainer.current) {
      setPosition(columnContainer.current.clientHeight * (10 - number));
    }
  };

  useEffect(
    () =>
      setAnimationClass(previousDigit !== parseInt(digit) ? delta || "" : ""),
    [digit, delta, previousDigit]
  );

  useEffect(() => setColumnToNumber(parseInt(digit)), [digit]);

  return (
    <div
      className={`relative ${fontSize} flex w-[2.2vh] h-[10vh] overflow-hidden`}
      ref={columnContainer}
    >
      <motion.div
        animate={{ x: 0, y: position }}
        className={`absolute w-full h-[100vh] bottom-0 ${
          delta === "increase"
            ? "animate-pulse-green"
            : delta === "decrease"
            ? "animate-pulse-red"
            : ""
        }`}
        onAnimationComplete={() => setAnimationClass("")}
        style={
          {
            "--increment-color": incrementColor,
            "--decrement-color": decrementColor,
          } as React.CSSProperties
        }
        {...motionProps}
      >
        {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => (
          <div
            key={num}
            className={`${fontSize} h-[10vh] flex items-center justify-center`}
          >
            {num}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

interface AnimatedCounterProps {
  value?: number;
  fontSize?: string;
  color?: string;
  incrementColor?: string;
  decrementColor?: string;
  includeDecimals?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value = 0,
  fontSize = "text-xl",
  color = "text-white",
  incrementColor = "rgb(74, 222, 128)",
  decrementColor = "rgb(248, 113, 113)",
  includeDecimals = true,
}) => {
  const numArray = formatForDisplay(value, includeDecimals);
  const previousNumber = usePrevious(value);

  let delta = null;
  if (value > (previousNumber || 0)) delta = "increase";
  if (value < (previousNumber || 0)) delta = "decrease";

  return (
    <motion.div layout className="flex flex-row-reverse overflow-hidden">
      {numArray.map((number, index) =>
        number === "." ? (
          <DecimalColumn key={index} fontSize={fontSize} color={color} />
        ) : (
          <NumberColumn
            key={index}
            digit={number}
            delta={delta}
            fontSize={fontSize}
            color={color}
            incrementColor={incrementColor}
            decrementColor={decrementColor}
          />
        )
      )}
    </motion.div>
  );
};

export default AnimatedCounter;
