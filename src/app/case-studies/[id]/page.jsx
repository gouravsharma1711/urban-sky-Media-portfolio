"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Users, Eye, Target, MousePointer2 } from "lucide-react";
import Image from "next/image";
import caseStudy from "@/utils/case-study";
import PageLoader from "@/components/pageLoader/PageLoader.jsx";

/* ------------------ UTIL: Number Formatter ------------------ */
const formatNumber = (num) => {
  if (!num && num !== 0) return "0";
  if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(1)}B`;
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num.toString();
};

export default function CaseStudyPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  /* ------------------ DATA FETCH (SYNC, FAST) ------------------ */
  useEffect(() => {
    if (!id) return;
    const result = caseStudy.find((item) => item.id === id);
    setData(result || null);
  }, [id]);

  /* ------------------ MEMOIZED METRICS ------------------ */
  const metrics = useMemo(() => {
    if (!data?.keyMetrics) return [];
    return [
      {
        label: "Influencers",
        value: formatNumber(data.keyMetrics.influencers),
        icon: Users,
      },
      {
        label: "Reach",
        value: formatNumber(data.keyMetrics.reach),
        icon: Target,
      },
      {
        label: "Impressions",
        value: formatNumber(data.keyMetrics.impressions),
        icon: Eye,
      },
      {
        label: "Engagements",
        value: formatNumber(data.keyMetrics.engagements),
        icon: MousePointer2,
      },
    ];
  }, [data]);

  if (!data) return <PageLoader />;

  return (
    <main className="bg-gray-100 text-white">
      {/* ---------------- HERO ---------------- */}
      <section className="relative mb-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={data.image}
            alt="Case study image"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 pt-28 md:pt-32 pb-48">
          {/* 👆 IMPORTANT: pb-48 reserves space for stats card */}

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-5 px-5 py-2 rounded-full bg-black/60 text-xs tracking-widest uppercase text-white"
          >
            {data.industry}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-white"
          >
            {data.title}
          </motion.h1>
        </div>

        {/* ---------------- STATS CARD ---------------- */}
        <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-white rounded-3xl p-6 md:p-8 shadow-xl">
              {metrics.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-center"
                  >
                    <Icon className="mx-auto w-5 md:w-6 h-5 md:h-6 text-[#4B1F6F] mb-2 md:mb-3" />
                    <p className="text-xl md:text-3xl font-bold text-black">
                      {m.value}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">
                      {m.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Fade */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-[#f7f6fb]" />
      </section>

      {/* ---------------- OVERVIEW ---------------- */}
      <section className="bg-[#f7f6fb] text-[#111]">
        {/* Summary */}
        <section className="max-w-6xl mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white p-8 md:p-16 shadow-sm"
          >
            <div className="absolute top-0 left-0 h-full w-1 bg-[#4B1F6F]" />

            <span className="block mb-6 text-xs font-semibold tracking-widest uppercase text-[#4B1F6F]">
              Summary
            </span>

            <h2 className="text-2xl md:text-4xl font-bold pb-6 border-b">
              {data.title}
            </h2>

            <div className="mt-8 space-y-6 text-gray-600 text-base md:text-lg">
              {data.summarySection?.content?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto px-6 pb-24 space-y-16">
          {data.subHeading?.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-3xl font-semibold text-[#4B1F6F] mb-6">
                {section.heading}
              </h2>

              <ul className="space-y-4 text-gray-600 text-base md:text-lg">
                {section.points?.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
