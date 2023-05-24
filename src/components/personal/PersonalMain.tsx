import React from "react";
import Calendar from "../calendar/Calendar";
import PRCard from "../cards/PRCard";

export default function PersonalMain() {
  return (
    <div>
      <div>
        <Calendar />
      </div>
      <div>
        <h1 className="p-4 text-center text-2xl font-bold">Personal Records</h1>
        <div className="grid grid-cols-2 gap-4">
          <PRCard />
          <PRCard />
          <PRCard />
          <PRCard />
          <PRCard />
          <PRCard />
        </div>
      </div>
    </div>
  );
}
