import React from "react";
import TeamPageCard from "../Cards/TeamPageCard";

export default function MyTeamSideBar() {
  return (
    <div className="sticky flex w-80 flex-col items-start bg-white p-0">
      <TeamPageCard />
      <div className="flex h-screen w-80 flex-col items-start gap-8 px-8">
        <div className="ml-6 flex w-80 flex-col items-start gap-4">
          <div className="font-bold">My Team </div>
          <div className="flex flex-col items-start gap-4">
            <div>Workout</div>
            <div>Board</div>
            <div>Group</div>
          </div>
        </div>
      </div>
    </div>
  );
}
