import Flex from "./flex";
import FlexFull from "./flexFull";

export default function CodeExample({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlexFull className="justify-center">
      <Flex className="p-[1vh] bg-col-950 shadowBroadNormal border-900-md">
        <pre style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}>
          <code
            className="text-xs leading-tight "
            style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
          >
            {children}
          </code>
        </pre>
      </Flex>
    </FlexFull>
  );
}
