import { Outlet } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import MainNav from "~/components/main/mainNav";

export default function RouteIndex() {
  return (
    <LayoutContainer>
      {" "}
      <MainNav />
      <LayoutContainer className="pt-nav">
        <Outlet />
      </LayoutContainer>
    </LayoutContainer>
  );
}
