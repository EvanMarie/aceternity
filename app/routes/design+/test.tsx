import React, { useState } from "react";
import AnimatedText from "./various-new/animatedTitle";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import AnimatedTitleExamples from "./various-new/animatedTitleExamples";
import CenterFull from "~/components/buildingBlocks/centerFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import DropDownMenu from "~/components/buildingBlocks/dropDownSelect";
import Box from "~/components/buildingBlocks/box";
import CounterInput from "~/components/buildingBlocks/counterInput";

const AnimatedTextRoute: React.FC = () => {
  // return <AnimatedTitleExamples />;
  const [selectedDirection, setSelectedDirection] = useState<
    string | undefined
  >(undefined);
  const [letterDelay, setLetterDelay] = React.useState(0.09);
  const [damping, setDamping] = React.useState(12);
  const [stiffness, setStiffness] = React.useState(100);
  const [overallDelay, setOverallDelay] = React.useState(0.2);
  const [overallDuration, setOverallDuration] = React.useState<number | null>(
    null
  );
  const [letterDuration, setLetterDuration] = React.useState(0.5);
  const [yDistance, setYDistance] = React.useState<number | string>(150);
  const [xDistance, setXDistance] = React.useState<number | string>(150);
  const [fadeLetterDuration, setFadeLetterDuration] = React.useState(0.5);

  return (
    <CenterFull>
      <VStackFull>
        <HStackFull>
          <Box className="w-[20vh]">
            <DropDownMenu
              options={["top", "bottom", "left", "right", "fadeIn", "custom"]}
              buttonText="direction"
              selectedOption={selectedDirection}
              setSelectedOption={setSelectedDirection}
            />
          </Box>
          <CounterInput
            value={0.09}
            onChange={() => {
              setLetterDelay;
            }}
            label="letter delay"
          />
          <CounterInput
            value={12}
            onChange={() => {
              setDamping;
            }}
            label="damping"
          />
          <CounterInput
            value={100}
            onChange={() => {
              setStiffness;
            }}
            label="stiffness"
          />
          <CounterInput
            value={0.2}
            onChange={() => {
              setOverallDelay;
            }}
            label="overall delay"
          />
          <CounterInput
            value={0.5}
            onChange={() => {
              setLetterDuration;
            }}
            label="letter duration"
          />
          <CounterInput
            value={150}
            onChange={() => {
              setYDistance;
            }}
            label="y distance"
          />
          <CounterInput
            value={150}
            onChange={() => {
              setXDistance;
            }}
            label="x distance"
          />
          <CounterInput
            value={0.5}
            onChange={() => {
              setFadeLetterDuration;
            }}
            label="fade letter duration"
          />
        </HStackFull>
      </VStackFull>
    </CenterFull>
  );
};

export default AnimatedTextRoute;
