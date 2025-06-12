"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { FaWhatsapp } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import createContact from "@/actions/contact-action";
import { useState } from "react";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name should be min of 3 chars."),
  email: z.string().email("Invalid email address."),
  phone: z.string().regex(/^\+?\d{10}$/, "Enter a valid phone number"),
  query: z.string().min(10, "Query must be at least 10 characters"),
});

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      query: "",
    },
  });

  //form submission
  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    setLoading(true);
    const data = {
      Name: values.name,
      Email: values.email,
      PhoneNumber: values.phone,
      Query: values.query,
    };

    //setting the data in the database also and google sheet
    try {
      const contactFormResp = await createContact(values);
      await axios.post(
        "https://api.sheetbest.com/sheets/724fbfa8-c8df-4058-9f30-aef1fe7b40d5",
        data,
      );
      toast.success(contactFormResp.message);
    } catch (err) {
      console.log("error is", err);
    } finally {
      form.reset();
      setLoading(false);
    }
  }
  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-between gap-[46px] overflow-x-hidden px-[23px] py-[47px] md:flex-row md:px-[40px] xl:py-[77px] xl:pl-[157px] xl:pr-[104px]">
        <div className="z-10 flex w-full flex-col items-start gap-[46px] md:w-[200px] xl:w-[246px]">
          <div className="relative inline-block">
            <h2 className="text-xl font-bold text-[#FEFEFE]">Contact Us</h2>
            <div className="absolute left-[73%] mt-1 h-[3px] w-[150px] -translate-x-1/2 bg-[#6C2D88]"></div>
          </div>
          <div className="flex flex-row items-start gap-[14px]">
            <div className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.40)_100%)] p-[11.62px] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
              <MdOutlineEmail className="text-[16.76px] text-white" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[12px] font-medium text-[#9D46C3]">
                Email
              </div>
              <div className="text-sm font-normal text-white">
                info@avidion.ai
              </div>
            </div>
          </div>

          <div className="flex flex-row items-start gap-[14px]">
            <div className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.40)_100%)] p-[11.62px] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
              <FaWhatsapp className="text-[16.76px] text-white" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[12px] font-medium text-[#9D46C3]">
                WhatsApp{" "}
              </div>
              <div className="text-sm font-normal text-white">
                +91 9896584099
              </div>
            </div>
          </div>

          <div className="flex flex-row items-start gap-[14px]">
            <div className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.40)_100%)] p-[11.62px] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
              <FiMapPin className="text-[16.76px] text-white" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[12px] font-medium text-[#9D46C3]">
                Address
              </div>
              <div className="text-sm font-normal text-white">
                676, Sector-42, Gurugram, Haryana, India
              </div>
            </div>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="z-10 flex w-full flex-col gap-[17px] border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.10)_0%,_rgba(84,41,153,0.10)_100%)] px-[27px] py-[40px] shadow-[inset_0_0_2px_0_rgba(255,255,255,0.25)] md:w-[55%] md:px-[30px] xl:px-[51px]"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-[#BFBFBF]">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      {...field}
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Phone Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your query here..."
                      {...field}
                      rows={4}
                      className="w-full resize-none rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              className="mt-2.5 rounded-[12px] border border-[#EB88D6] bg-[rgba(0,0,0,0.16)] p-1.5 backdrop-blur-[94.64px]"
            >
              <div className="rounded-[8px] border-white/15 bg-[linear-gradient(90deg,_rgba(157,46,135,0.4)_0%,_rgba(84,41,153,0.4)_100%)] px-[15px] py-1 font-inter text-sm text-white shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] transition-all duration-700 ease-in-out hover:bg-[linear-gradient(90deg_,rgba(201,104,182,0.40)_0%,_rgba(121,81,186,0.40)_100%)]">
                Submit
              </div>
            </button>
          </form>
        </Form>

        <div className="absolute left-[10%] top-[10%] z-0 size-[200px] animate-blob rounded-full bg-[#622A9A] opacity-[0.26] blur-2xl md:-bottom-1/4 md:blur-[65.43px] xl:size-[332px]"></div>
        <div className="absolute left-[4%] top-[20%] z-0 size-[280px] rotate-[3.425deg] animate-blob rounded-full bg-[#A5318A] opacity-[0.26] blur-3xl md:blur-[155.996px] xl:size-[482px]"></div>
      </div>
      {/* md:blur-[65.43px]
      md:blur-[155.996px] */}
    </>
  );
};

export default ContactForm;
