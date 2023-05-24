import React from "react";
import PersonalCard from "../cards/PersonalCard";

export default function PersonalSideBar() {
  return (
    <div className="sticky flex w-80 flex-col items-start bg-white p-0">
      <PersonalCard />
      <div className="flex h-screen w-80 flex-col items-start gap-8 px-8">
        <div className="ml-6 flex w-80 flex-col items-start gap-4">
          <div className="font-bold">About Me</div>
          <div className="flex flex-col items-start gap-4">
            <div>Records</div>
            <div>Teams</div>
            <div>Friends</div>
          </div>
        </div>
      </div>
    </div>
  );
}
