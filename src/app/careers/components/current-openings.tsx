'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetClose,
  SheetContent,
} from "@/components/ui/sheet";
import { RxCross2 } from "react-icons/rx";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import CareerForm from "@/components/forms/career-form";
import { useState } from "react";
import { currentOpenings } from "@/data";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function CurrentOpenings() {
  const [open, setOpen] = useState<boolean>(false);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");

  return (
    <>
      <div className="bg-[#020103]">
        <div className="container flex max-w-full flex-col gap-[41px] py-[63px] md:py-[80px] xl:gap-[50px] xl:py-[126px] 2xl:gap-[63px]">
          <div className="text-2xl font-medium -tracking-[0.84px] text-white md:text-4xl 2xl:text-[56px] 2xl:leading-[65px]">
            Current Openings
          </div>

          <Accordion type="single" collapsible className="flex flex-col gap-6">
            {currentOpenings.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.title}
                className="border border-[#323232]"
              >
                <div className="flex w-full flex-col items-start justify-between gap-[28px] bg-[#141315] p-[25px] md:flex-row">
                  <div className="flex w-full flex-col gap-[13px]">
                    <div className="flex flex-col gap-2">
                      <div className="text-lg font-bold text-[#FEFEFE] md:text-xl">
                        {item.title}
                      </div>

                      <div className="flex flex-row items-center gap-2">
                        {/* department badges */}
                        <div className="rounded-[44.753px] border-[0.895px] border-[#A76DFF] bg-[#000] px-[5px] py-[3px] text-[10px] font-normal text-[#A76DFF] md:px-[12.53px] md:py-[7px] md:text-xs">
                          {item.department}
                        </div>

                        {/* work type badges */}
                        <div className="flex flex-row gap-2">
                          {item.workType.map((mode, index) => (
                            <div
                              key={index}
                              className="underline-0 rounded-[44.753px] border-[0.895px] border-[#E1E7EF] bg-[#F1F5F9] px-[5px] py-[3px] text-[10px] font-semibold text-[#0F1729] md:px-[12.53px] md:py-[7px] md:text-xs"
                            >
                              {mode}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-[#727272] md:text-base">
                      {item.content}
                    </div>
                  </div>

                  <AccordionTrigger></AccordionTrigger>
                </div>
                <AccordionContent className="bg-[#141315] px-[25px]">
                  <div className="border-t-opacity-60 flex flex-col items-end gap-[30px] border-t border-[#4A4A4A] py-8">
                    <div className="flex w-full flex-col items-start gap-[34px] md:flex-row md:gap-[93px] xl:gap-[157px]">
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
                        className="rounded-[8px] border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.40)_100%)] px-[15px] py-[6px] text-xs font-medium text-[#F8F8FC] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] md:text-sm"
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

      {isSmallDevice ? (
        <>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent
              side="bottom"
              className="h-[80vh] overflow-y-auto border border-none bg-[#141315] pb-[80px] transition-transform duration-500"
            >
              <CareerForm />

              <SheetClose asChild onClick={() => setOpen(false)}>
                <RxCross2
              
                  className="absolute right-4 top-4 size-4 text-white"
                />
              </SheetClose>
            </SheetContent>
          </Sheet>
        </>
      ) : (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="flex w-screen items-center justify-center border border-none bg-black/80 md:px-[46px]">
            <div className="max-h-screen w-screen overflow-y-auto rounded-md bg-[#141315] md:w-[90%] lg:w-[85%] xl:w-[60%] 2xl:w-[47%]">
              <CareerForm />
            </div>
            <DialogClose></DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
