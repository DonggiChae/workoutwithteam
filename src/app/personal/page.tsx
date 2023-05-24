"use client";

import PersonalMain from "@/components/personal/PersonalMain";
import { Amplify, withSSRContext } from "aws-amplify";
import { headers } from "next/headers";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "../../aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

function Page() {
  // const req = {
  //   headers: {
  //     cookie: headers().get("cookie"),
  //   },
  // };

  // const SSR = withSSRContext({ req });
  return (
    <div className="flex h-full w-full  items-center justify-center">
      <PersonalMain />
    </div>
  );
}

export default withAuthenticator(Page);
