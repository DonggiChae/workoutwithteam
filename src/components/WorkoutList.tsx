import React from "react";
import WorkoutListCard from "./Cards/WorkoutListCard";

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

export default function WorkoutList() {
  return (
    <div>
      <h1>Workout List</h1>
      <div>
        <WorkoutListCard />
      </div>
      {workoutData.map((workout, index) => (
        <li key={index}>
          <WorkoutListCard
            date={workout.date}
            title={workout.title}
            writer={workout.writer}
          />
        </li>
      ))}
    </div>
  );
}
