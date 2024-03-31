import { ParallaxLayer } from "@react-spring/parallax";
import Box from "~/components/buildingBlocks/box";
import Text from "~/components/buildingBlocks/text";

export function ParallaxEmoji({
  offset,
  bg = "bg-col-110",
  speed,
  className,
  sticky,
  opacity,
  position = "top-[10vh] right-[20vh]",
  emojiSize = "text-[10vh]",
  emoji = "unicorn",
}: {
  offset?: number;
  bg?: string;
  speed?: number;
  className?: string;
  sticky?: { start: number; end: number };
  opacity?: number;
  position?: string;
  emojiSize?: string;
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
        className={`p-[2vh] absolute ${position}`}
      >
        <Text className={emojiSize}>{emojiMap[emoji]}</Text>;
      </Box>
    </ParallaxLayer>
  );
}
