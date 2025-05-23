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
            <div className="animate-circle-scale absolute left-0 top-0 size-[930px] rounded-full bg-[linear-gradient(90deg,_#3D065F_0%,_#5F27BD_100%)] opacity-[0.28] blur-[344px]"></div>
            <div className="animate-circle-scale absolute right-0 top-0 size-[930px] rounded-full bg-[linear-gradient(120deg,_rgba(255,115,217,0.80)_0%,_rgba(234,62,187,0.80)_86.07%)] opacity-[0.28] blur-[344px]"></div>
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
                      <div className="absolute -bottom-[34%] left-[33%] aspect-square w-[99.7px]">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
