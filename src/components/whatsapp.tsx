"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsAppIcon() {
  return (
    <>
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
