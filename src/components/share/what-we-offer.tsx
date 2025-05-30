"use client";
import { useEffect, useRef } from "react";
import { HeadingSection } from "./heading-section";
import Image from "next/image";
export default function WhatWeOffer() {
  const offerCards = [
    {
      id: 1,
      title: "Custom Website Development",
      content:
        "Tailor-made, responsive, and lightning-fast websites built with the latest tech stack.",
      icon: "/what-we-offer/icon-1.svg",
    },
    {
      id: 2,
      title: "AI Integration & Chatbots",
      content: "Visual insights into your site’s performance.",
      icon: "/what-we-offer/icon-2.svg",
    },
    {
      id: 3,
      title: "Mobile App Development",
      content: "Automatic suggestions and the best keywords to target.",
      icon: "/what-we-offer/icon-3.svg",
    },
    {
      id: 4,
      title: "CRM",
      content:
        "Salesforce, HubSpot, Zoho CRM tailored to enhance customer satisfaction, raising scores by 25%.",
      icon: "/what-we-offer/icon-4.svg",
    },
    {
      id: 5,
      title: "3D Websites",
      content:
        "3D websites capture attention and create memorable brand stories through immersive visuals and interaction.",
      icon: "/what-we-offer/icon-5.svg",
    },
    {
      id: 6,
      title: "WMS & ERP Systems",
      content:
        "Seamless warehouse management system integration reduces inventory costs by 15%.",
      icon: "/what-we-offer/icon-6.svg",
    },
  ];
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current;
    const glows = glowRefs.current;

    cards.forEach((card, index) => {
      if (!card || !glows[index]) return;

      const glow = glows[index];
      const handleMouseEnter = () => {
        glow.style.opacity = "1";
      };
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        glow.style.left = `${x - 50}px`;
        glow.style.top = `${y - 50}px`;
      };
      const handleMouseLeave = () => {
        glow.style.opacity = "0";
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });
  }, []);
  return (
    <>
      <div className="container relative max-w-full overflow-x-hidden bg-[linear-gradient(107deg,#190D2E_0.54%,#020103_99.46%)] py-[108px]">
        <HeadingSection
          mainHeading="What We Offer"
          subContent="Avidion Software is a forward-thinking tech company specializing in custom software development, AI integration, cloud migration, and workflow automation. We deliver scalable digital solutions that drive growth for businesses of all sizes."
          mainClassName="text-center"
          subClassName="text-center"
        />
        <div className="grid grid-cols-2 gap-5 xl:grid-cols-3 xl:gap-10">
          {offerCards.map((card, index) => {
            return (
              <>
                <div className="overflow-hidden">
                  <div
                    key={card.id}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className="bg-[rgba(0,0,0,0.06 )] relative rounded-[10px] border border-white/15 px-[27px] pb-5 pt-[30px] font-inter -tracking-[0.002px] text-white"
                  >
                    <div
                      ref={(el) => {
                        glowRefs.current[index] = el;
                      }}
                      className="pointer-events-none absolute h-[90px] w-[90px] rounded-full bg-[linear-gradient(57deg,_#6748CD_11.25%,_#972BC7_34.88%,_#B33691_66.88%,_#4D1263_95.25%)] opacity-0 blur-2xl transition-opacity duration-200"
                    />
                    <div className="relative z-10 flex flex-col gap-2">
                      <div className="px-1 py-0.5">
                        <div className="relative size-[30.8px]">
                          <Image
                            src={card.icon}
                            alt="service-icon-image"
                            fill
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[33px]">
                        <div className="flex flex-col justify-start gap-1.5">
                          <div className="text-base font-medium leading-[31px]">
                            {card.title}
                          </div>
                          <div className="h-[104px] text-base font-normal leading-[26px] text-[rgba(255,255,255,0.70)]">
                            {card.content}
                          </div>
                        </div>
                        {/* know more button */}
                        <button className="w-full rounded-[10px] border border-white/15 bg-[rgba(61,61,61,0.40)] px-[15px] py-1.5 text-center text-sm font-normal shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
                          Know More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="absolute -left-28 -top-12 h-[250px] w-[250px] animate-blob rounded-full bg-[#971b76] opacity-70 blur-[80px]"></div>

        <div className="animation-delay-1 absolute -right-24 bottom-52 size-[309px] animate-blob rounded-full bg-[#971b76] opacity-70 mix-blend-screen blur-[100px]"></div>
        <div className="animation-delay-2 absolute -right-12 bottom-8 size-[213px] animate-blob rounded-full bg-[#622A9A] opacity-70 mix-blend-screen blur-[100px]"></div>
      </div>
    </>
  );
}
