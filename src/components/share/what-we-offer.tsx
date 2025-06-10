"use client";
import { useEffect, useRef } from "react";
import { HeadingSection } from "./heading-section";
import Image from "next/image";
import { whatWeOfferCards } from "@/data";
import { useRouter, useSearchParams } from "next/navigation";
export default function WhatWeOffer() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();

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

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
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
      <div className="relative overflow-hidden bg-[linear-gradient(107deg,#190D2E_0.54%,#020103_99.46%)] py-[63px] md:py-[80px] xl:py-[108px]">
        <div className="container w-full mx-auto">
        <HeadingSection
          mainHeading="What We Offer"
          subContent="Avidion Softwares is a forward-thinking tech company specializing in custom software development, AI integration, cloud migration, and workflow automation. We deliver scalable digital solutions that drive growth for businesses of all sizes."
          mainClassName="text-center"
          subClassName="text-center"
        />
        <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-x-8 md:gap-y-[54px] xl:grid-cols-3 xl:gap-x-10 xl:gap-y-[49px]">
          {whatWeOfferCards.map((card, index) => {
            return (
              <>
                <div className="overflow-hidden">
                  <div
                    key={card.id}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    style={{ borderImage: "none" }}
                    className="card-border-glow bg-[rgba(0,0,0,0.06 )] group relative rounded-[10px] border border-white/15 px-[27px] pb-5 pt-[30px] font-inter -tracking-[0.002px] text-white"
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
                            priority
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-5">
                        <div className="flex flex-col justify-start gap-1.5">
                          <div className="text-base font-medium leading-[31px]">
                            {card.title}
                          </div>
                          <div className="h-[78px] text-sm font-normal leading-[26px] text-[rgba(255,255,255,0.70)] md:text-base xl:h-[104px]">
                            {card.content}
                          </div>
                        </div>
                        {/* know more button */}
                        <button
                          onClick={() => {
                            params.set("open", "true");
                            router.push(`/?${params.toString()}`, {
                              scroll: false,
                            });
                          }}
                          className="w-full rounded-[10px] border border-white/15 bg-[rgba(61,61,61,0.40)] px-[15px] py-1.5 text-center text-sm font-normal shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]"
                        >
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
        <div className="absolute -left-28 -top-12 h-[250px] w-[250px] animate-circle-move rounded-full bg-[#971b76] opacity-70 blur-[80px]"></div>

        <div className="animation-delay-1 absolute -right-24 bottom-52 size-[309px] animate-circle-move rounded-full bg-[#971b76] opacity-70 mix-blend-screen blur-[100px]"></div>
        <div className="animation-delay-2 absolute -right-12 bottom-8 size-[213px] animate-circle-move rounded-full bg-[#622A9A] opacity-70 mix-blend-screen blur-[100px]"></div>
        </div>
      </div>
    </>
  );
}
