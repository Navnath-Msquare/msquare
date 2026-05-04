"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

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
    <div className="bg-[#fcfcfc] min-h-screen relative overflow-hidden text-gray-900 pb-24">
      {/* ── Epic Hero Section ── */}
      <section className="relative pt-32 pb-48 overflow-hidden bg-[#05070a]">
        {/* 'Mast' Background Image & Overlays */}
        <div className="absolute inset-0 z-0 scale-110">
          <Image 
            src="/Images/about_mast_bg.png" 
            alt="About MSquare Mast Background" 
            fill 
            className="object-cover opacity-60 mix-blend-screen"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/40 via-[#05070a]/80 to-[#fcfcfc]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070a] via-transparent to-[#05070a] opacity-60" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto px-6 max-w-7xl text-center relative z-10"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 mb-10 backdrop-blur-xl shadow-2xl"
          >
            <span className="w-3 h-3 rounded-full bg-[#FF9933] shadow-[0_0_15px_#FF9933] animate-pulse"></span>
            <span className="text-white text-xs font-black tracking-[0.2em] uppercase">
              Always Ahead
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-8 text-white leading-none"
          >
            Empowering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-[#ffb86d] to-[#FF9933] bg-[length:200%_auto] animate-gradient">
              Business.
            </span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
            Delivering cutting-edge solutions to empower organizations worldwide for the digital age.
          </motion.p>
        </motion.div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF9933]/20 rounded-full blur-[150px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[180px] animate-pulse pointer-events-none" />
      </section>

      {/* ── Modern Bento Box Grid ── */}
      <section className="relative z-10 -mt-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* 1. Our Story (Spans 2 columns) */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 bg-white/80 backdrop-blur-md rounded-[3rem] p-12 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50 relative overflow-hidden group hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-700"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-gray-50/50 to-[#FF9933]/10 rounded-bl-[100%] z-0 translate-x-20 -translate-y-20 group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-3xl bg-[#FF9933]/10 text-[#FF9933] flex items-center justify-center text-3xl mb-10 shadow-inner group-hover:rotate-12 transition-transform">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tighter">
                About MSquare
              </h2>
              <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-medium">
                <p>
                  At MSquare Software, we are driven by a passion for technology and a commitment to delivering cutting-edge solutions to empower businesses worldwide. With expertise in software development, cloud-based solutions, and customized ERP platforms, we help organizations seamlessly transform their operations for the digital age.
                </p>
                <p>
                  Our philosophy, <strong className="text-gray-900 border-b-4 border-[#FF9933]/20">"Always Ahead,"</strong> reflects our commitment to staying at the cutting edge of technology, anticipating the needs of tomorrow's businesses.
                </p>
                <p>
                  Founded with a vision to redefine business efficiency, MSquare Software has emerged as a leader in delivering innovative software solutions across industries. We offer high-value, scalable products that empower businesses to scale effectively.
                </p>
              </div>
            </div>
          </motion.div>

                    {/* 2. Visual Identity (Spans 1 column) */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-1 rounded-[3rem] relative overflow-hidden shadow-2xl border-4 border-white group min-h-[500px]"
          >
            <Image
              src="/Images/about_expectations_bg.png"
              alt="Exceeding Expectations"
              fill
              style={{ objectFit: "cover" }}
              className="group-hover:scale-110 transition-transform duration-[3s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex flex-col justify-end p-10">
              <div className="w-12 h-1 bg-[#FF9933] mb-4"></div>
              <h3 className="text-white text-3xl font-black tracking-tight">
                Exceeding <br/> Expectations
              </h3>
            </div>
          </motion.div>

          {/* 3. Vision Card */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-1 bg-[#fff5eb] rounded-[3rem] p-12 shadow-sm relative overflow-hidden group hover:-translate-y-4 transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-2xl bg-white text-[#FF9933] flex items-center justify-center text-2xl mb-8 shadow-md group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-eye"></i>
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
              Our Vision
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              To be a global leader in software innovation, empowering businesses to excel in an increasingly digital world.
            </p>
          </motion.div>

          {/* 4. Mission Card */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-1 bg-[#f4f2ff] rounded-[3rem] p-12 shadow-sm relative overflow-hidden group hover:-translate-y-4 transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-2xl bg-white text-purple-600 flex items-center justify-center text-2xl mb-8 shadow-md group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-rocket"></i>
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              To develop world-class software solutions that transform businesses through efficiency, scalability, and long-term value.
            </p>
          </motion.div>

          {/* 5. Core Values */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-1 bg-white border border-gray-100 rounded-[3rem] p-12 shadow-sm group hover:shadow-2xl transition-all duration-500"
          >
            <h3 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">
              Core Values
            </h3>
            <ul className="space-y-8">
              {[
                ["Innovation", "Prioritizing customer needs and continually innovating."],
                ["Scalability", "Building solutions that grow with your business."],
                ["Excellence", "Delivering top-quality products for high performance."],
              ].map(([title, desc], i) => (
                <li key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 text-[#FF9933] font-bold text-lg border border-gray-100">
                    {i + 1}
                  </div>
                  <div>
                    <strong className="block text-gray-900 text-xl font-bold mb-1">
                      {title}
                    </strong>
                    <span className="text-gray-500 text-base leading-relaxed">
                      {desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
