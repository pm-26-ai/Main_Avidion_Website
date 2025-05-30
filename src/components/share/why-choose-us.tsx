"use client";
import { HeadingSection } from "./heading-section";
import { IoBookOutline } from "react-icons/io5";
import Image from "next/image";
import { useEffect, useRef } from "react";
const cardData = [
  {
    id: 1,
    icon: "/why-choose-us/rocket.png",
    title: "Innovation-Led Development – ",
    content: "We blend creativity and code for futuristic solutions.",
  },
  {
    id: 2,
    icon: "/why-choose-us/lock.png",
    title: "Security by Design – ",
    content:
      "Your data and systems stay protected with enterprise-grade security.",
  },
  {
    id: 3,
    icon: "/why-choose-us/cross.png",
    title: "Modular Architecture – ",
    content: "Scale effortlessly with plug-and-play custom solutions.",
  },
  {
    id: 4,
    icon: "/why-choose-us/hand.png",
    title: "Agile & Transparent – ",
    content:
      "Stay in the loop with iterative development and real-time collaboration.",
  },
  {
    id: 5,
    icon: "/why-choose-us/bulb.png",
    title: "Human + AI Intelligence – ",
    content: "Combine strategy and automation for smarter decision-making.",
  },
  {
    id: 6,
    icon: "/why-choose-us/brain.png",
    title: "Deep Domain Expertise-",
    content:
      "Empowering Business Transformation with AI, Cloud, and Enterprise Solutions",
  },
];
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
      <div className="container z-20 flex max-w-full flex-col gap-[50px] pb-[82px] pt-[123px]">
        <HeadingSection
          mainHeading="Why Businesses Choose Us"
          subContent="3D Websites: Immersive Experiences for a Modern Web"
          mainClassName="text-left"
          subClassName="text-left"
          badgeContent="Explore All Services"
          badgeIcon={<IoBookOutline className="size-4" color="#A3A0AA" />}
        />

        <div className="relative bg-why-choose-us bg-cover bg-center bg-no-repeat">
          <div ref={sectionRef} className="grid grid-cols-3 pt-[40px]">
            {cardData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 px-[25px] py-[35px] xl:px-[43px] xl:py-[50px]"
              >
                <div className="relative aspect-square w-[70px] animate-bounce">
                  <Image src={item.icon} alt="why-choose-us-icon" fill />
                </div>
                <div className="flex flex-col items-start gap-[3px] font-inter">
                  <div className="text-center text-base font-medium leading-[31px] text-white">
                    {item.title}
                  </div>
                  <div className="text-base font-normal text-[rgba(255,255,255,0.70)]">
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
        </div>
      </div>
    </>
  );
}
