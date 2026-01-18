"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#0f0f14] overflow-hidden px-6">
      {/* --- BACKGROUND GLOWS --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4B1F6F]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* --- ANIMATED GHOST & 404 --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8 relative inline-block"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#4B1F6F] mb-4 flex justify-center"
          >
            <Ghost size={100} strokeWidth={1.5} className="opacity-80 drop-shadow-[0_0_15px_rgba(75,31,111,0.5)]" />
          </motion.div>
          
          <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 select-none">
            404
          </h1>
        </motion.div>

        {/* --- TEXT CONTENT --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-md mx-auto leading-relaxed">
              The page you’re looking for doesn’t exist or has been moved.
              Let's get you back to familiar territory.
            </p>
          </div>

          {/* --- ACTION BUTTONS --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="group flex items-center gap-2 px-8 py-4 bg-[#4B1F6F] text-white rounded-full font-bold transition-all duration-300 hover:bg-[#5d2a8a] hover:shadow-[0_0_30px_rgba(75,31,111,0.4)] active:scale-95 w-full sm:w-auto justify-center"
            >
              <Home size={18} />
              Return Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="group flex items-center gap-2 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold transition-all duration-300 hover:bg-white/10 active:scale-95 w-full sm:w-auto justify-center"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>

      {/* --- DECORATIVE OVERLAY --- */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none" />
    </main>
  );
}
