"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/#' },
        { name: 'About', href: '/#about' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Team', href: '/#team' },
        { name: 'Contact', href: '/#contacts' },
    ];

    const clickHandler = () =>{
        window.location.href='/why-urban-sky-media';
    }

    return (
        <nav 
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled 
                ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' 
                : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="/#home" className="flex items-center gap-2 group">
                    <div className="w-10 h-10  rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
                        <img src='/images/logo.png' className='w-[90%] h-[90%]' ></img>
                    </div>
                    <span className={`text-xl font-bold tracking-tight transition-colors ${
                        isScrolled ? 'text-[#4B1F6F]' : 'text-white'
                    }`}>
                        Urban Sky
                    </span>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a 
                                href={link.href}
                                className={`text-sm font-bold transition-all hover:text-[#4B1F6F] relative group ${
                                    isScrolled ? 'text-gray-600' : 'text-gray-200'
                                }`}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4B1F6F] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                    <li>
                        <button 
                            className="px-6 py-2.5 rounded-full text-white bg-[#4B1F6F] text-sm font-bold hover:bg-[#3b1856] transition-all shadow-[0_4px_14px_0_rgba(75,31,111,0.39)] hover:shadow-[0_6px_20px_rgba(75,31,111,0.23)] hover:-translate-y-0.5"
                            onClick={clickHandler}
                        >
                            Why Us?
                        </button>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden mt-7 p-2  text-gray-500"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
                    ) : (
                        <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4  bg-[#02050F]">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-white hover:text-[#7e44ad] transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="mt-2 w-full px-6 py-3 rounded-xl bg-[#4B1F6F] text-white font-bold text-center">
                                Get in Touch
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default NavBar;
