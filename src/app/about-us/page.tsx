import { TbTargetArrow } from "react-icons/tb";
import Image from "next/image";
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
      {/* our vision */}
      {/* <div className="bg-[#13081C]">
        <div className="flex flex-row px-[382px] py-[190px]">
          <div className="">
            <div className="flex flex-col items-center gap-[25px] border-r p-[27px]">
              <div className="relative aspect-square w-[72px]">
                <Image src={"/icons/vision.svg"} alt="vision-image" fill />
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="text-[28px] font-medium leading-[48px] text-[#E0E0E0]">
                  Our Vision
                </div>
                <div className="text-base text-[rgba(255,255,255,0.70)]">
                  Provide highest-quality digital services globally, driving
                  progress and excellence.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[25px] border-r">
            <div className="relative aspect-square w-[72px]">
              <Image src={"/icons/mission.svg"} alt="vision-image" fill />
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="text-[28px] font-medium leading-[48px] text-[#E0E0E0]">
                Our Mission
              </div>
              <div className="text-base text-[rgba(255,255,255,0.70)]">
                Transparent, collaborative process ensuring tailored, tested,
                and trusted solutions.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[25px]">
            <div className="relative aspect-square w-[72px]">
              <Image src={"/icons/approach.svg"} alt="vision-image" fill />
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="text-[28px] font-medium leading-[48px] text-[#E0E0E0]">
                Our Approach
              </div>
              <div className="text-base text-[rgba(255,255,255,0.70)]">
                Provide highest-quality digital services globally, driving
                progress and excellence.
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* vision-led strategy section */}
      <div className="relative flex flex-col gap-[70px] overflow-hidden px-[387px] py-[103px]">
        <div className="text-center text-[56px] font-medium leading-[65px] -tracking-[0.84px] text-white">
          Vision-Led Strategy
        </div>

        <div className="flex flex-row items-center justify-between">
          <div className="flex basis-[49%] flex-col">
            <div className="flex flex-col items-start gap-[15px] px-6 py-10">
              <TbTargetArrow size={47} color="#A9A9A9" />
              <div className="flex flex-col gap-[3px]">
                <div className="text-xl font-bold text-[#E0E0E0]">
                  Aligned with Your Goals
                </div>
                <div className="text-base font-normal text-[rgba(255,255,255,0.70)]">
                  Every project is guided by your business vision and long-term
                  objectives.
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-[15px] px-6 py-10">
              <div className="relative aspect-square size-[47px]">
                <Image
                  src={"/icons/collaborate.svg"}
                  alt="collaborate-image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[3px]">
                <div className="text-xl font-bold text-[#E0E0E0]">
                  Collaborative Process{" "}
                </div>
                <div className="text-base font-normal text-[rgba(255,255,255,0.70)]">
                  We ensure transparency and partnership from discovery through
                  deployment.
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-square w-[432px]">
            <Image
              src={"/about-us/strategy.png"}
              alt="strategy image"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="absolute -left-[10%] -top-1/3 size-[477px] rotate-[3.425deg] animate-blob rounded-full bg-[#A5318A] opacity-[0.5] blur-[154px]"></div>
        <div className="absolute -left-[10%] top-[10%] size-[329.643px] rotate-[3.425deg] animate-blob rounded-full bg-[#622A9A] opacity-[0.5] blur-[64.88px]"></div>

        <div className="absolute -right-20 bottom-12 size-[477px] rotate-[3.425deg] animate-blob rounded-full border bg-[#A5318A] opacity-[0.5] blur-[154px]"></div>
        <div className="absolute -bottom-[22%] right-0 size-[329.643px] rotate-[3.425deg] animate-blob rounded-full bg-[#622A9A] opacity-[0.5] blur-[64.88px]"></div>
      </div>

      {/* security-first culture */}
      <div className="bg-[#13081C]">
        <div className="flex flex-col px-[254px] py-[120px]">
          <div className="text-center text-[56px] font-medium leading-[65px] -tracking-[0.84px] text-white">
            Security-First Culture{" "}
          </div>

          <div className="relative mix-blend-plus-lighter">
            <video
              src="/about-us/security-first-bg-video.mp4"
              muted
              loop
              autoPlay
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(37.42%_37.41%_at_60.23%_87.33%,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.99)_100%)]"></div>
            <div className="relative flex flex-row items-start gap-6 px-[198px] pb-[200px] pt-[140px] font-inter text-xl font-bold">
              {/* first card */}
              <div className="flex flex-col items-center gap-4 border border-[#878787] bg-[rgba(23,23,23,0.20)] px-[94px] py-[70px] backdrop-blur-[8px]">
                <div className="relative aspect-square size-10">
                  <Image
                    src={"/icons/enterprise-security.svg"}
                    alt="enterprise-security-icon"
                    fill
                  />
                </div>
                <div className="flex flex-col items-center gap-[7px]">
                  <div className="text-[#E0E0E0]">
                    Enterprise-Level Security
                  </div>
                  <div className="text-center text-xl font-normal text-[#B2B2B2]">
                    Built-in protocols to protect your data and systems.
                  </div>
                </div>
              </div>

              {/* second card */}
              <div className="flex flex-col items-center gap-4 border border-[#878787] bg-[rgba(23,23,23,0.20)] px-[94px] py-[70px] backdrop-blur-[8px]">
                <div className="relative aspect-square size-10">
                  <Image
                    src={"/icons/compliance-and-trust.svg"}
                    alt="enterprise-security-icon"
                    fill
                  />
                </div>
                <div className="flex flex-col items-center gap-[7px]">
                  <div className="text-xl text-[#E0E0E0]">
                    Compliance & Trust
                  </div>
                  <div className="text-center text-xl font-normal text-[#B2B2B2]">
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
        <div className="relative flex flex-col gap-[70px] overflow-hidden px-[387px] py-[103px]">
          <div className="text-center text-[56px] font-medium leading-[65px] -tracking-[0.84px] text-white">
            Comprehensive Digital Solutions
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="flex basis-[49%] flex-col">
              <div className="flex flex-col items-start gap-[14px] px-6 py-10">
                <div className="relative aspect-square w-[47px]">
                  <Image
                    src={"/icons/ai-chatbot.svg"}
                    alt="custom software and ai chatbots"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[14px]">
                  <div className="text-xl font-bold text-[#E0E0E0]">
                    Custom Software & AI Chatbots
                  </div>
                  <div className="text-sm font-normal text-[rgba(255,255,255,0.70)]">
                    We develop tailored software and intelligent chatbots to
                    streamline operations and enhance customer engagement.
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-[14px] px-6 py-10">
                <div className="relative aspect-square size-[47px]">
                  <Image
                    src={"/icons/enterprise-crm-erp.svg"}
                    alt="enterprise-crm-erp"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[14px]">
                  <div className="text-xl font-bold text-[#E0E0E0]">
                    Enterprise CRM & ERP{" "}
                  </div>
                  <div className="text-sm font-normal text-[rgba(255,255,255,0.70)]">
                    Our enterprise-grade CRM and ERP systems future-proof your
                    business with scalable, integrated solutions.
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-square w-[432px]"></div>
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
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(50.16%_49.97%_at_50%_93.32%,_rgba(0,0,0,0.00)_0%,_#000_100%)]"></div>
        <div className="relative flex flex-col items-center gap-[87px] py-[168px]">
          <div className="text-center text-[56px] font-medium leading-[65px] -tracking-[0.84px] text-white">
            AI-Integrated Systems{" "}
          </div>
          <div className="relative aspect-square w-[370px]">
            <Image
              src={"/about-us/ai-integrated-system.svg"}
              alt="ai-integrated-system"
              fill
            />
            <div className="absolute -right-[80%] top-[20%] flex w-[321px] flex-col items-start gap-1 text-[#D4DEF9]">
              <div className="text-xl font-bold">Predictive Analytics</div>
              <div className="text-xl font-normal">
                Data-driven insights to anticipate trends and opportunities.
              </div>
            </div>

            <div className="absolute -right-[70%] bottom-0 flex w-[321px] flex-col items-start gap-1 text-[#D4DEF9]">
              <div className="text-xl font-bold">Real-Time Insights</div>
              <div className="text-xl font-normal">
                Instant access to critical business data for informed decisions.
              </div>
            </div>

            <div className="absolute -left-[80%] top-[40%] flex w-[321px] flex-col items-end gap-1 text-[#D4DEF9]">
              <div className="text-xl font-bold">Smart Automation</div>
              <div className="text-right text-xl font-normal">
                Streamline workflows and reduce manual tasks.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
