 export const rainEffectCode = `
import Box from "~/components/buildingBlocks/box";

export default function Rain({
  rainColor = "bg-cyan-400",
}: {
  rainColor?: string;
}) {
  return (
    <Box className="relative w-full h-full overflow-hidden border-970-md">
      {/* Your rain effect code here */}
    </Box>
  );
}
`;