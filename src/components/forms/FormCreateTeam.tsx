"use client";

import React, { useState } from "react";
import Button from "../buttons/Button";

export default function FormCreateTeam() {
  const [teamName, setTeamName] = useState("");
  const [sport, setSport] = useState("");
  const [location, setLocation] = useState("");
  const [teamPhoto, setTeamPhoto] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 데이터를 처리하는 로직을 추가합니다.
    console.log({
      teamName,
      sport,
      location,
      teamPhoto,
      teamDescription,
      hashtag,
      isPublic,
    });

    setTeamName("");
    setSport("");
    setLocation("");
    setTeamPhoto("");
    setTeamDescription("");
    setHashtag("");
    setIsPublic(true);
  };
  return (
    <div className="container mt-8 bg-white px-4 py-8 md:max-w-screen-md">
      <div className="text-2xl font-bold">Create a Team </div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="flex w-full flex-col gap-2 py-2">
            <label htmlFor="teamName" className="font-bold">
              Team Name
            </label>
            <input
              id="teamName"
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="border"
            />
          </div>
          <div className="flex w-full flex-col gap-2 py-2">
            <label htmlFor="sport" className="font-bold">
              Sport
            </label>
            <input
              id="sport"
              type="text"
              value={sport}
              onChange={(e) => setSport(e.target.value)}
              className="border"
            />
          </div>
          <div className="flex w-full flex-col gap-2 py-2">
            <label htmlFor="location">Team Location</label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border"
            />
          </div>
          <div className="flex w-full flex-col gap-2 py-2">
            <label htmlFor="teamPhoto">Team Photo</label>
            <input
              id="teamPhoto"
              type="text"
              value={teamPhoto}
              onChange={(e) => setTeamPhoto(e.target.value)}
              className="border"
            />
          </div>
          <div className="flex w-full flex-col gap-2 py-2">
            <label htmlFor="teamDescription">Description</label>
            <textarea
              id="teamDescription"
              value={teamDescription}
              onChange={(e) => setTeamDescription(e.target.value)}
              className="resize-none border"
              maxLength={500}
              rows={5}
            />
          </div>
          <div className="flex w-full flex-col gap-2 py-2">
            <label htmlFor="hashtag">Hashtag for team</label>
            <input
              id="hashtag"
              type="text"
              value={hashtag}
              onChange={(e) => setHashtag(e.target.value)}
              className="border"
            />
          </div>
          <div className="flex w-full flex-col gap-2 py-2">
            <label htmlFor="isPublic">Public or Private</label>
            <select
              id="isPublic"
              value={isPublic ? "public" : "private"}
              onChange={(e) => setIsPublic(e.target.value === "public")}
              className="border"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
          <div className="py-4">
            <Button
              type="submit"
              disabled={
                !teamName ||
                !sport ||
                !location ||
                !teamPhoto ||
                !teamDescription ||
                !hashtag
              }
            >
              Create a Team
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
