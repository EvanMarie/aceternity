import React from "react";
import VStack from "./vStack";

const VStackFull = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
    gap?: string;
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    align?: "items-start" | "items-center" | "items-end";
  }
>(
  (
    { children, className, gap, onClick, style = {}, align = "items-center" },
    ref
  ) => {
    return (
      <VStack
        className={`w-full ${gap} ${className}`}
        onClick={onClick}
        style={style}
        align={align}
        ref={ref}
      >
        {children}
      </VStack>
    );
  }
);

VStackFull.displayName = "VStackFull";

export default VStackFull;
