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
        <Button to="/gsap" buttonText="Intro" />{" "}
        <Button
          to="https://gsap.com/docs/v3/"
          target="_blank"
          buttonText="GSAP Docs"
        />
      </HStackFull>
    </NavContainer>
  );
}
