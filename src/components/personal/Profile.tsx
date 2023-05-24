"use client";

import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";

function Profile() {
  // const [user, setUser] = useState<any>(null);
  // useEffect(() => {
  // Accessing the user session on the client
  //   Auth.currentAuthenticatedUser()
  //     .then((user) => {
  //       console.log("User: ", user);
  //       setUser(user);
  //     })
  //     .catch((err) => setUser(null));
  // }, []);
  // return (
  //   <div>
  //     {user && <h1>Welcome, {user.username}</h1>}

  //   </div>
  // );
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user && user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default Profile;
