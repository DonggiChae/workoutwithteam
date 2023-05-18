import React from "react";
import Image from "next/image";
import TeamImage from "@/assets/images/Run.jpeg";

export default function MemberProfileCard() {
  return (
    <div className="flex h-60 w-60 flex-row px-2 py-8  ">
      <div className="flex flex-col items-start gap-2 rounded-full py-4">
        <Image
          width={160}
          height={160}
          src={TeamImage}
          alt="member profile picture"
        />
      </div>
      <div className="flex flex-col items-center gap-2 ">
        <div className="text-center text-xl font-bold">Messi</div>
        <div className="text-center">self introduction</div>
      </div>
    </div>
  );
}
