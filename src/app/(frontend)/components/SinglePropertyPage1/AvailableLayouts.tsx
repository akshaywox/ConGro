"use client";

import React, { useState, useRef } from "react";
import Image, { ImageProps } from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";
import MotionWrapper from "../MotionWrapper"; 
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function AvailableLayouts({availableLayouts}:any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);



  const layouts = [
    {
      id: 1,
      title: "APARTMENT 1 BEDROOM",
      area: "Total Area 770 sqt",
      floorPlan: "/single_property/img3.jpg",
    },
    {
      id: 2,
      title: "APARTMENT 2 BEDROOM",
      area: "Total Area 770 sqt",
      floorPlan: "/single_property/img2.jpg",
    },
    {
      id: 3,
      title: "APARTMENT 3 BEDROOM",
      area: "Total Area 1200 sqt",
      floorPlan: "/aboutUs/Frame 213.jpg",
    },
    {
      id: 4,
      title: "PENTHOUSE 4 BEDROOM",
      area: "Total Area 1800 sqt",
      floorPlan: "/aboutUs/Frame 213.jpg",
    },
  ];

  // For Desktop Navigation
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 2));
  };
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 2 >= availableLayouts.length ? prev : prev + 2
    );
  };
  const visibleLayouts = availableLayouts.slice(currentIndex, currentIndex + 2);

  // For Mobile Drag Scroll
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
    <div className="w-full bg-gray-50 md:py-44 py-32">
      <div className="w-[90%] max-w-[1400px] mx-auto border-t border-gray-200">
        {/* Header Section */}
        <div className="md:flex justify-between items-start mb-12 mt-20">
          <MotionWrapper className="md:max-w-xl">
            <h2
              className={`${playfair.className} text-[40px] lg:text-5xl font-serif text-gray-900 mb-6`}
            >
              Available Layouts
            </h2>
            <p
              className={`${inter.className} text-[#7b7b7b] leading-relaxed text-[17px] md:text-[15px]`}
            >
              Explore the complete range of residential projects reflecting our
              legacy of quality, innovation, and excellence across prime
              locations.
            </p>
          </MotionWrapper>

          {/* Desktop Navigation Buttons */}
          <MotionWrapper className="hidden md:flex gap-4 lg:gap-8 mt-5 justify-end">
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
              disabled={currentIndex + 2 >= availableLayouts.length}
              className={`w-16 h-16 rounded-full border border-gray-900 flex items-center justify-center transition-all duration-300 ${
                currentIndex + 2 >= availableLayouts.length
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-900 hover:text-white"
              }`}
              aria-label="Next layouts"
            >
              <ArrowRight className="w-6 h-6 text-black" />
            </button>
          </MotionWrapper>
        </div>

        {/* Desktop Layout Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {visibleLayouts.map((layout: any, index:number) => (
            <div key={index}>
              <div className="relative bg-white mt-10">
                <MotionWrapper className="relative bg-gray-100 flex items-center justify-center overflow-hidden h-[460px]">
                  <Image
                    src={layout?.layoutImage?.url}
                    alt={`${layout?.layoutImage?.alt} floor plan`}
                    fill
                    className="object-cover"
                  />
                </MotionWrapper>
              </div>

              <MotionWrapper className="py-8">
                <h3
                  className={`${playfair.className} text-[24px] font-serif text-gray-900 mb-5 tracking-wide`}
                >
                  {layout?.layoutTitle}
                </h3>
                <p
                  className={`${inter.className} text-[#7b7b7b] mb-10 text-[16px]`}
                >
                  {layout?.layoutSubParagraph}
                </p>
                <button
                  className={`${inter.className} w-full bg-[#342c27] hover:bg-black text-white py-5 text-[16px] font-light uppercase transition-colors duration-300`}
                >
                  MORE DETAILS
                </button>
              </MotionWrapper>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div
          ref={carouselRef}
          className="flex md:hidden gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-2"
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {visibleLayouts.map((layout: any, index:number) => (
            <div
              key={index}
              className="min-w-[85%] flex-shrink-0 snap-start "
            >
              <div className="relative bg-gray-100 mt-10">
                <div className="relative flex items-center justify-center overflow-hidden h-[460px]">
                  <Image
                    src={layout?.layoutImage?.url}
                    alt={layout?.layoutImage?.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="py-8">
                <h3
                  className={`${playfair.className} text-[24px] font-serif text-gray-900 mb-5 tracking-wide`}
                >
                  {layout?.layoutTitle}
                </h3>
                <p
                  className={`${inter.className} text-[#7b7b7b] mb-10 text-[16px]`}
                >
                  {layout?.layoutSubParagraph}
                </p>
                <Link href={"/contact"} className="w-full">
                  <button
                    className={`${inter.className} w-full bg-[#342c27] hover:bg-black text-white py-5 text-[16px] font-light uppercase transition-colors duration-300`}
                  >
                    MORE DETAILS
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
