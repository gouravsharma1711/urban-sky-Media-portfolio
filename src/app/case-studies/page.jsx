'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PerspectiveCard from '@/components/Cards/caseStudyCard.jsx';
import LightPillar from '@/components/LightPillar';

const caseStudies = [
  {
    image: "/images/img1.jpg",
    type: "Digital Strategy",
    alt: "digitalStrategy",
    title: "Global Brand Expansion",
    description: "Successfully scaled a tech startup's digital presence across 12 countries, resulting in a 300% increase in organic traffic."
  },
  {
    image: "/images/img2.jpg",
    type: "UI/UX Design",
    alt: "uiuxDesign",
    title: "Eco-Friendly Marketplace",
    description: "Designed and developed a seamless e-commerce experience focused on sustainability and user conversion optimization."
  },
  {
    image: "/images/img3.jpg",
    type: "Web Development",
    alt: "webDev",
    title: "SaaS Performance Boost",
    description: "Refactored a complex enterprise dashboard, improving load times by 60% and enhancing overall user satisfaction."
  },
  {
    image: "/images/img2.jpg",
    type: "Marketing",
    alt: "marketing",
    title: "Viral Campaign ROI",
    description: "Executed a cross-platform social media campaign that generated over 1M impressions and 5x return on ad spend."
  },
  {
    image: "/images/img1.jpg",
    type: "Brand Identity",
    alt: "brandIdentity",
    title: "Artisanal Coffee Rebrand",
    description: "Revitalized a legacy coffee brand with a modern visual identity, appealing to a younger demographic and increasing sales by 45%."
  },
  {
    image: "/images/img3.jpg",
    type: "Mobile App",
    alt: "mobileApp",
    title: "Fitness Tracker Proooooooo",
    description: "Developed a high-performance fitness app with real-time biometric tracking and social community features."
  },
  {
    image: "/images/img2.jpg",
    type: "SEO Optimization",
    alt: "seo",
    title: "Real Estate Portal Growth",
    description: "Implemented a comprehensive SEO strategy that propelled a regional real estate portal to the first page of search results."
  },
  {
    image: "/images/img1.jpg",
    type: "Content Strategy",
    alt: "contentStrategy",
    title: "B2B Tech Thought Leadership",
    description: "Curated and distributed high-value content that established a B2B SaaS company as an industry authority."
  }
];

function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-25 bg-[#0a0a0a] overflow-hidden flex items-center">

  {/* Soft brand glow */}
  <div className="absolute inset-0">
    <div className="absolute -top-1/3 -left-1/4 w-[60rem] h-[60rem] bg-[#4B1F6F]/25 blur-[180px]" />
    <div className="absolute -bottom-1/3 -right-1/4 w-[60rem] h-[60rem] bg-[#9d5cd1]/20 blur-[180px]" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* LEFT: Story */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center lg:text-left"
    >
      <span className="inline-block mb-6 px-4 py-2 text-xs tracking-widest uppercase text-[#9d5cd1] border border-[#4B1F6F]/40 rounded-full bg-[#4B1F6F]/10">
        Client Success Stories
      </span>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
        Brands don’t grow  
        <br />
        by chance.
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d5cd1] to-[#4B1F6F]">
          They grow by design.
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-lg text-gray-300">
        Every case study is a story of strategy, creativity, and execution.
        See how we’ve helped ambitious brands increase visibility,
        conversions, and customer loyalty.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <button className="px-8 py-4 rounded-xl bg-[#4B1F6F] text-white font-semibold shadow-xl hover:bg-[#5d2a88] transition">
          View Case Studies
        </button>
        <button className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
          Let’s Work Together
        </button>
      </div>
    </motion.div>

    {/* RIGHT: Brand collage */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="relative"
    >
      <div className="relative hidden lg:grid grid-cols-2 gap-4 rotate-3 ">
        {[
        { title: "Brand Campaign", name: "brand.jpg" },
        { title: "E-commerce Growth", name: "ecomm.jpg" },
        { title: "Brand Building", name: "brandBuilding.jpg" },
        { title: "Marketing Website", name: "customer.jpg" },
        ].map((obj) => (
        <motion.div
            key={obj.name}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative h-56 rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
        >
    {/* Image */}
    <img
      src={`/images/${obj.name}`}
      alt={obj.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

    {/* Glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_bottom,_#9d5cd1_0%,transparent_70%)]" />

    {/* Content */}
    <div className="relative z-10 p-6 h-full flex flex-col justify-end">

      <h3 className="text-xl font-bold text-white leading-tight">
        {obj.title}
      </h3>

      <p className="mt-2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition duration-500">
        See how we helped this brand achieve measurable growth through strategy and design.
      </p>
    </div>
  </motion.div>
))}
      </div>
    </motion.div>

  </div>
</section>


      {/* Grid Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold leading-7 text-[#652798] uppercase tracking-[0.2em]">
                Selected Projects
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Featured Works
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-sm font-medium text-gray-500">Showing {caseStudies.length} results</span>
            </div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {caseStudies.map((data, index) => (
              <motion.div
                key={`${data.title}-${index}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <PerspectiveCard {...data} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#4B1F6F] rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
          >
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full -ml-32 -mb-32 blur-3xl" />
            
            <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-8">
              Ready to start your <br /> next success story?
            </h2>
            <button className="relative z-10 px-10 py-4 bg-white text-[#4B1F6F] font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl hover:scale-105">
              Let&apos;s Work Together
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default CaseStudiesPage;
