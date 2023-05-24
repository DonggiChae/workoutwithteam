import FormCreateTeam from "@/components/forms/FormCreateTeam";
import MainTeamSideBar from "@/components/sideBars/MainTeamSideBar";

export default function Page() {
  return (
    <div>
      <div className="fixed z-40 ">
        <MainTeamSideBar />
      </div>
      <div className="flex items-center justify-center pl-80">
        <FormCreateTeam />
      </div>
    </div>
  );
}
