"use client";
import { useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { HeadingSection } from "./heading-section";
import Image from "next/image";
const aiIcons = [
  {
    id: 1,
    url: "/toolkit-images/GPT.jpg",
    name: "GPT",
  },
  {
    id: 2,
    url: "/toolkit-images/LangChain.png",
    name: "Lang Chain",
  },
  {
    id: 3,
    url: "/toolkit-images/LlamaIndex.png",
    name: "Llama Index",
  },
  {
    id: 4,
    url: "/toolkit-images/Firebase-Genkit.png",
    name: "Firebase Genkit",
  },
];
export default function OurToolkit() {
  const divRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    section?.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;

      if (divRef.current) {
        divRef.current.style.transform = `translate(${clientX - 175}px, ${clientY - 175}px)`;
      }
    });
  });
  return (
    <>
      <div
        ref={sectionRef}
        // style={{
        //   backgroundImage: 'url("/toolkit-bg.png")',
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        // }}
        className="relative font-inter"
      >
        <div className="px-[118.5px] pb-[188px] pt-[123px] xl:px-[182.5px] 2xl:px-[422px]">
          <HeadingSection
            mainHeading="Our Toolkit"
            subContent="Our development and design teams bring the best blend of industry experience and update knowledge to the table. Focus on finding solutions for your business needs while we handle the technical aspect, end-to-end."
          />

          <Tabs defaultValue="AI" className="xl:px-[112px]">
            <TabsList className="flex flex-row gap-10 text-[#9E9E9E]">
              <TabsTrigger value="AI" className="py-2.5">
                AI
              </TabsTrigger>
              <TabsTrigger value="frontend" className="py-2.5">
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="py-2.5">
                Backend
              </TabsTrigger>
              <TabsTrigger value="databases" className="py-2.5">
                Databases
              </TabsTrigger>
              <TabsTrigger value="QA" className="py-2.5">
                QA
              </TabsTrigger>
              <TabsTrigger value="design" className="py-2.5">
                Design
              </TabsTrigger>
            </TabsList>
            <div className="border-t-[3px] border-t-[#E7E7E7] pt-[42px]">
              <TabsContent value="AI">
                <div className="flex items-start justify-start gap-6">
                  {aiIcons.map((icon) => (
                    <div
                      key={icon.id}
                      className="flex flex-col items-center justify-center gap-3"
                    >
                      <div className="rounded-[6px] bg-white/20 p-8">
                        <div className="relative aspect-square w-14">
                          <Image
                            src={icon.url}
                            alt="ai-icons"
                            fill
                            className="rounded-[6px] object-cover"
                          />
                        </div>
                      </div>
                      <div className="max-w-[90%] whitespace-pre-wrap break-words text-center text-lg font-normal text-[#E9E9E9]">
                        {icon.name}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="frontend"></TabsContent>
              <TabsContent value="backend"></TabsContent>
              <TabsContent value="databases"></TabsContent>
              <TabsContent value="QA"></TabsContent>
              <TabsContent value="design"></TabsContent>
            </div>
          </Tabs>
        </div>

        <div
          ref={divRef}
          className="pointer-events-none absolute inset-0 z-10 h-[350px] w-[350px] rounded-full bg-[#622A9A] opacity-25 blur-[112px] transition-all"
        ></div>
      </div>
    </>
  );
}
