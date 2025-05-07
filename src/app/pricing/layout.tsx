import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description:
    "Choose a plan that fits your needs. Transparent pricing for web development, mobile apps, AI integration, and more with Avidion.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
