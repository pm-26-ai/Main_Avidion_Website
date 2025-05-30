"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import InfiniteScrollTape from "../infinite-scroll-area";
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    const section = containerRef.current;
    section?.addEventListener("mousemove", (e) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setMousePosition({ x, y });
    });
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative h-[1280px] overflow-hidden bg-[#090B0D]"
      >
        <video
          src="/hero-section/bg-hero-video.mp4"
          className="absolute left-0 top-0 h-full w-full object-cover xl:left-[81px]"
          autoPlay
          muted
          loop
        ></video>
        {/* Hidden background image - only visible on the hover */}
        {isHovering && (
          <div
            className="absolute inset-0 transition-all duration-200 ease-out"
            style={{
              maskImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 0, 0, 1) 8%, rgba(0, 0, 0, 0.4) 12%, transparent 18%)`,
              // WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 0, 0, 1) 8%, rgba(0, 0, 0, 0.4) 12%, transparent 18%)`,
            }}
          >
            <Image
              src={"/hero-section/hero-svg.svg"}
              alt="hero-svg"
              className="absolute inset-0 h-full w-full object-cover opacity-40"
              fill
            />
          </div>
        )}

        <div className="container relative max-w-full py-[162px]">
          <div className="flex w-[700px] flex-col items-start justify-center gap-[39px] px-5 font-inter">
            <div className="flex flex-col items-start gap-2">
              <div className="rounded-[50px] border border-white/15 bg-black px-[14px] py-2 text-base font-normal text-[#9855FF]">
                Avidion Software is here to redefine the digital future
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-[72px] font-medium leading-[80px] -tracking-[4.158px] text-transparent text-white xl:text-[82.178px] xl:leading-[90.182px]">
                  Transforming Ideas into Reality
                </div>
                <div className="w-[550px] text-xl font-normal text-white">
                  We create smart, AI-driven products that help businesses
                  innovate, grow, and lead in a digital-first world.
                </div>
              </div>
            </div>
            <div
              style={{
                background:
                  "conic-gradient(from var(--border-angle), #FF57DB, #B33691, #6748DB, #9D78F2)",
              }}
              className="animate-rotate-border rounded-[12px] p-[3px] hover:shadow-[0_0_12px_0_rgba(255,255,255,0.60)]"
            >
              <div className="rounded-[12px] bg-black px-6 py-2.5 text-[15.033px] font-medium leading-[31.067px] text-white transition-all duration-500 ease-in">
                Book A Free Consultation
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-[24%] top-[55%] w-[50%]">
          <InfiniteScrollTape />
        </div>
      </div>
    </>
  );
}
