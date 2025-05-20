import Image from "next/image";
export default function MainSection() {
  return (
    <>
      <div className="relative">
        <video
          src="/about-us/main-bg.mp4"
          className="absolute inset-0 h-full w-full"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-[radial-gradient(53.48%_53.48%_at_50%_96.75%,_rgba(0,0,0,0.00)_0%,_#000_100%)]"></div>
        <div className="relative flex flex-col items-center gap-[76px] px-[418px] py-[150px] text-xl text-white">
          <div className="flex flex-col items-center gap-[29px]">
            <div className="text-[56px] font-medium leading-[65px] -tracking-[0.84px]">
              About Us
            </div>
            <p className="text-center text-xl font-normal">
              <span className="font-bold">
                Pioneering Smart Software for the AI- Driven Era -{" "}
              </span>
              At Avidion Softwares, we empower businesses with cutting-edge
              digital solutions that blend AI, human insight, and scalable
              engineering. Our mission is to set benchmarks in next-gen
              technology by delivering flexible, high-impact software tailored
              to your goals.
            </p>
          </div>
          <div className="relative w-[368px] xl:h-[457px] xl:w-[968px]">
            <Image
              src={"/about-us/team-chart.png"}
              alt="team-chart"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </>
  );
}
