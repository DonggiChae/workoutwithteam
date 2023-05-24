import React from "react";
import Image from "next/image";
import DotMenuIcon from "@/assets/icons/dot-menu-more.svg";

export default function PRCard() {
  return (
    <div className="flex h-32 w-[360px] flex-col  items-center justify-center gap-4 bg-white p-5">
      <div className="flex w-full flex-row content-between items-center justify-between px-1.5">
        <div className="text-xl font-bold">BackSquat</div>
        <Image width={24} height={24} src={DotMenuIcon} alt="dot-menu-more" />
      </div>
      <div className="w-full  px-1.5 text-xl">330LBS</div>
    </div>
  );
}
