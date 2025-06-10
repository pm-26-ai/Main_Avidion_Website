"use client";
import dynamic from "next/dynamic";
import { HeadingSection } from "./heading-section";
import Timeline from "./timeline";
const TimelineSteps = dynamic(() => import("../share/timeline"), {
  ssr: false,
});

export default function HowWeWork() {
  return (
    <>
      {/* <div className="relative flex flex-col gap-[98px] px-[118.5px] py-[108px] text-white xl:px-[182.5px] 2xl:px-[422px]"></div> */}
      <div className="relative">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
        >
          <source src="/how-we-work-bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* overlay over the video */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.60)]"></div>
        <div className="container mx-auto w-full">
          <div className="relative flex flex-col gap-10 py-[63px] font-inter md:py-[80px] xl:gap-[70px] xl:px-[156.5px] xl:py-[123px] 2xl:px-[144px]">
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
                className="w-0.5 bg-[#514C57] md:absolute md:h-full"
                style={{ height: "calc(100% - 120px)" }}
              ></div>

              {/* Timeline items */}
              <TimelineSteps />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
