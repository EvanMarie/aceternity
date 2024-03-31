import { useState } from "react";
import { CodeIcon, InfoIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import Button from "~/components/buildingBlocks/button";
import Center from "~/components/buildingBlocks/center";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import CodeExample from "~/components/buildingBlocks/codeExample";
import FlexFull from "~/components/buildingBlocks/flexFull";
import IconButton from "~/components/buildingBlocks/iconButton";
import Modal from "~/components/buildingBlocks/modal";
import Text from "~/components/buildingBlocks/text";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function DescriptionModal({
  title,
  useIcon = true,
  useCodeIcon = true,
  children,
  buttonText,
}: {
  title: string;
  useIcon?: boolean;
  useCodeIcon?: boolean;
  children: React.ReactNode;
  buttonText?: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      {useIcon ? (
        <IconButton
          icon={useCodeIcon ? CodeIcon : InfoIcon}
          onClick={() => setModalOpen(true)}
          type="smallNormal"
        />
      ) : (
        <Box>
          <Button
            iconLeft={useCodeIcon ? CodeIcon : InfoIcon}
            onClick={() => setModalOpen(true)}
            buttonText={buttonText ? buttonText : "Info"}
            type="smallNormal"
          />
        </Box>
      )}
      <Modal
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
        onClose={() => setModalOpen(false)}
        modalSize="w-full h-fit md:w-fit md:h-95%"
      >
        <FlexFull className=" h-ful w-full bg-col-980">
          <VStackFull
            gap="gap-[0px]"
            className="overflow-y-hidden rounded-none"
          >
            <CenterHorizontalFull className="bg-col-700 rounded-b-none">
              <Text className="text-[3vh] font-semibold text-col-200 textShadow">
                {title}
              </Text>
            </CenterHorizontalFull>
            <FlexFull className="h-full overflow-y-auto rounded-none insetShadowXl">
              <FlexFull className="h-fit py-[1vh] px-[2vh]">
                {children}
              </FlexFull>
            </FlexFull>
          </VStackFull>
        </FlexFull>
      </Modal>
    </>
  );
}
