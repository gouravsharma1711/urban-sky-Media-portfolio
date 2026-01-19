"use client";

import React from "react";
import FlipLink from "../ui/text-effect-flipper";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import XIcon from "@/components/icons/XIcon";

const socials = [
  {
    idx: 0,
    name: "Instagram",
    href: "https://www.instagram.com/urbansky_media/",
    Icon: Instagram,
  },
  {
    idx: 1,
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
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-purple-50 to-white"
      id="contacts"
    >
      {/* Header */}
      <div className="animate-fade-in-up text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4B1F6F] tracking-tight">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Have a question or idea? We'd love to hear from you. Reach out and
          let’s create something impactful together.
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-12 items-stretch">
        {/* Left - Social Links */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 animate-fade-in-left">
          <h2 className="text-3xl font-semibold text-[#4B1F6F]">
            Follow Us
          </h2>

          {socials.map(({ name, href, Icon, idx }) => (
            <div
              key={name}
              className="group flex items-center gap-5 w-fit transition-transform hover:scale-105"
            >
              {idx % 2 === 0 && (
                <Icon className="w-14 h-14 bg-black text-white rounded-xl p-3 group-hover:bg-[#4B1F6F] transition" />
              )}

              <FlipLink href={href} className="text-xl font-medium">
                {name}
              </FlipLink>

              {idx % 2 !== 0 && (
                <Icon className="w-14 h-14 bg-black text-white rounded-xl p-3 group-hover:bg-[#4B1F6F] transition" />
              )}
            </div>
          ))}
        </div>

        {/* Right - Larger Contact Box */}
        <div className="w-full md:w-1/2 animate-fade-in-right">
          <div className="relative h-full overflow-hidden rounded-[2rem] border border-gray-200 bg-white px-10 py-14 shadow-2xl">


            <h3 className="text-4xl font-bold text-gray-900 tracking-tight max-w-md">
              Let’s Build Something Together
            </h3>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
              Have an idea, a project, or just want to say hello?  
              Reach out directly and our team will get back to you shortly.
            </p>

            <div className="mt-10">
              <a
                href="mailto:"
                className="inline-flex items-center justify-center rounded-2xl bg-[#4B1F6F] px-8 py-4 text-lg font-medium text-white hover:bg-[#3a1756] transition shadow-lg"
              >
                Contact Us
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
