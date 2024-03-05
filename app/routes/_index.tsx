import type { MetaFunction } from "@remix-run/node";
import Button from "~/components/buildingBlocks/button";
import HStack from "~/components/buildingBlocks/hStack";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import Text from "~/components/buildingBlocks/text";
import Transition from "~/components/buildingBlocks/transition";
import VStack from "~/components/buildingBlocks/vStack";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <LayoutContainer>
      <Transition className="w-full h-full justify-center items-center">
        <VStack className="text-center">
          <Text className="font-cursive boldTextGlow text-col-900 text-stroke-8-170 text-[10vh] animate-slideInRight">
            CSS, Tailwind, and
          </Text>
          <Text className="font-cursive boldTextGlow text-col-900 text-stroke-8-170 text-[10vh] animate-slideInLeft delay-1500">
            GSAP Animations
          </Text>
          <Text className="text-col-100 text-2xl textShadow animate-zoomIn">
            Fun with code that moves!
          </Text>
          <HStack className="animate-slideInUp50vh duration-2200">
            {" "}
            <Button to="/design" buttonText="Design" />
            <Button to="/css" buttonText="CSS & Tailwind" />
            <Button to="/svg" buttonText="SVG" />
            <Button to="/gsap" buttonText="GSAP" />
          </HStack>
        </VStack>
      </Transition>
    </LayoutContainer>
  );
}
