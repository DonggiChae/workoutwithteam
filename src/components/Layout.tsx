import React from "react";
import NavBar from "./NavBar/NavBar";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
    </>
  );
}
