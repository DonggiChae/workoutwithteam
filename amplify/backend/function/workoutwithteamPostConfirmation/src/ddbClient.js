// Create service client module using ES6 syntax.
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
// Set the AWS Region.
let REGION = process.env.REGION; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({ region: REGION });
module.exports = { ddbClient };
