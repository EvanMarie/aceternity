import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import DescriptionModalContent, {
  headingStyles,
  sectionStyles,
  textStyles,
} from "./descriptionModalContent";
import HL from "~/components/buildingBlocks/highlight";
import Heading from "~/components/buildingBlocks/headingText";

export default function FlashcardExplained() {
  return (
    <DescriptionModalContent heading="3D Flashcard">
      <Text className={headingStyles}>1. Setting Up the Perspective</Text>
      <VStackFull className={sectionStyles}>
        <Text className={textStyles}>
          <HL>perspective-100 group</HL>: The outer Box uses a custom utility
          class <HL>perspective-100</HL>, which has been added to the Tailwind
          configuration to apply a perspective: 100vh; style. This property
          affects the child elements, giving the 3D flip effect a more profound
          depth. The <HL>group</HL> class is used to establish a context for
          targeting child elements when the group is hovered.
        </Text>
      </VStackFull>
      <Text className={headingStyles}>2. Configuring the Card Container</Text>
      <VStackFull className={sectionStyles}>
        <Text className={textStyles}>
          <HL>
            relative h-[35vh] w-[40vh] transition-transform duration-1000
            transform-style-3d group-hover:rotate-y-180
          </HL>
          : This set of classes configures the card's container.
        </Text>
        <VStackFull className={sectionStyles}>
          <Text className={textStyles}>
            <HL>relative</HL>: Positions the card container relatively, allowing
            absolutely positioned child elements (front and back faces) to be
            positioned relative to this container.
          </Text>
          <Text className={textStyles}>
            <HL>h-[35vh] w-[40vh]</HL>: These classes set the height and width
            of the card using viewport units, making the card responsive to the
            viewport size.
          </Text>
          <Text className={textStyles}>
            <HL>transition-transform</HL>: Applies a transition effect to the
            transform property, ensuring changes (like rotation) occur smoothly
            over time.
          </Text>
          <Text className={textStyles}>
            <HL>duration-1000</HL>: Sets the duration of the transition effect
            to 1000 milliseconds (1 second), making the flip animation neither
            too fast nor too slow.
          </Text>
          <Text className={textStyles}>
            <HL>transform-style-3d</HL>: A custom utility class that applies
            transform-style: preserve-3d;, enabling child elements to be
            positioned in 3D space.
          </Text>
          <Text className={textStyles}>
            <HL>group-hover:rotate-y-180</HL>: This class applies a rotation of
            180 degrees along the Y-axis to the card container when the outer
            group (Box) is hovered. This is what triggers the flip effect.
          </Text>
        </VStackFull>
      </VStackFull>
      <Text className={headingStyles}>
        3. Creating the Front and Back Faces
      </Text>
      <VStackFull className={sectionStyles}>
        <Text className={textStyles}>
          Both the front and back content use similar classes with key
          differences for the back face:
        </Text>
        <Text className={textStyles}>
          <HL>h-full w-full absolute inset-0 backface-hidden</HL> (Front
          Content) and{" "}
          <HL>h-full w-full absolute inset-0 backface-hidden rotate-y-180</HL>{" "}
          (Back Content):
        </Text>
        <VStackFull className={sectionStyles}>
          <Text className={textStyles}>
            <HL>h-full and w-full</HL>: Make each face cover the entire area of
            the card container.
          </Text>
          <Text className={textStyles}>
            <HL>absolute inset-0</HL>: Position the faces absolutely within the
            card container, filling it completely due to inset-0.
          </Text>
          <Text className={textStyles}>
            <HL>backface-hidden</HL>: A custom utility class that applies
            backface-visibility: hidden;, preventing the side of the card not
            facing the viewer from being visible, especially during the flip.
          </Text>
          <Text className={textStyles}>
            <HL>rotate-y-180</HL> (Back Content only): Initially rotates the
            back face 180 degrees along the Y-axis, making it face away from the
            viewer until the card is flipped.
          </Text>
        </VStackFull>
      </VStackFull>
      <Text className={headingStyles}>4. Summary</Text>
      <VStackFull className={sectionStyles}>
        <Text className={textStyles}>
          By combining TailwindCSS's utility classes with custom configurations,
          the 3D FlashCard component achieves a visually engaging 3D flip
          effect. This effect is responsive and interactive, adding a
          sophisticated look and feel to the UI with smooth transitions and a
          clear distinction between the front and back faces. Tailwind's
          utility-first design philosophy allows for creating such intricate
          effects with concise and readable class names, making the code easier
          to maintain and understand.
        </Text>
      </VStackFull>
    </DescriptionModalContent>
  );
}
