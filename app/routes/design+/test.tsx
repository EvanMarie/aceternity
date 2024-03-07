import Center from "~/components/buildingBlocks/center";
import { delay, motion, useAnimation } from "framer-motion";
import Flex from "~/components/buildingBlocks/flex";
import VStack from "~/components/buildingBlocks/vStack";
import FlexFull from "~/components/buildingBlocks/flexFull";
import { useState } from "react";
import Button from "~/components/buildingBlocks/button";

import { useEffect } from "react";
import Box from "~/components/buildingBlocks/box";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import HStack from "~/components/buildingBlocks/hStack";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Wrap from "~/components/buildingBlocks/wrap";
import { SVGHeading } from "~/components/main/formattingComponents";
import Heading from "~/components/buildingBlocks/headingText";
import Text from "~/components/buildingBlocks/text";
import HL from "~/components/buildingBlocks/highlight";
import SVGMultiPaths from "../svg+/components/multiPath";

export default function Test() {
  const paths = [
    {
      path: "M1 1 V 199 H 199 V 0 Z",
      // ease: "anticipate",
      delay: 0.1,
      duration: 3,
      strokeWidth: 2,
    },
    {
      path: "M10 10 H 190 V 190 H 10 Z",
      // ease: "backIn",
      delay: 1.3,
      duration: 2.5,
      strokeWidth: 1.8,
    },
    {
      path: "M20 20 V 180 H 180 V 20 Z",
      // ease: "circIn",
      delay: 0.2,
      duration: 1.5,
      strokeWidth: 1.6,
    },
    {
      path: "M30 30 H 170 V 170 H 30 Z",
      // ease: "backInOut",
      delay: 0.6,
      duration: 2.9,
      strokeWidth: 1.4,
    },
    {
      path: "M40 40 V 160 H 160 V 40 Z",
      // ease: "circOut",
      delay: 0.3,
      duration: 1.7,
      strokeWidth: 1.2,
    },
    {
      path: "M50 50 H 150 V 150 H 50 Z",
      // ease: "circInOut",
      delay: 1,
      duration: 2.5,
      strokeWidth: 1,
    },
    {
      path: "M60 60 V 140 H 140 V 60 Z",
      // ease: "easeIn",
      delay: 0.4,
      duration: 1.3,
      strokeWidth: 0.9,
    },
    {
      path: "M70 70 H 130 V 130 H 70 Z",
      // ease: "easeOut",
      delay: 1.2,
      duration: 2.1,
      strokeWidth: 0.8,
    },
    {
      path: "M80 80 V 120 H 120 V 80 Z",
      // ease: "easeInOut",
      delay: 0.6,
      duration: 1.9,
      strokeWidth: 0.7,
    },
    {
      path: "M90 90 H 110 V 110 H 90 Z",
      // ease: "anticipate",
      delay: 1,
      duration: 1.5,
      strokeWidth: 0.6,
    },
  ];
  return (
    <FlexFull className="h-full justify-center overflow-y-auto bg-600-linear6op75">
      <SVGMultiPaths paths={paths} />
    </FlexFull>
  );
}
