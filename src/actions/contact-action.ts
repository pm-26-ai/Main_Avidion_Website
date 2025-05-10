'use server'
import type { contactFormSchema } from "@/components/forms/contact-form";
import {db} from "../server/db"
import { revalidatePath } from "next/cache"
import type { z } from "zod";

export default async function createContact(data:z.infer<typeof contactFormSchema>) {
   await db.contactUs.create({
   data:{
    name:data.name,
    email:data.email,
    phoneNumber:data.phone,
    query:data.query,
    createdAt:new Date()
   }
   })

   revalidatePath("/");
   return{
    message:"Contact us form submitted successfully."
   }
}