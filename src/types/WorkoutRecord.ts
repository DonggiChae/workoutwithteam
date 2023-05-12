export type WorkoutRecordProps = {
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

export type WorkoutRecordType = {
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
