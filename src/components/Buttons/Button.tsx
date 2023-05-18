import React from "react";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button
      className="flex flex-row items-center justify-center  rounded bg-blue-500 px-2 py-4 font-bold text-white hover:bg-blue-700"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
