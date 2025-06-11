import InfiniteScrollTape from "@/components/infinite-scroll-area";

export default function Heroo() {
  return (
    <>
      <div className="lg:bg-[#090B0D]">
        <div className="relative h-[460px] overflow-hidden sm:h-[515px] md:h-[1190px] xl:h-[1234px]">
          <div className="absolute left-[30px] top-[33.5%] scale-[1.6] sm:top-[35%] md:left-[110px] md:top-[25%] md:scale-[1.86] lg:top-[16%] lg:scale-[1.77] xl:top-[8%] xl:scale-[1.4] 2xl:left-[220px] 2xl:top-0 2xl:scale-[1.22]">
            <video
              src={"/hero-section/bg-hero-mobile.mp4"}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full object-cover bg-[#090B0D]"
            ></video>
            {/* overlay over the video for small screens*/}
            <div className="absolute inset-0 bg-[linear-gradient(360deg,_rgba(0,0,0,0.00)_90.33%,#000_98.88%)]" />
          </div>
          {/* overlay over the video for desktop screens*/}
          <div className="absolute inset-0 lg:bg-[linear-gradient(2deg,_rgba(0,0,0,0.00)_81.43%,#000_90.93%)]"></div>

          <div className="max-auto container relative w-full py-[90px] sm:py-[112px] md:py-[162px]">
            <div className="flex flex-col items-start justify-center gap-[15px] font-inter sm:gap-[22px] md:gap-[34px] xl:gap-[39px]">
              <div className="flex flex-col items-start gap-1.5 sm:gap-2">
                <div className="rounded-[50px] border border-white/15 bg-black px-[7.78px] py-1 text-[10px] font-normal leading-[14.45px] -tracking-[0.001px] text-[#9855FF] md:px-2.5 md:py-1.5 md:text-[11px] md:leading-[18px] xl:px-[14px] xl:py-2">
                  We are here to redefine the digital future
                </div>
                <div className="flex flex-col gap-2 sm:gap-2.5 xl:gap-3">
                  <div className="w-[200px] text-lg font-medium -tracking-[1.417px] text-transparent text-white sm:w-[255px] sm:text-[28px] sm:leading-[38px] md:w-[500px] md:text-[59px] md:leading-[60px] md:-tracking-[4.158px] xl:w-[700px] xl:text-[82.178px] xl:leading-[90.182px]">
                    Transforming Ideas into Reality
                  </div>
                  <div className="w-[200px] text-xs font-normal text-white sm:w-[250px] sm:text-sm md:w-[392px] xl:w-[550px] xl:text-xl">
                    We create smart, AI-driven products that help businesses
                    innovate, grow, and lead in a digital-first world.
                  </div>
                </div>
              </div>
              <div
                style={{
                  background:
                    "conic-gradient(from var(--border-angle), #FF57DB, #B33691, #6748DB, #9D78F2)",
                }}
                className="animate-rotate-border rounded-[12px] p-[2.5px] hover:shadow-[0_0_12px_0_rgba(255,255,255,0.60)] sm:p-[3px]"
              >
                <div className="rounded-[8.6px] bg-black px-4 py-1.5 text-[10px] font-medium leading-[14px] text-white transition-all duration-500 ease-in sm:px-[18px] sm:py-2 sm:text-[12px] md:text-[12px] md:leading-[22px] xl:rounded-[12px] xl:px-6 xl:py-2.5 xl:text-[15.033px] xl:leading-[31.067px]">
                  Book A Free Consultation
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[20px] bg-[#090B0D] py-[20px] font-inter md:py-[30px] xl:gap-[25px] xl:py-[50px]">
          <div className="text-center text-base font-medium -tracking-[0.33px] text-white/60 sm:text-lg md:text-xl xl:text-[22px] xl:leading-[47px]">
            Integration Services
          </div>

          <div className="w-full bg-[linear-gradient(90deg,_#090B0D_6.13%,_rgba(9,11,13,0.00)_46.81%,_#090B0D_95.76%)] xl:w-[75%]">
            <InfiniteScrollTape />
          </div>
        </div>
      </div>
    </>
  );
}
