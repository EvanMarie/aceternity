import { Outlet } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import SVGNav from "./components/pixiNav";
import PixiNav from "./components/pixiNav";

export default function RouteIndex() {
  return (
    <LayoutContainer>
      {" "}
      <PixiNav />
      <LayoutContainer className="pt-nav">
        <Outlet />
      </LayoutContainer>
    </LayoutContainer>
  );
}
