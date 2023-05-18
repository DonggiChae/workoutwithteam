"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import SearchTeamSideBar from "@/components/sideBars/SearchTeamSideBar";
import TeamCard from "@/components/Cards/TeamCard";
import { toInteger } from "lodash";

interface Team {
  name: string;
  description: string;
  url: string;
  sports: string[];
  members: number;
}

interface Checkbox {
  id: string;
  label: string;
}

interface CheckboxListProps {
  checkboxes: Checkbox[];
  title: string;
}

const teams: Team[] = [
  {
    name: "CrossFit",
    description:
      "A high-intensity fitness program incorporating elements from several sports and types of exercise.",
    url: "https://www.crossfit.com/",
    sports: ["CrossFit", "Functional Training"],
    members: 15,
  },
  {
    name: "Bodybuilding.com",
    description:
      "A website and forum dedicated to bodybuilding, fitness, and weight training.",
    url: "https://www.bodybuilding.com/",
    sports: ["Bodybuilding", "Weight Training", "Fitness"],
    members: 15,
  },
  {
    name: "Strava",
    description:
      "A social network for athletes that tracks cycling and running routes using GPS.",
    url: "https://www.strava.com/",
    sports: ["Cycling", "Running"],
    members: 15,
  },
  {
    name: "GymnasticBodies",
    description:
      "A training program focused on gymnastics-inspired bodyweight exercises and mobility training.",
    url: "https://www.gymnasticbodies.com/",
    sports: ["Gymnastics", "Bodyweight Training"],
    members: 15,
  },
  {
    name: "Running Room",
    description:
      "A running specialty store with a variety of training programs and events.",
    url: "https://www.runningroom.com/",
    sports: ["Running", "Walking"],
    members: 15,
  },
  {
    name: "Spartan Race",
    description: "An obstacle race series with events around the world.",
    url: "https://www.spartan.com/",
    sports: ["Obstacle Course Racing", "Endurance"],
    members: 15,
  },
];

const KindOfWorkout: CheckboxListProps = {
  title: "Workout",
  checkboxes: [
    { id: "1", label: "CrossFit" },
    { id: "2", label: "BodyBuilding" },
    { id: "3", label: "Running" },
  ],
};

export default function SearchTeam() {
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

  // const handleSearchInputChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setSearchQuery(event.target.value);
  // };

  const handleSportFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSportFilter(event.target.value);
  };

  return (
    <div className="flex flex-row ">
      <div className="fixed z-40 ">
        <SearchTeamSideBar
          onSearch={setSearchQuery}
          checkboxList={KindOfWorkout}
        />
      </div>
      <div className="pl-80">
        <h1>Find Your Sports team</h1>

        <form>
          {/* <input
    type="text"
    placeholder="Search for a team..."
    value={searchQuery}
    onChange={handleSearchInputChange}
  /> */}
          <select value={sportFilter} onChange={handleSportFilterChange}>
            <option value="">All Sports</option>
            <option value="CrossFit">CrossFit</option>
            <option value="Bodybuilding">Bodybuilding</option>
            <option value="Cycling">Cycling</option>
            <option value="Running">Running</option>
            <option value="Gymnastics">Gymnastics</option>
            <option value="Obstacle Course Racing">
              Obstacle Course Racing
            </option>
          </select>
        </form>

        <div>
          {filteredteams.length > 0 ? (
            filteredteams.map((team) => (
              <div key={team.url}>
                <TeamCard
                  name={team.name}
                  description={team.description}
                  url={team.url}
                  sports={team.sports}
                  members={team.members}
                />
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>

        <Link href="/">
          <div>Back to Home</div>
        </Link>
      </div>
    </div>
  );
}
