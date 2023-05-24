import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="h-screen w-screen bg-zinc-100 pt-14">{children}</div>
    </div>
  );
}
