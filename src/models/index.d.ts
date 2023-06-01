import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";



type EagerPhotoS3Info = {
  readonly key: string;
  readonly width: number;
  readonly height: number;
}

type LazyPhotoS3Info = {
  readonly key: string;
  readonly width: number;
  readonly height: number;
}

export declare type PhotoS3Info = LazyLoading extends LazyLoadingDisabled ? EagerPhotoS3Info : LazyPhotoS3Info

export declare const PhotoS3Info: (new (init: ModelInit<PhotoS3Info>) => PhotoS3Info)

type EagerMember = {
  readonly id: string;
  readonly familyName: string;
  readonly email: string;
  readonly nickName: string;
  readonly phoneNumber?: string | null;
  readonly birthDay?: string | null;
  readonly givenName: string;
}

type LazyMember = {
  readonly id: string;
  readonly familyName: string;
  readonly email: string;
  readonly nickName: string;
  readonly phoneNumber?: string | null;
  readonly birthDay?: string | null;
  readonly givenName: string;
}

export declare type Member = LazyLoading extends LazyLoadingDisabled ? EagerMember : LazyMember

export declare const Member: (new (init: ModelInit<Member>) => Member)

type EagerYogaSets = {
  readonly exerciseName?: string | null;
  readonly sets?: string | null;
  readonly reps?: string | null;
  readonly notes?: string | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly equipments?: string | null;
}

type LazyYogaSets = {
  readonly exerciseName?: string | null;
  readonly sets?: string | null;
  readonly reps?: string | null;
  readonly notes?: string | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly equipments?: string | null;
}

export declare type YogaSets = LazyLoading extends LazyLoadingDisabled ? EagerYogaSets : LazyYogaSets

export declare const YogaSets: (new (init: ModelInit<YogaSets>) => YogaSets)

type EagerYoga = {
  readonly exerciseName?: string | null;
  readonly description?: string | null;
  readonly yogaSets?: YogaSets | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
  readonly conditions?: Conditions | null;
}

type LazyYoga = {
  readonly exerciseName?: string | null;
  readonly description?: string | null;
  readonly yogaSets?: YogaSets | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
  readonly conditions?: Conditions | null;
}

export declare type Yoga = LazyLoading extends LazyLoadingDisabled ? EagerYoga : LazyYoga

export declare const Yoga: (new (init: ModelInit<Yoga>) => Yoga)

type EagerBobyweightSets = {
  readonly exerciseName?: string | null;
  readonly sets?: string | null;
  readonly reps?: string | null;
  readonly equipment?: string | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
}

type LazyBobyweightSets = {
  readonly exerciseName?: string | null;
  readonly sets?: string | null;
  readonly reps?: string | null;
  readonly equipment?: string | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
}

export declare type BobyweightSets = LazyLoading extends LazyLoadingDisabled ? EagerBobyweightSets : LazyBobyweightSets

export declare const BobyweightSets: (new (init: ModelInit<BobyweightSets>) => BobyweightSets)

type EagerBodyweightTraining = {
  readonly exerciseName?: string | null;
  readonly bodyweightSets?: (BobyweightSets | null)[] | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
  readonly description?: string | null;
  readonly conditions?: Conditions | null;
}

type LazyBodyweightTraining = {
  readonly exerciseName?: string | null;
  readonly bodyweightSets?: (BobyweightSets | null)[] | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
  readonly description?: string | null;
  readonly conditions?: Conditions | null;
}

export declare type BodyweightTraining = LazyLoading extends LazyLoadingDisabled ? EagerBodyweightTraining : LazyBodyweightTraining

export declare const BodyweightTraining: (new (init: ModelInit<BodyweightTraining>) => BodyweightTraining)

type EagerGymnasticSets = {
  readonly exerciseName?: string | null;
  readonly sets?: string | null;
  readonly reps?: string | null;
  readonly equipment?: string | null;
  readonly notes?: string | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
}

type LazyGymnasticSets = {
  readonly exerciseName?: string | null;
  readonly sets?: string | null;
  readonly reps?: string | null;
  readonly equipment?: string | null;
  readonly notes?: string | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
}

export declare type GymnasticSets = LazyLoading extends LazyLoadingDisabled ? EagerGymnasticSets : LazyGymnasticSets

export declare const GymnasticSets: (new (init: ModelInit<GymnasticSets>) => GymnasticSets)

type EagerGymnastic = {
  readonly description?: string | null;
  readonly gymnasticSets?: (GymnasticSets | null)[] | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
  readonly exerciseName?: string | null;
  readonly conditions?: Conditions | null;
}

type LazyGymnastic = {
  readonly description?: string | null;
  readonly gymnasticSets?: (GymnasticSets | null)[] | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
  readonly exerciseName?: string | null;
  readonly conditions?: Conditions | null;
}

export declare type Gymnastic = LazyLoading extends LazyLoadingDisabled ? EagerGymnastic : LazyGymnastic

export declare const Gymnastic: (new (init: ModelInit<Gymnastic>) => Gymnastic)

type EagerPilateSets = {
  readonly exerciseName?: string | null;
  readonly sets?: string | null;
  readonly reps?: string | null;
  readonly equipment?: string | null;
  readonly notes?: string | null;
}

type LazyPilateSets = {
  readonly exerciseName?: string | null;
  readonly sets?: string | null;
  readonly reps?: string | null;
  readonly equipment?: string | null;
  readonly notes?: string | null;
}

export declare type PilateSets = LazyLoading extends LazyLoadingDisabled ? EagerPilateSets : LazyPilateSets

export declare const PilateSets: (new (init: ModelInit<PilateSets>) => PilateSets)

type EagerPilates = {
  readonly exerciseName?: string | null;
  readonly pilateSets?: (PilateSets | null)[] | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
  readonly description?: string | null;
  readonly conditions?: Conditions | null;
}

type LazyPilates = {
  readonly exerciseName?: string | null;
  readonly pilateSets?: (PilateSets | null)[] | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
  readonly description?: string | null;
  readonly conditions?: Conditions | null;
}

export declare type Pilates = LazyLoading extends LazyLoadingDisabled ? EagerPilates : LazyPilates

export declare const Pilates: (new (init: ModelInit<Pilates>) => Pilates)

type EagerWeightLiftingSets = {
  readonly load?: string | null;
  readonly sets?: string | null;
  readonly reps?: string | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
}

type LazyWeightLiftingSets = {
  readonly load?: string | null;
  readonly sets?: string | null;
  readonly reps?: string | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
}

export declare type WeightLiftingSets = LazyLoading extends LazyLoadingDisabled ? EagerWeightLiftingSets : LazyWeightLiftingSets

export declare const WeightLiftingSets: (new (init: ModelInit<WeightLiftingSets>) => WeightLiftingSets)

type EagerWeightLifting = {
  readonly exerciseName?: string | null;
  readonly description?: string | null;
  readonly weightlift?: (WeightLiftingSets | null)[] | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
  readonly conditions?: Conditions | null;
}

type LazyWeightLifting = {
  readonly exerciseName?: string | null;
  readonly description?: string | null;
  readonly weightlift?: (WeightLiftingSets | null)[] | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
  readonly conditions?: Conditions | null;
}

export declare type WeightLifting = LazyLoading extends LazyLoadingDisabled ? EagerWeightLifting : LazyWeightLifting

export declare const WeightLifting: (new (init: ModelInit<WeightLifting>) => WeightLifting)

type EagerCycling = {
  readonly exerciseName?: string | null;
  readonly description?: string | null;
  readonly distance?: string | null;
  readonly duration?: string | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
  readonly conditions?: Conditions | null;
}

type LazyCycling = {
  readonly exerciseName?: string | null;
  readonly description?: string | null;
  readonly distance?: string | null;
  readonly duration?: string | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
  readonly conditions?: Conditions | null;
}

export declare type Cycling = LazyLoading extends LazyLoadingDisabled ? EagerCycling : LazyCycling

export declare const Cycling: (new (init: ModelInit<Cycling>) => Cycling)

type EagerRunning = {
  readonly exerciseName?: string | null;
  readonly description?: string | null;
  readonly distance?: string | null;
  readonly duration?: string | null;
  readonly intensit?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
  readonly conditions?: Conditions | null;
}

type LazyRunning = {
  readonly exerciseName?: string | null;
  readonly description?: string | null;
  readonly distance?: string | null;
  readonly duration?: string | null;
  readonly intensit?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
  readonly conditions?: Conditions | null;
}

export declare type Running = LazyLoading extends LazyLoadingDisabled ? EagerRunning : LazyRunning

export declare const Running: (new (init: ModelInit<Running>) => Running)

type EagerBodyBuildingSets = {
  readonly load?: string | null;
  readonly sets?: string | null;
  readonly reps?: string | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
}

type LazyBodyBuildingSets = {
  readonly load?: string | null;
  readonly sets?: string | null;
  readonly reps?: string | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
}

export declare type BodyBuildingSets = LazyLoading extends LazyLoadingDisabled ? EagerBodyBuildingSets : LazyBodyBuildingSets

export declare const BodyBuildingSets: (new (init: ModelInit<BodyBuildingSets>) => BodyBuildingSets)

type EagerBodybuilding = {
  readonly exerciseName?: string | null;
  readonly description?: string | null;
  readonly bodybuild?: (BodyBuildingSets | null)[] | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
  readonly conditions?: Conditions | null;
}

type LazyBodybuilding = {
  readonly exerciseName?: string | null;
  readonly description?: string | null;
  readonly bodybuild?: (BodyBuildingSets | null)[] | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
  readonly conditions?: Conditions | null;
}

export declare type Bodybuilding = LazyLoading extends LazyLoadingDisabled ? EagerBodybuilding : LazyBodybuilding

export declare const Bodybuilding: (new (init: ModelInit<Bodybuilding>) => Bodybuilding)

type EagerScales = {
  readonly equipment?: string | null;
  readonly scale?: string | null;
}

type LazyScales = {
  readonly equipment?: string | null;
  readonly scale?: string | null;
}

export declare type Scales = LazyLoading extends LazyLoadingDisabled ? EagerScales : LazyScales

export declare const Scales: (new (init: ModelInit<Scales>) => Scales)

type EagerCrossfit = {
  readonly exerciseName?: string | null;
  readonly description?: string | null;
  readonly scales?: (Scales | null)[] | null;
  readonly score?: string | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
  readonly conditions?: Conditions | null;
}

type LazyCrossfit = {
  readonly exerciseName?: string | null;
  readonly description?: string | null;
  readonly scales?: (Scales | null)[] | null;
  readonly score?: string | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly notes?: string | null;
  readonly conditions?: Conditions | null;
}

export declare type Crossfit = LazyLoading extends LazyLoadingDisabled ? EagerCrossfit : LazyCrossfit

export declare const Crossfit: (new (init: ModelInit<Crossfit>) => Crossfit)

type EagerConditions = {
  readonly before?: string | null;
  readonly during?: string | null;
  readonly after?: string | null;
}

type LazyConditions = {
  readonly before?: string | null;
  readonly during?: string | null;
  readonly after?: string | null;
}

export declare type Conditions = LazyLoading extends LazyLoadingDisabled ? EagerConditions : LazyConditions

export declare const Conditions: (new (init: ModelInit<Conditions>) => Conditions)

type EagerKindofWorkout = {
  readonly CROSSFIT?: Crossfit | null;
  readonly BODYBUILDING?: BodyBuildingSets | null;
  readonly RUNNING?: Running | null;
  readonly CYCLING?: Cycling | null;
  readonly WEIGHTLIFTING?: WeightLiftingSets | null;
  readonly PILATES?: PilateSets | null;
  readonly GYMNASTICS?: GymnasticSets | null;
  readonly BODYWEIGHTTRAINING?: BodyweightTraining | null;
  readonly YOGA?: YogaSets | null;
}

type LazyKindofWorkout = {
  readonly CROSSFIT?: Crossfit | null;
  readonly BODYBUILDING?: BodyBuildingSets | null;
  readonly RUNNING?: Running | null;
  readonly CYCLING?: Cycling | null;
  readonly WEIGHTLIFTING?: WeightLiftingSets | null;
  readonly PILATES?: PilateSets | null;
  readonly GYMNASTICS?: GymnasticSets | null;
  readonly BODYWEIGHTTRAINING?: BodyweightTraining | null;
  readonly YOGA?: YogaSets | null;
}

export declare type KindofWorkout = LazyLoading extends LazyLoadingDisabled ? EagerKindofWorkout : LazyKindofWorkout

export declare const KindofWorkout: (new (init: ModelInit<KindofWorkout>) => KindofWorkout)

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly familyName: string;
  readonly givenName: string;
  readonly email: string;
  readonly nickName?: string | null;
  readonly phoneNumber: string;
  readonly birthDay: string;
  readonly team?: (string | null)[] | null;
  readonly WorkoutTeams?: (UserWorkoutTeam | null)[] | null;
  readonly WorkoutRecords?: (WorkoutRecord | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly familyName: string;
  readonly givenName: string;
  readonly email: string;
  readonly nickName?: string | null;
  readonly phoneNumber: string;
  readonly birthDay: string;
  readonly team?: (string | null)[] | null;
  readonly WorkoutTeams: AsyncCollection<UserWorkoutTeam>;
  readonly WorkoutRecords: AsyncCollection<WorkoutRecord>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerTeamPhoto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamPhoto, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bucket: string;
  readonly fullsize?: PhotoS3Info | null;
  readonly thumbnail?: string | null;
  readonly WorkoutTeam?: WorkoutTeam | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamPhotoWorkoutTeamId?: string | null;
}

type LazyTeamPhoto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamPhoto, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bucket: string;
  readonly fullsize?: PhotoS3Info | null;
  readonly thumbnail?: string | null;
  readonly WorkoutTeam: AsyncItem<WorkoutTeam | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamPhotoWorkoutTeamId?: string | null;
}

export declare type TeamPhoto = LazyLoading extends LazyLoadingDisabled ? EagerTeamPhoto : LazyTeamPhoto

export declare const TeamPhoto: (new (init: ModelInit<TeamPhoto>) => TeamPhoto) & {
  copyOf(source: TeamPhoto, mutator: (draft: MutableModel<TeamPhoto>) => MutableModel<TeamPhoto> | void): TeamPhoto;
}

type EagerWorkoutTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WorkoutTeam, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamName: string;
  readonly description?: string | null;
  readonly sports?: string[] | null;
  readonly numberOfMembers?: number | null;
  readonly WorkoutRecord?: WorkoutRecord | null;
  readonly members?: Member | null;
  readonly users?: (UserWorkoutTeam | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly workoutTeamWorkoutRecordId?: string | null;
}

type LazyWorkoutTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WorkoutTeam, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamName: string;
  readonly description?: string | null;
  readonly sports?: string[] | null;
  readonly numberOfMembers?: number | null;
  readonly WorkoutRecord: AsyncItem<WorkoutRecord | undefined>;
  readonly members?: Member | null;
  readonly users: AsyncCollection<UserWorkoutTeam>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly workoutTeamWorkoutRecordId?: string | null;
}

export declare type WorkoutTeam = LazyLoading extends LazyLoadingDisabled ? EagerWorkoutTeam : LazyWorkoutTeam

export declare const WorkoutTeam: (new (init: ModelInit<WorkoutTeam>) => WorkoutTeam) & {
  copyOf(source: WorkoutTeam, mutator: (draft: MutableModel<WorkoutTeam>) => MutableModel<WorkoutTeam> | void): WorkoutTeam;
}

type EagerWorkoutRecord = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WorkoutRecord, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly workout?: (KindofWorkout | null)[] | null;
  readonly conditions?: Conditions | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly weather?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorkoutRecord = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WorkoutRecord, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly workout?: (KindofWorkout | null)[] | null;
  readonly conditions?: Conditions | null;
  readonly intensity?: string | null;
  readonly pain?: string | null;
  readonly weather?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WorkoutRecord = LazyLoading extends LazyLoadingDisabled ? EagerWorkoutRecord : LazyWorkoutRecord

export declare const WorkoutRecord: (new (init: ModelInit<WorkoutRecord>) => WorkoutRecord) & {
  copyOf(source: WorkoutRecord, mutator: (draft: MutableModel<WorkoutRecord>) => MutableModel<WorkoutRecord> | void): WorkoutRecord;
}

type EagerUserWorkoutTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserWorkoutTeam, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly workoutTeamId?: string | null;
  readonly user: User;
  readonly workoutTeam: WorkoutTeam;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserWorkoutTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserWorkoutTeam, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly workoutTeamId?: string | null;
  readonly user: AsyncItem<User>;
  readonly workoutTeam: AsyncItem<WorkoutTeam>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserWorkoutTeam = LazyLoading extends LazyLoadingDisabled ? EagerUserWorkoutTeam : LazyUserWorkoutTeam

export declare const UserWorkoutTeam: (new (init: ModelInit<UserWorkoutTeam>) => UserWorkoutTeam) & {
  copyOf(source: UserWorkoutTeam, mutator: (draft: MutableModel<UserWorkoutTeam>) => MutableModel<UserWorkoutTeam> | void): UserWorkoutTeam;
}