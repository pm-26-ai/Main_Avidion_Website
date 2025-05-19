import { TbTargetArrow } from "react-icons/tb";
import Image from "next/image";
const AboutUs = () => {
  return (
    <>
      {/* vision-led strategy section */}
      <div className="relative flex flex-col gap-[70px] overflow-hidden px-[387px] py-[103px] font-inter">
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
      <div className="relative flex flex-col gap-[70px] px-[452px] py-[103px] font-inter">
        <div className="text-center text-[56px] font-medium leading-[65px] -tracking-[0.84px] text-white">
          Security-First Culture{" "}
        </div>

        <div className="flex flex-row items-start gap-6 font-inter text-xl font-bold">
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
              <div className="text-[#E0E0E0]">Enterprise-Level Security</div>
              <div className="text-center text-xl font-normal text-[#B2B2B2]">
                Built-in protocols to protect your data and systems.
              </div>
            </div>
          </div>

          {/* second card */}
          <div className="flex flex-col items-center gap-4 border border-[#878787] bg-[rgba(23,23,23,0.20)] px-[94px] py-[70px] pb-10 backdrop-blur-[8px]">
            <div className="relative aspect-square size-10">
              <Image
                src={"/icons/compliance-and-trust.svg"}
                alt="enterprise-security-icon"
                fill
              />
            </div>
            <div className="flex flex-col items-center gap-[7px]">
              <div className="text-xl text-[#E0E0E0]">Compliance & Trust</div>
              <div className="text-center text-xl font-normal text-[#B2B2B2]">
                Ensuring solutions meet industry standards and regulations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
