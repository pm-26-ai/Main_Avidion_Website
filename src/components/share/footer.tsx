import { FaWhatsapp } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaLinkedinIn,
  FaInstagram,
  FaThreads,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
const navigationLinks = [
  {
    id: 1,
    name: "Home",
    redirectUrl: "/",
  },
  {
    id: 1,
    name: "About",
    redirectUrl: "/about-us",
  },
  {
    id: 1,
    name: "Services",
    redirectUrl: "/services",
  },
  {
    id: 1,
    name: "Careers",
    redirectUrl: "/careers",
  },
];

const servicesLinks = [
  {
    id: 1,
    name: "Website Development",
  },
  {
    id: 2,
    name: "Mobile Apps",
  },
  {
    id: 3,
    name: "Custom Software",
  },
  {
    id: 4,
    name: "AI Integration",
  },
];

const socialIcons = [
  {
    id: 1,
    icon: <FaLinkedinIn />,
    redirectUrl: "https://www.linkedin.com/company/avidion",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    redirectUrl: "https://www.instagram.com/avidion.ai/",
  },
  {
    id: 3,
    icon: <FaThreads />,
    redirectUrl: "https://www.threads.com/@avidion.ai",
  },
  {
    id: 4,
    icon: <FaFacebookF />,
    redirectUrl: "https://www.facebook.com/avidionai",
  },
  {
    id: 5,
    icon: <FaXTwitter />,
    redirectUrl: "https://x.com/Avidionai",
  },
  {
    id: 6,
    icon: <FaYoutube />,
    redirectUrl: "https://www.youtube.com/@Avidion",
  },
];

const Footer = () => {
  return (
    <>
      <div className="container flex max-w-full flex-col items-start justify-between gap-[48px] py-[89px] font-inter md:flex-row">
        <div className="flex basis-full flex-col gap-8 md:basis-[40%] xl:basis-[30%]">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-2 md:gap-2.5 xl:gap-[15px]">
              <div className="relative size-[30px] md:size-[40px]">
                <Image
                  src={"/avidion-logo.png"}
                  alt="avidion-logo"
                  fill
                  priority
                />
              </div>
              <div className="bg-[linear-gradient(57deg,_#6748CD_11.25%,_#972BC7_34.88%,_#B33691_66.88%,_#4D1263_95.25%)] bg-clip-text font-inter text-lg font-bold leading-[24px] -tracking-[0.6px] text-transparent xl:text-2xl">
                Avidion
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2.5">
                <div className="size-[16.7px] text-white">
                  <FaWhatsapp />
                </div>
                <a
                  href="mailto:info@avidion.ai"
                  className="text-xs font-normal text-[rgba(255,255,255,0.70)]"
                >
                  info@avidion.ai
                </a>
              </div>

              <div className="flex flex-row gap-2.5">
                <div className="size-[16.7px] text-white">
                  <MdOutlineEmail />
                </div>
                <a
                  href="tel:+919896584099"
                  className="text-xs font-normal text-[rgba(255,255,255,0.70)]"
                >
                  +91 9896584099
                </a>
              </div>

              <div className="flex flex-row gap-2.5">
                <div className="size-[16.7px] text-white">
                  <FiMapPin />
                </div>
                <a
                  href="https://www.google.com/maps/dir/28.5631265,77.1160615/676,+Sector+42+Main+Rd,+Sector+42,+Gurugram,+Haryana+122011/@28.4631195,77.0192445,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x82ee875e4d6f150d:0xcb5e22ed11de5002!2m2!1d77.1016459!2d28.4631443?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                  className="text-xs font-normal text-[rgba(255,255,255,0.70)]"
                >
                  676, Sector-42, Gurugram, Haryana, India
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-start gap-4 xl:hidden">
            {socialIcons.map((icon) => (
              <Link
                href={icon.redirectUrl}
                key={icon.id}
                className="rounded-md bg-[#676768] p-[6px]"
              >
                <div className="flex size-[19.5px] items-center justify-center text-black">
                  {icon.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex basis-full flex-row gap-20 md:basis-[50%] md:justify-between lg:basis-[40%] xl:basis-[63%]">
          {/* navigation links */}
          <div className="flex flex-col justify-start gap-[18px] text-[13px] leading-[26px]">
            <div className="font-medium text-white">Navigation</div>
            {navigationLinks.map((link) => (
              <>
                <Link
                  href={link.redirectUrl}
                  className="flex flex-col gap-4 font-normal text-[rgba(255,255,255,0.50)] transition-all duration-300 ease-in-out hover:font-medium hover:text-white"
                  key={link.id}
                >
                  {link.name}
                </Link>
              </>
            ))}
          </div>

          {/* services */}
          <div className="flex flex-col justify-start gap-[18px] text-[13px] leading-[26px]">
            <div className="font-medium text-white">Services</div>
            {servicesLinks.map((link) => (
              <>
                <div
                  className="flex flex-col gap-4 font-normal text-[rgba(255,255,255,0.50)] transition-all duration-300 ease-in-out hover:font-medium hover:text-white"
                  key={link.id}
                >
                  {link.name}
                </div>
              </>
            ))}
          </div>

          {/* social icons */}
          <div className="hidden flex-row items-start gap-4 xl:flex">
            {socialIcons.map((icon) => (
              <Link
                href={icon.redirectUrl}
                key={icon.id}
                className="rounded-md bg-[#676768] p-[6px] transition-all duration-300 ease-in-out hover:bg-white/65"
              >
                <div className="flex size-[19.5px] items-center justify-center text-black">
                  {icon.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: 'url("/footer-bg.png")',
          backgroundPosition: "center",
        }}
        className="border-t border-t-white/15 bg-gradient-to-r from-[#020103] from-20% via-black via-20% to-[#622A9A] to-90% py-9 text-center text-xs font-normal text-[#9CA3AF] md:text-base"
      >
        {" "}
        @2025 Avidion. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
