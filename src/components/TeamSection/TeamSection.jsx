'use client';

import React from 'react';
import { FocusCards } from '@/components/ui/focus-cards.jsx';

const cards = [
  {
    id: "a9K3xP2QmL",
    title: "Gourav Sharma",
    src: "/images/img3.jpg",
    position: "Lead Developer",
  },
  {
    id: "Q7PzM1Kx9L",
    title: "Varun Sharma",
    src: "/images/img2.jpg",
    position: "CEO & Founder",
  },
  {
    id: "M2xLQK9P7A",
    title: "Sarah Jenkins",
    src: "/images/img3.jpg",
    position: "Creative Director",
  },
  {
    id: "K8P9LxM2Q7",
    title: "David Chen",
    src: "/images/img1.jpg",
    position: "Strategy Head",
  },
  {
    id: "P9Q7M2LxK8",
    title: "Emma Wilson",
    src: "/images/img3.jpg",
    position: "Marketing Manager",
  },
  {
    id: "xM9L7P2QK8",
    title: "Alex Rivera",
    src: "/images/img2.jpg",
    position: "UX Designer",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg font-bold leading-7 text-[#4B1F6F] uppercase tracking-widest">
            Expert Minds
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Meet Our Team
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            A diverse group of professionals dedicated to pushing the boundaries of digital excellence and client success.
          </p>
        </div>
        
        <FocusCards cards={cards}/>

        
      </div>
    </section>
  );
}
