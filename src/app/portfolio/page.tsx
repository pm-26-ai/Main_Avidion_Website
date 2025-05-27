import { HeadingSection } from "@/components/share/heading-section";
import { portfolio } from "@/data";
import React from "react";
import PortfolioCard from "./components/portfolio-card";

export default function Portfolio() {
  return (
    <div className="pb-[123px] pt-[196px] px-[416px]">
      <HeadingSection
        mainHeading="Our Work"
        subContent="Crafted with care. Built for impact."
        mainClassName="text-center"
        subClassName="text-center"
      />

      <div className="grid grid-cols-2 gap-[65px]">
        {portfolio.map((item,index)=>(
            <PortfolioCard key={index} details={item}/>
        ))}
      </div>
    </div>
  );
}
