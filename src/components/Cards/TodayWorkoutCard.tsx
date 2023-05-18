import React from "react";
import Image from "next/image";
import RightArrowIcon from "@/assets/icons/arrow-right.svg";
import DotMenuIcon from "@/assets/icons/dot-menu-more.svg";
import ShareIcon from "@/assets/icons/share1.svg";

export default function TodayWorkoutCard() {
  return (
    <div className=" relative flex h-96 w-[950px] flex-col items-start gap-4 bg-white p-6">
      <div className="flex w-full flex-row items-start gap-4">
        <div className="flex flex-col items-start gap-2">
          <div className="text-xl font-bold">Today's workout</div>
          <div className="flex h-6 flex-row items-start gap-4 text-sm text-slate-400">
            <div>Nikhil S</div>
            <div>2nd December 2021</div>
          </div>
          <div className="flex flex-row items-start gap-4">
            <Image
              width={24}
              height={24}
              src={RightArrowIcon}
              alt="Right Arrow"
            />
            <div>
              <p>1. 21-15-9 </p>
              <p>Ring Muscle ups</p>
              <p>DB One arm Overhead Squats (80/55)</p>
              <p>* scale A </p>
              <p>15-12-9</p>
              <p>...</p>
            </div>
          </div>
          <div className="flex flex-row items-start gap-4">
            <div className="text-slate-400">Share</div>
            <Image width={24} height={24} src={ShareIcon} alt="share" />
            <Image
              width={24}
              height={24}
              src={DotMenuIcon}
              alt="More Options"
            />
          </div>
        </div>
      </div>
      TodayWorkoutCard
    </div>
  );
}
