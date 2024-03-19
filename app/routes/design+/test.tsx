import React, { useState } from "react";
import AnimatedText, { AnimationType } from "./various-new/animatedTitle";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import CenterFull from "~/components/buildingBlocks/centerFull";
import DropDownMenu from "~/components/buildingBlocks/dropDownSelect";
import CounterInput from "~/components/buildingBlocks/counterInput";
import Flex from "~/components/buildingBlocks/flex";
import Wrap from "~/components/buildingBlocks/wrap";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Button from "~/components/buildingBlocks/button";
import useReanimate from "~/utils/useReanimate";
import HStack from "~/components/buildingBlocks/hStack";
import Checkbox from "~/components/buildingBlocks/checkBox";

export default function AnimatedTextRoute() {
  const [selectedAnimation, setSelectedAnimation] =
    useState<AnimationType>("inFromTop");
  const [letterDelay, setLetterDelay] = useState(0.09);
  const [damping, setDamping] = useState(12);
  const [stiffness, setStiffness] = useState(100);
  const [overallDelay, setOverallDelay] = useState(0.2);
  const [overallDuration, setOverallDuration] = useState<number | null>(null);
  const [letterDuration, setLetterDuration] = useState(0.5);
  const [yDistance, setYDistance] = useState(150);
  const [xDistance, setXDistance] = useState(150);
  const [fadeLetterDuration, setFadeLetterDuration] = useState(0.5);
  const [animationMotion, setAnimationMotion] = useState<"spring" | "tween">(
    "spring"
  );

  const [animationKey, reanimate] = useReanimate();

  function WrapItem({ children }: { children: React.ReactNode }) {
    return <Flex className="w-fit px-[1vh]">{children}</Flex>;
  }

  function WrapInput({
    onChange,
    label,
    value,
    min,
    max,
  }: {
    onChange: (value: number) => void; // Update the type to match expected usage
    label: string;
    value: number;
    min?: number;
    max?: number;
  }) {
    return (
      <WrapItem>
        <CounterInput
          value={value}
          onChange={(newValue: number) => onChange(newValue)} // Directly use the newValue
          label={label}
          inputWidth="w-[8vh]"
          stacked
          min={min}
          max={max}
        />
      </WrapItem>
    );
  }

  return (
    <CenterFull>
      <Flex className="w-full md:w-90% xl:w-80%">
        <VStackFull>
          <Wrap className="w-full items-center justify-evenly gap-y-[1vh]">
            <Flex className="w-[20vh]">
              <DropDownMenu
                options={[
                  "inFromTop",
                  "inFromBottom",
                  "inFromLeft",
                  "inFromRight",
                  "fadeIn",
                  "custom",
                ]}
                buttonText="direction"
                selectedOption={selectedAnimation}
                setSelectedOption={setSelectedAnimation}
              />
            </Flex>
            <WrapInput
              onChange={setLetterDelay}
              label="letter delay"
              min={0}
              max={120}
              value={letterDelay}
            />

            <WrapInput
              onChange={setDamping}
              label="damping"
              min={0}
              max={200}
              value={damping}
            />

            <WrapInput
              onChange={setStiffness}
              label="stiffness"
              min={0}
              max={500}
              value={stiffness}
            />
            <WrapInput
              onChange={setOverallDelay}
              label="overall delay"
              min={0}
              max={30}
              value={overallDelay}
            />
            <WrapInput
              onChange={setLetterDuration}
              label="letter duration"
              min={0}
              max={120}
              value={letterDuration}
            />
            <WrapInput
              onChange={setYDistance}
              label="y distance"
              min={-1000}
              max={1000}
              value={yDistance}
            />
            <WrapInput
              onChange={setXDistance}
              label="x distance"
              min={-1000}
              max={1000}
              value={xDistance}
            />
            <WrapInput
              onChange={setFadeLetterDuration}
              label="fade letter duration"
              min={0}
              max={120}
              value={fadeLetterDuration}
            />
            <HStack gap="gap-[3vh]">
              <Checkbox
                label="spring"
                isChecked={animationMotion === "spring"}
                onChange={() =>
                  setAnimationMotion(
                    animationMotion !== "spring" ? "spring" : "tween"
                  )
                }
              />
              <Checkbox
                label="tween"
                isChecked={animationMotion === "tween"}
                onChange={() =>
                  setAnimationMotion(
                    animationMotion !== "tween" ? "tween" : "spring"
                  )
                }
              />
            </HStack>
            <WrapItem>
              <Button
                buttonText="reanimate"
                onClick={reanimate}
                type="smallNormal"
              />
            </WrapItem>
          </Wrap>
          <CenterHorizontalFull className="h-[45vh]">
            <AnimatedText
              key={animationKey}
              text="I am some really great text!"
              textClassName="text-too-big-loose md:text-insane-loose font-bold text-col-200 textShadow text-stroke-10-500"
              animationType={selectedAnimation as AnimationType}
              animationMotion={animationMotion}
              letterDelay={letterDelay}
              damping={damping}
              stiffness={stiffness}
              overallDelay={overallDelay}
              overallDuration={overallDuration || undefined}
              letterDuration={letterDuration}
              yDistance={yDistance}
              xDistance={xDistance}
              fadeLetterDuration={fadeLetterDuration}
            />
          </CenterHorizontalFull>
        </VStackFull>
      </Flex>
    </CenterFull>
  );
}

// export default function Test() {
//   return <AnimatedTitleExamples />;
// }
