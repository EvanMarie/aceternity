import { Outlet } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import SpringNav from "./components/springNav";

export default function RouteIndex() {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
}
