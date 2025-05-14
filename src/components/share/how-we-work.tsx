"use client";
import { IoSearch } from "react-icons/io5";
import { BiPaint } from "react-icons/bi";
import { LuCodeXml } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa6";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { GoFileCode } from "react-icons/go";
import { MdAppRegistration } from "react-icons/md";
import { useMediaQuery } from "@uidotdev/usehooks";
import { HeadingSection } from "./heading-section";
const data = [
  {
    title: "Discovery",
    description:
      "We begin by understanding your business needs, goals, and the specific challenges you want to address.",
    icon: IoSearch,
  },
  {
    title: "Planning",
    description:
      "Our team creates a detailed roadmap outlining the scope, timeline, resources, and deliverables for your project.",
    icon: MdAppRegistration,
  },
  {
    title: "Design",
    description:
      "We create user-centric designs that align with your brand identity and provide optimal user experience.",
    icon: BiPaint,
  },
  {
    title: "Development",
    description:
      "Our developers build your solution using cutting-edge technologies and best development practices.",
    icon: LuCodeXml,
  },
  {
    title: "Testing",
    description:
      "Rigorous quality assurance ensures your solution works flawlessly across all devices and scenarios.",
    icon: GoFileCode,
  },
  {
    title: "Deployment",
    description:
      "We handle the smooth launch of your solution, ensuring everything runs perfectly in the production environment.",
    icon: HiOutlineRocketLaunch,
  },
  {
    title: "Support & Growth",
    description:
      "Our relationship continues with ongoing maintenance, updates, and strategic growth initiatives.",
    icon: FaChartLine,
  },
];
export default function HowWeWork() {
  // const isSmallDevice = useMediaQuery("only screen and (max-width : 425px)");
  const isSmallDevice=false;
  return (
    <>
      {/* <div className="relative flex flex-col gap-[98px] px-[118.5px] py-[108px] text-white xl:px-[182.5px] 2xl:px-[422px]"></div> */}
      <div className="relative min-h-screen">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/how-we-work-bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* overlay over the video */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.60)]"></div>
        <div className="relative flex flex-col gap-[70px] py-[108px] font-inter md:px-[65px] lg:px-[118.5px] xl:px-[350px] 2xl:px-[560px]">
          <div className="flex flex-col items-center gap-[10px]">
            <div className="rounded-[50px] border border-white/15 px-[14px] py-2 text-base font-normal text-[#9855FF]">
              Our Process
            </div>
            <HeadingSection
              mainHeading="How We Work"
              subContent="Our streamlined development process ensures efficient delivery of high-quality solutions."
              mainClassName="text-center"
              subClassName="text-center"
            />
          </div>

          <div className="relative flex flex-col items-center">
            {/* Vertical line */}
            <div
              className="absolute h-full w-0.5 bg-[#514C57]"
              style={{ height: "calc(100% - 120px)" }}
            ></div>

            {/* Timeline items */}
            {data.map((item, index) => (
              <div key={index} className="relative mb-14 flex w-full">
                {isSmallDevice ? (
                  <>
                    <div className="w-1/2"></div>

                    <div className="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-purple-900 bg-transparent backdrop-blur-sm">
                      <span className="rounded-full bg-purple-500 p-1 text-white">
                        <item.icon />
                      </span>
                    </div>

                    <div className="pl-5">
                      <div className="text-base font-medium leading-[31px] text-white">
                        {item.title}
                      </div>
                      <div className="text-base font-normal text-[rgba(255,255,255,0.80)]">
                        {item.description}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {index % 2 === 0 ? (
                      <>
                        {/* Left side content */}
                        <div className="mr-20 w-1/2 text-right lg:mr-24">
                          <div className="text-base font-medium leading-[31px] text-white">
                            {item.title}
                          </div>
                          <div className="text-base font-normal text-[rgba(255,255,255,0.60)]">
                            {item.description}
                          </div>
                        </div>

                        {/* Center circle */}
                        <div className="absolute left-1/2 flex h-[64px] w-[64px] -translate-x-1/2 items-center justify-center rounded-full border border-[#656565] bg-transparent bg-[linear-gradient(90deg,_rgba(64,15,54,0.40)_0%,_rgba(37,25,71,0.40)_100%)] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.40)] backdrop-blur-[7px]">
                          <span className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.41)_100%)] p-2 shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
                            <item.icon className="size-6" color="white" />
                          </span>
                        </div>

                        {/* Empty right side */}
                        <div className="w-1/2"></div>
                      </>
                    ) : (
                      <>
                        {/* Empty left side */}
                        <div className="w-1/2"></div>

                        {/* Center circle */}
                        <div className="absolute left-1/2 flex h-[64px] w-[64px] -translate-x-1/2 items-center justify-center rounded-full border border-[#656565] bg-[linear-gradient(90deg,_rgba(64,15,54,0.40)_0%,_rgba(37,25,71,0.40)_100%)] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.40)] backdrop-blur-[7px]">
                          <span className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.41)_100%)] p-2 shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
                            <item.icon className="size-6" color="white" />
                          </span>
                        </div>

                        {/* Right side content */}
                        <div className="ml-20 w-1/2 lg:ml-24">
                          <div className="text-base font-medium leading-[31px] text-white">
                            {item.title}
                          </div>
                          <div className="text-base font-normal text-[rgba(255,255,255,0.60)]">
                            {item.description}
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
