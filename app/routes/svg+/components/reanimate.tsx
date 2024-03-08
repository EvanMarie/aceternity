import VStack from "~/components/buildingBlocks/vStack";
import FlexFull from "~/components/buildingBlocks/flexFull";
import { SVGHeading } from "~/components/main/formattingComponents";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Button from "~/components/buildingBlocks/button";
import CodeModal from "./codeModal";
import { RefreshIcon } from "styles";
import { useState } from "react";
import Center from "~/components/buildingBlocks/center";

export function Reanimate({
  title,
  code,
  children,
  bg = "  bg-col-900",
  isPath,
  handleClickAnimation,
}: {
  code?: string;
  title?: string;
  bg?: string;
  children?: React.ReactNode;
  isPath?: boolean;
  handleClickAnimation?: () => void;
}) {
  const [animationKey, setAnimationKey] = useState(0);

  const handleReanimate = () => {
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const onClick = handleClickAnimation ? handleClickAnimation : handleReanimate;
  return (
    <VStack
      className={`${bg} shadowBroadLoose border-800-md p-[1vh]`}
      gap="gap-[2vh]"
    >
      {title && (
        <FlexFull className="justify-center">
          <SVGHeading>{title}</SVGHeading>
        </FlexFull>
      )}
      <HStackFull className="justify-evenly">
        <Button
          buttonText="Reanimate"
          onClick={onClick}
          iconLeft={RefreshIcon}
          type="smallNormal"
        />
        {code && (
          <CodeModal isPath={isPath} code={code} title={title ? title : ""} />
        )}
      </HStackFull>
      <div key={animationKey}>
        <Center className="w-full h-full">{children}</Center>
      </div>
    </VStack>
  );
}
