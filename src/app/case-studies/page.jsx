"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PerspectiveCard from "@/components/Cards/caseStudyCard.jsx";
import caseStudy from "@/utils/case-study";

const images = [
  "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
  "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  "https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg",
  "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
];

export default function CaseStudiesPage() {
  const [index, setIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const cards = useMemo(() => caseStudy, []);

  const clickHandler = () => {
    window.location.href = "/#contacts";
  };

  /* ---------- START SLIDER AFTER FIRST PAINT ---------- */
  useEffect(() => {
    const start = setTimeout(() => setHasStarted(true), 100);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden backdrop-blur-3xl">
        {/* Background Image (Instant Paint) */}
        <Image
          src={images[0]}
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Contrast-Safe Overlay (works on dark & light images) */}
        <div className="absolute z-10 inset-0 bg-black/30" />
        <div className="absolute z-10 inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

        {/* Animated Slides (after first paint) */}
        <AnimatePresence>
          {hasStarted && (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={images[index]}
                alt="Hero background animated"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full px-6">
          <div className="mx-auto max-w-[420px] sm:max-w-xl md:max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              {/* Badge */}
              <span
                className="mb-6 px-5 py-2 text-[10px] font-black tracking-[0.35em] uppercase rounded-full
          text-white/90 border border-white/20
          bg-white/10 backdrop-blur-md"
              >
                Portfolio & Success Stories
              </span>

              {/* Headline */}
              <h1
                className="text-[2.4rem] sm:text-4xl md:text-7xl xl:text-8xl font-extrabold leading-[1.05]
          text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
              >
                Brands don&apos;t grow.
                <span
                  className="block mt-2 bg-clip-text text-transparent
            bg-gradient-to-r from-[#C084FC] via-[#9D5CD1] to-[#4B1F6F]"
                >
                  They scale exponentially.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p
                className="mt-6 sm:mt-8 max-w-md sm:max-w-xl
          text-[15px] sm:text-lg font-medium leading-relaxed
          text-white/85 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
              >
                We build growth systems that compound — from digital products
                and automation to influencer ecosystems and performance
                marketing.
              </p>

              {/* Primary CTA */}
              <button
                onClick={clickHandler}
                className="mt-10 z-12 px-10 py-4 rounded-full
          bg-white text-black font-black text-xs tracking-widest uppercase
          transition-all hover:scale-105 active:scale-95
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
              >
                Start Your Journey
              </button>

              {/* Mobile Scroll Cue */}
              <div className="mt-14 flex flex-col items-center md:hidden opacity-70">
                <span className="text-[10px] tracking-widest uppercase text-white/60">
                  Scroll
                </span>
                <div className="mt-2 w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- GRID ---------------- */}
      <section className="relative z-10 py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {cards.map((data) => (
              <PerspectiveCard key={data.id} {...data} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center border py-24 rounded-4xl bg-black">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">
            READY TO SCALE <br />
            <span className="text-[#9d5cd1]">BEYOND LIMITS?</span>
          </h2>

          <button
            onClick={clickHandler}
            className="mt-12 px-12 py-6 bg-white text-black font-black text-sm tracking-widest uppercase rounded-full transition-transform hover:scale-105"
          >
            Start Your Journey
          </button>
        </div>
      </section>
    </main>
  );
}
