import FlexFull from "~/components/buildingBlocks/flexFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export const textStyles = "text-lg-normal";
export const headingStyles = "text-xl-loose font-semibold lightTextShadow";
export const sectionStyles =
  "bg-col-980 text-col-100 px-[4vh] py-[1.5vh] border-970-md items-start shadowBroadLoose";

export default function DescriptionModalContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlexFull className="px-[4vh] py-[2vh] bg-col-200 h-full overflow-y-auto insetShadowLg">
      <VStackFull className="h-fit py-[1.5vh]" align="items-start">
        {children}
      </VStackFull>
    </FlexFull>
  );
}
