"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import createContact from "@/actions/contact-action";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name should be min of 3 chars."),
  email: z.string().email("Invalid email address."),
  phone: z.string().regex(/^\+?\d{10}$/, "Enter a valid phone number"),
  query: z.string().min(10, "Query must be at least 10 characters"),
});

const ContactForm = () => {
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
    console.log("values are",values);
    await createContact(values)
    .then((resp)=>{
      console.log(resp.message)
    })
    .catch((err)=>{
    console.log("error is",err);
    })
    .finally(()=>{
     form.reset();
    })
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto max-w-xl space-y-6 rounded-xl bg-white p-8 shadow-md"
        >
          <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-1 block text-sm font-medium text-gray-700">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="john doe"
                    {...field}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
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
                <FormLabel className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="john@gmail.com"
                    {...field}
                    type="email"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
                <FormLabel className="mb-1 block text-sm font-medium text-gray-700">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                  type="number"
                    placeholder="+91 9999999999"
                    {...field}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
                <FormLabel className="mb-1 block text-sm font-medium text-gray-700">
                  Your Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your query here..."
                    {...field}
                    rows={4}
                    className="w-full resize-none rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-3 text-white transition-colors hover:bg-blue-700"
          >
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
