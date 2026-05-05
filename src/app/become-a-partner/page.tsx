"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function BecomeAPartnerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdfdfd] pb-24 relative overflow-hidden">
      
      {/* ── 1. Hero Section ── */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/Images/become-partner.jpg"
            alt="Become A Partner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent"></div>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <p className="text-white font-black tracking-[0.4em] uppercase text-[10px]">
                  Partnership Program
                </p>
              </div>
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none"
            >
              Partner with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
                MSquare
              </span>
            </motion.h1>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#fdfdfd] to-transparent z-10"></div>
      </section>

      {/* ── 2. Content & CTA Card Section ── */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 -mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Left Column: Advantages */}
          <div className="lg:col-span-6 space-y-12 py-12">
            <motion.div variants={fadeUp} className="space-y-10">
              <div className="relative pl-10 border-l-2 border-orange-100 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-lg"></div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">Partner Advantage</h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  Built on the principle of <span className="text-orange-600 font-bold">Mutual Growth</span>. 
                  We provide the resources, programs, and tools you need to succeed in the enterprise software market.
                </p>
              </div>

              <div className="relative pl-10 border-l-2 border-orange-100 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-lg"></div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">ReDiscover Yourself!</h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  We invest in your market to identify high-quality leads, helping you stay ahead of current trends with our innovative product suite.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Get in Touch CTA Card */}
          <motion.div 
            variants={fadeUp}
            className="lg:col-span-6"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-[4rem] p-12 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl transition-all group-hover:bg-orange-500/20"></div>
              
              <div className="relative z-10 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                  Ready to Start Your <span className="text-orange-500">Journey?</span>
                </h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Connect with us today to discuss how we can grow together. Our team is ready to support your partnership goals.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-4 bg-orange-500 text-white px-10 py-5 rounded-3xl font-black text-xl hover:bg-orange-600 hover:scale-105 transition-all shadow-[0_20px_40px_rgba(234,88,12,0.3)]"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── 3. Contact Info Modal (Popup - Compact Version) ── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            ></motion.div>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-8 md:p-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-orange-500 transition-all"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-black text-gray-900 mb-1">Connect With Us</h2>
                <p className="text-gray-500 text-sm font-medium">Let's build the future together</p>
              </div>

              <div className="space-y-4">
                {/* Email Card */}
                <a 
                  href="mailto:retesh.k@msquaresoftware.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-orange-500 hover:bg-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                    <p className="text-gray-900 font-bold text-sm break-all">retesh.k@msquaresoftware.com</p>
                  </div>
                </a>

                {/* Mobile Card */}
                <a 
                  href="tel:+918379906666"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-orange-500 hover:bg-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
                    <p className="text-gray-900 font-bold text-sm">+91 83799 06666</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-900 text-white px-6 py-2 rounded-full font-bold text-xs hover:bg-orange-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
