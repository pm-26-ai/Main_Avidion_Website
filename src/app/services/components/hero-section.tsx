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
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* radial gradient overlay over the video */}
        <div className="absolute inset-0 animate-gradient-radial"></div>
        {/* content */}
        <div className="relative px-[520px] pt-[100px]">
          <div className="flex flex-col items-center gap-[20px] font-inter">
            <div className="flex flex-col gap-[30px] text-white">
              <div className="px-[154px] text-center text-[56px] font-medium leading-[65px] -tracking-[0.84px]">
                Our Services
              </div>
              <div className="text-center text-xl font-normal">
                At Avidion Softwares, we empower businesses with cutting-edge
                digital solutions that blend AI, human insight, and scalable
                engineering. Our mission is to set benchmarks in next-gen
                technology by delivering flexible, high-impact software tailored
                to your goals.
              </div>
            </div>
            <div className="relative h-[690px] w-[702px]">
              <Image
                className="object-cover"
                src={"/inner-hero-section-bg.png"}
                alt="hero-section-background-image"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
