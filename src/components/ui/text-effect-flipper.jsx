import React from "react";
import { motion } from "framer-motion"

const DURATION = 0.25
const STAGGER = 0.025

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      target="_blank"
      href={href}
      className="relative  block overflow-hidden whitespace-nowrap text-4xl font-semibold uppercase  dark:text-white/90 sm:text-5xl md:text-6xl mb-5 border"
      style={{
        lineHeight: 0.75,
      }}>
      <div className="inset-0 text-black">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block will-change-transform transform-gpu"
            key={i}>
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 text-[#4B1F6F]">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block will-change-transform transform-gpu"
            key={i}>
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
}

export default FlipLink
