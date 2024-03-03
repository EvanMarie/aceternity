import { Outlet } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import CSSNav from "~/routes/css+/components/cssNav";
import GSAPNav from "~/routes/gsap+/components/gsapNav";

export default function RouteIndex() {
  return (
    <LayoutContainer>
      {" "}
      <CSSNav />
      <LayoutContainer className="pt-nav">
        <Outlet />
      </LayoutContainer>
    </LayoutContainer>
  );
}
