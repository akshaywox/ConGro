import React from 'react';
import { Building2, Home, MapPin } from 'lucide-react';

const LandmarksSection = () => {
  const sections = [
    {
      id: 1,
      icon: "/home/icon1.svg",
      title: 'Landmarks',
      subtitle: 'Defining our legacy'
    },
    {
      id: 2,
      icon: "/home/icon2.svg",
      title: 'Residences',
      subtitle: 'Modern, refined living'
    },
    {
      id: 3,
      icon: "/home/icon3.svg",
      title: 'Locations',
      subtitle: 'Connected to all'
    }
  ];

  return (
    <div  className="w-full md:absolute md:-top-[35px] lg:-top-[30px] bg-transparent z-40">
      <div className="w-full  md:w-[90%] lg:max-w-[1250px] mx-auto bg-white pt-[30px] md:pt-0 md:py-[20px] lg:py-[30px] lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`flex items-start gap-3.5 lg:items-center lg:justify-center  px-6 md:px-5 py-6 md:py-1 ${
                index !== sections.length - 1 
                  ? 'border-b-[0.2px] md:border-b-0 md:border-r-[0.2px] border-[#bf9e5f]' 
                  : ''
              }`}
            >
              {/* Icon Placeholder - Space for custom icon */}
              <img src={section.icon} alt='Icon' className="w-10 h-10 md:w-8 md:h-8 lg:w-10 lg:h-10  flex items-center justify-center md:mt-1 lg:mt-0 mb-4 md:mb-5" />

              <div className='flex flex-col'>
                  {/* Title */}
                  <h3 className="text-[24px] md:text-xl lg:text-2xl text-[#2c2c2c] playflair font-medium mb-1 md:mb-0 lg:mb-1">
                    {section.title}
                  </h3>
                  {/* Subtitle */}
                  <p className="text-[16px] lg:text-base  text-[#6b6b6b] font-light">
                    {section.subtitle}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandmarksSection;