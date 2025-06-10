import Image from "next/image";
export default function MainSection() {
  return (
    <>
      <div className="relative overflow-hidden">
        <video
          src="/about-us/main-bg.mp4"
          className="absolute inset-0 h-full w-full scale-[5] sm:scale-[4] md:scale-[3] xl:scale-[1.5]"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-[radial-gradient(53.48%_53.48%_at_50%_96.75%,_rgba(0,0,0,0.00)_0%,_#000_100%)]"></div>
        <div className="container relative flex max-w-full flex-col items-center gap-[40px] pt-[134px] text-xl text-white md:gap-[50px] md:pt-[160px] xl:gap-[76px] xl:pt-[196px] pb-[150px]">
          <div className="flex flex-col items-center gap-2.5 xl:gap-[29px]">
            <div className="text-2xl font-medium -tracking-[0.84px] md:text-[40px] md:leading-[40px] xl:text-[56px] xl:leading-[65px]">
              About Us
            </div>
            <p className="text-center text-sm font-normal md:text-xl">
              <span className="font-bold">
                Pioneering Smart Software for the AI- Driven Era -{" "}
              </span>
              At Avidion Softwares, we empower businesses with cutting-edge
              digital solutions that blend AI, human insight, and scalable
              engineering. 
              {/* Our mission is to set benchmarks in next-gen
              technology by delivering flexible, high-impact software tailored
              to your goals. */}
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="relative lg:h-[605px] lg:w-[738px] xl:h-[457px] xl:w-[968px]">
              <Image
                src={"/about-us/team-chart.png"}
                alt="team-chart"
                className="object-cover"
                fill
                priority
              />
            </div>
          </div>
          <div className="block lg:hidden">
            <div className="relative h-[330px] w-[261px] sm:h-[472px] sm:w-[403px]">
              <Image
                src={"/about-us/team-chart-sm.png"}
                alt="team-chart"
                className="object-cover"
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
