"use client";

import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import type { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  handleTeamToggle,
  handlePersonalToggle,
} from "@/redux/features/toggleReducer";

import TeamDropDown from "./TeamDropDown";
import PersonalDropDown from "./PersonalDropDown";

//aws
import { Amplify, Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../../aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

const NavBar = () => {
  const dispatch = useDispatch();

  const CloseDropDown = () => {
    dispatch(handleTeamToggle(false));
    dispatch(handlePersonalToggle(false));
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  //TODO auth type 만들거나 찾아보기
  const [authenticated, setAuthenticated] = useState<any>(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    CloseDropDown();
    Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then((result) => {
        setAuthenticated(result);
      })
      .catch((err) => console.log(err));
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-white px-4 py-2 md:px-1 md:py-1">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            <Link
              href="/"
              className="font-bold text-gray-500 hover:text-gray-900"
            >
              Logo
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden md:block">
            <Link
              href="/"
              className="ml-4 font-bold text-gray-500 hover:text-gray-900"
            >
              Home
            </Link>
            <TeamDropDown />
            <PersonalDropDown />
          </div>
        </div>
        <div className="flex items-center">
          <div className="ml-4 hidden  md:block">
            <div className="font-bold text-gray-500 hover:text-gray-900">
              {authenticated ? authenticated.attributes.email : "Sign up/Login"}
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="absolute right-0 top-16 w-48 border border-gray-300 bg-white py-2 shadow-md">
            <div className="px-4 py-2">
              <Link
                href="/"
                className="block text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
              <TeamDropDown />
              <PersonalDropDown />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
