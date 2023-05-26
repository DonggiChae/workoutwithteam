"use client";

import MyTeamList from "@/components/team/MyTeamList";
import MainTeamSideBar from "@/components/sideBars/MainTeamSideBar";

import { Amplify, Auth } from "aws-amplify";
import awsExports from "../../../aws-exports";
import { Authenticator, View, useAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure({ ...awsExports, ssr: true });

export default function page() {
  return (
    <Authenticator>
      <div className="fixed z-40 pt-14"></div>
      <div className="flex flex-col items-center justify-center pl-80 pt-14">
        <MyTeamList />
      </div>
    </Authenticator>
  );
}
