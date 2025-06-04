import { HeadingSection } from "@/components/share/heading-section";
import BlogCard from "./components/blog-card";
import { blogs } from "@/data";
export default function Blogs() {
  return (
    <>
      <div className="container flex max-w-full flex-col gap-[14px] pb-[40px] pt-[134px] text-white md:gap-[20px] xl:gap-[56px] md:pt-[160px] xl:pb-[100px] xl:pt-[196px]">
        <div className="flex flex-col items-center gap-[17px]">
          <div className="rounded-[50px] border border-white/15 px-3 py-1.5 text-xs font-normal text-[#9855FF] md:text-sm xl:px-[14px] xl:py-2 xl:text-base">
            Latest Insights
          </div>
          <HeadingSection
            mainHeading="Our Blogs"
            subContent="Stay ahead with our fresh perspectives on creativity, code, and digital transformation."
            mainClassName="text-center"
            subClassName="text-center"
          />
        </div>

        <div className=" grid grid-cols-1 gap-9 md:grid-cols-2 md:gap-x-[25px] md:gap-y-[41px] xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
}
