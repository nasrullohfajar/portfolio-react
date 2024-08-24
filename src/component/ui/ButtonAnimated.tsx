import React from "react";

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  iconPosition?: string;
  handleClick?: () => void;
  className?: string;
}

const ButtonAnimated = ({
  title,
  icon,
  iconPosition,
  handleClick,
  className,
}: ButtonProps) => {
  return (
    <button
      className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black-900 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${className}`}
      >
        {iconPosition === "left" && icon}
        {title}
        {iconPosition === "right" && icon}
      </span>
    </button>
  );
};

export default ButtonAnimated;
