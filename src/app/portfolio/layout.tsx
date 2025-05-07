import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See Avidion’s portfolio of successful AI-powered apps, websites, CRMs, and SaaS platforms across various industries.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
