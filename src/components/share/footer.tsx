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
const navigationLinks = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 1,
    name: "About",
  },
  {
    id: 1,
    name: "Services",
  },
  {
    id: 1,
    name: "Contact Us",
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
  },
  {
    id: 2,
    icon: <FaInstagram />,
  },
  {
    id: 3,
    icon: <FaThreads />,
  },
  {
    id: 4,
    icon: <FaFacebookF />,
  },
  {
    id: 5,
    icon: <FaXTwitter />,
  },
  {
    id: 6,
    icon: <FaYoutube />,
  },
];

const generalInfo = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    value: "info@avidion.ai",
  },
  {
    id: 2,
    icon: <FaWhatsapp />,
    value: "+91 9896584099",
  },
  {
    id: 3,
    icon: <FiMapPin />,
    value: "676, Sector-42, Gurugram, Haryana, India",
  },
];

const Footer = () => {
  return (
    <>
      <div className="container flex flex-col gap-[48px] max-w-full md:flex-row items-start justify-between py-[89px] font-inter">
        <div className="flex basis-full md:basis-[40%] flex-col gap-8 xl:basis-[30%]">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-2 md:gap-2.5 xl:gap-[15px]">
              <div className="relative size-[30px] md:size-[40px]">
                <Image src={"/avidion-logo.png"} alt="avidion-logo" fill />
              </div>
              <div className="bg-[linear-gradient(57deg,_#6748CD_11.25%,_#972BC7_34.88%,_#B33691_66.88%,_#4D1263_95.25%)] bg-clip-text font-inter text-lg font-bold leading-[24px] -tracking-[0.6px] text-transparent xl:text-2xl">
                Avidion
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {generalInfo.map((info) => (
                <div key={info.id} className="flex flex-row gap-2.5">
                  <div className="size-[16.7px] text-white">{info.icon}</div>
                  <div className="text-xs font-normal text-[rgba(255,255,255,0.70)]">
                    {info.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-row items-start gap-4 flex xl:hidden">
            {socialIcons.map((icon) => (
              <div key={icon.id} className="rounded-md bg-[#676768] p-[6px]">
                <div className="flex size-[19.5px] items-center justify-center text-black">
                  {icon.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex basis-full md:basis-[50%] flex-row gap-20 md:justify-between lg:basis-[40%] xl:basis-[63%]">
          {/* navigation links */}
          <div className="flex flex-col justify-start gap-[18px] text-[13px] leading-[26px]">
            <div className="font-medium text-white">Navigation</div>
            {navigationLinks.map((link) => (
              <>
                <div
                  className="flex flex-col gap-4 font-normal text-[rgba(255,255,255,0.50)]"
                  key={link.id}
                >
                  {link.name}
                </div>
              </>
            ))}
          </div>

          {/* services */}
          <div className="flex flex-col justify-start gap-[18px] text-[13px] leading-[26px]">
            <div className="font-medium text-white">Services</div>
            {servicesLinks.map((link) => (
              <>
                <div
                  className="flex flex-col gap-4 font-normal text-[rgba(255,255,255,0.50)]"
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
              <div key={icon.id} className="rounded-md bg-[#676768] p-[6px]">
                <div className="flex size-[19.5px] items-center justify-center text-black">
                  {icon.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: 'url("/footer-bg.png")',
          backgroundPosition: "center",
        }}
        className="border-t border-t-white/15 bg-gradient-to-r from-[#020103] from-20% via-black via-20% to-[#622A9A] to-90% py-9 text-center text-base font-normal text-[#9CA3AF]"
      >
        {" "}
        @2025 Avidion. All rights reserved.
      </div>
    </>
  );
};

export default Footer;

// const Footer = () => {
//   return (
//     <footer className="font-inter flex flex-row justify-between gap-10 px-6 py-20 text-white md:px-[118.5px] xl:px-[182.5px] 2xl:px-[422px]">
//       {/* Logo and Contact Info */}
//       <div className="flex w-full flex-col gap-10 md:w-1/3">
//         <div className="flex items-center gap-[15px]">
//           <div className="relative size-[40px]">
//             <Image src="/avidion-logo.png" alt="avidion-logo" fill />
//           </div>
//           <div className="bg-[linear-gradient(57deg,_#6748CD_11.25%,_#972BC7_34.88%,_#B33691_66.88%,_#4D1263_95.25%)] bg-clip-text text-2xl font-bold text-transparent">
//             Avidion
//           </div>
//         </div>

//         <div className="flex flex-col gap-4 text-xs text-[rgba(255,255,255,0.70)]">
//           {generalInfo.map((info) => (
//             <div key={info.id} className="flex items-center gap-2.5">
//               <div className="text-white">{info.icon}</div>
//               <div>{info.value}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation, Services, Socials */}
//       <div className="flex w-full flex-col flex-wrap gap-10 md:flex-row md:justify-between lg:w-[70%]">
//         {/* Navigation */}
//         <div className="flex flex-col gap-4 text-sm">
//           <h3 className="font-medium text-white">Navigation</h3>
//           {navigationLinks.map((link) => (
//             <div
//               key={link.name}
//               className="text-[rgba(255,255,255,0.50)] hover:text-white"
//             >
//               {link.name}
//             </div>
//           ))}
//         </div>

//         {/* Services */}
//         <div className="flex flex-col gap-4 text-sm">
//           <h3 className="font-medium text-white">Services</h3>
//           {servicesLinks.map((link) => (
//             <div
//               key={link.id}
//               className="text-[rgba(255,255,255,0.50)] hover:text-white"
//             >
//               {link.name}
//             </div>
//           ))}
//         </div>

//         {/* Social Icons */}
//         <div className="flex flex-col gap-4">
//           <h3 className="font-medium text-white">Connect</h3>
//           <div className="flex flex-wrap gap-3">
//             {socialIcons.map((icon) => (
//               <div
//                 key={icon.id}
//                 className="rounded bg-[#676768] p-2 transition hover:bg-white hover:text-black"
//               >
//                 <div className="flex size-[20px] items-center justify-center">
//                   {icon.icon}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
