import { HomeIcon } from "styles";
import Button from "../../../components/buildingBlocks/button";
import IconButton from "../../../components/buildingBlocks/iconButton";
import NavContainer from "../../../components/buildingBlocks/navContainer";
import HStackFull from "../../../components/buildingBlocks/hStackFull";

export default function CSSNav() {
  return (
    <NavContainer>
      <HStackFull className="px-[1vh] justify-between">
        <IconButton icon={HomeIcon} type="smallNormal" to="/" />
        <Button to="/css/timing-functions" buttonText="Timing Functions" />
        <Button to="/css/element-animations" buttonText="Element Animations" />
        <Button
          to="https://developer.mozilla.org/en-US/docs/Web/CSS/animation"
          target="_blank"
          buttonText="MDN Docs"
        />
      </HStackFull>
    </NavContainer>
  );
}
