"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Users, Eye, Target, MousePointer2, TrendingUp } from "lucide-react";
import Image from "next/image";
import caseStudy from "@/utils/case-study";
import PageLoader from '@/components/pageLoader/PageLoader.jsx'

export default function CaseStudyPage({ params }) {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [metrics, setMatrics] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    try {
      const caseStudyId = id;
      const currCaseStudy = caseStudy.filter((item) => item.id == caseStudyId);

      if (currCaseStudy[0]) {
        setData(currCaseStudy[0]);

        setMatrics([
          {
            label: "Influencers",
            value: currCaseStudy[0].keyMetrics.influencers,
            icon: Users,
          },
          {
            label: "Reach",
            value: currCaseStudy[0].keyMetrics.reach,
            icon: Target,
          },
          {
            label: "Impressions",
            value: currCaseStudy[0].keyMetrics.impressions,
            icon: Eye,
          },
          {
            label: "Engagements",
            value: currCaseStudy[0].keyMetrics.engagements,
            icon: MousePointer2,
          },
        ]);
      }
    } catch (error) {
      console.log("Error : ", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [id]);

  if (isLoading || !data) {
    return <PageLoader />;
  }

  return (
    <main className="bg-gray-100 text-white ">
      {/* HERO */}
      <section className="relative mb-36">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={data?.image || ""}
            alt="Case study image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-30">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-5 py-2 rounded-full bg-black/60 text-xs tracking-widest uppercase text-white"
          >
            {data?.industry || "No Data"}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-5xl text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-white"
          >
            {data?.title || "No Title"}
          </motion.h1>

          <p className="mt-8 max-w-2xl text-gray-200 text-lg">
            A data-driven influencer marketing campaign designed to scale trust,
            visibility, and engagement at a national level.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 inset-x-0 z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-3xl p-8 shadow-xl translate-y-1/2">
              {metrics.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="text-center"
                  >
                    <Icon className="mx-auto w-6 h-6 text-[#4B1F6F] mb-3" />
                    <p className="text-3xl font-bold text-black">{m.value}</p>
                    <p className="text-sm text-gray-500">{m.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Blur Fade */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-[#f7f6fb]" />
      </section>

      {/* OVERVIEW */}
      <section className="bg-[#f7f6fb] text-[#111]">
        {/* Summar Section */}
        <section className="relative max-w-6xl mx-auto px-6 py-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative  bg-white p-12 md:p-16 shadow-sm"
          >
            {/* Accent Line */}
            <div className="absolute top-0 left-0 h-full w-1 bg-[#4B1F6F] rounded-full" />

            {/* Section Label */}
            <span className="block mb-6 text-xs font-semibold tracking-widest uppercase text-[#4B1F6F]">
              Summary
            </span>

            {/* Heading */}
            <h2 className="max-w-3xl text-3xl pb-6 border-b-2 border-gray-200 md:text-4xl font-bold leading-tight text-[#0f0f14]">
              {data?.title || "No Data"}
            </h2>

            {/* Content */}
            <div className="mt-10 space-y-6 max-w-4xl text-lg leading-relaxed text-gray-600">
              {data?.summarySection?.content?.length ? (
                data.summarySection.content.map((point, idx) => (
                  <p key={idx}>{point}</p>
                ))
              ) : (
                <p>No Data</p>
              )}
            </div>
          </motion.div>
        </section>

        {/* CONTENT SECTIONS */}
        <div className="max-w-6xl mx-auto px-6 pb-28 space-y-20">
          {data?.subHeading?.length ? (
            data.subHeading.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-none "
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-[#4B1F6F] mb-8">
                  {section?.heading ?? "No Data"}
                </h2>

                <ul className="space-y-5 text-gray-600 text-lg leading-relaxed">
                  {section.points?.length ? (
                    section.points.map((point, idx) => (
                      <li key={idx} className="flex gap-4">
                        {point}
                      </li>
                    ))
                  ) : (
                    <li>No Data</li>
                  )}
                </ul>
              </motion.div>
            ))
          ) : (
            <h1>No Data</h1>
          )}
        </div>

      </section>
    </main>
  );
}
