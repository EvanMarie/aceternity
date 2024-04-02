import { ParallaxLayer } from "@react-spring/parallax";
import Center from "~/components/buildingBlocks/center";

export default function ParallaxCenter({
  children,
  offset,
  sticky,
  speed,
}: {
  children: React.ReactNode;
  offset: number;
  sticky?: { start: number; end: number };
  speed?: number;
}) {
  return (
    <ParallaxLayer offset={offset} speed={speed} sticky={sticky}>
      <Center className="w-screen h-screen relative">{children}</Center>
    </ParallaxLayer>
  );
}
