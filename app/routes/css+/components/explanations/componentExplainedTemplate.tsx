import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import DescriptionModalContent from "../descriptionModalContent";
import CodeExample from "~/components/buildingBlocks/codeExample";
import {
  CSSSection,
  CSSText,
  CSSHeading,
} from "~/components/main/formattingComponents";

export default function ComponentExplainedTemplate() {
  return (
    <DescriptionModalContent heading="heading">
      <CodeExample>code</CodeExample>
      <CSSHeading></CSSHeading>
      <CSSSection>
        <CSSText></CSSText>
      </CSSSection>
      <CSSHeading></CSSHeading>
      <CSSSection>
        <CSSText></CSSText>
        <CSSSection>
          <CSSText></CSSText>
          <CSSText></CSSText>
          <CSSText></CSSText>
          <CSSText></CSSText>
          <CSSText></CSSText>
          <CSSText></CSSText>
        </CSSSection>
      </CSSSection>
      <CSSHeading></CSSHeading>
      <CSSSection>
        <CSSText></CSSText>
        <CSSText></CSSText>
        <CSSSection>
          <CSSText></CSSText>
          <CSSText></CSSText>
          <CSSText></CSSText>
          <CSSText></CSSText>
          <CSSText></CSSText>
          <CSSText></CSSText>
        </CSSSection>
      </CSSSection>
      <CSSHeading></CSSHeading>
      <CSSSection>
        <CSSText></CSSText>
      </CSSSection>
    </DescriptionModalContent>
  );
}
