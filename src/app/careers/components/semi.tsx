import Image from "next/image";
import { useMemo } from "react";
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
const SemiCircleTimeline = () => {
  const radius = 200;
  const centerX = radius;
  const centerY = radius;
  const total = data.length;

  const positionedItems = useMemo(() => {
    return data.map((item, index) => {
      const angleDeg = (180 / (total - 1)) * index;
      const angleRad = (angleDeg * Math.PI) / 180;
      const x = centerX + radius * Math.cos(angleRad);
      const y = centerY - radius * Math.sin(angleRad);

      return {
        ...item,
        left: x,
        top: y,
      };
    });
  }, [data, radius, centerX, centerY]);

  return (
    
    <div className="relative mx-auto mt-20 h-[400px] w-[400px] rounded-full bg-[#14041e]">
      {/* White semicircle line */}
      <svg className="absolute left-0 top-0" width="400" height="200">
        <path
          d="M0,200 A200,200 0 0,1 400,200"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
        />
      </svg>

      {/* Timeline items */}
      {positionedItems.map((item, index) => (
        <div
          key={index}
          className="absolute flex flex-col items-center text-center"
          style={{
            left: `${item.left}px`,
            top: `${item.top}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border-[1.53px] border-[#656565] bg-[linear-gradient(90deg,_rgba(64,15,54,0.40)_0%,_rgba(37,15,71,0.90)_100%)] shadow-[inset_0_0_9.08px_4.54px_rgba(255,255,255,0.25)] backdrop-blur-[10.5px]">
            <span className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_#501444_0%,_#391671_100%)] p-2 shadow-[inset_0_0_5.482px_2.741px_rgba(255,255,255,0.25)] backdrop-blur-[6.3px]">
              <div className="relative aspect-square size-6">
                <Image src={item.icon} fill alt="recruitment-icon" priority />
              </div>
            </span>
          </div>

          <div className="mt-3 text-base font-medium leading-[31px] text-white">
            {item.title}
          </div>
          <div className="text-base font-normal text-[rgba(255,255,255,0.60)]">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SemiCircleTimeline;
