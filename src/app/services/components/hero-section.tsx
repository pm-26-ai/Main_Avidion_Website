import Image from "next/image";
export default function HeroSection() {
  return (
    <>
      <div className="relative">
        {/* video behind the content */}
        <video
          src="/inner-hero-section-bg.mp4"
          controls={false}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* radial gradient overlay over the video */}
        <div className="absolute inset-0 animate-gradient-radial"></div>
        {/* content */}
        <div className="relative px-6 pt-[134px] md:pt-[160px] xl:pt-[196px] md:px-[57px] lg:px-[168px] xl:px-[268px] 2xl:px-[488px]">
          <div className="flex flex-col items-center gap-[20px] font-inter">
            <div className="flex flex-col gap-0.5 text-white md:gap-[10px] xl:gap-[30px]">
              <div className="text-center text-[26px] font-medium leading-[65px] -tracking-[0.54px] md:text-[40px] md:-tracking-[0.84px] xl:text-[56px]">
                Our Services
              </div>
              <div className="text-center text-sm font-normal md:text-base xl:text-xl">
                We offer a comprehensive range of digital solutions including
                Website Development, 3D Websites, AI Integration, AI Chatbot,
                Mobile App Development, ERP Development, CRM, and WMS.
              </div>
            </div>
            <div className="relative h-[350px] w-[306px] sm:h-[465px] sm:w-[421px] md:h-[621px] md:w-[612px] xl:h-[690px] xl:w-[702px]">
              <Image
                className="object-cover"
                src={"/inner-hero-section-bg.png"}
                alt="hero-section-background-image"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
