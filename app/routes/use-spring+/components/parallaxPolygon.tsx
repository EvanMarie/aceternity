import { ParallaxLayer } from "@react-spring/parallax";
import Box from "~/components/buildingBlocks/box";
import HStack from "~/components/buildingBlocks/hStack";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";

export function ParallaxPolygon({
  offset,
  bg,
  speed,
  className,
  sticky,
  opacity,
  top,
  right,
  left,
  bottom,
  transform,
  radius = "50vh",
  polygon = "octagon",
  showInfo = true,
  color = "rgba(161, 3, 252, 0.2",
  animationClassName,
}: {
  offset?: number;
  bg?: string;
  speed?: number;
  className?: string;
  sticky?: { start: number; end: number };
  opacity?: number;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  radius?: string;
  transform?: string;
  showInfo?: boolean;
  color?: string;
  animationClassName?: string;
  polygon?:
    | "triangleUp"
    | "triangleDown"
    | "triangleLeft"
    | "triangleRight"
    | "triangleUpRight"
    | "triangleUpLeft"
    | "triangleDownRight"
    | "triangleDownLeft"
    | "circle"
    | "square"
    | "rectangle"
    | "pentagon"
    | "hexagon"
    | "heptagon"
    | "octagon"
    | "nonagon"
    | "decagon";
}) {
  const offsetString = offset !== undefined ? offset.toFixed(2) : "";
  const speedString = speed !== undefined ? speed.toFixed(2) : "";
  const stickyString = sticky
    ? `${sticky.start.toFixed(2)} - ${sticky.end.toFixed(2)}`
    : "";
  const opacityString = opacity !== undefined ? opacity.toFixed(2) : "";

  const useShape = (
    polygon: string,
    radius: string,
    color: string
  ): JSX.Element => {
    switch (polygon) {
      case "triangleUp":
        return (
          <Box
            className={`${animationClassName}`}
            style={{
              width: "0",
              height: "0",
              borderLeft: `${radius} solid transparent`,
              borderRight: `${radius} solid transparent`,
              borderBottom: `calc(2 * ${radius}) solid ${color}`,
            }}
          />
        );
      case "triangleDown":
        return (
          <Box
            className={`${animationClassName}`}
            style={{
              width: "0",
              height: "0",
              borderLeft: `${radius} solid transparent`,
              borderRight: `${radius} solid transparent`,
              borderTop: `calc(2 * ${radius}) solid ${color}`,
            }}
          />
        );
      case "triangleLeft":
        return (
          <Box
            className={`${animationClassName}`}
            style={{
              width: "0",
              height: "0",
              borderTop: `${radius} solid transparent`,
              borderBottom: `${radius} solid transparent`,
              borderRight: `calc(2 * ${radius}) solid ${color}`,
            }}
          />
        );
      case "triangleRight":
        return (
          <Box
            className={`${animationClassName}`}
            style={{
              width: "0",
              height: "0",
              borderTop: `${radius} solid transparent`,
              borderBottom: `${radius} solid transparent`,
              borderLeft: `calc(2 * ${radius}) solid ${color}`,
            }}
          />
        );
      case "triangleUpRight":
        return (
          <Box
            className={`${animationClassName}`}
            style={{
              width: "0",
              height: "0",
              borderBottom: `${radius} solid transparent`,
              borderLeft: `${radius} solid transparent`,
              borderTop: `calc(${radius} * sqrt(2)) solid ${color}`,
              transform: "rotate(-45deg)",
            }}
          />
        );
      case "triangleUpLeft":
        return (
          <Box
            className={`${animationClassName}`}
            style={{
              width: "0",
              height: "0",
              borderBottom: `${radius} solid transparent`,
              borderRight: `${radius} solid transparent`,
              borderTop: `calc(${radius} * sqrt(2)) solid ${color}`,
              transform: "rotate(45deg)",
            }}
          />
        );
      case "triangleDownRight":
        return (
          <Box
            className={`${animationClassName}`}
            style={{
              width: "0",
              height: "0",
              borderTop: `${radius} solid transparent`,
              borderLeft: `${radius} solid transparent`,
              borderBottom: `calc(${radius} * sqrt(2)) solid ${color}`,
              transform: "rotate(45deg)",
            }}
          />
        );
      case "triangleDownLeft":
        return (
          <Box
            className={`${animationClassName}`}
            style={{
              width: "0",
              height: "0",
              borderTop: `${radius} solid transparent`,
              borderRight: `${radius} solid transparent`,
              borderBottom: `calc(${radius} * sqrt(2)) solid ${color}`,
              transform: "rotate(-45deg)",
            }}
          />
        );
      case "circle":
        return (
          <Box
            className={`${animationClassName}`}
            style={{
              width: radius,
              height: radius,
              borderRadius: "50%",
              backgroundColor: color,
            }}
          />
        );
      case "square":
        return (
          <Box
            className={`${animationClassName}`}
            style={{
              width: radius,
              height: radius,
              backgroundColor: color,
            }}
          />
        );
      case "rectangle":
        return (
          <Box
            className={`${animationClassName}`}
            style={{
              width: `calc(2 * ${radius})`,
              height: radius,
              backgroundColor: color,
            }}
          />
        );

      case "pentagon":
        return (
          <Box
            className={`${animationClassName}`}
            style={{
              width: radius,
              height: radius,
              backgroundColor: color,
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            }}
          />
        );
      case "hexagon":
        return (
          <Box
            className={`${animationClassName}`}
            style={{
              width: radius,
              height: radius,
              backgroundColor: color,
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
        );
      case "heptagon":
        return (
          <Box
            className={`${animationClassName}`}
            style={{
              width: radius,
              height: radius,
              backgroundColor: color,
              clipPath:
                "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
            }}
          />
        );
      case "octagon":
        return (
          <Box
            className={`${animationClassName}`}
            style={{
              width: radius,
              height: radius,
              backgroundColor: color,
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          />
        );
      case "nonagon":
        return (
          <Box
            className={`${animationClassName}`}
            style={{
              width: radius,
              height: radius,
              backgroundColor: color,
              clipPath:
                "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 61% 100%, 39% 100%, 6% 78%, 0% 43%, 17% 12%)",
            }}
          />
        );
      case "decagon":
        return (
          <Box
            className={`${animationClassName}`}
            style={{
              width: radius,
              height: radius,
              backgroundColor: color,
              clipPath:
                "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
            }}
          />
        );

      default:
        return <Box style={{ backgroundColor: color }} />;
    }
  };
  const shapeElement = useShape(polygon, radius, color);
  return (
    <ParallaxLayer
      offset={offset}
      speed={speed}
      sticky={sticky}
      className={`${bg} ${className}`}
      style={{ opacity: opacity }}
    >
      <Box
        style={{ display: "block" }}
        className={`p-[2vh] absolute ${top} ${right} ${left} ${bottom} ${transform}`}
      >
        <VStack className="text-[1.3vh] text-col-100 font-mono" gap="gap-[0px]">
          {showInfo && (
            <VStack gap="gap-[0px]" className="text-[1.3vh]">
              <HStack className="text-[1.3vh]" gap="gap-[0.5vh]">
                <Text>{top && top}</Text>
                <Text>{bottom && bottom}</Text>
                <Text>{right && right}</Text>
                <Text>{left && left}</Text>
              </HStack>
              {offsetString && (
                <Text>
                  <b>Offset:</b> {offsetString}
                </Text>
              )}
              {speedString && (
                <Text>
                  <b>Speed:</b> {speedString}
                </Text>
              )}
              {stickyString && (
                <Text>
                  <b>Sticky:</b> {stickyString}
                </Text>
              )}
              {opacityString && (
                <Text>
                  <b>Opacity:</b> {opacityString}
                </Text>
              )}
            </VStack>
          )}
          {shapeElement}
        </VStack>
      </Box>
    </ParallaxLayer>
  );
}
