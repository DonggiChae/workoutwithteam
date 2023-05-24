export const schema = {
    "models": {
        "WorkoutTeam": {
            "name": "WorkoutTeam",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "teamName": {
                    "name": "teamName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sports": {
                    "name": "sports",
                    "isArray": true,
                    "type": "String",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "numberOfMembers": {
                    "name": "numberOfMembers",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "WorkoutRecord": {
                    "name": "WorkoutRecord",
                    "isArray": false,
                    "type": {
                        "model": "WorkoutRecord"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "workoutTeamWorkoutRecordId"
                        ]
                    }
                },
                "members": {
                    "name": "members",
                    "isArray": false,
                    "type": {
                        "nonModel": "User"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "workoutTeamWorkoutRecordId": {
                    "name": "workoutTeamWorkoutRecordId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "WorkoutTeams",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "WorkoutRecord": {
            "name": "WorkoutRecord",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "workout": {
                    "name": "workout",
                    "isArray": true,
                    "type": {
                        "nonModel": "KindofWorkout"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "conditions": {
                    "name": "conditions",
                    "isArray": false,
                    "type": {
                        "nonModel": "Conditions"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "intensity": {
                    "name": "intensity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pain": {
                    "name": "pain",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "weather": {
                    "name": "weather",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "WorkoutRecords",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {
        "User": {
            "name": "User",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "team": {
                    "name": "team",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "YogaSets": {
            "name": "YogaSets",
            "fields": {
                "exerciseName": {
                    "name": "exerciseName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sets": {
                    "name": "sets",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "reps": {
                    "name": "reps",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "intensity": {
                    "name": "intensity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pain": {
                    "name": "pain",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "equipments": {
                    "name": "equipments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Yoga": {
            "name": "Yoga",
            "fields": {
                "exerciseName": {
                    "name": "exerciseName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "yogaSets": {
                    "name": "yogaSets",
                    "isArray": false,
                    "type": {
                        "nonModel": "YogaSets"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "intensity": {
                    "name": "intensity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pain": {
                    "name": "pain",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "conditions": {
                    "name": "conditions",
                    "isArray": false,
                    "type": {
                        "nonModel": "Conditions"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "BobyweightSets": {
            "name": "BobyweightSets",
            "fields": {
                "exerciseName": {
                    "name": "exerciseName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sets": {
                    "name": "sets",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "reps": {
                    "name": "reps",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "equipment": {
                    "name": "equipment",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "intensity": {
                    "name": "intensity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pain": {
                    "name": "pain",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "BodyweightTraining": {
            "name": "BodyweightTraining",
            "fields": {
                "exerciseName": {
                    "name": "exerciseName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "bodyweightSets": {
                    "name": "bodyweightSets",
                    "isArray": true,
                    "type": {
                        "nonModel": "BobyweightSets"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "intensity": {
                    "name": "intensity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pain": {
                    "name": "pain",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "conditions": {
                    "name": "conditions",
                    "isArray": false,
                    "type": {
                        "nonModel": "Conditions"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "GymnasticSets": {
            "name": "GymnasticSets",
            "fields": {
                "exerciseName": {
                    "name": "exerciseName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sets": {
                    "name": "sets",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "reps": {
                    "name": "reps",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "equipment": {
                    "name": "equipment",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "intensity": {
                    "name": "intensity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pain": {
                    "name": "pain",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Gymnastic": {
            "name": "Gymnastic",
            "fields": {
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "gymnasticSets": {
                    "name": "gymnasticSets",
                    "isArray": true,
                    "type": {
                        "nonModel": "GymnasticSets"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "intensity": {
                    "name": "intensity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pain": {
                    "name": "pain",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "exerciseName": {
                    "name": "exerciseName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "conditions": {
                    "name": "conditions",
                    "isArray": false,
                    "type": {
                        "nonModel": "Conditions"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PilateSets": {
            "name": "PilateSets",
            "fields": {
                "exerciseName": {
                    "name": "exerciseName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sets": {
                    "name": "sets",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "reps": {
                    "name": "reps",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "equipment": {
                    "name": "equipment",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Pilates": {
            "name": "Pilates",
            "fields": {
                "exerciseName": {
                    "name": "exerciseName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pilateSets": {
                    "name": "pilateSets",
                    "isArray": true,
                    "type": {
                        "nonModel": "PilateSets"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "intensity": {
                    "name": "intensity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pain": {
                    "name": "pain",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "conditions": {
                    "name": "conditions",
                    "isArray": false,
                    "type": {
                        "nonModel": "Conditions"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "WeightLiftingSets": {
            "name": "WeightLiftingSets",
            "fields": {
                "load": {
                    "name": "load",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sets": {
                    "name": "sets",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "reps": {
                    "name": "reps",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "intensity": {
                    "name": "intensity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pain": {
                    "name": "pain",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "WeightLifting": {
            "name": "WeightLifting",
            "fields": {
                "exerciseName": {
                    "name": "exerciseName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "weightlift": {
                    "name": "weightlift",
                    "isArray": true,
                    "type": {
                        "nonModel": "WeightLiftingSets"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "intensity": {
                    "name": "intensity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pain": {
                    "name": "pain",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "conditions": {
                    "name": "conditions",
                    "isArray": false,
                    "type": {
                        "nonModel": "Conditions"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Cycling": {
            "name": "Cycling",
            "fields": {
                "exerciseName": {
                    "name": "exerciseName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "distance": {
                    "name": "distance",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "duration": {
                    "name": "duration",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "intensity": {
                    "name": "intensity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pain": {
                    "name": "pain",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "conditions": {
                    "name": "conditions",
                    "isArray": false,
                    "type": {
                        "nonModel": "Conditions"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Running": {
            "name": "Running",
            "fields": {
                "exerciseName": {
                    "name": "exerciseName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "distance": {
                    "name": "distance",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "duration": {
                    "name": "duration",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "intensit": {
                    "name": "intensit",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pain": {
                    "name": "pain",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "conditions": {
                    "name": "conditions",
                    "isArray": false,
                    "type": {
                        "nonModel": "Conditions"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "BodyBuildingSets": {
            "name": "BodyBuildingSets",
            "fields": {
                "load": {
                    "name": "load",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sets": {
                    "name": "sets",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "reps": {
                    "name": "reps",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "intensity": {
                    "name": "intensity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pain": {
                    "name": "pain",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Bodybuilding": {
            "name": "Bodybuilding",
            "fields": {
                "exerciseName": {
                    "name": "exerciseName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "bodybuild": {
                    "name": "bodybuild",
                    "isArray": true,
                    "type": {
                        "nonModel": "BodyBuildingSets"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "intensity": {
                    "name": "intensity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pain": {
                    "name": "pain",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "conditions": {
                    "name": "conditions",
                    "isArray": false,
                    "type": {
                        "nonModel": "Conditions"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Scales": {
            "name": "Scales",
            "fields": {
                "equipment": {
                    "name": "equipment",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "scale": {
                    "name": "scale",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Crossfit": {
            "name": "Crossfit",
            "fields": {
                "exerciseName": {
                    "name": "exerciseName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "scales": {
                    "name": "scales",
                    "isArray": true,
                    "type": {
                        "nonModel": "Scales"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "score": {
                    "name": "score",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "intensity": {
                    "name": "intensity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pain": {
                    "name": "pain",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "conditions": {
                    "name": "conditions",
                    "isArray": false,
                    "type": {
                        "nonModel": "Conditions"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Conditions": {
            "name": "Conditions",
            "fields": {
                "before": {
                    "name": "before",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "during": {
                    "name": "during",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "after": {
                    "name": "after",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "KindofWorkout": {
            "name": "KindofWorkout",
            "fields": {
                "CROSSFIT": {
                    "name": "CROSSFIT",
                    "isArray": false,
                    "type": {
                        "nonModel": "Crossfit"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "BODYBUILDING": {
                    "name": "BODYBUILDING",
                    "isArray": false,
                    "type": {
                        "nonModel": "BodyBuildingSets"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "RUNNING": {
                    "name": "RUNNING",
                    "isArray": false,
                    "type": {
                        "nonModel": "Running"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "CYCLING": {
                    "name": "CYCLING",
                    "isArray": false,
                    "type": {
                        "nonModel": "Cycling"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "WEIGHTLIFTING": {
                    "name": "WEIGHTLIFTING",
                    "isArray": false,
                    "type": {
                        "nonModel": "WeightLiftingSets"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "PILATES": {
                    "name": "PILATES",
                    "isArray": false,
                    "type": {
                        "nonModel": "PilateSets"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "GYMNASTICS": {
                    "name": "GYMNASTICS",
                    "isArray": false,
                    "type": {
                        "nonModel": "GymnasticSets"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "BODYWEIGHTTRAINING": {
                    "name": "BODYWEIGHTTRAINING",
                    "isArray": false,
                    "type": {
                        "nonModel": "BodyweightTraining"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "YOGA": {
                    "name": "YOGA",
                    "isArray": false,
                    "type": {
                        "nonModel": "YogaSets"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.4.3",
    "version": "4aebb68b485bfeaba266086ee043a627"
};