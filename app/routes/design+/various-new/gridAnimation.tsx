import React, { useEffect, useState } from "react";
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

const animationOptions = [
  {
    name: "Circular",
    path: (progress: number) => ({
      x: 1000 / 2 + Math.cos(2 * Math.PI * progress) * (1000 / 2 - 50),
      y: 1000 / 2 + Math.sin(2 * Math.PI * progress) * (1000 / 2 - 50),
    }),
  },
  {
    name: "Figure-eight",
    path: (progress: number) => ({
      x: 1000 / 2 + Math.cos(2 * Math.PI * progress) * (1000 / 4),
      y: 1000 / 2 + Math.sin(4 * Math.PI * progress) * (1000 / 8),
    }),
  },
  {
    name: "Horizontal",
    path: (progress: number) => ({
      x: progress * 1000,
      y: 1000 / 2,
    }),
  },
  {
    name: "Vertical",
    path: (progress: number) => ({
      x: 1000 / 2,
      y: progress * 1000,
    }),
  },
  {
    name: "Diagonal",
    path: (progress: number) => ({
      x: progress * 1000,
      y: progress * 1000,
    }),
  },

  {
    name: "Sine",
    path: (progress: number) => ({
      x: progress * 1000,
      y: 1000 / 2 + Math.sin(2 * Math.PI * progress) * (1000 / 4),
    }),
  },
  {
    name: "Cosine",
    path: (progress: number) => ({
      x: progress * 1000,
      y: 1000 / 2 + Math.cos(2 * Math.PI * progress) * (1000 / 4),
    }),
  },
  {
    name: "Spiral",
    path: (progress: number) => ({
      x: 1000 / 2 + Math.cos(2 * Math.PI * progress) * (1000 / 2 - 50),
      y: 1000 / 2 + Math.sin(2 * Math.PI * progress) * (1000 / 2 - 50),
    }),
  },
  {
    name: "ZigZag",
    path: (progress: number) => ({
      x: progress * 1000,
      y: (progress % 2) * 1000,
    }),
  },
];

export default function GridAnimation() {
  const gridSize = 1000;
  const overflowMargin = 100; // Additional space around the grid for the animation overflow
  const [animation, setAnimation] = useState(animationOptions[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 0.01) % 1);
    }, 50);
    return () => clearInterval(interval);
  }, [animation]);

  const animationPath = animation.path(progress);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        {animationOptions.map((anim, index) => (
          <button
            key={index}
            onClick={() => setAnimation(anim)}
            className={`p-1 m-1 shadowBroadNormal ${
              animation.name === anim.name
                ? "bg-cyan-300 text-black"
                : "bg-pink-700 text-white"
            }`}
          >
            {anim.name}
          </button>
        ))}
      </div>
      <svg
        width="70vh"
        height="70vh"
        viewBox={`${-overflowMargin} ${-overflowMargin} ${
          gridSize + overflowMargin * 2
        } ${gridSize + overflowMargin * 2}`}
      >
        <Grid size={gridSize} spacing={50} />
        <motion.image
          href="/images/allIconLarge1.png"
          width="10vh"
          height="10vh"
          animate={{ x: animationPath.x, y: animationPath.y }}
          transition={{
            duration: 0.05,
            ease: "linear",
          }}
          style={{ borderRadius: "50%" }}
        />
      </svg>
    </div>
  );
}
