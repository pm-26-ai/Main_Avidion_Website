"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
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
        "https://api.sheetbest.com/sheets/049a2e18-8a7f-477a-9d1d-ce5da8e9b6b3",
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
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Full Name"
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
                    placeholder="Email Address"
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
                    placeholder="Phone Number"
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
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your idea, or feedback"
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
            disabled={loading}
            className={`w-full rounded-md bg-blue-600 py-3 text-white transition-colors hover:bg-blue-700`}
          >
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
