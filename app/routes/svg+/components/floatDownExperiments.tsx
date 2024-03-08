import Center from "~/components/buildingBlocks/center";
import Flex from "~/components/buildingBlocks/flex";
import VStack from "~/components/buildingBlocks/vStack";
import FlexFull from "~/components/buildingBlocks/flexFull";
import { useState } from "react";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Wrap from "~/components/buildingBlocks/wrap";
import Heading from "~/components/buildingBlocks/headingText";
import FloatDown from "./floatDown";
import IconButton from "~/components/buildingBlocks/iconButton";
import { CloseIcon, PlusIcon, RefreshIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import Text from "~/components/buildingBlocks/text";
import Slider from "~/components/buildingBlocks/slider";
import HStack from "~/components/buildingBlocks/hStack";
import Button from "~/components/buildingBlocks/button";
import { IoColorPaletteOutline } from "react-icons/io5";
import Modal from "~/components/buildingBlocks/modal";
import HStackFull from "~/components/buildingBlocks/hStackFull";

export default function FloatDownExperiements() {
  const [animationKey, setAnimationKey] = useState(0);
  const [circleColor, setCircleColor] = useState("#00ffff");
  const [modalOpen, setModalOpen] = useState(false);
  const [circleMultiColors, setCircleMultiColors] = useState<string[]>([
    "#00FFFF",
  ]);

  function ColorPicker({
    onChange,
    label,
    value,
  }: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    value: string;
  }) {
    const [color, setColor] = useState("#00FFFF");
    return (
      <VStack className={labelStyles} gap="gap-[0px]">
        {label && <Text>{label}</Text>}
        <input
          type="color"
          value={value}
          onChange={onChange}
          className="w-[5vh] h-[3vh] cursor-pointer"
        />
      </VStack>
    );
  }

  const handleReanimate = () => {
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const animations = ["shimmer", "bouncy", "none"];
  const activeStyle =
    "text-cyan-200 font-semibol px-[0.5vh] metallicEdgesSm textShadow";
  const inactiveStyle = "text-col-100 textShadow";
  const [animation, setAnimation] = useState("none");
  const headingStyles = "text-cyan-200  text-md-normal md:text-lg-normal";
  const labelStyles = "text-md-tight text-col-100 justify-center";
  const buttonStyles =
    "text-sm-tight md:text-md-tight md:px-[1vh] justify-center flex-shrink-0 hover:cursor-pointer";
  const [numCircles, setNumCircles] = useState(50);
  const handleNumCircles = (value: number) => {
    setNumCircles(value);
  };
  const handleMaxDelay = (value: number) => {
    setMaxDelay(value);
  };
  const [maxDelay, setMaxDelay] = useState(5);

  // Function to add a new color to the array
  const [newColor, setNewColor] = useState("#ffffff"); // Step 1: State for new color
  const handleAddNewColor = () => {
    setCircleMultiColors([...circleMultiColors, newColor]);
  };

  // Function to remove a color from the array
  const handleRemoveColor = (indexToRemove: number) => {
    setCircleMultiColors(
      circleMultiColors.filter((_, index) => index !== indexToRemove)
    );
  };

  const backgroundChoices = [
    "bg-100-radial6op75",
    "bg-100-linear2op75",
    "bg-100-radial3op75",
    "bg-300-linear6op75",
    "bg-100-radial4op75",
    "bg-400-radial5op75",
    "bg-500-linear6op75",
    "bg-600-diagonal5op75",
    "bg-600-linear6op75",
    "bg-800-linear2op75",
    "bg-900-linear1op75",
    "bg-100-radial4op25",
    "bg-100-radial3op75",
    "bg-300-linear3op75",
    "bg-100-radial3op50",
    "bg-500-diagonal4op50",
  ];
  const [componentBackground, setComponentBackground] =
    useState("bg-100-radial6op75");

  return (
    <>
      <FlexFull className="justify-center">
        <Flex className="w-95% xxl:w-80% h-fit justify-center overflow-y-auto bg-600-linear6op75">
          <VStack className="h-fit pb-[2vh] px-[1vh]" gap="gap-[3vh]">
            <VStackFull gap="gap-[1vh]">
              <Heading text="Fun with Floating Circles" className="py-[1vh]" />
              <Wrap className="w-90% p-[1vh] shadowBroadNormal justify-evenly gap-x-[3vh] gap-y-[1vh] bg-col-970 items-center">
                <Text className={headingStyles}>Animation:</Text>
                {animations.map((e, i) => (
                  <Flex
                    key={i}
                    onClick={() => setAnimation(e)}
                    className={buttonStyles}
                  >
                    <Text
                      className={e === animation ? activeStyle : inactiveStyle}
                    >
                      {e}
                    </Text>
                  </Flex>
                ))}
              </Wrap>
              <Wrap className="w-full gap-[3vh] items-center space-evenly">
                <Slider
                  min={0}
                  max={100}
                  value={numCircles}
                  onChange={handleNumCircles}
                  label="# circles"
                />
                <Slider
                  min={0}
                  max={20}
                  value={maxDelay}
                  onChange={handleMaxDelay}
                  label="max delay"
                />

                <Button
                  iconLeft={IoColorPaletteOutline}
                  onClick={() => setModalOpen(true)}
                  buttonText="colors"
                />
              </Wrap>
            </VStackFull>
            <FlexFull className="justify-center">
              {" "}
              <Center className=" h-fit insetShadowXl relative">
                <Box className="absolute top-[1vh] right-[1vh] z-10">
                  <IconButton
                    onClick={handleReanimate}
                    icon={RefreshIcon}
                    type="smallNormal"
                  />
                </Box>
                <FloatDown
                  startFrom={-50}
                  endAt={85}
                  key={animationKey}
                  containerBg={componentBackground}
                  containerHeight="h-[25vh] sm:h-[35vh] m:h-[40vh] lg:h-[45vh]"
                  containerWidth="w-[90vw] sm:w-[85vw] md:w-[70vw] lg:w-[80vh]"
                  viewBoxHeight={1000}
                  viewBoxWidth={2000}
                  circleAnimation={animation as "shimmer" | "bouncy" | "none"}
                  numCircles={numCircles}
                  maxDelay={maxDelay}
                  circleColor={circleColor}
                  circleColors={
                    circleMultiColors.length > 0 ? circleMultiColors : undefined
                  }
                />
              </Center>
            </FlexFull>
          </VStack>
        </Flex>
      </FlexFull>

      <Modal
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
        onClose={() => setModalOpen(false)}
        modalSize="w-[35vh] h-[80vh] "
      >
        <VStackFull
          className="h-full max-h-full overflow-y-auto bg-col-700 text-col-100"
          gap="gap-[0px]"
        >
          <FlexFull className="bg-col-900 rounded-b-none py-[0.5vh] px-[1vh]">
            <Text className="text-lg-loose">Circle Colors: </Text>
          </FlexFull>
          <VStackFull className="py-[1vh]">
            {circleMultiColors.map((color, index) => (
              <HStackFull key={index} className="px-[1vh] justify-between ">
                <Text className="w-25%">{`color ${index + 1}`}</Text>
                <Flex className="w-25%">
                  <Box
                    className="w-70% h-[3vh] rounded-md border-970-sm shadowBroadTight"
                    style={{ backgroundColor: color }}
                  />
                </Flex>
                <Flex className="w-25%">
                  <Text>{color}</Text>
                </Flex>
                <Flex className="w-25% justify-center">
                  <IconButton
                    onClick={() => handleRemoveColor(index)}
                    icon={CloseIcon}
                    type="unstyled"
                    iconClassName="text-[2.5vh] cursor-pointer hover:text-cyan-200"
                  />
                </Flex>
              </HStackFull>
            ))}
          </VStackFull>
          <FlexFull className="py-[0.5vh] px-[1.5vh] bg-col-950 rounded-none">
            <HStackFull className="justify-evenly  py-[1vh]  ">
              <Box className="shadowBroadNormal">
                <input
                  type="color"
                  value={newColor}
                  onChange={(e) => setNewColor(e.target.value)}
                  className="cursor-pointer"
                />
              </Box>
              <Button
                onClick={handleAddNewColor}
                iconLeft={PlusIcon}
                buttonText="add color"
              />
            </HStackFull>
          </FlexFull>
          <FlexFull className="bg-col-900 rounded-none py-[0.5vh] px-[1vh]">
            <Text className="text-lg-loose">Background: </Text>
          </FlexFull>
          <Wrap className="w-full p-[1vh] gap-[1.5vh] justify-evenly">
            {backgroundChoices.map((bg, index) => (
              <Flex className={`p-[0.5vh] `}>
                <Box className="shadowBroadNormal">
                  <Box
                    key={index}
                    className={`${bg} h-[5vh] w-[5vh] text-transparent hover:cursor-pointer hover:metallicEdgesSm transition-300 ${
                      bg === componentBackground &&
                      "metallicEdgesLg hover:metallicEdgesLg"
                    }`}
                    onClick={() => setComponentBackground(bg)}
                  >
                    .
                  </Box>
                </Box>
              </Flex>
            ))}
          </Wrap>
        </VStackFull>
      </Modal>
    </>
  );
}
