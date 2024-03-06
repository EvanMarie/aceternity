import Center from "~/components/buildingBlocks/center";
import { motion } from "framer-motion";
import Flex from "~/components/buildingBlocks/flex";
import VStack from "~/components/buildingBlocks/vStack";

export default function Test() {
  function MapPath({
    path = "M.4 84.1s127.4 188 267.7 3 247.3 0 247.3 0",
    height = "20vh",
    width = "60vh",
    stroke = "3",
    duration = 5,
  }: {
    path?: string;
    height?: string;
    width?: string;
    stroke?: string;
    duration?: number;
  }) {
    return (
      <Center className="p-[2vh] bg-col-900 shadowBroadLoose border-800-md">
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d={path}
            fill="transparent"
            stroke="cyan"
            strokeWidth={stroke}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: duration, ease: "easeInOut" }}
          />
        </svg>
      </Center>
    );
  }

  return (
    <Center className="w-full h-full overflow-y-auto">
      <VStack className="h-fit">
        <MapPath path="M.4 84.1s127.4 188 267.7 3 247.3 0 247.3 0" />
        <MapPath
          path="M1.1 77.8c101.7-101.7 266.5-101.7 368.2 0 81.3 81.3 81.3 213.2 0 294.5-65.1 65.1-170.6 65.1-235.6 0-52.1-52.1-52.1-136.5 0-188.5 41.6-41.6 109.2-41.6 150.8 0 33.3 33.3 33.3 87.3 0 120.6-26.7 26.7-69.9 26.7-96.5 0-21.3-21.3-21.3-55.9 0-77.2 17.1-17.1 44.7-17.1 61.8 0 13.6 13.6 13.6 35.8 0 49.4-10.9 10.9-28.6 10.9-39.5 0-8.7-8.7-8.7-22.9 0-31.6 7-7 18.3-7 25.3 0"
          width="50vh"
          height="50vh"
        />
      </VStack>
    </Center>
  );
}
