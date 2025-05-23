import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import CareerForm from "@/components/forms/career-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
const openings = [
  {
    title: "Senior React Developer",
    content:
      "We're looking for an experienced React developer to join our frontend team and help build innovative web applications.",
    department: "Engineering",
    workType: ["Hybrid", "Full-time"],
    requirements: [
      "5+ years of experience with React",
      "Strong TypeScript skills",
      "Experience with state management libraries",
      "Knowledge of responsive design principles",
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Health insurance",
      "Professional development budge",
    ],
  },
  {
    title: "UX/UI Designer",
    content:
      "Join our design team to create intuitive, accessible, and visually appealing user interfaces for our clients' products.",
    department: "Engineering",
    workType: ["Hybrid", "Full-time"],
    requirements: [
      "5+ years of experience with React",
      "Strong TypeScript skills",
      "Experience with state management libraries",
      "Knowledge of responsive design principles",
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Health insurance",
      "Professional development budge",
    ],
  },
  {
    title: "DevOps Engineer",
    content:
      "Help us build and maintain our cloud infrastructure, CI/CD pipelines, and ensure reliability of our systems.",
    department: "Engineering",
    workType: ["Hybrid", "Full-time"],
    requirements: [
      "5+ years of experience with React",
      "Strong TypeScript skills",
      "Experience with state management libraries",
      "Knowledge of responsive design principles",
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Health insurance",
      "Professional development budge",
    ],
  },
  {
    title: "Project Manager",
    content:
      "Oversee project lifecycles, coordinate with clients, and ensure timely delivery of high-quality solutions.",
    department: "Engineering",
    workType: ["Hybrid", "Full-time"],
    requirements: [
      "5+ years of experience with React",
      "Strong TypeScript skills",
      "Experience with state management libraries",
      "Knowledge of responsive design principles",
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Health insurance",
      "Professional development budge",
    ],
  },
];
export default function CurrentOpenings() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="bg-[#020103]">
        <div className="flex flex-col gap-[63px] px-[416px] py-[126px]">
          <div className="text-xl font-medium -tracking-[0.84px] text-white sm:text-2xl md:text-4xl lg:text-[40px] xl:text-5xl 2xl:text-[56px] 2xl:leading-[65px]">
            Current Openings
          </div>

          <Accordion type="single" collapsible className="flex flex-col gap-6">
            {openings.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.title}
                className="border border-[#323232]"
              >
                <div className="flex w-full flex-row items-start justify-between bg-[#141315] p-[25px]">
                  <div className="flex w-full flex-col gap-[13px]">
                    <div className="flex flex-col gap-2">
                      <div className="text-xl font-bold text-[#FEFEFE]">
                        {item.title}
                      </div>

                      <div className="flex flex-row items-center gap-2">
                        {/* department badges */}
                        <div className="rounded-[44.753px] border-[0.895px] border-[#A76DFF] bg-[#000] px-[12.53px] py-[7px] text-xs font-normal text-[#A76DFF]">
                          {item.department}
                        </div>

                        {/* work type badges */}
                        <div className="flex flex-row gap-2">
                          {item.workType.map((mode, index) => (
                            <div
                              key={index}
                              className="underline-0 rounded-[44.753px] border-[0.895px] border-[#E1E7EF] bg-[#F1F5F9] px-[12.53px] py-[7px] text-xs font-semibold text-[#0F1729]"
                            >
                              {mode}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="text-base text-[#727272]">
                      {item.content}
                    </div>
                  </div>

                  <AccordionTrigger></AccordionTrigger>
                </div>
                <AccordionContent className="bg-[#141315] px-[25px]">
                  <div className="border-t-opacity-60 flex flex-col items-end gap-1 border-t border-[#4A4A4A] py-8">
                    <div className="flex w-full flex-row items-start gap-[157px]">
                      <div className="flex flex-col gap-1 text-lg text-[#E2E2E2]">
                        Requirements
                        <ul className="flex list-disc flex-col gap-1 pl-5">
                          {item.requirements.map((req, index) => (
                            <>
                              <li key={index} className="text-sm font-normal">
                                {req}
                              </li>
                            </>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col gap-1 text-lg text-[#E2E2E2]">
                        Benefits
                        <ul className="flex list-disc flex-col gap-1 pl-5">
                          {item.benefits.map((req) => (
                            <>
                              <li className="text-sm font-normal">{req}</li>
                            </>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-[12px] border border-[#EB88D6] bg-[rgba(0,0,0,0.16)] p-1.5 backdrop-blur-[94.65px]">
                      <button
                        onClick={() => setOpen(true)}
                        className="rounded-[8px] border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.40)_100%)] px-[15px] py-[2px] text-sm font-medium text-[#F8F8FC] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)]"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[50%] rounded-xl border border-none bg-[#141315] px-[116px]">
          <CareerForm />
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
