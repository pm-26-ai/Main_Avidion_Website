'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoArrowForward } from "react-icons/io5";
export type BlogCardProps = {
  id: number;
  image: string;
  mainTech: string;
  date: string;
  heading: string;
  content: string;
  author: string;
  url: string;
};
export default function BlogCard({ blog }: { blog: BlogCardProps }) {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => router.push(blog.url)}
        className="cursor-pointer rounded-[10px] border border-white/15 bg-[rgba(21,21,21,0.29)] font-inter backdrop-blur-[23.14px]"
      >
        {/* blog-image */}
        <div className="relative aspect-[16/9]">
          <Image
            src={blog.image}
            alt="blog-image"
            className="rounded-tl-[10px] rounded-tr-[10px] object-cover"
            quality={100}
            fill
            priority
          />
        </div>
        {/* blog-content */}
        <div className="flex flex-col gap-2.5 p-2 sm:p-2.5 md:p-5">
          <div className="flex flex-row gap-3">
            <div className="rounded-2xl bg-[#F1F5F9] px-2 py-[2px] text-sm font-semibold text-[#0F1729]">
              {blog.mainTech}
            </div>
            <div className="text-sm font-normal text-[#B9B9B9]">
              {blog.date}
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-[19px]">
            <div className="flex flex-col gap-[7px]">
              <div className="h-[48px] text-base font-medium text-white">
                {blog.heading}
              </div>
              <div className="h-[72px] text-base font-normal text-[#B3B2B3]">
                {blog.content}
              </div>
            </div>
            <div className="text-sm font-normal italic text-[#B9B9B9]">
              By {blog.author}
            </div>
          </div>
          <Link
            href={blog.url}
            className="text-white/61 flex items-center gap-1 text-sm font-normal"
          >
            Read More <IoArrowForward />
          </Link>
        </div>
      </div>
    </>
  );
}
