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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="w-full bg-white py-24 sm:py-32 overflow-hidden"
    >
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
              Crafting Full-Funnel{" "}
              <span className="text-[#4B1F6F]">Excellence</span>
            </p>
            <p className="mt-8 text-xl leading-relaxed text-gray-600 font-light">
              Urban Sky Media is a dynamic digital transformation company
              empowering brands from development and production management to
              marketing and sales through esports events, influencer networks,
              AI-powered campaigns, custom technology, and performance marketing
              across 100+ geographies.
              <br />
              <br />
              We don't just execute; we build integrated growth ecosystems that
              deliver measurable results for founders scaling globally.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-10">
            <div className="relative pl-14 group">
              <dt className="inline font-bold text-gray-900 text-xl">
                <div className="absolute left-0 top-0 h-10 w-10 flex items-center justify-center rounded-xl bg-[#4B1F6F]/5 text-[#4B1F6F] group-hover:bg-[#4B1F6F] group-hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 18l6-6-6-6M8 6l-6 6 6 6M14 4l-4 16"
                    />
                  </svg>
                </div>
                Development
              </dt>
              <dd className="block mt-2 text-gray-600 leading-relaxed font-light">
                Custom web/apps, CRMs, ERPs, dashboards built for performance
                and scale
              </dd>
            </div>

            <div className="relative pl-14 group">
              <dt className="inline font-bold text-gray-900 text-xl">
                <div className="absolute left-0 top-0 h-10 w-10 flex items-center justify-center rounded-xl bg-[#4B1F6F]/5 text-[#4B1F6F] group-hover:bg-[#4B1F6F] group-hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h11M9 21V3m12 8h-6m6 4h-6m6 4h-6"
                    />
                  </svg>
                </div>
                Production Management
              </dt>
              <dd className="block mt-2 text-gray-600 leading-relaxed font-light">
                Planning, workflows, quality control, BOMs, yield tracking, ERP
                optimization
              </dd>
            </div>

            <div className="relative pl-14 group">
              <dt className="inline font-bold text-gray-900 text-xl">
                <div className="absolute left-0 top-0 h-10 w-10 flex items-center justify-center rounded-xl bg-[#4B1F6F]/5 text-[#4B1F6F] group-hover:bg-[#4B1F6F] group-hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 8V4H8v4H4v4a4 4 0 004 4h8a4 4 0 004-4V8h-4zM8 20h8"
                    />
                  </svg>
                </div>
                Esports & Influencer Campaigns
              </dt>
              <dd className="block mt-2 text-gray-600 leading-relaxed font-light">
                400%+ ROI through tournaments, creator networks, live
                activations
              </dd>
            </div>
            <div className="relative pl-14 group">
              <dt className="inline font-bold text-gray-900 text-xl">
                <div className="absolute left-0 top-0 h-10 w-10 flex items-center justify-center rounded-xl bg-[#4B1F6F]/5 text-[#4B1F6F] group-hover:bg-[#4B1F6F] group-hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 17l6-6 4 4 8-8M14 7h7v7"
                    />
                  </svg>
                </div>
                Marketing
              </dt>
              <dd className="block mt-2 text-gray-600 leading-relaxed font-light">
                AI-powered SEO/ads, content strategy, influencer campaigns,
                performance optimization
              </dd>
            </div>
            <div className="relative pl-14 group">
              <dt className="inline font-bold text-gray-900 text-xl">
                <div className="absolute left-0 top-0 h-10 w-10 flex items-center justify-center rounded-xl bg-[#4B1F6F]/5 text-[#4B1F6F] group-hover:bg-[#4B1F6F] group-hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v18m9-9H3M16.5 7.5a8 8 0 11-9 9 8 8 0 019-9z"
                    />
                  </svg>
                </div>
                End-to-End Growth
              </dt>
              <dd className="block mt-2 text-gray-600 leading-relaxed font-light">
                From strategy to execution across inventory, VFX/CGI, and 100+
                geographies
              </dd>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
