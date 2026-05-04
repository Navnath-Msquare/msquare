'use client';

import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

type Job = {
  title: string;
  type: string;
  description?: string;
  requirements: string[];
  eligibility: string[];
  preferredSkills?: string[];
  benefits?: string[];
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function CareersUI({ jobs }: { jobs: Job[] }) {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const closeModal = () => setSelectedJob(null);

  return (
    <div className="bg-[#fafafa] min-h-screen">
      
      {/* ── 'Mast' Tech Banner Section ── */}
      <section className="relative pt-32 pb-64 bg-[#05070a] overflow-hidden text-center">
        {/* Cinematic Tech Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Images/careers_tech_banner.png" 
            alt="Careers at MSquare" 
            fill 
            className="object-cover opacity-40 mix-blend-lighten"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/20 via-[#05070a]/90 to-[#fafafa]" />
        </div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF9933] animate-pulse shadow-[0_0_15px_#FF9933]"></span>
            <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">Careers</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">
            Join Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-[#ffb86d] to-[#FF9933] bg-[length:200%_auto] animate-gradient">Team</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium">
            MSQUARE offers a vibrant work environment where innovation and collaboration thrive. Explore career opportunities with us and be part of a team that’s shaping the future of software solutions.
          </motion.p>
        </motion.div>
      </section>

      {/* ── 3 Box Design Job Grid ── */}
      <section className="pb-32 relative z-20 -mt-32">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {jobs.map((job, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className="flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] hover:-translate-y-4 transition-all duration-500 group h-full"
              >
                {/* Visual Header */}
                <div className="relative h-48 w-full overflow-hidden">
                   <Image 
                     src={i === 0 ? "/Images/it_company_bg.png" : i === 1 ? "/Images/become-partner.jpg" : "/Images/about_hero_bg.png"} 
                     alt={job.title} 
                     fill 
                     className="object-cover group-hover:scale-110 transition-transform duration-1000"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                   <div className="absolute bottom-6 left-6 right-6">
                      <span className="bg-[#FF9933] text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg">
                        {job.type}
                      </span>
                   </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                   <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#FF9933] transition-colors leading-tight">
                     {job.title}
                   </h3>
                   
                   <p className="text-gray-500 text-sm mb-6 line-clamp-3 font-medium leading-relaxed">
                     {job.description}
                   </p>

                   <div className="space-y-6 mb-8 flex-grow">
                      <div>
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                           <i className="fa-solid fa-bolt text-[#FF9933]"></i> Key Requirements
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.slice(0, 3).map((r, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-[#FF9933] font-bold mt-1">•</span>
                              <span className="line-clamp-1">{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                   </div>

                   <button 
                     onClick={() => setSelectedJob(job.title)}
                     className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-black py-4 px-6 rounded-2xl group-hover:bg-[#FF9933] group-hover:shadow-[0_15px_30px_rgba(255,153,51,0.3)] transition-all transform active:scale-95"
                   >
                     APPLY NOW <i className="fa-solid fa-arrow-right text-xs"></i>
                   </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Contact Modal (Popup) ── */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[2.5rem] p-10 md:p-14 w-full max-w-lg shadow-[0_50px_100px_rgba(0,0,0,0.2)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF9933]/10 rounded-bl-full -z-10 translate-x-10 -translate-y-10"></div>
              
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#FF9933] hover:text-white transition-all"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-orange-50 text-[#FF9933] rounded-3xl flex items-center justify-center text-3xl mx-auto mb-6">
                   <i className="fa-solid fa-paper-plane"></i>
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Contact Now</h2>
                <p className="text-gray-500 font-medium tracking-wide">Applying for <span className="text-[#FF9933] font-bold">{selectedJob}</span></p>
              </div>

              <div className="space-y-6">
                <a href="mailto:retesh.k@msquaresoftware.com" className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#FF9933] hover:bg-white transition-all group">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#FF9933] group-hover:scale-110 transition-transform">
                     <i className="fa-solid fa-envelope text-xl"></i>
                   </div>
                   <div className="text-left">
                     <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Email</p>
                     <p className="text-gray-900 font-bold">retesh.k@msquaresoftware.com</p>
                   </div>
                </a>

                <a href="tel:+918379906666" className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#FF9933] hover:bg-white transition-all group">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#FF9933] group-hover:scale-110 transition-transform">
                     <i className="fa-solid fa-phone text-xl"></i>
                   </div>
                   <div className="text-left">
                     <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Mobile No</p>
                     <p className="text-gray-900 font-bold">+91 83799 06666</p>
                   </div>
                </a>
              </div>

              <p className="text-center text-gray-400 text-sm mt-10 font-medium">
                Our HR team will get back to you shortly.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
