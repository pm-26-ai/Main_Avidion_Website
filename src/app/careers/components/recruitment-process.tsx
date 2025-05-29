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
          <div className="relative">
            <div className="absolute left-0 top-0 size-[930px] animate-circle-scale rounded-full bg-[linear-gradient(90deg,_#3D065F_0%,_#5F27BD_100%)] opacity-[0.28] blur-[344px]"></div>
            <div className="absolute right-0 top-0 size-[930px] animate-circle-scale rounded-full bg-[linear-gradient(120deg,_rgba(255,115,217,0.80)_0%,_rgba(234,62,187,0.80)_86.07%)] opacity-[0.28] blur-[344px]"></div>
            <div className="relative flex flex-col gap-[80px]">
              <div className="pt-[38px] text-center text-[56px] font-medium leading-[65px] text-white">
                Recruitment Process
              </div>
              <div className="flex items-center justify-center pb-[95px]">
                <div className="relative">
                  <div className="relative h-[630px] w-[800px]">
                    <Image
                      src={"/careers/circle.png"}
                      alt="recruitment-process"
                      fill
                      className="object-cover"
                      quality={100}
                    />
                  </div>
                  <div className="absolute left-[27%] top-[23%] rounded-full border-[5.867px] border-[#AFAFAF] p-12">
                    <div className="relative flex aspect-square w-[258px] items-center justify-center">
                      <Image
                        src={"/careers/rounded-circle.svg"}
                        alt="rounded-circle"
                        className="z-10 rotate-[45deg]"
                        fill
                      />
                      <div className="absolute -bottom-[34%] left-[32%] aspect-square w-[99.7px]">
                        <Image
                          src={"/careers/widened-line.svg"}
                          alt="user-image"
                          className="z-0"
                          fill
                        />
                      </div>
                      <div className="relative aspect-square w-[175px]">
                        <Image
                          src={"/careers/user.svg"}
                          alt="user-image"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -left-28 bottom-24 flex w-[170px] flex-col items-end justify-end gap-1.5">
                    <div className="text-xl font-bold text-[#FEFEFE]">
                      Apply
                    </div>
                    <div className="text-right text-base font-normal text-[#989898]">
                      Submit your resume via our website
                    </div>
                  </div>

                  <div className="absolute -left-1/4 bottom-1/2 flex w-[235px] flex-col items-end justify-end gap-1.5">
                    <div className="text-xl font-bold text-[#FEFEFE]">
                      HR Screening
                    </div>
                    <div className="text-right text-base font-normal text-[#989898]">
                      Introductory call to understand your profile and fit.
                    </div>
                  </div>

                  <div className="absolute -left-[15%] top-0 flex w-[260px] flex-col items-end justify-end gap-1.5">
                    <div className="text-xl font-bold text-[#FEFEFE]">
                      Managerial Round
                    </div>
                    <div className="text-right text-base font-normal text-[#989898]">
                      Conversation focused on team fit, values, and culture
                      alignment.
                    </div>
                  </div>

                  <div className="items-left absolute -right-[15%] top-0 flex w-[260px] flex-col gap-1.5">
                    <div className="text-xl font-bold text-[#FEFEFE]">
                      Technical Round
                    </div>
                    <div className="text-left text-base font-normal text-[#989898]">
                      Role-specific test or technical interview.
                    </div>
                  </div>

                  <div className="items-left absolute -right-1/4 bottom-1/2 flex w-[235px] flex-col gap-1.5">
                    <div className="text-xl font-bold text-[#FEFEFE]">
                      Final Interview
                    </div>
                    <div className="text-base font-normal text-[#989898]">
                      Discussion with team leads or leadership.
                    </div>
                  </div>

                  <div className="absolute -right-1/4 bottom-24 flex w-[230px] flex-col items-start gap-1.5">
                    <div className="text-xl font-bold text-[#FEFEFE]">
                      Offer & Onboarding
                    </div>
                    <div className="text-base font-normal text-[#989898]">
                      Receive offer and start your journey with Avidion!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
