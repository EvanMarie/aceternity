import { motion } from "framer-motion";
import Button from "~/components/buildingBlocks/button";
import Center from "~/components/buildingBlocks/center";
import CenterFull from "~/components/buildingBlocks/centerFull";
import VStack from "~/components/buildingBlocks/vStack";
import useReanimate from "~/utils/useReanimate";

const variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function TestComponent() {
  const [animationKey, reanimate] = useReanimate();
  return (
    <CenterFull className="h-full text-col-100">
      <VStack gap="gap-[2vh]">
        <Button onClick={reanimate} buttonText="reanimate" />
        <Center className="w-[40vh] h-[40vh]">
          <motion.div
            key={animationKey}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[5vh] textShadow font-semibold">
              Framer Motion
            </h1>
          </motion.div>
        </Center>
      </VStack>
    </CenterFull>
  );
}
