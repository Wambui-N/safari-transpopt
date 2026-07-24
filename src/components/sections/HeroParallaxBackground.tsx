"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function HeroParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 -top-[10%] h-[120%]"
      >
        <Image
          src="/images/truck1.jpg"
          alt="Land Cruiser parked on a safari route"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-dark)] via-[var(--color-bg-dark)]/40 to-[var(--color-bg-dark)]/70"
        aria-hidden="true"
      />
    </div>
  );
}
