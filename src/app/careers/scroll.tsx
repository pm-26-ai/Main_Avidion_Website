"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollGSAP = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const items = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    content: `This is scrollable content for item ${i + 1}`,
    color:
      i % 5 === 0
        ? "bg-blue-500"
        : i % 5 === 1
          ? "bg-purple-500"
          : i % 5 === 2
            ? "bg-pink-500"
            : i % 5 === 3
              ? "bg-indigo-500"
              : "bg-teal-500",
  }));

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const progressBar = progressBarRef.current;
      if (!section || !track || !progressBar) return;

      const totalScroll = track.scrollWidth - section.offsetWidth;

      gsap.to(track, {
        x: () => `-${totalScroll}`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            gsap.to(progressBar, {
              width: `${self.progress * 100}%`,
              duration: 0.2,
              ease: "power1.out",
            });
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden bg-gray-900 px-4 py-16"
    >
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Horizontal Scroll Gallery
        </h1>
        <p className="mb-8 text-gray-400">
          Scroll vertically to scroll the cards horizontally
        </p>

        <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-gray-800">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out"
            style={{ width: `0%` }}
          />
        </div>

        <div className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 pb-8 will-change-transform"
            style={{ width: "fit-content" }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="w-80 flex-shrink-0 overflow-hidden rounded-xl shadow-lg"
              >
                <div
                  className={`${item.color} flex h-48 items-center justify-center`}
                >
                  <span className="text-4xl font-bold text-white">
                    {item.id}
                  </span>
                </div>
                <div className="bg-gray-800 p-6">
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p className="mb-2">Scroll vertically anywhere in this section</p>
          <p>This will move the cards horizontally using GSAP ScrollTrigger</p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollGSAP;
