import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
export default function Navbar() {
  const navItems = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Services",
      url: "/services",
    },
    {
      id: 3,
      name: "About Us",
      url: "/about-us",
    },
    {
      id: 4,
      name: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 5,
      name: "Career",
      url: "/careers",
    },
    {
      id: 6,
      name: "Blogs",
      url: "/blogs",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between rounded-[60px] border border-white/15 bg-[rgba(45,45,45,0.27)] px-[173px] py-2 backdrop-blur-[22.8px]">
        {/* avidion logo */}
        <div className="flex items-center gap-[10.87px]">
          <div className="relative size-[40px]">
            <Image src={"/avidion-logo.png"} alt="avidion-logo" fill />
          </div>
          <div className="font-inter bg-[linear-gradient(57deg,_#6748CD_11.25%,_#972BC7_34.88%,_#B33691_66.88%,_#4D1263_95.25%)] bg-clip-text text-2xl font-bold -tracking-[0.6px] text-transparent">
            Avidion
          </div>
        </div>

        <div className="flex items-center gap-[30px]">
          <div className="flex items-center gap-[30px]">
            {navItems.map((item) => (
              <>
                <Link
                  href={item.url}
                  key={item.id}
                  className="font-inter text-[13px] leading-[26px] font-normal -tracking-[0.001px] text-[rgba(255,255,255,0.60)]"
                >
                  {item.name}
                </Link>
              </>
            ))}
          </div>

          {/* Contact Button */}
          <div className="rounded-[12px] border border-[#EB88D6] p-1.5 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
            <div className="font-inter rounded-[8px] border-white/15 bg-[linear-gradient(90deg,_rgba(157,46,135,0.4)_0%,_rgba(84,41,153,0.4)_100%)] px-[15px] py-1 text-sm text-white inset-shadow-[0_0px_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
