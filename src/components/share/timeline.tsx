'use client'
import { howWeWork } from "@/data";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function Timeline() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");

  return (
    <>
      {howWeWork.map((item, index) => (
        <div key={index} className="relative mb-14 flex w-full">
          {isSmallDevice ? (
            <>
              <div className="flex flex-col items-center gap-[14px]">
                <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#656565] bg-transparent bg-[linear-gradient(90deg,_rgba(64,15,54,0.40)_0%,_rgba(37,25,71,0.40)_100%)] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.40)] backdrop-blur-[7px]">
                  <span className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.41)_100%)] p-2 shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
                    <item.icon className="size-6" color="white" />
                  </span>
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
            </>
          ) : (
            <>
              {index % 2 === 0 ? (
                <>
                  {/* Left side content */}
                  <div className="mr-20 w-1/2 text-right lg:mr-24">
                    <div className="text-base font-medium leading-[31px] text-white">
                      {item.title}
                    </div>
                    <div className="text-base font-normal text-[rgba(255,255,255,0.60)]">
                      {item.description}
                    </div>
                  </div>

                  {/* Center circle */}
                  <div className="absolute left-1/2 flex h-[64px] w-[64px] -translate-x-1/2 items-center justify-center rounded-full border border-[#656565] bg-transparent bg-[linear-gradient(90deg,_rgba(64,15,54,0.40)_0%,_rgba(37,25,71,0.40)_100%)] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.40)] backdrop-blur-[7px]">
                    <span className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.41)_100%)] p-2 shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
                      <item.icon className="size-6" color="white" />
                    </span>
                  </div>

                  {/* Empty right side */}
                  <div className="w-1/2"></div>
                </>
              ) : (
                <>
                  {/* Empty left side */}
                  <div className="w-1/2"></div>

                  {/* Center circle */}
                  <div className="absolute left-1/2 flex h-[64px] w-[64px] -translate-x-1/2 items-center justify-center rounded-full border border-[#656565] bg-[linear-gradient(90deg,_rgba(64,15,54,0.40)_0%,_rgba(37,25,71,0.40)_100%)] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.40)] backdrop-blur-[7px]">
                    <span className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.41)_100%)] p-2 shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
                      <item.icon className="size-6" color="white" />
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
              )}
            </>
          )}
        </div>
      ))}
    </>
  );
}
