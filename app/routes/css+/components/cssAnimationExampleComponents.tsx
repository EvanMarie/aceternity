import Flex from "~/components/buildingBlocks/flex";
import CSSAnimationExample from "./cssAnimationExample";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";
import HStack from "~/components/buildingBlocks/hStack";

function ExampleParent({
  w = "w-[50vh]",
  h = "h-[25vh]",
  bg = "bg-col-500",
  children,

  className,
  style,
}: {
  w?: string;
  h?: string;
  bg?: string;
  children?: React.ReactNode;

  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <Flex
      className={`${w} ${h} ${bg} px-[1vh] items-center insetShadowXl border-970-md ${className} font-semibold`}
      style={style}
    >
      {children}
    </Flex>
  );
}

function ExampleChild({
  w = "w-50%",
  h = "h-50%",
  bg = "bg-col-600",
  children,
  className,
  style,
}: {
  w?: string;
  h?: string;
  bg?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <Flex
      className={`${w} ${h} ${bg} justify-center items-center shadowBroadNormal border-970-md ${className}`}
      style={style}
    >
      {children}
    </Flex>
  );
}

function DescriptionContainer({ children }: { children: React.ReactNode }) {
  return (
    <VStack gap="gap-[0px]" align="items-start">
      {children}
    </VStack>
  );
}

function ExampleDescription({
  label,
  description,
}: {
  label?: string;
  description?: string;
}) {
  function Label({ children }: { children: React.ReactNode }) {
    return <Text className="font-semibold">{children}</Text>;
  }

  function TailwindCSS({ children }: { children: React.ReactNode }) {
    return <Text className="font-monospace">{children}</Text>;
  }

  return (
    <HStack gap="gap-[0.5vh]">
      {label && <Label>{label}</Label>}
      <TailwindCSS>{description}</TailwindCSS>
    </HStack>
  );
}

export function CSSExampleOne() {
  return (
    <CSSAnimationExample
      label="Example 1:"
      notes={
        <DescriptionContainer>
          <ExampleDescription
            label="Parent:"
            description="group cursor-pointer"
          />
          <ExampleDescription
            label="Child:"
            description="transition-transform duration-1000 transform group-hover:translate-x-[100%]"
          />
          <ExampleDescription
            label="Default timing function (not speficied):"
            description="ease"
          />
        </DescriptionContainer>
      }
    >
      <ExampleParent className="group cursor-pointer">
        <ExampleChild className="transition-transform duration-1000 transform group-hover:translate-x-[100%]">
          Child
        </ExampleChild>
      </ExampleParent>
    </CSSAnimationExample>
  );
}

export function CSSExampleTwo() {
  return (
    <CSSAnimationExample
      label="Example 2:"
      notes={
        <DescriptionContainer>
          <ExampleDescription description="Same as example 1, but with timing function ease-linear" />
          <ExampleDescription
            label="Child:"
            description="transition-transform duration-1000 ease-linear transform group-hover:translate-x-[100%]"
          />
        </DescriptionContainer>
      }
    >
      <ExampleParent className="group cursor-pointer">
        <ExampleChild className="transition-transform duration-1000 ease-linear transform group-hover:translate-x-[100%]">
          Child
        </ExampleChild>
      </ExampleParent>
    </CSSAnimationExample>
  );
}

export function CSSExampleThree() {
  return (
    <CSSAnimationExample
      label="Example 3:"
      notes={
        <DescriptionContainer>
          <ExampleDescription description="Same as above, but this time with ease-in-out" />
          <ExampleDescription label="Child:" description="ease-in-out" />
        </DescriptionContainer>
      }
    >
      <ExampleParent className="group cursor-pointer">
        <ExampleChild className="transition-transform duration-1000 transform ease-in-out group-hover:translate-x-[100%]">
          Child
        </ExampleChild>
      </ExampleParent>
    </CSSAnimationExample>
  );
}

export function CSSExampleFour() {
  return (
    <CSSAnimationExample
      label="Example 4:"
      notes={
        <DescriptionContainer>
          <ExampleDescription description="Custom Transition" />
          <ExampleDescription description="Use Chrome dev tools to see the cubic-bezier function and edit the transition curve. For example, this animation has cubic-bezier(0, 0.14, 0, 1.04)" />
          <ExampleDescription
            label="Child:"
            description="cubic-bezier(0, 0.14, 0, 1.04)"
          />
        </DescriptionContainer>
      }
    >
      <ExampleParent className="group cursor-pointer">
        <ExampleChild className="transition-transform duration-1000 transform group-hover:translate-x-[100%] cubic-bezier(0, 0.14, 0, 1.04)">
          Child
        </ExampleChild>
      </ExampleParent>
    </CSSAnimationExample>
  );
}

export function CSSExampleFive() {
  return (
    <CSSAnimationExample
      label="Example 4:"
      notes={
        <DescriptionContainer>
          <ExampleDescription description="Elastic" />
          <ExampleDescription label="Child:" description="elastic" />
        </DescriptionContainer>
      }
    >
      <ExampleParent className="group cursor-pointer">
        <ExampleChild className="transition-transform duration-1000 transform group-hover:translate-x-[100%] elastic">
          Child
        </ExampleChild>
      </ExampleParent>
    </CSSAnimationExample>
  );
}
