"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function BrandIntro() {
  const [phase, setPhase] = useState("logo");

  useEffect(() => {
    const logoTimer = setTimeout(() => setPhase("text"), 1500);
    const textTimer = setTimeout(() => setPhase("complete"), 5000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
    };
  }, []);

  const brandName = "URBAN SKY MEDIA";

  return (
    <AnimatePresence>
      {phase !== "complete" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#02050F] overflow-hidden px-4"
        >
          {/* PHASES */}
          <AnimatePresence mode="wait">
            {phase === "logo" && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.15, filter: "blur(20px)" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="relative flex items-center justify-center">
                  <motion.div className="p-6 sm:p-8">
                    <Image
                      src="/images/logo.png"
                      alt="Urban Sky Media"
                      width={80}
                      height={80}
                      className="sm:w-[100px] sm:h-[100px]"
                      priority
                    />
                  </motion.div>

                  {/* Orbital Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-3 sm:-inset-4 rounded-full border border-white/10  border-t-[#4B1F6F]"
                  />
                </div>
              </motion.div>
            )}

            {/* TEXT PHASE */}
            {phase === "text" && (
              <motion.div
                key="text"
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Brand Name */}
                <div className="flex flex-wrap justify-center overflow-hidden">
                  {brandName.split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        delay: i * 0.04,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                      className={`font-black text-white text-2xl sm:text-4xl md:text-6xl tracking-[0.15em] sm:tracking-[0.2em] ${
                        letter === " " ? "mx-2 sm:mx-4" : ""
                      }`}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>

                {/* Divider */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="h-[2px] mt-6 bg-gradient-to-r from-transparent via-[#4B1F6F] to-transparent"
                />

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="mt-5 text-[11px] sm:text-[13px] md:text-[15px] font-semibold uppercase text-gray-400 tracking-[0.3em] sm:tracking-[0.45em]"
                >
                  Dynamic Digital Transformation
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#4B1F6F_0%,transparent_55%)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
