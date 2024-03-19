// app/components/Slider.tsx
import React, { useEffect, useState } from "react";
import HStack from "./hStack";
import Text from "./text";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import IconButton from "./iconButton";
import FlexFull from "./flexFull";
import HStackFull from "./hStackFull";
import Input from "./input";
import VStack from "./vStack";

interface CounterInputProps {
  label?: string;
  direction?: "flex-col" | "flex-row";
  labelColor?: string;
  min?: number;
  max?: number;
  width?: string;
  value: number;
  labelTextSizes?: string;
  onChange: (value: number) => void;
  iconTextColor?: string;
  showMaxMin?: boolean;
  showInput?: boolean;
  showButtons?: boolean;
  inputWidth?: string;
  className?: string;
  stacked?: boolean;
  maxInputLength?: number;
}

const CounterInput: React.FC<CounterInputProps> = ({
  label,
  width,
  direction = "flex-col",
  min = 0,
  max = 100,
  value,
  labelColor = "text-cyan-200 textShadow",
  labelTextSizes = "text-sm-tight md:text-md-tight",
  onChange,
  iconTextColor = "text-col-100",
  showMaxMin = false,
  showInput = true,
  showButtons = false,
  inputWidth,
  className,
  stacked = false,
  maxInputLength = 4,
}) => {
  const sliderValue = value ?? min;
  const [inputValue, setInputValue] = useState(value);

  const step = max - min <= 5 ? 0.1 : 1;

  // Update local state on increment and decrement
  const incrementValue = () => {
    const newValue = Math.min(sliderValue + step, max);
    onChange(newValue);
    setInputValue(newValue);
  };

  const decrementValue = () => {
    const newValue = Math.max(sliderValue - step, min);
    onChange(newValue);
    setInputValue(newValue);
  };

  // Update local state on input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setInputValue(newValue);
  };

  // Update parent state when the input value changes, after a debounce or on blur to minimize re-renders
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChange(inputValue);
    }, 500); // 500ms debounce
    return () => clearTimeout(timeoutId);
  }, [inputValue, onChange]);

  return (
    <>
      {stacked ? (
        <VStack
          className={`${width} gap-[0px] text-xs text-col-100 ${className}`}
        >
          {" "}
          <Text className={`${labelColor} ${labelTextSizes}`}>{label}: </Text>
          <HStackFull className="justify-center">
            {" "}
            <IconButton
              type="smallUnstyled"
              icon={FiMinusCircle}
              onClick={decrementValue}
              iconClassName={iconTextColor}
              containerClassName={!showButtons ? "hidden" : ""}
            />{" "}
            {showInput ? (
              <Input
                value={inputValue}
                onChange={handleInputChange}
                maxLength={maxInputLength}
                className={inputWidth}
                type="number"
                onBlur={() => onChange(inputValue)} // Update parent state on blur
              />
            ) : (
              <Text>{value}</Text>
            )}
            <IconButton
              type="smallUnstyled"
              icon={FiPlusCircle}
              onClick={incrementValue}
              iconClassName={iconTextColor}
              containerClassName={!showButtons ? "hidden" : ""}
            />
          </HStackFull>
          {showMaxMin && (
            <HStackFull>
              <HStackFull className="items-center">
                <Text>max:</Text>
                <span>{min}</span>
              </HStackFull>{" "}
              <HStackFull className="items-center" gap="gap-[0.4vh]">
                <Text>min:</Text>
                <span>{max}</span>
              </HStackFull>
            </HStackFull>
          )}
        </VStack>
      ) : (
        <FlexFull
          className={`${direction} ${width} gap-[0px] text-xs text-col-100 ${className}`}
        >
          <HStack
            className={` ${labelTextSizes} text-col-100 justify-center whitespace-nowrap items-center`}
          >
            <IconButton
              type="smallUnstyled"
              icon={FiMinusCircle}
              onClick={decrementValue}
              iconClassName={iconTextColor}
              containerClassName={!showButtons ? "hidden" : ""}
            />
            <Text className={`${labelColor}`}>{label}: </Text>
            {showInput ? (
              <Input
                value={inputValue}
                onChange={handleInputChange}
                maxLength={maxInputLength}
                className={inputWidth}
                type="number"
                onBlur={() => onChange(inputValue)} // Update parent state on blur
              />
            ) : (
              <Text>{value}</Text>
            )}

            <IconButton
              type="smallUnstyled"
              icon={FiPlusCircle}
              onClick={incrementValue}
              iconClassName={iconTextColor}
              containerClassName={!showButtons ? "hidden" : ""}
            />
          </HStack>
          {showMaxMin && (
            <HStackFull>
              <HStackFull className="items-center">
                <Text>max:</Text>
                <span>{min}</span>
              </HStackFull>{" "}
              <HStackFull className="items-center" gap="gap-[0.4vh]">
                <Text>min:</Text>
                <span>{max}</span>
              </HStackFull>
            </HStackFull>
          )}
        </FlexFull>
      )}
    </>
  );
};

export default CounterInput;
