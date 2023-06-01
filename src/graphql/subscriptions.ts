/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserInfo = /* GraphQL */ `
  subscription OnCreateUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
    onCreateUserInfo(filter: $filter) {
      id
      familyName
      givenName
      email
      phoneNumber
      birthday
      sub
      createdAt
      updateAt
      updatedAt
    }
  }
`;
export const onUpdateUserInfo = /* GraphQL */ `
  subscription OnUpdateUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
    onUpdateUserInfo(filter: $filter) {
      id
      familyName
      givenName
      email
      phoneNumber
      birthday
      sub
      createdAt
      updateAt
      updatedAt
    }
  }
`;
export const onDeleteUserInfo = /* GraphQL */ `
  subscription OnDeleteUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
    onDeleteUserInfo(filter: $filter) {
      id
      familyName
      givenName
      email
      phoneNumber
      birthday
      sub
      createdAt
      updateAt
      updatedAt
    }
  }
`;
export const onCreateWorkoutTeam = /* GraphQL */ `
  subscription OnCreateWorkoutTeam(
    $filter: ModelSubscriptionWorkoutTeamFilterInput
  ) {
    onCreateWorkoutTeam(filter: $filter) {
      id
      teamName
      description
      sports
      numberOfMembers
      WorkoutRecord {
        id
        date
        conditions {
          before
          during
          after
        }
        intensity
        pain
        weather
        createdAt
        updatedAt
      }
      members
      createdAt
      updatedAt
      workoutTeamWorkoutRecordId
    }
  }
`;
export const onUpdateWorkoutTeam = /* GraphQL */ `
  subscription OnUpdateWorkoutTeam(
    $filter: ModelSubscriptionWorkoutTeamFilterInput
  ) {
    onUpdateWorkoutTeam(filter: $filter) {
      id
      teamName
      description
      sports
      numberOfMembers
      WorkoutRecord {
        id
        date
        conditions {
          before
          during
          after
        }
        intensity
        pain
        weather
        createdAt
        updatedAt
      }
      members
      createdAt
      updatedAt
      workoutTeamWorkoutRecordId
    }
  }
`;
export const onDeleteWorkoutTeam = /* GraphQL */ `
  subscription OnDeleteWorkoutTeam(
    $filter: ModelSubscriptionWorkoutTeamFilterInput
  ) {
    onDeleteWorkoutTeam(filter: $filter) {
      id
      teamName
      description
      sports
      numberOfMembers
      WorkoutRecord {
        id
        date
        conditions {
          before
          during
          after
        }
        intensity
        pain
        weather
        createdAt
        updatedAt
      }
      members
      createdAt
      updatedAt
      workoutTeamWorkoutRecordId
    }
  }
`;
export const onCreateWorkoutRecord = /* GraphQL */ `
  subscription OnCreateWorkoutRecord(
    $filter: ModelSubscriptionWorkoutRecordFilterInput
  ) {
    onCreateWorkoutRecord(filter: $filter) {
      id
      date
      workout {
        CROSSFIT {
          exerciseName
          description
          score
          intensity
          pain
          notes
        }
        BODYBUILDING {
          load
          sets
          reps
          intensity
          pain
          notes
        }
        RUNNING {
          exerciseName
          description
          distance
          duration
          intensit
          pain
          notes
        }
        CYCLING {
          exerciseName
          description
          distance
          duration
          intensity
          pain
          notes
        }
        WEIGHTLIFTING {
          load
          sets
          reps
          intensity
          pain
          notes
        }
        PILATES {
          exerciseName
          sets
          reps
          equipment
          notes
        }
        GYMNASTICS {
          exerciseName
          sets
          reps
          equipment
          notes
          intensity
          pain
        }
        BODYWEIGHTTRAINING {
          exerciseName
          intensity
          pain
          notes
          description
        }
        YOGA {
          exerciseName
          sets
          reps
          notes
          intensity
          pain
          equipments
        }
      }
      conditions {
        before
        during
        after
      }
      intensity
      pain
      weather
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWorkoutRecord = /* GraphQL */ `
  subscription OnUpdateWorkoutRecord(
    $filter: ModelSubscriptionWorkoutRecordFilterInput
  ) {
    onUpdateWorkoutRecord(filter: $filter) {
      id
      date
      workout {
        CROSSFIT {
          exerciseName
          description
          score
          intensity
          pain
          notes
        }
        BODYBUILDING {
          load
          sets
          reps
          intensity
          pain
          notes
        }
        RUNNING {
          exerciseName
          description
          distance
          duration
          intensit
          pain
          notes
        }
        CYCLING {
          exerciseName
          description
          distance
          duration
          intensity
          pain
          notes
        }
        WEIGHTLIFTING {
          load
          sets
          reps
          intensity
          pain
          notes
        }
        PILATES {
          exerciseName
          sets
          reps
          equipment
          notes
        }
        GYMNASTICS {
          exerciseName
          sets
          reps
          equipment
          notes
          intensity
          pain
        }
        BODYWEIGHTTRAINING {
          exerciseName
          intensity
          pain
          notes
          description
        }
        YOGA {
          exerciseName
          sets
          reps
          notes
          intensity
          pain
          equipments
        }
      }
      conditions {
        before
        during
        after
      }
      intensity
      pain
      weather
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWorkoutRecord = /* GraphQL */ `
  subscription OnDeleteWorkoutRecord(
    $filter: ModelSubscriptionWorkoutRecordFilterInput
  ) {
    onDeleteWorkoutRecord(filter: $filter) {
      id
      date
      workout {
        CROSSFIT {
          exerciseName
          description
          score
          intensity
          pain
          notes
        }
        BODYBUILDING {
          load
          sets
          reps
          intensity
          pain
          notes
        }
        RUNNING {
          exerciseName
          description
          distance
          duration
          intensit
          pain
          notes
        }
        CYCLING {
          exerciseName
          description
          distance
          duration
          intensity
          pain
          notes
        }
        WEIGHTLIFTING {
          load
          sets
          reps
          intensity
          pain
          notes
        }
        PILATES {
          exerciseName
          sets
          reps
          equipment
          notes
        }
        GYMNASTICS {
          exerciseName
          sets
          reps
          equipment
          notes
          intensity
          pain
        }
        BODYWEIGHTTRAINING {
          exerciseName
          intensity
          pain
          notes
          description
        }
        YOGA {
          exerciseName
          sets
          reps
          notes
          intensity
          pain
          equipments
        }
      }
      conditions {
        before
        during
        after
      }
      intensity
      pain
      weather
      createdAt
      updatedAt
    }
  }
`;
