import type { ReactElement } from "react";

type ButtonProps = {
  type?: "submit" | "reset" | "button" | undefined;
  text: string | ReactElement;
  variant?: "clear" | "disabled"| "primary";
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  hasArrow?: boolean;
  disabled?: boolean;
};

const ButtonVariant = {
  clear: "!w-fit text-foreground border !rounded-[58px] px-6 py-2.5 !text-[14px] hover:bg-black/2",
  primary: "!w-fit bg-[#4F46E5] text-white border border-[#4F46E5] !rounded-[58px] px-6 py-2.5 !text-[14px] hover:bg-[4F46E5]/60",
  disabled: ""
};

const Button = ({ type,
  onClick,
  text,
  variant = "clear",
  isLoading,
  className = "",
  leftIcon,
  rightIcon,
  disabled, }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flex items-center outline-none justify-center gap-2 w-full  rounded-lg  border text-[16px] leading-[22.7px] font-normal cursor-pointer tracking-[-0.03em] ${ButtonVariant[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {leftIcon && <>{leftIcon}</>}{" "}
      {isLoading ? "" : text}{" "}
      {rightIcon && <>{rightIcon}</>}
    </button>
  )
}

export default Button
