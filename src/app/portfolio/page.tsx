import { HeadingSection } from "@/components/share/heading-section";
import { portfolio } from "@/data";
import React from "react";
import PortfolioCard from "./components/portfolio-card";

export default function Portfolio() {
  return (
    <div className="pb-[40px] xl:pb-[100px] pt-[134px] md:pt-[160px] xl:pt-[196px] container max-w-full">
      <HeadingSection
        mainHeading="Our Work"
        subContent="Crafted with care. Built for impact."
        mainClassName="text-center"
        subClassName="text-center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-y-[38.94px] md:gap-x-[18px] xl:gap-[65px]">
        {portfolio.map((item,index)=>(
            <PortfolioCard key={index} details={item}/>
        ))}
      </div>
    </div>
  );
}
