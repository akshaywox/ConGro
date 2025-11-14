import React from "react";
import MotionWrapper from "../MotionWrapper"; 

const VirtualBrand = () => {
  return (
    <section className="py-20 md:pt-[12.5rem] 2xl:pt-52 md:pb-[4.4rem] 2xl:pb-20 bg-white">
      <div className="w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8 md:gap-12 border-t border-gray-200">
        {/* Left: Heading */}
        <MotionWrapper className="w-full md:w-1/2 flex items-start mt-10 2xl:mt-12">
          <h2
            className="text-[40px] md:text-5xl  font-light text-black !leading-[1.5]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Virtual 
            <br />
           Brand Film
          </h2>
        </MotionWrapper>

        {/* Right: Description (aligned bottom) */}
         <MotionWrapper className="w-full md:w-1/2 flex md:items-end justify-end md:pl-8">
          <p className="text-gray-500 text-[17px] md:text-[15px] !leading-[1.7] md:!leading-[1.3] 2xl:leading-relaxed  md:text-right  w-full md:w-[90%] lg:w-[70%] xl:w-[40%] font-[350]" style={{ fontFamily: "inter" }}>
            Discover a residential experience where innovation meets quality, sustainability blends with modern design, and every home.
          </p>
         </MotionWrapper>
      </div>
    </section>
  );
};

export default VirtualBrand;
