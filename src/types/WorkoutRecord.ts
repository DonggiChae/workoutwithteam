export interface YogaSets {
  exerciseName: string;
  sets: string;
  reps: string;
  notes?: string;
  intensity?: string;
  pain?: string;
  equipments?: string;
}

export interface Yoga {
  exerciseName: string;
  description?: string;
  yogaSets: YogaSets;
  intensity?: string;
  pain?: string;
  notes?: string;
  conditions?: Conditions;
}

export interface BobyweightSets {
  exerciseName: string;
  sets: string;
  reps: string;
  equipment?: string;
  intensity?: string;
  pain?: string;
  notes?: string;
}

export interface BodyweightTraining {
  exerciseName: string;
  bodyweightSets: BobyweightSets[];
  intensity?: string;
  pain?: string;
  notes?: string;
  description?: string;
  conditions?: Conditions;
}

export interface GymnasticSets {
  exerciseName: string;
  sets: string;
  reps: string;
  equipment?: string;
  notes?: string;
  intensity?: string;
  pain?: string;
}

export interface Gymnastic {
  description?: string;
  gymnasticSets: GymnasticSets[];
  intensity?: string;
  pain?: string;
  notes?: string;
  exerciseName: string;
  conditions?: Conditions;
}

export interface PilateSets {
  exerciseName: string;
  sets: string;
  reps: string;
  equipment?: string;
  notes?: string;
}

export interface Pilates {
  exerciseName: string;
  pilateSets: PilateSets[];
  intensity?: string;
  pain?: string;
  notes?: string;
  description?: string;
  conditions?: Conditions;
}

export interface WeightLiftingSets {
  load: string;
  sets: string;
  reps: string;
  intensity?: string;
  pain?: string;
  notes?: string;
}

export interface WeightLifting {
  exerciseName: string;
  description?: string;
  weightlift: WeightLiftingSets[];
  intensity?: string;
  pain?: string;
  notes?: string;
  conditions?: Conditions;
}

export interface Cycling {
  exerciseName: string;
  description?: string;
  distance: string;
  duration: string;
  intensity?: string;
  pain?: string;
  notes?: string;
  conditions?: Conditions;
}

export interface Running {
  exerciseName: string;
  description?: string;
  distance: string;
  duration: string;
  itensity?: string;
  pain?: string;
  notes?: string;
  conditions?: Conditions;
}

export interface BodyBuildingSets {
  load: string;
  sets: string;
  reps: string;
  intensity?: string;
  pain?: string;
  notes?: string;
}

export interface Bodybuilding {
  exerciseName: string;
  description?: string;
  bodybuild: BodyBuildingSets[];
  intensity?: string;
  pain?: string;
  notes?: string;
  conditions?: Conditions;
}

export interface Scales {
  equipment: string;
  scale: string;
}

export interface Crossfit {
  exerciseName: string;
  description?: string;
  scales: Scales[];
  score: string;
  intensity?: string;
  pain?: string;
  notes?: string;
  conditions?: Conditions;
}

export interface Conditions {
  before?: string;
  during?: string;
  after?: string;
}

export interface KindofWorkout {
  CROSSFIT?: Crossfit;
  BODYBUILDING?: Bodybuilding;
  RUNNING?: Running;
  CYCLING?: Cycling;
  WEIGHTLIFTING?: WeightLifting;
  PILATES?: Pilates;
  GYMNASTICS?: Gymnastic;
  BODYWEIGHTTRAINING?: BodyweightTraining;
  YOGA?: Yoga;
}

export interface WorkoutRecord {
  // id: string;
  date: Date;
  workout: KindofWorkout[];
  conditions?: Conditions;
  intensity?: string;
  pain?: string;
  weather?: string;
}
