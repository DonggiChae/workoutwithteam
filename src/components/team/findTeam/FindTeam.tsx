import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./findTeam.module.scss";

import TeamCard from "@/components/TeamCard";

type Team = {
  name: string;
  description: string;
  url: string;
  sports: string[];
};

const teams: Team[] = [
  {
    name: "CrossFit",
    description:
      "A high-intensity fitness program incorporating elements from several sports and types of exercise.",
    url: "https://www.crossfit.com/",
    sports: ["CrossFit", "Functional Training"],
  },
  {
    name: "Bodybuilding.com",
    description:
      "A website and forum dedicated to bodybuilding, fitness, and weight training.",
    url: "https://www.bodybuilding.com/",
    sports: ["Bodybuilding", "Weight Training", "Fitness"],
  },
  {
    name: "Strava",
    description:
      "A social network for athletes that tracks cycling and running routes using GPS.",
    url: "https://www.strava.com/",
    sports: ["Cycling", "Running"],
  },
  {
    name: "GymnasticBodies",
    description:
      "A training program focused on gymnastics-inspired bodyweight exercises and mobility training.",
    url: "https://www.gymnasticbodies.com/",
    sports: ["Gymnastics", "Bodyweight Training"],
  },
  {
    name: "Running Room",
    description:
      "A running specialty store with a variety of training programs and events.",
    url: "https://www.runningroom.com/",
    sports: ["Running", "Walking"],
  },
  {
    name: "Spartan Race",
    description: "An obstacle race series with events around the world.",
    url: "https://www.spartan.com/",
    sports: ["Obstacle Course Racing", "Endurance"],
  },
];

export default function FindTeam() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sportFilter, setSportFilter] = useState("");

  const filteredteams = teams.filter((team) => {
    if (sportFilter) {
      return team.sports.includes(sportFilter);
    }

    if (searchQuery) {
      return (
        team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        team.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return true;
  });

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleSportFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSportFilter(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Sports Communities | My Website</title>
      </Head>

      <h1 className={styles.title}>Find Your Sports team</h1>

      <form className={styles.form}>
        <input
          type="text"
          placeholder="Search for a team..."
          className={styles.input}
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <select
          className={styles.select}
          value={sportFilter}
          onChange={handleSportFilterChange}
        >
          <option value="">All Sports</option>
          <option value="CrossFit">CrossFit</option>
          <option value="Bodybuilding">Bodybuilding</option>
          <option value="Cycling">Cycling</option>
          <option value="Running">Running</option>
          <option value="Gymnastics">Gymnastics</option>
          <option value="Obstacle Course Racing">Obstacle Course Racing</option>
        </select>
      </form>

      <div className={styles.communities}>
        {filteredteams.length > 0 ? (
          filteredteams.map((team) => (
            <div key={team.url}>
              <TeamCard team={team} />
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No results found.</p>
        )}
      </div>

      <Link href="/">
        <div className={styles.backButton}>Back to Home</div>
      </Link>
    </div>
  );
}
