import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See Avidion’s portfolio of successful AI-powered apps, websites, CRMs, and SaaS platforms across various industries.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative font-inter">
        <video
          autoPlay
          muted
          loop
          preload="true"
          playsInline
          src="/blogs/blog-shimmer-bg.mp4"
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,0.00)_0%,_rgba(0,0,0,0.60)_100%)]"></div>
        <div className="relative z-10"> {children}</div>
      </div>
    </>
  );
}
