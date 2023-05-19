"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import SearchTeamSideBar from "@/components/sideBars/SearchTeamSideBar";
import TeamCard from "@/components/Cards/TeamCard";

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
    { id: "CrossFit", label: "CrossFit" },
    { id: "Functional Training", label: "Functional Training" },
    { id: "Bodybuilding", label: "Bodybuilding" },
    { id: "Weight Training", label: "Weight Training" },
    { id: "Fitness", label: "Fitness" },
    { id: "Cycling", label: "Cycling" },
    { id: "Running", label: "Running" },
    { id: "Gymnastics", label: "Gymnastics" },
    { id: "Bodyweight Training", label: "Bodyweight Training" },
    { id: "Walking", label: "Walking" },
    { id: "Obstacle Course Racing", label: "Obstacle Course Racing" },
    { id: "Endurance", label: "Endurance" },
  ],
};

export default function SearchTeam() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
  const [filteredTeams, setFilteredTeams] = useState<Team[]>([]);
  const filterItems = () => {
    const filteredTeams = teams.filter((team) => {
      if (selectedCheckboxes.length === 0) {
        return null;
      }
      if (selectedCheckboxes.length > 0) {
        return (
          (team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            team.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase())) &&
          selectedCheckboxes.some((checkbox) => team.sports.includes(checkbox))
        );
      }
      return true;
    });

    setFilteredTeams(filteredTeams);
  };

  useEffect(() => {
    filterItems();
  }, [selectedCheckboxes, searchQuery]);

  return (
    <div className="flex flex-row ">
      <div className="fixed z-40 ">
        <SearchTeamSideBar
          onSearch={setSearchQuery}
          checkboxList={KindOfWorkout}
          onCheckboxChange={setSelectedCheckboxes}
        />
      </div>
      <div className="pl-80">
        <h1>Find Your Sports team</h1>

        <div>
          {filteredTeams.length > 0 ? (
            filteredTeams.map((team) => (
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
