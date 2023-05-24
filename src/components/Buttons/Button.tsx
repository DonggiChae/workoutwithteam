import React from "react";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function Button({
  children,
  onClick,
  disabled,
  className,
  type,
}: ButtonProps) {
  return (
    <button
      className={
        className
          ? className
          : "flex flex-row items-center justify-center  rounded bg-blue-500 px-2 py-2 font-bold text-white hover:bg-blue-700"
      }
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
