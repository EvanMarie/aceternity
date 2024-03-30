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
    title: "Parallax Pages",
    to: "/use-spring/parallax-pages",
  },
  {
    title: "",
    to: "/use-spring/characters",
  },
  {
    title: "",
    to: "/use-spring/",
  },
  {
    title: "",
    to: "/use-spring/",
  },
  //   {
  //     title: "Item 4",
  //     to: "/",
  //   },
];

export default function SpringNav({ activePanel }: { activePanel: string }) {
  const baseStyles = "px-[1vh] py-[0.3vh]";
  const activeStyle = "metallicEdgesMd bg-col-210 hover:metallicEdgesMd";
  const inactiveStyle = "mainInset bg-col-210 mainBorder transition-400 ";
  return (
    <HStackFull
      gap="gap-[3vh]"
      className="absolute top-0 left-0 justify-between pt-[1vh] z-10"
    >
      <Center className="w-[8vh] flex-shrink-0">
        <IconButton icon={HomeIcon} type="smallNormal" to="/" />
      </Center>
      {MenuItems.map((item) => (
        <HStackFull>
          <NavLink key={item.title} to={item.to}>
            <AnimatedInPlaceText
              text={item.title}
              isScale
              gradient={
                activePanel === item.title
                  ? "activeGradient"
                  : "inactiveGradient group-hover:logoGradient"
              }
              textSize="text-md-normal md:text-lg-normal lg:text-xl-normal"
              scaleSize={1.2}
              textShadow=""
              containerClassName={` ${baseStyles} cursor-pointer
                ${
                  activePanel === item.title ? activeStyle : inactiveStyle
                } transition-400`}
            />
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
