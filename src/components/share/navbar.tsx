"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
      name: "Blogs",
      url: "/blogs",
    },
    {
      id: 6,
      name: "Career",
      url: "/careers",
    },
  ];

  const pathname = usePathname();

  return (
    <>
      <div className="sticky top-6 z-10 mx-auto px-[50px] xl:px-[114px] 2xl:px-[249px]">
        <div className="flex items-center justify-between rounded-[60px] border border-white/15 bg-[rgba(45,45,45,0.27)] py-2 backdrop-blur-[22.8px] lg:px-[68.5px] 2xl:px-[173px]">
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
            <div className="flex items-center gap-5 xl:gap-[30px]">
              {navItems.map((item) => (
                <>
                  <Link href={item.url} className="relative">
                    <span
                      className={`font-inter text-[13px] leading-[26px] font-normal -tracking-[0.001px] ${pathname === item.url ? `bg-[linear-gradient(57deg,_#C0ADFF_11.25%,_#BF5CEA_34.88%,_#DD68BD_66.68%,_#4D1263_95.25%)] bg-clip-text text-transparent underline underline-offset-8` : `text-white`}`}
                    >
                      {item.name}
                    </span>
                    {pathname === item.url && (
                      <span className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-[linear-gradient(57deg,_#C0ADFF_11.25%,_#BF5CEA_34.88%,_#DD68BD_66.68%,_#4D1263_95.25%)]"></span>
                    )}
                  </Link>
                </>
              ))}
            </div>

            {/* Contact Button */}
            <div className="rounded-[12px] border border-[#EB88D6] bg-[rgba(0,0,0,0.16)] p-1.5 backdrop-blur-[94.64px]">
              <div className="font-inter rounded-[8px] border-white/15 bg-[linear-gradient(90deg,_rgba(157,46,135,0.4)_0%,_rgba(84,41,153,0.4)_100%)] px-[15px] py-1 text-sm text-white shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] transition-all duration-700 ease-in-out hover:bg-[linear-gradient(90deg_,rgba(201,104,182,0.40)_0%,_rgba(121,81,186,0.40)_100%)]">
                Contact Us
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
