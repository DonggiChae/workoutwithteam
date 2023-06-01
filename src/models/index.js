// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, TeamPhoto, WorkoutTeam, WorkoutRecord, UserWorkoutTeam, PhotoS3Info, Member, YogaSets, Yoga, BobyweightSets, BodyweightTraining, GymnasticSets, Gymnastic, PilateSets, Pilates, WeightLiftingSets, WeightLifting, Cycling, Running, BodyBuildingSets, Bodybuilding, Scales, Crossfit, Conditions, KindofWorkout } = initSchema(schema);

export {
  User,
  TeamPhoto,
  WorkoutTeam,
  WorkoutRecord,
  UserWorkoutTeam,
  PhotoS3Info,
  Member,
  YogaSets,
  Yoga,
  BobyweightSets,
  BodyweightTraining,
  GymnasticSets,
  Gymnastic,
  PilateSets,
  Pilates,
  WeightLiftingSets,
  WeightLifting,
  Cycling,
  Running,
  BodyBuildingSets,
  Bodybuilding,
  Scales,
  Crossfit,
  Conditions,
  KindofWorkout
};