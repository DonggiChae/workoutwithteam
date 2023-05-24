import React from "react";
import PersonalSideBar from "@/components/sideBars/PersonalSideBar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      <div className="fixed z-40 pt-14">
        <PersonalSideBar />
      </div>
      <div className="w-screen bg-zinc-100 pl-80 pt-14">{children}</div>
    </div>
  );
}
