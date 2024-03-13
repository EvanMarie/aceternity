import { HomeIcon } from "styles";
import Button from "../../../components/buildingBlocks/button";
import IconButton from "../../../components/buildingBlocks/iconButton";
import NavContainer from "../../../components/buildingBlocks/navContainer";
import HStackFull from "../../../components/buildingBlocks/hStackFull";

export default function GSAPNav() {
  return (
    <NavContainer>
      <HStackFull className="px-[1vh] justify-between">
        <IconButton icon={HomeIcon} type="smallNormal" to="/" />
        <HStackFull className="h-full items-center justify-around">
          <Button to="/gsap" buttonText="Intro" />{" "}
          <Button to="/gsap/playground" buttonText="Play" />
          <Button
            to="https://gsap.com/docs/v3/"
            target="_blank"
            buttonText="Docs"
          />
        </HStackFull>
      </HStackFull>
    </NavContainer>
  );
}
