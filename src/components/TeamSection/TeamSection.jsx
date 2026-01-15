'use client';

import React from 'react';
import { FocusCards } from '@/components/ui/focus-cards.jsx';
import {teamMembers as cards} from '@/utils/team.js'



export default function TeamSection() {
  return (
    <section id="team" className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 will-change-transform transform-gpu">
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
