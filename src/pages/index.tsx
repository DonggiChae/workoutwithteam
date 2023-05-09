import React from "react";
import Head from "next/head";
import Main from "@/components/main/Main";

export default function index() {
  return (
    <div>
      <Head>
        <title>Workout Community</title>
        <meta
          name="description"
          content="A community for fitness enthusiasts to share their experiences and learn from others."
        />
      </Head>
      <Main />
    </div>
  );
}
