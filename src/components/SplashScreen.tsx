"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

let hasShownSplash = false;

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Check if splash was already shown in this session
    try {
      if (sessionStorage.getItem("msquare_splash_shown") || hasShownSplash) {
        setShowSplash(false);
        return;
      }
    } catch {
      // In case sessionStorage is blocked
    }

    setShowSplash(true);

    const timer = setTimeout(() => {
      hasShownSplash = true;
      try {
        sessionStorage.setItem("msquare_splash_shown", "true");
      } catch {}
      setShowSplash(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    hasShownSplash = true;
    try {
      sessionStorage.setItem("msquare_splash_shown", "true");
    } catch {}
    setShowSplash(false);
  };

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          onClick={handleDismiss}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white cursor-pointer select-none"
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
