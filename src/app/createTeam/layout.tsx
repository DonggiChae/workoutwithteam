"use client";

import React from "react";
import MainTeamSideBar from "@/components/sideBars/MainTeamSideBar";

import { Amplify, Auth } from "aws-amplify";
import awsExports from "../../aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure({ ...awsExports, ssr: true });

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Authenticator>
      <div className="fixed z-40 pt-12">
        <MainTeamSideBar />
      </div>
      <div className="h-screen w-screen bg-zinc-100 pt-14">{children}</div>
    </Authenticator>
  );
}
