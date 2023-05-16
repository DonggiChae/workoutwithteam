import TeamList from "./TeamList";
import { Team } from "@/types/team";

type Props = {
  teams: Team[];
};

export default function TeamPage() {
  const teams: Team[] = [
    {
      name: "Team A",
      description: "This is Team A",
      url: "/team/a",
      sports: ["Football", "Basketball"],
    },
    {
      name: "Team B",
      description: "This is Team B",
      url: "/team/b",
      sports: ["Tennis"],
    },
  ];
  return <TeamList teams={teams} />;
}
