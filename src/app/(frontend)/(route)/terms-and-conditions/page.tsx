"use client"
import React from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import ReactLenis, { useLenis } from 'lenis/react';

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function PrivacyPolicy() {
    const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })
  const policyData = {
    title: "Terms and Conditions",
    sections: [
      {
        id: 1,
        heading: "Introduction",
        content: `Welcome to the official website of Confident Projects (“we,” “our,” or “us”). By accessing or using this website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before proceeding. If you do not agree with these terms, you should not use this website.`
      },
      {
        id: 2,
        heading: "Use of the Website",
        content: "This website is intended to provide general information about Confident Projects, our developments, and related services.",
        list: [
          "You agree to use the website only for lawful purposes.",
          "You must not misuse or attempt to gain unauthorized access to any part of the website or its systems.",
          "Website Usage Data: Information collected by cookies (location, IP address, browser type, device information, and pages visited).",
          "All property details, images, and project specifications are indicative and subject to change at the discretion of the company or as required by authorities."
        ]
      },
      {
        id: 3,
        heading: "How We Use Your Information",
        content: "We use your personal data to:",
        list: [
          "Respond to your inquiries or service requests",
          "Provide information about our projects, offers, or updates",
          "Schedule property visits or consultations",
          "Improve our website experience and marketing communication",
          "Ensure compliance with legal and regulatory requirements"
        ],
        footer: "We may also use anonymized data for internal analytics and service enhancement."
      },
      {
        id: 4,
        heading: "Information Sharing and Disclosure",
        content: "Information Sharing and Disclosure\n\nWe do not sell or trade your personal information. Your data may be shared only with:",
        list: [
          "Authorized employees or representatives to respond to your requests",
          "Verified third-party service providers (such as marketing or analytics partners) bound by confidentiality agreements",
          "Government authorities, if required by law or regulation"
        ]
      },
      {
        id: 5,
        heading: "Data Protection and Security",
        content: "We implement strict security measures to protect your data against unauthorized access, alteration, disclosure, or destruction. Our systems are regularly monitored and updated to maintain data integrity and safeguard privacy."
      },
      {
        id: 6,
        heading: "Cookies and Tracking Technologies",
        content: "Our website may use cookies and similar technologies to improve user experience and analyze traffic. You can choose to disable cookies through your browser settings, though some parts of the website may not function optimally."
      },
      {
        id: 7,
        heading: "Your Rights",
        content: "You have the right to:",
        list: [
          "Access or request a copy of your personal data",
          "Request correction or deletion of your information",
          "Withdraw consent for marketing communications at any time"
        ],
        footer: "To exercise these rights, please contact us using the details below."
      },
      {
        id: 8,
        heading: "External Links",
        content: "Our website may include links to third-party websites. We are not responsible for the content, privacy practices, or security of these external sites."
      },
      {
        id: 9,
        heading: "Updates to This Policy",
        content: "We may update this Privacy Policy periodically to reflect changes in our practices or for legal compliance. Updated versions will be posted on this page with a revised date."
      }
    ]
  };

  return (
    <>
    <ReactLenis root />
      <div className="w-full bg-white py-12 lg:pt-20 pb-[12.1rem] ">
        <div className="w-[95%] md:w-[90%] lg:pt-[152px] max-w-[1400px] mx-auto">
      
          {/* Title */}
          <div className='w-fit border-b-[0.4px] border-gray-200'>
              <h1 className={`text-4xl lg:text-[5.2rem] xl:text-[5.2rem]  playflair text-gray-900 mb-12 lg:mb-12`}>
                {policyData.title}
              </h1>
          </div>
          {/* Sections */}
          <div className="space-y-10 lg:mt-[93px] lg:space-y-[82px] ">
            {policyData.sections.map((section) => (
              <section key={section.id} className="space-y-4">
                {/* Section Heading */}
                <h2 className={`text-lg lg:text-[24px] ${playfair.className} text-gray-900`}>
                  {section.heading}
                </h2>
                {/* Content */}
                <div className="space-y-[18px]">
                  {section.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className={`${inter.className} text-[#7b7b7b]  font-[350] text-[17px] md:text-base leading-relaxed`}>
                      {paragraph}
                    </p>
                  ))}
                  {/* List Items */}
                  {section.list && (
                    <ul className="space-y-[1px] !mt-[0.1rem]">
                      {section.list.map((item, idx) => (
                        <li key={idx} className={`${inter.className} text-[#7b7b7b] font-[350] text-[17px] md:text-base flex items-center leading-relaxed`}>
                          <span className="mr-2 mb-[0.8px] flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* Footer Text */}
                  {section.footer && (
                    <p className="{`${inter.className} text-[#7b7b7b] font-[350] text-[17px] md:text-base leading-relaxed`}">
                      {section.footer}
                    </p>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}