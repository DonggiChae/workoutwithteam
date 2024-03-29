"use client";

import React from "react";
import PersonalSideBar from "@/components/sideBars/PersonalSideBar";
import Profile from "@/components/personal/Profile";

import { Amplify, Auth } from "aws-amplify";
import awsExports from "../../aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure({ ...awsExports, ssr: true });

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row pt-14">
      <div className="fixed z-40 ">
        <PersonalSideBar />
      </div>
      <div className="w-screen bg-zinc-100 pl-80 ">{children}</div>
    </div>
  );
}

export default withAuthenticator(layout);
