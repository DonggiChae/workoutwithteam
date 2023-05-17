import { Metadata } from "next";
import { Providers } from "@/redux/provider";
import NavBar from "@/components/NavBar/NavBar";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "Workout with Team",
  description:
    "A community for fitness enthusiasts to share their experiences and learn from others.",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
