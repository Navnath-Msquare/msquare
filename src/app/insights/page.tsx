'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function InsightsPage() {
  return (
    <div className="bg-[#fafafa] min-h-screen">
      {/* 01 - HERO */}
      <section className="relative pt-32 pb-48 lg:pb-64 bg-[#05070a] overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/MSquare-Insights.png"
            alt="MSquare Insights Background"
            fill
            className="object-cover"
            priority
            quality={100}
            unoptimized
          />
          {/* Subtle gradient for text readability, keeping the image fully bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070a]/90 via-transparent to-transparent" />

          {/* Floating Icons mimicking the reference image */}
          <div className="absolute top-20 right-[25%] text-[#FF9933]/40 text-4xl animate-pulse">
            <i className="fa-solid fa-users"></i>
          </div>
          <div className="absolute top-40 right-[35%] text-[#FF9933]/30 text-5xl animate-bounce" style={{ animationDuration: '4s' }}>
            <i className="fa-solid fa-chart-simple"></i>
          </div>
          <div className="absolute top-32 right-[15%] text-[#FF9933]/50 text-4xl">
            <i className="fa-solid fa-hand-holding-heart"></i>
          </div>
          <div className="absolute top-52 right-10 text-[#FF9933]/30 text-6xl">
            <i className="fa-solid fa-bullseye"></i>
          </div>
        </div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="container mx-auto px-6 max-w-7xl relative z-10 pt-10">
          <motion.div variants={fadeUp} className="mb-4">
            <span className="text-[#FF9933] text-sm font-bold tracking-widest uppercase">INSIGHTS</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
            Technology With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] to-[#ffb86d]">Purpose.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#FF9933] font-bold text-lg md:text-xl mb-6">
            Stories of technology built around real-world needs.
          </motion.p>
          <motion.div variants={fadeUp} className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed space-y-2">
            <p>Not every meaningful technology story begins with software.</p>
            <p>Sometimes it begins with an emergency.</p>
            <p>Sometimes with a social need.</p>
            <p>Sometimes with an organization trying to serve people better.</p>
            <p className="text-[#FF9933] font-bold mt-6 pt-4">These are some of those stories.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 02 - FEATURED INSIGHTS */}
      <section className="relative z-20 -mt-20 lg:-mt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="text-center bg-white p-10 rounded-t-3xl shadow-sm border-b border-gray-100"
          >
            <span className="text-[#FF9933] text-xs font-bold tracking-widest uppercase mb-4 block">TECHNOLOGY DELIVERED</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a2b4c] mb-4">Real Needs. Real Technology. Real Impact.</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Stories from situations where technology was engineered around a specific need — connecting people, information and action.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group hover:shadow-xl hover:border-[#FF9933] hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image src="/assets/Disaster-Management.png" alt="COVID-19 Response" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-[#FF9933] text-white text-xs font-bold px-3 py-1 rounded">01</div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                  <i className="fa-solid fa-hospital-user text-xl"></i>
                  <span className="text-xs font-bold uppercase tracking-wider">TECHNOLOGY DURING CRISIS</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-black text-[#1a2b4c] mb-2 leading-tight">When Every Bed, Patient and Location Mattered.</h3>
                <h4 className="text-[#FF9933] font-bold text-sm mb-6">COVID-19 District Response</h4>
                <div className="text-gray-600 text-sm space-y-4 mb-8 flex-grow">
                  <p>During COVID-19, MSquare developed a centralized district-level platform connecting Dedicated COVID Hospitals (DCH) and COVID Care Centres (CCC).</p>
                  <p>The platform provided visibility into patient numbers, bed occupancy, oxygen-bed availability, centre capacity, daily cases and taluka-wise impact — helping district administration maintain a connected view during a rapidly changing situation.</p>
                </div>
                <Link href="/solutions/disaster-management" className="text-[#FF9933] font-bold text-sm hover:text-[#e68a2e] transition-colors inline-flex items-center gap-2 group-hover:gap-3">
                  Explore COVID-19 Response <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group hover:shadow-xl hover:border-[#FF9933] hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image src="/Images/aboutUs.jpg" alt="Blood For All" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-[#FF9933] text-white text-xs font-bold px-3 py-1 rounded">02</div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                  <i className="fa-solid fa-droplet text-xl"></i>
                  <span className="text-xs font-bold uppercase tracking-wider">TECHNOLOGY THAT CONNECTS PEOPLE</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-black text-[#1a2b4c] mb-2 leading-tight">Making Blood Donation Easier to Discover.</h3>
                <h4 className="text-[#FF9933] font-bold text-sm mb-6">Blood For All</h4>
                <div className="text-gray-600 text-sm space-y-4 mb-8 flex-grow">
                  <p>MSquare implemented a digital platform for Blood For All to help blood donors discover ongoing and upcoming donation camps.</p>
                  <p>Donors could view camp locations, schedules and event information, making it easier to discover opportunities to participate in blood donation initiatives.</p>
                </div>
                <Link href="#" className="text-[#FF9933] font-bold text-sm hover:text-[#e68a2e] transition-colors inline-flex items-center gap-2 group-hover:gap-3 mt-auto">
                  Explore Blood For All <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group hover:shadow-xl hover:border-[#FF9933] hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image src="/Images/p1.jpg" alt="Anath Aashram" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-[#FF9933] text-white text-xs font-bold px-3 py-1 rounded">03</div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                  <i className="fa-solid fa-hand-holding-medical text-xl"></i>
                  <span className="text-xs font-bold uppercase tracking-wider">TECHNOLOGY THAT SUPPORTS CARE</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-black text-[#1a2b4c] mb-2 leading-tight">Behind Every Record Is a Person Who Needs Care.</h3>
                <h4 className="text-[#FF9933] font-bold text-sm mb-6">Anath Aashram</h4>
                <div className="text-gray-600 text-sm space-y-4 mb-8 flex-grow">
                  <p>MSquare implemented a digital platform and website supporting the administration of an organization providing care to elderly residents.</p>
                  <p>Resident profiles, accommodation, food, medical information and donations could be managed through a structured system — helping the organization coordinate care and maintain important information more effectively.</p>
                </div>
                <Link href="#" className="text-[#FF9933] font-bold text-sm hover:text-[#e68a2e] transition-colors inline-flex items-center gap-2 group-hover:gap-3 mt-auto">
                  Explore Anath Aashram <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 03 - WHAT THESE STORIES MEAN TO US */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-[#fff9f2] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center md:items-start"
          >
            <div className="flex-shrink-0 flex flex-col items-center md:items-start text-center md:text-left md:w-1/3">
              <div className="w-20 h-20 bg-[#FF9933] rounded-full flex items-center justify-center text-white text-3xl mb-6 shadow-lg shadow-orange-500/30">
                <i className="fa-regular fa-lightbulb"></i>
              </div>
              <span className="text-[#FF9933] text-xs font-bold tracking-widest uppercase mb-2">WHAT THESE STORIES MEAN TO US</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a2b4c] leading-tight">Different Needs.<br />One Responsibility.</h2>
            </div>

            <div className="flex-1 text-gray-700 text-base md:text-lg leading-relaxed space-y-6">
              <p>COVID response, blood donation and elderly care are very different environments.</p>
              <p>Yet each reinforces the same lesson:</p>
              <p className="text-[#FF9933] font-bold text-xl md:text-2xl leading-tight">
                Technology becomes meaningful when it makes something important simpler, more connected or more effective.
              </p>
              <p>That perspective continues to shape how MSquare approaches technology.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 04 & 05 - IDEAS/EXPERIENCES & TECH WITH PURPOSE */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Left: IDEAS. EXPERIENCES. PERSPECTIVES. */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="lg:w-3/5"
            >
              <span className="text-[#FF9933] text-xs font-bold tracking-widest uppercase mb-4 block">IDEAS. EXPERIENCES. PERSPECTIVES.</span>
              <h2 className="text-4xl font-black text-[#1a2b4c] mb-4 leading-tight">
                What We Learn From Building<br />Technology in the Real World.
              </h2>
              <p className="text-gray-600 mb-12">Every implementation teaches us something.</p>

              <div className="space-y-8">
                {[
                  { title: "Experiences", desc: "Stories and lessons from technology implemented in real operational environments.", icon: "fa-book-open" },
                  { title: "Observations", desc: "What we learn about people, processes, adoption and digital transformation.", icon: "fa-magnifying-glass" },
                  { title: "Perspectives", desc: "Our thinking on how technology, data and intelligence can create better outcomes.", icon: "fa-bullseye" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF9933] text-lg">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a2b4c] mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: TECHNOLOGY WITH PURPOSE Box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-2/5"
            >
              <div className="bg-[#0a1121] rounded-3xl p-10 h-full relative overflow-hidden shadow-2xl flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9933] rounded-full mix-blend-screen filter blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>

                <span className="text-[#FF9933] text-xs font-bold tracking-widest uppercase mb-8 block relative z-10">TECHNOLOGY WITH PURPOSE</span>

                <div className="space-y-8 relative z-10">
                  {[
                    { text: "Built around real needs.", icon: "fa-users" },
                    { text: "Used by real people.", icon: "fa-mobile-screen" },
                    { text: "Designed to create meaningful outcomes.", icon: "fa-crosshairs" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-full border border-gray-700 bg-gray-800/50 flex items-center justify-center text-[#FF9933] flex-shrink-0">
                        <i className={`fa-solid ${item.icon}`}></i>
                      </div>
                      <span className="text-white text-xl font-bold tracking-wide">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Abstract Data Background */}
                <div className="absolute bottom-0 right-0 w-full h-1/2 opacity-20 pointer-events-none">
                  <Image src="/assets/MSquare-Insights.png" alt="Tech" fill className="object-cover object-bottom" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 06 - FUTURE INSIGHTS AREA (MORE FROM MSQUARE) */}
      <section className="py-16 pb-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-10 md:p-16 border border-gray-100 hover:border-[#FF9933] transition-colors duration-300 shadow-sm relative overflow-hidden flex flex-col md:flex-row gap-10 items-center"
          >
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#1a2b4c 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="w-32 h-32 flex-shrink-0 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg relative z-10 transform -rotate-6">
              <span className="text-[#FF9933] text-6xl font-black">M</span>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <i className="fa-solid fa-pen-nib text-[#1a2b4c] text-sm"></i>
              </div>
            </div>

            <div className="flex-1 relative z-10 text-center md:text-left">
              <span className="text-[#FF9933] text-xs font-bold tracking-widest uppercase mb-2 block">MORE FROM MSQUARE</span>
              <h2 className="text-3xl font-black text-[#1a2b4c] mb-4">More Stories Are Being Written.</h2>
              <p className="text-gray-600 mb-8 max-w-2xl leading-relaxed">
                As we continue to engineer and implement technology across organizations and communities, we will share the experiences and lessons that shape our thinking.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF9933] text-white px-6 py-3 rounded-md font-bold hover:bg-[#e68a2e] transition-colors shadow-md">
                Stay Connected With MSquare <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
