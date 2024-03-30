import { Outlet } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import SpringNav from "./components/springNav";

export default function RouteIndex() {
  return (
    <LayoutContainer>
      {" "}
      <SpringNav />
      <LayoutContainer className="pt-nav">
        <Outlet />
      </LayoutContainer>
    </LayoutContainer>
  );
}
