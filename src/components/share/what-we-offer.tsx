"use client";
import { useRef } from "react";
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
  const cardRef = useRef<HTMLDivElement>(null);
  // useEffect(()=>{
  //  const card=cardRef.current;

  //  card?.addEventListener("mousemove",(e)=>{
  //    const {clientX,clientY}=e;

  //  })
  // },[])
  return (
    <>
      <div className="relative overflow-x-hidden bg-[linear-gradient(107deg,#190D2E_0.54%,#020103_99.46%)] px-[118.5px] py-[108px] xl:px-[182.5px] 2xl:px-[422px]">
        <HeadingSection
          mainHeading="What We Offer"
          subContent="Avidion Software is a forward-thinking tech company specializing in custom software development, AI integration, cloud migration, and workflow automation. We deliver scalable digital solutions that drive growth for businesses of all sizes."
          mainClassName="text-center"
          subClassName="text-center"
        />
        <div className="grid grid-cols-2 gap-5 xl:grid-cols-3 xl:gap-10">
          {offerCards.map((card) => {
            return (
              <>
                <div
                  ref={cardRef}
                  key={card.id}
                  className="bg-[rgba(0,0,0,0.06 )] flex flex-col gap-2 rounded-[10px] border border-white/15 px-[27px] pb-5 pt-[30px] font-inter -tracking-[0.002px] text-white"
                >
                  <div className="px-1 py-0.5">
                    <div className="relative size-[30.8px]">
                      <Image src={card.icon} alt="service-icon-image" fill />
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
              </>
            );
          })}
        </div>
        <div className="absolute -left-28 -top-12 h-[250px] w-[250px] animate-blob rounded-full bg-[#971b76] opacity-70 blur-[80px]"></div>

        <div className="animation-delay-1 absolute -right-28 bottom-12 h-[250px] w-[250px] animate-blob rounded-full bg-[#971b76] opacity-70 mix-blend-screen blur-[100px]"></div>
        <div className="animation-delay-2 absolute -right-28 bottom-52 h-[250px] w-[250px] animate-blob rounded-full bg-[#622A9A] opacity-70 mix-blend-screen blur-[100px]"></div>
      </div>
    </>
  );
}
