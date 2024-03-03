import { HomeIcon } from "styles";
import Button from "../buildingBlocks/button";
import IconButton from "../buildingBlocks/iconButton";
import NavContainer from "../buildingBlocks/navContainer";
import HStackFull from "../buildingBlocks/hStackFull";

export default function MainNav() {
  return (
    <NavContainer>
      <HStackFull className="px-[1vh] justify-between">
        <IconButton icon={HomeIcon} type="smallNormal" to="/" />
        <Button to="/design" buttonText="Design" />{" "}
        <Button to="/animations" buttonText="Animations" />
        <Button
          to="https://gsap.com/docs/v3/"
          target="_blank"
          buttonText="GSAP Docs"
        />
      </HStackFull>
    </NavContainer>
  );
}
