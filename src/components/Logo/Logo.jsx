'use client'
import React from 'react'
import { LogoLoop } from '../ui/LogoLoop'

const techLogos = [
  { src: "/images/logo.png", alt: "Partner 1" },
  { src: "/images/samsung.svg", alt: "Partner 2" },
  { src: "/images/startbugs.jpg", alt: "Partner 3" },
];

function Logo() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-12">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-xl font-bold tracking-[0.3em] uppercase text-[#4B1F6F]  mb-4">
                        Strategic Partnerships
                    </h2>
                    <p className="text-3xl md:text-5xl font-bold tracking-tighter text-neutral-900 max-w-2xl">
                        Trusted by leading brands to redefine their digital horizon.
                    </p>
                </div>
            </div>
            
            <div className="relative py-10 transition-all duration-700 will-change-transform transform-gpu">
                <LogoLoop
                    logos={techLogos}
                    speed={60}
                    direction="left"
                    logoHeight={60}
                    gap={80}
                    pauseOnHover={true}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Our trusted partners"
                />
            </div>
            
            <div className="mt-12 flex justify-center">
                <div className="h-px w-24 bg-neutral-200"></div>
            </div>
        </section>
    )
}

export default Logo
