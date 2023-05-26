"use client";

import React, { useState } from "react";
import Button from "../buttons/Button";

import { Storage } from "aws-amplify";

export default function FormCreateTeam() {
  const [teamName, setTeamName] = useState("");
  const [sport, setSport] = useState("");
  const [location, setLocation] = useState("");
  const [teamPhoto, setTeamPhoto] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const uploadPhoto = async (file: File) => {
    try {
      const filename = `${Date.now()}_${file.name}`;
      const result = await Storage.put(filename, file, {
        contentType: file.type,
      });
      setTeamPhoto(result.key);
    } catch (error) {
      console.error("Error uploading photo: ", error);
    }
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      handlePhotoUpload(file);
    }
  };

  const resizeImage = async (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_SIZE = 1080;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_SIZE) {
            height *= MAX_SIZE / width;
            width = MAX_SIZE;
          }
        } else {
          if (height > MAX_SIZE) {
            width *= MAX_SIZE / height;
            height = MAX_SIZE;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, width, height);
        canvas.toBlob((blob) => {
          if (blob) {
            const resizedFile = new File([blob], file.name, {
              type: file.type,
              lastModified: Date.now(),
            });
            resolve(resizedFile);
          } else {
            reject(new Error("Failed to resize image."));
          }
        }, file.type);
      };
      img.onerror = () => {
        reject(new Error("Failed to load image dimensions."));
      };
      img.src = URL.createObjectURL(file);
    });
  };

  const getImageDimensions = (
    file: File
  ): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = () => {
        reject(new Error("Failed to load image dimensions."));
      };
      img.src = URL.createObjectURL(file);
    });
  };

  const handlePhotoUpload = async (file: File) => {
    try {
      const { width, height } = await getImageDimensions(file);

      // 사진 크기가 1080 x 1080 이하이거나 이미 1:1 비율인 경우
      if (width <= 1080 && height <= 1080 && width === height) {
        uploadPhoto(file);
      } else {
        // 사진 크기가 클 경우 리사이징하여 업로드
        const resizedFile = await resizeImage(file);
        uploadPhoto(resizedFile);
      }
    } catch (error) {
      console.error("Error uploading photo: ", error);
    }
  };

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
              type="file"
              onChange={handlePhotoChange}
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
