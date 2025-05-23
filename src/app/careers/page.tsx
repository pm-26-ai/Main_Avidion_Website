"use client";
import { useEffect, useRef } from "react";
import { HeadingSection } from "@/components/share/heading-section";
import CurrentOpenings from "./components/current-openings";
import Image from "next/image";
import RecruitmentProcess from "./components/recruitment-process";
import SemiCircleTimeline from "./components/semi";
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
    section?.addEventListener("mousemove", (e) => {
      const rect = section.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (divRef.current) {
        divRef.current.style.transform = `translate(${x - 86}px, ${y - 86}px)`;
      }
    });
  }, []);
  return (
    <>
      {/* <div className="text-white font-inter text-[56px] leading-[65px] font-medium -tracking-[0.84px]">Current Openings</div>
      <CareerForm />; */}
      {/* join team avidion */}
      <div className="relative">
        <video
          src="/careers/main-bg-video.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 bg-[radial-gradient(27.26%_97.44%_at_50.03%_100%,_rgba(42,4,48,0.00)_0%,_#000_100%)]"></div>
        {/* <div className="relative"> */}
        <div className="relative">
          <div className="flex items-center justify-between py-[52px] pl-[416px] pr-[444px]">
            <div className="flex flex-col gap-5 text-white">
              <div className="text-[56px] font-medium leading-[65px] -tracking-[0.84px]">
                Join Team Avidion!
              </div>
              <div className="text-[20px] font-normal leading-[30px] -tracking-[0.002px]">
                Innovate. Code. Grow – Your Journey Starts Here
              </div>
            </div>

            <div className="relative aspect-square w-[402px]">
              <Image
                src={"/careers/main-image.png"}
                alt="join avidion image"
                className="object-contain"
                fill
              />
            </div>
          </div>
          {/* careers features */}
          <div className="bg-[linear-gradient(19deg,_rgba(0,0,0,0.70)_13.98%,_rgba(0,0,0,0.00)_88.58%)]">
            <div className="flex flex-row gap-[32px] px-[150px] pb-[80px] pt-[57px] 2xl:px-[340px]">
              {features.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-[9.5px] py-[50px]"
                  >
                    <div className="relative aspect-square w-[43px]">
                      <Image src={item.url} alt="vision-image" fill />
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="text-xl font-bold text-[#E0E0E0]">
                        {item.title}
                      </div>
                      <div className="text-center text-base font-normal text-[rgba(255,255,255,0.70)]">
                        {item.content}
                      </div>
                    </div>
                  </div>

                  {index != features.length - 1 && (
                    <div className="relative h-[241px] w-[1.48px]">
                      <Image
                        src={"/icons/line.svg"}
                        alt="line-image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>

      {/* avidion benefits */}
      <div className="bg-[#030105]">
        <div className="relative overflow-hidden pb-[100px] pt-[126px] xl:px-[200px] 2xl:px-[416px]">
          <div className="flex flex-col gap-[57px]">
            <HeadingSection
              subContent="At Avidion, we're passionate about shaping the future of IT services together"
              mainHeading="Avidion Benefits"
              mainClassName="text-left"
              subClassName="text-left"
            />
            <div className="relative">
              <div
                ref={sectionRef}
                className="relative z-10 grid grid-cols-3 gap-[33px] bg-avidion-benefit bg-cover bg-center bg-no-repeat pb-[100px]"
              >
                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-[14px] px-[36px] pb-[33px] pt-[45px]"
                  >
                    <div className="relative aspect-square w-[47px]">
                      <Image src={item.url} alt="benefits-images" fill />
                    </div>
                    <div className="flex flex-col gap-[3px] text-center">
                      <div className="text-white">{item.title}</div>
                      <div className="text-[#727272]">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                ref={divRef}
                className="absolute inset-0 z-0 size-[192px] rounded-full bg-[linear-gradient(57deg,_#6748CD_11.25%,_#972BC7_34.88%,_#B33691_66.88%,_#4D1263_95.25%)] blur-[97.25px]"
              ></div>
            </div>
          </div>

          <div className="left-1/5 absolute top-[60%] size-[825px] animate-blob rounded-full bg-[#A5318A] opacity-[0.25] blur-[249px]"></div>
          <div className="absolute right-[15%] top-[80%] size-[569px] animate-blob rounded-full bg-[#622A9A] opacity-[0.25] blur-[112px]"></div>
        </div>
      </div>

      <CurrentOpenings />
      <RecruitmentProcess />
    </>
  );
};

export default Careers;
