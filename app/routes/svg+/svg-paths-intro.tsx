import CodeExample from "~/components/buildingBlocks/codeExample";
import HL from "~/components/buildingBlocks/highlight";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import {
  SVGExample,
  SVGHeading,
  SVGSection,
  SVGText,
} from "~/components/main/formattingComponents";
import { motion } from "framer-motion";
import { useState } from "react";
import { HideIcon, ViewIcon } from "styles";
import Button from "~/components/buildingBlocks/button";
import DescriptionModalContent from "../css+/components/descriptionModalContent";
import FlexFull from "~/components/buildingBlocks/flexFull";

export default function FramerMotionIntro() {
  const [showCircle1, setShowCircle1] = useState(false);
  const [showCircle2, setShowCircle2] = useState(false);
  const buttonIcon = showCircle1 ? HideIcon : ViewIcon;
  return (
    <DescriptionModalContent
      heading="Intro to SVG Paths"
      bg="bg-linear2op50"
      headingColor="bg-col-890"
    >
      <FlexFull className="justify-center">
        <VStackFull className="lg:w-90% xl:w-80%" align="items-start">
          <svg width="25vh" height="25vh" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 10 H 190 V 190 H 10 Z"
              fill="deeppink"
              stroke="cyan"
              stroke-width="4"
            />
          </svg>
          <svg width="25vh" height="25vh" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M10 10 H 190 V 190 H 10 Z" // Initial path
              fill="deeppink"
              stroke="cyan"
              strokeWidth="4"
              initial={{ pathLength: 0 }} // Start with the path not drawn
              animate={{ pathLength: 1 }} // Animate to fully drawn
              transition={{
                duration: 5,
                ease: "easeInOut",
              }}
            />
          </svg>
          <SVGHeading></SVGHeading>
          <SVGText></SVGText>
          <SVGText></SVGText>
          <SVGSection>
            <SVGText></SVGText>
            <SVGText></SVGText>
            <SVGText></SVGText>
            <SVGText></SVGText>
            <SVGText></SVGText>
            <SVGText></SVGText>
            <SVGSection>
              <SVGText></SVGText>
              <SVGText></SVGText>
              <SVGText></SVGText>
              <SVGText></SVGText>
              <SVGText></SVGText>
              <SVGText></SVGText>
              <SVGText></SVGText>
              <VStackFull className="px-[2vh]">
                <SVGText></SVGText>
                <SVGText></SVGText>
                <SVGText></SVGText>
              </VStackFull>
            </SVGSection>
          </SVGSection>
          <SVGHeading></SVGHeading>
          <SVGSection>
            <SVGText></SVGText>

            <CodeExample>this</CodeExample>

            <VStackFull className="min-h-[25vh]">this</VStackFull>

            <SVGText></SVGText>

            <VStackFull className="px-[2vh]">
              <SVGText></SVGText>
              <SVGText></SVGText>
              <SVGText></SVGText>
            </VStackFull>
            <SVGHeading></SVGHeading>
            <SVGText></SVGText>
            <SVGText></SVGText>
          </SVGSection>
        </VStackFull>
      </FlexFull>
    </DescriptionModalContent>
  );
}
