'use client'

import React, { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Playfair_Display, Inter } from 'next/font/google'
import MotionWrapper from '../MotionWrapper'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export default function PremiumLivingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Enquiry submitted successfully!')
    setFormData({ fullName: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="bg-[#bf9e5f] text-white">
      <div className="w-[90%] max-w-[1400px] mx-auto md:px-7 py-16 md:py-24 lg:pt-[9.5rem] lg:pb-[8.6rem]">
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT SIDE */}
          <MotionWrapper className="space-y-[1.4rem] xl:pr-8">
            <h3
              className={`${playfair.className} text-[44px] md:text-[48px] mt-[4px] font-serif !leading-[1.33] md:w-[90%] xl:w-[75%]`}
            >
              Your Next Step
              <br />
              Towards Premium Living
            </h3>

            <p
              className={`${inter.className} text-[17px] md:text-[0.97rem] text-white/90 !leading-[1.8] md:w-[90%] xl:w-[78%] font-light`}
            >
              A world of elevated comfort and sophistication awaits. Connect with us to take the
              first step toward premium living. Let us guide you into a space where modern luxury meets everyday needs.
            </p>
          </MotionWrapper>

          {/* RIGHT SIDE - FORM */}
          <div className="w-full -mt-[0.6rem] xl:pl-28">
            <div className="space-y-[1.2rem]">
              {/* Full Name */}
              <MotionWrapper>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className={`${inter.className} w-full bg-transparent border-b border-white/40 py-[0.7rem] px-0 pl-3 text-white placeholder:text-sm placeholder-white/50 focus:outline-none focus:border-white transition-colors`}
                />
              </MotionWrapper>

              {/* Email */}
              <MotionWrapper>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className={`${inter.className} w-full bg-transparent border-b border-white/40 py-[0.7rem] px-0 pl-3 text-white placeholder:text-sm placeholder-white/50 focus:outline-none focus:border-white transition-colors`}
                />
              </MotionWrapper>

              {/* Phone */}
              <MotionWrapper>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  pattern="[0-9]{10,}"
                  title="Enter a valid phone number (at least 10 digits)"
                  className={`${inter.className} w-full bg-transparent border-b border-white/40 py-[0.7rem] px-0 pl-3 text-white placeholder:text-sm placeholder-white/50 focus:outline-none focus:border-white transition-colors`}
                />
              </MotionWrapper>

              {/* Message */}
              <MotionWrapper>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  className={`${inter.className} w-full bg-transparent border-b border-white/40 py-[0.7rem] px-0 pl-3 h-[63px] text-white placeholder:text-sm placeholder-white/50 focus:outline-none focus:border-white transition-colors resize-none`}
                ></textarea>
              </MotionWrapper>

              {/* Button */}
              <MotionWrapper className="pt-6">
                <button
                  type="submit"
                  className={`${inter.className} w-full bg-white text-black py-5 px-6 font-light text-[17px] md:text-[15px] flex items-center justify-center gap-2 hover:bg-white/95 transition-colors group`}
                >
                  SUBMIT YOUR ENQUIRY
                  <ArrowUpRight
                    strokeWidth={1}
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </MotionWrapper>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
