import { motion } from 'framer-motion'
import React from 'react'
import Link from "next/link";


const Banner = () => {
      const fadeShow = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  }
  return (
        <section className="w-full lg:pb-[116px] pb-[80px] pt-[80px] !lg:pt-[110px] xl:pt-[100px] xl:pb-[136px] bg-[#bf9e5f]">
          <div className="w-[95%] lg:w-[90%] h-auto max-w-[1400px] border-t-[0.2px] border-white/30 flex md:flex-row flex-col justify-between mx-auto lg:px-3 pt-[30px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeShow}
              className="flex flex-col items-left md:w-1/2 justify-left"
            >
              <h2 className=" text-[36px] md:text-[36px] leading-10 lg:text-[42px] lg:leading-[62px] text-white lg:w-[400px] playflair">
                Shaping Modern Living Through Innovation
              </h2>
              <p className="font-inter ml-[2px] tracking-[0.02em] md:w-[85%] lg:tracking-wide font-normal md:font-[200] lg:w-[500px] text-[16px] md:text-[17px] lg:text-[16.5px] !leading-[1.6] md:leading-[22px] lg:leading-7 mt-5 text-white">
                A flagship residential development combining engineering excellence, smart
                technology, and luxurious living.
              </p>
            </motion.div>
            <div className="lg:w-1/2 lg:mt-0 mt-6 flex flex-col md:justify-end justify-start md:items-end">
              <button className="w-full md:w-[300px] lg:w-[300px] xl:w-[370px] h-[60px] md:h-[56px] lg:h-[68px] flex gap-5 items-center bg-white justify-center">
  <Link href="/properties" className="flex items-center gap-5 w-full h-full justify-center">
    <p className="text-black font-inter text-[14px] lg:text-[16px] font-normal">
      EXPLORE MORE PROJECTS
    </p>
    <img className="size-3 lg:w-3.5 lg:h-3.5" src="/home/arrow.svg" alt="Button Icon" />
  </Link>
</button>
            </div>
          </div>
        </section>
  )
}

export default Banner
