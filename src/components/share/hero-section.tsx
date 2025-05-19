export default function HeroSection() {
  return (
    <>
      <div className="px-[118.5px] py-[108px] xl:px-[182.5px] 2xl:px-[552px]">
        <div className="flex flex-col items-center justify-center gap-[47px] px-5 font-inter">
          <div className="flex flex-col items-center gap-3">
            <div className="rounded-[50px] border border-white/15 px-[14px] py-2 text-base font-normal text-[#9855FF]">
              Avidion Software is here to redefine the digital future
            </div>
            <div className="flex flex-col gap-4">
              <div className="animate-gradient bg-[linear-gradient(25deg,#C7B5FF_11.25%,#D984FF_34.88%,#E458BE_66.88%,#A03EC4_95.25%)] bg-[length:400%_auto] bg-clip-text text-center text-[72px] font-medium leading-[80px] -tracking-[4.158px] text-transparent xl:text-[82.178px] xl:leading-[90.182px]">
                Transforming Ideas into Reality
              </div>
              <div className="px-[100px] text-center text-xl font-normal text-white">
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
            className="animate-rotate-border rounded-[12px] p-[3px] hover:shadow-[0_0_12px_0_rgba(255,255,255,0.60)]"
          >
            <div className="rounded-[12px] px-6 py-2.5 bg-black text-[15.033px] font-medium leading-[31.067px] text-white transition-all duration-500 ease-in">
              Book A Free Consultation
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
