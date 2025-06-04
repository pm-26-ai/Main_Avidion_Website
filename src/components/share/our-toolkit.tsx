"use client";
import { useEffect, useRef } from "react";
import { HeadingSection } from "./heading-section";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "../ui/tabs";
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
    const div = divRef.current;

    if (!div || !section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (divRef.current) {
        divRef.current.style.transform = `translate(${x - 175}px, ${y - 175}px)`;
      }
    };

    const handleMouseEnter = () => {
      div.style.opacity = "0.25";
    };
    const handleMouseLeave = () => {
      div.style.opacity = "0";
    };

    section?.addEventListener("mouseenter", handleMouseEnter);
    section?.addEventListener("mousemove", handleMouseMove);
    section?.addEventListener("mouseleave", handleMouseLeave);
  }, []);

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
        className="relative overflow-hidden font-inter"
      >
        <div className="container max-w-full pb-[188px] pt-[123px]">
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
                            priority
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
          className="pointer-events-none absolute inset-0 z-10 h-[350px] w-[350px] rounded-full bg-[#622A9A] opacity-0 blur-[112px] transition-opacity duration-300"
        ></div>
      </div>
    </>
  );
}
