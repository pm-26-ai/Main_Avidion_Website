"use client";
import { HeadingSection } from "./heading-section";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { whyChooseUs } from "@/data";

export default function WhyChooseUs() {
  const divRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const div = divRef.current;

    if (!div || !section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (divRef.current) {
        divRef.current.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
      }
    };
    const handleMouseEnter = () => {
      div.style.opacity = "0.35";
    };
    const handleMouseLeave = () => {
      div.style.opacity = "0";
    };

    section?.addEventListener("mouseenter", handleMouseEnter);
    section?.addEventListener("mousemove", handleMouseMove);
    section?.addEventListener("mouseleave", handleMouseLeave);
  }, []);
  return (
    <>
      <div
        ref={sectionRef}
        className="container relative z-20 flex max-w-full flex-col overflow-hidden py-[63px] pb-[82px] md:gap-[50px] md:py-[80px] xl:pt-[123px]"
      >
        <HeadingSection
          mainHeading="Why Businesses Choose Us"
          subContent="3D Websites: Immersive Experiences for a Modern Web"
          mainClassName="text-left"
          subClassName="text-left"
          // badgeContent="Explore All Services"
          // badgeIcon={<IoBookOutline className="size-4" color="#A3A0AA" />}
        />

        <div className="relative xl:mt-10">
          {/* background image layer */}
          <div className="absolute inset-0 md:bg-why-choose-us-bg-md md:bg-contain md:bg-center md:bg-no-repeat xl:scale-[1.4] xl:bg-why-choose-us-bg-xl"></div>

          <div className="grid grid-cols-1 gap-y-[83px] md:grid-cols-2 md:gap-x-[100px] md:gap-y-[92px] lg:ml-[60px] lg:gap-x-[190px] xl:ml-0 xl:grid-cols-3 xl:gap-x-[137px] xl:gap-y-[99px]">
            {whyChooseUs.map((item, index) => (
              <>
                <div key={index} className="flex flex-col gap-4">
                  <div className="relative aspect-square w-[50px] animate-bounce md:w-[60px] xl:w-[70px]">
                    <Image
                      src={item.icon}
                      alt="why-choose-us-icon"
                      fill
                      priority
                    />
                  </div>

                  <div className="flex flex-col items-start gap-[3px] font-inter">
                    <div className="text-center text-base font-medium leading-[31px] text-white">
                      {item.title}
                    </div>
                    <div className="w-[291px] text-base font-normal text-[rgba(255,255,255,0.70)]">
                      {item.content}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

        <div
          ref={divRef}
          className="absolute inset-0 h-[300px] w-[300px] rounded-full bg-[#622A9A] opacity-0 blur-[100px] transition-opacity duration-300"
        ></div>
      </div>
    </>
  );
}
