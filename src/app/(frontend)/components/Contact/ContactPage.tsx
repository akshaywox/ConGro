import React, { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { PiPhoneThin } from 'react-icons/pi'
import { PiWhatsappLogoThin } from 'react-icons/pi'
import { PiEnvelopeSimpleThin } from 'react-icons/pi'
import { CiMapPin } from 'react-icons/ci'
import MotionWrapper from '../MotionWrapper'

interface FormData {
  fullName: string
  email: string
  phoneNumber: string
  projectType: string
  budgetRange: string
  visitDate: string
  visitTime: string
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  phoneNumber?: string
  projectType?: string
  budgetRange?: string
  visitDate?: string
  visitTime?: string
}

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    projectType: '',
    budgetRange: '',
    visitDate: '',
    visitTime: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const [open, setOpen] = useState(false)
  const [openBudget, setOpenBudget] = useState(false)
  const [openVisit, setOpenVisit] = useState(false)
  const [openVisitTime, setOpenVisitTime] = useState(false)

  const closeAll = () => {
    setOpen(false)
    setOpenBudget(false)
    setOpenVisit(false)
    setOpenVisitTime(false)
  }

  const handleSelect = (value: any) => {
    handleChange({
      target: {
        name: 'projectType',
        value,
      },
    })
    setOpen(false)
  }
  const handleBudgetSelect = (value: any) => {
    handleChange({
      target: {
        name: 'budgetRange',
        value,
      },
    })
    setOpenBudget(false)
  }
  const handleVisitSelect = (value: any) => {
    handleChange({
      target: {
        name: 'visitDate',
        value,
      },
    })
    setOpenVisit(false)
  }
  const handleVisitTimeSelect = (value: any) => {
    handleChange({
      target: {
        name: 'visitTime',
        value,
      },
    })
    setOpenVisitTime(false)
  }

  const projectTypes = [
    'Residential Interior',
    'Commercial Interior',
    'Renovation',
    'Custom Furniture',
    'Consultation Only',
  ]

  const budgetRanges = [
    'Under ₹5 Lakhs',
    '₹5-10 Lakhs',
    '₹10-20 Lakhs',
    '₹20-50 Lakhs',
    'Above ₹50 Lakhs',
  ]

  const visitDates = ['This Week', 'Next Week', 'This Month', 'Flexible']

  const visitTimes = [
    '9:00 AM - 12:00 PM',
    '12:00 PM - 3:00 PM',
    '3:00 PM - 6:00 PM',
    '6:00 PM - 9:00 PM',
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    const phoneRegex = /^[6-9]\d{9}$/
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required'
    } else if (!phoneRegex.test(formData.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number'
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type'
    }

    if (!formData.budgetRange) {
      newErrors.budgetRange = 'Please select a budget range'
    }

    if (!formData.visitDate) {
      newErrors.visitDate = 'Please select a preferred visit date'
    }

    if (!formData.visitTime) {
      newErrors.visitTime = 'Please select a preferred visit time'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  // const handleSubmit = async () => {
  //   if (!validateForm()) {
  //     return
  //   }

  //   setIsSubmitting(true)

  //   // Simulate API call
  //   await new Promise((resolve) => setTimeout(resolve, 1500))

  //   console.log('Form submitted:', formData)

  //   setIsSubmitting(false)
  //   setSubmitSuccess(true)

  //   // Reset form
  //   setFormData({
  //     fullName: '',
  //     email: '',
  //     phoneNumber: '',
  //     projectType: '',
  //     budgetRange: '',
  //     visitDate: '',
  //     visitTime: '',
  //     message: '',
  //   })

  //   setTimeout(() => setSubmitSuccess(false), 5000)
  // }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData }),
      })

      const result = await res.json()
      if (!result.success) throw new Error(result.error)

      console.log('Form submitted to Payload:', result.submission)
      setSubmitSuccess(true)
    } catch (err) {
      console.error('Submission error:', err)
    } finally {
      setIsSubmitting(false)
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        projectType: '',
        budgetRange: '',
        visitDate: '',
        visitTime: '',
        message: '',
      })
      setTimeout(() => setSubmitSuccess(false), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-white flex justify-center">
      {/* Header */}

      {/* Main Content */}
      <div className="w-[90%] max-w-[1400px] mx-auto pt-[10rem] lg:pt-[12.5rem] lg:pb-[11rem]">
        <MotionWrapper>
          <h2
            className={`${cormorant.className} text-[48px] md:text-[55px] lg:text-[65px] xl:text-[92px] font-medium leading-[3rem] lg:!leading-[4rem] xl:!leading-[6rem] pb-8 text-black`}
          >
            Book Your Exclusive
            <br />
            Consultation
          </h2>
        </MotionWrapper>
        <div className="flex flex-col lg:flex-row justify-between w-full pb-[8.5rem]">
          {/* Left Column - Form */}
          <MotionWrapper className="w-full lg:w-[46%]">
            <p
              className={`${inter.className} text-[#747474] mb-8 leading-relaxed font-[350] text-[17px] md:text-[16px]`}
            >
              We’re here to support you at every stage of your home-buying journey. Share your
              preferences and preferred visit schedule, and we’ll ensure a seamless, personalized
              experience with complete professionalism.
            </p>
            <div className="hidden md:flex relative h-52 mt-16 w-full">
              <Image
                src="/aboutUs/Frame 213.jpg"
                alt="Dotted background"
                fill
                className="object-contain "
              />
            </div>
          </MotionWrapper>

          {/* Right Column - Contact Info & Map */}
          <div className="lg:w-[44%] lg:pr-5">
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Thank you! Your consultation request has been submitted successfully.
              </div>
            )}

            <div className={`space-y-5 ${inter.className} text-black font-[350] `}>
              {/* Full Name */}
              <MotionWrapper>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={`w-full md:px-3.5 py-2.5 border-b ${errors.fullName ? 'border-red-500' : 'border-b-[#7B7B7B'} focus:outline-none placeholder:text-black placeholder:font-[350]`}
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
              </MotionWrapper>

              {/* Email */}
              <MotionWrapper>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full md:px-3.5 py-2.5 border-b ${errors.fullName ? 'border-red-500' : 'border-b-[#7B7B7B'} focus:outline-none placeholder:text-black placeholder:font-[350]`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </MotionWrapper>

              {/* Phone Number */}
              <MotionWrapper>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={`w-full md:px-3.5 py-2.5 border-b ${errors.fullName ? 'border-red-500' : 'border-b-[#7B7B7B'} focus:outline-none placeholder:text-black placeholder:font-[350]`}
                />
                {errors.phoneNumber && (
                  <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
                )}
              </MotionWrapper>

              {/* Project Type */}
              <MotionWrapper>
                <div className="relative w-full">
                  {/* Custom Trigger */}
                  <div
                    onClick={() => {
  closeAll()
  setOpen(!open)
}}

                    className={`w-full md:px-3.5 py-2.5 border-b ${
                      errors.fullName ? 'border-red-500' : 'border-b-[#7B7B7B]'
                    } focus:outline-none text-black font-[350] flex justify-between items-center cursor-pointer`}
                  >
                    <span>{formData.projectType || 'Preferred Project Type'}</span>

                    {/* Arrow */}
                    <svg
                      className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {/* Dropdown List */}
                  {open && (
                    <div className="absolute left-0 top-full w-full bg-white shadow-md border border-gray-200 rounded-md z-20 mt-1">
                      {projectTypes.map((type) => (
                        <div
                          key={type}
                          onClick={() => handleSelect(type)}
                          className="px-3.5 py-2.5 hover:bg-gray-100 cursor-pointer text-black"
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {errors.projectType && (
                  <p className="mt-1 text-sm text-red-500">{errors.projectType}</p>
                )}
              </MotionWrapper>

              {/* Budget Range */}
              <MotionWrapper>
                <div className="relative w-full">
                  {/* Trigger */}
                  <div
                    onClick={() => {
  closeAll()
  setOpenBudget(!openBudget)
}}

                    className={`w-full md:px-3.5 py-2.5 border-b ${
                      errors.fullName ? 'border-red-500' : 'border-[#7B7B7B]'
                    } text-black font-[350] flex justify-between items-center cursor-pointer`}
                  >
                    <span>{formData.budgetRange || 'Budget Range'}</span>

                    <svg
                      className={`w-4 h-4 transition-transform ${openBudget ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {/* Dropdown List */}
                  {openBudget && (
                    <div className="absolute left-0 top-full w-full bg-white shadow-md border border-gray-200 rounded-md z-20 mt-1">
                      {budgetRanges.map((rng) => (
                        <div
                          key={rng}
                          onClick={() => handleBudgetSelect(rng)}
                          className="px-3.5 py-2.5 hover:bg-gray-100 cursor-pointer text-black"
                        >
                          {rng}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {errors.budgetRange && (
                  <p className="mt-1 text-sm text-red-500">{errors.budgetRange}</p>
                )}
              </MotionWrapper>

              {/* Preferred Visit Date */}
              <MotionWrapper>
                <div className="relative w-full">
                  {/* Trigger */}
                  <div
                    onClick={() => {
  closeAll()
  setOpenVisit(!openVisit)
}}

                    className={`w-full md:px-3.5 py-2.5 border-b ${
                      errors.fullName ? 'border-red-500' : 'border-[#7B7B7B]'
                    } text-black font-[350] flex justify-between items-center cursor-pointer`}
                  >
                    <span>{formData.visitDate || 'Preferred Visit Date'}</span>

                    <svg
                      className={`w-4 h-4 transition-transform ${openVisit ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {/* Dropdown List */}
                  {openVisit && (
                    <div className="absolute left-0 top-full w-full bg-white shadow-md border border-gray-200 rounded-md z-20 mt-1">
                      {visitDates.map((date) => (
                        <div
                          key={date}
                          onClick={() => handleVisitSelect(date)}
                          className="px-3.5 py-2.5 hover:bg-gray-100 cursor-pointer text-black"
                        >
                          {date}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {errors.visitDate && (
                  <p className="mt-1 text-sm text-red-500">{errors.visitDate}</p>
                )}
              </MotionWrapper>

              {/* Preferred Visit Time */}
              <MotionWrapper>
                <div className="relative w-full">
                  {/* Trigger */}
                  <div
                    onClick={() => {
  closeAll()
  setOpenVisitTime(!openVisitTime)
}}

                    className={`w-full md:px-3.5 py-2.5 border-b ${
                      errors.fullName ? 'border-red-500' : 'border-[#7B7B7B]'
                    } text-black font-[350] flex justify-between items-center cursor-pointer`}
                  >
                    <span>{formData.visitTime || 'Preferred Visit Time'}</span>

                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openVisitTime ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {/* Dropdown List */}
                  {openVisitTime && (
                    <div className="absolute left-0 top-full w-full bg-white shadow-md border border-gray-200 rounded-md z-20 mt-1">
                      {visitTimes.map((time) => (
                        <div
                          key={time}
                          onClick={() => handleVisitTimeSelect(time)}
                          className="px-3.5 py-2.5 hover:bg-gray-100 cursor-pointer text-black"
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {errors.visitTime && (
                  <p className="mt-1 text-sm text-red-500">{errors.visitTime}</p>
                )}
              </MotionWrapper>

              {/* Message */}
              <MotionWrapper>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={2}
                  className="w-full md:px-3.5 py-2.5 border-b border-black rounded-lg focus:outline-none   resize-none placeholder:text-black placeholder:font-[350]"
                />
              </MotionWrapper>

              {/* Submit Button */}
              <MotionWrapper>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`${inter.className} text-white text-[15px] font-light w-full px-6 py-5 hidden md:flex items-center justify-center gap-4 bg-[#342c27] hover:bg-gray-800 transition-colors mt-4 md:mt-[4rem] xl:mt-[2.5rem] `}
                >
                  <span>{isSubmitting ? 'SUBMITTING...' : 'REQUEST A PRIVATE CONSULTATION'}</span>{' '}
                  <ArrowUpRight strokeWidth={1} size={22} />
                </button>
              </MotionWrapper>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <div className="bg-gray-100 h-64 lg:h-[45rem] flex items-center justify-center relative overflow-hidden lg:w-[49%]">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>

            <MotionWrapper className="relative z-10 w-full h-full">
              {/* <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Map View</p>
              <p className="text-xs text-gray-400 mt-1">Thrissur District, Kerala</p> */}
              <div className="relative w-full h-[400px] lg:h-full">
                <Image
                  src="/contact/map.jpg"
                  alt="Map View"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </MotionWrapper>
          </div>
          <div className="lg:w-[44%]">
            <div className="mb-[3.9rem]">
              <MotionWrapper>
                <h3
                  className={`text-[2.5rem] md:text-[2.9rem] playflair mb-6 leading-[3.6rem] text-black mt-10 lg:mt-0`}
                >
                  We Are Within Reach
                </h3>
              </MotionWrapper>
              <MotionWrapper>
                <p
                  className={`${inter.className} text-[#747474] mb-8 leading-relaxed font-[350] text-[17px] md:text-[16px]`}
                >
                  We are here to support you at every step of your journey toward finding your ideal
                  home - from exploring our premium residences to scheduling a private site visit or
                  seeking clarity on any project details.
                </p>
                <p
                  className={`${inter.className} text-[#747474] mb-8 leading-relaxed font-[350] text-[17px] md:text-[16px]`}
                >
                  Connect with us via phone, WhatsApp, or email, or meet us in person at our
                  conveniently located office. For added ease, our interactive map will guide you
                  directly to us.
                </p>
              </MotionWrapper>
            </div>

            {/* Contact Details */}
            <div className=" mb-20 lg:mb-8">
              <MotionWrapper className="flex items-start space-x-3 text-[#808080] font-[350] text-[0.95rem] border-b-[#BF9E5F] border-b-[0.5px] py-5">
                <PiPhoneThin className="w-5 h-5 xl:w-[1.4rem] xl:h-[1.4rem] text-[#BF9E5F]" />
                <span>+91 9895811811</span>
              </MotionWrapper>
              <MotionWrapper className="flex items-start space-x-3 text-[#808080] font-[350] text-[0.95rem] border-b-[#BF9E5F] border-b-[0.5px] py-5">
                <PiWhatsappLogoThin className="w-5 h-5 xl:w-[1.4rem] xl:h-[1.4rem] text-[#BF9E5F]" />
                <span>xxx</span>
              </MotionWrapper>
              <MotionWrapper className="flex items-start space-x-3 text-[#808080] font-[350] text-[0.95rem] border-b-[#BF9E5F] border-b-[0.5px] py-5">
                <PiEnvelopeSimpleThin className="w-5 h-5 xl:w-[1.4rem] xl:h-[1.4rem] text-[#BF9E5F]" />
                <span>xxx</span>
              </MotionWrapper>
              <MotionWrapper className="flex items-start space-x-3 text-[#808080] font-[350] text-[0.95rem] py-5">
                <CiMapPin className="w-5 h-5 xl:w-[2rem] xl:h-[2rem] text-[#BF9E5F]" />
                <span>
                  Confident Tower, N H Bypass, Puthiya Road, near Holiday Inn Hotel, Jn, Vennala,
                  Kochi, Ernakulam, Kerala 682025
                </span>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
