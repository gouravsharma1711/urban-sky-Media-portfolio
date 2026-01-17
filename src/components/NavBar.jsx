"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Team", href: "/#team" },
    { name: "Contact", href: "/#contacts" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/#home" className="flex items-center gap-2">
            <Image
              src="/images/logo-optimized.png"
              alt="Urban Sky Media Logo"
              width={50}
              height={51}
              priority
            />
            <span
              className={`text-xl font-bold ${
                isScrolled ? "text-[#4B1F6F]" : "text-white"
              }`}
            >
              Urban Sky
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-sm font-bold transition-colors hover:text-[#4B1F6F] ${
                    isScrolled ? "text-gray-600" : "text-gray-200"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/why-urban-sky-media"
                className="px-6 py-2.5 rounded-full text-white bg-[#4B1F6F] text-sm font-bold hover:bg-[#3b1856] transition-all"
              >
                Why Us?
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-gray-900" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU (OUTSIDE NAV) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[80px] left-0 w-full z-40 md:hidden"
          >
            <div className="bg-[#02050F] px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white hover:text-[#7e44ad]"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/why-urban-sky-media"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 w-full text-center px-6 py-3 rounded-xl bg-[#4B1F6F] text-white font-bold"
              >
                Why Us?
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
