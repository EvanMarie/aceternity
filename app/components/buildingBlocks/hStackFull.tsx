import HStack from "./hStack";

export default function HStackFull({
  children,
  className,
  gap,
  ref,
  onClick,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: string;
  ref?: React.RefObject<HTMLDivElement>;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
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
}
