import CodeExample from "~/components/buildingBlocks/codeExample";
import DescriptionModalContent from "../css+/components/descriptionModalContent";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Text from "~/components/buildingBlocks/text";
import HL from "~/components/buildingBlocks/highlight";
import {
  SVGHeading,
  SVGSection,
  SVGText,
} from "~/components/main/formattingComponents";

export const svgTextStyles = "text-lg-normal";
export const svgheadingStyles =
  "text-xl-loose font-semibold textShadow text-col-100";

export default function SVGIntro() {
  return (
    <DescriptionModalContent
      heading="Intro to SVGs"
      bg="bg-linear2op50"
      headingColor="bg-col-890"
    >
      <CodeExample>code</CodeExample>
      <SVGHeading>Understanding SVGs</SVGHeading>
      <SVGSection>
        <SVGText>What is SVG?</SVGText>
        <SVGSection>
          <SVGText>
            SVG stands for Scalable Vector Graphics. It's an XML-based markup
            language for describing two-dimensional based vector graphics. SVG
            is essentially to graphics what HTML is to text. SVGs are scalable,
            meaning they maintain high quality at any size, and are interactive
            and scriptable, hence ideal for animations.
          </SVGText>
          <SVGText></SVGText>
        </SVGSection>
        <SVGText>Why SVG for Animations?</SVGText>
        <SVGSection>
          <SVGText>
            <HL>Scalability</HL>: Vector-based, so they scale up or down without
            losing quality.
          </SVGText>
          <SVGText>
            <HL>Performance</HL>: Generally smaller file sizes compared to
            bitmap images, which makes them faster to load.
          </SVGText>
          <SVGText>
            <HL>Interactivity</HL>: Can be manipulated via CSS and JavaScript.
          </SVGText>
          <SVGText>
            <HL>Accessibility</HL>: Text inside SVGs is selectable and
            searchable.
          </SVGText>
        </SVGSection>{" "}
      </SVGSection>
      <SVGHeading>Creating a Simple SVG</SVGHeading>
      <SVGSection>
        <SVGText>
          SVGs can be created with graphic design software like Adobe
          Illustrator or even coded by hand. Here's an example of a simple SVG
          coded directly:
        </SVGText>
      </SVGSection>
      <SVGText></SVGText>
      <SVGSection>
        <SVGText></SVGText>
        <SVGSection>
          <SVGText></SVGText>
          <SVGText></SVGText>
          <SVGText></SVGText>
          <SVGText></SVGText>
          <SVGText></SVGText>
          <SVGText></SVGText>
        </SVGSection>
      </SVGSection>
    </DescriptionModalContent>
  );
}
