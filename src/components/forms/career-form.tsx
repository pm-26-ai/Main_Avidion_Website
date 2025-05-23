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
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Experience } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import createCareerReq from "@/actions/career-action";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "../ui/button";

export const careerFormSchema = z.object({
  name: z.string().min(2, "Name should be min of 3 chars."),
  email: z.string().email("Enter valid email address."),
  phone: z.string().regex(/^\+?\d{10}$/, "Enter a valid phone number"),
  address: z.string().min(10, "Address should be at least 10 characters."),
  position: z.string().min(5, "Position must be at least 5 characters."),
  experience: z.nativeEnum(Experience, {
    required_error: "Please select experience level",
  }),
  months: z.number().int().gte(0).optional(),
  year: z.number().int().gte(0).optional(),
  currentSalary: z.string().min(1, "Current salary is required."),
  expectedSalary: z.string().min(1, "Expected Salary is required."),
  comments: z.string().optional(),
  resumeLink: z.string().url().min(1, "Enter valid url."),
});

const CareerForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof careerFormSchema>>({
    resolver: zodResolver(careerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      position: "",
      currentSalary: "",
      expectedSalary: "",
      resumeLink: "",
      months: 0,
      year: 0,
      comments: "",
      experience: undefined,
    },
  });

  const experienceVal = form.watch("experience");
  console.log("experience val is", experienceVal);

  //form submission
  async function onSubmit(values: z.infer<typeof careerFormSchema>) {
    console.log("valuse are", values);
    setLoading(true);
    const data = {
      Name: values.name,
      Email: values.email,
      PhoneNumber: values.phone,
      Address: values.address,
      Experience: values.experience,
      Year: values.year,
      Months: values.months,
      Position: values.position,
      CurrentSalary: values.currentSalary,
      ExpectedSalary: values.expectedSalary,
      ResumeLink: values.resumeLink,
      Comments: values.comments,
    };
    try {
      const response = await axios.post(
        "https://api.sheetbest.com/sheets/013c66fb-dd87-4de7-95fe-4b8a2a36f443",
        data,
      );
      console.log("response is", response);

      const careerResp = await createCareerReq(values);
      toast.success(careerResp.message);
    } catch (err) {
      console.log("error is", err);
    } finally {
      form.reset();
      setLoading(false);
    }
  }

  const onerror = (e: unknown) => {
    console.log("error in the form data is", e);
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onerror)}
          className="w-full space-y-4"
        >
          <h2 className="text-2xl font-semibold text-gray-800">Careers Form</h2>

          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Full Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email & Phone */}
          <div className="flex flex-col gap-4 md:flex-row">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="email"
                      placeholder="Email Address"
                      {...field}
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
                <FormItem className="w-full">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                      placeholder="+911234567890"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Address */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Full address"
                    rows={2}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Position */}
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position Applying For</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Frontend Developer"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Experience */}
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience</FormLabel>
                <FormControl>
                  <Select
                    value={field.value ?? ""}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <SelectValue placeholder="Select Experience Level" />
                    </SelectTrigger>
                    <SelectContent className="rounded-md border border-gray-300 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <SelectGroup>
                        <SelectItem value={Experience.Fresher}>
                          Fresher
                        </SelectItem>
                        <SelectItem value={Experience.YearOfExperience}>
                          Experienced
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Conditional Year & Months Experience */}
          {experienceVal === Experience.YearOfExperience && (
            <div className="flex flex-col gap-4 md:flex-row">
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Year Experience</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        value={field.value}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value))
                        }
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. 2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="months"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Months Experience</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        value={field.value}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value))
                        }
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. 6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* Salary */}
          <div className="flex flex-col gap-4 md:flex-row">
            <FormField
              control={form.control}
              name="currentSalary"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Current Salary (in lakhs)</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="number"
                      placeholder="e.g. 3.5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expectedSalary"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Expected Salary (in lakhs)</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="number"
                      placeholder="e.g. 6.5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Comments */}
          <FormField
            control={form.control}
            name="comments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comments (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Any additional information"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Resume Link */}
          <FormField
            control={form.control}
            name="resumeLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Resume Link</FormLabel>
                <FormControl>
                  <Input
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. https://drive.google.com/your-resume"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            disabled={loading}
            type="submit"
            className={`w-full rounded-md bg-blue-600 py-3 text-white transition hover:bg-blue-700`}
          >
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default CareerForm;
