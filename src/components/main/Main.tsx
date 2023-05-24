import React from "react";
import AutoPlay from "../carousel/AutoPlay";
import ContentCard from "../cards/ContentCard";

export default function Main() {
  return (
    <main className="w-screen">
      <AutoPlay />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4">
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
        </div>
      </div>
    </main>
  );
}
