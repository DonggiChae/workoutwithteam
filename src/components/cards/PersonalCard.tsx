import Image from "next/image";
import TeamImage from "@/assets/images/Run.jpeg";
import PeopleIcon from "@/assets/icons/people-empty.svg";
import DotMenuIcon from "@/assets/icons/dot-menu-more.svg";
// import HeartIcon from "@/assets/icons/heart-empty.svg";
// import ShareIcon from "@/assets/icons/share1.svg";

//aws
import { Amplify, Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "../../aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

export default function PersonalCard() {
  return (
    <div className="relative flex h-36 w-80 flex-col items-start justify-center gap-3 bg-white p-10">
      <div className="flex w-80 flex-row items-center gap-4 pr-8">
        <div className="rounded-full bg-center p-0">
          <Image
            width={80}
            height={80}
            src={TeamImage}
            alt="Team Image"
            priority={false}
            quality={50}
            className="h-20 max-w-none rounded-full bg-cover"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-4 p-0">
          <div className="flex flex-row items-center gap-16">
            <div>
              <div className="text-lg font-medium text-gray-900">Name</div>
            </div>
            <div className="flex-grow">
              <button
                className="x flex flex-row items-center  justify-center rounded bg-slate-300 px-1 py-1 text-xs text-white hover:bg-slate-400"
                onClick={() => Auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
          <p className="text-base text-gray-900">ID#12341234</p>
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
        {/* <div className="flex flex-row items-center gap-3">
          <Image
            width={24}
            height={24}
            src={HeartIcon}
            alt="How many people like this group?"
          />
          <p className="text-base text-gray-900"> 99</p>
        </div>
        <Image width={24} height={24} src={ShareIcon} alt="Share Icon" /> */}
      </div>
    </div>
  );
}
