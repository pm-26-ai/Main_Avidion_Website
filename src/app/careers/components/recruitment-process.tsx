import Image from "next/image";
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
  return (
    <>
      <div className="bg-[#030104]">
        <div className="px-[206px] pt-[80px]">
          <div className="relative mix-blend-screen">
            <div className="animate-circle-scale absolute left-0 top-0 size-[930px] rounded-full bg-[linear-gradient(90deg,_#3D065F_0%,_#5F27BD_100%)] opacity-[0.28] blur-[344px]"></div>
            <div className="animate-circle-scale absolute right-0 top-0 size-[930px] rounded-full bg-[linear-gradient(120deg,_rgba(255,115,217,0.80)_0%,_rgba(234,62,187,0.80)_86.07%)] opacity-[0.28] blur-[344px]"></div>
            <div className="relative flex flex-col gap-[100px]">
              <div className="pt-[38px] text-center text-[56px] font-medium leading-[65px] text-white">
                Recruitment Process
              </div>
              <div className="flex items-center justify-center pb-[95px]">
                <div className="rounded-full border-[5.867px] border-[#AFAFAF] p-12">
                  <div className="relative flex aspect-square w-[258px] items-center justify-center">
                    <Image
                      src={"/careers/rounded-circle.svg"}
                      alt="rounded-circle"
                      className="rotate-[45deg]"
                      fill
                    />
                    <div className="relative aspect-square w-[175px]">
                      <Image src={"/careers/user.svg"} alt="user-image" fill />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col items-center">
                <div
                  className="absolute h-full w-[5.867PX] bg-[#D9D9D9]"
                  style={{ height: "calc(100% - 120px)" }}
                ></div>
                {data.map((item, index) => (
                  <div key={index} className="relative mb-20 flex w-full">
                    <>
                      {/* Empty left side */}
                      <div className="w-1/2"></div>

                      {/* Center circle */}
                      <div className="absolute left-1/2 flex h-[64px] w-[64px] -translate-x-1/2 items-center justify-center rounded-full border border-[#656565] bg-[linear-gradient(90deg,_rgba(64,15,54,0.40)_0%,_rgba(37,25,71,0.40)_100%)] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.40)] backdrop-blur-[7px]">
                        <span className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.41)_100%)] p-2 shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
                          <div className="relative aspect-square size-6">
                            <Image
                              src={item.icon}
                              fill
                              alt="recruitment-icons"
                            />
                          </div>
                        </span>
                      </div>

                      {/* Right side content */}
                      <div className="ml-20 w-1/2 lg:ml-24">
                        <div className="text-base font-medium leading-[31px] text-white">
                          {item.title}
                        </div>
                        <div className="text-base font-normal text-[rgba(255,255,255,0.60)]">
                          {item.description}
                        </div>
                      </div>
                    </>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
