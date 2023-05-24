"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import SearchTeamSideBar from "@/components/sideBars/SearchTeamSideBar";
import TeamCard from "@/components/cards/TeamCard";
import Pagination from "@/components/Pagination";
import { TeamProps } from "@/types/TeamTypes";

interface Checkbox {
  id: string;
  label: string;
}

interface CheckboxListProps {
  checkboxes: Checkbox[];
  title: string;
}

const teams: TeamProps[] = [
  {
    name: "CrossFit",
    description:
      "A high-intensity fitness program incorporating elements from several sports and types of exercise.",
    id: "https://www.crossfit.com/",
    sports: ["CrossFit", "Functional Training"],
    members: 15,
  },
  {
    name: "Bodybuilding.com",
    description:
      "A website and forum dedicated to bodybuilding, fitness, and weight training.",
    id: "https://www.bodybuilding.com/",
    sports: ["Bodybuilding", "Weight Training", "Fitness"],
    members: 15,
  },
  {
    name: "Strava",
    description:
      "A social network for athletes that tracks cycling and running routes using GPS.",
    id: "https://www.strava.com/",
    sports: ["Cycling", "Running"],
    members: 15,
  },
  {
    name: "GymnasticBodies",
    description:
      "A training program focused on gymnastics-inspired bodyweight exercises and mobility training.",
    id: "https://www.gymnasticbodies.com/",
    sports: ["Gymnastics", "Bodyweight Training"],
    members: 15,
  },
  {
    name: "Running Room",
    description:
      "A running specialty store with a variety of training programs and events.",
    id: "https://www.runningroom.com/",
    sports: ["Running", "Walking"],
    members: 15,
  },
  {
    name: "Spartan Race",
    description: "An obstacle race series with events around the world.",
    id: "https://www.spartan.com/",
    sports: ["Obstacle Course Racing", "Endurance"],
    members: 15,
  },
  {
    name: "Cycling Club",
    description: "A community of cyclists and athletes.",
    id: "https://www.cyclingclub.com/",
    sports: ["Cycling", "Running"],
    members: 15,
  },
  {
    name: "Spartan Race",
    description: "An obstacle race series with events around the world.",
    id: "https://www.spartan.com/",
    sports: ["Obstacle Course Racing", "Endurance"],
    members: 15,
  },
  {
    name: "Example Team 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: "https://www.example.com/team1",
    sports: ["Running", "Fitness"],
    members: 10,
  },
  {
    name: "Example Team 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: "https://www.example.com/team2",
    sports: ["Cycling", "Endurance"],
    members: 12,
  },

  {
    name: "Spartan Race",
    description: "An obstacle race series with events around the world.",
    id: "https://www.spartan.com/",
    sports: ["Obstacle Course Racing", "Endurance"],
    members: 15,
  },
  {
    name: "Example Team 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: "https://www.example.com/team1",
    sports: ["Running", "Fitness"],
    members: 10,
  },
  {
    name: "Example Team 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: "https://www.example.com/team2",
    sports: ["Cycling", "Endurance"],
    members: 12,
  },
  {
    name: "Spartan Race",
    description: "An obstacle race series with events around the world.",
    id: "https://www.spartan.com/",
    sports: ["Obstacle Course Racing", "Endurance"],
    members: 15,
  },
  {
    name: "Example Team 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: "https://www.example.com/team1",
    sports: ["Running", "Fitness"],
    members: 10,
  },
  {
    name: "Example Team 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: "https://www.example.com/team2",
    sports: ["Cycling", "Endurance"],
    members: 12,
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
  //pagination
  const [page, setPage] = useState(1); //페이지
  const limit = 12; // posts가 보일 최대한의 갯수
  const offset = (page - 1) * limit; // 시작점과 끝점을 구하는 offset
  // const [posts, setPosts] = useState<Team[]>([]);
  const postsData = (filteredTeams: TeamProps[]) => {
    if (filteredTeams.length > 0) {
      let result = filteredTeams.slice(offset, offset + limit);
      return result;
    }
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
  const [filteredTeams, setFilteredTeams] = useState<TeamProps[]>([]);
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
    const paginationTeams = postsData(filteredTeams);
    if (paginationTeams) {
      setFilteredTeams(paginationTeams);
    }
  };

  useEffect(() => {
    filterItems();
    postsData(filteredTeams);
  }, [selectedCheckboxes, searchQuery, page]);

  return (
    <div className="flex h-screen w-screen flex-row">
      <div className="fixed z-40 ">
        <SearchTeamSideBar
          onSearch={setSearchQuery}
          checkboxList={KindOfWorkout}
          onCheckboxChange={setSelectedCheckboxes}
        />
      </div>
      <div className="h-screen w-full pl-80">
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6 text-gray-900">
          <div className="flex flex-row justify-center pb-4">
            <h1 className="text-3xl font-bold ">Find Your team</h1>
          </div>
          {filteredTeams.length > 0 ? (
            <div>
              <div className="grid grid-cols-4 gap-4">
                {filteredTeams.map((team, index) => (
                  <div key={index}>
                    <TeamCard
                      name={team.name}
                      description={team.description}
                      id={team.id}
                      sports={team.sports}
                      members={team.members}
                    />
                  </div>
                ))}
              </div>
              <Pagination
                limit={limit}
                page={page}
                totalPosts={teams.length}
                setPage={setPage}
              />
            </div>
          ) : (
            <div className="flex w-full flex-col items-center justify-center">
              <p className="p-10 text-center text-2xl font-bold">
                No results found.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
