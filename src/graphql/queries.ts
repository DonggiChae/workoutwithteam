/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserInfo = /* GraphQL */ `
  query GetUserInfo($id: ID!) {
    getUserInfo(id: $id) {
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
export const listUserInfos = /* GraphQL */ `
  query ListUserInfos(
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getWorkoutTeam = /* GraphQL */ `
  query GetWorkoutTeam($id: ID!) {
    getWorkoutTeam(id: $id) {
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
export const listWorkoutTeams = /* GraphQL */ `
  query ListWorkoutTeams(
    $filter: ModelWorkoutTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkoutTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamName
        description
        sports
        numberOfMembers
        WorkoutRecord {
          id
          date
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
      nextToken
    }
  }
`;
export const getWorkoutRecord = /* GraphQL */ `
  query GetWorkoutRecord($id: ID!) {
    getWorkoutRecord(id: $id) {
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
export const listWorkoutRecords = /* GraphQL */ `
  query ListWorkoutRecords(
    $filter: ModelWorkoutRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkoutRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
