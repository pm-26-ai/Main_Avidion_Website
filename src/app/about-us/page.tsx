import { TbTargetArrow } from "react-icons/tb";
import Image from "next/image";
import Main from "./main";
const facilities = [
  {
    url: "/icons/vision.svg",
    title: "Our Vision",
    content:
      "Provide highest-quality digital services globally, driving progress and excellence.",
  },
  {
    url: "/icons/mission.svg",
    title: "Our Mission",
    content:
      "Transparent, collaborative process ensuring tailored, tested, and trusted solutions.",
  },
  {
    url: "/icons/approach.svg",
    title: "Our Approach",
    content:
      "Transparent, collaborative process ensuring tailored, tested, and trusted solutions.",
  },
];
const AboutUs = () => {
  return (
    <>
      <Main />
      
      {/* our vision */}
      <div className="bg-[#13081C]">
        <div className="md:px-[100px] lg:px-[180px] xl:px-0">
          <div className="container flex max-w-full flex-col py-[50px] xl:flex-row">
            {facilities.map((item, index) => (
              <>
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-[25px] bg-[#13081C] px-[45px] pb-[50px] pt-[34px] md:px-[64px]"
                >
                  <div className="relative aspect-square w-[38px] md:w-[60px] lg:w-[72px]">
                    <Image src={item.url} alt="vision-image" fill priority />
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="text-base font-medium text-[#E0E0E0] md:text-[24px] md:leading-[48px] xl:text-[28px]">
                      {item.title}
                    </div>
                    <div className="text-center text-sm text-[rgba(255,255,255,0.70)] md:text-base">
                      {item.content}
                    </div>
                  </div>
                </div>

                {/* {index != facilities.length - 1 && (
                <div className="relative h-[425px] w-[1.48px]">
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
      {/* vision-led strategy section */}
      <div className="container relative flex max-w-full flex-col gap-[40px] overflow-hidden py-[80px] xl:gap-[70px] xl:py-[160px]"> 
        <div className="z-10 text-center text-[56px] text-xl font-medium leading-[65px] -tracking-[0.84px] text-white md:text-[42px]">
          Vision-Led Strategy
        </div>

        <div className="z-10 flex flex-col items-center justify-between gap-[50px] md:flex-row">
          <div className="flex flex-col items-center gap-4 xl:basis-[49%]">
            <div className="flex flex-col items-center gap-[15px] px-4 py-4 md:items-start md:px-6 md:py-10">
              <TbTargetArrow
                className="size-[35px] lg:size-[47px]"
                color="#A9A9A9"
              />
              <div className="flex flex-col items-center gap-[3px] md:items-start">
                <div className="text-base font-bold text-[#E0E0E0] lg:text-xl">
                  Aligned with Your Goals
                </div>
                <div className="text-center text-sm font-normal text-[rgba(255,255,255,0.70)] md:text-left lg:text-base">
                  Every project is guided by your business vision and long-term
                  objectives.
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-[15px] px-6 py-10 md:items-start">
              <div className="relative aspect-square size-[35px] lg:size-[47px]">
                <Image
                  src={"/icons/collaborate.svg"}
                  alt="collaborate-image"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col items-center gap-[3px] md:items-start">
                <div className="text-base font-bold text-[#E0E0E0] lg:text-xl">
                  Collaborative Process{" "}
                </div>
                <div className="text-center text-sm font-normal text-[rgba(255,255,255,0.70)] md:text-left lg:text-base">
                  We ensure transparency and partnership from discovery through
                  deployment.
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-square w-[265px] md:w-[432px]">
            <Image
              src={"/about-us/strategy.png"}
              alt="strategy image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div className="z-0 animation-delay-1 absolute -left-[10%] -top-1/3 size-[370px] lg:size-[477px] rotate-[3.425deg] animate-circle-move rounded-full bg-[#A5318A] opacity-[0.5] blur-[154px]"></div>
        <div className="z-0 animation-delay-2 absolute -left-[10%] top-[10%] size-[270px] lg:size-[329.643px] rotate-[3.425deg] animate-circle-move rounded-full bg-[#622A9A] opacity-[0.5] blur-[64.88px]"></div>

        <div className="z-0 animation-delay-1 absolute -right-20 bottom-20 size-[370px] lg:size-[477px] rotate-[3.425deg] animate-circle-move rounded-full border bg-[#A5318A] opacity-[0.5] blur-[154px]"></div>
        <div className="z-0 animation-delay-2 absolute -bottom-[22%] right-0 size-[270px] lg:size-[329.643px] rotate-[3.425deg] animate-circle-move rounded-full bg-[#622A9A] opacity-[0.5] blur-[64.88px]"></div>
      </div>

      {/* security-first culture */}
      <div className="bg-[#13081C]">
        <div className="flex flex-col pt-[80px] xl:px-[140px] xl:pt-[168px] 2xl:px-[254px]">
          <div className="text-center text-[56px] text-xl font-medium leading-[65px] -tracking-[0.84px] text-white md:text-[42px]">
            Security-First Culture{" "}
          </div>

          <div className="relative w-full mix-blend-plus-lighter">
            <video
              src="/about-us/security-first-bg-video.mp4"
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(110.24%_110.16%_at_60.07%_91.93%,_rgba(0,0,0,0.00)_0%,_rgba(0,0,0,0.99)_100%)] xl:bg-[radial-gradient(37.42%_37.41%_at_60.23%_87.33%,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.99)_100%)]"></div>
            <div className="relative flex flex-col items-center gap-[37px] px-6 pb-[200px] pt-[50px] font-inter text-xl font-bold md:px-[110px] md:pb-[300px] md:pt-[104px] lg:px-[180px] xl:flex-row xl:items-start xl:px-[100px] xl:pb-[180px] xl:pt-[100px] 2xl:px-[198px] 2xl:pb-[200px] 2xl:pt-[140px]">
              {/* first card */}
              <div className="flex flex-col items-center gap-6 border border-[#878787] bg-[rgba(23,23,23,0.20)] px-9 py-10 backdrop-blur-[8px] md:px-[153px] md:py-[30px] xl:px-[94px] xl:py-[70px]">
                <div className="relative aspect-square size-10">
                  <Image
                    src={"/icons/enterprise-security.svg"}
                    alt="enterprise-security-icon"
                    fill
                    priority
                  />
                </div>
                <div className="flex flex-col items-center gap-[7px]">
                  <div className="text-center text-base text-[#E0E0E0] xl:text-xl">
                    Enterprise-Level Security
                  </div>
                  <div className="text-center text-base font-normal text-[#B2B2B2] xl:text-xl">
                    Built-in protocols to protect your data and systems.
                  </div>
                </div>
              </div>

              {/* second card */}
              <div className="flex flex-col items-center gap-6 border border-[#878787] bg-[rgba(23,23,23,0.20)] px-9 py-10 backdrop-blur-[8px] md:px-[153px] md:py-[30px] xl:px-[94px] xl:py-[70px]">
                <div className="relative aspect-square size-10">
                  <Image
                    src={"/icons/compliance-and-trust.svg"}
                    alt="enterprise-security-icon"
                    fill
                    priority
                  />
                </div>
                <div className="flex flex-col items-center gap-[7px]">
                  <div className="text-center text-base text-[#E0E0E0] xl:text-xl">
                    Compliance & Trust
                  </div>
                  <div className="text-center text-base font-normal text-[#B2B2B2] xl:text-xl">
                    Ensuring solutions meet industry standards and regulations.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* comprehensive digital solutions */}
      <div className="bg-[#13081C]">
        <div className="container relative flex max-w-full flex-col gap-[50px] overflow-hidden py-[80px] xl:py-[168px]">
          <div className="px-[50px] text-center text-xl font-medium md:leading-[65px] -tracking-[0.84px] text-white md:text-[42px] xl:text-[56px]">
            Comprehensive Digital Solutions
          </div>

          <div className="flex flex-col items-center justify-between gap-10 md:gap-[70px] xl:flex-row">
            <div className="flex flex-col items-center justify-between gap-10 md:flex-row xl:basis-[49%] xl:flex-col xl:gap-[50px]">
              <div className="flex flex-col items-center gap-[14px] md:items-start">
                <div className="relative aspect-square w-[47px]">
                  <Image
                    src={"/icons/ai-chatbot.svg"}
                    alt="custom software and ai chatbots"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col items-center gap-2 md:items-start xl:gap-[14px]">
                  <div className="text-base font-bold text-[#E0E0E0] xl:text-xl">
                    Custom Software & AI Chatbots
                  </div>
                  <div className="text-center text-sm font-normal text-[rgba(255,255,255,0.70)] md:text-left">
                    We develop tailored software and intelligent chatbots to
                    streamline operations and enhance customer engagement.
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-[14px] md:items-start">
                <div className="relative aspect-square size-[47px]">
                  <Image
                    src={"/icons/enterprise-crm-erp.svg"}
                    alt="enterprise-crm-erp"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col items-center gap-2 md:items-start xl:gap-[14px]">
                  <div className="text-base font-bold text-[#E0E0E0] xl:text-xl">
                    Enterprise CRM & ERP{" "}
                  </div>
                  <div className="text-center text-sm font-normal text-[rgba(255,255,255,0.70)] md:text-left">
                    Our enterprise-grade CRM and ERP systems future-proof your
                    business with scalable, integrated solutions.
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-square h-[297px] w-[340px] sm:h-[362px] sm:w-[406px] lg:h-[521px] lg:w-[584px] xl:h-[463px] xl:w-[519px]">
              <Image
                alt="digital-solutions"
                src={"/about-us/digital-solutions.svg"}
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      {/* ai integrated sysytems */}
      <div className="relative">
        <video
          src="/about-us/ai-system-bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute -top-0.5 bottom-0 left-0 right-0 bg-[radial-gradient(50.16%_49.97%_at_50%_93.32%,_rgba(0,0,0,0.00)_0%,_#000_100%)]"></div>
        <div className="container relative flex max-w-full flex-col items-center gap-[80px] py-[63px] md:py-[80px] xl:gap-[87px] xl:py-[168px]">
          <div className="text-center text-2xl font-medium leading-[65px] -tracking-[0.84px] text-white md:text-[42px] xl:text-[56px]">
            AI-Integrated Systems{" "}
          </div>
          {/* for tablet and desktop screens */}
          <div className="hidden md:block">
            <div className="relative aspect-square w-[274px] xl:w-[370px]">
              <Image
                src={"/about-us/ai-integrated-system.svg"}
                alt="ai-integrated-system"
                fill
                priority
              />
              <div className="absolute -right-[85%] top-[10%] flex w-[259px] flex-col items-start gap-1 text-[#D4DEF9] xl:-right-[80%] xl:top-[20%] xl:w-[321px]">
                <div className="text-xl font-bold">Predictive Analytics</div>
                <div className="text-base font-normal xl:text-xl">
                  Data-driven insights to anticipate trends and opportunities.
                </div>
              </div>

              <div className="absolute -right-[85%] bottom-0 flex w-[259px] flex-col items-start gap-1 text-[#D4DEF9] xl:-right-[70%] xl:w-[321px]">
                <div className="text-xl font-bold">Real-Time Insights</div>
                <div className="text-base font-normal xl:text-xl">
                  Instant access to critical business data for informed
                  decisions.
                </div>
              </div>

              <div className="absolute -left-[88%] top-[40%] flex w-[259px] flex-col items-end gap-1 text-[#D4DEF9] xl:-left-[80%] xl:w-[321px]">
                <div className="text-xl font-bold">Smart Automation</div>
                <div className="text-right text-base font-normal xl:text-xl">
                  Streamline workflows and reduce manual tasks.
                </div>
              </div>
            </div>
          </div>
          {/* For mobile screens */}
          <div className="flex flex-col items-center gap-[58px] md:hidden">
            <div className="flex flex-col items-center gap-1">
              <div className="relative h-[39px] w-[89px]">
                <Image
                  src={"/about-us/ai-integrated-system-1.svg"}
                  alt="ai-integrated-system-1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center gap-1 text-[#D4DEF9]">
                <div className="text-base font-bold md:text-xl">
                  Smart Automation
                </div>
                <div className="text-center text-base font-normal xl:text-xl">
                  Streamline workflows and reduce manual tasks.
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="relative h-[39px] w-[89px]">
                <Image
                  src={"/about-us/ai-integrated-system-2.svg"}
                  alt="ai-integrated-system-2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center gap-1 text-[#D4DEF9]">
                <div className="text-base font-bold md:text-xl">
                  Predictive Analytics
                </div>
                <div className="text-center text-base font-normal xl:text-xl">
                  Data-driven insights to anticipate trends and opportunities.
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="relative h-[39px] w-[89px]">
                <Image
                  src={"/about-us/ai-integrated-system-3.svg"}
                  alt="ai-integrated-system-3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center gap-1 text-[#D4DEF9]">
                <div className="text-base font-bold md:text-xl">
                  Real-Time Insights
                </div>
                <div className="text-center text-base font-normal xl:text-xl">
                  Instant access to critical business data for informed
                  decisions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
