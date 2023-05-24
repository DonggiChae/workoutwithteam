import React from "react";
import Image from "next/image";
import TeamImage from "@/assets/images/Run.jpeg";
import Button from "../buttons/Button";
import TextTruncate from "../primitives/TextTruncate";
import { TeamProps } from "@/types/TeamTypes";

export default function TeamCard({
  name,
  description,
  id,
  sports,
  members,
}: TeamProps) {
  const JoinTeam = () => {
    console.log("join team");
  };
  return (
    <div className="flex h-[440px] w-60 flex-col items-start  gap-4 bg-white">
      <Image
        width={240}
        height={240}
        alt="Main Team Photo"
        src={TeamImage}
        priority={false}
        quality={25}
        style={{ objectFit: "cover" }}
        className="h-[240px] w-[240px] bg-center object-cover"
      />

      <div className="flex flex-col items-start justify-center gap-5 p-3">
        <div className="flex h-20 flex-col items-start gap-2 ">
          <div className="text-base font-bold">{name}</div>
          <TextTruncate
            text={description}
            maxLength={50}
            className="whitespace-pre-wrap break-all text-sm font-medium text-gray-600"
          />

          <div className="text-sm font-medium text-gray-600">
            Members: {members}
          </div>
        </div>
      </div>
      <div className="w-full p-3">
        <Button
          onClick={() => JoinTeam()}
          className="flex w-full flex-row items-center justify-center  rounded bg-blue-500 px-2 py-2 font-bold text-white hover:bg-blue-700 "
        >
          Join Team
        </Button>
      </div>
    </div>
  );
}
