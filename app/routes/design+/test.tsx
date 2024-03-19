import React from "react";
import { motion } from "framer-motion";
import FlexFull from "~/components/buildingBlocks/flexFull";

function Grid({ size, spacing }: { size: number; spacing: number }) {
  const elements: JSX.Element[] = [];

  // Background color
  elements.push(
    <rect x="0" y="0" width={size} height={size} fill="darkcyan" />
  );

  // Create vertical lines and labels
  for (let i = 0; i <= size; i += spacing) {
    elements.push(
      <line x1={i} y1="0" x2={i} y2={size} stroke="lightgray" strokeWidth="1" />
    );
    elements.push(
      <text x={i} y="15" fontSize="10" fill="white">
        {i}
      </text>
    );
  }

  // Create horizontal lines and labels
  for (let j = 0; j <= size; j += spacing) {
    elements.push(
      <line x1="0" y1={j} x2={size} y2={j} stroke="darkGray" strokeWidth="2" />
    );
    if (j > 0) {
      // Avoid overlapping with the first horizontal label
      elements.push(
        <text x="0" y={j + 10} fontSize="10" fill="white">
          {j}
        </text>
      );
    }
  }

  return <>{elements}</>;
}

export default function Test() {
  const gridSize = 1000;

  return (
    <div className="flex justify-center items-center h-screen">
      <svg width="70vh" height="70vh" viewBox={`0 0 ${gridSize} ${gridSize}`}>
        <Grid size={gridSize} spacing={50} />
        <motion.image
          href="/images/allIconLarge1.png"
          width="10vh"
          height="10vh"
          animate={{
            x: [0, 900, 900, 0, 900, 0],
            y: [0, 900, 0, 900, 900, 0],
          }}
          style={{ borderRadius: "50%" }}
          transition={{
            duration: 10,
            ease: "linear",
            repeatType: "reverse",
            repeat: Infinity,
          }}
        />
      </svg>
    </div>
  );
}
