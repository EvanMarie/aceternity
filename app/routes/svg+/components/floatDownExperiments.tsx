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
  const [colorModalOpen, setColorModalOpen] = useState(false);
  const [advancedAnimationModal, setAdvancedAnimationModal] = useState(false);
  const [circleMovementModal, setCircleMovementOpen] = useState(false);
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

  const animations = ["animatedBorder", "bouncy", "none"];
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
  const [minCircleMovements, setMinCircleMovements] = useState(4);
  const [maxCircleMovements, setMaxCircleMovements] = useState(8);
  const [radiusMax, setRadiusMax] = useState(20);
  const [radiusMin, setRadiusMin] = useState(5);
  const [horizontalMin, setHorizontalMin] = useState(5);
  const [horizontalMax, setHorizontalMax] = useState(200);
  const [verticalMin, setVerticalMin] = useState(1);
  const [verticalMax, setVerticalMax] = useState(5);
  const [minDuration, setMinDuration] = useState(5);
  const [maxDuration, setMaxDuration] = useState(23);
  const [maxAnimationDuration, setMaxAnimationDuration] = useState(5);
  const [minAnimationDuration, setMinAnimationDuration] = useState(2);
  const [animatedBorderColor, setAnimatedBorderColor] = useState("#ffffff");
  const [animatedBorderOpacity, setAnimatedBorderOpacity] = useState(1);
  const [minAnimatedBorderWidth, setMinAnimatedBorderWidth] = useState(0.8);
  const [maxAnimatedBorderWidth, setMaxAnimatedBorderWidth] = useState(8);
  const [maxAnimatedBorderDelay, setMaxAnimatedBorderDelay] = useState(2);
  const [minBouncyScale, setMinBouncyScale] = useState(0.5);
  const [maxBouncyScale, setMaxBouncyScale] = useState(2);

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
          <VStackFull className="h-fit pb-[2vh] px-[1vh]" gap="gap-[3vh]">
            <Heading text="Fun with Floating Circles" className="py-[1vh]" />
            <HStackFull className="justify-center hidden xl:flex">
              <VStackFull
                className="h-full max-h-full overflow-y-auto bg-col-700 text-col-100 hidden xl:flex"
                gap="gap-[0.5vh]"
              >
                <FlexFull className="bg-col-900 rounded-b-none py-[0.5vh] px-[1vh]">
                  <Text className="text-lg-loose">Circle Movement: </Text>
                </FlexFull>
                <Slider
                  min={0}
                  max={100}
                  value={numCircles}
                  onChange={handleNumCircles}
                  label="circle count"
                />
                <Slider
                  min={0}
                  max={20}
                  value={maxDelay}
                  onChange={handleMaxDelay}
                  label="max delay"
                />
                <Slider
                  min={0}
                  max={40}
                  value={minCircleMovements}
                  onChange={setMinCircleMovements}
                  label="min movements"
                />
                <Slider
                  min={0}
                  max={40}
                  value={maxCircleMovements}
                  onChange={setMaxCircleMovements}
                  label="max movements"
                />
                <Slider
                  min={0}
                  max={500}
                  value={radiusMin}
                  onChange={setRadiusMin}
                  label="min radius"
                />
                <Slider
                  min={0}
                  max={500}
                  value={radiusMax}
                  onChange={setRadiusMax}
                  label="max radius"
                />
                <Slider
                  min={-500}
                  max={500}
                  value={horizontalMin}
                  onChange={setHorizontalMin}
                  label="horizontal min"
                />
                <Slider
                  min={-500}
                  max={500}
                  value={horizontalMax}
                  onChange={setHorizontalMax}
                  label="horizontal max"
                />
                <Slider
                  min={-500}
                  max={500}
                  value={verticalMin}
                  onChange={setVerticalMin}
                  label="vertical min"
                />
                <Slider
                  min={-500}
                  max={500}
                  value={verticalMax}
                  onChange={setVerticalMax}
                  label="vertical max"
                />
                <Slider
                  min={0}
                  max={100}
                  value={minAnimationDuration}
                  onChange={setMinAnimationDuration}
                  label="min anim duration"
                />
                <Slider
                  min={0}
                  max={100}
                  value={maxAnimationDuration}
                  onChange={setMaxAnimationDuration}
                  label="max anim duration"
                />
              </VStackFull>
              <VStackFull>
                <VStackFull gap="gap-[1vh]">
                  <Wrap className="gap-[2vh]">
                    <Wrap className="w-fit p-[1vh] shadowBroadNormal justify-evenly gap-x-[3vh] gap-y-[1vh] bg-col-970 items-center">
                      <Text className={headingStyles}>Advanced Animation:</Text>
                      {animations.map((e, i) => (
                        <Flex
                          key={i}
                          onClick={() => setAnimation(e)}
                          className={buttonStyles}
                        >
                          <Text
                            className={
                              e === animation ? activeStyle : inactiveStyle
                            }
                          >
                            {e}
                          </Text>
                        </Flex>
                      ))}
                    </Wrap>
                  </Wrap>
                  <Wrap className="w-full gap-x-[3vh] sm:gap-y-[0.5vh] md:gap-y-[1vh] items-center justify-evenly">
                    {" "}
                    <Button
                      iconLeft={IoColorPaletteOutline}
                      onClick={() => setColorModalOpen(true)}
                      buttonText="colors"
                    />
                    <Button
                      iconLeft={IoColorPaletteOutline}
                      onClick={() => setCircleMovementOpen(true)}
                      buttonText="circle movement"
                    />
                    <Button
                      iconLeft={IoColorPaletteOutline}
                      onClick={() => setAdvancedAnimationModal(true)}
                      buttonText="advanced animation"
                    />
                  </Wrap>
                  <Wrap className="w-full gap-x-[3vh] sm:gap-y-[0.5vh] md:gap-y-[1vh] items-center justify-evenly">
                    {" "}
                    <Slider
                      min={0}
                      max={100}
                      value={minDuration}
                      onChange={setMinDuration}
                      label="min overall duration"
                    />
                    <Slider
                      min={0}
                      max={100}
                      value={maxDuration}
                      onChange={setMaxDuration}
                      label="max overall duration"
                    />
                  </Wrap>
                </VStackFull>
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
                    containerHeight="h-[90vw] sm:h-[70vw] md:h-[60vh] lg:h-[65vh]"
                    containerWidth="w-[90vw] sm:w-[70vw] md:w-[60vh] lg:w-[80vh]"
                    viewBoxHeight={2000}
                    viewBoxWidth={2000}
                    circleAnimation={
                      animation as "animatedBorder" | "bouncy" | "none"
                    }
                    numCircles={numCircles}
                    maxDelay={maxDelay}
                    circleColor={circleColor}
                    circleColors={
                      circleMultiColors.length > 0
                        ? circleMultiColors
                        : undefined
                    }
                    maxMovements={maxCircleMovements}
                    minMovements={minCircleMovements}
                    radiusMax={radiusMax}
                    radiusMin={radiusMin}
                    horizontalMin={horizontalMin}
                    horizontalMax={horizontalMax}
                    verticalMin={verticalMin}
                    verticalMax={verticalMax}
                    minDuration={minDuration}
                    maxDuration={maxDuration}
                    maxCircleAnimationDuration={maxAnimationDuration}
                    minCircleAnimationDuration={minAnimationDuration}
                    animatedBorderColor={animatedBorderColor}
                    animatedBorderOpacity={animatedBorderOpacity}
                    minAnimatedBorderWidth={minAnimatedBorderWidth}
                    maxAnimatedBorderWidth={maxAnimatedBorderWidth}
                    maxAnimatedBorderDelay={maxAnimatedBorderDelay}
                    minBouncyScale={minBouncyScale}
                    maxBouncyScale={maxBouncyScale}
                  />
                </Center>
              </VStackFull>
              <VStackFull
                className="h-full max-h-full overflow-y-auto bg-col-700 text-col-100"
                gap="gap-[2.5vh]"
              >
                <FlexFull className="bg-col-900 rounded-b-none py-[0.5vh] px-[1vh]">
                  <Text className="text-lg-loose">Advanced Animation: </Text>
                </FlexFull>
                <Slider
                  min={0.1}
                  max={20}
                  value={minBouncyScale}
                  onChange={setMinBouncyScale}
                  label="min bouncy scale"
                />
                <Slider
                  min={0.1}
                  max={20}
                  value={maxBouncyScale}
                  onChange={setMaxBouncyScale}
                  label="max bouncy scale"
                />
                <Slider
                  min={0}
                  max={1}
                  value={animatedBorderOpacity}
                  onChange={setAnimatedBorderOpacity}
                  label="border opacity"
                />
                <Slider
                  min={0}
                  max={20}
                  value={minAnimatedBorderWidth}
                  onChange={setMinAnimatedBorderWidth}
                  label="min border width"
                />
                <Slider
                  min={0}
                  max={10}
                  value={maxAnimatedBorderWidth}
                  onChange={setMaxAnimatedBorderWidth}
                  label="max border width"
                />
                <Slider
                  min={0}
                  max={10}
                  value={maxAnimatedBorderDelay}
                  onChange={setMaxAnimatedBorderDelay}
                  label="max border delay"
                />
              </VStackFull>
            </HStackFull>
          </VStackFull>
        </Flex>
      </FlexFull>

      {/* color modal */}
      <Modal
        isOpen={colorModalOpen}
        setModalOpen={setColorModalOpen}
        onClose={() => setColorModalOpen(false)}
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
              <Flex className={`p-[0.5vh] `} key={index}>
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

      {/* advanced animation modal */}
      <Modal
        isOpen={advancedAnimationModal}
        setModalOpen={setAdvancedAnimationModal}
        onClose={() => setAdvancedAnimationModal(false)}
        modalSize="w-[35vh] h-[80vh] "
      >
        <VStackFull
          className="h-full max-h-full overflow-y-auto bg-col-700 text-col-100"
          gap="gap-[2.5vh]"
        >
          <FlexFull className="bg-col-900 rounded-b-none py-[0.5vh] px-[1vh]">
            <Text className="text-lg-loose">Advanced Animation: </Text>
          </FlexFull>
          <Slider
            min={0.1}
            max={20}
            value={minBouncyScale}
            onChange={setMinBouncyScale}
            label="min bouncy scale"
          />
          <Slider
            min={0.1}
            max={20}
            value={maxBouncyScale}
            onChange={setMaxBouncyScale}
            label="max bouncy scale"
          />
          <Slider
            min={0}
            max={1}
            value={animatedBorderOpacity}
            onChange={setAnimatedBorderOpacity}
            label="border opacity"
          />
          <Slider
            min={0}
            max={20}
            value={minAnimatedBorderWidth}
            onChange={setMinAnimatedBorderWidth}
            label="min border width"
          />
          <Slider
            min={0}
            max={10}
            value={maxAnimatedBorderWidth}
            onChange={setMaxAnimatedBorderWidth}
            label="max border width"
          />
          <Slider
            min={0}
            max={10}
            value={maxAnimatedBorderDelay}
            onChange={setMaxAnimatedBorderDelay}
            label="max border delay"
          />
        </VStackFull>
      </Modal>

      {/* circle movement modal */}
      <Modal
        isOpen={circleMovementModal}
        setModalOpen={setCircleMovementOpen}
        onClose={() => setCircleMovementOpen(false)}
        modalSize="w-[35vh] h-[80vh] "
      ></Modal>
    </>
  );
}
