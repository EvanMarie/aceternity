import HStack from "./hStack";

export default function HStackFull({
  children,
  className,
  gap,
  ref,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: string;
  ref?: React.RefObject<HTMLDivElement>;
  onClick?: () => void;
}) {
  return (
    <HStack
      className={`w-full ${gap} ${className}`}
      ref={ref}
      onClick={onClick}
    >
      {children}
    </HStack>
  );
}
