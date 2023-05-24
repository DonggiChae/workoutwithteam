import React from "react";

interface WorkoutProps {
  date?: string;
  title?: string;
  writer?: string;
}

export default function WorkoutListCard(props: WorkoutProps) {
  return (
    <div className="flex h-12  flex-col items-start justify-center gap-2.5 border-b  bg-white px-2.5 py-5">
      <div className="flex w-full items-start gap-20  self-stretch p-2.5">
        {props.date ? (
          <div className="w-32">{props.date}</div>
        ) : (
          <div className="w-32">Date</div>
        )}
        {props.title ? (
          <div className="w-32">{props.title} </div>
        ) : (
          <div className="w-32">Title</div>
        )}
        {props.writer ? (
          <div className="w-32">{props.writer} </div>
        ) : (
          <div className="w-32">writer</div>
        )}
      </div>
    </div>
  );
}
