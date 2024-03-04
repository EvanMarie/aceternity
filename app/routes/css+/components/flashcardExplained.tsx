import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import DescriptionModalContent, {
  headingStyles,
  sectionStyles,
  textStyles,
} from "./descriptionModalContent";

export default function FlashcardExplained() {
  return (
    <DescriptionModalContent>
      <Text className={headingStyles}></Text>
      <VStackFull className={sectionStyles}>
        <Text className={textStyles}></Text>
      </VStackFull>
      <Text className={headingStyles}></Text>
      <VStackFull className={sectionStyles}>
        <Text className={textStyles}></Text>
        <VStackFull className={sectionStyles}>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
        </VStackFull>
      </VStackFull>
      <Text className={headingStyles}></Text>
      <VStackFull className={sectionStyles}>
        <Text className={textStyles}></Text>
        <Text className={textStyles}></Text>
        <VStackFull className={sectionStyles}>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
          <Text className={textStyles}></Text>
        </VStackFull>
      </VStackFull>
      <Text className={headingStyles}></Text>
      <VStackFull className={sectionStyles}>
        <Text className={textStyles}></Text>
      </VStackFull>
    </DescriptionModalContent>
  );
}
