// app/components/Slider.tsx
import React from "react";
import Flex from "./flex";
import HStack from "./hStack";
import Text from "./text";

interface SliderProps {
  label?: string;
  direction?: "flex-col" | "flex-row";
  min?: number;
  max?: number;
  value?: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  label,
  direction = "flex-col",
  min = 0,
  max = 100,
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <Flex className={`${direction} gap-[0px]`}>
      {label && (
        <HStack className="text-md-tight text-col-100 justify-center">
          <Text>{label}: </Text>
          <Text>{value}</Text>
        </HStack>
      )}
      <Flex className="items-center space-x-2">
        <span className="text-sm text-col-100">{min}</span>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          className="slider h-[0.5vh] w-full cursor-pointer appearance-none  bg-col-300 dark:bg-gray-700 focus:outline-none focus:ring focus:ring-col-400 shadowBroadTight"
        />{" "}
        <span className="text-sm text-col-100">{max}</span>
      </Flex>
    </Flex>
  );
};

export default Slider;
