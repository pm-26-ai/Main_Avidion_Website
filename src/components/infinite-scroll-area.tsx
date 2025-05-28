import { tapeSection } from "@/data";
export default function InfiniteScrollTape() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="animate-infinite-scroll flex gap-3">
          {[...tapeSection, ...tapeSection, ...tapeSection, ...tapeSection].map(
            (item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="whitespace-nowrap text-sm text-white">
                  {item.content}
                </div>
                <div className="size-1 rounded-full bg-white/50"></div>
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
}
