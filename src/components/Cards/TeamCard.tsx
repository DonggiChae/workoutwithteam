import React from "react";
import Image from "next/image";
import TeamImage from "@/assets/images/Run.jpeg";
import Button from "../Buttons/Button";

interface TeamProp {
  name: string;
  description: string;
  url: string;
  sports: string[];
  members: number;
}

export default function TeamCard({
  name,
  description,
  url,
  sports,
  members,
}: TeamProp) {
  const JoinTeam = () => {
    console.log("join team");
  };
  return (
    <div className="flex h-[550px] w-80 flex-col items-start justify-center gap-4 bg-white">
      <Image
        width={320}
        height={320}
        alt="Main Team Photo"
        src={TeamImage}
        style={{ objectFit: "cover" }}
        className="h-[320px] w-[320px] bg-center object-cover"
      />

      <div className="flex w-80 flex-col items-start gap-5 p-4 pb-6">
        <div className="flex h-20 w-72 flex-col items-start gap-2">
          <div className="text-base font-bold">{name}</div>
          <div>{description}</div>
          <div>Members: {members}</div>
        </div>
      </div>
      <div className="p-4">
        <Button onClick={() => JoinTeam()}>Join Team</Button>
      </div>
    </div>
  );
}
