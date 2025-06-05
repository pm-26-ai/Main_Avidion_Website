"use client";
import Image from "next/image";
import { useMediaQuery } from "@uidotdev/usehooks";

const data = [
  {
    title: "Apply",
    description: "Submit your resume via our website",
    icon: "/careers/recruitment-icons/apply.svg",
  },
  {
    title: "HR Screening",
    description: "Introductory call to understand your profile and fit.",
    icon: "/careers/recruitment-icons/hr-screening.svg",
  },
  {
    title: "Managerial Round",
    description:
      "Conversation focused on team fit, values, and culture alignment.",
    icon: "/careers/recruitment-icons/managerial-round.svg",
  },
  {
    title: "Technical Round",
    description: "Role-specific test or technical interview.",
    icon: "/careers/recruitment-icons/technical-round.svg",
  },
  {
    title: "Final Interview",
    description: "Discussion with team leads or leadership.",
    icon: "/careers/recruitment-icons/final-interview.svg",
  },
  {
    title: "Offer & Onboarding",
    description: "Receive offer and start your journey with Avidion!",
    icon: "/careers/recruitment-icons/offer-and-onboarding.svg",
  },
];
export default function RecruitmentProcess() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");
  return (
    <>
      <div className="overflow-hidden bg-[#030104]">
        <div className="px-9 py-[46px] md:px-[50px] md:py-[80px] xl:px-[206px]">
          <div className="relative">
            <div className="absolute left-0 top-[30%] size-[430px] animate-blob rounded-full bg-[linear-gradient(90deg,_#3D065F_0%,_#5F27BD_100%)] opacity-[0.35] blur-[112px] will-change-transform md:top-0 md:size-[730px]"></div>
            <div className="animate-blob-2 absolute -right-1/4 top-0 size-[430px] rounded-full bg-[linear-gradient(120deg,_rgba(255,115,217,0.80)_0%,_rgba(234,62,187,0.80)_86.07%)] opacity-[0.28] blur-[112px] will-change-transform md:right-0 md:size-[730px]"></div>
            <div className="relative flex flex-col gap-[50px] xl:gap-[80px]">
              <div className="pt-[17px] text-center text-2xl font-medium leading-[65px] text-white md:pt-[38px] md:text-[42px] xl:text-[56px]">
                Recruitment Process
              </div>
              {isSmallDevice ? (
                <>
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-[14px]"
                    >
                      <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#656565] bg-transparent bg-[linear-gradient(90deg,_rgba(64,15,54,0.40)_0%,_rgba(37,25,71,0.40)_100%)] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.40)] backdrop-blur-[7px]">
                        <div className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.41)_100%)] p-2 shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
                          <div className="relative aspect-square size-6">
                            <Image alt="icons" src={item.icon} fill priority />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-base font-medium leading-[31px] text-white">
                          {item.title}
                        </div>
                        <div className="text-center text-base font-normal text-[rgba(255,255,255,0.60)]">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="flex items-center justify-center pb-[95px]">
                  <div className="relative">
                    <div className="relative h-[342px] w-[379px] xl:h-[630px] xl:w-[800px]">
                      <Image
                        src={"/careers/circle.png"}
                        alt="recruitment-process"
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                      />
                    </div>
                    <div className="left-[22.8%] top-[23%] rounded-full border-[5.867px] border-[#AFAFAF] p-6 md:absolute xl:left-[27%] xl:top-[23%] xl:p-12">
                      <div className="relative flex aspect-square w-[152px] items-center justify-center xl:w-[258px]">
                        <Image
                          src={"/careers/rounded-circle.svg"}
                          alt="rounded-circle"
                          className="z-10 rotate-[45deg]"
                          fill
                          priority
                        />
                        <div className="absolute -bottom-[34%] left-[32%] aspect-square w-[58.79px] xl:w-[99.7px]">
                          <Image
                            src={"/careers/widened-line.svg"}
                            alt="user-image"
                            className="z-0"
                            fill
                            priority
                          />
                        </div>
                        <div className="relative aspect-square w-[103px] xl:w-[175px]">
                          <Image
                            src={"/careers/user.svg"}
                            alt="user-image"
                            fill
                            priority
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -left-28 bottom-16 flex w-[118px] flex-col items-end justify-end gap-1.5 xl:bottom-24 xl:w-[170px]">
                      <div className="text-sm font-bold text-[#FEFEFE] xl:text-xl">
                        Apply
                      </div>
                      <div className="text-right text-xs font-normal text-[#989898] xl:text-base">
                        Submit your resume via our website
                      </div>
                    </div>

                    <div className="absolute -left-[43%] bottom-1/2 flex w-[161px] flex-col items-end justify-end gap-1.5 xl:-left-1/4 xl:w-[235px]">
                      <div className="text-sm font-bold text-[#FEFEFE] xl:text-xl">
                        HR Screening
                      </div>
                      <div className="text-right text-xs font-normal text-[#989898] xl:text-base">
                        Introductory call to understand your profile and fit.
                      </div>
                    </div>

                    <div className="absolute -left-[45%] top-0 flex w-[218px] flex-col items-end justify-end gap-1.5 xl:-left-[15%] xl:w-[260px]">
                      <div className="text-sm font-bold text-[#FEFEFE] xl:text-xl">
                        Managerial Round
                      </div>
                      <div className="text-right text-xs font-normal text-[#989898] xl:text-base">
                        Conversation focused on team fit, values, and culture
                        alignment.
                      </div>
                    </div>

                    <div className="items-left absolute -right-[30%] top-0 flex w-[170px] flex-col gap-1.5 xl:-right-[15%] xl:w-[260px]">
                      <div className="text-sm font-bold text-[#FEFEFE] xl:text-xl">
                        Technical Round
                      </div>
                      <div className="text-left text-xs font-normal text-[#989898] xl:text-base">
                        Role-specific test or technical interview.
                      </div>
                    </div>

                    <div className="items-left absolute -right-[43%] bottom-1/2 flex w-[163px] flex-col gap-1.5 xl:-right-1/4 xl:w-[235px]">
                      <div className="text-sm font-bold text-[#FEFEFE] xl:text-xl">
                        Final Interview
                      </div>
                      <div className="text-xs font-normal text-[#989898] xl:text-base">
                        Discussion with team leads or leadership.
                      </div>
                    </div>

                    <div className="absolute -right-40 bottom-16 flex w-[156px] flex-col items-start gap-1.5 xl:-right-1/4 xl:bottom-24 xl:w-[230px]">
                      <div className="text-sm font-bold text-[#FEFEFE] xl:text-xl">
                        Offer & Onboarding
                      </div>
                      <div className="text-xs font-normal text-[#989898] xl:text-base">
                        Receive offer and start your journey with Avidion!
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
