"use server";
import WhatWeOffer from "@/components/share/what-we-offer";
import HeroSection from "@/components/share/hero-section";
import OurToolkit from "@/components/share/our-toolkit";
import WhyChooseUs from "@/components/share/why-choose-us";
import OurBlogs from "@/components/share/our-blogs";
import HowWeWorkWrapper from "@/components/share/how-we-woer-wrapper";
export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeOffer />
      <WhyChooseUs />
      {/* <OurToolkit /> */}
      <HowWeWorkWrapper />

      {/* <ContactForm /> */}
      <OurBlogs />
    </>
  );
}
