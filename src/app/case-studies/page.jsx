"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PerspectiveCard from "@/components/Cards/caseStudyCard.jsx";
import caseStudy from "@/utils/case-study";
import PageLoader from "@/components/pageLoader/PageLoader";

const images = [
  "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
  "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  "https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg",
  "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
];

function CaseStudiesPage() {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const clickHandler = () => {
    window.location.href = "/#contacts";
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* HERO SECTION - KINETIC CINEMATIC SLIDER */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${images[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-[#0a0a0a]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_90%)]" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block mb-8 px-6 py-2 text-[10px] font-black tracking-[0.4em] uppercase text-[#9d5cd1] border border-[#9d5cd1]/30 rounded-full bg-[#9d5cd1]/5 backdrop-blur-md"
            >
              Portfolio & Success Stories
            </motion.span>

            <h1 className="max-w-5xl text-5xl md:text-8xl font-extrabold tracking-tight leading-[0.95] text-white">
              Brands don&apos;t grow.
              <br />
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9D5CD1] to-[#4B1F6F]">
                They scale exponentially.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-12 max-w-2xl text-lg text-gray-400 font-medium leading-relaxed"
            >
              Every custom app we engineer, every CRM we automate, every esports
              event we orchestrate, every influencer campaign we ignite, every
              lifetime value system we architect crafts unbreakable growth
              infrastructure—from digital engineering and LTV optimization to
              full-funnel marketing dominance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16 flex flex-col items-center"
            ></motion.div>
          </motion.div>
        </div>
      </section>

      {/* GRID SECTION */}
      <section className="relative z-10 py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-xs font-black tracking-[0.5em] text-[#9d5cd1] uppercase mb-6">
                Selected Projects
              </h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
                CRAFTING <br /> THE FUTURE.
              </h3>
            </div>
            <div className="flex items-center gap-4 text-gray-500">
              <span className="text-4xl font-bold text-gray-500 tracking-tighter">
                {caseStudy.length}
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">
                Global <br /> Deployments
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {caseStudy.map((data, index) => (
              <motion.div
                key={`${data.title}-${index}`}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() =>
                  (window.location.href = `/case-studies/${data.id}`)
                }
                className="cursor-pointer"
              >
                <PerspectiveCard {...data} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-10 px-6 relative overflow-hidden bg-white ">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl max-h-96  rounded-full" />

        <div
          className="max-w-6xl mx-auto text-center relative z-10 border  py-24 rounded-4xl bg-black"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-none">
              READY TO SCALE <br />
              <span className="text-[#9d5cd1]">BEYOND LIMITS?</span>
            </h2>

            <button
              className="group relative px-12 py-6 bg-white text-[#0a0a0a] font-black text-sm tracking-widest uppercase rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
              onClick={clickHandler}
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-[#9d5cd1] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default CaseStudiesPage;
