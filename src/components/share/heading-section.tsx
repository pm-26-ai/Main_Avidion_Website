import { cn } from "@/lib/utils";

type HeadingSectionProps = {
  mainHeading: string;
  subContent: string;
  mainClassName?: string;
  subClassName?: string;
  badgeContent?: string;
  badgeIcon?: React.ReactNode;
};
export function HeadingSection({
  mainHeading,
  subContent,
  mainClassName,
  subClassName,
  badgeContent,
  badgeIcon,
}: HeadingSectionProps) {
  return (
    <div className="mb-10 md:mb-[57px] flex flex-col gap-3 md:gap-5 font-inter text-white">
      {/* mainHeading */}
      <div
        className={`${badgeContent ? `flex w-full flex-row items-center justify-between` : `w-full`}`}
      >
        <div
          className={cn(
            mainClassName,
            "text-xl font-medium -tracking-[0.84px] sm:text-2xl md:text-4xl lg:text-[40px] xl:text-5xl 2xl:text-[56px] 2xl:leading-[65px]",
          )}
        >
          {mainHeading}
        </div>

        {badgeContent && (
          <div className="flex flex-row items-center gap-[5px] rounded-[26px] border border-[#535353] px-[32px] py-[9px] font-inter text-sm font-normal text-[rgba(255,255,255,0.61)]">
            {badgeContent}
            {badgeIcon}
          </div>
        )}
      </div>

      {/* subHeading */}
      <div
        className={cn(
          subClassName,
          "text-sm font-normal md:text-base lg:text-lg xl:text-[20px] xl:leading-[31px]",
        )}
      >
        {subContent}
      </div>
    </div>
  );
}
