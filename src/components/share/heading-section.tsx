import { cn } from "@/lib/utils";

type HeadingSectionProps = {
  mainHeading: string;
  subContent: string;
  mainClassName?: string;
  subClassName?: string;
};
export function HeadingSection({
  mainHeading,
  subContent,
  mainClassName,
  subClassName,
}: HeadingSectionProps) {
  return (
    <div className="font-inter mb-10 flex flex-col gap-5 text-white">
      {/* mainHeading */}
      <div
        className={cn(
          mainClassName,
          "text-xl font-medium -tracking-[0.84px] sm:text-2xl md:text-4xl lg:text-[40px] xl:text-5xl 2xl:text-[56px] 2xl:leading-[65px]",
        )}
      >
        {mainHeading}
      </div>
      {/* subHeading */}
      <div
        className={cn(
          subClassName,
          "text-sm font-normal -tracking-[0.002px] md:text-base lg:text-lg xl:text-[20px] xl:leading-[31px]",
        )}
      >
        {subContent}
      </div>
    </div>
  );
}
