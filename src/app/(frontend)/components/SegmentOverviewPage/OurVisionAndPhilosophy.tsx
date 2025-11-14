import { Playfair_Display, Inter } from 'next/font/google'
import Image from 'next/image'
import MotionWrapper from '../MotionWrapper'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export default function OurVisionAndPhilosophy() {
  const featureRows = [
    {
      id: 1,
      title: 'Our Vision & Mission',
      paragraphs: [
        'To redefine premium living across Kerala by crafting landmark lifestyle projects that embody timeless design, uncompromised quality, and exceptional comfort. We aspire to be the most trusted name among the High Net-Worth (Elite focused) community - delivering developments that consistently exceed expectations through superior craftsmanship, transparent practices, and an unwavering commitment to excellence.',
        'Our mission is to design and deliver premium lifestyle spaces in prime locations that offer spacious layouts, world-class amenities, and an elevated standard of living. We take pride in upholding our two-decade legacy in real estate, hospitality, and commercial development while continuously embracing innovation and sustainability. Guided by a zero-debt business model rooted in sound governance, ethical practices, and enduring customer trust, we remain committed to serving our clients with transparency, integrity, and personalized attention. Every project we undertake reflects our dedication to quality, comfort, and distinction. Through visionary design, engineering excellence, and an unrelenting focus on customer satisfaction, we strive to create long-term value for our customers, partners, and communities.',
      ],
      image: '/SegmentOverview/frame1.jpg',
      reverse: false, // text left, image right
    },
    {
      id: 2,
      title: 'Our Philosophy',
      paragraphs: [
        'We believe true luxury is not about extravagance - it is about refinement, comfort, and authenticity. After more than two decades in real estate, hospitality, and commercial development, our journey has taught us that excellence begins with integrity and ends with customer delight.',
        'Our philosophy is simple: to craft spaces that inspire, comfort that endures, and quality that speaks for itself. Every project is thoughtfully designed to reflect timeless aesthetics, superior craftsmanship, and the distinct lifestyle of the High Net-Worth  community we serve. With a zero-debt foundation and unwavering transparency, we continue to build not just premium projects, but lasting legacies - where vision truly meets distinction.',
      ],
      image: '/SegmentOverview/frame2.jpg',
      reverse: true, // image left, text right
    },
  ]

  return (
    <section className="bg-white pt-[4rem] md:pt-[8rem] pb-5 ">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        {/* Top border */}
        <div className="border-t border-gray-200 mb-1" />

        {/* Header */}

        {/* Mapped two vertical divisions */}
        <div className="space-y-[5rem] md:space-y-[8.5rem] mb-20 pt-[1rem] md:pt-[3.5rem]">
          {featureRows.map((row) => (
            <div
              key={row.id}
              className={`flex flex-col md:flex-col lg:flex-row gap-8 md:gap-8 lg:gap-12 justify-between ${
                row.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text area */}
              <MotionWrapper className="w-full md:w-full lg:w-[48%] mt-9">
                <h2
                  className={`${playfair.className} text-[40px] md:text-5xl font-serif text-gray-900 mb-6`}
                >
                  {row.title}
                </h2>

                <div
                  className={`${inter.className} text-[17px] md:text-[15px] xl:text-[16px] text-[#7b7b7b] font-[330] space-y-7 pt-3 xl:pt-20`}
                >
                  {row.paragraphs.map((p, i) => (
                    <p key={i} className="!leading-[1.7]">
                      {p}
                    </p>
                  ))}
                </div>
              </MotionWrapper>

              {/* Image area */}
              <MotionWrapper className="w-full md:w-full lg:w-[45%] aspect-[1/1] md:h-auto lg:h-[42rem] relative overflow-hidden shadow-sm">
                <Image src={row.image} alt={row.title} fill className="object-cover" />
              </MotionWrapper>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
