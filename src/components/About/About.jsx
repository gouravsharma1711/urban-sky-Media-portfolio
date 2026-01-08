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
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/10 rounded-full blur-3xl" />
            <h2 className="text-lg font-bold leading-7 text-[#4B1F6F] uppercase tracking-widest">
              Our Story
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About Urban Sky Media
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A dedicated team of innovators, creators, and problem-solvers working together to push the boundaries of what&apos;s possible in the digital space.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <div className="absolute left-1 top-1 h-5 w-5 text-[#4B1F6F">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                Excellence in Code.
              </dt>
              <dd className="inline text-gray-600 ml-2">
                We are a passionate team with a strong focus on building
                scalable, user-centric web applications. Our work revolves around
                transforming complex problems into simple, elegant solutions through
                clean architecture and thoughtful design.
              </dd>
            </div>

            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <div className="absolute left-1 top-1 h-5 w-5 text-[#4B1F6F]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                  </svg>
                </div>
                Modern Approach.
              </dt>
              <dd className="inline text-gray-600 ml-2">
                We have developed a deep interest in modern frontend
                technologies, performance optimization, and creating seamless user
                experiences. We value clarity, maintainability, and efficiency in every
                piece of code we write.
              </dd>
            </div>

            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <div className="absolute  left-1 top-1 h-5 w-5 text-[#4B1F6F]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 019.918 5.84m-15.482 0a50.503 50.503 0 003.828 7.59m-5.07-7.59L12 10.5l8.59-4.814a50.503 50.503 0 00-3.828 7.59m0 0a52.284 52.284 0 01-5.69 1.256 52.284 52.284 0 01-5.69-1.256m11.38 0a50.503 50.503 0 00-3.828-7.59" />
                  </svg>
                </div>
                Continuous Growth.
              </dt>
              <dd className="inline text-gray-600 ml-2">
                Beyond technical skills, we strongly believe in continuous learning,
                collaboration, and adaptability. We strive to stay ahead by refining our skills and embracing best practices
                that lead to long-term, sustainable software.
              </dd>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
