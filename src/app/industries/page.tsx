"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function IndustriesComingSoon() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#05070a] overflow-hidden flex items-center justify-center font-sans">
      {/* Dynamic Background Glow */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40 z-0"
        animate={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 153, 51, 0.15), transparent 80%)`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.1 }}
      />

      {/* Floating abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF9933]/10 rounded-full blur-3xl mix-blend-screen"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl mix-blend-screen"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Subtle Tagline */}
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9933] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF9933]"></span>
            </span>
            <span className="text-gray-300 text-sm font-semibold tracking-widest uppercase">
              Innovation in Progress
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-tight"
          >
            Industries <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-[#ffb86d] to-[#FF9933] animate-gradient bg-[length:200%_auto]">
              Coming Soon
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed mb-12"
          >
            We are engineering highly specialized technology solutions for diverse operating environments. Something extraordinary is on the way.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/"
              className="px-8 py-4 bg-white text-[#05070a] rounded-full font-bold text-sm tracking-wide hover:bg-gray-100 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 w-full sm:w-auto"
            >
              <i className="fa-solid fa-arrow-left mr-2"></i> Back to Home
            </Link>
            
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-full font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-300 w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Interactive Floating Particles for extra depth */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/20 rounded-full"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
