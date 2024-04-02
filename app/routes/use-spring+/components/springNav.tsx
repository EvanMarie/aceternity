import { NavLink } from "@remix-run/react";
import { HomeIcon } from "styles";
import Center from "~/components/buildingBlocks/center";
import Flex from "~/components/buildingBlocks/flex";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import IconButton from "~/components/buildingBlocks/iconButton";
import Text from "~/components/buildingBlocks/text";
import AnimatedInPlaceText from "~/routes/design+/various-new/animateInPlaceText";

const MenuItems = [
  {
    title: "Intro",
    to: "/use-spring",
  },
  {
    title: "Ex 1",
    to: "/use-spring/parallax-pages",
  },
  {
    title: "Ex 2",
    to: "/use-spring/parallax-two",
  },
  {
    title: "Ex 3",
    to: "/use-spring/parallax-three",
  },
  {
    title: "Experiments",
    to: "/use-spring/parallax-exp",
  },
  //   {
  //     title: "Item 4",
  //     to: "/",
  //   },
];

export default function SpringNav({ activePanel }: { activePanel: string }) {
  const baseStyles = "text-[1.2vh] md:text-[2vh] px-[1vh] py-[0.3vh]";
  const activeStyle =
    "metallicEdgesMd bg-col-200 hover:metallicEdgesMd text-col-900 lightTextShadow";
  const inactiveStyle =
    "mainInset bg-col-960 mainBorder transition-400 border-900-md text-col-100 textShadow";
  return (
    <HStackFull
      gap="gap-[1.5vh]"
      className="absolute top-0 left-0 justify-between z-10 shadowBroadTight h-[5vh] items-center "
    >
      <Center className="w-[8vh] flex-shrink-0 ">
        <IconButton icon={HomeIcon} type="smallNormal" to="/" />
      </Center>
      {MenuItems.map((item, index) => (
        <HStackFull
          key={index}
          className={`h-full items-center pr-[1vh] ${
            activePanel === item.title ? "activeStyle" : "inactiveStyle"
          }`}
        >
          <NavLink
            key={item.title}
            to={item.to}
            className="flex h-full items-center"
          >
            <Flex className="h-full items-center ">
              <Text
                className={` ${baseStyles} cursor-pointer
                  ${
                    activePanel === item.title ? activeStyle : inactiveStyle
                  } transition-400`}
              >{`${item.title}`}</Text>
            </Flex>
          </NavLink>
        </HStackFull>
      ))}
    </HStackFull>
  );
}
