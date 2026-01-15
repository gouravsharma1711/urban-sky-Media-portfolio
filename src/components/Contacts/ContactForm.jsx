"use client";

import React from "react";

export default function ContactForm() {
  return (
    <section className="w-full flex justify-center py-8 px-4 animate-fade-in-up">
      <div
        className="
          w-full max-w-lg
          rounded-2xl
          bg-white/80 backdrop-blur-sm
          border border-purple-200/50
          shadow-2xl
          p-6 sm:p-8
          transition-all duration-500
          hover:shadow-3xl hover:border-purple-300/60
        "
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <h2
            className="
              text-2xl sm:text-3xl font-bold tracking-tight
              text-[#4B1F6F]
            "
          >
            Get in Touch
          </h2>
          <p className="mt-2 text-gray-600">
            Have a question or idea? Let’s talk.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 "
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              className="
                w-full rounded-xl
                border border-neutral-300
                bg-white/50
                px-4 py-3
                text-black
                outline-none
                transition-all duration-300
                focus:border-[#4B1F6F]
                focus:ring-2 focus:ring-[#4B1F6F]/40
                focus:bg-white
                hover:border-purple-400
              "
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Write your message here..."
              required
              className="
                w-full rounded-xl
                border border-neutral-300
                bg-white/50
                px-4 py-3
                text-black
                outline-none
                resize-none
                transition-all duration-300
                focus:border-[#4B1F6F]
                focus:ring-2 focus:ring-[#4B1F6F]/40
                focus:bg-white
                hover:border-purple-400
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full rounded-xl
              bg-gradient-to-r from-[#4B1F6F] to-[#5A2A82]
              py-3 font-semibold
              text-white
              transition-all duration-300
              hover:from-[#5A2A82] hover:to-[#6B3A92]
              hover:shadow-lg hover:scale-105
              focus:outline-none
              focus:ring-2 focus:ring-[#4B1F6F]/50
              active:scale-95
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
