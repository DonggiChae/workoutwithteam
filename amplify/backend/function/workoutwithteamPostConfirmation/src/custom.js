/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const { PutCommand } = require("@aws-sdk/lib-dynamodb");
const { ddbDocClient } = require("./ddbDocClient");

exports.handler = async (event, context) => {
  let date = new Date();

  let params = {
    TableName: process.env.USERINFOTABLE,
    /*
            Convert the key JavaScript object you are adding to the
            required Amazon DynamoDB record. The format of values specifies
            the datatype. The following list demonstrates different
            datatype formatting requirements:
            String: "String",
            NumAttribute: 1,
            BoolAttribute: true,
            ListAttribute: [1, "two", false],
            MapAttribute: { foo: "bar" },
            NullAttribute: null
             */
    Item: {
      id: event.request.userAttributes.sub,
      sub: event.request.userAttributes.sub,
      familyName: event.request.userAttributes.family_name,
      givenName: event.request.userAttributes.given_name,
      email: event.request.userAttributes.email,
      phoneNumber: event.request.userAttributes.phone_number,
      birthday: event.request.userAttributes.birthdate,
      createdAt: date.toISOString(),
      updatedAt: date.toISOString(),
    },
  };
  try {
    const data = await ddbDocClient.send(new PutCommand(params));
    console.log("Success - item added or updated", data);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
