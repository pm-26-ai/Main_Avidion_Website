import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
export type BlogCardProps = {
  id: number;
  image: string;
  mainTech: string;
  date: string;
  heading: string;
  content: string;
  author: string;
};
export default function BlogCard({ blog }: { blog: BlogCardProps }) {
  return (
    <>
      <div className="font-inter rounded-[10px] border border-white/15 bg-[rgba(21,21,21,0.29)] backdrop-blur-[23.14px]">
        {/* blog-image */}
        <div className="relative aspect-[1.77]">
          <Image
            src={blog.image}
            alt="blog-image"
            className="rounded-tl-[10px] rounded-tr-[10px] object-cover"
            fill
          />
        </div>
        {/* blog-content */}
        <div className="flex flex-col gap-2.5 p-5">
          <div className="flex flex-row gap-3">
            <div className="rounded-2xl bg-[#F1F5F9] px-2 py-[2px] text-sm font-semibold text-[#0F1729]">
              {blog.mainTech}
            </div>
            <div className="text-sm font-normal text-[#B9B9B9]">
              {blog.date}
            </div>
          </div>
          <div className="flex flex-col gap-[19px]">
            <div className="flex flex-col gap-[7px]">
              <div className="text-base font-medium text-white">
                {blog.heading}
              </div>
              <div className="text-base font-normal text-[#B3B2B3]">
                {blog.content}
              </div>
            </div>
            <div className="text-sm font-normal text-[#B9B9B9] italic">
              By {blog.author}
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm font-normal text-white/61">
            Read More <IoArrowForward />
          </div>
        </div>
      </div>
    </>
  );
}
