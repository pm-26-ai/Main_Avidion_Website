import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities at Avidion. Join a team of innovators building cutting-edge web, mobile, and AI solutions. Discover roles that match your passion and skills.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <><div className="font-inter">{children}</div></>;
}
