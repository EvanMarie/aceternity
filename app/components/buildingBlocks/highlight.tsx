export default function HL({
  color = "text-col-200",
  children,
  className = "text-lg-normal",
}: {
  color?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`font-semibold ${color} ${className}`}>{children}</span>
  );
}
