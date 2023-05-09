import React from "react";
import { Team } from "@/types/team";
import styles from "./TeamList.module.scss";

type TeamListProps = {
  teams: Team[];
};

const TeamList: React.FC<TeamListProps> = ({ teams }) => {
  return (
    <div className={styles.teamList}>
      <h1>Team List</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.name}>
            <a href={`/team/${team.name}`}>{team.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
