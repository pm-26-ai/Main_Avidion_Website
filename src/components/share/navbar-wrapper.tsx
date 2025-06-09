"use client";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../share/navbar"), {
  ssr: false,
});
export default function NavbarWrapper() {
  return (
    <>
      <Navbar />
    </>
  );
}
