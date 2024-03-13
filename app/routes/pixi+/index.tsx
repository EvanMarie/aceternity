import TransitionFullScreen from "~/components/buildingBlocks/transitionFullScreen";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";

export const svgTextStyles = "text-lg-normal";
export const svgheadingStyles =
  "text-xl-loose font-semibold textShadow text-col-100";

export default function SVGIntro() {
  return (
    <TransitionFullScreen>
      <CenterHorizontalFull className="h-screen">THIS</CenterHorizontalFull>
    </TransitionFullScreen>
  );
}
