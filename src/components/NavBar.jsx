"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
        { name: 'Home', href: '/' },
        { name: 'About', href: '/#about' },
        { name: 'Services', href: '#' },
        { name: 'Case Studies', href: '/#projects' },
        { name: 'Contact', href: '#' },
    ];

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
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-10 h-10  rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
                        <img src='/images/logo.png'></img>
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
                                className={`text-sm font-medium transition-colors hover:text-[#703a9d] ${
                                    isScrolled ? 'text-gray-600' : 'text-gray-200'
                                }`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button className="px-5 py-2.5 rounded-full text-white bg-[#4B1F6F] text-black text-sm font-bold hover:bg-primary-400 transition-all shadow-lg ">
                            Get in Touch
                        </button>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden mt-7 p-2 text-gray-500"
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
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-gray-600 hover:text-[#7e44ad] transition-colors"
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
