import { TextLayout, TextShadows } from "types";

interface TextProps {
  text?: string;
  noOfLines?: number;
  shadow?: TextShadows;
  layout?: TextLayout | string;
  className?: string;
  isCursive?: boolean;
  color?: string;
}

export default function Heading({
  text,
  layout = "text-xl-normal",
  noOfLines = 1,
  shadow = "textShadow",
  className,
  isCursive = true,
  color = "text-col-100",
}: TextProps) {
  const style: React.CSSProperties = {};

  if (noOfLines) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.display = "-webkit-box";
    style.WebkitLineClamp = noOfLines;
    style.WebkitBoxOrient = "vertical";
  }
  const textClassName = isCursive
    ? `font-cursive ${layout} ${color} ${shadow} ${className}`
    : `${layout} ${color} ${shadow} ${className}`;

  return (
    <h1
      className={`${layout} ${shadow} ${textClassName} px-[1vh]`}
      style={style}
    >
      {text}
    </h1>
  );
}
