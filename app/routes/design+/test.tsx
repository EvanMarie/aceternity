import CenterFull from "~/components/buildingBlocks/centerFull";
import AnimatedCounter from "./various-new/animatedCounter";
import Center from "~/components/buildingBlocks/center";
import { useState } from "react";

export default function Test() {
  const [counterValue, setCounterValue] = useState(500.0);

  const getBackgroundSize = (value: number) => {
    return { backgroundSize: `${(value * 100) / 1000}% 100%` };
  };

  return (
    <CenterFull>
      <Center className="w-[30vh] h-[10vh] bg-col-200">
        <div className="flex flex-col items-center justify-center h-fit bg-col-300 w-full">
          <AnimatedCounter value={counterValue} fontSize="text-4xl" />
          <input
            type="range"
            min="1"
            max="999"
            onChange={(e) => setCounterValue(parseFloat(e.target.value))}
            step="0.01"
            style={getBackgroundSize(counterValue)}
            value={counterValue}
            className="w-full h-[0.5vh] mt-6 bg-white bg-opacity-80 rounded-[1vh] appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          />
        </div>
      </Center>
    </CenterFull>
  );
}
