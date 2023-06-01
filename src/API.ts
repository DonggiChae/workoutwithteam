/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInfoInput = {
  id?: string | null,
  familyName: string,
  givenName: string,
  email: string,
  phoneNumber: string,
  birthday?: string | null,
  sub: string,
  createdAt?: string | null,
  updateAt?: string | null,
};

export type ModelUserInfoConditionInput = {
  familyName?: ModelStringInput | null,
  givenName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updateAt?: ModelStringInput | null,
  and?: Array< ModelUserInfoConditionInput | null > | null,
  or?: Array< ModelUserInfoConditionInput | null > | null,
  not?: ModelUserInfoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UserInfo = {
  __typename: "UserInfo",
  id: string,
  familyName: string,
  givenName: string,
  email: string,
  phoneNumber: string,
  birthday?: string | null,
  sub: string,
  createdAt?: string | null,
  updateAt?: string | null,
  updatedAt: string,
};

export type UpdateUserInfoInput = {
  id: string,
  familyName?: string | null,
  givenName?: string | null,
  email?: string | null,
  phoneNumber?: string | null,
  birthday?: string | null,
  sub?: string | null,
  createdAt?: string | null,
  updateAt?: string | null,
};

export type DeleteUserInfoInput = {
  id: string,
};

export type CreateWorkoutTeamInput = {
  id?: string | null,
  teamName: string,
  description?: string | null,
  sports?: Array< string > | null,
  numberOfMembers?: number | null,
  members: string,
  workoutTeamWorkoutRecordId?: string | null,
};

export type ModelWorkoutTeamConditionInput = {
  teamName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  sports?: ModelStringInput | null,
  numberOfMembers?: ModelIntInput | null,
  members?: ModelStringInput | null,
  and?: Array< ModelWorkoutTeamConditionInput | null > | null,
  or?: Array< ModelWorkoutTeamConditionInput | null > | null,
  not?: ModelWorkoutTeamConditionInput | null,
  workoutTeamWorkoutRecordId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type WorkoutTeam = {
  __typename: "WorkoutTeam",
  id: string,
  teamName: string,
  description?: string | null,
  sports?: Array< string > | null,
  numberOfMembers?: number | null,
  WorkoutRecord?: WorkoutRecord | null,
  members: string,
  createdAt: string,
  updatedAt: string,
  workoutTeamWorkoutRecordId?: string | null,
};

export type WorkoutRecord = {
  __typename: "WorkoutRecord",
  id: string,
  date?: string | null,
  workout?:  Array<KindofWorkout | null > | null,
  conditions?: Conditions | null,
  intensity?: string | null,
  pain?: string | null,
  weather?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type KindofWorkout = {
  __typename: "KindofWorkout",
  CROSSFIT?: Crossfit | null,
  BODYBUILDING?: BodyBuildingSets | null,
  RUNNING?: Running | null,
  CYCLING?: Cycling | null,
  WEIGHTLIFTING?: WeightLiftingSets | null,
  PILATES?: PilateSets | null,
  GYMNASTICS?: GymnasticSets | null,
  BODYWEIGHTTRAINING?: BodyweightTraining | null,
  YOGA?: YogaSets | null,
};

export type Crossfit = {
  __typename: "Crossfit",
  exerciseName?: string | null,
  description?: string | null,
  scales?:  Array<Scales | null > | null,
  score?: string | null,
  intensity?: string | null,
  pain?: string | null,
  notes?: string | null,
  conditions?: Conditions | null,
};

export type Scales = {
  __typename: "Scales",
  equipment?: string | null,
  scale?: string | null,
};

export type Conditions = {
  __typename: "Conditions",
  before?: string | null,
  during?: string | null,
  after?: string | null,
};

export type BodyBuildingSets = {
  __typename: "BodyBuildingSets",
  load?: string | null,
  sets?: string | null,
  reps?: string | null,
  intensity?: string | null,
  pain?: string | null,
  notes?: string | null,
};

export type Running = {
  __typename: "Running",
  exerciseName?: string | null,
  description?: string | null,
  distance?: string | null,
  duration?: string | null,
  intensit?: string | null,
  pain?: string | null,
  notes?: string | null,
  conditions?: Conditions | null,
};

export type Cycling = {
  __typename: "Cycling",
  exerciseName?: string | null,
  description?: string | null,
  distance?: string | null,
  duration?: string | null,
  intensity?: string | null,
  pain?: string | null,
  notes?: string | null,
  conditions?: Conditions | null,
};

export type WeightLiftingSets = {
  __typename: "WeightLiftingSets",
  load?: string | null,
  sets?: string | null,
  reps?: string | null,
  intensity?: string | null,
  pain?: string | null,
  notes?: string | null,
};

export type PilateSets = {
  __typename: "PilateSets",
  exerciseName?: string | null,
  sets?: string | null,
  reps?: string | null,
  equipment?: string | null,
  notes?: string | null,
};

export type GymnasticSets = {
  __typename: "GymnasticSets",
  exerciseName?: string | null,
  sets?: string | null,
  reps?: string | null,
  equipment?: string | null,
  notes?: string | null,
  intensity?: string | null,
  pain?: string | null,
};

export type BodyweightTraining = {
  __typename: "BodyweightTraining",
  exerciseName?: string | null,
  bodyweightSets?:  Array<BobyweightSets | null > | null,
  intensity?: string | null,
  pain?: string | null,
  notes?: string | null,
  description?: string | null,
  conditions?: Conditions | null,
};

export type BobyweightSets = {
  __typename: "BobyweightSets",
  exerciseName?: string | null,
  sets?: string | null,
  reps?: string | null,
  equipment?: string | null,
  intensity?: string | null,
  pain?: string | null,
  notes?: string | null,
};

export type YogaSets = {
  __typename: "YogaSets",
  exerciseName?: string | null,
  sets?: string | null,
  reps?: string | null,
  notes?: string | null,
  intensity?: string | null,
  pain?: string | null,
  equipments?: string | null,
};

export type UpdateWorkoutTeamInput = {
  id: string,
  teamName?: string | null,
  description?: string | null,
  sports?: Array< string > | null,
  numberOfMembers?: number | null,
  members?: string | null,
  workoutTeamWorkoutRecordId?: string | null,
};

export type DeleteWorkoutTeamInput = {
  id: string,
};

export type CreateWorkoutRecordInput = {
  id?: string | null,
  date?: string | null,
  workout?: Array< KindofWorkoutInput | null > | null,
  conditions?: ConditionsInput | null,
  intensity?: string | null,
  pain?: string | null,
  weather?: string | null,
};

export type KindofWorkoutInput = {
  CROSSFIT?: CrossfitInput | null,
  BODYBUILDING?: BodyBuildingSetsInput | null,
  RUNNING?: RunningInput | null,
  CYCLING?: CyclingInput | null,
  WEIGHTLIFTING?: WeightLiftingSetsInput | null,
  PILATES?: PilateSetsInput | null,
  GYMNASTICS?: GymnasticSetsInput | null,
  BODYWEIGHTTRAINING?: BodyweightTrainingInput | null,
  YOGA?: YogaSetsInput | null,
};

export type CrossfitInput = {
  exerciseName?: string | null,
  description?: string | null,
  scales?: Array< ScalesInput | null > | null,
  score?: string | null,
  intensity?: string | null,
  pain?: string | null,
  notes?: string | null,
  conditions?: ConditionsInput | null,
};

export type ScalesInput = {
  equipment?: string | null,
  scale?: string | null,
};

export type ConditionsInput = {
  before?: string | null,
  during?: string | null,
  after?: string | null,
};

export type BodyBuildingSetsInput = {
  load?: string | null,
  sets?: string | null,
  reps?: string | null,
  intensity?: string | null,
  pain?: string | null,
  notes?: string | null,
};

export type RunningInput = {
  exerciseName?: string | null,
  description?: string | null,
  distance?: string | null,
  duration?: string | null,
  intensit?: string | null,
  pain?: string | null,
  notes?: string | null,
  conditions?: ConditionsInput | null,
};

export type CyclingInput = {
  exerciseName?: string | null,
  description?: string | null,
  distance?: string | null,
  duration?: string | null,
  intensity?: string | null,
  pain?: string | null,
  notes?: string | null,
  conditions?: ConditionsInput | null,
};

export type WeightLiftingSetsInput = {
  load?: string | null,
  sets?: string | null,
  reps?: string | null,
  intensity?: string | null,
  pain?: string | null,
  notes?: string | null,
};

export type PilateSetsInput = {
  exerciseName?: string | null,
  sets?: string | null,
  reps?: string | null,
  equipment?: string | null,
  notes?: string | null,
};

export type GymnasticSetsInput = {
  exerciseName?: string | null,
  sets?: string | null,
  reps?: string | null,
  equipment?: string | null,
  notes?: string | null,
  intensity?: string | null,
  pain?: string | null,
};

export type BodyweightTrainingInput = {
  exerciseName?: string | null,
  bodyweightSets?: Array< BobyweightSetsInput | null > | null,
  intensity?: string | null,
  pain?: string | null,
  notes?: string | null,
  description?: string | null,
  conditions?: ConditionsInput | null,
};

export type BobyweightSetsInput = {
  exerciseName?: string | null,
  sets?: string | null,
  reps?: string | null,
  equipment?: string | null,
  intensity?: string | null,
  pain?: string | null,
  notes?: string | null,
};

export type YogaSetsInput = {
  exerciseName?: string | null,
  sets?: string | null,
  reps?: string | null,
  notes?: string | null,
  intensity?: string | null,
  pain?: string | null,
  equipments?: string | null,
};

export type ModelWorkoutRecordConditionInput = {
  date?: ModelStringInput | null,
  intensity?: ModelStringInput | null,
  pain?: ModelStringInput | null,
  weather?: ModelStringInput | null,
  and?: Array< ModelWorkoutRecordConditionInput | null > | null,
  or?: Array< ModelWorkoutRecordConditionInput | null > | null,
  not?: ModelWorkoutRecordConditionInput | null,
};

export type UpdateWorkoutRecordInput = {
  id: string,
  date?: string | null,
  workout?: Array< KindofWorkoutInput | null > | null,
  conditions?: ConditionsInput | null,
  intensity?: string | null,
  pain?: string | null,
  weather?: string | null,
};

export type DeleteWorkoutRecordInput = {
  id: string,
};

export type ModelUserInfoFilterInput = {
  id?: ModelIDInput | null,
  familyName?: ModelStringInput | null,
  givenName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updateAt?: ModelStringInput | null,
  and?: Array< ModelUserInfoFilterInput | null > | null,
  or?: Array< ModelUserInfoFilterInput | null > | null,
  not?: ModelUserInfoFilterInput | null,
};

export type ModelUserInfoConnection = {
  __typename: "ModelUserInfoConnection",
  items:  Array<UserInfo | null >,
  nextToken?: string | null,
};

export type ModelWorkoutTeamFilterInput = {
  id?: ModelIDInput | null,
  teamName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  sports?: ModelStringInput | null,
  numberOfMembers?: ModelIntInput | null,
  members?: ModelStringInput | null,
  and?: Array< ModelWorkoutTeamFilterInput | null > | null,
  or?: Array< ModelWorkoutTeamFilterInput | null > | null,
  not?: ModelWorkoutTeamFilterInput | null,
  workoutTeamWorkoutRecordId?: ModelIDInput | null,
};

export type ModelWorkoutTeamConnection = {
  __typename: "ModelWorkoutTeamConnection",
  items:  Array<WorkoutTeam | null >,
  nextToken?: string | null,
};

export type ModelWorkoutRecordFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  intensity?: ModelStringInput | null,
  pain?: ModelStringInput | null,
  weather?: ModelStringInput | null,
  and?: Array< ModelWorkoutRecordFilterInput | null > | null,
  or?: Array< ModelWorkoutRecordFilterInput | null > | null,
  not?: ModelWorkoutRecordFilterInput | null,
};

export type ModelWorkoutRecordConnection = {
  __typename: "ModelWorkoutRecordConnection",
  items:  Array<WorkoutRecord | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserInfoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  familyName?: ModelSubscriptionStringInput | null,
  givenName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  birthday?: ModelSubscriptionStringInput | null,
  sub?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updateAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserInfoFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserInfoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionWorkoutTeamFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  teamName?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  sports?: ModelSubscriptionStringInput | null,
  numberOfMembers?: ModelSubscriptionIntInput | null,
  members?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWorkoutTeamFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkoutTeamFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionWorkoutRecordFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  intensity?: ModelSubscriptionStringInput | null,
  pain?: ModelSubscriptionStringInput | null,
  weather?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWorkoutRecordFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkoutRecordFilterInput | null > | null,
};

export type CreateUserInfoMutationVariables = {
  input: CreateUserInfoInput,
  condition?: ModelUserInfoConditionInput | null,
};

export type CreateUserInfoMutation = {
  createUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    familyName: string,
    givenName: string,
    email: string,
    phoneNumber: string,
    birthday?: string | null,
    sub: string,
    createdAt?: string | null,
    updateAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateUserInfoMutationVariables = {
  input: UpdateUserInfoInput,
  condition?: ModelUserInfoConditionInput | null,
};

export type UpdateUserInfoMutation = {
  updateUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    familyName: string,
    givenName: string,
    email: string,
    phoneNumber: string,
    birthday?: string | null,
    sub: string,
    createdAt?: string | null,
    updateAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserInfoMutationVariables = {
  input: DeleteUserInfoInput,
  condition?: ModelUserInfoConditionInput | null,
};

export type DeleteUserInfoMutation = {
  deleteUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    familyName: string,
    givenName: string,
    email: string,
    phoneNumber: string,
    birthday?: string | null,
    sub: string,
    createdAt?: string | null,
    updateAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateWorkoutTeamMutationVariables = {
  input: CreateWorkoutTeamInput,
  condition?: ModelWorkoutTeamConditionInput | null,
};

export type CreateWorkoutTeamMutation = {
  createWorkoutTeam?:  {
    __typename: "WorkoutTeam",
    id: string,
    teamName: string,
    description?: string | null,
    sports?: Array< string > | null,
    numberOfMembers?: number | null,
    WorkoutRecord?:  {
      __typename: "WorkoutRecord",
      id: string,
      date?: string | null,
      conditions?:  {
        __typename: "Conditions",
        before?: string | null,
        during?: string | null,
        after?: string | null,
      } | null,
      intensity?: string | null,
      pain?: string | null,
      weather?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    members: string,
    createdAt: string,
    updatedAt: string,
    workoutTeamWorkoutRecordId?: string | null,
  } | null,
};

export type UpdateWorkoutTeamMutationVariables = {
  input: UpdateWorkoutTeamInput,
  condition?: ModelWorkoutTeamConditionInput | null,
};

export type UpdateWorkoutTeamMutation = {
  updateWorkoutTeam?:  {
    __typename: "WorkoutTeam",
    id: string,
    teamName: string,
    description?: string | null,
    sports?: Array< string > | null,
    numberOfMembers?: number | null,
    WorkoutRecord?:  {
      __typename: "WorkoutRecord",
      id: string,
      date?: string | null,
      conditions?:  {
        __typename: "Conditions",
        before?: string | null,
        during?: string | null,
        after?: string | null,
      } | null,
      intensity?: string | null,
      pain?: string | null,
      weather?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    members: string,
    createdAt: string,
    updatedAt: string,
    workoutTeamWorkoutRecordId?: string | null,
  } | null,
};

export type DeleteWorkoutTeamMutationVariables = {
  input: DeleteWorkoutTeamInput,
  condition?: ModelWorkoutTeamConditionInput | null,
};

export type DeleteWorkoutTeamMutation = {
  deleteWorkoutTeam?:  {
    __typename: "WorkoutTeam",
    id: string,
    teamName: string,
    description?: string | null,
    sports?: Array< string > | null,
    numberOfMembers?: number | null,
    WorkoutRecord?:  {
      __typename: "WorkoutRecord",
      id: string,
      date?: string | null,
      conditions?:  {
        __typename: "Conditions",
        before?: string | null,
        during?: string | null,
        after?: string | null,
      } | null,
      intensity?: string | null,
      pain?: string | null,
      weather?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    members: string,
    createdAt: string,
    updatedAt: string,
    workoutTeamWorkoutRecordId?: string | null,
  } | null,
};

export type CreateWorkoutRecordMutationVariables = {
  input: CreateWorkoutRecordInput,
  condition?: ModelWorkoutRecordConditionInput | null,
};

export type CreateWorkoutRecordMutation = {
  createWorkoutRecord?:  {
    __typename: "WorkoutRecord",
    id: string,
    date?: string | null,
    workout?:  Array< {
      __typename: "KindofWorkout",
      CROSSFIT?:  {
        __typename: "Crossfit",
        exerciseName?: string | null,
        description?: string | null,
        score?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      BODYBUILDING?:  {
        __typename: "BodyBuildingSets",
        load?: string | null,
        sets?: string | null,
        reps?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      RUNNING?:  {
        __typename: "Running",
        exerciseName?: string | null,
        description?: string | null,
        distance?: string | null,
        duration?: string | null,
        intensit?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      CYCLING?:  {
        __typename: "Cycling",
        exerciseName?: string | null,
        description?: string | null,
        distance?: string | null,
        duration?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      WEIGHTLIFTING?:  {
        __typename: "WeightLiftingSets",
        load?: string | null,
        sets?: string | null,
        reps?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      PILATES?:  {
        __typename: "PilateSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        equipment?: string | null,
        notes?: string | null,
      } | null,
      GYMNASTICS?:  {
        __typename: "GymnasticSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        equipment?: string | null,
        notes?: string | null,
        intensity?: string | null,
        pain?: string | null,
      } | null,
      BODYWEIGHTTRAINING?:  {
        __typename: "BodyweightTraining",
        exerciseName?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
        description?: string | null,
      } | null,
      YOGA?:  {
        __typename: "YogaSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        notes?: string | null,
        intensity?: string | null,
        pain?: string | null,
        equipments?: string | null,
      } | null,
    } | null > | null,
    conditions?:  {
      __typename: "Conditions",
      before?: string | null,
      during?: string | null,
      after?: string | null,
    } | null,
    intensity?: string | null,
    pain?: string | null,
    weather?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWorkoutRecordMutationVariables = {
  input: UpdateWorkoutRecordInput,
  condition?: ModelWorkoutRecordConditionInput | null,
};

export type UpdateWorkoutRecordMutation = {
  updateWorkoutRecord?:  {
    __typename: "WorkoutRecord",
    id: string,
    date?: string | null,
    workout?:  Array< {
      __typename: "KindofWorkout",
      CROSSFIT?:  {
        __typename: "Crossfit",
        exerciseName?: string | null,
        description?: string | null,
        score?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      BODYBUILDING?:  {
        __typename: "BodyBuildingSets",
        load?: string | null,
        sets?: string | null,
        reps?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      RUNNING?:  {
        __typename: "Running",
        exerciseName?: string | null,
        description?: string | null,
        distance?: string | null,
        duration?: string | null,
        intensit?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      CYCLING?:  {
        __typename: "Cycling",
        exerciseName?: string | null,
        description?: string | null,
        distance?: string | null,
        duration?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      WEIGHTLIFTING?:  {
        __typename: "WeightLiftingSets",
        load?: string | null,
        sets?: string | null,
        reps?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      PILATES?:  {
        __typename: "PilateSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        equipment?: string | null,
        notes?: string | null,
      } | null,
      GYMNASTICS?:  {
        __typename: "GymnasticSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        equipment?: string | null,
        notes?: string | null,
        intensity?: string | null,
        pain?: string | null,
      } | null,
      BODYWEIGHTTRAINING?:  {
        __typename: "BodyweightTraining",
        exerciseName?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
        description?: string | null,
      } | null,
      YOGA?:  {
        __typename: "YogaSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        notes?: string | null,
        intensity?: string | null,
        pain?: string | null,
        equipments?: string | null,
      } | null,
    } | null > | null,
    conditions?:  {
      __typename: "Conditions",
      before?: string | null,
      during?: string | null,
      after?: string | null,
    } | null,
    intensity?: string | null,
    pain?: string | null,
    weather?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWorkoutRecordMutationVariables = {
  input: DeleteWorkoutRecordInput,
  condition?: ModelWorkoutRecordConditionInput | null,
};

export type DeleteWorkoutRecordMutation = {
  deleteWorkoutRecord?:  {
    __typename: "WorkoutRecord",
    id: string,
    date?: string | null,
    workout?:  Array< {
      __typename: "KindofWorkout",
      CROSSFIT?:  {
        __typename: "Crossfit",
        exerciseName?: string | null,
        description?: string | null,
        score?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      BODYBUILDING?:  {
        __typename: "BodyBuildingSets",
        load?: string | null,
        sets?: string | null,
        reps?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      RUNNING?:  {
        __typename: "Running",
        exerciseName?: string | null,
        description?: string | null,
        distance?: string | null,
        duration?: string | null,
        intensit?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      CYCLING?:  {
        __typename: "Cycling",
        exerciseName?: string | null,
        description?: string | null,
        distance?: string | null,
        duration?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      WEIGHTLIFTING?:  {
        __typename: "WeightLiftingSets",
        load?: string | null,
        sets?: string | null,
        reps?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      PILATES?:  {
        __typename: "PilateSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        equipment?: string | null,
        notes?: string | null,
      } | null,
      GYMNASTICS?:  {
        __typename: "GymnasticSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        equipment?: string | null,
        notes?: string | null,
        intensity?: string | null,
        pain?: string | null,
      } | null,
      BODYWEIGHTTRAINING?:  {
        __typename: "BodyweightTraining",
        exerciseName?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
        description?: string | null,
      } | null,
      YOGA?:  {
        __typename: "YogaSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        notes?: string | null,
        intensity?: string | null,
        pain?: string | null,
        equipments?: string | null,
      } | null,
    } | null > | null,
    conditions?:  {
      __typename: "Conditions",
      before?: string | null,
      during?: string | null,
      after?: string | null,
    } | null,
    intensity?: string | null,
    pain?: string | null,
    weather?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserInfoQueryVariables = {
  id: string,
};

export type GetUserInfoQuery = {
  getUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    familyName: string,
    givenName: string,
    email: string,
    phoneNumber: string,
    birthday?: string | null,
    sub: string,
    createdAt?: string | null,
    updateAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListUserInfosQueryVariables = {
  filter?: ModelUserInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserInfosQuery = {
  listUserInfos?:  {
    __typename: "ModelUserInfoConnection",
    items:  Array< {
      __typename: "UserInfo",
      id: string,
      familyName: string,
      givenName: string,
      email: string,
      phoneNumber: string,
      birthday?: string | null,
      sub: string,
      createdAt?: string | null,
      updateAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWorkoutTeamQueryVariables = {
  id: string,
};

export type GetWorkoutTeamQuery = {
  getWorkoutTeam?:  {
    __typename: "WorkoutTeam",
    id: string,
    teamName: string,
    description?: string | null,
    sports?: Array< string > | null,
    numberOfMembers?: number | null,
    WorkoutRecord?:  {
      __typename: "WorkoutRecord",
      id: string,
      date?: string | null,
      conditions?:  {
        __typename: "Conditions",
        before?: string | null,
        during?: string | null,
        after?: string | null,
      } | null,
      intensity?: string | null,
      pain?: string | null,
      weather?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    members: string,
    createdAt: string,
    updatedAt: string,
    workoutTeamWorkoutRecordId?: string | null,
  } | null,
};

export type ListWorkoutTeamsQueryVariables = {
  filter?: ModelWorkoutTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkoutTeamsQuery = {
  listWorkoutTeams?:  {
    __typename: "ModelWorkoutTeamConnection",
    items:  Array< {
      __typename: "WorkoutTeam",
      id: string,
      teamName: string,
      description?: string | null,
      sports?: Array< string > | null,
      numberOfMembers?: number | null,
      WorkoutRecord?:  {
        __typename: "WorkoutRecord",
        id: string,
        date?: string | null,
        intensity?: string | null,
        pain?: string | null,
        weather?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      members: string,
      createdAt: string,
      updatedAt: string,
      workoutTeamWorkoutRecordId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWorkoutRecordQueryVariables = {
  id: string,
};

export type GetWorkoutRecordQuery = {
  getWorkoutRecord?:  {
    __typename: "WorkoutRecord",
    id: string,
    date?: string | null,
    workout?:  Array< {
      __typename: "KindofWorkout",
      CROSSFIT?:  {
        __typename: "Crossfit",
        exerciseName?: string | null,
        description?: string | null,
        score?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      BODYBUILDING?:  {
        __typename: "BodyBuildingSets",
        load?: string | null,
        sets?: string | null,
        reps?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      RUNNING?:  {
        __typename: "Running",
        exerciseName?: string | null,
        description?: string | null,
        distance?: string | null,
        duration?: string | null,
        intensit?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      CYCLING?:  {
        __typename: "Cycling",
        exerciseName?: string | null,
        description?: string | null,
        distance?: string | null,
        duration?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      WEIGHTLIFTING?:  {
        __typename: "WeightLiftingSets",
        load?: string | null,
        sets?: string | null,
        reps?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      PILATES?:  {
        __typename: "PilateSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        equipment?: string | null,
        notes?: string | null,
      } | null,
      GYMNASTICS?:  {
        __typename: "GymnasticSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        equipment?: string | null,
        notes?: string | null,
        intensity?: string | null,
        pain?: string | null,
      } | null,
      BODYWEIGHTTRAINING?:  {
        __typename: "BodyweightTraining",
        exerciseName?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
        description?: string | null,
      } | null,
      YOGA?:  {
        __typename: "YogaSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        notes?: string | null,
        intensity?: string | null,
        pain?: string | null,
        equipments?: string | null,
      } | null,
    } | null > | null,
    conditions?:  {
      __typename: "Conditions",
      before?: string | null,
      during?: string | null,
      after?: string | null,
    } | null,
    intensity?: string | null,
    pain?: string | null,
    weather?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWorkoutRecordsQueryVariables = {
  filter?: ModelWorkoutRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkoutRecordsQuery = {
  listWorkoutRecords?:  {
    __typename: "ModelWorkoutRecordConnection",
    items:  Array< {
      __typename: "WorkoutRecord",
      id: string,
      date?: string | null,
      conditions?:  {
        __typename: "Conditions",
        before?: string | null,
        during?: string | null,
        after?: string | null,
      } | null,
      intensity?: string | null,
      pain?: string | null,
      weather?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null,
};

export type OnCreateUserInfoSubscription = {
  onCreateUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    familyName: string,
    givenName: string,
    email: string,
    phoneNumber: string,
    birthday?: string | null,
    sub: string,
    createdAt?: string | null,
    updateAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null,
};

export type OnUpdateUserInfoSubscription = {
  onUpdateUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    familyName: string,
    givenName: string,
    email: string,
    phoneNumber: string,
    birthday?: string | null,
    sub: string,
    createdAt?: string | null,
    updateAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null,
};

export type OnDeleteUserInfoSubscription = {
  onDeleteUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    familyName: string,
    givenName: string,
    email: string,
    phoneNumber: string,
    birthday?: string | null,
    sub: string,
    createdAt?: string | null,
    updateAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateWorkoutTeamSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutTeamFilterInput | null,
};

export type OnCreateWorkoutTeamSubscription = {
  onCreateWorkoutTeam?:  {
    __typename: "WorkoutTeam",
    id: string,
    teamName: string,
    description?: string | null,
    sports?: Array< string > | null,
    numberOfMembers?: number | null,
    WorkoutRecord?:  {
      __typename: "WorkoutRecord",
      id: string,
      date?: string | null,
      conditions?:  {
        __typename: "Conditions",
        before?: string | null,
        during?: string | null,
        after?: string | null,
      } | null,
      intensity?: string | null,
      pain?: string | null,
      weather?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    members: string,
    createdAt: string,
    updatedAt: string,
    workoutTeamWorkoutRecordId?: string | null,
  } | null,
};

export type OnUpdateWorkoutTeamSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutTeamFilterInput | null,
};

export type OnUpdateWorkoutTeamSubscription = {
  onUpdateWorkoutTeam?:  {
    __typename: "WorkoutTeam",
    id: string,
    teamName: string,
    description?: string | null,
    sports?: Array< string > | null,
    numberOfMembers?: number | null,
    WorkoutRecord?:  {
      __typename: "WorkoutRecord",
      id: string,
      date?: string | null,
      conditions?:  {
        __typename: "Conditions",
        before?: string | null,
        during?: string | null,
        after?: string | null,
      } | null,
      intensity?: string | null,
      pain?: string | null,
      weather?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    members: string,
    createdAt: string,
    updatedAt: string,
    workoutTeamWorkoutRecordId?: string | null,
  } | null,
};

export type OnDeleteWorkoutTeamSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutTeamFilterInput | null,
};

export type OnDeleteWorkoutTeamSubscription = {
  onDeleteWorkoutTeam?:  {
    __typename: "WorkoutTeam",
    id: string,
    teamName: string,
    description?: string | null,
    sports?: Array< string > | null,
    numberOfMembers?: number | null,
    WorkoutRecord?:  {
      __typename: "WorkoutRecord",
      id: string,
      date?: string | null,
      conditions?:  {
        __typename: "Conditions",
        before?: string | null,
        during?: string | null,
        after?: string | null,
      } | null,
      intensity?: string | null,
      pain?: string | null,
      weather?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    members: string,
    createdAt: string,
    updatedAt: string,
    workoutTeamWorkoutRecordId?: string | null,
  } | null,
};

export type OnCreateWorkoutRecordSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutRecordFilterInput | null,
};

export type OnCreateWorkoutRecordSubscription = {
  onCreateWorkoutRecord?:  {
    __typename: "WorkoutRecord",
    id: string,
    date?: string | null,
    workout?:  Array< {
      __typename: "KindofWorkout",
      CROSSFIT?:  {
        __typename: "Crossfit",
        exerciseName?: string | null,
        description?: string | null,
        score?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      BODYBUILDING?:  {
        __typename: "BodyBuildingSets",
        load?: string | null,
        sets?: string | null,
        reps?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      RUNNING?:  {
        __typename: "Running",
        exerciseName?: string | null,
        description?: string | null,
        distance?: string | null,
        duration?: string | null,
        intensit?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      CYCLING?:  {
        __typename: "Cycling",
        exerciseName?: string | null,
        description?: string | null,
        distance?: string | null,
        duration?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      WEIGHTLIFTING?:  {
        __typename: "WeightLiftingSets",
        load?: string | null,
        sets?: string | null,
        reps?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      PILATES?:  {
        __typename: "PilateSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        equipment?: string | null,
        notes?: string | null,
      } | null,
      GYMNASTICS?:  {
        __typename: "GymnasticSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        equipment?: string | null,
        notes?: string | null,
        intensity?: string | null,
        pain?: string | null,
      } | null,
      BODYWEIGHTTRAINING?:  {
        __typename: "BodyweightTraining",
        exerciseName?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
        description?: string | null,
      } | null,
      YOGA?:  {
        __typename: "YogaSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        notes?: string | null,
        intensity?: string | null,
        pain?: string | null,
        equipments?: string | null,
      } | null,
    } | null > | null,
    conditions?:  {
      __typename: "Conditions",
      before?: string | null,
      during?: string | null,
      after?: string | null,
    } | null,
    intensity?: string | null,
    pain?: string | null,
    weather?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWorkoutRecordSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutRecordFilterInput | null,
};

export type OnUpdateWorkoutRecordSubscription = {
  onUpdateWorkoutRecord?:  {
    __typename: "WorkoutRecord",
    id: string,
    date?: string | null,
    workout?:  Array< {
      __typename: "KindofWorkout",
      CROSSFIT?:  {
        __typename: "Crossfit",
        exerciseName?: string | null,
        description?: string | null,
        score?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      BODYBUILDING?:  {
        __typename: "BodyBuildingSets",
        load?: string | null,
        sets?: string | null,
        reps?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      RUNNING?:  {
        __typename: "Running",
        exerciseName?: string | null,
        description?: string | null,
        distance?: string | null,
        duration?: string | null,
        intensit?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      CYCLING?:  {
        __typename: "Cycling",
        exerciseName?: string | null,
        description?: string | null,
        distance?: string | null,
        duration?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      WEIGHTLIFTING?:  {
        __typename: "WeightLiftingSets",
        load?: string | null,
        sets?: string | null,
        reps?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      PILATES?:  {
        __typename: "PilateSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        equipment?: string | null,
        notes?: string | null,
      } | null,
      GYMNASTICS?:  {
        __typename: "GymnasticSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        equipment?: string | null,
        notes?: string | null,
        intensity?: string | null,
        pain?: string | null,
      } | null,
      BODYWEIGHTTRAINING?:  {
        __typename: "BodyweightTraining",
        exerciseName?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
        description?: string | null,
      } | null,
      YOGA?:  {
        __typename: "YogaSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        notes?: string | null,
        intensity?: string | null,
        pain?: string | null,
        equipments?: string | null,
      } | null,
    } | null > | null,
    conditions?:  {
      __typename: "Conditions",
      before?: string | null,
      during?: string | null,
      after?: string | null,
    } | null,
    intensity?: string | null,
    pain?: string | null,
    weather?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWorkoutRecordSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutRecordFilterInput | null,
};

export type OnDeleteWorkoutRecordSubscription = {
  onDeleteWorkoutRecord?:  {
    __typename: "WorkoutRecord",
    id: string,
    date?: string | null,
    workout?:  Array< {
      __typename: "KindofWorkout",
      CROSSFIT?:  {
        __typename: "Crossfit",
        exerciseName?: string | null,
        description?: string | null,
        score?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      BODYBUILDING?:  {
        __typename: "BodyBuildingSets",
        load?: string | null,
        sets?: string | null,
        reps?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      RUNNING?:  {
        __typename: "Running",
        exerciseName?: string | null,
        description?: string | null,
        distance?: string | null,
        duration?: string | null,
        intensit?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      CYCLING?:  {
        __typename: "Cycling",
        exerciseName?: string | null,
        description?: string | null,
        distance?: string | null,
        duration?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      WEIGHTLIFTING?:  {
        __typename: "WeightLiftingSets",
        load?: string | null,
        sets?: string | null,
        reps?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
      } | null,
      PILATES?:  {
        __typename: "PilateSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        equipment?: string | null,
        notes?: string | null,
      } | null,
      GYMNASTICS?:  {
        __typename: "GymnasticSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        equipment?: string | null,
        notes?: string | null,
        intensity?: string | null,
        pain?: string | null,
      } | null,
      BODYWEIGHTTRAINING?:  {
        __typename: "BodyweightTraining",
        exerciseName?: string | null,
        intensity?: string | null,
        pain?: string | null,
        notes?: string | null,
        description?: string | null,
      } | null,
      YOGA?:  {
        __typename: "YogaSets",
        exerciseName?: string | null,
        sets?: string | null,
        reps?: string | null,
        notes?: string | null,
        intensity?: string | null,
        pain?: string | null,
        equipments?: string | null,
      } | null,
    } | null > | null,
    conditions?:  {
      __typename: "Conditions",
      before?: string | null,
      during?: string | null,
      after?: string | null,
    } | null,
    intensity?: string | null,
    pain?: string | null,
    weather?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
