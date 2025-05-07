import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Avidion's full-service offering: AI development, mobile & web apps, CRM/ERP, SaaS, 3D experiences, cloud integration, and more.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
