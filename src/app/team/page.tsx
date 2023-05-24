import MyTeamList from "@/components/team/MyTeamList";
import MainTeamSideBar from "@/components/sideBars/MainTeamSideBar";

export default function page() {
  return (
    <div>
      <div className="fixed z-40 pt-14">
        <MainTeamSideBar />
      </div>
      <div className="flex flex-col items-center justify-center pl-80 pt-14">
        <MyTeamList />
      </div>
    </div>
  );
}
