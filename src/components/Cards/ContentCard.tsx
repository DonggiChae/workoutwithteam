import React from "react";
import Image from "next/image";
import Tricep from "../../assets/images/tricep.jpeg";
import TextTruncate from "../primitives/TextTruncate";

export default function ContentCard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={Tricep}
        width={450}
        height={450}
        alt="content main image"
        priority={false}
      />
      <div>
        <div>
          <h1>Tricep Exercises</h1>
          <TextTruncate
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
            maxLength={20}
          />
        </div>
      </div>
    </div>
  );
}
