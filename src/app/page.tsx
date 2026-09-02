"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const heroSlides = [
  {
    tag: "BUILDING TRUSTED TECHNOLOGY PLATFORMS",
    title1: "Technology That Works.",
    title2: "Outcomes That Matter.",
    desc: "MSquare engineers digital platforms that simplify complex operations, connect people and information, and help organizations move forward with confidence.",
    bg: "/assets/AboutUSPage_Banner2.png", 
    icons: [
      { name: "Enterprise", icon: "fa-building" },
      { name: "Government", icon: "fa-landmark" },
      { name: "People", icon: "fa-users" },
      { name: "Field Operations", icon: "fa-network-wired" }
    ],
    btn1: "Explore MSquare",
    btn2: "Talk to MSquare"
  },
  {
    tag: "TECHNOLOGY FOR ORGANIZATIONS & PEOPLE",
    title1: "Better Operations.",
    title2: "Better Employee Experiences.",
    desc: "From enterprise administration and learning to engagement and employee experiences, MSquare builds technology around how organizations and people actually work.",
    bg: "/assets/HOMEPageBanner_02.png", 
    icons: [
      { name: "Operations", icon: "fa-gear" },
      { name: "Learning", icon: "fa-graduation-cap" },
      { name: "Engagement", icon: "fa-user-group" },
      { name: "Employee Experience", icon: "fa-award" }
    ],
    btn1: "Explore Solutions",
    btn2: "Talk to Our Experts"
  },
  {
    tag: "TECHNOLOGY FOR GOVERNANCE & FIELD PROGRAMS",
    title1: "From Ground Reality",
    title2: "to Better Decisions.",
    desc: "Connect programs, field execution, information and leadership visibility through technology engineered for complex administrative environments.",
    bg: "/assets/HOMEPageBanner_03.png", 
    icons: [
      { name: "Governance", icon: "fa-landmark" },
      { name: "Field Programs", icon: "fa-users" },
      { name: "Compliance", icon: "fa-file-signature" },
      { name: "Decision Intelligence", icon: "fa-chart-line" }
    ],
    btn1: "Explore Government Solutions",
    btn2: "Talk to Our Experts"
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide((p) => (p + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans text-gray-900">
      
      {/* 01. HERO — 2-SLIDE CAROUSEL */}
      <section className="relative w-full min-h-[85vh] flex flex-col bg-white overflow-hidden">
        {/* Background Images with AnimatePresence to ensure old images are destroyed */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full h-[120%] pointer-events-none z-0"
          >
            <Image 
              src={heroSlides[currentSlide].bg} 
              alt="Hero Background" 
              fill 
              className="object-cover object-top"
              priority={true}
            />
          </motion.div>
        </AnimatePresence>

        {/* Static overlays anchored to the section (not the cropped image) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent w-full md:w-3/4 lg:w-2/3 pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-0" />

        {/* Text Content with Wait Transition to avoid overlap */}
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-20 flex-grow flex flex-col justify-center py-16 mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl pointer-events-auto"
            >
              <span className="text-[#FF9933] font-bold text-xs tracking-widest uppercase mb-3 block">
                {heroSlides[currentSlide].tag}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2b4c] leading-tight mb-5 tracking-tight">
                {heroSlides[currentSlide].title1} <br />
                <span className="text-[#FF9933]">{heroSlides[currentSlide].title2}</span>
              </h1>
              <p className="text-gray-700 text-lg md:text-xl font-medium mb-8 leading-relaxed max-w-xl">
                {heroSlides[currentSlide].desc}
              </p>

              {/* Supporting Keywords / Icons */}
              <div className="flex flex-wrap items-center gap-6 md:gap-10 mb-10">
                {heroSlides[currentSlide].icons.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center text-center max-w-[80px]">
                    <div className="w-12 h-12 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-[#1a2b4c] text-lg mb-2">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <span className="text-xs font-bold text-[#1a2b4c] leading-tight">{item.name}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/about" className="px-8 py-3.5 bg-[#FF9933] text-white rounded-full font-bold hover:bg-[#e68a2e] transition-colors shadow-lg flex items-center gap-2">
                  {heroSlides[currentSlide].btn1} <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link href="/contact" className="px-8 py-3.5 bg-white text-[#1a2b4c] border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2">
                  {heroSlides[currentSlide].btn2} <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 02. TRUST & CREDIBILITY */}
      <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
        <div className="w-full text-center">
           <span className="text-gray-400 font-bold text-xs tracking-widest uppercase mb-4 block">
              TRUSTED TECHNOLOGY. REAL IMPLEMENTATIONS.
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b4c] mb-4">Built for Organizations That Need Technology to Perform.</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-10 px-6">
              Across enterprise operations, employee programs, government administration and field environments, MSquare technology is built for real operational use.
            </p>
            <div className="relative overflow-hidden group w-full flex">
              <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 w-max pr-16 md:pr-24">
                {/* First Set */}
                <Image src="/Images/clients/fusion.png" alt="Fusion Finance" width={140} height={50} className="object-contain h-8 md:h-10 w-auto" />
                <Image src="/Images/clients/mahindra-logo.png" alt="Mahindra Tractors" width={140} height={50} className="object-contain h-8 md:h-10 w-auto" />
                <div className="font-bold text-xl text-[#1a2b4c] inline-block">TERUMO INDIA</div>
                <div className="font-bold text-xl text-gray-700 flex items-center gap-2"><i className="fa-solid fa-landmark"></i> District Administration</div>
                <div className="font-bold text-xl text-[#FF9933] inline-block">ATMA JALNA</div>
                {/* Second Set (for infinite scroll matching -50% transform) */}
                <Image src="/Images/clients/fusion.png" alt="Fusion Finance" width={140} height={50} className="object-contain h-8 md:h-10 w-auto" />
                <Image src="/Images/clients/mahindra-logo.png" alt="Mahindra Tractors" width={140} height={50} className="object-contain h-8 md:h-10 w-auto" />
                <div className="font-bold text-xl text-[#1a2b4c] inline-block">TERUMO INDIA</div>
                <div className="font-bold text-xl text-gray-700 flex items-center gap-2"><i className="fa-solid fa-landmark"></i> District Administration</div>
                <div className="font-bold text-xl text-[#FF9933] inline-block">ATMA JALNA</div>
              </div>
            </div>
        </div>
      </section>

      {/* 03. INDUSTRIES */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-16">
            <span className="text-[#FF9933] font-bold text-xs tracking-widest uppercase mb-4 block">INDUSTRIES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4c] mb-6">Experience Where Understanding Matters.</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Technology works better when it reflects the environment in which it operates. Our experience across diverse operating environments helps us understand those differences and engineer technology that fits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: 'fa-building-columns', title: 'Banking & Financial Services', desc: 'Enterprise administration, learning, compliance and distributed operations.' },
              { icon: 'fa-landmark', title: 'Government & Public Sector', desc: 'District administration, governance, preparedness and program monitoring.' },
              { icon: 'fa-cart-shopping', title: 'FMCG & Consumer Businesses', desc: 'Sales activities, market execution and structured business processes.' },
              { icon: 'fa-seedling', title: 'Agriculture & Field Programs', desc: 'Program planning, field execution, participation, evidence and outcomes.' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#FF9933] transition-all duration-300 group flex flex-col h-full">
                <div className="w-14 h-14 rounded-full bg-orange-50 text-[#FF9933] flex items-center justify-center text-xl mb-6 group-hover:bg-[#FF9933] group-hover:text-white transition-colors">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#1a2b4c] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-8 flex-1">{item.desc}</p>
                <Link href="/industries" className="text-[#FF9933] font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Explore <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/industries" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1a2b4c] border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-sm text-sm">
              Explore Industries <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 04. CUSTOMER SUCCESS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
           <div className="text-center mb-16">
            <span className="text-[#FF9933] font-bold text-xs tracking-widest uppercase mb-4 block">PROVEN IN REAL OPERATIONS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4c] mb-6">Real Needs. Real Technology. Real Impact.</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Different organizations operate in very different environments. What connects our work is technology designed to solve real operational challenges and deliver meaningful outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Fusion Finance */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#FF9933] transition-all duration-300 flex flex-col relative group">
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full z-10">FEATURED</div>
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                 {/* Placeholder for fusion building */}
                 <div className="absolute inset-0 bg-blue-900 flex items-center justify-center text-white font-bold text-2xl">FUSION FINANCE</div>
                 <Image src="/assets/AboutUSPage_Banner1.png" alt="Fusion" fill className="object-cover opacity-50 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-[#1a2b4c] mb-2">Fusion Finance</h3>
                <p className="font-bold text-sm text-gray-900 mb-4">Enterprise Operations at Scale.</p>
                <p className="text-gray-600 text-sm mb-8 flex-1">A centralized enterprise administration platform supporting critical operational processes across Fusion Finance's nationwide branch network.</p>
                <div className="grid grid-cols-3 gap-2 mb-8">
                  <div>
                    <div className="font-bold text-[#1a2b4c] text-lg">1,740+</div>
                    <div className="text-xs text-gray-500 font-medium">Client Branches</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#1a2b4c] text-lg">Pan-India</div>
                    <div className="text-xs text-gray-500 font-medium">Operational Coverage</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#1a2b4c] text-lg">2+ Years</div>
                    <div className="text-xs text-gray-500 font-medium">In Production</div>
                  </div>
                </div>
                <Link href="#" className="text-[#FF9933] font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Explore Fusion Finance Story <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

             {/* Terumo India */}
             <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#FF9933] transition-all duration-300 flex flex-col group">
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                 <div className="absolute inset-0 bg-green-900 flex items-center justify-center text-white font-bold text-2xl">TERUMO INDIA</div>
                 <Image src="/assets/HOMEPageBanner_03.png" alt="Terumo" fill className="object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-[#1a2b4c] mb-2">Terumo India</h3>
                <p className="font-bold text-sm text-gray-900 mb-4">Creating Connected Employee Experiences.</p>
                <p className="text-gray-600 text-sm mb-8 flex-1">A digital employee experience bringing participation, communication, travel coordination, recognition and shared experiences together on one connected platform.</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <div className="font-bold text-[#1a2b4c] text-lg">600+</div>
                    <div className="text-xs text-gray-500 font-medium">Connected Employees</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#1a2b4c] text-lg"><i className="fa-solid fa-award text-[#FF9933]"></i></div>
                    <div className="text-xs text-gray-500 font-medium">Engagement & Recognition</div>
                  </div>
                </div>
                <Link href="#" className="text-[#FF9933] font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Explore Terumo India Story <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Disaster Management */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#FF9933] transition-all duration-300 flex flex-col group">
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-white font-bold text-xl text-center px-4">DISASTER MANAGEMENT</div>
                 <Image src="/assets/AboutUSPage_Banner2.png" alt="Gov" fill className="object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-[#1a2b4c] mb-2">Disaster Management</h3>
                <p className="font-bold text-sm text-gray-900 mb-4">Digitizing Preparedness & Government Reporting.</p>
                <p className="text-gray-600 text-sm mb-8 flex-1">A connected platform supporting TDMP & VDMP planning, field-level information, administrative monitoring and structured government reporting.</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <div className="font-bold text-[#1a2b4c] text-sm leading-tight">District &rarr; Taluka &rarr; Village</div>
                    <div className="text-xs text-gray-500 font-medium mt-1">Scale</div>
                  </div>
                  <div>
                     <div className="font-bold text-[#1a2b4c] text-lg"><i className="fa-solid fa-file-contract text-[#FF9933]"></i></div>
                    <div className="text-xs text-gray-500 font-medium">Compliance Ready</div>
                  </div>
                </div>
                <Link href="#" className="text-[#FF9933] font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Explore Disaster Management Story <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1a2b4c] border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-sm text-sm">
              Explore Customer Success <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 05. WHY MSQUARE */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="text-center mb-16">
            <span className="text-[#FF9933] font-bold text-xs tracking-widest uppercase mb-4 block">WHY MSQUARE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4c] mb-4">Technology Must Fit the Organization.</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-400 mb-6">Not the Other Way Around.</h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-16">
              We begin by understanding how an organization actually works — its people, processes, responsibilities and challenges — and engineer technology around that reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
             {[
               { title: 'Understand Deeply', desc: 'Start with the organization and the challenge.', icon: 'fa-magnifying-glass' },
               { title: 'Engineer Thoughtfully', desc: 'Build for reliability, scale and usability.', icon: 'fa-code' },
               { title: 'Implement Responsibly', desc: 'Focus on adoption, continuity and meaningful outcomes.', icon: 'fa-rocket' },
               { title: 'Evolve Together', desc: 'Stay engaged as organizations and requirements change.', icon: 'fa-arrow-trend-up' }
             ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-orange-100 text-[#FF9933] flex items-center justify-center text-2xl mx-auto mb-6">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <h4 className="text-lg font-bold text-[#1a2b4c] mb-3">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
             ))}
          </div>

          <div className="text-center mt-12">
             <Link href="/about" className="text-[#FF9933] font-bold text-sm flex items-center justify-center gap-2 hover:gap-3 transition-all">
                Discover Our Philosophy <i className="fa-solid fa-arrow-right"></i>
             </Link>
          </div>
        </div>
      </section>

      {/* 06. INSIGHTS */}
      <section className="py-24 bg-[#f8f9fa]">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-12">
              <span className="text-[#FF9933] font-bold text-xs tracking-widest uppercase mb-4 block">INSIGHTS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4c] mb-6">Technology With Purpose.</h2>
              <p className="text-gray-600 max-w-2xl text-lg mb-4 font-medium">
                Stories, experiences and perspectives shaped by technology delivered in the real world.
              </p>
              <p className="text-gray-600 max-w-2xl text-lg">
                Every implementation teaches us something — about people, processes, information, adoption and what it takes for technology to make a meaningful difference.
              </p>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-transparent shadow-md hover:border-[#FF9933] hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row group cursor-pointer mb-10">
              <div className="md:w-1/2 relative min-h-[300px]">
                <Image src="/assets/AboutUSPage_Banner2.png" alt="Insight" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-3">Featured Insight</span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a2b4c] mb-4">From Data to Decisions: Building District Visibility That Matters</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">How connected information helps district leadership see what matters and act faster in dynamic administrative environments.</p>
                <div className="text-[#FF9933] font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Read Insight <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>

            <div className="text-center">
             <Link href="#" className="text-[#FF9933] font-bold text-sm flex items-center justify-center gap-2 hover:gap-3 transition-all">
                Explore All Insights <i className="fa-solid fa-arrow-right"></i>
             </Link>
          </div>
         </div>
      </section>

      {/* 07. OUR JOURNEY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="bg-[#f8f9fa] rounded-[2rem] p-4 flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto rounded-2xl overflow-hidden shrink-0">
               <Image src="/assets/AboutUSPage_Banner2.png" alt="From Jalna" fill className="object-cover" />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
               <span className="text-[#FF9933] font-bold text-xs tracking-widest uppercase mb-4 block">OUR JOURNEY</span>
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2b4c] mb-6 leading-tight">
                 From Jalna.<br/>Building Beyond Boundaries.
               </h2>
               <div className="w-12 h-1 bg-[#FF9933] mb-8"></div>
               <p className="text-gray-600 text-lg mb-6">
                 MSquare began in 2019 with a simple belief — technology should solve the problem before it showcases the technology.
               </p>
               <p className="text-gray-600 text-lg mb-8">
                 From our roots in Jalna to our growing development presence in Pune, we continue to engineer platforms for organizations operating across industries, locations and communities.
               </p>
               <p className="font-bold text-[#1a2b4c] text-xl mb-10">Born in India. Built for the World.</p>
               
               <div>
                <Link href="/about" className="text-[#FF9933] font-bold text-sm flex items-center gap-2 hover:translate-x-2 transition-transform">
                  Discover MSquare <i className="fa-solid fa-arrow-right"></i>
                </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08. FINAL CTA */}
      <section className="py-24 bg-[#0b162c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image src="/assets/AboutUSPage_Banner3.png" alt="Background" fill className="object-cover object-right" />
        </div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-[#FF9933] text-xs font-bold tracking-widest uppercase mb-8">
             LET'S BUILD WHAT MATTERS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Every Meaningful Technology Journey <br/> Starts With a Conversation.
          </h2>
          <p className="text-gray-300 text-xl mb-12">
            Tell us what needs to work better. We'll start by understanding the challenge.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
             <Link href="/contact" className="px-10 py-4 bg-[#FF9933] text-white rounded-full font-bold hover:bg-[#e68a2e] transition-colors shadow-lg flex items-center gap-2 text-lg">
                Talk to MSquare <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link href="/solutions" className="px-10 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors flex items-center gap-2 text-lg backdrop-blur-md">
                Explore Solutions <i className="fa-solid fa-arrow-right"></i>
              </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
