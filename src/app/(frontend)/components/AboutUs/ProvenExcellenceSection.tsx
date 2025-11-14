'use client'

import { Playfair_Display, Inter } from 'next/font/google'
import MotionWrapper from '../MotionWrapper'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

const stats = [
  { number: 6516, label: 'Satisfied Customers', suffix: '+' },
  { number: 26, label: 'Projects completed under RERA', suffix: '' },
  { number: 49, label: 'RERA approved projects', suffix: '' },
]

// ✅ Counter that runs only when visible
function Counter({
  value,
  duration = 2,
  suffix = '',
  trigger,
}: {
  value: number
  duration?: number
  suffix?: string
  trigger: boolean
}) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest: number) => Math.floor(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!trigger) return // don't start until visible
    const controls = animate(count, value, { duration })
    const unsubscribe = rounded.on('change', (v: number) => setDisplayValue(v))
    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [trigger, count, value, duration, rounded])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: trigger ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {displayValue}
      {suffix}
    </motion.span>
  )
}

export default function ProvenExcellenceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 }) // trigger when 30% visible

  return (
    <section ref={ref} className="bg-white py-20 md:py-48">
      <div className="w-[90%] max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between gap-0 md:gap-10 xl:gap-0">
        {/* LEFT SIDE */}
        <MotionWrapper className="xl:w-[45%] w-full">
          <h2
            className={`${playfair.className} hidden xl:block text-4xl md:text-5xl text-gray-900 !leading-[1.3] mb-10 md:mb-6`}
          >
            Proven Excellence in
            <br  />
            Every Segment
          </h2>

           <h2
            className={`${playfair.className}  xl:hidden text-4xl md:text-5xl text-gray-900 !leading-[1.3] mb-10 md:mb-4`}
          >
            Proven Excellence in Every Segment
          </h2>


          <MotionWrapper
            className={`${inter.className} text-[#7b7b7b] text-[16px] md:text-[16px] !leading-[1.6] space-y-6 font-[350]`}
          >
            <p>
              Confident Group has consistently raised the standards of real estate in South India,
              delivering homes that exemplify quality, precision, and enduring value across every
              segment. From Smile Homes, crafted for smart and efficient living, to Confi Luxe,
              where understated luxury meets modern comfort; Lifestyle Plus, designed for those
              seeking elevated experiences, and Premium Lifestyle, our premium offering that defines
              sophistication - each project reflects meticulous planning, engineering expertise, and
              an unwavering commitment to customer satisfaction.
            </p>

            <p>
              Every home is thoughtfully designed to harmonize style, functionality, and lasting
              value, ensuring that a Confident home is not merely a residence, but a statement of
              trust, refinement, and lifestyle excellence.
            </p>
          </MotionWrapper>
        </MotionWrapper>

        {/* RIGHT SIDE */}
        <div className="xl:w-[50%] w-full flex flex-col justify-center space-y-20 mt-10">
          {stats.map(({ number, label, suffix }, idx) => (
            <MotionWrapper key={idx}>
              <div className="md:px-7">
                <h3
                  className={`${playfair.className} text-4xl md:text-4xl xl:text-[48px] text-gray-900 mb-1`}
                >
                  <Counter value={number} suffix={suffix} trigger={isInView} />
                </h3>
                <p
                  className={`${inter.className} text-[16px] md:text-[16px] text-[#7b7b7b] mb-5 tracking-wide mt-4 font-[350]`}
                >
                  {label}
                </p>
              </div>
              <div className="border-b border-gray-300"></div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
