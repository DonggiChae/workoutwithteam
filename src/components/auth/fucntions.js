import { Auth, Hub } from "aws-amplify";

export function listenToAutoSignInEvent() {
  Hub.listen("auth", ({ payload }) => {
    const { event } = payload;
    if (event === "autoSignIn") {
      const user = payload.data;
      // assign user
    } else if (event === "autoSignIn_failure") {
      // redirect to sign in page
    }
  });
}

export async function signUp() {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email, // optional
        phone_number, // optional - E.164 number convention
        // other custom attributes
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    });
    console.log(user);
  } catch (error) {
    console.log("error signing up:", error);
  }
}

export async function resendConfirmationCode() {
  try {
    await Auth.resendSignUp(username);
    console.log("code resent successfully");
  } catch (err) {
    console.log("error resending code: ", err);
  }
}

export async function confirmSignUp() {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    console.log("error confirming sign up", error);
  }
}

export async function signIn() {
  try {
    const user = await Auth.signIn(username, password);
  } catch (error) {
    console.log("error signing in", error);
  }
}

export async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
}
