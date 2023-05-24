import React from "react";
import PersonalCard from "../cards/PersonalCard";
import Link from "next/link";

export default function MainTeamSideBar() {
  return (
    <div className="sticky flex w-80 flex-col items-start bg-white p-0">
      <PersonalCard />
      <div className="flex h-screen w-80 flex-col items-start gap-8 px-8">
        <div className="ml-6 flex w-80 flex-col items-start gap-4">
          <div className="font-bold">Team Main</div>
          <div className="flex flex-col items-start gap-4">
            <div>
              <Link href="/searchTeams">Search Teams</Link>
            </div>
            <div>
              <Link href="/createTeam">Create Team</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
