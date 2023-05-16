import React, { useState, Fragment } from "react";
import Link from "next/link";

import TeamDropDown from "./TeamDropDown";
import PersonalDropDown from "./PersonalDropDown";

const NavBar = () => {
  return (
    <div className=" flex h-14 w-full items-center justify-center bg-white px-1 py-2">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 ">
        <div className="flex">
          <div className="ml-5 flex items-center justify-center gap-0.5 self-stretch">
            <Link
              href="/"
              className="px-4 py-2 font-bold text-gray-500 hover:text-gray-900"
            >
              Logo
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="px-4 py-2 font-bold text-gray-500 hover:text-gray-900"
            >
              Home
            </Link>
            <TeamDropDown />
            <PersonalDropDown />
          </div>
        </div>
        <div className="flex items-center justify-end gap-1">
          <div className="px-4 py-2 font-bold text-gray-500 hover:text-gray-900">
            profile
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
