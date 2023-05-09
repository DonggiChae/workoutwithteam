import React, { FC } from "react";

type WorkoutRecordProps = {
  record: {
    date: string;
    workout: {
      crossfit?: {
        wod: {
          name: string;
          description: string;
          scales: {
            equipment: string;
            scale: string;
          }[];
          score: string;
        };
      };
      bodybuilding?: {
        exercise: {
          name: string;
          sets: {
            weight: string;
            reps: string;
            notes?: string;
          }[];
        }[];
      };
    };
  };
};

type WorkoutRecordType = {
  date: string;
  workout: {
    crossfit?: {
      wod: {
        name: string;
        description: string;
        scales: {
          equipment: string;
          scale: string;
        }[];
        score: string;
      };
    };
    bodybuilding?: {
      exercise: {
        name: string;
        sets: {
          weight: string;
          reps: string;
          notes?: string;
        }[];
      }[];
    };
  }[];
};

const WorkoutRecordItem: FC<WorkoutRecordType> = (record, index) => {
  return <div></div>;
};

export default function ListAccordion() {
  const WorkoutRecord = {
    records: [
      {
        date: "YYYY-MM-DD",
        workout: [
          {
            crossfit: {
              wod: {
                name: "WOD 이름",
                description: "WOD 설명",
                scales: [
                  {
                    equipment: "바벨",
                    scale: "무게나 높이, 난이도",
                  },
                  {
                    equipment: "덤벨",
                    scale: "무게",
                  },
                ],
                score: "WOD 점수",
              },
            },
          },
          {
            bodybuilding: {
              exercise: [
                {
                  name: "운동 이름",
                  sets: [
                    {
                      weight: "세트당 무게",
                      reps: "세트당 반복 횟수",
                      notes: "세트에 대한 추가적인 설명",
                    },
                    {
                      weight: "세트당 무게",
                      reps: "세트당 반복 횟수",
                      notes: "세트에 대한 추가적인 설명",
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
      // 추가 가능
    ],
  };

  return (
    <div>
      {WorkoutRecord.records.map((record, index) => WorkoutRecordItem(record))}
      {/* <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item> */}
    </div>
  );
}
