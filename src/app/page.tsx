"use client";
import Main from "@/components/main/Main";

import { Amplify } from "aws-amplify";
import awsExports from "@/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

export default function Page() {
  return (
    <div>
      <Main />
    </div>
  );
}
