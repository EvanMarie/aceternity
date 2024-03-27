import React, { useState } from "react";
import { motion } from "framer-motion";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import FlexFull from "~/components/buildingBlocks/flexFull";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Input from "~/components/buildingBlocks/input";
import VStack from "~/components/buildingBlocks/vStack";
import useReanimate from "~/utils/useReanimate";
import Button from "~/components/buildingBlocks/button";
import { CloseIcon, RefreshIcon } from "styles";
import IconButton from "~/components/buildingBlocks/iconButton";
import HStack from "~/components/buildingBlocks/hStack";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Wrap from "~/components/buildingBlocks/wrap";

export function InteractiveKeyFrames() {
  const [keyframes, setKeyframes] = useState([
    { background: "#00cfd6", scale: 1, rotate: 0, borderRadius: "0%" },
    { background: "#d777fc", scale: 1.25, rotate: -90, borderRadius: "25%" },
    { background: "#8d9df2", scale: 1.5, rotate: 180, borderRadius: "50%" },
    { background: "#d777fc", scale: 1.75, rotate: -90, borderRadius: "25%" },
    { background: "#00cfd6", scale: 1.5, rotate: 0, borderRadius: "0%" },
    { background: "#00cfd6", scale: 1, rotate: 0, borderRadius: "0%" },
  ]);

  type Keyframe = {
    background: string;
    scale: number;
    rotate: number;
    borderRadius: string;
  };

  const handleKeyframeChange = (
    index: number,
    property: keyof Keyframe,
    value: string
  ) => {
    const updatedKeyframes = [...keyframes];
    if (property === "scale" || property === "rotate") {
      updatedKeyframes[index][property] = parseFloat(value);
    } else {
      updatedKeyframes[index][property] = value;
    }
    setKeyframes(updatedKeyframes);
  };

  const handleAddKeyframe = () => {
    const newKeyframe = {
      background: "#ffffff",
      scale: 1,
      rotate: 0,
      borderRadius: "0%",
    };
    setKeyframes([...keyframes, newKeyframe]);
  };

  const handleRemoveKeyframe = (index: number) => {
    const updatedKeyframes = [...keyframes];
    updatedKeyframes.splice(index, 1);
    setKeyframes(updatedKeyframes);
  };

  const [animationKey, reanimate] = useReanimate();
  return (
    <VStackFull className="py-[5vh] ">
      <Button
        onClick={reanimate}
        buttonText="Reanimate"
        iconLeft={RefreshIcon}
      />
      <Wrap className="w-full justify-center gap-[2vh] p-[2vh]">
        {keyframes.map((keyframe, index) => (
          <VStack key={index} className="w-[10vh]">
            <HStackFull className="justify-between">
              <IconButton
                onClick={() => handleRemoveKeyframe(index)}
                icon={CloseIcon}
                label="remove"
                type="smallNormal"
              />
              <input
                type="color"
                value={keyframe.background}
                onChange={(e) =>
                  handleKeyframeChange(index, "background", e.target.value)
                }
              />
            </HStackFull>
            <Input
              type="number"
              step="0.1"
              value={keyframe.scale}
              onChange={(e) =>
                handleKeyframeChange(index, "scale", e.target.value)
              }
            />
            <Input
              type="number"
              value={keyframe.rotate}
              onChange={(e) =>
                handleKeyframeChange(index, "rotate", e.target.value)
              }
            />
            <Input
              type="text"
              value={keyframe.borderRadius}
              onChange={(e) =>
                handleKeyframeChange(index, "borderRadius", e.target.value)
              }
            />
          </VStack>
        ))}
      </Wrap>
      <button onClick={handleAddKeyframe}>Add Keyframe</button>
      <CenterHorizontalFull className="h-[30vh]">
        <motion.div
          key={animationKey}
          className="w-[15vh] h-[15vh] bg-500-radial5op50 rounded-[2vh] shadowBroadTight border-970-md"
          animate={{
            background: keyframes.map((keyframe) => keyframe.background),
            scale: keyframes.map((keyframe) => keyframe.scale),
            rotate: keyframes.map((keyframe) => keyframe.rotate),
            borderRadius: keyframes.map((keyframe) => keyframe.borderRadius),
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            times: keyframes.map((_, index) => index / (keyframes.length - 1)),
            repeat: 1,
            repeatDelay: 1,
          }}
        />
      </CenterHorizontalFull>
    </VStackFull>
  );
}
