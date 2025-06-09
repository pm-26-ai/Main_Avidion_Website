type IPortfolioCardProps = {
  id: number;
  videoUrl: string;
  title: string;
  description: string;
};
export default function PortfolioCard({
  details,
}: {
  details: IPortfolioCardProps;
}) {
  return (
    <>
      <div className="overflow-hidden flex flex-col rounded-[14.75px] border border-[rgba(255,255,255,0.15)] bg-[rgba(21,21,21,0.29)] font-inter backdrop-blur-[34.146px]">
        <video
          src={details.videoUrl}
          className="h-full w-full rounded-tl-[14.75px] rounded-tr-[14.75px] object-cover scale-[1.15]"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="flex flex-col gap-1.5 px-[17px] py-[17px] md:py-[19px] xl:gap-4 xl:px-[25px] xl:py-8">
          <div className="=text-base font-bold text-[#E0E0E0] h-[72px] xl:text-xl">
            {details.title}
          </div>
          <div className="text-sm font-normal text-[#B3B3B3] xl:text-base">
            {details.description}
          </div>
        </div>
      </div>
    </>
  );
}
