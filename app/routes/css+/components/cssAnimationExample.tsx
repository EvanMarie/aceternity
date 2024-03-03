import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Transition from "~/components/buildingBlocks/transition";
import { CSSExampleOne } from "./cssAnimationExampleComponents";

export default function CSSAnimationExample({
  notes,
  children,
}: {
  notes: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <FlexFull className="h-fit flex-col lg:flex-row bg-col-700 shadowBroadNormal border-970-md ">
      <Flex className="justify-center p-[1vh] w-full lg:w-1/2">
        <FlexFull className="h-full p-[1vh] text-col-100 bg-col-900 shadowBroadNormal border-970-md ">
          {notes}
        </FlexFull>
      </Flex>
      <FlexFull className="h-full p-[1vh] w-full lg:w-1/2">
        <FlexFull className="justify-center p-[1vh]  bg-col-200 shadowBroadNormal border-970-md ">
          {children}
        </FlexFull>
      </FlexFull>
    </FlexFull>
  );
}
