"use client";
import React from "react";
import Link from "next/link";
import type { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  handleTeamToggle,
  handlePersonalToggle,
} from "@/redux/features/toggleReducer";

export default function PersonalDropDown() {
  const teamToggle = useSelector(
    (state: RootState) => state.toggleNavBar.teamToggle
  );
  const personalToggle = useSelector(
    (state: RootState) => state.toggleNavBar.personalToggle
  );
  const dispatch = useDispatch();
  const togglePersonalDropdown = () => {
    dispatch(handlePersonalToggle(!personalToggle));
    if (teamToggle) {
      dispatch(handleTeamToggle(false));
    }
  };
  return (
    <div className="relative z-50 inline-block text-left">
      <button
        onClick={togglePersonalDropdown}
        type="button"
        className="px-4 py-2 font-bold text-gray-500 hover:text-gray-900"
      >
        Personal
      </button>
      {personalToggle && (
        <div className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href="/personal"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Main
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Service 2
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Service 3
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
