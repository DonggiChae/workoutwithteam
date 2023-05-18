import React from "react";
import Image from "next/image";
import TeamImage from "@/assets/images/Run.jpeg";
import Button from "../Buttons/Button";

export default function TeamCard() {
  const JoinTeam = () => {
    console.log("join team");
  };
  return (
    <div className="flex w-80 flex-col items-start justify-center gap-0.5 bg-white">
      <Image width={320} height={210} alt="Main Team Photo" src={TeamImage} />
      <div className="flex w-80 flex-col items-start gap-4 p-4">
        <div className="flex h-20 w-72 flex-col items-start gap-2">
          <div className="text-base font-bold">Team Name</div>
          <div>Team Description</div>
          <div>Members: 30</div>
        </div>
        <Button onClick={() => JoinTeam()}>Join Team</Button>
      </div>
    </div>
  );
}
