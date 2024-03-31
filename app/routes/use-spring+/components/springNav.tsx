import { NavLink } from "@remix-run/react";
import { HomeIcon } from "styles";
import Center from "~/components/buildingBlocks/center";
import Flex from "~/components/buildingBlocks/flex";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import IconButton from "~/components/buildingBlocks/iconButton";
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
    title: "Ex 4",
    to: "/use-spring/parallax-four",
  },
  //   {
  //     title: "Item 4",
  //     to: "/",
  //   },
];

export default function SpringNav({ activePanel }: { activePanel: string }) {
  const baseStyles = "px-[1vh] py-[0.3vh]";
  const activeStyle = "metallicEdgesMd bg-col-950 hover:metallicEdgesMd";
  const inactiveStyle =
    "mainInset bg-col-960 mainBorder transition-400 border-900-md";
  return (
    <HStackFull
      gap="gap-[3vh]"
      className="absolute top-0 left-0 justify-between z-10 shadowBroadTight h-[5vh] items-center "
    >
      <Center className="w-[8vh] flex-shrink-0 ">
        <IconButton icon={HomeIcon} type="smallNormal" to="/" />
      </Center>
      {MenuItems.map((item, index) => (
        <HStackFull
          key={index}
          className={`h-full items-center ${
            activePanel === item.title ? "activeStyle" : "inactiveStyle"
          }`}
        >
          <NavLink
            key={item.title}
            to={item.to}
            className="flex h-full items-center"
          >
            <Flex className="h-full items-center ">
              <AnimatedInPlaceText
                fontStyle=""
                textSize="text-[2vh]"
                text={item.title}
                isScale
                style={{}}
                scaleSize={1.2}
                textShadow=""
                containerClassName={` ${baseStyles} cursor-pointer
                  ${
                    activePanel === item.title ? activeStyle : inactiveStyle
                  } transition-400`}
              />
            </Flex>
          </NavLink>
        </HStackFull>
      ))}
    </HStackFull>
  );
}

//   return (
//     <NavContainer>
//       <HStackFull className="px-[1vh] justify-between">
//         <IconButton icon={HomeIcon} type="smallNormal" to="/" />
//         <HStackFull className="h-full items-center justify-around">
//           <Button to="/use-spring" buttonText="Intro" type="smallNormal" />
//           <Button
//             to="/use-spring/parallax-pages"
//             buttonText="parallax pages"
//             type="smallNormal"
//           />
//           {/* <Button
//             to="/svg/svg-paths-intro"
//             buttonText="Paths"
//             type="smallNormal"
//           />
//           <Button
//             to="/svg/svg-path-examples"
//             buttonText="Playground"
//             type="smallNormal"
//           />
//           <Button
//             to="https://www.framer.com/motion/introduction/"
//             buttonText="Docs"
//             type="smallNormal"
//             target="_blank"
//           /> */}
//         </HStackFull>
//       </HStackFull>
//     </NavContainer>
//   );
// }
