import React from "react";
import HStack from "./hStack";

const HStackFull = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
    gap?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
  }
>(({ children, className, gap, onClick, style }, ref) => {
  return (
    <HStack
      className={`w-full ${gap} ${className}`}
      ref={ref}
      onClick={onClick}
      style={style}
    >
      {children}
    </HStack>
  );
});

export default HStackFull;
