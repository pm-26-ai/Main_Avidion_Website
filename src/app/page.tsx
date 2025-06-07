"use client";
import WhatWeOffer from "@/components/share/what-we-offer";
import HeroSection from "@/components/share/hero-section";
import OurToolkit from "@/components/share/our-toolkit";
import WhyChooseUs from "@/components/share/why-choose-us";
import OurBlogs from "@/components/share/our-blogs";
import HowWeWork from "@/components/share/how-we-work";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeOffer />
      {/* <WhatWeOfferNew/> */}
      <WhyChooseUs />
      {/* <OurToolkit /> */}
      <HowWeWork />
      {/* <ContactForm /> */}
      <OurBlogs />
    </>
  );
}
