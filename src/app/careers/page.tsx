"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { HeadingSection } from "@/components/share/heading-section";
import Image from "next/image";
const Openings = dynamic(
  () => import("../careers/components/current-openings"),
  {
    ssr: false,
  },
);
const RecruitmentSteps = dynamic(
  () => import("../careers/components/recruitment-process"),
  {
    ssr: false,
  },
);
const features = [
  {
    url: "/careers/features-icons/development.svg",
    title: "Development",
    content:
      "Avidion is a hub for constant learning and technical growth. We invest in the intellectual journey of every team member.",
  },
  {
    url: "/careers/features-icons/support.svg",
    title: "Support",
    content:
      "Tailored upskilling and reskilling that evolves with business needs—so you grow into the professional you’re meant to be.",
  },
  {
    url: "/careers/features-icons/growth.svg",
    title: "Growth",
    content:
      "We value long-term relationships and see our people as strategic assets. Together, we rise.",
  },
];

const benefits = [
  {
    url: "/careers/benefit-icons/icon-1.svg",
    title: "Competitive Compensation",
    content:
      "Enjoy industry-leading pay packages and performance-based incentives that reward your hard work and dedication.",
  },
  {
    url: "/careers/benefit-icons/icon-2.svg",
    title: "Comprehensive Benefits",
    content:
      "Experience a range of health, dental, and visioninsurance plans, alongside other benefits like flexible work schedules and paid time off.",
  },
  {
    url: "/careers/benefit-icons/icon-3.svg",
    title: "Learning & Development",
    content:
      "Gain access to a wealth of training and development resources, helping you grow professionally and stay ahead of the curve.",
  },
  {
    url: "/careers/benefit-icons/icon-4.svg",
    title: "Collaborative Culture",
    content:
      "Join a truly supportive, inclusive workplace that values open communication, teamwork, and shared success.",
  },
  {
    url: "/careers/benefit-icons/icon-5.svg",
    title: "Career Growth Opportunities",
    content:
      "Benefit from well-defined career paths and growth opportunities, enabling you to advance and make an impact in your chosen field.",
  },
  {
    url: "/careers/benefit-icons/icon-6.svg",
    title: "Work-Life Balance",
    content:
      "Embrace a healthy work-life balance with flexible work arrangements, and initiatives that support your overall well-being.",
  },
];

const Careers = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    const div = divRef.current;

    if (!div || !section) return;

    const handleMouseEnter = () => {
      div.style.opacity = "0.85";
    };

    const handleMouseLeave = () => {
      div.style.opacity = "0";
    };

    const handleMouseMove = () => {
      section?.addEventListener("mousemove", (e) => {
        const rect = section.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (divRef.current) {
          divRef.current.style.transform = `translate(${x - 86}px, ${y - 86}px)`;
        }
      });
    };

    section?.addEventListener("mousemove", handleMouseMove);
    section?.addEventListener("mouseenter", handleMouseEnter);
    section?.addEventListener("mouseleave", handleMouseLeave);
  }, []);
  return (
    <>
      {/* join team avidion */}
      <div className="relative">
        <video
          src="/careers/main-bg-video.mp4"
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-opacity-50 bg-[radial-gradient(50.58%_26.36%_at_57.81%_48.24%,_rgba(42,4,48,0.00)_0%,_#000_100%)] md:bg-[radial-gradient(81.55%_42.77%_at_57.5%_59.34%,_rgba(42,4,48,0.00)_0%,_#000_100%)] xl:bg-[radial-gradient(27.26%_97.44%_at_50.03%_100%,_rgba(42,4,48,0.00)_0%,_#000_100%)]"></div>
        <div className="relative">
          <div className="container flex max-w-full flex-col items-center gap-[60px] pt-[134px] sm:gap-[75px] md:gap-[86px] md:pt-[160px] xl:flex-row xl:justify-between xl:pt-[196px]">
            <div className="flex flex-col items-center gap-2 text-white xl:items-start xl:gap-5">
              <div className="text-2xl font-medium leading-[40px] -tracking-[0.84px] lg:text-[40px] xl:text-[56px] xl:leading-[65px]">
                Join Team Avidion!
              </div>
              <div className="text-center text-sm font-normal leading-[30px] -tracking-[0.002px] md:text-[20px] xl:text-left">
                Innovate. Code. Grow – Your Journey Starts Here
              </div>
            </div>

            <div className="relative aspect-square h-[258px] w-[310px] sm:h-[323px] sm:w-[375px] md:h-[430px] md:w-[461px] xl:w-[402px]">
              <Image
                src={"/careers/main-image.png"}
                alt="join avidion image"
                className="object-contain"
                fill
                priority
              />
            </div>
          </div>

          <div className="flex justify-center bg-[linear-gradient(2deg,_rgba(0,0,0,0.70)_57%,_rgba(0,0,0,0.36)_98.29%)] backdrop-blur-[2px]">
            <div className="container flex flex-col gap-[18px] md:px-[200px] xl:flex-row xl:gap-[64px] 2xl:px-[340px]">
              {features.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-[9.5px] py-[30px] xl:py-[50px]"
                  >
                    <div className="relative aspect-square w-[43px]">
                      <Image src={item.url} alt="vision-image" fill priority />
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="text-base font-bold text-[#E0E0E0] md:text-xl">
                        {item.title}
                      </div>
                      <div className="text-center text-sm font-normal text-[rgba(255,255,255,0.70)] md:text-base">
                        {item.content}
                      </div>
                    </div>
                  </div>

                  {/* {index != features.length - 1 && (
                    <div className="relative h-[241px] w-[1.48px]">
                      <Image
                        src={"/icons/line.svg"}
                        alt="line-image"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  )} */}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* avidion benefits */}
      <div className="bg-[#030105]">
        <div className="container relative max-w-full overflow-hidden pb-[100px] pt-[63px] md:pt-[80px] xl:pt-[126px]">
          <div className="flex flex-col gap-[50px]">
            <HeadingSection
              subContent="At Avidion, we're passionate about shaping the future of IT services together"
              mainHeading="Avidion Benefits"
              mainClassName="text-left"
              subClassName="text-left"
            />
            <div className="relative">
              <div className="absolute -top-12 bottom-0 left-0 right-0 scale-[0.85] bg-contain bg-center bg-no-repeat md:bg-why-choose-us-bg-md xl:left-2 xl:scale-[1] xl:bg-why-choose-us-bg-xl"></div>
              <div
                ref={sectionRef}
                className="relative z-10 grid grid-cols-1 gap-14 pb-[50px] md:grid-cols-2 md:gap-x-[40px] md:pb-[80px] xl:grid-cols-3 xl:gap-[40px] xl:pb-[100px]"
              >
                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-[14px] md:pb-[26px] md:pr-[25px] md:pt-[45px] xl:items-center xl:px-[21px] xl:pb-[33px] xl:pt-[43px]"
                  >
                    <div className="relative aspect-square w-[47px]">
                      <Image
                        src={item.url}
                        alt="benefits-images"
                        fill
                        priority
                      />
                    </div>
                    <div className="flex flex-col items-start gap-[3px] xl:items-center">
                      <div className="text-white">{item.title}</div>
                      <div className="text-[#727272] xl:text-center">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                ref={divRef}
                className="absolute inset-0 z-0 size-[192px] rounded-full bg-[linear-gradient(57deg,_#6748CD_11.25%,_#972BC7_34.88%,_#B33691_66.88%,_#4D1263_95.25%)] opacity-0 blur-[97.25px] transition-opacity duration-300 will-change-transform"
              ></div>
            </div>
          </div>

          <div className="absolute left-0 top-[80%] size-[525px] animate-blob rounded-full bg-[#A5318A] opacity-[0.3] blur-[112px] will-change-transform lg:size-[625px] xl:left-[20%] xl:top-[60%] xl:size-[825px] xl:blur-[200px]"></div>
          <div className="absolute right-0 top-[70%] size-[350px] animate-blob-2 rounded-full bg-[#622A9A] opacity-[0.3] blur-[112px] will-change-transform lg:size-[569px] xl:right-[15%]"></div>
        </div>
      </div>

      <Openings />
      <RecruitmentSteps />
    </>
  );
};

export default Careers;
