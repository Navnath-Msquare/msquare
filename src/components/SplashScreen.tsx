"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

let hasShownSplash = false;

export default function SplashScreen() {
  // Splash नेहमी start ला दिसेल, पण जर आधी दाखवला असेल तर नाही
  const [showSplash, setShowSplash] = useState(!hasShownSplash);

  useEffect(() => {
    if (hasShownSplash) return;

    // 2 sec नंतर splash hide
    const timer = setTimeout(() => {
      hasShownSplash = true;
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Splash active असताना scroll बंद
  useEffect(() => {
    document.body.style.overflow = showSplash ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSplash]);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* <h1 className="text-3xl font-black mb-6 tracking-wide flex gap-2">
              <span className="text-[#FF9933]">MSquare</span>
              <span className="text-black">Software</span>
            </h1> */}

            <Image
              src="/assets/MSquareFinallogo.png"
              alt="MSquare Software Logo"
              width={280}
              height={100}
              className="object-contain drop-shadow-sm mb-8"
              priority
            />

            {/* Loading line */}
            <div className="w-[200px] h-1 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="w-full h-full bg-[#FF9933] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
