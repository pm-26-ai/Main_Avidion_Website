"use client";
import ContactForm from "@/components/contact-form";
import { FloatingWhatsApp } from "react-floating-whatsapp";
export default function HomePage() {
  return (
    <>
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
