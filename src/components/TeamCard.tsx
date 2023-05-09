import React from "react";
import styles from "./TeamCard.module.scss";

type TeamCardProps = {
  team: {
    name: string;
    description: string;
    url: string;
    sports: string[];
  };
};

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <div className={styles["team-card"]}>
      <div className={styles["team-card__content"]}>
        <h2 className={styles["team-card__name"]}>{team.name}</h2>
        <p className={styles["team-card__description"]}>{team.description}</p>
        <a className={styles["team-card__url"]} href={team.url}>
          {team.url}
        </a>
        <div className={styles["team-card__sports"]}>
          <span className={styles["team-card__sports-label"]}>Sports:</span>
          {team.sports.map((sport, index) => (
            <span key={index} className={styles["team-card__sport"]}>
              {sport}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
