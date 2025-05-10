'use server'
import {db} from "../server/db"
import { revalidatePath } from "next/cache"
import type { z } from "zod";
import type { careerFormSchema } from "@/components/forms/career-form";

export default async function createCareerReq(data:z.infer<typeof careerFormSchema>) {
   try{
      await db.careers.create({
         data:{
          name:data.name,
          email:data.email,
          phoneNumber:data.phone,
          address:data.address,
          position:data.position,
          resumeLink:data.resumeLink,
          currentSalary:data.currentSalary,
          expectedSalary:data.expectedSalary,
          experience:data.experience,
          months:data.months,
          year:data.year,
          comments:data.comments,
          createdAt:new Date()
         }
         })
      
         revalidatePath("/");
         return{
          message:"Career form submitted successfully."
         }
   }
   catch(err)
   {
        return{
         error:err
        }
   }
   
}