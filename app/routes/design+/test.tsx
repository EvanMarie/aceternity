import React, { useEffect, useState } from "react";
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
import VStack from "~/components/buildingBlocks/vStack";
import TransitionFullScreen from "~/components/buildingBlocks/transitionFullScreen";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Box from "~/components/buildingBlocks/box";
import Heading from "~/components/buildingBlocks/headingText";

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
  const [useVHUnits, setUseVHUnits] = useState(true);

  const [animationKey, reanimate] = useReanimate();
  useEffect(() => {
    reanimate();
  }, [
    letterDelay,
    damping,
    stiffness,
    overallDelay,
    letterDuration,
    yDistance,
    xDistance,
    fadeLetterDuration,
    animationMotion,
    reanimate,
  ]);

  function WrapItem({ children }: { children: React.ReactNode }) {
    return <Flex className="w-fit px-[1vh]">{children}</Flex>;
  }

  function WrapInput({
    onChange,
    label,
    value,
    min,
    max,
    increment = 1,
  }: {
    onChange: (value: number) => void; // Update the type to match expected usage
    label: string;
    value: number;
    min?: number;
    max?: number;
    increment?: number;
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
          incrementStep={increment}
        />
      </WrapItem>
    );
  }

  const largeContainerStyles =
    "bg-col-950 p-[1vh] border-900-sm shadowBroadNormal";
  const checkboxContainerStyles =
    "bg-200-diagonal1op25 py-[0.7vh] px-[1vh] insetShadowMd border-400-md";

  const propSectionContainerStyles =
    "bg-col-880 px-[0.7vh] py-[1vh] md:p-[1.5vh] insetShadowMd border-900-sm shadowBroadNormal";

  const rowSectionStyles =
    "justify-evenly items-center w-full lg:w-1/2 xxl:w-1/3";
  return (
    <TransitionFullScreen className="p-[1.5vh]">
      <Flex className="w-full md:w-90% xl:w-80%">
        <VStackFull gap="gap-[2vh]">
          <Heading
            text="Animated Title"
            layout="text-xxl-loose md:text-too-big-loose"
          />
          <FlexFull className={largeContainerStyles}>
            <Wrap className="w-full items-center justify-evenly gap-y-[1vh]">
              <HStack className={rowSectionStyles}>
                {/* DELAYS  */}
                <VStack className={propSectionContainerStyles}>
                  <WrapInput
                    onChange={setLetterDelay}
                    label="letter delay"
                    min={0}
                    max={120}
                    value={letterDelay}
                    increment={0.01}
                  />
                  <WrapInput
                    onChange={setOverallDelay}
                    label="overall delay"
                    min={0}
                    max={30}
                    value={overallDelay}
                  />
                </VStack>
                {/* DISTANCE  */}
                <VStack className={propSectionContainerStyles}>
                  <HStack gap="gap-[3vh]" className={checkboxContainerStyles}>
                    <Checkbox
                      label="vh"
                      isChecked={useVHUnits === true}
                      onChange={() => setUseVHUnits((prev) => !prev)}
                    />
                    <Checkbox
                      label="px"
                      isChecked={useVHUnits === false}
                      onChange={() => setUseVHUnits((prev) => !prev)}
                    />
                  </HStack>
                  <HStack>
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
                  </HStack>
                </VStack>
              </HStack>
              {/* row two  */}
              <HStack className={rowSectionStyles}>
                {/* SPRING  */}
                <VStack className={propSectionContainerStyles}>
                  <HStack gap="gap-[3vh]" className={checkboxContainerStyles}>
                    <Checkbox
                      label="spring"
                      isChecked={animationMotion === "spring"}
                      onChange={() =>
                        setAnimationMotion(
                          animationMotion !== "spring" ? "spring" : "tween"
                        )
                      }
                    />
                  </HStack>
                  <HStack>
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
                      increment={10}
                    />
                  </HStack>
                </VStack>
                {/* TWEEN   */}
                <VStack className={propSectionContainerStyles}>
                  <HStack gap="gap-[3vh]" className={checkboxContainerStyles}>
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
                  <WrapInput
                    onChange={setLetterDuration}
                    label="letter duration"
                    min={0}
                    max={120}
                    value={letterDuration}
                  />
                </VStack>
              </HStack>
              {/* row three  */}
              <HStack className={rowSectionStyles}>
                <HStack>
                  {/* DIRECTION SELECTOR  */}
                  <Flex className="w-[18vh] items-center">
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
                </HStack>
                {/* BUTTON  */}
                <WrapItem>
                  <Button
                    buttonText="reanimate"
                    onClick={reanimate}
                    type="smallNormal"
                  />
                </WrapItem>
              </HStack>
            </Wrap>
          </FlexFull>
          <CenterHorizontalFull
            className={`h-[50vh] md:h-[45vh] lg:h-[60vh] xxl:h-[70vh] ${largeContainerStyles} `}
          >
            <Box className="text-wrap max-w-full">
              <AnimatedText
                key={animationKey}
                text="I am some really great text!"
                textClassName="text-[3.5vh] sm:text-[4.5vh] md:text-[6vh] font-bold text-col-200 textShadow text-stroke-10-500"
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
                distanceAsVH={useVHUnits}
              />
            </Box>
          </CenterHorizontalFull>
        </VStackFull>
      </Flex>
    </TransitionFullScreen>
  );
}

// export default function Test() {
//   return <AnimatedTitleExamples />;
// }
