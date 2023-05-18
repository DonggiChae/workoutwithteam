import WorkoutList from "@/components/WorkoutList";
import TodayWorkoutCard from "@/components/Cards/TodayWorkoutCard";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center pt-5">
      <TodayWorkoutCard />
      <WorkoutList />
    </div>
  );
}
