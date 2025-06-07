import { tapeSection } from "@/data";
import Image from "next/image";
export default function InfiniteScrollTape() {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        {/* Your scroll tape */}
        <div className="flex animate-infinite-scroll gap-[10px] whitespace-nowrap md:gap-[20px] xl:gap-[50px]">
          {[...tapeSection, ...tapeSection].map((item, index) => (
            <div key={index} className="flex flex-shrink-0 items-center">
              <div className="relative h-[20px] md:h-[30px] w-[90px] md:w-[164px] xl:h-[45px] xl:w-[200px]">
                <Image
                  src={item.url}
                  alt="tape-section-images"
                  className="w-full object-contain"
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
