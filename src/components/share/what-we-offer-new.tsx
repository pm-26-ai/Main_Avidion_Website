import { useEffect, useRef } from "react";
import { HeadingSection } from "./heading-section";
import { whatWeOfferCards } from "@/data";
import Image from "next/image";

export default function WhatWeOfferNew() {
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
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Use transform for both elements to ensure consistency
        glow.style.transform = `translate(${x - 50}px, ${y - 50}px)`;

        let angle = Math.atan2(y, x) * (180 / Math.PI);
        angle = (angle + 360) % 360;

        card.style.setProperty("--start", `${angle + 60}`);
      };

      const handleMouseLeave = () => {
        glow.style.opacity = "0";
        // Reset transform on mouse leave
        glow.style.transform = "translate(-50%, -50%)";
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
      };
    });
  }, []);

  return (
    <>
      <div className="container relative max-w-full overflow-x-hidden bg-[linear-gradient(107deg,#190D2E_0.54%,#020103_99.46%)] py-[63px] md:py-[80px] xl:py-[108px]">
        <HeadingSection
          mainHeading="What We Offer"
          subContent="Avidion Softwares is a forward-thinking tech company specializing in custom software development, AI integration, cloud migration, and workflow automation. We deliver scalable digital solutions that drive growth for businesses of all sizes."
          mainClassName="text-center"
          subClassName="text-center"
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-x-8 md:gap-y-14 xl:grid-cols-3 xl:gap-x-10 xl:gap-y-12">
          {whatWeOfferCards.map((card, index) => {
            return (
              <div key={card.id} className="group relative overflow-hidden">
                <div
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  style={{ borderImage: "none" }}
                  className="relative rounded-[10px] border border-white/15 bg-black/10 px-7 pb-5 pt-8 font-inter text-white transition-all duration-300"
                >
                  {/* Glow Layer */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-[10px] border-[4px] border-transparent opacity-0 transition duration-500 group-hover:opacity-60">
                    <div className="glow-effect absolute left-1/2 top-1/2 z-0 h-[98%] w-[98%] -translate-x-1/2 -translate-y-1/2 rounded-[10px] border-[4px] border-transparent opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
                  </div>

                  {/* blurry ball  */}
                  <div
                    ref={(el) => {
                      glowRefs.current[index] = el;
                    }}
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(57deg,_#6748CD_11.25%,_#972BC7_34.88%,_#B33691_66.88%,_#4D1263_95.25%)] opacity-0 blur-2xl transition-opacity duration-200"
                  />

                  <div className="relative z-10 flex flex-col gap-2">
                    <div className="px-1 py-0.5">
                      <div className="relative size-[30.8px]">
                        <Image
                          src={card.icon}
                          alt="service-icon-image"
                          fill
                          priority
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col justify-start gap-1.5">
                        <div className="text-base font-medium leading-8">
                          {card.title}
                        </div>
                        <div className="xl:h-26 h-20 text-sm font-normal leading-7 text-white/70 md:text-base">
                          {card.content}
                        </div>
                      </div>
                      {/* know more button */}
                      <button className="w-full rounded-[10px] border border-white/15 bg-white/10 px-4 py-1.5 text-center text-sm font-normal backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
                        Know More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Background animated circles */}
        <div className="absolute -left-28 -top-12 h-[250px] w-[250px] animate-circle-move rounded-full bg-[#971b76] opacity-70 blur-[80px]"></div>
        <div className="animation-delay-1 absolute -right-24 bottom-52 h-[309px] w-[309px] animate-circle-move rounded-full bg-[#971b76] opacity-70 mix-blend-screen blur-[100px]"></div>
        <div className="animation-delay-2 absolute -right-12 bottom-8 h-[213px] w-[213px] animate-circle-move rounded-full bg-[#622A9A] opacity-70 mix-blend-screen blur-[100px]"></div>
      </div>
    </>
  );
}
