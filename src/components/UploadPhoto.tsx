"use client";

import React, { useState } from "react";
import { Storage } from "aws-amplify";

const UploadPhoto: React.FC = () => {
  const [photo, setPhoto] = useState<File | null>(null);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setPhoto(file);
    }
  };

  const handleUploadPhoto = async () => {
    if (photo) {
      try {
        await Storage.put(photo.name, photo, {
          contentType: photo.type,
        });
        // 사진 업로드 성공 처리
      } catch (error) {
        // 에러 처리
      }
    }
  };

  return (
    <div className="flex flex-row items-center  justify-between">
      <input type="file" accept="image/*" onChange={handlePhotoChange} />
      <button
        onClick={handleUploadPhoto}
        className="rounded bg-slate-300 px-1 py-1 text-white hover:bg-slate-400"
      >
        사진 업로드
      </button>
    </div>
  );
};

export default UploadPhoto;
