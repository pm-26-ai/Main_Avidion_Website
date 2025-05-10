"use client";

import ContactForm from "@/components/forms/contact-form";
import HowWeWork from "@/components/share/how-we-work";
import WhatWeOffer from "@/components/share/what-we-offer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Blogs from "./blogs/page";
export default function HomePage() {
  return (
    <>
      <WhatWeOffer />
      <HowWeWork/>
      {/* <ContactForm /> */}
      <FloatingWhatsApp
        notification
        notificationSound
        phoneNumber="9896584099"
        accountName="Enquiry"
        avatar="./avidion-logo.png"
      />
      <Blogs/>
      
    </>
  );
}
