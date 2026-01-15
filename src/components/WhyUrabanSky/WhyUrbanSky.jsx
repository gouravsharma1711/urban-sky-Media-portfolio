"use client";
import React, { useRef } from "react";
import { domAnimation ,LazyMotion, motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { ContentSection, TextParallaxContent } from "./TextParallaxContent.jsx";

function WhyUrbanSky() {
  return (
    <LazyMotion features={domAnimation}>
    <div className="font-display pt-20 bg-gradient-to-br from-black via-[#2a103d] to-[#4B1F6F] ">
      <section className="relative h-[70vh] flex flex-col items-center justify-center px-4 overflow-hidden">
        
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center"
        >
          <h1 className="text-5xl md:text-[12rem] font-bold tracking-tighter leading-none mb-6 text-white">
            WHY <span className="text-[#4B1F6F]">URBAN SKY</span>?
          </h1>
          <p className="text-lg md:text-2xl text-white max-w-3xl mx-auto uppercase tracking-[0.2em] font-medium">
            Redefining the horizon of Digital Engineering and Full Fledge marketing 
          </p>
        </motion.div>
      </section>

      <TextParallaxContent
        imgUrl="/images/img1.jpg"
        subheading="DIGITAL Engineering "
        heading="Turn Attention Into Revenue."
      >
        <ContentSection
          title="Digital Engineering Services"
          description="Urban Sky Media builds custom web/mobile apps (React/Node.js/MERN), CRM/ERP systems with real-time analytics, production workflows (BOMs, yield tracking), API integrations, inventory automation, and VFX/CGI pipelines that drive 30-50% operational efficiency gains and seamless marketing execution."
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="/images/brandBuilding.jpg"
        subheading="Lifetime Growth"
        heading="Build Growth That Never Slows Down"
      >
        <ContentSection
          title="Lifetime Growth"
          description="Urban Sky Media builds sustainable revenue systems that compound over time—through customer retention strategies, CRM automation, predictive analytics, repeat purchase funnels, loyalty programs, and performance marketing that deliver 3-5x LTV while reducing acquisition costs by 25-40%."
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="/images/img2.jpg"
        subheading="Full Fledge Marketing "
        heading="We Influence People for you "
      >
        <ContentSection
          title="Full Fledge Marketing"
          description="Urban Sky Media delivers complete marketing execution—from AI-powered SEO/ads and content strategy to influencer campaigns, esports activations, performance funnels, social media management, and creative production (VFX/CGI) that drive consistent revenue growth across acquisition, activation, retention, and monetization."
        />
      </TextParallaxContent>

      <section className="py-24 px-4 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-4xl font-bold text-[#4B1F6F]">01</span>
              <h3 className="text-2xl font-bold">Innovation First</h3>
              <p className="text-neutral-600 leading-relaxed">We stay ahead of digital trends to ensure your brand never falls behind.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-4xl font-bold text-[#4B1F6F]">02</span>
              <h3 className="text-2xl font-bold">Data Driven</h3>
              <p className="text-neutral-600 leading-relaxed">Every creative decision is backed by analytics and market research.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-4xl font-bold text-[#4B1F6F]">03</span>
              <h3 className="text-2xl font-bold">Client Obsessed</h3>
              <p className="text-neutral-600 leading-relaxed">Your success is our only metric. We build long-term partnerships, not just campaigns.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">
            READY TO <span className="text-[#4B1F6F]">ELEVATE</span> YOUR BRAND?
          </h2>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
            Let's create something extraordinary together. Join the ranks of brands that are redefining their industries.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-[#4B1F6F] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#3b1856] transition-all duration-300 transform hover:scale-105">
              Get Started Now
            </button>
            <button className="border-2 border-[#4B1F6F] text-[#4B1F6F] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#4B1F6F] hover:text-white transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
    </LazyMotion>
  );
}

export default WhyUrbanSky;
