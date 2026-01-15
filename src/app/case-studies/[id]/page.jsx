"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Eye, Target, MousePointer2, TrendingUp } from "lucide-react";
import Image from "next/image";

const data = {
  title: "Beauty Brand Awareness & Engagement Initiative",
  industry: "Beauty & Personal Care",
  image: "/images/profile.jpg",
  keyMetrics: {
    influencers: 8000,
    reach: 31000000,
    impressions: 28000000,
    engagements: 2990000,
    reachPerInfluencer: 3875,
    reachToImpressionRatio: 0.9,
  },
  subHeading: [
    {
      heading: "Summary",
      points: [
        "This case study presents a high-impact influencer marketing campaign executed for a leading Indian beauty brand, designed to maximize brand visibility, audience engagement, and consumer trust at a national scale.",
        "The campaign achieved a total reach of 31 million unique users, supported by 28 million impressions and 2.99 million engagement interactions.",
        "The reach efficiency of 3,875 users per influencer and a reach-to-impression ratio of 0.9x indicates strong penetration rather than repetitive exposure.",
        "These results align with broader industry trends, where 81% of brands report positive ROI from influencer marketing.",
      ],
    },
    {
      heading: "Campaign Architecture & Influencer Network",
      points: [
        "A diversified influencer model using nano, micro, and macro creators.",
        "Pan-India coverage across metro, tier-1, tier-2 and tier-3 cities.",
        "Instagram and YouTube used for both short-form discovery and long-form education.",
      ],
    },
    {
      heading: "Content Strategy & Execution",
      points: [
        "Tutorials, routines and before-after demonstrations.",
        "Authentic reviews and unboxing content.",
        "Polls, Q&A sessions and live demos to drive engagement.",
      ],
    },
  ],
};

const stats = [
  { label: "Influencers", value: "8,000", icon: Users },
  { label: "Reach", value: "31M", icon: Target },
  { label: "Impressions", value: "28M", icon: Eye },
  { label: "Engagements", value: "2.99M", icon: MousePointer2 },
];

export default function Page() {
  return (
    <div className="min-h-screen">

      {/* DARK HERO */}
      <section className="relative bg-[#0b0512] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4B1F6F]/40 via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7A3AA8,transparent_60%)] opacity-40" />

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm tracking-wide"
          >
            {data.industry}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight max-w-5xl"
          >
            {data.title}
          </motion.h1>
        </div>
      </section>

      {/* CASE STUDY */}
      <div className="bg-[#f8f7fb] text-[#1b1b1f]">

        {/* IMAGE + STATS */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[360px] rounded-3xl overflow-hidden shadow-xl bg-white"
          >
            <Image src={data.image} alt="case" fill className="object-cover" />
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
                >
                  <Icon className="w-6 h-6 text-[#4B1F6F] mb-4" />
                  <p className="text-3xl font-bold">{s.value}</p>
                  <p className="text-sm text-gray-500">{s.label}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-6xl mx-auto px-6 pb-24 space-y-16">
          {data.subHeading.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-sm"
            >
              <h2 className="text-2xl font-semibold mb-6 text-[#4B1F6F]">
                {sec.heading}
              </h2>

              <ul className="space-y-4 text-gray-600 leading-relaxed text-lg">
                {sec.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-[#4B1F6F] mt-1">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>

        {/* EFFICIENCY */}
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-[#4B1F6F] to-[#7A3AA8] rounded-3xl p-12 text-white shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <TrendingUp />
              <h3 className="text-2xl font-semibold">Campaign Efficiency</h3>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <p className="text-purple-200 text-sm">Reach per Influencer</p>
                <p className="text-4xl font-bold">
                  {data.keyMetrics.reachPerInfluencer}
                </p>
              </div>

              <div>
                <p className="text-purple-200 text-sm">
                  Reach to Impression Ratio
                </p>
                <p className="text-4xl font-bold">
                  {data.keyMetrics.reachToImpressionRatio}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
