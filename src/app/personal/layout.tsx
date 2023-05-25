"use client";

import React from "react";
import PersonalSideBar from "@/components/sideBars/PersonalSideBar";
import Profile from "@/components/personal/Profile";

import { Amplify, withSSRContext } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "../../aws-exports";

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
