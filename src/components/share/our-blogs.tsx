import BlogCard from "@/app/blogs/components/blog-card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { blogs } from "@/data";
export default function OurBlogs() {
  return (
    <>
      <div className="relative">
        <video
          src="/blogs/blog-bg-video.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 top-60 h-[70%] w-full object-cover"
        />

        {/* blog content */}
        <div className="relative flex flex-col gap-[98px] px-[118.5px] py-[108px] text-white xl:px-[182.5px] 2xl:px-[422px]">
          {/* heading */}
          <div className="text-xl font-medium -tracking-[0.84px] sm:text-2xl md:text-4xl lg:text-[40px] xl:text-5xl 2xl:text-[56px] 2xl:leading-[65px]">
            Our Blogs
          </div>

          {/* blog-cards */}
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {blogs.map((blog) => (
                <CarouselItem key={blog.id} className="basis-[338px]">
                  <BlogCard blog={blog} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="flex flex-row gap-[25px]"></div>
        </div>
      </div>
    </>
  );
}
