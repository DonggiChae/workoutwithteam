"use client";

import PersonalMain from "@/components/personal/PersonalMain";
import { headers } from "next/headers";

function Page() {
  return (
    <div className="flex h-full w-full  items-center justify-center">
      <PersonalMain />
    </div>
  );
}

export default Page;
