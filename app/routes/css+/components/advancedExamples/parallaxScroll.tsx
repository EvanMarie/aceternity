import Box from "~/components/buildingBlocks/box";
import Flex from "~/components/buildingBlocks/flex";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Image from "~/components/buildingBlocks/image";

const randomWidths = ["w-[60vh]", "w-[70vh]", "w-[85vh]", "w-[50vh]"];

export default function ParallaxScroll({
  numImages = 12,
}: {
  numImages: number;
}) {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  function ImageComponent({
    src = `https://picsum.photos/seed/${randomNum}/500/900`,
    className,
  }: {
    src: string;
    className?: string;
  }) {
    return (
      <Flex
        className={`h-fit w-fit flex-shrink-0 overflow-hidden shadowBroadLoose`}
      >
        <Image
          src={src}
          alt="random"
          className={className}
          style={{
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </Flex>
    );
  }

  const images = Array.from({ length: numImages }, (_, index) => index);
  return (
    <Box className="pb-[1.5vh] overflow-x-auto overflow-y-hidden rounded-none">
      <Box className="w-fit h-[70vh]">
        <HStackFull className="w-maxContent rounded-none gap-[1.5vh]">
          {images.map((_, index) => {
            const randomWidth =
              randomWidths[Math.floor(Math.random() * randomWidths.length)];
            return (
              <ImageComponent
                key={index}
                className={`h-[70vh] ${randomWidth}`}
                src={`https://picsum.photos/seed/${
                  randomNum + index
                }/1000/1000`}
              />
            );
          })}
        </HStackFull>
      </Box>
    </Box>
  );
}
