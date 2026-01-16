"use client";

import React, { useState } from "react";
import FlipLink from "../ui/text-effect-flipper";
import {
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

import ThreadsIcon from "@/components/icons/ThreadIcon.jsx";

import XIcon from "@/components/icons/XIcon";
import ContactForm from "./ContactForm";

const socials = [
  { 
    idx:0,
    name: "Instagram",
    href: "https://www.instagram.com/urbansky_media/",
    Icon: Instagram,
  },
  {
    idx:1,
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/urbanskymedia/posts/?feedView=all&viewAsMember=true",
    Icon: Linkedin,
  },
  {
  idx: 2,
  name: "X.Com",
  href: "https://x.com/urbanskymedia",
  Icon: XIcon,
},
{
  idx: 3,
  name: "Facebook",
  href: "https://www.facebook.com/profile.php?id=61586565003957",
  Icon: Facebook,
},
];


function Page() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-50 to-white" id='contacts'>
      <div className="animate-fade-in-up text-center mb-8 will-change-transform transform-gpu">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#4B1F6F] tracking-tight">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Have a question or idea? We'd love to hear from you. Reach out and let's create something amazing together.
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8 items-center">
        {/* Left - Social Links */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-6 animate-fade-in-left will-change-transform transform-gpu">
          <h2 className="text-2xl font-semibold text-[#4B1F6F] mb-4">Follow Us</h2>
          <div className="space-y-4">
            {socials.map(({ name, href, Icon, idx }) => (
              <div
                key={name}
                className="group flex items-center gap-4 w-fit hover:scale-105 transition-all duration-300 will-change-transform transform-gpu"
              >
                {/* Icon */}
                {idx % 2 === 0 && (
                  <Icon
                    className="
                      w-12 h-12 md:w-16 md:h-16
                      bg-gradient-to-br from-black to-gray-800
                      text-white
                      rounded-xl
                      p-3
                      transition-all duration-300
                      group-hover:bg-[#4B1F6F]
                      group-hover:shadow-lg
                      group-hover:scale-110
                    "
                  />
                )}

                {/* FlipLink text */}
                <FlipLink href={href} className="text-lg md:text-xl font-medium">
                  {name}
                </FlipLink>

                {idx % 2 !== 0 && (
                  <Icon
                    className="
                      w-12 h-12 md:w-16 md:h-16
                      bg-gradient-to-br from-black to-gray-800
                      text-white
                      rounded-xl
                      p-3
                      transition-all duration-300
                      group-hover:bg-[#4B1F6F]
                      group-hover:shadow-lg
                      group-hover:scale-110
                    "
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="w-full md:w-1/2 animate-fade-in-right will-change-transform transform-gpu">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Page;
