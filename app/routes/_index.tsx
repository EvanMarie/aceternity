import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
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
        <VStack>
          <Text className="font-cursive boldTextGlow text-col-900 text-stroke-8-170 text-[10vh] ">
            GSAP Animation
          </Text>
          <Text className="text-col-100 text-2xl textShadow">
            Fun with code that moves!
          </Text>
          <HStack>
            {" "}
            <Button to="/design" buttonText="Design" />
            <Button to="/animations" buttonText="Animations" />
            <Button
              to="https://gsap.com/docs/v3/"
              target="_blank"
              buttonText="GSAP Docs"
            />
          </HStack>
        </VStack>
      </Transition>
    </LayoutContainer>
  );
}
