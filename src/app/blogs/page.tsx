import { HeadingSection } from "@/components/share/heading-section";
import BlogCard from "./components/blog-card";
import { blogs } from "@/data";
export default function Blogs() {
  return (
    <>
      <div className="flex flex-col gap-[98px] px-[118.5px] py-[155px] text-white xl:px-[182.5px] 2xl:px-[415px]">
        <div className="flex flex-col items-center gap-[10px]">
          <div className="rounded-[50px] border border-white/15 px-[14px] py-2 text-base font-normal text-[#9855FF]">
            Latest Insights
          </div>
          <HeadingSection
            mainHeading="Our Blogs"
            subContent="Stay ahead with our fresh perspectives on creativity, code, and digital transformation."
            mainClassName="text-center"
            subClassName="text-center"
          />
        </div>

        <div className="grid grid-cols-3 gap-[25px]">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
}
