"use client";
import ContactForm from "@/components/contact-form";
import { FloatingWhatsApp } from "react-floating-whatsapp";
export default function HomePage() {
  return (
    <>
    <div className="text-pri">Heloo</div>
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
