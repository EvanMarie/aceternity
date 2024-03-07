import { HomeIcon } from "styles";
import Button from "../../../components/buildingBlocks/button";
import IconButton from "../../../components/buildingBlocks/iconButton";
import NavContainer from "../../../components/buildingBlocks/navContainer";
import HStackFull from "../../../components/buildingBlocks/hStackFull";

export default function SVGNav() {
  return (
    <NavContainer>
      <HStackFull className="px-[1vh] justify-between">
        <IconButton icon={HomeIcon} type="smallNormal" to="/" />
        <HStackFull className="h-full items-center justify-around">
          <Button to="/svg" buttonText="Intro" type="smallNormal" />
          <Button
            to="/svg/framer-motion-intro"
            buttonText="Framer"
            type="smallNormal"
          />
          <Button
            to="/svg/svg-paths-intro"
            buttonText="Paths"
            type="smallNormal"
          />
          <Button
            to="/svg/svg-path-examples"
            buttonText="Playground"
            type="smallNormal"
          />
        </HStackFull>
      </HStackFull>
    </NavContainer>
  );
}
