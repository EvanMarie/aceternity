import Center from "../buildingBlocks/center";
import Flex from "../buildingBlocks/flex";
import FlexFull from "../buildingBlocks/flexFull";
import Text from "../buildingBlocks/text";
import VStackFull from "../buildingBlocks/vStackFull";

export function CSSHeading({ children }: { children?: React.ReactNode }) {
  const headingStyles = "text-xl-loose font-semibold lightTextShadow";
  return <Text className={headingStyles}>{children}</Text>;
}

export function CSSText({ children }: { children?: React.ReactNode }) {
  const svgTextStyles = "text-lg-normal";
  return <Text className={svgTextStyles}>{children}</Text>;
}

export function CSSSection({ children }: { children?: React.ReactNode }) {
  const sectionStyles =
    "bg-col-980 text-col-100 px-[1vh] sm:px-[2vh] md:px-[4vh] py-[1.5vh] border-970-md items-start shadowBroadLoose";
  return (
    <VStackFull className={sectionStyles} align="items-start">
      {children}
    </VStackFull>
  );
}

export function SVGHeading({ children }: { children?: React.ReactNode }) {
  const svgHeadingStyles =
    "text-xl-loose font-semibold textShadow text-col-100";
  return <Text className={svgHeadingStyles}>{children}</Text>;
}

export function SVGText({ children }: { children?: React.ReactNode }) {
  const svgTextStyles = "text-lg-normal";
  return <Text className={svgTextStyles}>{children}</Text>;
}

export function SVGSection({ children }: { children?: React.ReactNode }) {
  const svgSectionStyles =
    "bg-col-890 text-col-100 px-[1vh] sm:px-[2vh] md:px-[4vh] py-[1.5vh] border-970-md items-start shadowBroadLoose";
  return (
    <VStackFull className={svgSectionStyles} align="items-start">
      {children}
    </VStackFull>
  );
}

export function SVGExample({
  description,
  example,
}: {
  description: React.ReactNode;
  example: React.ReactNode;
}) {
  return (
    <FlexFull className="justify-center">
      <FlexFull className="flex-col md:flex-row bg-col-900 p-[1vh] shadowBroadNormal gap-[1vh] xl:w-80%">
        <Center className="w-full h-full">{example}</Center>
        <Center className="w-full h-full">{description}</Center>
      </FlexFull>
    </FlexFull>
  );
}
