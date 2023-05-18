import React from "react";
import MyTeamSideBar from "@/components/sideBars/MyTeamSideBar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      <div className="fixed z-50 pt-14">
        <MyTeamSideBar />
      </div>
      <div className="h-screen w-screen bg-zinc-100 pl-80 pt-14">
        {children}
      </div>
    </div>
  );
}
