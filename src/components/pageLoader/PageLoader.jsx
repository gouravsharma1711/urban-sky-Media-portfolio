'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PageLoader = () => {
  return (
    <div className="h-screen w-screen z-10 fixed overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-[#120916] via-[#1a0d24] to-[#0f0a14]">
      <div className="relative flex items-center justify-center">
        {/* Primary Orbital Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="absolute w-32 h-32 rounded-full border-2 border-white/5 border-t-[#9d5cd1] shadow-[0_0_20px_rgba(157,92,209,0.15)]"
        />

        {/* Central Logo */}
        <motion.div
          className="relative z-10 p-6 bg-[#0a0a0a] rounded-full"
        >
          <Image
            src="/images/logo.png"
            alt="Urban Sky Media"
            width={70}
            height={70}
            className=" brightness-200"
          />
        </motion.div>

        {/* Brand Glow Background */}
        <div className="absolute inset-0 bg-[#9d5cd1]/5 blur-[80px] rounded-full" />
      </div>

      {/* Loading Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-12 flex flex-col items-center"
      >
        <p className="text-xs tracking-[0.5em] text-white/40 uppercase">
          Loading..
        </p>
        <motion.div 
          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-[2px] bg-gradient-to-r from-transparent via-[#9d5cd1] to-transparent mt-3 w-16 opacity-30"
        />
      </motion.div>
    </div>
  );
};

export default PageLoader;
