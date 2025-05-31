"use client";
import { HeadingSection } from "./heading-section";
import { IoBookOutline } from "react-icons/io5";
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
      div.style.opacity = "0.25";
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
      <div className="container z-20 flex max-w-full flex-col py-[63px] pb-[82px] md:gap-[50px] md:py-[80px] xl:pt-[123px]">
        <HeadingSection
          mainHeading="Why Businesses Choose Us"
          subContent="3D Websites: Immersive Experiences for a Modern Web"
          mainClassName="text-left"
          subClassName="text-left"
          // badgeContent="Explore All Services"
          // badgeIcon={<IoBookOutline className="size-4" color="#A3A0AA" />}
        />

        {/* <div className="md:bg-why-choose-us-bg-md xl:bg-why-choose-us-bg-xl relative  md:bg-contain md:bg-center md:bg-no-repeat">
          <div
            ref={sectionRef}
            className="grid grid-cols-1 md:grid-cols-2 md:pt-[40px] xl:grid-cols-3"
          >
            {cardData.map((item) => (
              <div
                key={item.id}
                className="pl-[50px] flex flex-col gap-4 py-[35px] xl:px-[43px] xl:py-[50px]"
              >
                <div className="relative aspect-square w-[70px] animate-bounce">
                  <Image src={item.icon} alt="why-choose-us-icon" fill />
                </div>
                <div className="flex flex-col items-start gap-[3px] font-inter">
                  <div className="text-center text-base font-medium leading-[31px] text-white">
                    {item.title}
                  </div>
                  <div className="text-base font-normal text-[rgba(255,255,255,0.70)] w-[291px] pb-[60px]">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            ref={divRef}
            className="pointer-events-none absolute inset-0 z-10 h-[300px] w-[300px] rounded-full bg-[#622A9A] opacity-0 blur-[112px] transition-opacity duration-300"
          ></div>
        </div> */}

        <div className="relative xl:mt-10">
          {/* background image layer */}
          <div className="md:bg-why-choose-us-bg-md xl:bg-why-choose-us-bg-xl absolute inset-0 md:bg-contain md:bg-center md:bg-no-repeat xl:scale-[1.4]"></div>

          <div
            ref={sectionRef}
            className="grid grid-cols-1 gap-y-[83px] md:grid-cols-2 md:gap-x-[100px] md:gap-y-[92px] lg:ml-[60px] lg:gap-x-[190px] xl:ml-0 xl:grid-cols-3 xl:gap-x-[137px] xl:gap-y-[99px]"
          >
            {whyChooseUs.map((item, index) => (
              <>
                <div key={index} className="flex flex-col gap-4">
                  <div className="relative aspect-square w-[70px] animate-bounce">
                    <Image src={item.icon} alt="why-choose-us-icon" fill />
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
          {/* <div
            ref={divRef}
            className="pointer-events-none absolute inset-0 z-10 h-[300px] w-[300px] rounded-full bg-[#622A9A] opacity-0 blur-[112px] transition-opacity duration-300"
          ></div> */}
        </div>
      </div>
    </>
  );
}
