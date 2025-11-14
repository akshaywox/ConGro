"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";
import MotionWrapper from "../MotionWrapper"; 

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function Construction() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const layouts = [
    {
      id: 1,
      title: "Confident Crest",
      area: "Near Thamarakulam Junction, St George, Church, Fortkochi",
      floorPlan: "/single_property/img6.jpg",
      status: "Ongoing",
    },
    {
      id: 2,
      title: "Confident Crest",
      area: "Near Thamarakulam Junction, St George, Church, Fortkochi",
      floorPlan: "/single_property/img7.jpg",
      status: "Ongoing",
    },
    {
      id: 3,
      title: "APARTMENT 3 BEDROOM",
      area: "Total Area 1200 sqt",
      floorPlan: "/aboutUs/Frame 213.jpg",
      status: "Ongoing",
    },
    {
      id: 4,
      title: "PENTHOUSE 4 BEDROOM",
      area: "Total Area 1800 sqt",
      floorPlan: "/aboutUs/Frame 213.jpg",
      status: "Ongoing",
    },
  ];

  // desktop buttons
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 2));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 2 >= layouts.length ? prev : prev + 2));
  };

  const visibleLayouts = layouts.slice(currentIndex, currentIndex + 2);

  // mobile drag logic
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (carouselRef.current?.offsetLeft || 0);
    scrollLeft.current = carouselRef.current?.scrollLeft || 0;
  };

  const onMouseLeave = () => (isDragging.current = false);
  const onMouseUp = () => (isDragging.current = false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = x - startX.current;
    if (carouselRef.current)
      carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="w-full bg-gray-50 pt-[4rem] md:pt-[190px] pb-32">
      <div className="w-[90%] max-w-[1400px] mx-auto border-t border-gray-200">
        {/* Header Section */}
        <div className="md:flex justify-between items-start mb-7 mt-[4.2rem]">
          <MotionWrapper className="max-w-xl">
            <h2
              className={`${playfair.className} text-[40px] lg:text-5xl font-serif text-gray-900 mb-6`}
            >
              Construction Updates
            </h2>
            <p
              className={`${inter.className} text-[#7b7b7b] leading-relaxed md:w-[80%] font-[350] text-[17px] md:text-[15px]`}
            >
              Watch your luxury address evolve with timely construction updates.
            </p>
          </MotionWrapper>

          {/* Navigation Buttons - hidden on mobile */}
          <MotionWrapper className="hidden md:flex gap-4 md:gap-8 mt-5 md:mt-0 justify-end">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`w-16 h-16 rounded-full border border-gray-900 flex items-center justify-center transition-all duration-300 ${
                currentIndex === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-900 hover:text-white"
              }`}
              aria-label="Previous layouts"
            >
              <ArrowLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + 2 >= layouts.length}
              className={`w-16 h-16 rounded-full border border-gray-900 flex items-center justify-center transition-all duration-300 ${
                currentIndex + 2 >= layouts.length
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-900 hover:text-white"
              }`}
              aria-label="Next layouts"
            >
              <ArrowRight className="w-6 h-6 text-black" />
            </button>
          </MotionWrapper>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8">
          {visibleLayouts.map((layout) => (
            <div key={layout.id}>
              <div className="relative mt-10">
                <MotionWrapper className="relative flex items-center justify-center overflow-hidden h-[400px] md:h-[300px] lg:h-[410px] xl:h-[580px]">
                  <Image
                    src={layout.floorPlan}
                    alt={`${layout.title} floor plan`}
                    fill
                    className="object-cover "
                  />
                </MotionWrapper>
              </div>
              <MotionWrapper className="py-8">
                <p
                  className={`${inter.className} font-[350] text-black mb-3 text-[15px]`}
                >
                  STATUS -{" "}
                  <span className="text-[#bf9e5f] font-[350]">
                    {layout.status}
                  </span>
                </p>
                <h3
                  className={`${inter.className} text-[24px] font-[300] text-gray-900 mb-3 tracking-wide`}
                >
                  {layout.title}
                </h3>
                <p
                  className={`${inter.className} text-[#7b7b7b] md:mb-10 text-[16px] font-[350]`}
                >
                  {layout.area}
                </p>
              </MotionWrapper>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div
          ref={carouselRef}
          className="flex md:hidden gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide mt-10 px-2"
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {layouts.map((layout) => (
            <div
              key={layout.id}
              className="w-[85%] flex-shrink-0 snap-start bg-white rounded-lg"
            >
              <div className="relative flex items-center justify-center overflow-hidden h-[400px]">
                <Image
                  src={layout.floorPlan}
                  alt={`${layout.title} floor plan`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="py-6 px-3">
                <p
                  className={`${inter.className} font-[350] text-black mb-3 text-[15px]`}
                >
                  STATUS -{" "}
                  <span className="text-[#bf9e5f] font-[350]">
                    {layout.status}
                  </span>
                </p>
                <h3
                  className={`${inter.className} text-[22px] font-[300] text-gray-900 mb-3 tracking-wide`}
                >
                  {layout.title}
                </h3>
                <p
                  className={`${inter.className} text-[#7b7b7b] text-[16px] font-[350]`}
                >
                  {layout.area}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
