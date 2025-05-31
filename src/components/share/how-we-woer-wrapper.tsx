"use client";
import dynamic from "next/dynamic";

// Dynamically import with SSR disabled
const HowWeWork = dynamic(() => import("../share/how-we-work"), {
  ssr: false,
});

export default function HowWeWorkWrapper() {
  return <HowWeWork />;
}