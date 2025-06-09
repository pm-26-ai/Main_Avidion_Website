"use client";
import Image from "next/image";
import Link from "next/link";

export const services = [
  {
    id: 1,
    url: "/services/service-1.png",
    title: "Web App Development Services",
    content:
      "At Avidion Softwares, we specialize in delivering end-to-end web app development services tailored to your unique business needs. As a trusted web development partner, our expert team goes beyond the surface to understand your specific challenges and craft custom, scalable, and performance-driven solutions.",
  },
  {
    id: 2,
    url: "/services/service-2.png",
    title: "3D & Animated Websites",
    content:
      "Step into the future of digital experiences with cutting-edge 3D and animated website development by Avidion Softwares. We go beyond static designs to create immersive, visually stunning, and interactive websites that capture attention and elevate your brand presence.",
  },
  {
    id: 3,
    url: "/services/service-3.png",
    title: "AI Integration ",
    content:
      "At Avidion Softwares, we integrate Artificial Intelligence (AI) into your digital ecosystem to help you make smarter decisions, automate processes, and deliver personalized experiences at scale. Whether it’s an intelligent chatbot, predictive analytics engine, or AI-driven automation, we help you harness the power of AI to gain a competitive edge and drive operational efficiency.",
  },
  {
    id: 4,
    url: "/services/service-4.png",
    title: "Mobile App Development",
    content:
      "At Avidion Softwares, we craft high-performance mobile applications that help businesses thrive in a mobile-first world. From concept to deployment, we specialize in building intuitive, scalable, and feature- rich apps for Android, and cross-platform environments.",
  },
  {
    id: 5,
    url: "/services/service-5.png",
    title: "CRM ",
    content:
      "At Avidion Softwares, we build intelligent, scalable, and user-friendly CRM systems that empower businesses to streamline customer relationships, automate sales workflows, and drive lasting loyalty. Whether you need a lightweight CRM for a startup or a robust enterprise-grade solution, our custom CRM development is designed to help you manage leads, track interactions, and grow smarter.",
  },
  {
    id: 6,
    url: "/services/service-6.png",
    title: "ERP & WMS",
    content:
      "We deliver tailored services that connect customer relationship management with warehouse automation—streamlining workflows, enhancing visibility, and supporting scalable business growth from lead to delivery.",
  },
];
export default function AllServices() {
  return (
    <>
      <div className="relative">
        {/* Sticky Video */}
        <video
          src="/how-we-work-bg-video.mp4"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        {/* Cards scrolling over the video */}
        <div className="relative flex flex-col justify-center gap-10 py-[67px] font-inter md:px-[29px] xl:px-[114px] 2xl:px-[249px]">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${index % 2 == 0 ? `bg-[#17061B]` : `bg-[#000000]`} relative flex flex-col items-center gap-9 overflow-hidden rounded-[24px] px-6 py-[50px] md:px-[85px] xl:flex-row xl:justify-between xl:px-[140px]`}
            >
              <div
                className={`${
                  index % 2 === 0 ? "order-1" : "xl:order-2"
                } relative h-[250px] w-[248px] xl:h-[356px] xl:w-[400px]`}
              >
                <Image
                  src={service.url}
                  alt="service-images"
                  fill
                  className="animate-service-bounce object-contain"
                  quality={100}
                  priority
                />
              </div>
              <div
                className={`${
                  index % 2 === 0 ? "order-2" : "order-1"
                } flex flex-col items-center justify-center gap-[13px] md:items-start xl:basis-[50%]`}
              >
                <div className="text-xl font-medium text-[#E0E0E0] md:text-2xl xl:text-[40px] xl:leading-[48px]">
                  {service.title}
                </div>
                <div className="text-center text-sm font-normal text-[rgba(255,255,255,0.70)] md:text-left md:text-base">
                  {service.content}
                </div>
                {/* <Link
                  href="#"
                  className="py-2 text-sm font-normal text-white underline underline-offset-1"
                >
                  Know More
                </Link> */}
              </div>
              {index % 2 == 0 ? (
                <>
                  <div className="absolute -left-[15%] top-[15%] size-[311px] animate-blob rounded-full bg-[linear-gradient(120deg,_rgba(255,115,217,0.80)_0%,_rgba(234,62,187,0.80)_86.07%)] opacity-[0.27] blur-[111px]"></div>
                  <div className="absolute -right-[15%] top-[15%] size-[311px] animate-blob rounded-full bg-[linear-gradient(90deg,_#3D065F_0%,_#5727BD_100%)] opacity-[0.27] blur-[111px]"></div>
                </>
              ) : (
                <>
                  <div className="absolute -left-[10%] top-[15%] size-[311px] animate-blob rounded-full bg-[linear-gradient(90deg,_#3D065F_0%,_#5727BD_100%)] opacity-[0.33] blur-[111px]"></div>
                  <div className="absolute -bottom-[50%] left-[30%] size-[311px] animate-blob rounded-full bg-[linear-gradient(120deg,_rgba(255,115,217,0.80)_0%,_rgba(234,62,187,0.80)_86.07%)] opacity-[0.33] blur-[111px]"></div>
                </>
              )}

              {/* <div
                className={`${index % 2 == 0 ? `left-[90px] bg-[#82107C]` : `right-[90px] bg-[#622A9A]`} absolute top-1/2 size-[569px] rounded-full opacity-[0.25] blur-[113px]`}
              ></div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
