import { ParallaxLayer } from "@react-spring/parallax";
import Box from "~/components/buildingBlocks/box";
import HStack from "~/components/buildingBlocks/hStack";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";

export function ParallaxEmoji({
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
  emojiSize = "text-[10vh]",
  emoji = "unicorn",
  showInfo = true,
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
  emojiSize?: string;
  transform?: string;
  showInfo?: boolean;
  emoji?:
    | "unicorn"
    | "cat"
    | "dog"
    | "rabbit"
    | "bear"
    | "panda"
    | "koala"
    | "pig"
    | "cow"
    | "chicken"
    | "penguin"
    | "frog"
    | "monkey"
    | "octopus"
    | "snail"
    | "ladybug"
    | "butterfly"
    | "dragon"
    | "spider"
    | "scorpion"
    | "crab"
    | "whale"
    | "dolphin"
    | "fish"
    | "shark";
}) {
  const emojiMap = {
    unicorn: "🦄",
    cat: "🐱",
    dog: "🐶",
    rabbit: "🐰",
    bear: "🐻",
    panda: "🐼",
    koala: "🐨",
    pig: "🐷",
    cow: "🐮",
    chicken: "🐔",
    penguin: "🐧",
    frog: "🐸",
    monkey: "🐵",
    octopus: "🐙",
    snail: "🐌",
    ladybug: "🐞",
    butterfly: "🦋",
    dragon: "🐉",
    spider: "🕷️",
    scorpion: "🦂",
    crab: "🦀",
    whale: "🐋",
    dolphin: "🐬",
    fish: "🐟",
    shark: "🦈",
  };

  const offsetString = offset !== undefined ? offset.toFixed(2) : "";
  const speedString = speed !== undefined ? speed.toFixed(2) : "";
  const stickyString = sticky
    ? `${sticky.start.toFixed(2)} - ${sticky.end.toFixed(2)}`
    : "";
  const opacityString = opacity !== undefined ? opacity.toFixed(2) : "";

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
        <VStack
          className="text-[1.3vh] text-col-100 font-mono "
          gap="gap-[0px] "
        >
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
              {speed && (
                <Text>
                  <b>Speed:</b> {String(speed)}
                </Text>
              )}
              {sticky && (
                <Text>
                  <b>Sticky:</b> {String(sticky.start)} - {String(sticky.end)}
                </Text>
              )}
              {opacity && (
                <Text>
                  <b>Opacity:</b> {opacity}
                </Text>
              )}
            </VStack>
          )}
          <Text className={emojiSize}>{emojiMap[emoji]}</Text>
        </VStack>
      </Box>
    </ParallaxLayer>
  );
}
