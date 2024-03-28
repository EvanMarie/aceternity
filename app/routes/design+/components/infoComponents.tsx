import Text from "~/components/buildingBlocks/text";

export function HeadingText({ heading }: { heading?: string }) {
  return (
    <Text className="text-[2.3vh] text-col-200 textShadow">{heading}</Text>
  );
}

export function BulletListItem({
  children,
  highlighted,
}: {
  children: React.ReactNode;
  highlighted?: string;
}) {
  return (
    <Text className="text-[2vh] text-col-100">
      <span className="text-[2vh] text-col-200">￮</span>{" "}
      {highlighted && (
        <span className="font-semibold text-col-300 text-[2vh] textShadow">
          {highlighted}
        </span>
      )}{" "}
      {children}
    </Text>
  );
}
