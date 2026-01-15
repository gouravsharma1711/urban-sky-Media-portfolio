"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered,
  onClick
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    onClick={onClick}
    className={cn(
      "rounded-3xl relative bg-gray-100 overflow-hidden h-[400px] w-full transition-all duration-500 ease-out cursor-pointer border border-gray-100 will-change-[transform,filter,opacity] transform-gpu",
      hovered !== null && hovered !== index && "blur-[2px] scale-[0.98] grayscale"
    )}>
    <Image 
      src={card.image}
      alt={card.name} 
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105" 
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
    />
    <div
      className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 transition-opacity duration-500",
        hovered === index ? "opacity-100" : "opacity-0"
      )}>
      <div className="w-full">
        <div className="text-primary-400 text-xs text-white font-bold tracking-widest uppercase mb-1">{card.role}</div>
        <div className="text-2xl font-bold text-white">{card.name}</div>
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({
  cards
}) {
  const [hovered, setHovered] = useState(null);

  const onClickHandler=(id)=>{
    console.log("Id : ",id);
    window.location.href = `/profile/${id}`;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered} 
          onClick={()=>onClickHandler(card.id)}
          />
      ))}
    </div>
  );
}
