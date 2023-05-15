import { Metadata } from "next";
import Main from "@/components/main/Main";

export const metadata: Metadata = {
  title: "My Page Title",
};

export default function Page() {
  return (
    <div>
      <Main />
    </div>
  );
}
