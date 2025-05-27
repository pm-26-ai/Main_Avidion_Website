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
      <div className="flex flex-col rounded-[14.75px] border border-[rgba(255,255,255,0.15)] bg-[rgba(21,21,21,0.29)] font-inter backdrop-blur-[34.146px]">
        <video
          src={details.videoUrl}
          className="h-full w-full rounded-tl-[14.75px] rounded-tr-[14.75px] object-cover"
          autoPlay
          loop
          muted
        />
        <div className="flex flex-col gap-4 px-[25px] py-8">
          <div className="h-[62px] text-xl font-bold text-[#E0E0E0]">
            {details.title}
          </div>
          <div className="text-base font-normal text-[#B3B3B3]">
            {details.description}
          </div>
        </div>
      </div>
    </>
  );
}
