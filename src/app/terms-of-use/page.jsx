"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gavel } from "lucide-react";
import termsOfService from "@/utils/termsOfService";

export default function TermsOfServicePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="border-b border-gray-100">
        <div className="w-full bg-black text-white px-4 sm:px-6 py-16 sm:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/90 text-gray-800 text-xs font-medium uppercase tracking-wide"
          >
            <Gavel size={14} />
            Legal Agreement
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {termsOfService.title}
          </h1>

          <p className="text-gray-400 text-sm sm:text-base">
            Last updated: {termsOfService.lastUpdated}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="space-y-14 sm:space-y-16">
          {termsOfService.sections.map((section) => (
            <motion.article
              key={section.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5">
                {section.heading}
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                {section.content.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            Need clarification?
          </h3>

          <p className="text-gray-600 mb-6 max-w-xl mx-auto text-sm sm:text-base">
            If you have any questions about these Terms of Service or need legal
            clarification, please contact us.
          </p>

          <a
            href="mailto:legal@urbanskymedia.com"
            className="inline-block font-medium text-[#4B1F6F] hover:underline break-all sm:break-normal"
          >
            legal@urbanskymedia.com
          </a>
        </div>
      </section>
    </main>
  );
}
