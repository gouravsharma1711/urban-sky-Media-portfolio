import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";


const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
        willChange: "transform",
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/50"
        style={{
          opacity,
          willChange: "opacity",
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
        willChange: "transform, opacity",
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white pointer-events-none"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl font-display uppercase tracking-[0.3em] text-[#f6f4f7] font-bold">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-8xl tracking-tighter leading-tight max-w-5xl px-4">
        {heading}
      </p>
    </motion.div>
  );
};

const ContentSection = ({ title, description, buttonText = "Learn More" }) => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-4xl font-bold md:col-span-4 tracking-tight">
            {title}
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-8 text-xl text-neutral-600 md:text-2xl leading-relaxed">
                {description}
            </p>
            <Button 
              variant="outline" 
              className="rounded-full px-8 py-6 text-lg border-2 border-[#4B1F6F] text-[#4B1F6F] hover:bg-[#4B1F6F] hover:text-white transition-all duration-300"
            >
              {buttonText} <FiArrowUpRight className="ml-2" />
            </Button>
        </div>
    </div>
);


export {
  TextParallaxContent,
  ContentSection
}