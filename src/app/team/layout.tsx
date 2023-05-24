import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      <div className="h-screen w-screen bg-zinc-100">{children}</div>
    </div>
  );
}
