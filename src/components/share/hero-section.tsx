"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
        className="relative h-[630px] overflow-hidden bg-[#090B0D] md:h-[980px] xl:h-[1280px]"
      >
        <video
          src="/hero-section/bg-hero-video.mp4"
          className="absolute left-[40px] top-[28px] h-full w-full scale-[1.8] sm:top-[45px] md:left-[81px] md:top-0 md:scale-[1.7] lg:scale-[1.7] xl:scale-[1.4] 2xl:scale-[1.15]"
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
        ></video>
        {/* Hidden background image - only visible on the hover */}
        {isHovering && (
          <div
            className="inset-0 transition-all duration-200 ease-out xl:absolute"
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

        <div className="container relative py-[100px] sm:py-[112px] md:py-[162px]">
          <div className="flex flex-col items-start justify-center gap-[22px] font-inter md:gap-[34px] xl:gap-[39px]">
            <div className="flex flex-col items-start gap-2">
              <div className="rounded-[50px] border border-white/15 bg-black px-[7.78px] py-1 text-[10px] font-normal leading-[14.45px] -tracking-[0.001px] text-[#9855FF] md:px-2.5 md:py-1.5 md:text-[11px] md:leading-[18px] xl:px-[14px] xl:py-2">
                Avidion Software is here to redefine the digital future
              </div>
              <div className="flex flex-col gap-2.5 xl:gap-3">
                <div className="w-[255px] text-[28px] font-medium leading-[38px] -tracking-[1.417px] text-transparent text-white md:w-[500px] md:text-[59px] md:leading-[60px] md:-tracking-[4.158px] xl:w-[700px] xl:text-[82.178px] xl:leading-[90.182px]">
                  Transforming Ideas into Reality
                </div>
                <div className="w-[250px] text-sm font-normal text-white md:w-[392px] xl:w-[550px] xl:text-xl">
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
              <div className="rounded-[8.6px] bg-black px-[18px] py-2 text-[12px] font-medium leading-[14px] text-white transition-all duration-500 ease-in md:text-[10px] md:leading-[22px] xl:rounded-[12px] xl:px-6 xl:py-2.5 xl:text-[15.033px] xl:leading-[31.067px]">
                Book A Free Consultation
              </div>
            </div>
          </div>
        </div>

        {/* <div className="absolute left-[24%] top-[55%] w-[50%]">
          <InfiniteScrollTape />
        </div> */}
      </div>
    </>
  );
}
