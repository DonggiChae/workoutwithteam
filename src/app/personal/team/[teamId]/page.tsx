import WorkoutList from "@/components/WorkoutList";
import TodayWorkoutCard from "@/components/cards/TodayWorkoutCard";

export default function page({ params }: { params: { teamId: string } }) {
  return (
    <div className="flex flex-col items-center justify-center pt-5">
      <h1>{params.teamId}</h1>
      <TodayWorkoutCard />
      <WorkoutList />
    </div>
  );
}
