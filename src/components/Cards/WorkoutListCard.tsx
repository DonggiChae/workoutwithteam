import React from "react";

interface WorkoutProps {
  date?: string;
  title?: string;
  writer?: string;
}

export default function WorkoutListCard(props: WorkoutProps) {
  return (
    <div className="flex h-16 flex-col items-start gap-2.5 px-2.5 py-5">
      <div className="flex items-start self-stretch p-2.5">
        {props.date ? <div>{props.date}</div> : <div>Date</div>}
        {props.title ? <div>{props.title} </div> : <div>Title</div>}
        {props.writer ? <div>{props.writer} </div> : <div>writer</div>}
      </div>
    </div>
  );
}
