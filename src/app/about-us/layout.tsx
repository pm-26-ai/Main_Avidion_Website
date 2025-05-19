import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Avidion – our mission, vision, and expert team delivering top-tier AI, web, and mobile app solutions worldwide.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="font-inter">{children}</div>
    </>
  );
}
