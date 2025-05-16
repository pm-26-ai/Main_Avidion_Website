import Image from "next/image";
import Link from "next/link";
const services = [
  {
    id: 1,
    title: "Web App Development Services",
    content:
      "At Avidion Softwares, we specialize in delivering end-to-end web app development services tailored to your unique business needs. As a trusted web development partner, our expert team goes beyond the surface to understand your specific challenges and craft custom, scalable, and performance-driven solutions.",
  },
  {
    id: 2,
    title: "3D & Animated Websites",
    content:
      "Step into the future of digital experiences with cutting-edge 3D and animated website development by Avidion Softwares. We go beyond static designs to create immersive, visually stunning, and interactive websites that capture attention and elevate your brand presence.",
  },
  {
    id: 3,
    title: "AI Integration ",
    content:
      "At Avidion Softwares, we integrate Artificial Intelligence (AI) into your digital ecosystem to help you make smarter decisions, automate processes, and deliver personalized experiences at scale. Whether it’s an intelligent chatbot, predictive analytics engine, or AI-driven automation, we help you harness the power of AI to gain a competitive edge and drive operational efficiency.",
  },
  {
    id: 4,
    title: "Mobile App Development",
    content:
      "At Avidion Softwares, we craft high-performance mobile applications that help businesses thrive in a mobile-first world. From concept to deployment, we specialize in building intuitive, scalable, and feature- rich apps for Android, and cross-platform environments.",
  },
  {
    id: 5,
    title: "CRM ",
    content:
      "At Avidion Softwares, we build intelligent, scalable, and user-friendly CRM systems that empower businesses to streamline customer relationships, automate sales workflows, and drive lasting loyalty. Whether you need a lightweight CRM for a startup or a robust enterprise-grade solution, our custom CRM development is designed to help you manage leads, track interactions, and grow smarter.",
  },
  {
    id: 6,
    title: "ERP & WMS",
    content:
      "We deliver tailored services that connect customer relationship management with warehouse automation—streamlining workflows, enhancing visibility, and supporting scalable business growth from lead to delivery.",
  },
];
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
        <div className="animate-gradient-radial absolute inset-0"></div>
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
      <div className="flex flex-col gap-10 px-[106px] font-inter">
        {services.map((service, index) => (
          <>
            <div
              key={service.id}
              className={`${index % 2 == 0 ? `bg-[#0B0615]` : `bg-[#17061B]`} flex flex-row items-center justify-between rounded-[24px] px-[295px] py-[33px]`}
            >
              <div
                className={`${index % 2 == 0 ? `order-1` : `order-2`} relative h-[245px] w-[424px]`}
              >
                <Image
                  src="/services/web-development-service.png"
                  alt="service-images"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
              <div
                className={`${index % 2 == 0 ? `order-2` : `otrder-1`} flex basis-[45%] flex-col items-start gap-[13px]`}
              >
                <div className="text-[40px] font-medium leading-[48px] text-[#E0E0E0]">
                  {service.title}
                </div>
                <div className="text-sm font-normal text-[rgba(255,255,255,0.70)]">
                  {service.content}
                </div>
                <Link
                  href="#"
                  className="py-2 text-sm font-normal text-white underline underline-offset-1"
                >
                  Know More
                </Link>
              </div>
            </div>

            <div className="size-[309px] rotate-[3.425deg] transform rounded-full bg-[#A5318A] opacity-[0.62] blur-[100px]"></div>
            <div className="size-[213px] rotate-[3.425deg] bg-[#622A9A] opacity-[0.62] blur-[42.070px]"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="343"
              height="420"
              viewBox="0 0 343 420"
              fill="none"
            >
              <path
                d="M343 210C343 325.98 250.323 420 136 420C21.6771 420 0 325.98 0 210C0 94.0202 21.6771 0 136 0C250.323 0 343 94.0202 343 210Z"
                fill="#D9D9D9"
                fill-opacity="0.05"
              />
            </svg>
          </>
        ))}
      </div>
    </>
  );
}
