"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CustomerSuccessPage() {
  const [showAllLogos, setShowAllLogos] = useState(false);

  const fadeInUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* 01. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-[#0a1121] overflow-hidden pt-20 lg:pt-0">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src="/assets/CustomerSuccess_1.png"
            alt="Customer Success: Technology Proven in Real Operations."
            fill
            className="object-cover object-right blur-[1px]"
            priority
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1121] via-[#0a1121]/90 to-transparent z-10 lg:w-3/4"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1121] via-transparent to-transparent z-10 opacity-70"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-20 h-full flex flex-col justify-center py-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mb-16 lg:mb-24 mt-10 lg:mt-0"
          >
            <span className="text-[#FF9933] font-bold tracking-widest text-sm uppercase mb-4 block">Customer Success</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Technology Proven<br />in Real Operations.
            </h1>
            <p className="text-lg text-white/95 font-medium mb-6 max-w-2xl leading-relaxed drop-shadow-sm">
              From enterprises to government organizations, MSquare engineers technology that becomes part of how organizations operate, execute and make decisions.
            </p>
            <p className="text-lg text-white/95 font-medium mb-8 max-w-2xl leading-relaxed drop-shadow-sm">
              Our customer relationships extend beyond implementation supporting platforms as organizations grow, processes evolve and new requirements emerge.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 mt-auto"
          >
            {[
              { icon: 'fa-users', title: 'Multiple Industries', desc: 'Experience across diverse operating environments.' },
              { icon: 'fa-map-location-dot', title: 'Pan-India Presence', desc: 'Technology supporting distributed operations.' },
              { icon: 'fa-chart-line', title: 'Large-Scale Implementations', desc: 'Platforms designed for real organizational scale.' },
              { icon: 'fa-handshake', title: 'Long-Term Partnerships', desc: 'Continued engagement beyond go-live.' }
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex flex-col">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/20">
                  <i className={`fa-solid ${stat.icon} text-[#FF9933] text-xl`}></i>
                </div>
                <h4 className="text-white font-bold mb-2">{stat.title}</h4>
                <p className="text-sm text-gray-400">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 02. INTRODUCTION */}
      <section className="py-24 bg-white relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="container mx-auto px-4 lg:px-8 max-w-7xl"
        >
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-[#FF9933] font-bold tracking-widest text-sm uppercase mb-4 block">Customer Success Stories</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Solutions That Work.<br/>Impact That Lasts.
            </h2>
            <p className="text-lg text-gray-600">
              Explore how MSquare technology is being used across organizations, operational environments and field programs to solve real problems and support meaningful outcomes.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 03. FEATURED SUCCESS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <span className="text-[#FF9933] font-bold tracking-widest text-sm uppercase mb-8 block text-center">Featured Customer Success</span>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-xl border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300 overflow-hidden flex flex-col lg:flex-row"
          >
            {/* Left side: branding/image */}
            <div className="lg:w-2/5 bg-[#0a1121] text-white p-12 flex flex-col justify-center relative overflow-hidden group">
               {/* Background image for Fusion Finance */}
               <Image 
                 src="/Images/banking-solution.jpg" 
                 alt="Fusion Finance" 
                 fill 
                 className="object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a1121] via-[#0a1121]/80 to-[#0a1121]/50 z-0"></div>
               
               <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-12">
                    <Image src="/Images/clients/fusion.png" alt="Fusion Finance" width={160} height={40} className="bg-white/90 p-2 rounded-lg" />
                 </div>
                 
                 <div className="space-y-8">
                   <div>
                     <div className="text-4xl font-bold text-white mb-2">1,740+</div>
                     <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">Client Branches</div>
                   </div>
                   <div>
                     <div className="text-4xl font-bold text-white mb-2">Pan-India</div>
                     <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">Operational Coverage</div>
                   </div>
                   <div>
                     <div className="text-4xl font-bold text-white mb-2">2+ Years</div>
                     <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">In Production</div>
                   </div>
                 </div>
               </div>
            </div>
            
            {/* Right side: content */}
            <div className="lg:w-3/5 p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Enterprise Administration Across 1,740+ Branches.</h3>
              <p className="text-gray-600 mb-10 leading-relaxed">
                MSquare engineered and continues to support a centralized enterprise administration platform connecting critical administrative and operational processes across Fusion Finance&apos;s nationwide branch network.
              </p>
              
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-4 mb-6">Operations Digitized</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {[
                  { title: 'Rent & Lease Administration', desc: 'Manage branch premises, agreements and related administrative processes.', icon: 'fa-file-signature' },
                  { title: 'Utility Management', desc: 'Structure and monitor utility-related operations across locations.', icon: 'fa-bolt' },
                  { title: 'Courier & Document Movement', desc: 'Track critical document movement across branches and offices.', icon: 'fa-truck-fast' },
                  { title: 'Advance Settlement', desc: 'Digitize submission, approval and settlement workflows.', icon: 'fa-money-bill-transfer' },
                  { title: 'Inventory & Procurement', desc: 'Improve visibility across procurement and operational inventory.', icon: 'fa-boxes-stacked' },
                  { title: 'Vendor Operations', desc: 'Structure vendor-related processes and administrative controls.', icon: 'fa-users-gear' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-orange-50 flex items-center justify-center text-[#FF9933]">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1">{item.title}</h5>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF9933] text-white rounded-lg font-bold hover:bg-[#e68a2e] transition-colors">
                Explore Fusion Finance Success Story <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 04. SUCCESS ACROSS ENVIRONMENTS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-[#FF9933] font-bold tracking-widest text-sm uppercase mb-4 block">Success Across Different Environments</span>
            <h2 className="text-3xl font-bold text-gray-900">
              Different Challenges. Technology That Works Where It Matters.
            </h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { 
                title: 'Learning & Development', 
                desc: 'Enterprise learning platform supporting structured programs, compliance learning, assessments, certifications and continuous employee development.',
                icon: 'fa-graduation-cap',
                image: '/Images/corporate-learning-hero.jpg'
              },
              { 
                title: 'District Governance', 
                desc: 'Connected district-level visibility across government schemes, departments and administrative priorities to support monitoring and better-informed decisions.',
                icon: 'fa-landmark',
                image: '/Images/banklnd-img.jpg'
              },
              { 
                title: 'Disaster Management', 
                desc: 'Digitized TDMP & VDMP planning, field-level information, completion monitoring and government-prescribed reporting.',
                icon: 'fa-house-tsunami',
                image: '/Images/service-2.jpg'
              },
              { 
                title: 'Agriculture & Field Programs', 
                desc: 'Connecting program planning, BTM field execution, farmer participation, evidence, outcomes and reporting.',
                icon: 'fa-wheat-awn',
                image: '/Images/greenybook-hero.png'
              },
              { 
                title: 'Employee Experience', 
                desc: 'Connected employee experiences bringing together participation, communication, travel coordination, recognition and engagement.',
                icon: 'fa-people-group',
                image: '/Images/aboutUs.jpg'
              }
            ].map((card, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-[#FF9933] transition-all duration-300 flex flex-col h-full overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#FF9933] shadow-sm">
                    <i className={`fa-solid ${card.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">{card.desc}</p>
                <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
                  <Image src={card.image} alt={card.title} fill className="object-cover transition-transform hover:scale-105 duration-500" />
                </div>
                <Link href="#" className="text-[#FF9933] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                  Explore Success Story <i className="fa-solid fa-arrow-right text-sm"></i>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 05. TRUSTED BY ORGANIZATIONS */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h3 className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-10">Trusted by Organizations Across Industries</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 text-2xl font-bold text-gray-900"><i className="fa-solid fa-building-columns text-[#FF9933]"></i> Fusion Finance</div>
             <div className="flex items-center gap-2 text-2xl font-bold text-red-600"><i className="fa-solid fa-tractor"></i> Mahindra Tractors</div>
             <div className="flex items-center gap-2 text-2xl font-bold text-green-700"><i className="fa-solid fa-heart-pulse"></i> Terumo</div>
             <div className="flex items-center gap-2 text-2xl font-bold text-blue-900"><i className="fa-solid fa-landmark-dome"></i> Gov / District Admin</div>
             
             {showAllLogos && (
               <div className="flex items-center gap-2 text-2xl font-bold text-green-600"><i className="fa-solid fa-leaf"></i> ATMA Jalna</div>
             )}
             
             {!showAllLogos && (
               <button 
                 onClick={() => setShowAllLogos(true)}
                 className="text-lg font-bold text-gray-400 hover:text-[#FF9933] transition-colors cursor-pointer focus:outline-none"
               >
                 ...and more
               </button>
             )}
          </div>
        </div>
      </section>

      {/* 06. WHAT SUCCESS MEANS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2">
                <span className="text-[#FF9933] font-bold tracking-widest text-sm uppercase mb-4 block">What Success Means To Us</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Go-Live Is a Milestone.<br/>Not the Finish Line.
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Technology creates lasting value when it becomes part of how an organization actually works. For us, customer success means more than delivering software.
                </p>
                
                <div className="bg-orange-50 border-l-4 border-[#FF9933] p-8 rounded-r-xl mt-8">
                  <i className="fa-solid fa-quote-left text-3xl text-[#FF9933]/30 mb-4 block"></i>
                  <p className="text-xl italic font-medium text-gray-800">
                    &quot;Customer success is not go-live. It is a continuing journey of partnership and progress.&quot;
                  </p>
                </div>
             </div>
             
             <div className="lg:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Adopted', desc: 'Technology that people actually use.', icon: 'fa-user-check' },
                    { title: 'Reliable', desc: 'Platforms organizations can depend on.', icon: 'fa-shield' },
                    { title: 'Evolving', desc: 'Solutions that continue to improve as requirements change.', icon: 'fa-arrow-trend-up' },
                    { title: 'Valuable', desc: 'Technology that creates meaningful operational outcomes.', icon: 'fa-gem' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-[#FF9933] transition-all duration-300 bg-white">
                      <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-[#FF9933] mb-4">
                        <i className={`fa-solid ${item.icon} text-xl`}></i>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 07. CTA */}
      <section className="py-20 bg-[#0a1121] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF9933]/5 rounded-full blur-3xl -mr-96 -mt-96 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl -ml-64 -mb-64 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10 text-center">
          <span className="text-[#FF9933] font-bold tracking-widest text-sm uppercase mb-4 block">Have a Complex Operational Challenge?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s Understand What Needs to Work.
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-3xl mx-auto">
            Whether the challenge involves distributed operations, employees, field teams, government programs or connected workflows, meaningful technology starts with understanding the operational reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-[#FF9933] text-white rounded-lg font-bold hover:bg-[#e68a2e] transition-colors shadow-lg">
              Talk to MSquare <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg font-bold hover:bg-white/20 transition-colors">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
