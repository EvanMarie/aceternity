import Flex from "~/components/buildingBlocks/flex";

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
      className={`${w} ${h} ${bg} justify-center items-center insetShadowXl border-970-md ${className} font-semibold`}
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

export function CSSExampleOne() {
  return (
    <ExampleParent className="group cursor-pointer">
      <ExampleChild className="transition-transform duration-1000 transform group-hover:translate-x-[4vh]">
        Child
      </ExampleChild>
    </ExampleParent>
  );
}
