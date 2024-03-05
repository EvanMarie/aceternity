import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Heading from "~/components/buildingBlocks/headingText";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export const textStyles = "text-lg-normal";
export const headingStyles = "text-xl-loose font-semibold lightTextShadow";
export const sectionStyles =
  "bg-col-980 text-col-100 px-[4vh] py-[1.5vh] border-970-md items-start shadowBroadLoose";

export default function DescriptionModalContent({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading?: string;
}) {
  return (
    <FlexFull className="px-[4vh] py-[2vh] bg-col-200 h-full overflow-y-auto insetShadowLg">
      <VStackFull className="h-fit py-[1.5vh]" align="items-start">
        {heading && (
          <FlexFull className="justify-center">
            <Flex className="px-[2vh] py-[1vh] shadowBroadNormal border-970-md bg-col-990">
              <Heading
                text={heading}
                layout="text-xxl-normal"
                className="py-[0.5vh]"
              />
            </Flex>
          </FlexFull>
        )}
        {children}
      </VStackFull>
    </FlexFull>
  );
}
