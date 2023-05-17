import React from "react";
import MyTeamSideBar from "@/components/sideBars/MyTeamSideBar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row pt-14">
      <div className="fixed">
        <MyTeamSideBar />
      </div>
      <div className="pl-80">{children}</div>
    </div>
  );
}
