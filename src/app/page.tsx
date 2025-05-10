"use client";
import ContactForm from "@/components/forms/contact-form";
import WhatWeOffer from "@/components/share/what-we-offer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
export default function HomePage() {
  return (
    <>
      <WhatWeOffer />
      <HowWeWork/>
      <ContactForm />
      <FloatingWhatsApp
        notification
        notificationSound
        phoneNumber="9896584099"
        accountName="Enquiry"
        avatar="./avidion-logo.png"
      />
    </>
  );
}
