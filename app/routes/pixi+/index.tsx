import TransitionFullScreen from "~/components/buildingBlocks/transitionFullScreen";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";

import { ClientOnly } from "remix-utils/client-only";
import { SimplestDemo } from "~/components/pixi/demo";

export default function MyComponent() {
  // return (
  //   <ClientOnly
  //     fallback={<CenterHorizontalFull>Loading...</CenterHorizontalFull>}
  //   >
  //     {() => <SimplestDemo />}
  //   </ClientOnly>
  // );
  return (
    <TransitionFullScreen>
      <CenterHorizontalFull>
        {" "}
        <SimplestDemo />
      </CenterHorizontalFull>
    </TransitionFullScreen>
  );
}
