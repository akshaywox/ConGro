import React from 'react'
import LandmarksSection from './DownHero'
import { motion } from 'framer-motion'

const Timeline = () => {
  const fadeShow = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  }

  const features = [
    {
      id: '01',
      title: 'Home automation-enabled',
      description:
        'Experience next generation living with homes equipped with smart automation, intelligent security, and connected controls that bring comfort and convenience to your lifestyle.',
      image: '/home/cf1.png',
    },
    {
      id: '02',
      title: 'Sustainable Tech Build',
      description:
        'Each residence is built with eco conscious materials and modern green practices to reduce energy use and create a healthier environment while maintaining a sense of luxury.',
      image: '/home/cf2.png',
    },
    {
      id: '03',
      title: 'Premium Amenities',
      description:
        'Enjoy a lifestyle of balance and recreation with landscaped gardens, a fully equipped gym, a refreshing pool, and inviting community spaces designed for relaxation and connection.',
      image: '/home/cf3.png',
    },
    {
      id: '04',
      title: 'Innovative Floor Plans',
      description:
        'Every layout is thoughtfully designed to make the most of space, natural light, and ventilation, creating homes that are both functional and beautifully refined for today’s way of living.',
      image: '/home/cf4.png',
    },
  ]
  return (
    <section className="w-full bg-white relative">
      <LandmarksSection />
      {/* </div> */}
      <div className="w-full pt-[40px] md:pt-[75px] lg:pt-[167px] lg:pb-[128px]">
        <div className="w-[95%] lg:w-[90%] max-w-[1400px] mx-auto border-t-[0.5px] border-black/30 ">
          {/* Title */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center pt-[50px] pb-[60px] lg:pt-[50px] lg:pb-[82px] justify-between ">
            <h2 className="lg:text-[48px] text-black text-[36px] leading-10 lg:leading-normal xl:text-[46px] playflair">
              The Confident Way of Living
            </h2>
            <div className="flex flex-col font-sans lg:mt-0 mt-5 !leading-[1.6] md:leading-5 lg:leading-5 tracking-[0.02em] lg:tracking-wide text-left lg:text-right text-[17px] lg:text-[15px] text-black/50 ">
              <p className="hidden lg:block">Discover a residential experience</p>
              <p className="hidden lg:block"> where innovation meets quality,</p>
              <p className="hidden lg:block">sustainability blends with modern</p>
              <p className="hidden lg:block">design, and every home.</p>
              <p className="lg:hidden max-w-[450px]">
                Discover a residential experience where innovation meets quality, sustainability
                blends with modern design, and every home.
              </p>
            </div>
          </div>
          {/* Mobile */}
          <div className="w-full md:hidden mx-auto">
            <div className="relative">
              {/* Features */}
              {features.map((feature, index) => (
                <div key={feature.id} className="relative mb-[50px] last:mb-0">
                  {/* Number Box with Timeline Connection */}
                  <div className="flex">
                    {/* Right Side - Content Grid */}
                    <div
                      className={`flex lg:flex-row flex-col justify-between md:gap-0 ${index === features.length - 1 ? 'mb-[80px]' : ''} items-start`}
                    >
                      {/* Text Content */}
                      <div className="flex items-center mt-5 flex-col">
                        <div className="">
                          <h2 className="text-2xl md:text-[26px] xl:text-[29.4px] font-medium md:font-light text-gray-900 ">
                            {feature.title}
                          </h2>
                          <p className="text-[#7b7b7b] mt-3 xl:text-[16px] tracking-[0.02em] text-[16px] md:text-[14px] !leading-[1.6] md:leading-[22px]">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      {/* Image */}
                      <div className={`order-first w-full ${index === 0 ? '' : 'mt-[25px]'} `}>
                        <div className="overflow-hidden w-full">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full aspect-square object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Above 1024px */}
          <div className="w-full md:block hidden mx-auto">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-3 lg:left-4 top-0 bottom-0 w-px bg-[#e1dbcb] "></div>
              {/* Features */}
              {features.map((feature, index) => {
                // const progress = scrollProgress[index] || 0
                // const translateY = progress * 100 // Adjust multiplier for speed
                return (
                  <div key={feature.id} className="relative mb-[50px] last:mb-0">
                    {/* Number Box with Timeline Connection */}
                    <div className="flex items-start gap-8 md:gap-12">
                      {/* Left Side - Number Box */}
                      <div className="flex-shrink-0">
                        <div className="relative h-52 lg:h-64 xl:h-[436px]">
                          {/* Sticky Number Box */}
                          <div className="sticky top-[4rem] lg:top-[3.5rem] xl:top-[4.4rem] ">
                            {/* Rounded Rectangle Number Box */}
                            <div
                              className="w-6 h-16 lg:w-[34px] lg:h-[88px] border border-[#e1dbcb] rounded-full flex items-center justify-center bg-white"
                              style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                              <span className="text-sm lg:text-[16px] text-black font-light">
                                {feature.id}
                              </span>
                            </div>
                            {/* Connection dot on timeline */}
                            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[rgba(255, 255, 255, 1)] rounded-full hidden md:block"></div>
                          </div>
                        </div>
                      </div>
                      {/* Right Side - Content Grid */}
                      <div
                        className={`flex-1 flex h-auto gap-8 justify-between md:gap-0 ${index === features.length - 1 ? 'mb-[80px]' : ''} items-start`}
                      >
                        {/* Text Content */}
                        {/* <div className="w-1/2 xl:w-[46.5%] h-52 lg:h-64 xl:h-[436px]"> */}
                        <div
                          // style={{
                          //   transform: `translateY(${translateY}px)`,
                          // }}
                          className="sticky top-[4rem] lg:top-[3.5rem] xl:top-[4.4rem] flex items-center flex-col pt-[18px] lg:pt-8 w-1/2 xl:w-[46.5%]  transition-transform duration-300 ease-out"
                        >
                          <motion.div
                            key={feature.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                            variants={fadeShow}
                            className="w-[320px] xl:w-[385px]"
                          >
                            <h2 className="text-2xl md:text-[20px] lg:text-[26px] xl:text-[27.5px] font-light text-gray-900 ">
                              {feature.title}
                            </h2>
                            <p className="text-[#7b7b7b] md:mt-2.5 lg:mt-[26px]  xl:text-[15px] tracking-wide md:text-[14px] leading-relaxed">
                              {feature.description}
                            </p>
                          </motion.div>
                        </div>
                        {/* </div> */}
                        {/* Image */}
                        <div className="order-first w-[47%] xl:w-[53.5%] md:order-none">
                          <div className="overflow-hidden w-full">
                            <motion.img
                              key={feature.id}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.5 }}
                              variants={fadeShow}
                              src={feature.image}
                              alt={feature.title}
                              className="w-full h-52 lg:h-64 xl:h-[436px] object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
