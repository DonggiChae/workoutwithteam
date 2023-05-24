"use client";

import React, { useCallback, useState } from "react";

import styles from "./calendar.module.scss";

import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

const Calendar = () => {
  const [value, onChange] = useState<ValuePiece | [ValuePiece, ValuePiece]>(
    new Date()
  );

  const koreanDate = value?.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    timeZone: "Asia/Seoul",
  });

  // 운동한 날을 나타내는 표시
  const marks = [
    "2023-03-15",
    "2023-03-16",
    "2023-03-17",
    "2023-03-18",
    "2023-03-19",
    "2023-03-20",
    "2023-04-21",
    "2023-04-22",
    "2023-04-23",
    "2023-04-24",
    "2023-04-25",
    "2023-04-26",
    "2023-04-27",
    "2023-04-28",
    "2023-04-29",
    "2023-05-01",
  ];

  return (
    <div>
      <ReactCalendar
        onChange={onChange}
        value={value}
        tileClassName={({ date, view }) => {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");

          if (marks.find((x) => x === `${year}-${month}-${day}`)) {
            // console.log(`${year}-${month}-${day}`);
            return [styles.highlight];
          }
        }}
      />
      {/* <div className="mt-4 text-gray-500">{koreanDate}</div> */}
    </div>
  );
};

export default Calendar;
