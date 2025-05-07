import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: {
    template:
      "%s | Avidion | Premium AI Software, Web & App Development Company",
    default: "Avidion | Premium AI Software, Web & App Development Company",
  },
  description:
    "Avidion is a cutting-edge software development company in India. We craft AI-powered websites, mobile apps, and custom CRM, ERP & SaaS solutions with 3D, animation, and cloud integration.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <main>{children}</main>
        <Toaster />
        </body>
    </html>
  );
}
