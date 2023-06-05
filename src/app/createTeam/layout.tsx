"use client";

import React from "react";
import MainTeamSideBar from "@/components/sideBars/MainTeamSideBar";

import { Amplify, Auth } from "aws-amplify";
import awsExports from "../../aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure({ ...awsExports, ssr: true });

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed z-40 pt-12">
      <MainTeamSideBar />
    </div>
  );
}

export default withAuthenticator(layout);
