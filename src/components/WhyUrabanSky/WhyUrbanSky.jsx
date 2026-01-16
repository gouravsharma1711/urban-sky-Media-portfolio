"use client";

import React, { useEffect, useState } from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import PageLoader from "../pageLoader/PageLoader.jsx";
import { ContentSection, TextParallaxContent } from "./TextParallaxContent.jsx";

function WhyUrbanSky() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <LazyMotion features={domAnimation}>
      <div className="font-display  bg-[#02050F] text-white">

        {/* HERO */}
        <section className="relative min-h-[100vh] flex items-center justify-center px-6 overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#4B1F6F_0%,transparent_55%)] opacity-40" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-5xl text-center"
          >
            <span className="inline-block mb-6 px-5 py-2 text-xs tracking-widest uppercase rounded-full bg-white/5 border border-white/10">
              Why Urban Sky
            </span>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
              Engineering Growth at the
              <span className="block text-[#4B1F6F] mt-2">
                Intersection of Tech & Influence
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              We don’t run campaigns. We build systems that scale brands, automate growth,
              and turn attention into predictable revenue.
            </p>
          </motion.div>
        </section>


        {/* PARALLAX CONTENT (KEPT) */}
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

        {/* CTA */}
        <section className="py-28 px-6 bg-[#f7f6fb] text-[#0f0f14]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Ready to <span className="text-[#4B1F6F]">Elevate</span> Your Brand?
            </h2>

            <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
              Let’s build systems that scale revenue, not just impressions.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-10 py-4 rounded-full bg-[#4B1F6F] text-white font-bold hover:bg-[#3b1856] transition"
                onClick={() => (window.location.href = "/#contacts")}
              >
                Start a Project
              </button>

              <button
                className="px-10 py-4 rounded-full border-2 border-[#4B1F6F] text-[#4B1F6F] font-bold hover:bg-[#4B1F6F] hover:text-white transition"
                onClick={() => (window.location.href = "/case-studies")}
              >
                View Case Studies
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </LazyMotion>
  );
}

export default WhyUrbanSky;
