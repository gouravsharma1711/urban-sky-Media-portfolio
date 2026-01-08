"use client";

import React from 'react';
import { motion } from 'framer-motion';
import FloatingLines from './FloatingLines.jsx';

function HeroSection() {
    return (
        <section className='relative h-[700px] lg:h-screen min-h-[600px] overflow-hidden bg-slate-950'>
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
                        The Premier Platform For Strategic Marketing
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='flex flex-col sm:flex-row gap-4 mt-10 justify-center'
                    >
                        <button className='px-8 py-4 rounded-full bg-[#4B1F6F]  text-white font-bold text-base hover:bg-primary-400 transition-all duration-300 shadow-[#a448f0] hover:shadow-[0_0_30px_rgba(210,244,72,0.5)]'>
                            Get Started
                        </button>
                        <button className='px-8 py-4 rounded-full border border-white/20 backdrop-blur-md text-white font-semibold text-base hover:bg-white/10 transition-all duration-300'>
                            View Portfolio
                        </button>
                    </motion.div>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className='max-w-2xl mx-auto mt-10 text-sm md:text-base leading-relaxed text-gray-400 font-light'
                    >
                        Empowering brands through data-driven creativity and cutting-edge digital solutions. We don&apos;t just follow trends; we set them.
                    </motion.p>
                </motion.div>
            </div>
            
            {/* Subtle bottom gradient for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
}

export default HeroSection;
