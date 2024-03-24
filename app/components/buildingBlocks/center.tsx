import { ReactNode, forwardRef } from "react";

interface CenterProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  id?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Center = forwardRef<HTMLDivElement, CenterProps>(
  (
    {
      children,
      style,
      onClick,
      onKeyDown,
      className = "",
      id,
      onMouseEnter,
      onMouseLeave,
    },
    ref
  ) => {
    const interactiveProps = onClick
      ? {
          role: "presentation",
          tabIndex: 0,
          onClick,
          onKeyDown,
        }
      : {};

    return (
      <div
        ref={ref}
        id={id}
        className={`flex justify-center items-center ${className}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={style}
        {...interactiveProps}
      >
        {children}
      </div>
    );
  }
);

export default Center;
