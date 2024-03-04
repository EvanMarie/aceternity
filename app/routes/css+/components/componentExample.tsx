import FlexFull from "~/components/buildingBlocks/flexFull";
import Heading from "~/components/buildingBlocks/headingText";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function ComponentExample({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <VStackFull className="bg-300-diagonal2op25 p-[2vh] border-970-md shadowBroadLoose">
      <Heading text={title} layout="text-xxl-normal" />
      {children}
    </VStackFull>
  );
}
