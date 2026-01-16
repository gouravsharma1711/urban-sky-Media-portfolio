"use client";

import React from 'react';
import { motion } from 'framer-motion';
import FloatingLines from './FloatingLines.jsx';

function HeroSection() {
    return (
        <section className='relative h-[700px] lg:h-screen min-h-[600px] overflow-hidden bg-slate-950' id='home'>
            <div className='absolute inset-0 z-0 opacity-60' >
                <FloatingLines 
                    enabledWaves={['top', 'middle', 'bottom']}
                    lineCount={6}
                    lineDistance={8}
                    bendRadius={5.0}
                    bendStrength={-0.4}
                    interactive={true}
                    parallax={true}
                />
            </div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-white tracking-tight leading-tight">
                        We&apos;re <span className="text-[#4B1F6F]">Urban Sky</span> Media 
                    </h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mt-4'
                    >
                        The Global Transformation Company
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='flex flex-col sm:flex-row gap-6 mt-10 justify-center'
                    >
                        <a className='px-10 py-4  rounded-full bg-[#4B1F6F] text-white font-bold text-lg hover:bg-[#3b1856] transition-all duration-300 shadow-[0_10px_20px_rgba(75,31,111,0.3)] hover:shadow-[0_15px_30px_rgba(75,31,111,0.4)] hover:-translate-y-1 transform' href='#contacts'>
                            Get Started
                        </a>
                        <a className='px-10 py-4 rounded-full border-2 border-white/30 backdrop-blur-md text-white font-bold text-lg hover:bg-white hover:text-slate-950 transition-all duration-300 hover:-translate-y-1 transform' href='#case-study'>
                            View Portfolio
                        </a>
                    </motion.div>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className='max-w-2xl mx-auto mt-10 text-sm md:text-base leading-relaxed text-gray-400 font-light'
                    >
                        Empowering brands from development and production management to marketing and sales.
                    </motion.p>
                </motion.div>
            </div>
            
            {/* Subtle bottom gradient for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
}

export default HeroSection;
