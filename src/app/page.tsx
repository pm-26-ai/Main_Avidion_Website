"use server";
import ContactForm from "@/components/forms/contact-form";
import HowWeWork from "@/components/share/how-we-work";
import WhatWeOffer from "@/components/share/what-we-offer";
import Blogs from "./blogs/page";
import HeroSection from "@/components/share/hero-section";
import OurToolkit from "@/components/share/our-toolkit";
import WhyChooseUs from "@/components/share/why-choose-us";
import OurBlogs from "@/components/share/our-blogs";
export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeOffer />
      <WhyChooseUs />
      <OurToolkit />
      <HowWeWork />
      {/* <ContactForm /> */}
      <OurBlogs/>
    </>
  );
}
