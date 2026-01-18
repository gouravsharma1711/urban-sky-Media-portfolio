"use client";

import React, { useState } from "react";
import axios from "axios";
import { SyncLoader } from "react-spinners";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onClickHandler = async (e) => {
    e.preventDefault();

    if (isLoading) return;

    try {
      setIsLoading(true);

      const payload = { email, msg };

      const response = await axios.post("/api/v1/send-email", payload);

      if (response?.status === 200) {
        toast.success("Your message sent successfully");
        setEmail("");
        setMsg("");
      } else {
        toast.error("Service not available");
      }
    } catch (error) {
      toast.error("Service not available");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full flex justify-center py-8 px-4 animate-fade-in-up">
      <div className="w-full max-w-lg rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-200/50 shadow-2xl p-6 sm:p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4B1F6F]">
            Get in Touch
          </h2>
          <p className="mt-2 text-gray-600">
            Have a question or idea? Let’s talk.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={onClickHandler}>
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#4B1F6F]/40"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={5}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              required
              placeholder="Write your message here..."
              className="w-full rounded-xl border px-4 py-3 resize-none focus:ring-2 focus:ring-[#4B1F6F]/40"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-gradient-to-r from-[#4B1F6F] to-[#5A2A82] py-3 font-semibold text-white"
          >
            {isLoading ? <SyncLoader color="white" size={8} /> : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
