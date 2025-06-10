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
          className="absolute inset-0 top-60 h-[70%] w-full object-cover opacity-60"
          preload="auto"
          playsInline
        />

        {/* blog content */}
        <div className="container relative mx-auto flex flex-col gap-[63px] py-[63px] text-white md:gap-[80px] md:py-[80px] xl:gap-[98px] xl:py-[108px]">
          <div className="flex flex-col items-center gap-2.5">
            <div className="rounded-[50px] border border-white/15 px-[14px] py-2 text-base font-normal text-[#9855FF]">
              Latest Insights
            </div>
            {/* heading */}
            <div className="text-xl font-medium -tracking-[0.84px] sm:text-2xl md:text-4xl lg:text-[40px] xl:text-5xl 2xl:text-[56px] 2xl:leading-[65px]">
              Our Blogs
            </div>
          </div>

          {/* blog-cards */}
          <Carousel
            className="mx-auto w-[80%] xl:w-full"
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent className="">
              {blogs.map((blog) => (
                <CarouselItem
                  key={blog.id}
                  className="basis-[270px] sm:basis-[320px] md:basis-[338px]"
                >
                  <BlogCard blog={blog} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="bg-red-900">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
