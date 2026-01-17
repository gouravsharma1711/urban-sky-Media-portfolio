"use client";

import React from "react";
import { motion } from "framer-motion";
import PerspectiveCard from "@/components/Cards/caseStudyCard.jsx";
import caseStudy from "@/utils/case-study";

function CaseStudySection() {
  const buttonHandler = () => {
    window.location.href = "/case-studies";
  };

  return (
    <section id="case-study" className="bg-slate-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-lg font-bold  leading-7 text-[#652798] uppercase tracking-widest">
              Selected Works
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Case Studies
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover how we've helped industry leaders transform their digital
              landscape through innovation and strategic design.
            </p>
          </div>
          <button
            className="hidden md:block px-8 py-3 rounded-full border border-gray-200 bg-white text-gray-900 font-bold hover:border-[#4B1F6F] hover:text-primary-600 transition-all"
            onClick={buttonHandler}
          >
            View All Projects
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smoother feel
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 will-change-transform transform-gpu"
        >
          {caseStudy.slice(0, 4).map((data, index) => (
            <PerspectiveCard key={`${data.title}-${index}`} {...data} />
          ))}
        </motion.div>

        <div className="mt-12 text-center md:hidden">
          <button className="w-full px-8 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 font-bold">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default CaseStudySection;
