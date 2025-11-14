import { motion } from 'framer-motion';
import React from 'react';

const HomesRightPlace = () => {
  const features = [
    {
      id: 1,
      title: 'Well-Connected Neighborhoods',
      iconPlaceholder: true,
      ico: '/home/ic1.svg'
    },
    {
      id: 2,
      title: 'Convenient Urban Living',
      iconPlaceholder: true,
        ico: '/home/ic2.svg'
    },
    {
      id: 3,
      title: 'Lifestyle & Amenities Nearby',
      iconPlaceholder: true,
        ico: '/home/ic3.svg'
    },
    {
      id: 4,
      title: 'Thoughtfully Chosen Locations',
      iconPlaceholder: true,
        ico: '/home/ic4.svg'
    }
  ];
  
    const fadeShow = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  }
  return (
    <div className="w-full overflow-hidden h-auto bg-[#342C27] pt-[80px] pb-[80px] md:py-16 lg:py-20 xl:py-[132px] lg:px-8">
      <div className="w-[95%] lg:w-[95%] max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row w-full gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Side - Text Content */}
          <motion.div
                        initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeShow} className="space-y-6 lg:w-[40%] md:pr-8 lg:pr-16">
            <h2 
              className="text-[36px] md:text-[42px] lg:text-[44px] xl:text-[48px] leading-10 md:leading-[58px] lg:leading-[65px] text-white lg:mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Homes in the<br className='hidden lg:block' /> Right Place
            </h2>
            <p className="text-white/80 ml-[2px] font-light mt-5 lg:mt-0 text-[16px] tracking-[0.02em] lg:tracking-wide !leading-[1.6] md:leading-[22px] md:text-[15px] lg:leading-[1.7] max-w-md"
            style={{ fontFamily: 'inter' }}>
              Confident Projects offers residential communities in well-connected and desirable neighborhoods. Each location is chosen to provide easy access to daily essentials, work, and lifestyle destinations, ensuring convenience and comfort for every resident.
            </p>
          </motion.div>

          {/* Right Side - Features List with Vertical Line */}
          <div className="w-full lg:w-[60%] lg:border-l-[0.3px] lg:pl-4 xl:pl-8 xl:ml-[36px] border-white/20">

            {/* Features */}
            <motion.div
                          initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.2 }}
              variants={fadeShow} className="space-y-0">
              {features.map((feature, index) => (
                <div 
                  key={feature.id}
                  className={`relative flex items-center ${index === 0 ? 'md:py-0 md:pb-8 md:pt-[0.2rem]' : 'md:py-8'} gap-6 md:gap-[3.65rem] py-6  ${
                    index !== features.length - 1 ? 'border-b-[0.3px] border-white/20' : 'border-b-[0.3px] border-white/20'
                  }`}
                >
                  {/* Icon Placeholder */}
                  <div className="flex-shrink-0 relative z-10">
                    <img src={feature.ico} alt={feature.title} className="w-14 h-14 md:w-16 md:h-16 xl:size-[5rem] bg-[#342C27] flex items-center justify-center"/>
                  </div>

                  {/* Feature Title */}
                  <div className="flex-1">
                    <h3 className="text-white text-lg md:text-xl lg:text-[26px] xl:text-[28px] font-extralight" style={{ fontFamily: 'inter', letterSpacing: '0.04em' }}>
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomesRightPlace;