import { Outlet } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import GSAPNav from "~/routes/gsap+/components/gsapNav";

export default function RouteIndex() {
  return (
    <LayoutContainer>
      {" "}
      <GSAPNav />
      <LayoutContainer className="pt-nav">
        <Outlet />
      </LayoutContainer>
    </LayoutContainer>
  );
}
