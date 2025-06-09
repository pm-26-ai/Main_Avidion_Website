import { tapeSection } from "@/data";
import Image from "next/image";
export default function InfiniteScrollTape() {
  return (
    <>
    <div className="relative ">
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,_#090B0D_6.13%,_rgba(9,_11,_13,_0.00)_46.81%,_#090B0D_95.76%)]" />

      <div className="relative w-full overflow-hidden">
        {/* Your scroll tape */}
        <div className="w-max flex animate-infinite-scroll gap-[10px] whitespace-nowrap md:gap-[10px] xl:gap-[30px]">
          {[...tapeSection, ...tapeSection].map((item, index) => (
            <div key={index} className="flex flex-shrink-0 items-center">
              <div className="relative h-[20px] md:h-[30px] w-[90px] md:w-[164px] xl:h-[45px] xl:w-[200px]">
                <Image
                  src={item.url}
                  alt="tape-section-images"
                  className="w-full object-contain"
                  fill
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
