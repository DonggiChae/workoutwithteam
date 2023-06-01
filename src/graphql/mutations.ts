/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserInfo = /* GraphQL */ `
  mutation CreateUserInfo(
    $input: CreateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    createUserInfo(input: $input, condition: $condition) {
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
export const updateUserInfo = /* GraphQL */ `
  mutation UpdateUserInfo(
    $input: UpdateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    updateUserInfo(input: $input, condition: $condition) {
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
export const deleteUserInfo = /* GraphQL */ `
  mutation DeleteUserInfo(
    $input: DeleteUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    deleteUserInfo(input: $input, condition: $condition) {
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
export const createWorkoutTeam = /* GraphQL */ `
  mutation CreateWorkoutTeam(
    $input: CreateWorkoutTeamInput!
    $condition: ModelWorkoutTeamConditionInput
  ) {
    createWorkoutTeam(input: $input, condition: $condition) {
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
export const updateWorkoutTeam = /* GraphQL */ `
  mutation UpdateWorkoutTeam(
    $input: UpdateWorkoutTeamInput!
    $condition: ModelWorkoutTeamConditionInput
  ) {
    updateWorkoutTeam(input: $input, condition: $condition) {
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
export const deleteWorkoutTeam = /* GraphQL */ `
  mutation DeleteWorkoutTeam(
    $input: DeleteWorkoutTeamInput!
    $condition: ModelWorkoutTeamConditionInput
  ) {
    deleteWorkoutTeam(input: $input, condition: $condition) {
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
export const createWorkoutRecord = /* GraphQL */ `
  mutation CreateWorkoutRecord(
    $input: CreateWorkoutRecordInput!
    $condition: ModelWorkoutRecordConditionInput
  ) {
    createWorkoutRecord(input: $input, condition: $condition) {
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
export const updateWorkoutRecord = /* GraphQL */ `
  mutation UpdateWorkoutRecord(
    $input: UpdateWorkoutRecordInput!
    $condition: ModelWorkoutRecordConditionInput
  ) {
    updateWorkoutRecord(input: $input, condition: $condition) {
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
export const deleteWorkoutRecord = /* GraphQL */ `
  mutation DeleteWorkoutRecord(
    $input: DeleteWorkoutRecordInput!
    $condition: ModelWorkoutRecordConditionInput
  ) {
    deleteWorkoutRecord(input: $input, condition: $condition) {
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
