import React from "react";
import ListTeamCard from "../cards/ListTeamCard";
import { TeamProps } from "@/types/TeamTypes";
import Link from "next/link";

const teams: TeamProps[] = [
  {
    name: "CrossFit",
    description:
      "A high-intensity fitness program incorporating elements from several sports and types of exercise.",
    id: "1",
    sports: ["CrossFit", "Functional Training"],
    members: 15,
  },
  {
    name: "Bodybuilding.com",
    description:
      "A website and forum dedicated to bodybuilding, fitness, and weight training.",
    id: "2",
    sports: ["Bodybuilding", "Weight Training", "Fitness"],
    members: 15,
  },
];

export default function MyTeamList() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 text-center text-2xl font-bold">My Teams</div>

      {teams.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {teams.map((team, index) => {
            return (
              <div key={index}>
                <Link href={`/team/${team.id}`} key={team.id}>
                  <ListTeamCard
                    name={team.name}
                    description={team.description}
                    id={team.id}
                    sports={team.sports}
                    members={team.members}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <Link href="/searchTeams" className="text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center ">No Teams</div>
            How about Search a team?
          </div>
        </Link>
      )}
    </div>
  );
}
