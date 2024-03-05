import Box from "~/components/buildingBlocks/box";
import CodeDisplay from "~/components/buildingBlocks/code";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import { rainEffectCode } from "../css+/components/codeFiles/rain";

export default function Test() {
  return (
    <LayoutContainer className="justify-center p-[4vh] bg-col-170">
      <VStackFull>
        <Box className="w-[4vh] h-[8vh] bg-cyan-400 rounded-raindrop" />
        <div>
          <h2>Rain Effect Code Snippet</h2>
          <CodeDisplay codeString={rainEffectCode} language="typescript" />
        </div>
      </VStackFull>
    </LayoutContainer>
  );
}
