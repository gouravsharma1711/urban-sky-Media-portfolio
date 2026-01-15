"use client";

import React from "react";
import { motion } from "framer-motion";



function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="about" className="w-full bg-white py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        >
          {/* Section Header & Visual */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#4B1F6F]/10 rounded-full blur-3xl animate-pulse" />
            <h2 className="text-sm font-bold leading-7 text-[#4B1F6F] uppercase tracking-[0.3em]">
              Our Story
            </h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:leading-[1.1]">
              Crafting Digital <span className="text-[#4B1F6F]">Excellence</span>
            </p>
            <p className="mt-8 text-xl leading-relaxed text-gray-600 font-light">
              Urban Sky Media is a dynamic force in the digital landscape, where innovation meets strategic storytelling. We don&apos;t just create content; we build digital legacies.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-10">
            <div className="relative pl-14 group">
              <dt className="inline font-bold text-gray-900 text-xl">
                <div className="absolute left-0 top-0 h-10 w-10 flex items-center justify-center rounded-xl bg-[#4B1F6F]/5 text-[#4B1F6F] group-hover:bg-[#4B1F6F] group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                Excellence in Code.
              </dt>
              <dd className="block mt-2 text-gray-600 leading-relaxed font-light">
                We transform complex challenges into elegant digital experiences through clean architecture and user-centric design principles.
              </dd>
            </div>

            <div className="relative pl-14 group">
              <dt className="inline font-bold text-gray-900 text-xl">
                <div className="absolute left-0 top-0 h-10 w-10 flex items-center justify-center rounded-xl bg-[#4B1F6F]/5 text-[#4B1F6F] group-hover:bg-[#4B1F6F] group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                  </svg>
                </div>
                Modern Approach.
              </dt>
              <dd className="block mt-2 text-gray-600 leading-relaxed font-light">
                Leveraging cutting-edge technologies and performance-first methodologies to ensure your brand stays ahead of the curve.
              </dd>
            </div>

            <div className="relative pl-14 group">
              <dt className="inline font-bold text-gray-900 text-xl">
                <div className="absolute left-0 top-0 h-10 w-10 flex items-center justify-center rounded-xl bg-[#4B1F6F]/5 text-[#4B1F6F] group-hover:bg-[#4B1F6F] group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 019.918 5.84m-15.482 0a50.503 50.503 0 003.828 7.59m-5.07-7.59L12 10.5l8.59-4.814a50.503 50.503 0 00-3.828 7.59m0 0a52.284 52.284 0 01-5.69 1.256 52.284 52.284 0 01-5.69-1.256m11.38 0a50.503 50.503 0 00-3.828-7.59" />
                  </svg>
                </div>
                Continuous Growth.
              </dt>
              <dd className="block mt-2 text-gray-600 leading-relaxed font-light">
                Dedicated to ongoing evolution and data-driven insights that translate into measurable success for our partners.
              </dd>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
    </section>
  );
}

export default About;
