import BlogCard from "./blog-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function Blogs() {
  const blogs = [
    {
      id: 1,
      image: "/blogs/blog-1.png",
      mainTech: "NextJS",
      date: "April 14, 2025",
      heading: "Dynamic routing in Next.js",
      content:
        "Dynamic routing in Next.js allows developers to create pages ...",
      author: "Shreya Goyal",
    },
    {
      id: 2,
      image: "/blogs/blog-1.png",
      mainTech: "NextJS",
      date: "April 14, 2025",
      heading: "Dynamic routing in Next.js",
      content:
        "Dynamic routing in Next.js allows developers to create pages ...",
      author: "Shreya Goyal",
    },
    {
      id: 3,
      image: "/blogs/blog-1.png",
      mainTech: "NextJS",
      date: "April 14, 2025",
      heading: "Dynamic routing in Next.js",
      content:
        "Dynamic routing in Next.js allows developers to create pages ...",
      author: "Shreya Goyal",
    },
    {
      id: 4,
      image: "/blogs/blog-1.png",
      mainTech: "NextJS",
      date: "April 14, 2025",
      heading: "Dynamic routing in Next.js",
      content:
        "Dynamic routing in Next.js allows developers to create pages ...",
      author: "Shreya Goyal",
    },
    {
      id: 5,
      image: "/blogs/blog-1.png",
      mainTech: "NextJS",
      date: "April 14, 2025",
      heading: "Dynamic routing in Next.js",
      content:
        "Dynamic routing in Next.js allows developers to create pages ...",
      author: "Shreya Goyal",
    },
  ];
  return (
    <>
      <div className="relative min-h-screen">
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/blog-bg-video.mp4" type="video/mp4" />
        </video>

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
