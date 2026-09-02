"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function AboutPage() {
  return (
    <div className="bg-[#fdfdfd] min-h-screen relative overflow-hidden text-gray-900 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/AboutUSPage_Banner1.png" 
            alt="About MSquare Mast Background" 
            fill 
            className="object-cover"
            priority
          />
          {/* Subtle gradient to ensure text readability without blurring the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent sm:w-2/3" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10"
        >
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-gray-500 hover:text-[#FF9933] font-medium text-sm">Home</Link>
            <span className="text-gray-400 text-sm">{'>'}</span>
            <span className="text-[#FF9933] font-medium text-sm">About Us</span>
          </div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-[#1a2b4c]"
          >
            About MSquare
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[#1a2b4c]"
          >
            Building <span className="text-[#FF9933]">Trusted</span> Technology Platforms.
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-gray-800 text-lg md:text-xl max-w-2xl leading-relaxed font-medium mb-10">
            MSquare is a technology company that engineers, implements and supports digital platforms for enterprises, government organizations and institutions.
            <br/><br/>
            Since 2019, we have worked across diverse industries and operating environments, helping organizations simplify complex processes, connect operations and use technology more effectively.
            <br/><br/>
            Our approach begins with one simple principle:
            Understand the organization first. Engineer the technology around it.
            <br/><br/>
            Because the best technology is not the one with the most features.
            It is the one people can use, organizations can depend on and businesses can continue to grow with.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF9933] text-white rounded-full font-semibold text-lg hover:bg-[#e68a2e] transition-colors shadow-lg">
              Talk to MSquare
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-16"
          >
            <div className="lg:w-1/2">
              <motion.span variants={fadeUp} className="text-[#FF9933] font-bold text-sm tracking-widest uppercase mb-2 block">
                OUR STORY
              </motion.span>
              <motion.h3 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-[#1a2b4c] mb-6">
                Built From Real Problems.<br/>Growing Through Real Implementations.
              </motion.h3>
              <div className="space-y-4 text-gray-600 leading-relaxed font-medium">
                <motion.p variants={fadeUp}>
                  MSquare began its journey in 2019 in Jalna, Maharashtra, with an ambition to build technology that solves meaningful, real-world problems.
                </motion.p>
                <motion.p variants={fadeUp}>
                  We began by listening — understanding how organizations work, where processes become complicated, where information gets disconnected and where technology can genuinely make things simpler.
                </motion.p>
                <motion.p variants={fadeUp}>
                  That approach gradually took us into larger organizations, new industries and increasingly complex technology environments.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Over time, projects became platforms, individual processes became connected operations and software development evolved into platform engineering.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Today, MSquare continues to grow with the same mindset that started our journey:
                  <br/>
                  <strong className="text-gray-900">Start with the problem. Understand the operation. Then engineer.</strong>
                </motion.p>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 text-[#FF9933] mb-4 text-3xl"><i className="fa-regular fa-calendar-days"></i></div>
                <h4 className="text-3xl font-bold text-[#1a2b4c] mb-2">2019</h4>
                <p className="text-gray-600 font-medium">Year Founded</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 text-[#FF9933] mb-4 text-3xl"><i className="fa-solid fa-users"></i></div>
                <h4 className="text-3xl font-bold text-[#1a2b4c] mb-2">100+</h4>
                <p className="text-gray-600 font-medium">Team Members</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 text-[#FF9933] mb-4 text-3xl"><i className="fa-solid fa-industry"></i></div>
                <h4 className="text-3xl font-bold text-[#1a2b4c] mb-2">6+</h4>
                <p className="text-gray-600 font-medium">Industries</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 text-[#FF9933] mb-4 text-3xl"><i className="fa-solid fa-globe"></i></div>
                <h4 className="text-3xl font-bold text-[#1a2b4c] mb-2">India to World</h4>
                <p className="text-gray-600 font-medium">Our Ambition</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Experience Across Industries */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} className="text-[#FF9933] font-bold text-sm tracking-widest uppercase mb-2 block">
              OUR EXPERIENCE
            </motion.span>
            <motion.h3 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-[#1a2b4c] mb-4">
              Different Industries. Different Challenges. One Engineering Mindset.
            </motion.h3>
            <motion.p variants={fadeUp} className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
              Every industry has its own operating realities. Working across diverse environments has strengthened our understanding of how technology needs to adapt to the organization it serves.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: 'fa-building-columns', title: 'Banking & Financial Services', desc: 'Experience across enterprise administration, Learning & Development, vendor approval workflows and distributed financial-services operations.' },
                { icon: 'fa-landmark', title: 'Government & Public Sector', desc: 'Experience spanning disaster management, district governance and scheme monitoring, Panand Rasta project monitoring, compliance reporting and field-level government programs.' },
                { icon: 'fa-cart-shopping', title: 'FMCG & Consumer Businesses', desc: 'Experience across sales-team activities, market execution, sales promotions and structured tea procurement and auction processes.' },
                { icon: 'fa-industry', title: 'Manufacturing & Industrial Operations', desc: 'Experience in sales-order streamlining, operational coordination and structured sales & promotional activities.' },
                { icon: 'fa-seedling', title: 'Agriculture & Field Programs', desc: 'Experience connecting district planning with BTM field execution, farmer participation, field evidence, outcomes and reporting through ATMA.' },
                { icon: 'fa-hand-holding-heart', title: 'Social Sector & NGOs', desc: 'Purpose-driven technology supporting blood donation, elderly care, community participation and social initiatives.' }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#FF9933] transition-all duration-300">
                  <div className="w-16 h-16 mx-auto bg-orange-50 text-[#FF9933] rounded-full flex items-center justify-center text-2xl mb-6">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-[#1a2b4c] mb-4">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-16 bg-white border border-gray-200 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 text-left">
              <div className="text-[#FF9933] text-5xl">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              <div>
                <p className="text-[#FF9933] font-semibold text-xl md:text-2xl">
                  Technology must fit the reality of the organization it serves.
                </p>
                <p className="text-gray-500 mt-2">Different domains have expanded our understanding. One principle remains unchanged.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. How We Work */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} className="text-[#FF9933] font-bold text-sm tracking-widest uppercase mb-2 block">
              HOW WE WORK
            </motion.span>
            <motion.h3 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-[#1a2b4c] mb-6">
              Understand Before We Engineer.
            </motion.h3>
            <motion.p variants={fadeUp} className="text-gray-600 max-w-2xl text-lg mb-12">
              Good technology begins with the right questions. How does the organization actually work? Where is the complexity? What needs to become simpler? What information needs to connect? What will people actually use? Only then do we engineer.
            </motion.p>

            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                {[
                  { step: '01', title: 'Understand', icon: 'fa-magnifying-glass' },
                  { step: '02', title: 'Simplify', icon: 'fa-lightbulb' },
                  { step: '03', title: 'Engineer', icon: 'fa-code' },
                  { step: '04', title: 'Implement', icon: 'fa-rocket' },
                  { step: '05', title: 'Evolve', icon: 'fa-arrow-trend-up' }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center">
                    <span className="text-[#FF9933] font-bold mb-2">{item.step}</span>
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg border-4 border-white flex items-center justify-center text-3xl text-[#FF9933] mb-6">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <h4 className="text-lg font-bold text-[#1a2b4c]">{item.title}</h4>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div variants={fadeUp} className="text-center mt-12 text-gray-500 font-medium">
              This keeps technology focused on the problem it is meant to solve — rather than adding technology for the sake of technology.
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 5. Split Section: From Jalna / Building for What's Next */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* From Jalna */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-[2rem] p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#FF9933] transition-all duration-300 flex flex-col gap-6 h-full"
            >
              <div className="w-full relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shrink-0">
                <Image 
                  src="/assets/AboutUSPage_Banner2.png" 
                  alt="From Jalna" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-4 lg:p-6 flex flex-col">
                <span className="text-[#FF9933] font-bold text-xs tracking-widest uppercase mb-4 block">
                  OUR JOURNEY
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold text-[#1a2b4c] mb-6 leading-tight">
                  From Jalna. Growing Beyond Boundaries.
                </h3>
                <div className="w-8 h-0.5 bg-[#FF9933] mb-6"></div>
                <div className="space-y-6 text-gray-700 text-sm md:text-base font-medium">
                  <p>Our roots are in Jalna, Maharashtra. Our growth continues with our development presence in Pune.</p>
                  <p>This journey represents our belief that meaningful technology can be built from anywhere when ambition, understanding and engineering come together.</p>
                </div>
              </div>
            </motion.div>

            {/* Building for What's Next */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-[2rem] p-8 lg:p-12 shadow-xl text-white flex flex-col relative overflow-hidden h-full"
            >
               <div className="absolute inset-0 pointer-events-none z-0">
                 <Image 
                    src="/assets/AboutUSPage_Banner3.png" 
                    alt="Building for What's Next"
                    fill
                    className="object-cover object-right"
                  />
               </div>
              <div className="relative z-10 w-full">
                <span className="text-[#FF9933] font-bold text-xs tracking-widest uppercase mb-4 block">
                  BUILDING FOR WHAT'S NEXT
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Building for What's Next.
                </h3>
                <div className="space-y-4 text-white text-sm md:text-base mb-10 pr-4">
                  <p>AI, automation and data are reshaping how organizations operate and make decisions.</p>
                  <p>We continue to strengthen our capabilities across software engineering, integrations, data and applied AI — while keeping our focus on the real problems organizations face.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-t border-white/10 pt-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded bg-[#162952] text-[#FF9933] flex items-center justify-center text-sm shrink-0">
                         <i className="fa-solid fa-layer-group"></i>
                      </div>
                      <h5 className="font-bold text-white text-sm leading-tight">Smarter<br/>Workflows</h5>
                    </div>
                    <p className="text-white text-xs">Reduce repetitive effort and make processes easier.</p>
                  </div>
                  <div className="md:border-l md:border-white/10 md:pl-6">
                     <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded bg-[#162952] text-[#FF9933] flex items-center justify-center text-sm shrink-0">
                         <i className="fa-solid fa-circle-nodes"></i>
                      </div>
                      <h5 className="font-bold text-white text-sm leading-tight">Connected<br/>Information</h5>
                    </div>
                    <p className="text-white text-xs">Bring fragmented information together for better visibility.</p>
                  </div>
                  <div className="md:border-l md:border-white/10 md:pl-6">
                     <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded bg-[#162952] text-[#FF9933] flex items-center justify-center text-sm shrink-0">
                         <i className="fa-solid fa-lightbulb"></i>
                      </div>
                      <h5 className="font-bold text-white text-sm leading-tight">Intelligent<br/>Decisions</h5>
                    </div>
                    <p className="text-white text-xs">Transform data into meaningful insights and actions.</p>
                  </div>
                </div>

                <p className="font-bold text-[#FF9933] text-lg">
                  Technology will continue to evolve.<br/>
                  The need to solve real problems will not.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. Our Ambition & Outro */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
           <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeUp} className="text-4xl font-bold text-[#1a2b4c] mb-8">
                Our Ambition
              </motion.h3>
              <motion.div variants={fadeUp} className="text-xl text-gray-600 leading-relaxed font-medium space-y-6">
                <p>We are not building MSquare to become just another software development company.</p>
                <p>We are building a technology organization known for understanding complex operational problems and engineering platforms organizations can confidently depend on.</p>
                <p>A company where domain understanding strengthens engineering. A company where every implementation adds to our learning.</p>
                <p>A company built in India, with the ambition to engineer technology for organizations anywhere in the world.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-16 pt-16 border-t border-gray-100">
                <h2 className="text-5xl font-black text-[#1a2b4c] tracking-widest mb-4"><span className="text-[#FF9933]">M</span>SQUARE</h2>
                <h3 className="text-2xl font-bold text-[#FF9933] mb-6">Building Trusted Technology Platforms.</h3>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
                  Technology can automate a process. Technology can connect information. Technology can create intelligence.
                  <br/><br/>
                  <strong className="text-gray-900">But its real value begins when people and organizations can depend on it every day.</strong>
                </p>
                <div className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-orange-50 text-[#FF9933] rounded-full font-bold">
                   Born in India. Built for the World.
                </div>
              </motion.div>
            </motion.div>
        </div>
      </section>

    </div>
  );
}
