"use client";

import React, { useState } from "react";
import WorkoutListCard from "./Cards/WorkoutListCard";
import Pagination from "./Pagination";

const workoutData = [
  {
    date: "2023-05-17",
    title: "HIIT Workout",
    writer: "Moon",
  },
  {
    date: "2023-05-18",
    title: "Yoga Workout",
    writer: "Moon",
  },
  {
    date: "2023-05-19",
    title: "Pilates Workout",
    writer: "Moon",
  },
  {
    date: "2023-05-20",
    title: "Strength Training Workout",
    writer: "Moon",
  },
  {
    date: "2023-05-21",
    title: "Cardio Workout",
    writer: "Moon",
  },
];

interface WorkoutDataProps {
  date: string;
  title: string;
  writer: string;
}

export default function WorkoutList() {
  const [page, setPage] = useState(1); //페이지
  const limit = 10; // posts가 보일 최대한의 갯수
  const offset = (page - 1) * limit; // 시작점과 끝점을 구하는 offset

  const postsData = (posts: WorkoutDataProps[]) => {
    if (posts.length > 0) {
      let result = posts.slice(offset, offset + limit);
      return result;
    }
  };
  return (
    <div className="flex w-[950px] flex-col items-center">
      <div className="text-xl font-bold">Workout List</div>
      <div className="w-full font-bold">
        <WorkoutListCard />
      </div>
      {workoutData.map((workout, index) => (
        <div key={index} className="w-full">
          <WorkoutListCard
            date={workout.date}
            title={workout.title}
            writer={workout.writer}
          />
        </div>
      ))}
      <Pagination
        limit={limit}
        page={page}
        totalPosts={workoutData.length}
        setPage={setPage}
      />
    </div>
  );
}
