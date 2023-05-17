import Image from "next/image";
import TeamImage from "@/assets/images/Run.jpeg";
import PeopleIcon from "@/assets/icons/people-empty.svg";
import HeartIcon from "@/assets/icons/heart-empty.svg";
import DotMenuIcon from "@/assets/icons/dot-menu-more.svg";
import ShareIcon from "@/assets/icons/share1.svg";

export default function TeamPageCard() {
  return (
    <div className="relative flex h-36 w-96 flex-col items-start justify-center gap-3 bg-white p-10">
      <div className="flex w-80 flex-row items-center gap-4 pr-8">
        <div className="rounded-full bg-center p-0">
          <Image
            width={80}
            height={80}
            src={TeamImage}
            alt="Team Image"
            className="h-20 max-w-none rounded-full bg-cover"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-4 p-0">
          <div className="flex flex-row items-center gap-16">
            <div>
              <div className="text-lg font-medium text-gray-900">Team Name</div>
            </div>
            <div className="flex-grow">
              <Image width={24} height={24} src={DotMenuIcon} alt="More menu" />
            </div>
          </div>
          <p className="text-base text-gray-900">Description</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-10 pr-10">
        <div className="flex flex-row items-center gap-3">
          <Image
            width={22}
            height={22}
            src={PeopleIcon}
            alt="How many people in this group?"
          />
          <p className="text-base text-gray-900"> 99</p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Image
            width={24}
            height={24}
            src={HeartIcon}
            alt="How many people like this group?"
          />
          <p className="text-base text-gray-900"> 99</p>
        </div>
        <Image width={24} height={24} src={ShareIcon} alt="Share Icon" />
      </div>
    </div>
  );
}
