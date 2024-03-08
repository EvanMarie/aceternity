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
import { RefreshIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import Text from "~/components/buildingBlocks/text";
import Slider from "~/components/buildingBlocks/slider";
import HStack from "~/components/buildingBlocks/hStack";
import Button from "~/components/buildingBlocks/button";
import { IoColorPaletteOutline } from "react-icons/io5";
import Modal from "~/components/buildingBlocks/modal";

export default function FloatDownExperiements() {
  const [animationKey, setAnimationKey] = useState(0);
  const [circleColor, setCircleColor] = useState("#00FFFF");
  const [modalOpen, setModalOpen] = useState(false);
  const [circleMultiColors, setCircleMultiColors] = useState<string[]>([
    "#00FFFF",
  ]); // Step 1: Moved here

  function ColorPicker({
    onChange,
    label,
    value,
  }: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
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

  const addNewColor = () => {
    const [circleMultiColors, setCircleMultiColors] = useState<string[]>([
      "#00FFFF",
    ]);
    setCircleMultiColors([...circleMultiColors, "#ffffff"]);
  };

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
                <ColorPicker
                  label="circle color"
                  value={circleColor}
                  onChange={(e) => setCircleColor(e.target.value)}
                />
                <Button
                  iconLeft={IoColorPaletteOutline}
                  onClick={() => setModalOpen(true)}
                  buttonText="multi-color"
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
        modalSize="w-full h-full sm:h-90% w-90% md:w-80% lg:w-70% xl:w-60% 2xl:w-50%"
      >
        <VStackFull className="h-full bg-col-700 text-col-100 p-4">
          <Text className="text-lg-loose mb-4">Use Multiple Colors:</Text>
          {circleMultiColors.map((color, index) => (
            <HStack>
              <Text></Text>
              <Box className="h-[4vh] w-[4vh]"></Box>
            </HStack>
          ))}
          <HStack>
            <input
              key={index}
              type="color"
              value={color}
              onChange={(e) => {
                const newColors = [...circleMultiColors];
                newColors[index] = e.target.value;
                setCircleMultiColors(newColors);
              }}
              className="w-[5vh] h-[3vh] cursor-pointer mb-2"
            />
            <Button
              onClick={addNewColor}
              type="smallNormal"
              buttonText="Add New Color"
            />
          </HStack>
        </VStackFull>
      </Modal>
    </>
  );
}
