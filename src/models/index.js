// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { WorkoutTeam, WorkoutRecord, User, YogaSets, Yoga, BobyweightSets, BodyweightTraining, GymnasticSets, Gymnastic, PilateSets, Pilates, WeightLiftingSets, WeightLifting, Cycling, Running, BodyBuildingSets, Bodybuilding, Scales, Crossfit, Conditions, KindofWorkout } = initSchema(schema);

export {
  WorkoutTeam,
  WorkoutRecord,
  User,
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