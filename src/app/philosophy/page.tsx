"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PhilosophyPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-sans text-gray-900 overflow-x-hidden">
      
      {/* 01. HERO */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col justify-center">
        <Image 
          src="/assets/our-Philosophy1.png" 
          alt="Our Philosophy Background" 
          fill 
          className="object-cover object-center"
          priority
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2b4c] leading-[1.1] mb-2 tracking-tight">
              We Don't Build Software.
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF9933] leading-[1.1] mb-8 tracking-tight">
              We Build Confidence.
            </h2>
            <div className="w-16 h-1 bg-[#FF9933] mb-8"></div>
            
            <p className="text-gray-800 text-lg font-bold mb-4">
              Technology becomes valuable when people trust it enough to depend on it.
            </p>
            <p className="text-gray-700 text-base mb-4">
              At MSquare, we believe software should do more than digitize a process. It should make work simpler, information clearer and decisions easier.
            </p>
            <p className="text-gray-700 text-base">
              That belief shapes how we understand problems, engineer platforms and stay involved beyond implementation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02. THE 7 PRINCIPLES GRID */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CARD 01 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row gap-6 hover:shadow-xl hover:border-[#FF9933] transition-all"
            >
              <div className="flex flex-col items-center flex-shrink-0 w-16">
                <span className="text-[#FF9933] font-bold text-2xl mb-2">01</span>
                <i className="fa-regular fa-user text-3xl text-[#1a2b4c]/80"></i>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1a2b4c] mb-1">Start With Understanding</h3>
                <h4 className="text-sm font-bold text-gray-600 mb-4">Understand Before We Engineer.</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Every organization works differently. Its people, processes, approvals, terminology, exceptions and operating realities have evolved over years. Technology should understand that reality before attempting to change it.
                </p>
                <p className="text-gray-600 text-sm mb-4">That is why our conversations don't begin with features. They begin with questions.</p>
                <ul className="list-disc pl-5 text-gray-500 text-sm mb-4 space-y-1">
                  <li>How does the process work today?</li>
                  <li>Where does it slow down?</li>
                  <li>What information is disconnected?</li>
                  <li>What do users actually need?</li>
                  <li>What should technology make easier?</li>
                </ul>
                <p className="text-[#1a2b4c] font-bold text-sm">First understand the organization. Then engineer around it.</p>
              </div>
            </motion.div>

            {/* CARD 02 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row gap-6 hover:shadow-xl hover:border-[#FF9933] transition-all"
            >
              <div className="flex flex-col items-center flex-shrink-0 w-16">
                <span className="text-[#FF9933] font-bold text-2xl mb-2">02</span>
                <i className="fa-regular fa-rectangle-list text-3xl text-[#1a2b4c]/80"></i>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1a2b4c] mb-1">Simplify, Don't Complicate</h3>
                <h4 className="text-sm font-bold text-gray-600 mb-4">Complexity Behind. Simplicity Ahead.</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Powerful technology does not have to feel complicated. Behind a simple screen may sit multiple workflows, integrations, validations, hierarchies and business rules.
                </p>
                <p className="text-gray-600 text-sm mb-4">That complexity belongs to the technology — not to the user. We continuously ask: Can this be simpler?</p>
                <ul className="list-disc pl-5 text-gray-500 text-sm mb-6 space-y-1">
                  <li>Fewer steps.</li>
                  <li>Clearer information.</li>
                  <li>Better visibility.</li>
                  <li>Faster action.</li>
                </ul>
                <p className="text-[#1a2b4c] font-bold text-sm">The sophistication should be in the engineering.</p>
                <p className="text-[#1a2b4c] font-bold text-sm">The simplicity should be in the experience.</p>
              </div>
            </motion.div>

            {/* CARD 03 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row gap-6 hover:shadow-xl hover:border-[#FF9933] transition-all"
            >
              <div className="flex flex-col items-center flex-shrink-0 w-16">
                <span className="text-[#FF9933] font-bold text-2xl mb-2">03</span>
                <i className="fa-solid fa-puzzle-piece text-3xl text-[#1a2b4c]/80"></i>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1a2b4c] mb-1">Technology Must Adapt<br/>to the Organization</h3>
                <h4 className="text-sm font-bold text-gray-600 mb-4">Your Process Shouldn't Have to Fit the Software.</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Organizations should not be forced to redesign proven operating processes simply because a software product works in a particular way.
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  We believe technology should understand business rules, organizational hierarchies, approvals, field realities and exceptions — and intelligently support them.
                </p>
                <ul className="list-disc pl-5 text-gray-500 text-sm mb-6 space-y-1">
                  <li>Where standardization creates value, we standardize.</li>
                  <li>Where flexibility matters, we engineer for flexibility.</li>
                </ul>
                <p className="text-[#1a2b4c] font-bold text-sm">Technology should enable the organization — not dictate it.</p>
              </div>
            </motion.div>

            {/* CARD 04 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row gap-6 hover:shadow-xl hover:border-[#FF9933] transition-all"
            >
              <div className="flex flex-col items-center flex-shrink-0 w-16">
                <span className="text-[#FF9933] font-bold text-2xl mb-2">04</span>
                <i className="fa-solid fa-user-group text-3xl text-[#1a2b4c]/80"></i>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1a2b4c] mb-1">Build for the People<br/>Who Actually Use It</h3>
                <h4 className="text-sm font-bold text-gray-600 mb-4">Adoption Is Part of Engineering.</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Technology succeeds only when people use it. And the person using a platform every day may not be the person who approved the project.
                </p>
                <ul className="list-disc pl-5 text-gray-500 text-sm mb-4 space-y-1">
                  <li>An employee. A field executive.</li>
                  <li>A manager. A government officer.</li>
                  <li>A trainer. An administrator.</li>
                </ul>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Their experience matters. That is why we value clarity, accessibility and practical usability as much as technical capability.
                </p>
                <p className="text-[#1a2b4c] font-bold text-sm">A platform isn't successful because it was deployed.</p>
                <p className="text-[#1a2b4c] font-bold text-sm">It is successful when it becomes part of how people work.</p>
              </div>
            </motion.div>

            {/* CARD 05 - CUSTOM HORIZONTAL FLOW */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row gap-6 hover:shadow-xl hover:border-[#FF9933] transition-all"
            >
              <div className="flex flex-col items-center flex-shrink-0 w-16">
                <span className="text-[#FF9933] font-bold text-2xl mb-2">05</span>
                <i className="fa-solid fa-chart-column text-3xl text-[#1a2b4c]/80"></i>
              </div>
              <div className="w-full">
                <h3 className="text-xl md:text-2xl font-bold text-[#1a2b4c] mb-1">Data Should Lead Somewhere</h3>
                <h4 className="text-sm font-bold text-gray-600 mb-4">From Information to Intelligence.</h4>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Organizations already generate enormous amounts of information. The challenge is not simply collecting more. The challenge is making it useful. We believe technology should progressively move organizations from:
                </p>
                
                {/* Flow Diagram */}
                <div className="flex items-center justify-between w-full mb-8 overflow-x-auto pb-4 gap-2">
                  {[
                    { label: 'DATA', icon: 'fa-database' },
                    { label: 'VISIBILITY', icon: 'fa-eye' },
                    { label: 'INSIGHT', icon: 'fa-lightbulb' },
                    { label: 'DECISION', icon: 'fa-bullseye' },
                    { label: 'ACTION', icon: 'fa-bolt' }
                  ].map((step, i, arr) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.15 }}
                      className="flex items-center"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-orange-50 text-[#FF9933] flex items-center justify-center text-sm mb-2 border border-orange-100">
                          <i className={`fa-solid ${step.icon}`}></i>
                        </div>
                        <span className="text-[10px] font-bold text-[#FF9933] tracking-wider">{step.label}</span>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="mx-2 md:mx-4 text-gray-300 text-xs">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Dashboards should reveal what matters. Reports should help people understand. Automation should reduce unnecessary effort. And AI should make organizational intelligence easier to access.
                </p>
                <p className="text-[#1a2b4c] font-bold text-sm">Technology should not simply tell you what happened.</p>
                <p className="text-[#1a2b4c] font-bold text-sm">It should help you understand what deserves attention next.</p>
              </div>
            </motion.div>

            {/* CARD 06 - CUSTOM HORIZONTAL FLOW */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row gap-6 hover:shadow-xl hover:border-[#FF9933] transition-all"
            >
              <div className="flex flex-col items-center flex-shrink-0 w-16">
                <span className="text-[#FF9933] font-bold text-2xl mb-2">06</span>
                <i className="fa-solid fa-arrows-rotate text-3xl text-[#1a2b4c]/80"></i>
              </div>
              <div className="w-full">
                <h3 className="text-xl md:text-2xl font-bold text-[#1a2b4c] mb-1">Implementation Is<br/>Not the Finish Line</h3>
                <h4 className="text-sm font-bold text-gray-600 mb-4">Technology Must Keep Evolving.</h4>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Organizations change. Processes change. Regulations change. Teams grow. New requirements emerge. Technology itself continues to evolve. That is why we don't look at implementation as the end of the relationship.
                </p>
                
                {/* Flow Diagram */}
                <div className="flex items-center justify-between w-full mb-8 overflow-x-auto pb-4 gap-2">
                  {[
                    { label: 'Build', icon: 'fa-hammer' },
                    { label: 'Implement', icon: 'fa-rocket' },
                    { label: 'Learn', icon: 'fa-book-open' },
                    { label: 'Improve', icon: 'fa-wrench' },
                    { label: 'Evolve', icon: 'fa-chart-line' }
                  ].map((step, i, arr) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.15 }}
                      className="flex items-center"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-50 text-gray-600 flex items-center justify-center text-sm mb-2 border border-gray-200">
                          <i className={`fa-solid ${step.icon}`}></i>
                        </div>
                        <span className="text-[10px] font-bold text-gray-700 tracking-wider uppercase">{step.label}</span>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="mx-2 md:mx-4 text-gray-300 text-xs">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  A platform should be capable of learning, improving and evolving with the organization it supports.
                </p>
                <p className="text-[#1a2b4c] font-bold text-sm">Because technology that cannot evolve</p>
                <p className="text-[#1a2b4c] font-bold text-sm">eventually becomes another limitation.</p>
              </div>
            </motion.div>

            {/* CARD 07 - FULL WIDTH BOTTOM CARD */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row gap-8 hover:shadow-xl hover:border-[#FF9933] transition-all lg:col-span-2"
            >
              <div className="flex flex-col items-center flex-shrink-0 w-16">
                <span className="text-[#FF9933] font-bold text-2xl mb-2">07</span>
                <i className="fa-solid fa-shield-halved text-4xl text-[#1a2b4c]/80"></i>
              </div>
              <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-12 justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a2b4c] mb-2">Trust Is the Real Deliverable</h3>
                  <h4 className="text-sm font-bold text-gray-600 mb-6">We Build Confidence.</h4>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      "Confidence that the information is available.",
                      "Confidence that the process is being followed.",
                      "Confidence that teams know what requires attention.",
                      "Confidence that management can see what is happening.",
                      "Confidence that the technology will work when people need it."
                    ].map((text, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <i className="fa-regular fa-circle-check text-[#FF9933] mt-1 flex-shrink-0"></i>
                        <span className="text-gray-700 text-sm font-medium">{text}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-2">
                    That is the outcome we ultimately want every MSquare implementation to create. Organizations may initially come to us looking for software.
                  </p>
                  <p className="text-[#FF9933] font-bold text-base">What we want them to gain is confidence.</p>
                </div>
                
                {/* Decorative Right Side Icon/Graphic */}
                <div className="hidden lg:flex flex-shrink-0 w-64 items-center justify-center opacity-10">
                   <i className="fa-solid fa-shield-halved text-[12rem] text-[#1a2b4c]"></i>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03. THE MSQUARE WAY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#1a2b4c] mb-2">The MSquare Way</h2>
            <div className="w-12 h-1 bg-[#FF9933] mx-auto mb-6"></div>
            <p className="text-gray-600 text-sm font-medium mb-16">
              At the centre of everything we build are five simple beliefs that guide how we think and engineer:
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-4 lg:justify-between items-start">
            {[
              { title: 'UNDERSTAND', sub: 'before engineering.', icon: 'fa-magnifying-glass' },
              { title: 'SIMPLIFY', sub: 'before adding.', icon: 'fa-align-left' },
              { title: 'CONNECT', sub: 'before duplicating.', icon: 'fa-diagram-project' },
              { title: 'ENABLE', sub: 'before controlling.', icon: 'fa-user' },
              { title: 'EVOLVE', sub: 'instead of standing still.', icon: 'fa-arrow-trend-up' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center w-[160px]"
              >
                <div className="text-[#FF9933] text-4xl mb-4">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h4 className="font-bold text-[#1a2b4c] text-sm tracking-wider mb-1">{item.title}</h4>
                <p className="text-gray-500 text-xs italic">{item.sub}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-500 text-xs mt-16 max-w-2xl mx-auto"
          >
            These principles guide how we think about technology — regardless of the industry, organization or platform.
          </motion.p>
        </div>
      </section>

      {/* 04. FOOTER CTA */}
      <section className="py-12 bg-white pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden relative shadow-2xl bg-[#0f1c32]"
          >
            {/* We will use a gradient background that matches the mockup's feel since we don't have the eagle image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1121] via-[#0f1c32] to-[#1a2b4c]"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF9933]/10 to-transparent"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-stretch min-h-[300px]">
              {/* Left Content */}
              <div className="w-full md:w-1/2 p-10 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
                <h2 className="text-3xl font-bold text-white mb-2">Technology Will Change.</h2>
                <h3 className="text-2xl font-bold text-gray-300 mb-8">Our Philosophy Won't.</h3>
                
                <div className="space-y-3">
                  {[
                    "Understand the problem.",
                    "Respect the user.",
                    "Keep complexity away from them.",
                    "Build technology people can depend on."
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <i className="fa-regular fa-circle-check text-gray-400 mt-1 flex-shrink-0 text-sm"></i>
                      <span className="text-gray-300 text-sm font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Content */}
              <div className="w-full md:w-1/2 p-10 md:p-12 flex flex-col justify-center relative">
                 <div className="flex flex-col mb-8">
                   <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">And above all—</p>
                   <p className="text-[#FF9933] text-3xl font-bold">Build Confidence.</p>
                 </div>
                 
                 <div className="flex flex-col gap-4 mb-8 text-gray-300 text-sm font-medium">
                   <div className="flex items-center gap-3">
                     <i className="fa-solid fa-phone text-gray-500 w-4"></i>
                     <span>+91 9765498660</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <i className="fa-solid fa-envelope text-gray-500 w-4"></i>
                     <span>Retesh.k@msquaresoftware.com</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <i className="fa-solid fa-location-dot text-gray-500 w-4"></i>
                     <span>Jalna | Pune | India</span>
                   </div>
                 </div>

                 <Link href="/contact" className="self-start px-6 py-3 bg-[#FF9933] text-white rounded-md font-bold hover:bg-[#e68a2e] transition-colors shadow-lg flex items-center gap-2 text-sm">
                   Let's Build<br/>What Matters. <i className="fa-solid fa-arrow-right ml-2"></i>
                 </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
