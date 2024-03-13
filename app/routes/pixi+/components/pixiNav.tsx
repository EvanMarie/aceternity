import { HomeIcon } from "styles";
import Button from "../../../components/buildingBlocks/button";
import IconButton from "../../../components/buildingBlocks/iconButton";
import NavContainer from "../../../components/buildingBlocks/navContainer";
import HStackFull from "../../../components/buildingBlocks/hStackFull";

export default function PixiNav() {
  return (
    <NavContainer>
      <HStackFull className="px-[1vh] justify-between">
        <IconButton icon={HomeIcon} type="smallNormal" to="/" />
        <HStackFull className="h-full items-center justify-around">
          <Button to="/pixi" buttonText="Intro" type="smallNormal" />

          <Button
            to="https://pixijs.com/"
            buttonText="Docs"
            type="smallNormal"
            target="_blank"
          />
        </HStackFull>
      </HStackFull>
    </NavContainer>
  );
}
