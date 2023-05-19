"use client";

import React from "react";
import SearchBar from "../SearchBar";
import CheckBoxes from "../CheckBoxes";

interface SearchTeamSideBarProps {
  onSearch: (query: string) => void;
  checkboxList: CheckboxListProps;
  onCheckboxChange: (selectedCheckboxes: string[]) => void;
}

interface Checkbox {
  id: string;
  label: string;
}

interface CheckboxListProps {
  checkboxes: Checkbox[];
  title: string;
}

export default function SearchTeamSideBar({
  onSearch,
  checkboxList,
  onCheckboxChange,
}: SearchTeamSideBarProps) {
  return (
    <div className="sticky flex w-80 flex-col items-start bg-white p-0">
      <div className="flex h-screen w-80 flex-col items-start gap-8 px-8">
        <div>
          <SearchBar onSearch={onSearch} />
        </div>
        <div>
          <CheckBoxes
            title={checkboxList.title}
            checkboxes={checkboxList.checkboxes}
            onCheckboxChange={onCheckboxChange}
          />
        </div>
        <div className="ml-6 flex w-80 flex-col items-start gap-4">
          <div className="font-bold">My Team </div>
          <div className="flex flex-col items-start gap-4">
            <div>Workout</div>
            <div>Board</div>
            <div>Group</div>
          </div>
        </div>
      </div>
    </div>
  );
}
